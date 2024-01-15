import {describe, expect, test} from "vitest";
import {mount} from '@vue/test-utils';
import Pagina from '../../pages/components/index.vue'
describe("import vue components", () =>{
    test("normal imports Home as expected", async ()=>{
        vi.stubGlobal('definePageMeta', vi.fn())
        expect(Pagina).toBeTruthy();
        const wrapper = mount(Pagina)
        expect(wrapper.html()).toContain("Componentes")
    })
})
