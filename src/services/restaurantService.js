import config from '@/config/config'


const authString = btoa(`${config.appKey}:${config.appSecret}`);
const getAuthToken = () => localStorage.getItem('authtoken')

export const restaurantService = {
    data() {
        return {
          restaurants: []
        }
    },
    methods: {
        getAllRestaurants() {
            this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
            return this.$http.get(`appdata/${config.appKey}/restaurants`)
             .then(({data}) => this.restaurants = data)
        },
        createRestaurant(image, title, description) {
            this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
            return this.$http.post(`appdata/${config.appKey}/restaurants`, image, title, description)
            // .then(({data}) => this.restaurants = data)
            // register(username, password) {
            //     return this.authenticate(`/user/${config.appKey}`, username, password);
        }
    }
}