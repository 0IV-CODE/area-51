export default {
  // Object Load
  updateValue: function ({ commit }, payload) {
    return commit('UPDATE_VALUE', payload)
  },
  updateCanvasValue: function ({ commit }, payload) {
    return commit('UPDATE_CANVAS_VALUE', payload)
  }
  
  }
  