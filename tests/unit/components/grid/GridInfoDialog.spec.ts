import { shallowMount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import GridInfoDialog from '@/components/grid/GridInfoDialog.vue'

describe('GridInfoDialog', () => {
  let wrapper:any // should be Wrapper<Vue>

  it(`should set class overflow-hidden on <HTML> on create, and remove it on destroy`, () => {
    expect(document.getElementsByTagName('html')[0].classList).not.toContain('overflow-hidden')
    wrapper = shallowMount(GridInfoDialog, {})
    expect(document.getElementsByTagName('html')[0].classList).toContain('overflow-hidden')
    wrapper.destroy()
    expect(document.getElementsByTagName('html')[0].classList).not.toContain('overflow-hidden')
  })

  it('should emit "close" on call to onClickOutside ', () => {
    wrapper = shallowMount(GridInfoDialog, {})
    expect(wrapper.emitted()).toEqual({})
    wrapper.vm.onClickOutside()
    expect(wrapper.emitted().close).toBeDefined()
  })
})
