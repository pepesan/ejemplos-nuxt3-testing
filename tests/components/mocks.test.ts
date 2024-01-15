import { expect, it } from 'vitest'
import { mockComponent, mountSuspended } from '@nuxt/test-utils/runtime'
import Padre from '../../components/Padre.vue'

mockComponent('Hijo', async () => {
    const { h } = await import('vue')
    return {
        setup() {
            return () => h('div', null, 'Mocked')
        },
    }
})

it('should mock', async () => {
    const component = await mountSuspended(Padre)
    expect(component.html()).toContain("Mocked")
})
