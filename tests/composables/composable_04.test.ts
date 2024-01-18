import { describe, expect, it } from 'vitest'
import {ref} from "vue";
import MockAdapter from 'axios-mock-adapter';
import axios from "axios";
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
        const data = ref(null);
        const error = ref(null);
        const loading = ref(false);
        const fetchData = async () => {
            loading.value = true;
            try {
                const response = await axios.get(url);
                data.value = response.data;
            } catch (error) {
                error.value = error.message;
            } finally {
                loading.value = false;
            }
        };
        await fetchData();
        expect(data.value).toEqual(retData);
    })
})
