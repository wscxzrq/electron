<template>
  <main
    class="rounded-md px-2 py-1 flex justify-between items-center gap-1 nodrag"
    :style="{ backgroundColor: config.footer.bgColor, color: config.footer.color }"
  >
    <div @click="toggle" class="cursor-pointer">
      <alarm-clock
        v-if="config.clock.type == 'clock'"
        theme="outline"
        size="16"
        strokeLinejoin="bevel"
        strokeLinecap="square"
      />
      <Time v-else theme="outline" size="16" strokeLinejoin="bevel" strokeLinecap="square" />
    </div>
    <div class="flex gap-2 text-sm opacity-80">
      <RouterLink v-if="$route.name == 'clock'" :to="{ name: 'config' }">配置</RouterLink>
      <RouterLink v-else :to="{ name: 'clock' }">时钟</RouterLink>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@renderer/store/useConfigStore'
import { AlarmClock, Time } from '@icon-park/vue-next'
import { useRouter } from 'vue-router';
const router = useRouter()
const { config } = useConfigStore()

const toggle = () => {
  config.clock.type = config.clock.type == 'clock' ? 'timing' : 'clock'
  router.push({name:'clock'})
}
</script>

<style lang="scss" scoped>
main {
  user-select: none;
}
</style>
