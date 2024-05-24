<template>
  <main class="p-3 drag bg-white bg-opacity-30 rounded-lg">
    <div class="bg-pink-200 rounded-lg w-full p-3 nodrag">
      <div class="card">
        <h2>时钟的颜色</h2>
        <div class="body">
          <div class="block">
            背景颜色
            <el-color-picker v-model="config.clock.bgColor" />
          </div>
          <div class="block">
            文字颜色
            <el-color-picker v-model="config.clock.color" />
          </div>
        </div>
      </div>
      <div class="card">
        <h2>倒计时时间</h2>
        <div class="card flex flex-col gap-2">
          <div class="block">
            小时
            <el-input-number v-model="config.clock.timing.hour" :min="0" :max="24" size="small" />
          </div>
          <div class="block">
            分钟
            <el-input-number
              v-model="config.clock.timing.second"
              :min="0"
              :max="100"
              size="small"
            />
          </div>
          <div class="block">
            秒钟
            <el-input-number
              v-model="config.clock.timing.minute"
              :min="0"
              :max="100"
              size="small"
            />
          </div>
        </div>
      </div>

      <div class="card">
        <h2>底部信息</h2>
        <div class="body">
          <div class="block">
            文字内容
            <el-color-picker v-model="config.clock.bgColor" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
</script>

<style lang="scss">
h2 {
  @apply text-sm opacity-80 text-center pb-3;
}
.card {
  @apply bg-pink-300 w-full p-2 rounded-lg mb-2;
  .body {
    @apply flex gap-2 rounded-md p-3;
    .block {
      @apply flex flex-col text-xs gap-2;
      -webkit-app-region: no-drag;
    }
  }
}

.el-popper {
  -webkit-app-region: no-drag;
}
</style>
