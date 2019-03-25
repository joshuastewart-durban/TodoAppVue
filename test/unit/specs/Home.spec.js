import Home from '@/components/home/home'
import {createLocalVue, shallowMount} from '@vue/test-utils'
import Vuex from 'vuex'
import sinon from 'sinon/pkg/sinon.js'
import Create from '@/components/todo/Create-todo'
import TodoList from '@/components/todo-list/todo-list'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
let getters
let actions
beforeEach(() => {
  getters = {}
  actions = {
    getTodos: sinon.stub().resolves({status: 200})
  }
  store = new Vuex.Store({
    state: {},
    getters,
    actions
  })
})

describe('Home.vue', () => {
  it('should render correct child components', () => {
    const wrapper = shallowMount(Home, {
      store,
      propsData: {
        states: 'all'
      }
    })
    expect(wrapper.find(Create).exists()).to.equal(true)
    expect(wrapper.find(TodoList).exists()).to.equal(true)
  })
  it('should call the getTodos action when created()', () => {
    shallowMount(Home, {
      store,
      propsData: {
        states: 'all'
      }
    })
    expect(actions.getTodos.calledWith()).to.equal(true)
  })
  it('should call the updateList(value) when the getTodos action is resolved, with a value from states prop.', async () => {
    // arrange
    let spy = sinon.stub()
    store.actions = {
      getTodos: sinon.stub().resolves({status: 200})
    }
    // act
    let wrapper = shallowMount(Home, {
      store,
      propsData: {
        states: 'all'
      },
      methods: {
        updateList: spy
      }
    })
    await wrapper.vm.$nextTick()
    // assert
    expect(actions.getTodos.calledWith()).to.equal(true)
    expect(spy.calledWith('all')).to.equal(true)
  })
  it('should call the updateList when the states prop is updated', () => {
    let wrapper = shallowMount(Home, {
      store,
      propsData: {
        states: 'all'
      }
    })
    let spy = sinon.spy(wrapper.vm, 'updateList')
    wrapper.setProps({states: 'active'})
    expect(spy.calledWith('active')).to.equal(true)
  })
  it('when updateList is called the displayList data value should be updated.', () => {
    let todosMock = [
      {
        id: 0,
        title: 'test',
        date: 12345,
        completed: false
      },
      {
        id: 1,
        title: 'test 2',
        date: 12345,
        completed: true
      }
    ]
    store.state.todos = todosMock
    let wrapper = shallowMount(Home, {
      store,
      propsData: {
        states: 'active'
      }
    })
    wrapper.setProps({states: 'completed'})
    expect(wrapper.vm.displayList.length).to.equal(1)
    wrapper.setProps({states: 'all'})
    expect(wrapper.vm.displayList.length).to.equal(2)
  })
})
