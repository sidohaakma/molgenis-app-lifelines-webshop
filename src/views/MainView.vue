<template>
  <div id="main-view" class="row pt-3">
    <sidebar-view class="col-sm-4 col-md-3 col-xl-2" />
    <content-view class="col-sm-8 col-md-9 col-xl-10"/>
    <button class="btn btn-primary" @click="save">Save!</button>
    <input type="text" v-model="cartId"/>
    <button class="btn btn-secondary" @click="load(cartId)">Load!</button>
  </div>
</template>

<script>
import Vue from 'vue'
import ContentView from './ContentView.vue'
import SidebarView from './SidebarView.vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'MainView',
  data () {
    return { cartId: '' }
  },
  components: { ContentView, SidebarView },
  methods: mapActions(['save', 'load'])
})
</script>
