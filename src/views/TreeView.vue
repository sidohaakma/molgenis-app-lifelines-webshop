<template>
  <div id="tree-view">
    <collapsible-tree v-model="selection" :structure="structure" />
  </div>
</template>

<script>
import Vue from 'vue'
import CollapsibleTree from '../components/tree/CollapsibleTree.vue'

export default Vue.extend({
  name: 'TreeView',
  computed: {
    structure () {
      return this.$store.state.treeStructure
    },
    selection: {
      get () {
        return this.$store.state.treeSelected
      },
      set (value) {
        this.$store.commit('updateTreeSelection', value)
      }
    }
  },
  created () {
    this.$store.dispatch('loadTreeStructure')
  },
  components: { CollapsibleTree }
})
</script>
