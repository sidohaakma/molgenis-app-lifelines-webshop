<template>
  <div id="grid-view">
    <em>{{searchMessage}}</em>

    <grid-component
      v-if="!isSearchResultEmpty"
      :grid="grid"
      :gridAssessments="gridAssessments"
      :gridVariables="gridVariables"
      :gridSelections="gridSelections"
      :isLoading="isGridLoading"
      :isSignedIn="isSignedIn"
      @gridRowToggle="handleGridRowToggle"
      @gridColumnToggle="handleGridColumnToggle"
      @gridCellToggle="handleGridCellToggle"
      @gridAllToggle="handleGridAllToggle"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import GridComponent from '../components/grid/GridComponent.vue'
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'GridView',
  components: { GridComponent },
  computed: {
    ...mapState(['gridVariables', 'searchTerm', 'subSectionList', 'treeSelected']),
    ...mapGetters([
      'searchTermQuery', 'rsql', 'gridAssessments', 'grid', 'gridSelections',
      'numberOfSelectedItems', 'isSignedIn', 'isGridLoading', 'isSearchResultEmpty'
    ]),
    searchMessage: function () {
      if (!this.gridVariables) { return '' }
      let searchMessage = this.$t('lifelines-webshop-search-variables-found', { count: this.gridVariables.length })
      if (this.searchTerm) {
        searchMessage += ' ' + this.$t('lifelines-webshop-search-variables-term', { searchTerm: this.searchTerm })
      }

      if (this.selectedSubsection) {
        searchMessage += ' ' + this.$t('lifelines-webshop-search-variables-subsection', { subSection: this.selectedSubsection })
      }

      return `${searchMessage}.`
    },
    selectedSubsection: function () {
      if (this.treeSelected) {
        return this.subSectionList[this.treeSelected]
      }
      return null
    }
  },
  methods: {
    ...mapMutations(['toggleGridSelection', 'toggleGridRow', 'toggleGridColumn', 'toggleAll']),
    ...mapActions(['loadGridVariables', 'loadGridData', 'loadAssessments']),
    handleGridRowToggle (variableId) {
      this.toggleGridRow({
        variableId,
        gridAssessments: this.gridAssessments
      })
    },
    handleGridColumnToggle (assessmentId) {
      this.toggleGridColumn({ assessmentId })
    },
    handleGridCellToggle (rowIndex, colIndex) {
      this.toggleGridSelection({
        variableId: this.gridVariables[rowIndex].id,
        assessmentId: this.gridAssessments[colIndex].id
      })
    },
    handleGridAllToggle () {
      this.toggleAll({ gridAssessments: this.gridAssessments })
    }
  },
  watch: {
    searchTermQuery: function () {
      this.loadGridVariables()
    },
    rsql: function () {
      this.loadGridData()
    }
  },
  created: function () {
    this.loadGridData()
  }
})
</script>
