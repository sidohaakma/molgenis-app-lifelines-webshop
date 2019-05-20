import { shallowMount } from '@vue/test-utils'
import ContentView from '@/views/ContentView.vue'

describe('ContentView.vue', () => {
  it('Renders the content', () => {
    const wrapper = shallowMount(ContentView)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('#Content-view').exists()).toBeTruthy()
  })
})
