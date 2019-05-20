<template>
  <div id="main-view" class="row">
    <sidebar-view class="col-sm-3" />
    <content-view class="col-sm-9" />
  </div>
</template>

<script>
import Vue from 'vue'
import ContentView from './ContentView.vue'
import SidebarView from './SidebarView.vue'

export default Vue.extend({
  name: 'MainView',
  components: { ContentView, SidebarView }
})
</script>
