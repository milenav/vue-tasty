import config from '@/config/config'

const getAuthToken = () => localStorage.getItem('authtoken')

export const restaurantService = {
    data() {
        return {
          restaurants: [],
          restaurantDetails: {},
        }
    },
    computed: {
        edit() {
            this.$root.$on('edit-details', (data) => 
            this.detailsRestaurant(this.$route.params.id) == data)
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
            .then(({data}) => this.editDetails = data)
        },
        deleteRestaurant(restaurant_id) {
            this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
            return this.$http.delete(`appdata/${config.appKey}/restaurants/${restaurant_id}`)
            .then(() => this.$router.push('/'))
        },
    },
    created() {
        this.$http.defaults.headers['Authorization'] = `Kinvey ${getAuthToken()}`
    }
}