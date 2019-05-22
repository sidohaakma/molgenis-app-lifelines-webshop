import { shallowMount } from '@vue/test-utils'
import Genderfacet from '@/components/facets/GenderFacet.vue'

describe('Genderfacet.vue', () => {
  it('should render a facet with the label "gender facet"', () => {
    const wrapper = shallowMount(Genderfacet, { propsData: { options: [] } })
    expect(wrapper.find('toggle-facet-stub').attributes().label).toBe('Gender facet')
  })

  it('should render a facet with facetid "gender"', () => {
    const wrapper = shallowMount(Genderfacet, { propsData: { options: [] } })
    expect(wrapper.find('toggle-facet-stub').attributes().facetid).toBe('gender')
  })
})
