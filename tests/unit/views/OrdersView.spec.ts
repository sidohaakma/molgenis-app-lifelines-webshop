import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import OrdersView from '@/views/OrdersView.vue'
import moment from 'moment'
import Vuex from 'vuex'

describe('OrdersView.vue', () => {
  const localVue = createLocalVue()
  localVue.filter('moment', function (value: string, format: string) { return moment(value).format(format); });
  localVue.filter('i18n', (value: string) => value) 

  localVue.use(Vuex)
  localVue.use(VueRouter)
  let store: any
  let actions = {
    loadOrders: jest.fn()
  }

  beforeEach(() => {
    let state: any

    state = {
      orders: [
        {
          id: 'asfaghresfb',
          name: 'Rubbish',
          submissionDate: '2019-09-02',
          state: 'Draft'
        }
      ]
    }

    store = new Vuex.Store({
      state,
      actions
    })
  })

  it('renders orders view', () => {
    
    const wrapper = shallowMount(OrdersView, { store, localVue })
    expect(wrapper.find('#orders-view').exists()).toBeTruthy()
  })
})
