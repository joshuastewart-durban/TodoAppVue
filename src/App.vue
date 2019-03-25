<template>
  <div id='app'>
    <navBar></navBar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import UIkit from 'uikit'
  import Icons from 'uikit/dist/js/uikit-icons'
  import navBar from './components/nav-bar/nav-bar'

  UIkit.use(Icons)

  export default {
    name: 'App',
    components: {
      navBar
    }
  }
</script>

<style lang='scss'>
  @import 'styles/styles';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
