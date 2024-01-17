<script setup lang="ts">
const {$hello} = useNuxtApp()
console.log(useNuxtApp())
console.log($hello("hola"))
const msg = $hello("hola")
</script>

<template>
  <h2>{{msg}}</h2>
</template>

<style scoped>

</style>
