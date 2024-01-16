// @vitest-environment node
import { describe, test, expect } from 'vitest'
import {calculaValor, suma} from '../../logic/milogic'

describe('milogic', () => {
    test('caculaValor', () => {
        expect(calculaValor()).toBe("Valor")
    })
    test('suma', () => {
        expect(suma(1,2)).toBe(3)
    })
})

