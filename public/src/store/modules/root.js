const root = {
  namespaced: true,
  state: {
    homePage: {
      version: 0
    }
  },
  mutations: {
    dataUpdated (state, json) {
      state[json.page] = json.data
    }
  },
  actions: {
    dataUpdated ({ commit }, json) {
      commit('dataUpdated', json)
    }
  },
  getters: {
    homePage: state => {
      return state.homePage
    }
  }
}

export default root
