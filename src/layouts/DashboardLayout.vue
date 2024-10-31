<script setup lang="ts">
import NavbarComponent from '/src/components/NavbarComponent.vue'
</script>

<template>
  <main>
    <NavbarComponent />
    <slot />
  </main>
</template>

<style lang="scss" scoped></style>
