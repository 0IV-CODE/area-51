import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const main = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default main
