import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import axios from '../plugins/axios'

const store = {
    state: {
        access_token: cookies.get('access_token'),
        users: null
    },
    getters: {
        accessToken: state => state.access_token,
        getUsers: state => state.users
    },
    mutations: {
        setAccessToken: (state, value) => state.access_token = value,
        clearAccessToken: state => state.access_token = null,
        setUsers: (state, value) => state.users = value
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
        async loadUsers(context, payload) {
            const { data } = await axios.get('/b-api/users')
            context.commit('setUsers', data)
        },
        async addUser(context, payload) {
            await axios.post('/b-api/users', payload)
        },
        async deleteUser(context, payload) {
            await axios.delete(`/b-api/users/${payload}`)
        }
    },
}

export default store
