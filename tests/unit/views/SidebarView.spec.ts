import { shallowMount } from '@vue/test-utils'
import SidebarView from '@/views/SidebarView.vue'

describe('SidebarView.vue', () => {
  it('Renders the sidebar', () => {
    const wrapper = shallowMount(SidebarView)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('#Sidebar-view').exists()).toBeTruthy()
  })
})
