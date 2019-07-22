<template>
    <div class="emoji-picker">
        <button 
            v-for="emoji in emojis"
            :key="emoji"
            @click="onSelectedEmoji(emoji)"
            type="button"
            >
            {{emoji}}
        </button>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
        emojis: [
            "😀",
            "😂",
            "😁"
        ]
    };
  },
  methods: {
    onSelectedEmoji(selected) {
      if (selected !== "") {
        this.$emit("pick", selected);
      }
    }
  }
};
</script>

<style>
.emoji-picker {
  -webkit-appearance: none;
  background: none;
  outline: none;
  font: inherit;
  /* flex: 1; */
  border-radius: 5px;
  border: 2px solid var(--secondary-color);
  padding: 0.1em 0.1em;
}

</style>
