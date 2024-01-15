// @vitest-environment nuxt
import { test, expect, describe } from 'vitest'
import {mountSuspended} from "@nuxt/test-utils/runtime";
import AppIndex from "~/pages/index.vue";
import {mount} from "@vue/test-utils";
import {setup, url, createPage} from '@nuxt/test-utils/e2e'
describe('App', async () => {
    await setup({
        server: true,
        browser: true,
        setupTimeout: 20000,
        runner: "vitest",
        browserOptions: {
            type: "chromium"
        }
    })
    test('my test', async () => {

        const pageUrl = url('/about')
        await mountSuspended(AppIndex)
        expect(pageUrl).toContain('about')


        const page = await createPage('/about')
        expect(page.url()).toContain('about')
        await page.screenshot({ path: 'screenshot.png' });
        // console.log(page.html())
        expect(page.getByText("About")).toBeTruthy()
    })
})

