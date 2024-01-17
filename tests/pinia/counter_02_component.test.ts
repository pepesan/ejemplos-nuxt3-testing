import {describe, test, expect, beforeAll, beforeEach, afterEach, vi} from "vitest";

import { createTestingPinia } from '@pinia/testing'
import {useCounterStore} from "~/store/counter";
import {mount} from "@vue/test-utils";
import UseCounter from "../../pages/pinia/index.vue";


describe("useTodoStore", ()=> {
    let wrapper
    let counter
    beforeEach(() => {
        wrapper = mount(UseCounter, {
            global: {
                plugins: [
                    createTestingPinia({
                        initialState: {
                            counter: {
                                count: 1,
                            }
                        },
                        stubActions: false,
                        createSpy: vi.fn,
                    })],
            },
        })
    })

    test("double", async () => {
        wrapper.find('button').trigger('click')
        await nextTick()
        expect(wrapper.find('h3').text()).toBe('2')
    })
})

