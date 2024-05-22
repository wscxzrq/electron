<template>
  <main class="drag">
    <div id="mm"></div>
    <MMFooter />
  </main>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import FlipClock from '@renderer/composables/mm'
import '@renderer/assets/filpClock.scss'
import MMFooter from '@renderer/components/footer.vue'
onMounted(() => {
  const instance = new FlipClock({
    el: '#mm',
    type: 'clock',
    timing: {
      minute:8,
      second: 10
    }
  })
  instance.render()
})
</script>

<style lang="scss">
:root {
  --bgColor:#f6bec8;
  // --color:#000;
}
</style>
