import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageHero: {
      show: false,
      text: '',
    },
    isPopupOpened: false,
    token: '',
  },
  mutations: {
    updatePageHero(state, payload) {
      state.pageHero = payload;
    },

    popupOpened(state) {
      state.isPopupOpened = true;
    },

    updateToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      const result = await auth.getToken({ username, password });
      commit('updateToken', result.data.access_token);
    },
  },

  getters: {
    isAdmin: (state) => !!state.token,
  },
});
