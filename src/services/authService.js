import config from '@/config/config'

const loginUser = user => {
    localStorage.setItem('username', user.username);
    localStorage.setItem('authtoken', user.authtoken);
}

export const registerUser = {
    methods: {
        register(username, password) {
            const authString = btoa(`${config.appKey}:${config.appSecret}`);

            this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
            return this.$http.post(`/user/${config.appKey}`, {
                username,
                password
             }).then(({data}) => loginUser({
                 username: data.username,
                 authtoken: data._kmd.authtoken
             }));
        }
    }
}