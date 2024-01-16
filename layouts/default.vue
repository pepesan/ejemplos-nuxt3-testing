<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/components/props">Props</NuxtLink></li>
          <li><NuxtLink to="/events">Eventos</NuxtLink></li>
          <li><NuxtLink to="/fetch">Fetch</NuxtLink></li>
          <li><NuxtLink to="/fetch/async">Async</NuxtLink></li>
          <li><NuxtLink to="/composables">Composable</NuxtLink></li>
          <li><NuxtLink to="/counter">counter</NuxtLink></li>
          <li><NuxtLink to="/pinia">Pinia</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Merch</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
<script setup lang="ts">
</script>
