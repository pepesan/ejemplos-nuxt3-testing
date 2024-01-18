<script setup>
import { useApi } from '~/composables/useApi';

const { data, error, loading, fetchData } = useApi('https://cursosdedesarrollo.com/pactometro/resultados.json');

onMounted(fetchData); // Fetch data on component mount
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>{{ data }}</div>
</template>

