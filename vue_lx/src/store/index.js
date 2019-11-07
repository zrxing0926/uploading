import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import timeline from './modules/timeline';
import replyModal from './modules/replyModal';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    timeline,
    replyModal
  }
})
