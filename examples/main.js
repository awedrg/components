import Vue from 'vue'
import App from './App.vue'

import packages from '../packages/index'
Vue.use(packages)

new Vue({
  el: '#app',
  render: h => h(App)
})
