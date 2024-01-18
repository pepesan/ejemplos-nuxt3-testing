import { describe, expect, it } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import {ref} from "vue";
import MockAdapter from 'axios-mock-adapter';
import axios from "axios";
import {useApi} from "~/composables/useApi";
const retData = [
    {
        "nombre":"PP",
        "dipu":137,
        "imagen":"logotipo-pp.png"
    }]

describe("useApi", () => {
    it('should mock core nuxt composables', async () => {
        let mock = new MockAdapter(axios);
        const url = "https://cursosdedesarrollo.com/pactometro/resultados.json"
        mock.onGet(url).reply(200, retData);
        const { data, error, loading, fetchData } = useApi('https://cursosdedesarrollo.com/pactometro/resultados.json');
        await fetchData();
        expect(data.value).toEqual(retData);
    })
})
