import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils'
import SidebarView from '@/views/SidebarView.vue'
import Vue from 'vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

Vue.filter('i18n', (value: string) => value) // Add dummy filter for i18n

describe('SidebarView.vue', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(SidebarView, {
      mocks: {
        $store: {
          state: {
            genderOptions: [{ value: '1', text: 'Male' }],
            cohortOptions: [{ value: '101', text: 'baseline' }]
          }
        }
      },
      localVue
    })
  })

  it('Renders the sidebar', () => {
    expect(wrapper.find('#Sidebar-view').exists()).toBeTruthy()
  })

  it('Should contain gender and cohort facets', () => {
    expect(wrapper.find('toggle-facet-stub[facetid="gender"]').exists()).toBeTruthy()
    expect(wrapper.find('toggle-facet-stub[facetid="cohort"]').exists()).toBeTruthy()
  })
})
