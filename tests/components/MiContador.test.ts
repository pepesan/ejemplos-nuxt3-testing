import {render, fireEvent, screen} from '@testing-library/vue'
import MiContador from '../../components/MiContador.vue'
import { describe, test, expect } from "vitest";
describe('MiContador', () => {
    test('increments value on click', async () => {
        render(MiContador)

        // screen has all queries that you can use in your tests.
        // getByText returns the first matching node for the provided text, and
        // throws an error if no elements match or if more than one match is found.
        screen.getByText('Count is: 0')

        const button = screen.getByText('Add 1')

        // Dispatch a native click event to our button element.
        await fireEvent.click(button)
        await fireEvent.click(button)

        screen.getByText('Count is: 2')
    })
})

