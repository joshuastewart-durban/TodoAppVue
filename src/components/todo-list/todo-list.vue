<template>
  <div>
    <ul>
      <li v-for="todo in list">
        <todo :title="todo.title" :date="todo.date" :completed="todo.completed">
        </todo>
      </li>
    </ul>
  </div>
</template>

<script>
  import todo from './../todo/todo'

  export default {
    name: 'todo-list',
    props: ['list'],
    components: {
      todo
    }
  }
</script>
<style lang="scss" scoped>
  li {
    padding: 20px;
    list-style-type: none;
  }
</style>
