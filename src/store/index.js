import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageHero: {
      show: false,
      text: '',
    },
    isPopupOpened: false,
  },
  mutations: {

    updatePageHero(state, payload) {
      state.pageHero = payload;
    },

    popupOpened(state) {
      state.isPopupOpened = true;
    },
  },
  actions: {

  },
});
