import { expect, it } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

mockNuxtImport('useFoo', () => {
    return () => true
})

it('should mock core nuxt composables', () => {
    expect(useFoo()).toMatchInlineSnapshot('true')
})
