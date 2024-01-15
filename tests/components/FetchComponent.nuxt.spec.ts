// @vitest-environment nuxt
import {renderSuspended} from "@nuxt/test-utils/runtime";
import { screen, fireEvent } from '@testing-library/vue'
import FetchComponent from "../../components/FetchComponent.vue";
import { describe, test, expect, vi } from "vitest";

describe("FetchComponent.vue", () => {

    test("should renders is page content is correct",async  () => {
        vi.stubGlobal('useFetch', () => Promise.resolve({
            data: [
                {
                    "dato": "valor"
                }
            ]
        }))
        const testMessage = "Petición HTTP con useFetchActualizar";
        await renderSuspended(FetchComponent)
        expect(screen.getByText('Actualizar')).toBeDefined()
        const button = screen.getByText('Actualizar')
        await fireEvent.click(button)
        // falta comprobar que funciona la petición
        // expect(screen.getByText('valor')).toBeDefined()
    });
});
