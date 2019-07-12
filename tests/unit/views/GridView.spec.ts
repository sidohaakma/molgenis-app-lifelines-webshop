import { shallowMount, Wrapper } from '@vue/test-utils'
import GridView from '@/views/GridView.vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

describe('GridView', () => {
  let store: any
  let getters
  let actions
  let wrapper: Wrapper<Vue>
  let state: any

  let loadGridDataMock: any
  let loadGridVariables: any

  beforeEach(() => {
    state = {
        treeSelected: -1,
        gridVariables: []
    }
    loadGridDataMock = jest.fn()
    loadGridVariables = jest.fn()

    actions = {
      loadGridVariables: loadGridVariables,
      loadGridData: loadGridDataMock,
      loadAssessments: jest.fn()
    }

    getters = {
      rsql: jest.fn(),
      gridAssessments: () => [],
      grid: () => [],
      gridSelections: () => []
    }

    store = new Vuex.Store({
      state,
      actions,
      getters
    })
  })

  describe('On creation', () => {
    it('Renders the gridView', () => {
      wrapper = shallowMount(GridView, { store })
      expect(wrapper.find('#Grid-view').exists()).toBeTruthy()
    })
  })

  describe('When treeSelected changes', () => {
    it('loadGridVariables action gets called', () => {
      let treeSelected = -1
      wrapper = shallowMount(GridView, { 
          store,
          computed: {
            treeSelected: {
                get () {
                    return treeSelected
                },
                set (value) {
                    treeSelected = value
                }
            }
          }
         })

     /**
      * This is needed to trigger the watch that is actualy based on a mocked store
      * 
      * Best to avoid watching store state 
      */
      // @ts-ignore
     wrapper.setData({ treeSelected: 101} )
      // @ts-ignore
      wrapper.vm._computedWatchers['treeSelected'].value = 101
      // @ts-ignore
      wrapper.vm._watchers.forEach(watcher => {
        watcher.run()
       })
      expect(loadGridVariables).toHaveBeenCalled()
    })
  })

  describe('When rsql changes', () => {
    it('loadGridData action gets called (again)', () => {
      let rsql = 'abc'
      wrapper = shallowMount(GridView, { 
          store,
          computed: {
            rsql: {
                get () {
                    return rsql
                },
                set (value) {
                    rsql = value
                }
            }
          }
         })

     /**
      * This is needed to trigger the watch that is actualy based on a mocked store
      * 
      * Best to avoid watching store state 
      */
      // @ts-ignore
     wrapper.setData({ rsql: 'efg'} )
      // @ts-ignore
      wrapper.vm._computedWatchers['rsql'].value = 'efg'
      // @ts-ignore
      wrapper.vm._watchers.forEach(watcher => {
        watcher.run()
       })
      expect(loadGridDataMock).toHaveBeenCalledTimes(2)
    })
  })
})
