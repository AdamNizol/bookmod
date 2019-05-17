import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Velocity from 'velocity-animate'

Vue.config.productionTip = false

//window.$ = require('velocity-animate');


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
