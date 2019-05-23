<template>
  <div id="Content-view">
    <h3>2. Select data</h3>
    <div class="row">
      <tree-view class="col-sm-3" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TreeView from './TreeView.vue'

export default Vue.extend({
  name: 'ContentView',
  components: { TreeView }
})
</script>
