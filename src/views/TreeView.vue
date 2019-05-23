<template>
  <div id="tree-view">
    <collapsible-tree :structure="structure"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CollapsibleTree from '../components/tree/CollapsibleTree.vue'


  export default Vue.extend({
    name: 'MainView',
    data: function () {
      return {
        structure: [
          {
            name: 'foo',
            children: [
              {
                name: 'test-child 1',
              },
              {
                name: 'test-child 2',
              },
              {
                name: 'test-child 3',
              },
              {
                name: 'test-child 4',
              }
            ]
          },
          {
            name: 'bar',
          },
          {
            name: 'baz',
            children: [
              {
                name: 'test-child with a very long line of text',
              }
            ]
          }
        ]
      }
    },
    components: { CollapsibleTree }
  })
</script>
