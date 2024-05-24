<template>
  <main
    class="drag w-full px-2 text-center mt-2 rounded-md darg text-white flex justify-between items-center"
    :style="{ backgroundColor: config.footer.bgColor, color: config.footer.color }"
  >
    <div class="text-sm">💗爱你呦喵喵老婆💗</div>
    <Navbar />
  </main>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@renderer/store/useConfigStore'
import Navbar from '@renderer/components/Navbar.vue'

const { config } = useConfigStore()
</script>

<style lang="scss" scoped>
main {
  // 取消文字选中效果
  user-select: none;
}
</style>
