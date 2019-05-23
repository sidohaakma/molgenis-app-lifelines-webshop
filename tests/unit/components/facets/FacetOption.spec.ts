import { shallowMount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import FacetOption from '@/components/facets/FacetOption.vue'

describe('FacetOption.vue', () => {
  describe('when passed "option-text" as text', () => {
    let wrapper: Wrapper<Vue>

    beforeEach(() => {
      wrapper = shallowMount(FacetOption, { propsData: { text: 'option-text' } })
    })

    it('should render a button with "option-text" as text', () => {
      expect(wrapper.find('button').text()).toEqual('option-text')
    })

    it('should render as outline by default', () => {
      expect(wrapper.find('button').classes()).toContain('btn-outline-secondary')
    })
  })

  describe('when passed "demo" as text and isSelected as false', () => {
    let wrapper: Wrapper<Vue>

    beforeEach(() => {
      wrapper = shallowMount(FacetOption, { propsData: { text: 'demo', isSelected: false } })
    })

    it('should render a button with "demo" as text', () => {
      expect(wrapper.find('button').text()).toEqual('demo')
    })

    it('should render as outline as not selected style', () => {
      expect(wrapper.find('button').classes()).toContain('btn-outline-secondary')
    })
  })

  describe('when passed "my-option" as text and isSelected as true', () => {
    let wrapper: Wrapper<Vue>

    beforeEach(() => {
      wrapper = shallowMount(FacetOption, { propsData: { text: 'my-option', isSelected: true } })
    })

    it('should render a button with "my-option" as text', () => {
      expect(wrapper.find('button').text()).toEqual('my-option')
    })

    it('should render as "btn-secondary", as selected style', () => {
      expect(wrapper.find('button').classes()).toContain('btn-secondary')
    })
  })
})
