import { shallowMount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import ToggleFacet from '@/components/facets/ToggleFacet.vue'

describe('ToggleFacet.vue', () => {
  describe('Given an option set', () => {
    let wrapper: Wrapper<Vue>

    beforeEach(() => {
      wrapper = shallowMount(ToggleFacet, { propsData: {
        facetId: 'my-facet',
        label: 'facet label',
        options: [
          { value: '1', text: 'red' },
          { value: '2', text: 'blue' },
          { value: '3', text: 'green' }
        ]
      }
      })
    })

    it('should render a list of facetOptions', () => {
      expect(wrapper.findAll('facet-option-stub').length).toEqual(3)
    })
  })

  describe('when a selected value get toggled', () => {
    let wrapper: Wrapper<Vue>

    beforeEach(() => {
      wrapper = shallowMount(ToggleFacet, { propsData: {
        facetId: 'facetId',
        label: 'label',
        options: [],
        value: ['1', '2', '3']
      }
      })
    })

    it('should remove it from the value list', () => {
      // @ts-ignore
      wrapper.vm.handleFacetToggle({ value: '2' })
      expect(wrapper.emitted().input[0]).toEqual([['1', '3']])
    })
  })

  describe('when a deselected value get toggled', () => {
    let wrapper: Wrapper<Vue>

    beforeEach(() => {
      wrapper = shallowMount(ToggleFacet, { propsData: {
        facetId: 'facetId',
        label: 'label',
        options: [],
        value: ['3']
      }
      })
    })

    it('should add it from the value list', () => {
      // @ts-ignore
      wrapper.vm.handleFacetToggle({ value: '2' })
      expect(wrapper.emitted().input[0]).toEqual([['3', '2']])
    })
  })
})
