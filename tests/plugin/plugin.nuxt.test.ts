import {describe, test, expect} from 'vitest';

describe('test', () => {
    test('test', async () => {
        const {$hello} = useNuxtApp()
        // console.log(useNuxtApp())
        // console.log($hello("hola"))
        expect($hello("hola")).toBe("Hello hola!")
    })
})
