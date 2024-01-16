import {render, fireEvent, screen} from '@testing-library/vue'
import Tercero from '../../../components/ejercicios/Tercero.vue';
import { describe, test, expect } from "vitest";

describe('Tercero', () => {
    test('increments value on click', async () => {
        render(Tercero)

        // screen has all queries that you can use in your tests.
        // getByText returns the first matching node for the provided text, and
        // throws an error if no elements match or if more than one match is found.
        screen.getByText('Counter is: 0')

        const button = screen.getByText('Add')

        // Dispatch a native click event to our button element.
        await fireEvent.click(button)
        await fireEvent.click(button)

        screen.getByText('Counter is: 2')
    })
})

