import {describe, expect, test} from "vitest";
import {mount} from '@vue/test-utils';
import Pagina from '../../pages/events/index.vue'
import MiContador from '../../components/MiContador.vue'
describe("import vue components", () =>{
    test("normal imports Home as expected", async ()=>{
        vi.stubGlobal('definePageMeta', vi.fn())
        const wrapper = mount(Pagina,
            {
                global: {
                    components:  {
                        MiContador:  MiContador
                    }
                }
            })
        // console.log(wrapper.html())
        // console.log(wrapper.element.innerHTML)
        expect(wrapper.html()).toContain("Eventos")
        expect(wrapper.html()).toContain("Add 1")
    })
})
