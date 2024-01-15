import {mountSuspended} from "@nuxt/test-utils/runtime";
import {describe, test, expect} from 'vitest';
import AppComponent from '../../pages/index.vue';

describe('SomeComponent', () => {
    test('can mount some component', async () => {
        const component = await mountSuspended(AppComponent)
        expect(component.text()).toContain("Home");
    })
})

