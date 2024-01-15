import {describe, test, expect, beforeAll, beforeEach, afterEach} from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodoStore } from "~/store/todo";
beforeAll(() => {
    setActivePinia(createPinia());
})

describe("useTodoStore", ()=>{
    let store: ReturnType<typeof useTodoStore>;
    beforeEach(()=> {
        store = useTodoStore()
    })
    afterEach(()=>{
        store.$reset()
    })
    test("create a Store", () => {
        expect(store).toBeDefined()
    })
    test("init with no items", ()=>{
        expect(store.items.length).toBe(0)
    })
    test("creates a todo", ()=>{
        store.add({
            title: "Compra huevos"
        })
        expect(store.items.length).toBe(1)
        expect(store.items[0].title).toBe("Compra huevos")
    })
    test("get by id", ()=>{
        store.add({
            title: "Compra huevos"
        })

        const item = store.items[0]
        expect(item).toBeDefined()
        const todo = store.getById(item.id)
        expect(todo.title).toBe("Compra huevos")
    })
    test("get Ordered Todos", ()=>{
        const items = [
            {
                createdAt: new Date(2021, 2, 14)
            },
            {
                createdAt: new Date(2019, 2, 14)
            },
            {
                createdAt: new Date(2023, 2, 14)
            }
        ]
        // @ts-ignore
        store.items = items;
        const orderedItems = store.getOrderedTodos
        expect(orderedItems[0].createdAt.getFullYear()).toBe(2019)
        expect(orderedItems[1].createdAt.getFullYear()).toBe(2021)
        expect(orderedItems[2].createdAt.getFullYear()).toBe(2023)
    })

    test("removes a todo", ()=>{
        store.add({title:"test"})
        const todo = store.items[0];
        store.remove(todo.id)
        expect(store.items.length).toBe(0);
    })
    test("update a todo", ()=>{
        store.add({title:"test"})
        let todo = store.items[0];
        store.update(todo.id, {
            done: true, title: "Test2"
        })
        todo = store.items[0];
        expect(todo.done).toBe(true);
        expect(todo.title).toBe("Test2");
    })
})
