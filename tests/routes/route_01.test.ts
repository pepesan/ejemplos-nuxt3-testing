import { describe, expect, test } from 'vitest'

import { mountSuspended } from '@nuxt/test-utils/runtime'

import Home from '../../pages/index.vue'
import About from '../../pages/about.vue'
import PadrePage from '../../pages/components/padre.vue'
import ProductDetailsPage from '../../pages/products/[id].vue'
import {setup} from "@nuxt/test-utils/e2e";

describe('routing', async () => {
    await setup({
        server: true,
        setupTimeout: 20000,
        runner: "vitest",
        testTimeout:  20000,
    })
    test('defaults to index page', async () => {
        // console.log(useRoute())
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
    test('allows pushing to other pages', async () => {
        await navigateTo('/products/1')
        // console.log(useNuxtApp().$router.currentRoute.value)
        expect(useNuxtApp().$router.currentRoute.value.path).toEqual('/products/1')
        await nextTick()
        expect(useRoute().path).toEqual('/products/1')
        expect(useNuxtApp().$router.currentRoute.value.params.id).toBe("1")
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

    test('handles nuxt routing', async () => {
        const component = await mountSuspended(ProductDetailsPage, { route: '/products/1' })
        // console.log(component.html())
        // console.log("useroute"+ useRoute())
        expect(component.html()).toContain("Product description")
        expect(component.html()).toContain("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")

    })

})
