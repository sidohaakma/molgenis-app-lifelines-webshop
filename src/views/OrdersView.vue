<template>
  <div id="orders-view" class="container pt-1">
    <h1>Your orders</h1>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Submitted</th>
            <th>Project</th>
            <th>Order</th>
            <th>Application form</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="order in orders" :key="order.id">
            <td v-if="order.state === 'Draft'"><router-link class="btn btn-primary btn-sm" :to="`/shop/${order.id}`"><font-awesome-icon icon="edit" aria-label="edit"/></router-link> </td>
            <td>{{ order.name }}</td>
            <td>{{ order.submissionDate | moment("LLLL") }}</td>
            <td>{{ order.projectNumber }}</td>
            <td>{{ order.orderId }}</td>
            <td><span v-if="order.applicationForm"><a :href="order.applicationForm.url">{{ order.applicationForm.filename }} <font-awesome-icon icon="download" aria-label="download"/></a></span></td>
            <td><span class="badge badge-pill" :class="{ 'badge-info': order.state === 'Draft' }">{{ order.state }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import SpinnerAnimation from '../components/animations/SpinnerAnimation.vue'
import { mapActions, mapState } from 'vuex'
library.add(faEdit, faDownload)

export default Vue.extend({
  components: { FontAwesomeIcon },
  created () {
    this.loadOrders()
  },
  methods: {
    ...mapActions(['loadOrders'])
  },
  computed: {
    ...mapState(['orders'])
  }
})
</script>
