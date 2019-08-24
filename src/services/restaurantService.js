import config from '@/config/config'


const authString = btoa(`${config.appKey}:${config.appSecret}`);
const getAuthToken = () => localStorage.getItem('authtoken')

export const restaurantService = {
    data() {
        return {
          restaurants: [],
          restaurantDetails: {},
        }
    },
    methods: {
        getAllRestaurants() {        
            return this.$http.get(`appdata/${config.appKey}/restaurants`)
             .then(({data}) => this.restaurants = data)
        },
        detailsRestaurant(restaurant_id) {       
            return this.$http.get(`appdata/${config.appKey}/restaurants/${restaurant_id}`)
             .then(({data}) => this.restaurantDetails = data)
        },
        createRestaurant(image, title, description) {
            return this.$http.post(`appdata/${config.appKey}/restaurants`, image, title, description)
        },
        editRestaurant(image, title, description, restaurant_id) {
            return this.$http.put(`appdata/${config.appKey}/restaurants/${restaurant_id}`, image, title, description)
            //.then(({data}) => this.editDetails = data)
            .then(({data}) => this.restaurantDetails = data)
        },
        deleteRestaurant(restaurant_id) {
            return this.$http.delete(`appdata/${config.appKey}/restaurants/${restaurant_id}`)
             .then(({data}) => this.restaurantDetails = data)
        }
    },
    created() {
        this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
    }
}