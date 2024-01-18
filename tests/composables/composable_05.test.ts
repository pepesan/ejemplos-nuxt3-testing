import { describe, expect, test } from 'vitest'
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
    test('should mock core nuxt composables', async () => {
        let mock = new MockAdapter(axios);
        const url = "https://cursosdedesarrollo.com/pactometro/resultados.json"
        mock.onGet(url).reply(200, retData);
        const { data, error, loading, fetchData }
            = useApi(url);
        await fetchData();
        expect(data.value).toEqual(retData);
    })
    test('should mock core nuxt composables', async () => {
        let mock = new MockAdapter(axios);
        const url = "https://cursosdedesarrollo.com/pactometro/resultados.json"
        mock.onAny().reply(200, retData);
        const { data, error, loading, fetchData }
            = useApi(url);
        await fetchData();
        expect(data.value).toEqual(retData);
    })
})
