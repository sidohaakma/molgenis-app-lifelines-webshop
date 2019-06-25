<template>
  <div id="Content-view">
    <h3>{{ 'lifelines-webshop-content-header' | i18n }}</h3>
    <grid-view></grid-view>
  </div>
</template>

<script>
import Vue from 'vue'
import GridView from './GridView'

export default Vue.extend({
  name: 'ContentView',
  components: {
    'grid-view': GridView
  }
})
</script>
