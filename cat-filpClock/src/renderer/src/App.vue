<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<script setup lang="ts">
import useMouseEvent from './composables/useMouseEvent'
const {mm} = useMouseEvent()
mm()
</script>

<style scoped></style>
