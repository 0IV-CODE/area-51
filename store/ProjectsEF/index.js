import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const ProjectsEF = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default ProjectsEF
