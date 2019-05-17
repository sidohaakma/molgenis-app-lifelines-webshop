<template>
  <div class="container-fluid">
    <main-view />
  </div>
</template>

<script>
import Vue from 'vue'
import MainView from './views/MainView.vue'

export default Vue.extend({
  name: 'App',
  components: { MainView }
})
</script>
