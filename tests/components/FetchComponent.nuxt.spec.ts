// @vitest-environment nuxt
import {renderSuspended, mountSuspended} from "@nuxt/test-utils/runtime";
import { screen, fireEvent, waitFor } from '@testing-library/vue'
import FetchComponent from "../../components/FetchComponent.vue";
import { describe, test, expect} from "vitest";

describe("FetchComponent.vue", () => {

    test("should renders is page content is correct",async  () => {
        const testMessage = "Petición HTTP con useFetchActualizar";
        await renderSuspended(FetchComponent)
        expect(screen.getByText('Actualizar')).toBeDefined()
        const button = screen.getByText('Actualizar')
        await fireEvent.click(button)
        await waitFor(() => expect(screen.findByText('PSOE')).toBeDefined());
        screen.findByText('PSOE')
        expect(screen.findByText('PSOE')).toBeDefined()
    });
});
