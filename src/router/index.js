import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import * as states from './../enums/states'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/active',
      name: 'Active',
      component: Home,
      props: (route) => ({
        states: route.query.render
      })
    },
    {
      path: '/completed',
      name: 'Completed',
      component: Home,
      props: (route) => ({
        states: route.query.render
      })
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: () => ({
        states: states.ALL_TODOS
      })
    }
  ]
})
