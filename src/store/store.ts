import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import ApplicationState from '@/types/ApplicationState'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    updateGenderFilter (state: ApplicationState, selectedGenders: String[]) {
      state.facetFilter.gender = selectedGenders
    },
    updateCohortfilter (state: ApplicationState, selectedCohorts: String[]) {
      state.facetFilter.cohort = selectedCohorts
    }
  },
  actions: {

  }
})
