import { describe, expect, test } from 'vitest'
import {render, screen} from "@testing-library/vue";
import { mockComponent, mountSuspended } from '@nuxt/test-utils/runtime'
import Madre from '../../../components/Madre.vue'
import Hija from '../../../components/Hija.vue'
import {mount, shallowMount} from "@vue/test-utils";

describe("mockComponent", () => {
    mockComponent('Hija', async () =>{
        const {h} = await import('vue')
        return {
            setup() {
                return () => h('div', null, "Mocked")
            }
        }
    })
    test('should mock', async () => {
        render(Madre)
        expect(screen.getByText("Mocked")).toBeDefined()
    })

})

