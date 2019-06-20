import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navbar: {
      invert: false,
    },
    isPopupOpened: false,
  },
  mutations: {
    updateNavbar(state, payload) {
      state.navbar = payload;
    },
    popupOpened(state) {
      state.isPopupOpened = true;
    },
  },
  actions: {

  },
});
