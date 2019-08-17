import config from '@/config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const restaurantService = {
    data() {
        return {
          restaurants: []
        }
    },
    created() {
        this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
        this.$http.get(`appdata/${config.appKey}/restaurants`)
        .then(({data}) => this.restaurants = data)
    }
}