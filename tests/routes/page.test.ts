import {describe, expect, test} from "vitest";
import {mount} from '@vue/test-utils';
import Pagina from '../../pages/index.vue'
import PaginaAbout from '../../pages/about.vue'
describe("import vue components", () =>{
    test("normal imports Home as expected", async ()=>{
        vi.stubGlobal('definePageMeta', vi.fn())
        expect(Pagina).toBeTruthy();
        const wrapper = mount(Pagina)
        expect(wrapper.html()).toContain("Home")
    })
    test("normal imports about as expected", async ()=>{
        expect(PaginaAbout).toBeTruthy();
        const wrapper = mount(PaginaAbout)
        expect(wrapper.html()).toContain("About")
    })
})
