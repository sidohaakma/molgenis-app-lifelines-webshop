<template>
  <div id="content-view">
      <div class="row flex-nowrap mb-5" >
        <div class="col-sm-auto info-bar" >
          <h3>{{ 'lifelines-webshop-content-header' | i18n }}</h3>
          <tree-view  />
        </div>
        <div class="col" >
          <grid-view />
        </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TreeView from './TreeView.vue'
import GridView from './GridView.vue'
import { mapMutations, mapActions, mapState } from 'vuex'

export default Vue.extend({
  name: 'ContentView',
  components: { TreeView, GridView },
  methods: {
    ...mapMutations(['updateSearchTerm']),
    ...mapActions(['filterSections', 'filterSubsections', 'loadGridVariables']),
    onSearchChange (value) {
      this.updateSearchTerm(value || null)
      this.filterSections()
      this.filterSubsections()
      if (this.treeSelection !== -1) {
        this.loadGridVariables()
      }
    }
  }
})
</script>

<style scoped>
  .col.tree {
    max-width: 22rem;
  }
</style>
