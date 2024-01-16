<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <div>
    <button @click="count++">Add</button>
    <p>Counter is: {{ count }}</p>
  </div>
</template>

<style scoped>

</style>
