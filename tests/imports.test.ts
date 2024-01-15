import {describe, expect, test} from "vitest";

describe("import vue components", () =>{
    test("normal imports as expected", async ()=>{
        const component = await import("../components/MiContador.vue")
        expect(component).toBeDefined()
    })
    test("normal imports as expected", async ()=>{
        const component = await import(`../components/MiContador.vue`)
        expect(component).toBeDefined()
    })
    test("normal imports as expected", async ()=>{
        const name = "MiContador"
        const component = await import(`../components/${name}.vue`)
        expect(component).toBeDefined()
    })
})
