<template>
  <div id="grid">
    <grid-info-dialog v-if="dialogInfo !== null" :data="dialogInfo" @close="closeInfoDialog"></grid-info-dialog>
    <div class="row">
      <div class="col vld-parent">

        <table ref="gridheader" class="grid-header-table" :class="{'sticky':stickyTableHeader}">
          <tr>
            <th class='collapse-holder'></th>
            <th></th>
            <th></th>
            <th v-for="assessment in gridAssessments" :key="assessment.id" class="text-center">
              <div class="assessments-title">
                <span>{{assessment.name}}</span>
              </div>
            </th>
          </tr>
        </table>

        <div :class="{'space-holder':stickyTableHeader || !grid}"></div>
        <div class="table-holder">
          <loading
            :active="isLoading"
            loader="dots"
            :is-full-page="false"
            color="var(--secondary)"
            background-color="var(--light)"
          ></loading>

          <table
            v-if="grid"
            ref="grid"
            class="grid-table"
            @click.stop="clickGridDelegate"
            :class="{'hover-all-cells': hoverAllCells}"
          >
            <tr>
              <th class='collapse-holder'></th>
              <th></th>
              <th class="all-toggle grid-toggle">
                <button
                  :disabled="!isSignedIn"
                  class="btn btn-sm btn-outline-secondary t-btn-all-toggle"
                  :class="classes('allSelect')"
                  @click="$emit('gridAllToggle')"
                  @mouseenter="hoverAllCells = true"
                  @mouseleave="hoverAllCells = false"
                >All</button>
              </th>
              <th
                v-for="(assessment, colIndex) in gridAssessments"
                :key="assessment.id"
                class="column-toggle grid-toggle"
              >
                <button
                  :disabled="!isSignedIn"
                  class="btn btn-sm btn-outline-secondary t-btn-column-toggle"
                  :data-col="colIndex"
                  :class="classes('columnSelect', {colIndex})"
                >
                  <font-awesome-icon icon="arrow-down" />
                </button>
              </th>
            </tr>

            <tr v-for="(row, rowIndex) in grid" :key="rowIndex" :class="{'d-none': !isVisableVariable(gridVariables[rowIndex])}">
              <th class="collapse-holder" :class="variableSetClass(gridVariables[rowIndex])" @click="variableSetClickHandler(gridVariables[rowIndex])">
                <font-awesome-icon class="mb-1" v-if="gridVariables[rowIndex].subvariables && gridVariables[rowIndex].subvariables.length>0" :icon="variableSetIsOpen(gridVariables[rowIndex])?'plus-square':'minus-square'" />
              </th>
              <th @click="openInfoDialog(rowIndex)"
                  :class="{'selected-variable': rowIndex === selectedRowIndex }"
              >
                <grid-titel-info :class="{'ml-3': !!gridVariables[rowIndex].subvariable_of}" v-bind="gridVariables[rowIndex]" />
              </th>
              <th class="row-toggle grid-toggle">
                <button
                  :disabled="!isSignedIn"
                  class="btn btn-sm select-row btn-outline-secondary t-btn-row-toggle"
                  :data-row="rowIndex"
                  :class="classes('rowSelect', {rowIndex})"
                >
                  <font-awesome-icon icon="arrow-right" />
                </button>
              </th>
              <td class="cell" :key="colIndex" v-for="(count,colIndex) in row">
                <button
                  :disabled="!isSignedIn"
                  :data-col="colIndex"
                  :data-row="rowIndex"
                  :class="classes('cell', {rowIndex, colIndex})"
                  class="btn btn-sm t-btn-cell-toggle"
                >{{count | formatCount}}</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import GridTitelInfo from './GridTitelInfo.vue'
import GridInfoDialog from './GridInfoDialog.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowDown,
  faArrowRight,
  faArrowsAlt,
  faPlusSquare,
  faMinusSquare
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// @ts-ignore
import { formatSI } from 'format-si-prefix'

library.add(faArrowDown, faArrowRight, faArrowsAlt, faMinusSquare, faPlusSquare)

