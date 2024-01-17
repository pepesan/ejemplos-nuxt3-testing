export default defineNuxtPlugin({
    name: 'my-plugin',
    async setup (nuxtApp) {
        console.log("hello2 loaded")
    },
    hooks: {
        // You can directly register Nuxt app runtime hooks here
        'app:created'() {
            const nuxtApp = useNuxtApp()
            console.log("hello2 loaded")
        }
    },
    env: {
        // Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.
        islands: true
    }
})
