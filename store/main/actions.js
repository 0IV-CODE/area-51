export default {
    showBarSearch ({ commit }) {
      commit('SHOW_BAR_SEARCH')
    },
    activateRevInner ({ commit }) {
      commit('ACTIVE_REV_INNER')
    },
    activateRevInnerTwo ({ commit }) {
      commit('ACTIVE_REV_INNER_TWO')
    },
    activateRevInnerThree ({ commit }) {
      commit('ACTIVE_REV_INNER_THREE')
    },
    showBarSearchMainNav ({ commit }) {
      commit('SHOW_BAR_SEARCH_MAIN_NAV')
    },
  
    // Object Load
    updateValue: function ({ commit }, payload) {
      return commit('UPDATE_VALUE', payload)
    },
    updateCanvasValue: function ({ commit }, payload) {
      return commit('UPDATE_CANVAS_VALUE', payload)
    }
  
  }
  