// @vitest-environment node

import {
    beforeAll,
    afterAll,
    afterEach,
    beforeEach, describe, expect, test, vi } from 'vitest'

const businessHours = [9, 17]

function purchase() {
    const currentHour = new Date().getHours()
    const [open, close] = businessHours

    if (currentHour > open && currentHour < close)
        return { message: 'Success' }

    return { message: 'Error' }
}

describe('purchasing flow', () => {
    beforeAll(() => {
        console.log("antes de todas las pruebas")
    })
    afterAll(() => {
        console.log("después de todas las pruebas")
    })
    beforeEach(() => {
        console.log("antes de cada prueba")
        // tell vitest we use mocked time
        vi.useFakeTimers()
    })

    afterEach(() => {
        console.log("después de cada prueba")
        // restoring date after each test run
        vi.useRealTimers()
    })

    test('allows purchases within business hours', () => {
        // set hour within business hours
        const date = new Date(2000, 1, 1, 13)
        vi.setSystemTime(date)

        // access Date.now() will result in the date set above
        expect(purchase()).toEqual({ message: 'Success' })
    })

    test('disallows purchases outside of business hours', () => {
        // set hour outside business hours
        const date = new Date(2000, 1, 1, 19)
        vi.setSystemTime(date)

        // access Date.now() will result in the date set above
        expect(purchase()).toEqual({ message: 'Error' })
    })
})
