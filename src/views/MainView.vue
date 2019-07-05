<template>
  <div id="main-view">
    <div class="py-4">
      <img src="logo.svg" alt="Lifelines" />
      <div class="header-divider bg-secondary mt-3"></div>
    </div>
    <div class="row justify-content-md-center">
        <div class="col-6">
          <toast-component
          class="toast-component mt-3"
          v-if="toast"
          :type="toast.type"
          :message="toast.message"
          @toastCloseBtnClicked="clearToast">
          </toast-component>
        </div>
    </div>
    <div class="row">
      <div class="col-12" >
          <ul class="nav nav-tabs">
              <li class="nav-item">
                  <a class="nav-link" :class="{active: (activeTab == 'variables')}" href="#" @click="activeTab = 'variables'">Shop</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" :class="{active: (activeTab == 'selection')}" href="#" @click="activeTab = 'selection'">Cart</a>
              </li>
          </ul>

          <div v-if="activeTab == 'variables'" class="row mt-3">
            <sidebar-view class="col-sm-4 col-md-3 col-xl-2" />
            <content-view class="col-sm-8 col-md-9 col-xl-10"/>
          </div>

          <div v-else>
              <cart-view class="mt-3" />
          </div>
      </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ContentView from './ContentView.vue'
import SidebarView from './SidebarView.vue'
import CartView from './CartView.vue'
import ToastComponent from '../components/ToastComponent.vue'
import { mapState, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'MainView',
  components: { ContentView, SidebarView, CartView, ToastComponent },
  data: () => {
    return {
      activeTab: 'variables'
    }
  },
  computed: {
    ...mapState([
      'toast'
    ])
  },
  methods: {
    ...mapMutations([
      'clearToast'
    ])
  }
})
</script>

<style scoped>
  .hr{
    height: 4px;
  }
</style>
