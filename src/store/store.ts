import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import actions from '@/store/actions'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import context from '@molgenis/molgenis-ui-context/src/store/module'
import ApplicationState from '@/types/ApplicationState'

Vue.use(Vuex)

export default new Vuex.Store<ApplicationState>({
  state,
  getters,
  mutations,
  actions,
  modules: { context }
})
