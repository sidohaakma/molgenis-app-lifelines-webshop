import Vue from 'vue'
import Vuex from 'vuex'
// @ts-ignore
import api from '@molgenis/molgenis-api-client'
import state from '@/store/state'
import ApplicationState from '@/types/ApplicationState'
import Assesment from '@/types/Assesment'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    updateGenderFilter (state: ApplicationState, selectedGenders: String[]) {
      state.facetFilter.gender = selectedGenders
    },
    updateSubcohortfilter (state: ApplicationState, selectedSubcohorts: String[]) {
      state.facetFilter.subcohort = selectedSubcohorts
    },
    updateAssesments (state: ApplicationState, assesments: Assesment[]) {
      state.assesments = assesments
    }
  },
  actions: {
    loadGrid ({ dispatch, commit } : any) {
      api.get('/api/v2/lifelines_what_when?attrs=~id,id,variable_id,variant_id,section_id,subsection_id,alt_section_id,alt_subsection_id,assessment_id&num=20').then((response: any) => {
        // commit('updateAssesments', response.items)
      })
    }
  }
})
