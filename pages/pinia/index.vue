<script setup lang="ts">
import {useCounterStore} from "~/store/counter";
const counter = useCounterStore()
</script>

<template>
  <div>
    <h2>Pinia</h2>
    <h3>{{counter.count}}</h3>
    <button @click="counter.increment()">Add 1</button>
  </div>
</template>

<style scoped>

</style>
