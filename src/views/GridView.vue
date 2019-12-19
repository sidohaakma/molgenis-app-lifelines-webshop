<template>
  <div id="grid-view">
    <div class="no-results" v-if="isSearchResultEmpty">
      <b-alert show variant="secondary">{{$t('lifelines-webshop-empty-search-msg')}}</b-alert>
    </div>
    <div v-else>
      <grid-component
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
    ...mapState(['gridVariables']),
    ...mapGetters([
      'searchTermQuery', 'rsql', 'gridAssessments', 'grid', 'gridSelections',
      'numberOfSelectedItems', 'isSignedIn', 'isGridLoading', 'isSearchResultEmpty'
    ])
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
    searchTermQuery: function (value) {
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
