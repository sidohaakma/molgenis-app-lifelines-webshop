import { shallowMount } from '@vue/test-utils'
import MainView from '@/views/MainView.vue'

describe('MainView.vue', () => {
  it('renders sidebar and content', () => {
    const wrapper = shallowMount(MainView)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('#main-view.row').exists()).toBeTruthy()
  })
})
