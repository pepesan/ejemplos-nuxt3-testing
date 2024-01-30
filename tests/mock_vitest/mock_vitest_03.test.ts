import {describe, test, expect, beforeAll, afterAll, vi} from "vitest";
import { sayHello } from '../../common_logic/myModule';
import { createModifiedGreeting } from '../../common_logic/anotherModule';

vi.mock('../../common_logic/myModule', () => ({
    sayHello: vi.fn(),
}));
describe("runs", ()=>{
    test('createModifiedGreeting calls sayHello with the correct name and modifies the result', async () => {
        const expectedName = 'amigo';
        const expectedModifiedGreeting = 'HOLA, AMIGO!';

        vi.mocked(sayHello).mockReturnValueOnce('hola, amigo'); // Set a specific return value for sayHello

        const actualGreeting = createModifiedGreeting(expectedName);

        expect(actualGreeting).toBe(expectedModifiedGreeting);
        expect(vi.mocked(sayHello).mock.calls[0][0]).toBe(expectedName); // Verify sayHello was called with the correct argument
    });
})
