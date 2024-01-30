import {describe, test, expect, beforeAll, afterAll} from "vitest";
import { sayHello } from '../../common_logic/myModule';
import { createModifiedGreeting } from '../../common_logic/anotherModule';
describe("runs", ()=>{
    test("test method", () => {
        expect(createModifiedGreeting('friend')).toBe('HOLA, FRIEND!');
    })
    test("test method with empty string", () => {
        expect(createModifiedGreeting('')).toBe('HOLA, !');
    })
    test("test method with undefined Throws Error", () => {
        // expect(() => sayHello(undefined)).toThrowError('message is required');
    })
})
