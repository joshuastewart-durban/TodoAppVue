import axios from 'axios'

export default {
  getTodos ({commit}) {
    let promise = axios
      .get('http://localhost:9090/api/todos')
      .then(response => response.data)
      .then(todos => {
        commit('SET_TODOS', todos)
      })
    return promise
  },
  createTodo ({commit}, title) {
    let todo = {
      title,
      completed: false,
      id: 0,
      date: 0
    }
    let promise = axios
      .post('http://localhost:9090/api/todos', todo)
      .then(response => response.status)
      .then(() => {
        console.log(todo, 'Added')
        commit('CREATE_TODO', todo)
      })
    return promise
  },
  deleteTodo ({commit}, id) {
    // Todo implementation
  }
}
