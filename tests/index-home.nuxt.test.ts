// @vitest-environment nuxt
import { describe, test, expect} from 'vitest'
import {mountSuspended} from "@nuxt/test-utils/runtime";
import Home from '../pages/index.vue';
describe ("Index home", () => {
    test('can also mount an app', async () => {
        const component = await mountSuspended(Home, { route: '/' })
        expect(component.html()).toContain("Home");
    })
})

