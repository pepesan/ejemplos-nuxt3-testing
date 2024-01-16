<script setup lang="ts">
const props = defineProps(['foo'])

console.log(props.foo)
</script>

<template>
  <h2>{{foo}}</h2>
</template>

<style scoped>

</style>
