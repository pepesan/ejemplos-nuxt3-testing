import { describe, expect, test } from 'vitest'
import { mockComponent, mountSuspended } from '@nuxt/test-utils/runtime'
import Madre from '../../../components/Madre.vue'
import Hija from '../../../components/Hija.vue'
import {mount, shallowMount} from "@vue/test-utils";

describe("mockComponent", () => {
    test('should mock', async () => {
        const wrapper = mount(Madre)

        expect(wrapper.html()).toContain("Hija")
    })
    test('should mock', async () => {
        const wrapper = shallowMount(Madre, {
            stubs: {
                Hija: "<div class='stub'>Mocked</div>"
            }
        })
        console.log(wrapper.html())
        // expect(wrapper.html()).toContain("Hija")
        // BUG?
        expect(wrapper.html()).toContain("Mocked")
    })
})

