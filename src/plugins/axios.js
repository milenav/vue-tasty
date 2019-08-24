import axios from 'axios'
import config from '@/config/config'

const authString = btoa(`${config.appKey}:${config.appSecret}`)

export default {
    install(Vue, options){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://baas.kinvey.com',
            headers: {}
        });
    }
}