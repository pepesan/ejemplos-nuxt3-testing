<script setup lang="ts">
const { data, pending, error, refresh } = await useAsyncData(
    'resultados',
    () => $fetch('https://cursosdedesarrollo.com/pactometro/resultados.json')
)
</script>

<template>
  <div>
    <h1>Usando useAsyncData</h1>
    <div v-if="data">
      <ul v-for="item in data">
          <li>
            <span>{{ item.nombre }}</span>
            <img :src="`https://cursosdedesarrollo.com/pactometro/img/${item.imagen}`" alt="`logo ${item.nombre}`"/>
            <small>{{ item.dipu }}</small>
          </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
img{
  width: 40px;
}
</style>
