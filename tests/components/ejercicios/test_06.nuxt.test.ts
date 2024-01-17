import { expect, test } from 'vitest'
import { mockComponent, mountSuspended } from '@nuxt/test-utils/runtime'
import Madre from '../../../components/Madre.vue'
import {mount} from "@vue/test-utils";

mockComponent('Hija', () => import('./MockComponent.vue'))

test('should mock', async () => {
    const component = await mountSuspended(Madre)
    console.log(component.html())
    // Bug https://github.com/nuxt/test-utils/issues/708
    expect(component.html()).toContain("Mocked")
})
