import { expect, it } from 'vitest'


it('test composable', async () => {
    const { data, error, loading, fetchData }
        = useApi("https://cursosdedesarrollo.com/pactometro/resultados.json");
    await fetchData()
    // console.log(foo)
    console.log(data.value)
    expect(data.value.length).toBe(11)
})
