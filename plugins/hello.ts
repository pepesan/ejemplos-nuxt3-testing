export default defineNuxtPlugin(() => {
    return {
        name: 'my-plugin',
        async setup (nuxtApp) {
            console.log("my-plugin loaded")
        },
        provide: {
            hello: (msg: string) => `Hello ${msg}!`
        },
        hooks: {
            // You can directly register Nuxt app runtime hooks here
            'app:created'() {
                const nuxtApp = useNuxtApp()
                console.log("my-plugin: app:created")
            }
        },
        env: {
            // Set this value to `false` if you don't want the plugin to run when rendering server-only or island components.
            islands: true
        }
    }
})
