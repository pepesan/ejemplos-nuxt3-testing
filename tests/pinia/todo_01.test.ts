import {describe, test, expect, beforeAll} from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodoStore } from "../../store/todo";
beforeAll(() => {
    setActivePinia(createPinia());
})

describe("runs", ()=>{
    test("create a Store", () => {
        const store = useTodoStore();
        expect(store).toBeDefined()
    })
})
