<template>
  <div>
    <div class="uk-flex uk-flex-center">
      <create id="search"></create>
    </div>
    <div class="uk-flex uk-flex-center">
      <todo-list :render="states" :list="displayList"></todo-list>
    </div>
  </div>
</template>
<script>
  import todoList from './../todo-list/todo-list'
  import * as states from '../enums/states'
  import create from './../todo/create-todo'
  import {mapState} from 'vuex'

  export default {
    name: 'home',
    props: ['states'],
    components: {
      todoList,
      create
    },
    data () {
      return {
        displayList: [],
        inputText: ''
      }
    },
    methods: {
      updateList (value) {
        switch (value) {
          case states.COMPLETED_TODOS:
            this.displayList = this.todos.filter((todo) => {
              return todo.completed
            })
            break
          case states.ACTIVE_TODOS:
            this.displayList = this.todos.filter((todo) => {
              return !todo.completed
            })
            break
          case states.ALL_TODOS:
            this.displayList = this.todos
            break
        }
      }
    },
    computed: mapState([
      'todos'
    ]),
    watch: {
      displayList (value) {
        return value
      },
      states (value) {
        this.updateList(value)
      }
    },
    created () {
      this.$store.dispatch('getTodos')
        .then(() => {
          this.updateList(this.states)
        })
    }
  }
</script>

<style scoped>

</style>
