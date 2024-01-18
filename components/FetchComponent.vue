<template>
  <div>
    <h1>Petición HTTP con useFetch</h1>
    <p v-if="isFetching">Cargando...</p>
    <p v-if="!isFetching && data">
      El resultado de la petición es:
      <pre>{{ data }}</pre>
    </p>
    <button @click="fetchData">Actualizar</button>
  </div>
</template>

<script>

export default {
  name: 'FetchComponent',
  setup() {
    let { data, error, isFetching } = useFetch('https://cursosdedesarrollo.com/pactometro/resultados.json');

    return {
      data,
      error,
      isFetching,
    };
  },
  methods: {
    fetchData() {
      // Realiza la petición HTTP
      useFetch('https://cursosdedesarrollo.com/pactometro/resultados.json');
    },
  },
};
</script>
