import {render, fireEvent, screen} from '@testing-library/vue'
import Model from '../../components/Model.vue'
import {test,describe, expect} from 'vitest';

describe ("test model", () => {
    test('properly handles v-model', async () => {
        render(Model)

        // Asserts initial state.
        screen.getByText('Hi, my name is Alice')

        // Get the input DOM node by querying the associated label.
        const usernameInput = screen.getByLabelText(/username/i)

        // Updates the <input> value and triggers an `input` event.
        // fireEvent.input() would make the test fail.
        await fireEvent.update(usernameInput, 'Bob')

        screen.getByText('Hi, my name is Bob')
    })
})

