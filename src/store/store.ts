import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import ApplicationState from '@/types/ApplicationState'
// @ts-ignore
import api from '@molgenis/molgenis-api-client'

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
    updateTreeSelection (state: ApplicationState, selection: String) {
      state.treeSelected = selection
    },
    updateSection (state: ApplicationState, sections: String[]) {
      state.sectionList = sections
    },
    updateTreeStructure (state: ApplicationState, sections: String[]) {
      state.treeStructure = sections
    },
    updateSubSection (state: ApplicationState, subSections: String[]) {
      state.subSectionList = subSections
    }
  },
  actions: {
    loadTreeStructure ({ dispatch, commit } : any) {
      // Show simple initial tree (only the parents)
      // TODO error handeling
      const sections = api.get('/api/v2/lifelines_section?num=100').then((response: any) => {
        let sections:String[][] = []
        response.items.map((item:any) => { sections[item.id] = item.name })
        commit('updateSection', sections)

        const treeStructure = response.items.map((item:any) => { return { 'name': item.name } })
        commit('updateTreeStructure', treeStructure)
        return sections
      })

      // Request details
      const subSections = api.get('/api/v2/lifelines_sub_section?num=1000').then((response: any) => {
        let subSections:String[] = []
        response.items.map((item:any) => { subSections[item.id] = item.name })
        commit('updateSection', subSections)
        return subSections
      })

      const tree = api.get('/api/v2/lifelines_tree?num=1000').then((response: any) => {
        let structure:any = {}
        response.items.map((item:any) => {
          if (item.section_id.id in structure) {
            structure[item.section_id.id].push(item.subsection_id.id)
          } else {
            structure[item.section_id.id] = [item.subsection_id.id]
          }
        })

        let treeStructure:Array<Object> = []
        for (let [key, value] of Object.entries(structure)) {
          treeStructure.push({ key: key, list: value })
        }
        return treeStructure
      })

      // Build final tree
      Promise.all([sections, subSections, tree]).then(([sections, subSections, treeStructure]) => {
        const final = treeStructure.map((item:any) => {
          return {
            name: sections[item.key],
            children: item.list.map((id:Number) => { return { name: subSections[id] } })
          }
        })
        console.log(final)
        commit('updateTreeStructure', final)
      })
    }
  }
})
