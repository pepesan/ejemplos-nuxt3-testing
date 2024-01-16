import { expect, test } from 'vitest'
import Madre from '../../../components/ejercicios/Madre.vue'

import {mountSuspended} from "@nuxt/test-utils/runtime";
import {mount} from "@vue/test-utils";


test('should mock', async () => {
    const component = await mount(Madre)
    // console.log(component.html())
    expect(component.html()).toContain("Madre")
    expect(component.html()).toContain("Hija")
})
