<template>
  <Suspense>
    <RouterView #default="{ Component }">
      <div>
        <div class="flex justify-center w-full mb-2">
          <el-tooltip effect="dark" content="击喵爪抽奶茶" placement="right-start">
            <img
              :src="zhuzi"
              alt=""
              class="w-6 h-6 cursor-pointer"
              object-fit="cover"
              @click="smokingMilkTea"
            />
          </el-tooltip>
        </div>
        <component
          :is="Component"
          class="px-3 flex flex-col justify-center items-center"
        ></component>
        <MMFooter />
      </div>
    </RouterView>
  </Suspense>
</template>

<script setup lang="ts">
import useMouseEvent from './composables/useMouseEvent'
import MMFooter from '@renderer/components/footer.vue'
import zhuzi from '@renderer/assets/img/zhuzi-select.png'
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
const { mm } = useMouseEvent()
mm()
const content = config.footer.content
const smokingMilkTea = () => {
  config.footer.content = '恭喜抽中喜茶多肉葡萄'
  let timer
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    config.footer.content = content
  }, 5000)
}
</script>

<style scoped></style>
