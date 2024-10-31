<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <main class="w-screen h-screen">
    <RouterView v-slot="{ Component }">
      <component :is="route.meta.layout">
        <component :is="Component"></component>
      </component>
    </RouterView>
  </main>
</template>

<style scoped></style>
