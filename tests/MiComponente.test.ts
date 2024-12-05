import { mount } from "@vue/test-utils";
import MiComponente from '../components/MiComponente.vue'
import { describe, test, expect } from "vitest";
describe("MiComponente.vue", () => {
    test("should renders is page content is correct", () => {
        const message = "Happy People";
        const testMessage = "Happy People";
        const wrapper = mount(MiComponente, {
            props: { message },
        });
        expect(wrapper.props().message).toBe(testMessage);
        expect(wrapper.text()).toBe(testMessage);
    });
});