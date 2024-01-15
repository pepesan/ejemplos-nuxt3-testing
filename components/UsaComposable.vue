<script setup lang="ts">
import {useFoo} from "~/composables/useFoo";

const foo = useFoo()
</script>

<template>
  <div>
    {{ foo }}
  </div>
</template>

<style scoped>

</style>
