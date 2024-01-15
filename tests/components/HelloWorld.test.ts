import { mount } from "@vue/test-utils";
import HelloWorld from "../../components/HelloWorld.vue";
import { describe, test, expect } from "vitest";

describe("HelloWorld.vue", () => {

    test("should renders is page content is correct", () => {
        const message = "Happy People";
        const testMessage = "Happy People";
        const wrapper = mount(HelloWorld, {
            props: { message },
        });

        expect(wrapper.text()).toBe(testMessage);
    });

    test("should render if props value is correct", () => {
        const message = "Happy People";
        const testMessage = "Happy People";
        const wrapper = mount(HelloWorld, {
            props: { message },
        });

        expect(wrapper.vm.message).toBe(testMessage);
    });
    test("should render if props value is correct", () => {
        const message = "Happy People";
        const testMessage = "Happy People";
        const wrapper = mount(HelloWorld, {
            props: { message },
        });
        assert(wrapper.vm.message === testMessage)
    });
});
