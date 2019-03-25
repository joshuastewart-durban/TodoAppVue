<template>
  <div class="uk-card uk-card-default uk-card-hover uk-card-body">
    <div class="uk-flex">
      <div class="check">
        <p-check v-model="completed" class="p-icon p-round p-pulse" color="primary">
          <i slot="extra" class="icon mdi mdi-check"></i>
          Completed
        </p-check>
      </div>
      <div class="title">
        <h3 class="uk-card-title">{{title}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todo',
    props: ['title', 'date', 'id', 'completed']
  }
</script>

<style lang="scss" scoped>
  .uk-card{
    width: 500px;
    height: 150px;
  }
  .check{
    padding: 20px;
  }
  .title{
    padding:15px;
  }
</style>
