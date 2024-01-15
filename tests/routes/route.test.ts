import { describe, expect, test } from 'vitest'

import { mountSuspended } from '@nuxt/test-utils/runtime'

import Home from '../../pages/index.vue'
import About from '../../pages/about.vue'
import PadrePage from '../../pages/components/padre.vue'

describe('routing', () => {
    test('defaults to index page', async () => {
        console.log(useRoute())
        expect(useRoute().matched[0].meta).toMatchInlineSnapshot(`
      {}
    `)
    })

    test('allows pushing to other pages', async () => {
        await navigateTo('/about')
        expect(useNuxtApp().$router.currentRoute.value.path).toEqual('/about')
        await nextTick()
        expect(useRoute().path).toEqual('/about')
    })

    test('handles nuxt routing', async () => {
        const component = await mountSuspended(Home, { route: '/' })
        expect(component.html()).toContain("Home")
    })
    test('handles nuxt routing', async () => {
        const component = await mountSuspended(About, { route: '/about' })
        expect(component.html()).toContain("About")
    })
    test('handles nuxt routing', async () => {
        const component = await mountSuspended(PadrePage, { route: '/components/padre' })
        expect(component.html()).toContain("Padre")
    })
})
