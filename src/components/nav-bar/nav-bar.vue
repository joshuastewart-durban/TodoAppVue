<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left logo">
      <img src="../../../static/images/3d-logo-1.svg">
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li>
          <a href="#" @click="navigate(displayStates.ALL_TODOS)">Filter</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="#" @click="navigate(displayStates.ACTIVE_TODOS)">Active</a></li>
              <li><a href="#" @click="navigate(displayStates.COMPLETED_TODOS)">Completed</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Calender</a>
        </li>
        <li>
          <a href="#">Create</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  import Router from '../../router'
  import * as states from '../enums/states'

  export default {
    name: 'navBar',
    data () {
      return {
        displayStates: states
      }
    },
    methods: {
      navigate (value) {
        switch (value) {
          case states.ALL_TODOS:
            Router.push({name: 'Home', query: {render: states.ALL_TODOS}})
            break
          case states.COMPLETED_TODOS:
            Router.push({name: 'Completed', query: {render: states.COMPLETED_TODOS}})
            break
          case states.ACTIVE_TODOS:
            Router.push({name: 'Active', query: {render: states.ACTIVE_TODOS}})
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .logo {
    img {
      height: 80px;
    }
  }

  .uk-navbar-nav {
    padding: 0 50px 0 0;
  }
</style>