export default Vue.extend({
  name: 'GridComponent',
  components: { FontAwesomeIcon, Loading, GridTitelInfo, GridInfoDialog },
  computed: {
    /**
     * Provides visual feedback for grid selection helpers,
     * e.g. All/Column/Row select.
     */
    selected: function () {
      const selected = { all: true, row: [], col: [] }
      if (!this.grid.length) {
        return selected
      }
      selected.col = this.grid[0].map(i => true)

      this.grid.forEach((row, i) => {
        selected.row[i] = true
        row.forEach((col, j) => {
          if (!this.gridSelections[i][j]) {
            selected.col[j] = false
            selected.row[i] = false
            selected.all = false
          }
        })
      })
      return selected
    }
  },
  props: {
    grid: {
      type: Array,
      required: false
    },
    gridAssessments: {
      type: Array,
      required: true
    },
    gridVariables: {
      type: Array,
      required: false
    },
    gridSelections: {
      type: Array,
      required: false
    },
    isLoading: {
      type: Boolean,
      required: true
    },
    isSignedIn: {
      type: Boolean,
      required: true
    }
  },
  data: function () {
    return {
      hoverAllCells: false,
      stickyTableHeader: false,
      dialogInfo: null,
      selectedRowIndex: '',
      openVariableSets: [ ]
    }
  },
  filters: {
    formatCount: function (value) {
      if (value === -1) {
        return '1-15'
      } else if (isNaN(value)) {
        return '-'
      } else if (value > 0) {
        return formatSI(value)
      }
      return value
    }
  },
  methods: {
    variableSetIsOpen (variable) {
      return variable.subvariables && variable.subvariables.length > 0 && this.openVariableSets.includes(variable.id)
    },
    variableSetClickHandler (variable) {
      if (variable.subvariables && variable.subvariables.length > 0) {
        if (this.variableSetIsOpen(variable)) {
          this.openVariableSets = this.openVariableSets.filter(varid => varid !== variable.id)
        } else {
          this.openVariableSets.push(variable.id)
        }
      }
    },
    isVisableVariable (variable) {
      if (variable.subvariable_of && this.openVariableSets.includes(variable.subvariable_of.id)) {
        return false
      }
      return true
    },
    variableSetClass (variable) {
      if (this.openVariableSets.includes(variable.id)) { return 'closed' }
      if (variable.subvariable_of) {
        const parent = this.gridVariables.filter(varid => varid.id === variable.subvariable_of.id)[0]
        const index = this.gridVariables.findIndex(varid => varid.id === variable.id)
        if (index + 1 < this.gridVariables.length && this.gridVariables[index + 1] && !this.gridVariables[index + 1].subvariable_of) {
          return 'end'
        }
        return 'line'
      }
      if (variable && variable.subvariables && variable.subvariables.length > 0) { return 'start' }
    },
    closeInfoDialog () {
      this.dialogInfo = null
      this.selectedRowIndex = ''
    },
    openInfoDialog (rowIndex) {
      this.selectedRowIndex = rowIndex
      this.dialogInfo = this.gridVariables[rowIndex]
    },
    classes (target, context) {
      const classes = {}

      if (target === 'allSelect') {
        if (this.selected.all) {
          classes['active'] = true
        }
      } else if (target === 'columnSelect') {
        classes['active'] = this.selected.col[context.colIndex]
      } else if (target === 'rowSelect') {
        classes['active'] = this.selected.row[context.rowIndex]
      } else if (target === 'cell') {
        const cell = !!this.gridSelections[context.rowIndex][context.colIndex]
        if (cell) {
          classes['btn-secondary'] = true
        } else {
          classes['btn-outline-secondary'] = true
        }
      }
      return classes
    },
    clickGridDelegate: function (e) {
      const button = e.target.closest('button')
      if (!button) {
        return
      }
      const data = button.dataset

      if (data.col || data.row) {
        if (data.col && data.row) {
          this.$emit('gridCellToggle', parseInt(data.row), parseInt(data.col))
        } else if (data.col && !data.row) {
          this.$emit('gridColumnToggle', this.gridAssessments[data.col].id)
        } else if (!data.col && data.row) {
          const variable = this.gridVariables[parseInt(data.row)]
          this.$emit('gridRowToggle', variable.id)
        }
      }
    },
    scroll () {
      const table = this.getTableTop()
      const header = this.getHeaderHeight()
      if (table && header) {
        this.stickyTableHeader = table - header < 112 // 7rem @ 16px basesize
      }
    },
    getTableTop () {
      return this.$refs.grid
        ? this.$refs.grid.getBoundingClientRect().top
        : null
    },
    getHeaderHeight () {
      return this.$refs.gridheader
        ? this.$refs.gridheader.getBoundingClientRect().height
        : null
    }
  },
  watch: {
    // Start with all grouped variables closed
    gridVariables: function () {
      if (this.gridVariables) {
        this.gridVariables.forEach(variable => {
          if (variable.subvariables && variable.subvariables.length > 0 && !this.openVariableSets.includes(variable.id)) {
            this.openVariableSets.push(variable.id)
          }
        })
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.scroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.scroll)
  }
})
</script>

<style lang="scss" scoped>
.selected-variable div {
  pointer-events: none;
  position: relative;
  z-index: $zindex-modal;

  &::before {
    @include box-shadow;
    background-color: #fff;
    border-radius: 3px;
    bottom: -0.4rem;
    content: "";
    left: -0.5rem;
    position: absolute;
    right: 0.7rem;
    top: -0.4rem;
    z-index: -1; // move behind parent, because of absolute position (creating a new stacking context)
  }
}

table {
  overflow: hidden;
  position: relative;

  th:nth-child(2) {
    cursor: pointer;
    max-width: 15rem;
    min-width: 15rem;
    width: 15rem;
  }

  td,
  th:not(:nth-child(2)) {
    max-width: 4rem;
    min-width: 4rem;
    width: 4rem;
  }

  th {
    font-weight: normal;
    vertical-align: middle;
    white-space: nowrap;

    &.collapse-holder {
      max-width: 3rem;
      min-width: 3rem;
      width: 3rem;

      svg {
        left: 0.5rem;
        position: relative;
        top: 0.05rem;

        path {
          fill: $primary;
        }
      }

      &::after {
        bottom: 0;
        content: "";
        position: absolute;
        right: 5px;
        top: 0;
        width: 10px;
      }

      &.closed,
      &.start {
        cursor: pointer;
      }

      &.start::after {
        border-left: 2px solid $primary;
        border-top: 2px solid $primary;
        border-top-left-radius: 10px;
      }

      &.end::after {
        border-bottom: 2px solid $primary;
        border-bottom-left-radius: 10px;
        border-left: 2px solid $primary;
      }

      &.line::after {
        border-left: 2px solid $primary;
      }
    }
  }
}

.vld-overlay.is-active {
  margin: -1rem;
}

.table-holder {
  display: inline-block;
  min-height: 300px;
  min-width: 500px;
  position: relative;
}

.sticky {
  background: linear-gradient(180deg,
  rgba(255, 255, 255, 1) 0%,
  rgba(255, 255, 255, 0.9) 75%,
  rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
  position: fixed;
  top: 7rem;
  z-index: $zindex-sticky;

  .assessments-title {
    height: 8rem;
  }

  .assessments-title span {
    bottom: 1rem;
  }
}

.space-holder {
  height: 6em;
}

table td,
th {
  padding: 0 1px;
  position: relative;
}

.grid-table {
  tr {
    &:not(:first-child):hover {
      background-color: $light;
    }
  }

  &.hover-all-cells {
    td {
      background-color: $light;
    }
  }

  td:hover::after,
  th:not(:nth-child(1)):not(:nth-child(2)):hover::after {
    background-color: $light;
    content: "";
    display: inline-block;
    height: 10000px;
    left: 0;
    position: absolute;
    right: 0;
    top: -5000px;
    z-index: -1;
  }

  button {
    display: block;
    height: 100%;
    margin: 1px;
    width: 100%;
  }
}

.assessments-title {
  height: 6em;
  position: relative;
  width: auto;

  span {
    bottom: -1rem;
    display: inline-block;
    left: 1.3rem;
    max-width: 7rem;
    overflow: hidden;
    padding-left: 0.7rem;
    position: absolute;
    text-align: right;
    text-overflow: ellipsis;
    transform: rotate(-60deg);
    transform-origin: 0% 50%;
    white-space: nowrap;
  }
}

.w-0 {
  width: 0;
}

.cell {
  button {
    border-radius: 0;
  }
}

.grid-toggle {
  button {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;

    &[disabled] {
      display: none;
    }
  }
}

.all-toggle {
  button {
    border-bottom-left-radius: 0;
  }
}
</style>
