import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'
import router from './router'
import { devtools } from './devtools'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App).use(devtools).use(store).use(router).use(BootstrapVue3).mount('#app')
