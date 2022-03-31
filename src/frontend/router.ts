import { createWebHistory, createRouter } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import store from './store/store'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('./pages/Index.vue'),
        meta: {
            auth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/Login.vue'),
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import('./pages/Users.vue'),
        meta: {
            auth: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.auth)) {
        if (!store.getters.accessToken(store.state)) {
            next({ name: 'Login' })
        }
    }

    next()
})

export default router
