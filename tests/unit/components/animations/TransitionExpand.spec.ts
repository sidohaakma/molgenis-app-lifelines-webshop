import { mount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import TransitionExpand from '@/components/animations/TransitionExpand.vue'

describe('TransitionExpand.vue', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = mount(TransitionExpand, {
    })
  })

  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
