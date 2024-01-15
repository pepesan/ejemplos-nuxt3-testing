import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import {test, expect} from 'vitest'
import AsyncComponent from "../../components/AsyncComponent.vue";
test('can render some component', async () => {
    const wrapper = await renderSuspended(AsyncComponent,{
        route: {
            path: '/fetch/async'
        }
    })
    expect(screen.getByText('Usando useAsyncData')).toBeDefined()
    expect(screen.getByText('PSOE')).toBeDefined()

})
