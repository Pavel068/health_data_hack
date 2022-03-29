import { App, Plugin } from 'vue'

const devtools: Plugin = {
    install(app: App) {
        if (
            process.env.NODE_ENV === 'development' &&
            // @ts-ignore
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__
        ) {
            // @ts-ignore
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
        }
    },
}

export { devtools }
