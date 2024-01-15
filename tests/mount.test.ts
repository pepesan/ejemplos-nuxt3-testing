import {describe, expect, test} from "vitest";
import {mount} from '@vue/test-utils';
import MiContador from '../components/MiContador.vue';
describe("import vue components", () =>{
    test("normal imports as expected", async ()=>{
        expect(MiContador).toBeTruthy();
        const wrapper = mount(MiContador)
        const button = wrapper.find("button")
        expect(button).toBeTruthy();
        expect(button.element.innerText).toBe("Add 1");
        const  parr= wrapper.find("p");
        expect(parr).toBeTruthy();
        expect(parr.element.innerHTML).toBe("Count is: 0")
    })
})
