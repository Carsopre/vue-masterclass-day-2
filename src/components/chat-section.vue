<template>
  <section class="chat-section">
    <!-- show the message below when an error has occured within the application -->
    <p class="error" v-for="errMssg in errors" :key="errMssg">Sorry, the following error occurred: {{errMssg}}. Please try again later!</p>
    <div ref="messages" class="chat-section__messages">
      <message-list :messages="messages"/>
    </div>
    <message-field @submit="onSubmit" class="chat-section__field"/>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MessageList from "./message-list";
import MessageField from "./message-field";

export default {
  components: {
    MessageList,
    MessageField
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      errors: [],
    }
  },
  errorCaptured(error, vm, info) {
    // this.error = true;
    // console.log('Error found')
    if( this.errors.find(err => err == error.message))
    {
        return false;
    }

    this.errors.push(error.message)
    return false;
  },
  computed: {
    ...mapGetters(['currentUser']),
    hasErrors(){
      return errors.length > 0
    },
  },
  methods: {
    ...mapActions(['sendMessage']),
    createMessage() {
      return {
        date: new Date(),
        user: this.currentUser._id,
        id: this.messages.length,
        channel: this.$route.params.channelId
      };
    },
    onSubmit(text) {
      let message = this.createMessage();

      if (text.indexOf("/cat") === 0) {
        message.messageType = "cat";
      } else {
        message.messageType = "text";
        message.text = text;
      }

      return this.sendMessage(message);
    }
  }
};
</script>

<style>
.chat-section {
  display: flex;
  flex-direction: column;
  grid-area: c;
}

.chat-section__messages {
  flex: 1;
  overflow: auto;
}
</style>
