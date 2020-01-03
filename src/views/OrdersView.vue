<template>
  <div id="orders-view" class="container pt-1">
    <ConfirmationModal
      v-if="$route && $route.name === 'orderDelete'"
      :backRoute="$router.resolve({name: 'orders'}).route"
      :confirmButton="$t('lifelines-webshop-modal-button-delete')"
      :confirmMethod="deleteOrderConfirmed.bind(this, $route.params.orderNumber)"
      :modalTitle="$t('lifelines-webshop-modal-delete-header', {order: $route.params.orderNumber})">
      {{$t('lifelines-webshop-modal-delete-body', {order: $route.params.orderNumber})}}
    </ConfirmationModal>

    <h1 id="orders-title">{{$t('lifelines-webshop-orders-title')}}</h1>
      <spinner-animation v-if="orders === null"/>
      <table v-else class="table" aria-describedby="orders-title">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th v-if="hasManagerRole" scope="col">{{$t('lifelines-webshop-orders-col-header-email')}}</th>
            <th scope="col">{{$t('lifelines-webshop-orders-col-header-title')}}</th>
            <th scope="col">{{$t('lifelines-webshop-orders-col-header-sub-date')}}</th>
            <th scope="col">{{$t('lifelines-webshop-orders-col-header-project')}}</th>
            <th scope="col">{{$t('lifelines-webshop-orders-col-header-order')}}</th>
            <th scope="col">{{$t('lifelines-webshop-orders-col-header-app-form')}}</th>
            <th scope="col">{{$t('lifelines-webshop-orders-col-header-state')}}</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="order in orders" :key="order.id">
            <td>
              <router-link
                v-if="order.state === 'Draft'"
                class="btn btn-primary btn-sm"
                :to="`/shop/${order.orderNumber}`">
                  <font-awesome-icon icon="edit" aria-label="edit"/>
                </router-link>
            </td>
            <td>
              <router-link
                v-if="order.state === 'Draft'"
                :to="{ name: 'orderDelete', params: {orderNumber: order.orderNumber}}"
                class="btn btn-danger btn-sm t-btn-order-delete">
              <font-awesome-icon icon="trash" aria-label="delete"/>
              </router-link>
              <button
              v-if="order.state === 'Submitted' && hasManagerRole"
              @click="handleApproveOrder(order.orderNumber)"
              class="btn btn-success">
                <span v-if="approvingOrder == order.orderNumber">
                  Approving
                </span>
                <span v-else>Approve</span>
              </button>
            </td>
            <td v-if="hasManagerRole">{{ order.email }}</td>
            <td>{{ order.name }}</td>
            <td>{{ order.submissionDate | dataString }}</td>
            <td>{{ order.projectNumber }}</td>
            <td>{{ order.orderNumber }}</td>
            <td><span v-if="order.applicationForm"><a :href="order.applicationForm.url">{{ order.applicationForm.filename }}<font-awesome-icon icon="download" aria-label="download"/></a></span></td>
            <td><span class="badge badge-pill" :class="badgeClass[order.state]">{{ order.state }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SpinnerAnimation from '../components/animations/SpinnerAnimation.vue'
import ConfirmationModal from '../components/ConfirmationModal.vue'
import { mapActions, mapState, mapMutations, mapGetters } from 'vuex'
import moment from 'moment'

library.add(faEdit, faDownload, faTrash)

export default Vue.extend({
  components: { ConfirmationModal, FontAwesomeIcon, SpinnerAnimation },
  mounted () {
    this.loadOrders()
  },
  data () {
    return {
      badgeClass: {
        'Draft': 'badge-info',
        'Submitted': 'badge-primary',
        'Approved': 'badge-success',
        'Rejected': 'badge-danger'
      },
      approvingOrder: ''
    }
  },
  methods: {
    deleteOrderConfirmed: function (orderNumber) {
      this.deleteOrder(orderNumber)
      this.$router.push({ name: 'orders' })
    },
    async handleApproveOrder (orderNumber) {
      this.approveState = orderNumber
      this.sendApproveTrigger(orderNumber).then(
        async () => {
          await this.loadOrders()
          this.approveState = ''
          this.setToast({ type: 'success', textType: 'light', title: 'Success', timeout: this.$global.toastTimeoutTime, message: `Order ${orderNumber} approved` })
        },
        () => {
          this.approveState = ''
          this.setToast({ type: 'danger', textType: 'light', message: `Order ${orderNumber} approval failed` })
        })
    },
    ...mapActions(['loadOrders', 'deleteOrder', 'sendApproveTrigger']),
    ...mapMutations(['setToast'])
  },
  computed: {
    ...mapState(['orders']),
    ...mapGetters(['hasManagerRole'])
  },
  filters: {
    dataString: (dateValue) => dateValue ? moment(dateValue).format('LLLL') : ''
  }
})
</script>
