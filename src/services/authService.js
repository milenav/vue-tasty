import config from '@/config/config'

const authString = btoa(`${config.appKey}:${config.appSecret}`)

const loginUser = (user) => {
    localStorage.setItem('authtoken', user.authtoken)
    localStorage.setItem('username', user.username)

    return user;
}

export const authServ = {
    data() {
        return {
            authtoken: localStorage.getItem('authtoken')  
        }
    },
    computed: {
        isAuth() {
            return this.authtoken !== null;
        }
    },
    created() {
        this.$root.$on('logged-in', authtoken => this.authtoken = authtoken)
        this.$root.$on('logged-out', () => this.authtoken = null)
    }
}

export const authenticate = {
    methods: {
        register(username, email,  password) {
            return this.authenticate(`/user/${config.appKey}/`, username, email, password)
        },
        login(username,password) {
           return this.authenticate(`/user/${config.appKey}/login`, username, password)
        },
        authenticate(url,username,password) {
            return this.$http.post(url, {
                username,
                password
           }).then(({data}) => loginUser({
            username: data.username,
            authtoken: data._kmd.authtoken
            }));
        },
        logout() {
            return this.$http.post(`/user/${config.appKey}/_logout`
            )
        }
    },
    created() {
        this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
    }
}
