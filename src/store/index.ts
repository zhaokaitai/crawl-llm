import { createStore } from 'vuex'

export default createStore({
  state: {
    showHeader: true
  },
  getters: {
    showHeader: state => state.showHeader
  },
  mutations: {
    setShowHeader(state, showHeader) {
      state.showHeader = showHeader
    }
  },
  actions: {
  },
  modules: {
  }
})
