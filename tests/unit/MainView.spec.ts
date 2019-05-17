import { shallowMount } from '@vue/test-utils'
import MainView from '@/views/MainView.vue'

describe('MainView.vue', () => {
  it('renders sidebar and content', () => {
    const wrapper = shallowMount(MainView)

    expect(wrapper.find('div.row > .col-sm-3').text()).toMatch('sidebar')
    expect(wrapper.find('div.row > .col-sm-9').text()).toMatch('content')
  })
})
