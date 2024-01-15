// @vitest-environment nuxt
import {mountSuspended} from "@nuxt/test-utils/runtime";
import Padre from "../../components/Padre.vue";
import { describe, test, expect, vi } from "vitest";

describe("FetchComponent.vue", () => {

    test("should renders is page content is correct",async  () => {
        const testMessage = "PadreHijo";
        const wrapper =await mountSuspended(Padre)
        // // console.log(wrapper.text());
        // // console.log(wrapper.html());
        expect(wrapper.text()).toBe(testMessage);
    });
});
