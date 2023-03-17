/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import router from '@/router'
import {createPinia} from 'pinia'
import antDesignVue from './antDesignVue'

// Types
import type {App} from 'vue'

export function registerPlugins(app: App) {
    app
        .use(router)
        .use(createPinia())
        .use(antDesignVue)
}
