import { shallowMount } from '@vue/test-utils'
import GenderFacet from '@/components/facets/GenderFacet.vue'

describe('GenderFacet.vue', () => {
  it('should render a facet with the label "gender facet"', () => {
    const wrapper = shallowMount(GenderFacet, { propsData: { options: [] } })
    expect(wrapper.find('toggle-facet-stub').attributes().label).toBe('Gender facet')
  })

  it('should render a facet with facetid "gender"', () => {
    const wrapper = shallowMount(GenderFacet, { propsData: { options: [] } })
    expect(wrapper.find('toggle-facet-stub').attributes().facetid).toBe('gender')
  })
})
