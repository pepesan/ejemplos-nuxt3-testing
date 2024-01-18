import { expect, it } from 'vitest'


it('test composable', () => {
    const foo = useFoo()
    // console.log(foo)
    // console.log(foo.value)
    expect(foo.value).toBe('bar')
})
