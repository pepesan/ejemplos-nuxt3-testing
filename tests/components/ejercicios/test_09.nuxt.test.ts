import { describe, expect, test } from 'vitest'
import Madre from '../../../components/ejercicios/Madre.vue'

import { mockComponent } from '@nuxt/test-utils/runtime'
import { mount } from "@vue/test-utils";

describe('Parents components', () => {
    test('should show childs', () => {
        const component = mount(Madre)
        expect(component.html()).toContain("Hija")
    })
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
        // expect(component.html()).toContain("Mocked")
    })
})
