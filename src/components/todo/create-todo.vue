<template>
  <div>
    <form @submit.prevent class="uk-search uk-search-large">
      <div class="uk-flex">
        <span
          @click="handleInput"
          class="add-icon"
          uk-icon="icon: plus-circle; ratio: 2">
        </span>
        <input
          v-model=content
          @keydown.enter="handleInput"
          class="uk-search-input"
          type="search"
          placeholder="Create..."
        >
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'create-todo',
    data () {
      return {
        content: ''
      }
    },
    methods: {
      handleInput () {
        this.$store.dispatch('createTodo', this.content)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .add-icon {
    padding: 25px;
    color: rgb(102, 102, 102);
    opacity: .5;
  }
</style>
