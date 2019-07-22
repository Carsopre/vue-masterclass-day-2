import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: "Anoniempje",
      avatar: "./images/avatar.png"
    },
    messages: [],
    searching: false,
    searchText: ''
  },
  mutations: {
    // TODO: add mutation for adding a message
    addMssg(state, mssg){
        state.messages.push(mssg)
    },
    updateUser(state, userData) {
      state.user = { ...state.user, ...userData }
    },
    setSearching(state, status) {
      state.searching = status
    },
    setSearchText(state, query) {
      state.searchText = query
    }
  }
})
