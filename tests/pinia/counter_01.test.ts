import {describe, test, expect, beforeAll, beforeEach, afterEach, vi} from "vitest";
import { defineStore } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import {useTodoStore} from "~/store/todo";

const useCounterStore = defineStore('counter', {
    state: () => ({
        n: 1,
        m: 2
    }),
    getters: {
        doubleN: (state) => state.n * 2,
        doubleM: (state) => state.m * 2,
    },
    actions: {
        incrementN(inc: number = 1) {
            this.n+=inc
            console.log("incrementN + " + inc)
        },
        incrementM(inc: number = 1) {
            this.m+=inc
            console.log("incrementM + " + inc)
        }
    }
})

describe("useTodoStore", ()=> {
    const pinia = createTestingPinia({
        initialState: {
            counter: {
                count: 1,
            }
        },
        stubActions: false,
        createSpy: vi.fn,
    })
    let counter
    beforeEach(() => {
        counter = useCounterStore(pinia)
    })
    afterEach(() => {
        counter.$reset()
    })
    test("double", () => {
        expect(counter.doubleN).toBe(2)
        expect(counter.doubleM).toBe(4)
    })
    test("increment", () => {
        counter.incrementN(1)
        counter.incrementM(1)
        expect(counter.n).toBe(2)
        expect(counter.m).toBe(3)
        expect(counter.doubleN).toBe(4)
        expect(counter.doubleM).toBe(6)
    })
})

