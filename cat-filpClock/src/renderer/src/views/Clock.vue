<template>
  <main>
    <div
      @dblclick="refresh"
      id="mm"
      :style="{ '--bgColor': config.clock.bgColor, '--color': config.clock.color }"
    ></div>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import FlipClock from '@renderer/composables/FlipClock'
import '@renderer/assets/filpClock.scss'
import '@renderer/assets/base.scss'
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
const instance = new FlipClock({ el: '#mm', ...config.clock })
watch(
  () => config.clock.type,
  () => {
    instance
      .destroy()
      .config({ el: '#mm', ...config.clock })
      .render()
  }
)
onMounted(() => {
  instance.render()
})

const refresh = () => {
  if (config.clock.type == 'clock') return
  instance
    .destroy()
    .config({ el: '#mm', ...config.clock })
    .render()
}
</script>

<style lang="scss">
:root {
}
</style>
