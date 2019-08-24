import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import axios from '@/plugins/axios'
import { authServ } from '@/services/authService'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(axios)

Vue.mixin(authServ)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
