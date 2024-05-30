<template>
  <main class="p-3 drag bg-[#fff] bg-opacity-30 rounded-lg">
    <div class="bg-pink-200 rounded-lg w-full p-3 nodrag h-[400px] overflow-y-auto">
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
            <el-input v-model="config.footer.content" />
          </div>
        </div>
        <div class="body">
          <div class="block">
            背景颜色
            <el-color-picker v-model="config.footer.bgColor" />
          </div>
          <div class="block">
            文字颜色
            <el-color-picker v-model="config.footer.color" />
          </div>
        </div>
      </div>

      <div class="card">
        <h2>时钟模式</h2>
        <div class="body">
          <div class="block">
            <el-radio-group v-model="config.clock.mode" class="ml-4">
              <el-radio value="filpclock" size="large">翻页样式</el-radio>
              <el-radio value="base" size="large">朴素样式</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import FlipClock from '@renderer/composables/FlipClock'
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
watch(
  () => config.clock.mode,
  () => {
    new FlipClock({ el: '#mm', ...config.clock })
  }
)
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
