<template>
  <div id="grid">
    <div class="row">
      <div class="col">
        <table v-if="isLoading && treeSelected!=-1" class="table-loading bg-light">
          <tr>
            <td class="spinner-container">
              <spinner-animation class="spinner mx-auto align-middle"></spinner-animation>
            </td>
          </tr>
        </table>

        <table class="grid-table"
               :class="{'sticky':stickyTableHeader}"
               v-if="!isLoading && treeSelected!=-1"
        >
          <tr>
            <th>
            </th>
            <td></td>
            <td
              v-for="assessment in gridAssessments"
              :key="assessment.id"
              class="text-center">
              <div class="assessments-title"><span>{{assessment.name}}</span></div>
            </td>
          </tr>
        </table>
        <div :class="{'space-holder':stickyTableHeader}"></div>

        <table class="grid-table col-hover"
               v-if="!isLoading && treeSelected!=-1"
        >
          <tr>
            <th></th>
            <td>
              <facet-option class="selectAll gridItem" v-on:facetToggled="toggleGrid">All</facet-option>
            </td>
            <td v-for="assessment in gridAssessments"
                :key="assessment.id"
            >
              <facet-option class="selectCol gridItem" v-on:facetToggled="selectColumn(assessment.id)">
                <font-awesome-icon icon="arrow-down"/>
              </facet-option>
            </td>
          </tr>

          <tr
            v-for="(row, rowIndex) in grid"
            :class="'grid-row-'+rowIndex"
            class="row-hover"
            :key="rowIndex"

          >
            <th>
              <span class="variable-title">
                {{variableName(gridVariables[rowIndex])}}
              </span>
            </th>
            <td>
              <facet-option class="selectRow gridItem" v-on:facetToggled="toggleRow(gridVariables[rowIndex].id)">
                <font-awesome-icon icon="arrow-right"/>
              </facet-option>
            </td>
            <td :key="colIndex"
                v-for="(count,colIndex) in row"
            >
              <facet-option
                @facetToggled="toggle(rowIndex, colIndex)"
                :isSelected="gridSelections[rowIndex][colIndex]"
                class="selectItem gridItem">
                {{formatter(count)}}
              </facet-option>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import FacetOption from '../facets/FacetOption.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown, faArrowRight, faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SpinnerAnimation from '../animations/SpinnerAnimation.vue'

library.add(faArrowDown, faArrowRight, faArrowsAlt)

export default Vue.extend({
  components: { FacetOption, FontAwesomeIcon, SpinnerAnimation },
  data: function () {
    return {
      stickyTableHeader: false
    }
  },
  methods: {
    scroll () {
      const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
      if (scrollTop > 170) this.stickyTableHeader = true
      else this.stickyTableHeader = false
    },
    formatter (num) {
      return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    },
    selectColumn (assessmentId) {
      this.toggleGridColumn({ assessmentId })
    },
    toggleRow (variableId) {
      this.toggleGridRow({
        variableId,
        gridAssessments: this.gridAssessments
      })
    },
    toggleGrid () {
      this.toggleAll({ gridAssessments: this.gridAssessments })
    },
    toggle (rowIndex, colIndex) {
      this.toggleGridSelection({
        variableId: this.gridVariables[rowIndex].id,
        assessmentId: this.gridAssessments[colIndex].id
      })
    },
    ...mapMutations(['toggleGridSelection', 'toggleGridRow', 'toggleGridColumn', 'toggleAll']),
    ...mapActions(['loadGridVariables', 'loadAssessments', 'loadGridData'])
  },
  created: function () {
    this.loadAssessments()
    this.loadGridData()
    window.addEventListener('scroll', this.scroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.scroll)
  },
  computed: {
    ...mapState(['treeSelected', 'gridVariables', 'assessments', 'variantCounts']),
    ...mapGetters(['rsql', 'gridAssessments', 'grid', 'gridSelections']),
    variableName () {
      return variable => variable.label ? variable.label : variable.name
    },
    isLoading () {
      return this.grid.length === 0
    }
  },
  watch: {
    treeSelected: function () {
      this.loadGridVariables()
    },
    rsql: function () {
      this.loadGridData()
    }
  }
})
</script>

<style scoped>
  table {
    overflow: hidden;
    position: relative;
  }
  table th:first-child {
    width: 15rem;
    max-width: 15rem;
    overflow: hidden;
  }
  table td,
  table th:not(:first-child){
    width: 4rem;
    max-width: 4rem;
    min-width: 4rem;
  }
  table th {
    white-space: nowrap;
    vertical-align: middle;
    font-weight: normal;
  }
  .sticky{
    position: fixed;
    top:0;
    background-color: white;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);
    z-index: 2000;
  }
  .sticky .assessments-title{
    height: 8rem;
  }
  .sticky .assessments-title span{
    bottom: 1rem;
  }
  .space-holder{
    height: 96px;
  }

  table td, th {
    padding: 0 1px;
    position: relative;
  }

  .col-hover td:hover::after {
    content:"";
    left: 0;
    right: 0;
    display: inline-block;
    position: absolute;
    background-color: #e9f6f9;
    top: -5000px;
    height: 10000px;
    z-index: -1;
  }

  .variable-title {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 1rem;
    vertical-align: middle;
    padding-left: 1rem;
  }

  .assessments-title {
    height: 6em;
    width: auto;
    position: relative;
  }

  .assessments-title span {
    white-space: nowrap;
    position: absolute;
    bottom: -1rem;
    left: 1.3rem;
    max-width: 7rem;
    padding-left: 0.7rem;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: right;
    transform: rotate(-60deg);
    transform-origin: 0% 50%;
  }

  .w-0 {
    width: 0;
  }

  button.selectAll {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  button.selectItem {
    border-radius: 0;
  }

  button.selectRow {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button.selectCol {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .spinner {
    width: 100%;
  }

  .table-loading {
    position: fixed;
    width: 60%;
    height: 90%;
  }

  .gridItem {
    display: block;
    width: 100%;
    height: 100%;
    margin: 1px;
  }
  .row-hover:hover {
    background-color: #e9f6f9;
  }

</style>
