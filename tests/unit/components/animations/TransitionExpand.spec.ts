import { shallowMount, Wrapper, TransitionStub } from '@vue/test-utils'
import Vue from 'vue'
import TransitionExpand from '@/components/animations/TransitionExpand.vue'

describe('TransitionExpand.vue', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(TransitionExpand, {
      stubs: {
        transition: TransitionStub
      },
      slots: { default: '<div><div id="test">test</div></div>' }
    })
  })

  it('It animates the element', (done) => {
    const test = wrapper.find('#test')

    // @ts-ignore
    wrapper.vm.enter(test.element)
    expect(test.element.style.height).toBe('0px')

    // @ts-ignore
    wrapper.vm.afterEnter(test.element)
    expect(test.element.style.height).toBe('auto')

    // @ts-ignore
    wrapper.vm.leave(test.element)
    setTimeout(() => {
      expect(test.element.style.height).toBe('0px')
      done()
    }, 100)
  })
})
