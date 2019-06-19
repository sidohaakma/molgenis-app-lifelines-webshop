<template>
  <div id="tree-view">
    <collapsible-tree v-model="selection" :structure="structure" />
    <code>selected: {{selection}}</code>
  </div>
</template>

<script>
import Vue from 'vue'
import CollapsibleTree from '../components/tree/CollapsibleTree.vue'

export default Vue.extend({
  name: 'TreeView',
  data: function () {
    return {
      selection: '',
      structure: [
        {
          name: 'foo',
          count: 44,
          open: true,
          children: [
            {
              name: 'test-child 1',
              count: 12
            },
            {
              name: 'test-child 2'
            },
            {
              name: 'test-child 3',
              count: 0
            },
            {
              name: 'test-child 4'
            }
          ]
        },
        {
          name: 'bar'
        },
        {
          name: 'baz',
          children: [
            {
              name: 'Hello world',
              count: 25
            }
          ]
        },
        {
          name: 'a long text to fill the line',
          count: 25,
          children: [
            {
              name: 'test-child with a very long line of text',
              count: 25
            }
          ]
        }
      ]
    }
  },
  components: { CollapsibleTree }
})
</script>
