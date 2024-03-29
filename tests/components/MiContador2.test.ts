import {render, fireEvent, screen} from '@testing-library/vue'
import MiContador2 from '../../components/MiContador2.vue'
import { describe, test, expect } from "vitest";
describe('MiContador2', () => {
    test('increments value on click', async () => {
        render(MiContador2)

        // screen has all queries that you can use in your tests.
        // getByText returns the first matching node for the provided text, and
        // throws an error if no elements match or if more than one match is found.
        screen.getByText('Times clicked: 0')

        const button = screen.getByText('increment')

        // Dispatch a native click event to our button element.
        await fireEvent.click(button)
        await fireEvent.click(button)

        screen.getByText('Times clicked: 2')
    })
})

