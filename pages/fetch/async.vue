<template>
  <div class="max-w-full">
    <h2>Fetch</h2>
    <AsyncComponent></AsyncComponent>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
<script setup lang="ts">
import AsyncComponent from "~/components/AsyncComponent.vue";
</script>
