import {describe, test, expect, beforeAll, afterAll} from "vitest";
import { sayHello } from '../../common_logic/myModule';
describe("runs", ()=>{
    test("test method", () => {
        expect(sayHello('test')).toBe('hola, test');
    })
    test("test method with empty string", () => {
        expect(sayHello('')).toBe('hola, ');
    })
    test("test method with undefined Throws Error", () => {
        expect(() => sayHello(undefined)).toThrowError('message is required');
    })
})
