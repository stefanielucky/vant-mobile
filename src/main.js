import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
import 'vant/lib/button/style';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
