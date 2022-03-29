import * as dotenv from 'dotenv'
dotenv.config()

import axios from 'axios'
import store from '../store/store'

// Request interceptor
axios.interceptors.request.use((request) => {
    if (request && request.url) {
        request.url = `${process.env.VUE_APP_API_URL}${request.url}`
    }

    if (request && request.headers) {
        request.headers.common['Accept'] = 'application/json'
        const token = store.getters.accessToken(store.state)
        if (token) {
            request.headers.common['Authorization'] = `Bearer ${token}`
        }

        return request
    }
})

// Response interceptor
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const { status } = error.response

        if (status >= 400) {
            return Promise.reject(error.response.data)
        }
    }
)

export default axios
