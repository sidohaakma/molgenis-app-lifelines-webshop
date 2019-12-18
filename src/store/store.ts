import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import actions from '@/store/actions'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import ApplicationState from '@/types/ApplicationState'

const { store: context } = require('@molgenis/molgenis-ui-context').default

const packageJson = require('../../package.json')
Vue.use(Vuex)

context.state.appVersion = packageJson.version

export default new Vuex.Store({
  state: state as ApplicationState,
  getters,
  mutations,
  actions,
  modules: { context }
})
