<template>
  <Suspense>
    <RouterView #default="{ Component }">
      <div>
        <div class="flex justify-center w-full mb-2">
          <el-tooltip effect="dark" content="击爪抽奶茶" placement="right-start">
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
import lottery from '@renderer/composables/lottery'
import { useRoute } from "vue-router"
import { ElMessage } from 'element-plus'

const route = useRoute();
const { config } = useConfigStore()
const { mm } = useMouseEvent()
mm()
const content = config.footer.content
let timer
const smokingMilkTea = () => {
  if(route.name == 'config') {
    ElMessage({
      dangerouslyUseHTMLString: true,
      message: `<div>配置页面无法使</div> <br/> <div>用抽奶茶功能捏</div>`,
      grouping: true,
      type: 'warning',
    })
    return
  }
  let lotterys = lottery()
  let index = randomNum(0,lotterys.length)
  config.footer.content = lotterys[index].text
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    config.footer.content = content
  }, 8000)
}

const randomNum = (min=0,max:number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>

<style scoped></style>
