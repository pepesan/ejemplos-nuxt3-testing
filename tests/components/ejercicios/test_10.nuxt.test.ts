import { describe, expect, test } from 'vitest'
import Madre from '../../../components/Madre.vue'

import { mockComponent } from '@nuxt/test-utils/runtime'
import { mount } from "@vue/test-utils";

describe('Parents components', () => {
    test('should show childs', () => {
        const component = mount(Madre)
        expect(component.html()).toContain("Hija")
    })
})
