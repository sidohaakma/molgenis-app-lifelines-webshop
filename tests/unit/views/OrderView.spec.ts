import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import OrderView from '@/views/OrderView.vue'
import Vuex from 'vuex'

describe('OrderView', () => {
  let wrapper: any
  let localVue: any
  let store: any
  let actions: any
  let state: any
  let submitOrderMock: any

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    localVue.use(VueRouter)
    submitOrderMock = jest.fn()
    state = {
      toast: null
    }
    actions = {
      submitOrder: submitOrderMock
    }
    store = new Vuex.Store({
      state,
      actions
    })
    wrapper = shallowMount(OrderView, { store, localVue })
  })

  it('should render the component', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.find('#order-form')).toBeDefined()
  })

  it('should contain the order fields', () => {
    expect(wrapper.vm.formFields).toBeDefined()

    expect(wrapper.vm.formFields[0].id).toEqual('projectNumber')
    expect(wrapper.vm.formFields[0].required()).toEqual(true)
    expect(wrapper.vm.formFields[0].visible()).toEqual(true)
    expect(wrapper.vm.formFields[0].validate()).toEqual(true)

    expect(wrapper.vm.formFields[1].id).toEqual('name')
    expect(wrapper.vm.formFields[1].required()).toEqual(false)
    expect(wrapper.vm.formFields[1].visible()).toEqual(true)
    expect(wrapper.vm.formFields[1].validate()).toEqual(true)

    expect(wrapper.vm.formFields[2].id).toEqual('applicationForm')
    expect(wrapper.vm.formFields[2].required()).toEqual(false)
    expect(wrapper.vm.formFields[2].visible()).toEqual(true)
    expect(wrapper.vm.formFields[2].validate()).toEqual(true)
  })

  describe('on form value changed', () => {
    beforeEach(() => {
      wrapper.vm.onValueChanged({ key1: 'new val' })
    })

    it('should update the form data', () => {
      expect(wrapper.vm.formData).toEqual({ key1: 'new val' })
    })
  })

  describe('on onSubmit', () => {
    let formState: any
    beforeEach(() => {
      formState = {
        projectNumber: {
          $touched: true
        },
        name: {
          $touched: true
        },
        applicationForm: {
          $touched: true
        }
      }
    })

    describe('when the form is valid', () => {
      beforeEach((done) => {
        formState.$valid = true
        wrapper.setData({ formState: formState })
        wrapper.vm.onSubmit()
        done()
      })

      it('should call the submitOrder action', () => {
        expect(submitOrderMock).toHaveBeenCalled()
      })
    })

    describe('when the form is invalid', () => {
      beforeEach((done) => {
        formState.$valid = false
        wrapper.setData({ formState: formState })
        wrapper.vm.onSubmit()
        done()
      })

      it('should not call the submitOrder action', () => {
        expect(submitOrderMock).not.toHaveBeenCalled()
      })
    })
  })
})
