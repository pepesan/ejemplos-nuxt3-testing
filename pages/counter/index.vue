<script setup lang="ts">
import {ref, computed} from 'vue';
import {useCounterStore} from '@/store/counter.ts'

const store = useCounterStore()

const count = ref(0)

const increaseCount = () =>{
  console.log("increase")
  count.value++
}
const decreaseCount = () =>{
  console.log("decrease")
  count.value--
}

const oddOrEven = computed(() =>{
  if(count.value %2 === 0) return 'even'
  return 'odd'
})
</script>

<template>
  <div class="home">
    <div class="count">
      {{store.count}}
    </div>
    <button @click="store.decrement">-</button>
    <button @click="store.increment">+</button>
    <div>
      This counter is {{store.oddOrEven}}
    </div>
    <div>
      <input
          v-model="store.count"
          type="number"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
