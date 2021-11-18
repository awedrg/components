import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
import packages from '../packages/index'
Vue.use(packages)

new Vue({
  el: '#app',
  render: h => h(App)
})
