import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import VueCookies from 'vue-cookies'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueCookies)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
