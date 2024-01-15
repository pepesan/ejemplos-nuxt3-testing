<template>
  <div class="max-w-full">
    <h2>Fetch</h2>
    <FetchComponent></FetchComponent>
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
import FetchComponent from "~/components/FetchComponent.vue";
</script>
