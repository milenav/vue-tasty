import axios from 'axios'
import config from '@/config/config'


export default {
    install(Vue, options){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://baas.kinvey.com',
            headers: {}
        });
    }
}