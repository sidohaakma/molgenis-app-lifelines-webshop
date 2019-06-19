import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

// @ts-ignore
import i18n from '@molgenis/molgenis-i18n-js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

Vue.config.productionTip = false

library.add(faCaretRight, faPlus, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(i18n, {
  lng: 'en',
  fallbackLng: 'en',
  namespace: ['lifelines-webshop'],
  callback () {
    new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
