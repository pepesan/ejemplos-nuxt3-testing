import { describe, expect, test } from 'vitest'
import Madre from '../../../components/Madre.vue'

import { mockComponent } from '@nuxt/test-utils/runtime'
import { mount } from "@vue/test-utils";

describe('Parents components', () => {
    test('should show mocked childs', () => {
        mockComponent('Hija', async () => {
            const { h } = await import('vue')
            return {
                setup() {
                    return () => h('h2', null, 'Mocked')
                },
            }
        })
        const component = mount(Madre)
        console.log(component.html())
        // BUG
        expect(component.html()).toContain("Mocked")
    })
})
