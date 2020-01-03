import { shallowMount, createLocalVue } from '@vue/test-utils'
import MainView from '@/views/MainView.vue'
import state from '../fixtures/state'
import Vuex from 'vuex'
import '@/globals/variables'

describe('MainView.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let store: any
  let actions: any

  let mutations: any
  const mocks: any = { '$route': { params: {} } }
  const stubs: any = { 'toast-component': true }
  const isSearchResultEmpty = jest.fn()
  const isSignedIn = jest.fn()
  let setToastMock = jest.fn()
  const setLoading = jest.fn()

  beforeEach(() => {
    Object.assign(state, {
      state: { treeSelection: 3 },
      toast: { type: 'danger', message: 'i am not a message' }
    })

    actions = {
      loadVariables: jest.fn(),
      loadAssessments: jest.fn(),
      load: jest.fn(),
      save: jest.fn()
    }
    mutations = {
      setLoading: setLoading,
      setToast: setToastMock
    }
    store = new Vuex.Store({
      state,
      actions,
      getters: {
        isSearchResultEmpty,
        isSignedIn
      },
      mutations
    })
  })

  it('renders sidebar and content', () => {
    const wrapper = shallowMount(MainView, { store, localVue, mocks, stubs })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('#main-view').exists()).toBeTruthy()
  })

  it('should show a toast telling the user to signin to select/order if the user is not signed in an no other toast is shown', () => {
    state.toast = []
    shallowMount(MainView, { store, localVue, mocks, stubs })
    expect(setToastMock).toHaveBeenCalledWith(expect.anything(), { message: 'Please sign in to select and order variables', textType: 'light', type: 'info' })
  })

  it('loads an order, after loading variables and assessments, if a orderNumber route param is present', (done) => {
    actions.loadVariables.mockReturnValueOnce(Promise.resolve())
    actions.loadAssessments.mockReturnValueOnce(Promise.resolve())
    mocks.$route.params.orderNumber = 'abcde'
    shallowMount(MainView, { store, localVue, mocks, stubs })
    setTimeout(() => {
      expect(actions.load).toHaveBeenCalledWith(expect.anything(), 'abcde', undefined)
      done()
    }, 0)
  })
})
