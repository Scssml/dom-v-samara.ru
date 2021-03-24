import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollTop: 0,
    showPopupQuiz: false,
    showPopupFeedback: false,
    showPopupSpecial: false,
    disablePopupSpecial: false,
    showSidebar: false,
  },
  getters: {
    getScrollTop: (state) => state.scrollTop,
    getShowPopupQuiz: (state) => state.showPopupQuiz,
    getShowPopupFeedback: (state) => state.showPopupFeedback,
    getShowPopupSpecial: (state) => state.showPopupSpecial,
    getDisablePopupSpecial: (state) => state.disablePopupSpecial,
    getShowSidebar: (state) => state.showSidebar,
  },
  mutations: {
    setScrollTop: (state, value) => {
      state.scrollTop = value;
    },
    setShowPopupQuiz: (state, value) => {
      state.showPopupQuiz = value;
    },
    setShowPopupFeedback: (state, value) => {
      state.showPopupFeedback = value;
    },
    setShowPopupSpecial: (state, value) => {
      state.showPopupSpecial = value;
    },
    setDisablePopupSpecial: (state, value) => {
      state.disablePopupSpecial = value;
    },
    setShowSidebar: (state, value) => {
      state.showSidebar = value;
    },
  },
  actions: {
    setScrollTop: ({ commit }, value) => {
      commit('setScrollTop', value);
    },
    setShowPopupQuiz: ({ commit }, value) => {
      commit('setShowPopupQuiz', value);
    },
    setShowPopupFeedback: ({ commit }, value) => {
      commit('setShowPopupFeedback', value);
    },
    setShowPopupSpecial: ({ commit }, value) => {
      commit('setShowPopupSpecial', value);
    },
    setDisablePopupSpecial: ({ commit }, value) => {
      commit('setDisablePopupSpecial', value);
    },
    setShowSidebar: ({ commit }, value) => {
      commit('setShowSidebar', value);
    },
  },
  modules: {
  },
});
