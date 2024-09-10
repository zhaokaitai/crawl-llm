import { createStore } from 'vuex'

export default createStore({
  state: {
    showHeader: true,
    background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
    token: '',
    isLogin: true
  },
  getters: {
    showHeader: state => state.showHeader,
    background: state => state.background,
    token: state => state.token,
    isLogin: state => state.isLogin
  },
  mutations: {
    setShowHeader(state, showHeader) {
      state.showHeader = showHeader
      if (showHeader) {
        state.background = 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'
      } else {
        state.background = '#fff'
      }
    },
    setToken(state, token) {
      state.token = token
    },
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin
    }
  },
  actions: {
  },
  modules: {
  }
})
