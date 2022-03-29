import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import axios from '../plugins/axios'

const store = {
    state: {
        access_token: cookies.get('access_token'),
    },
    getters: {
        accessToken: (state) => state.access_token,
    },
    mutations: {
        setAccessToken: (state, value) => (state.access_token = value),
        clearAccessToken: (state) => (state.access_token = null),
    },
    actions: {
        async login(context, payload) {
            const { data } = await axios.post('/b-api/auth', payload)
            if (data.token) {
                context.commit('setAccessToken', data.token)
                cookies.set('access_token', data.token)
            }
        },
        logout(context) {
            context.commit('clearAccessToken')
            cookies.remove('access_token')
        },
    },
}

export default store
