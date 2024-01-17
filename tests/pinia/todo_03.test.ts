import {describe, test, expect, beforeAll, beforeEach, afterEach, vi} from "vitest";
import { useTodoStore } from "~/store/todo";
import { createTestingPinia } from '@pinia/testing'

const pinia = createTestingPinia()
var store;
describe("useTodoStore", ()=>{
    beforeAll(()=>{
        store = useTodoStore(pinia)
    })

    beforeEach(()=>{

    })

    afterEach(()=>{

    })

    test("test init", ()=>{

        // state can be directly manipulated
        store.items = []
        expect(store.items).toStrictEqual([])
        // can also be done through patch
        // store.$patch({ name: 'new name' })
        expect(store.items).toStrictEqual([])

        // actions are stubbed by default, meaning they don't execute their code by default.
        // See below to customize this behavior.
        store.add({
            title: "Compra huevos"
        })

        expect(store.add).toHaveBeenCalledTimes(1)
        expect(store.add).toHaveBeenLastCalledWith({
            title: "Compra huevos"
        })
    })
})

