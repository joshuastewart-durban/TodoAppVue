// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Vuex from 'vuex'
import PrettyCheckbox from 'pretty-checkbox-vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(PrettyCheckbox)
Vue.use(Vuex)
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
