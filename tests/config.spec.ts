import { expect, test, describe } from 'vitest'
describe('useRuntimeConfig', () => {
  test('should return the runtimeConfig from nuxt.config', () => {
    const config = useRuntimeConfig()
    expect(config).toBeTypeOf('object')
    expect(config?.public).toEqual({
      hello: 'world',
      testValue: "default",
    })
  })
})

