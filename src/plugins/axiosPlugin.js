import axios from 'axios'

export default {
    install(Vue, options) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://baas.kinvey.com',
            headers: {}
        });
    }
}
