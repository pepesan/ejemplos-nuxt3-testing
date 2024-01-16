import { expect, test } from 'vitest'
import { mockComponent, mountSuspended } from '@nuxt/test-utils/runtime'
import Padre from '../../components/Padre.vue'
import {mount} from "@vue/test-utils";

mockComponent('Hijo', async () => {
    const { h } = await import('vue')
    return {
        setup() {
            return () => h('div', null, 'Mocked')
        },
    }
})

test('should mock', async () => {
    const component = await mount(Padre)
    expect(component.html()).toContain("Mocked")
})
