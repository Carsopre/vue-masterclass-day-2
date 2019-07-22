// TODO: import Vue and Vuex
import Vue from 'vue'
import Vuex from 'vuex'

// TODO: install Vuex to Vue
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        messages: [],
        user: {},
    },
    mutations:{

    },

    strict: true,
});

// TODO: Export store object with messages [] and user {} in it
export default store
