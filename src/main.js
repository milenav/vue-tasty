import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import axiosPlugin from '@/plugins/axiosPlugin'
import { authServ } from '@/services/authService'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(axiosPlugin)

Vue.mixin(authServ)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
