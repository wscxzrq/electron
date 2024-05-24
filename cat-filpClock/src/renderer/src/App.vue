<template>
  <Suspense>
    <RouterView #default="{ Component }">
      <div>
        <div class="flex justify-center w-full mb-2">
          <el-tooltip effect="dark" content="喵喵老婆专属捏" placement="right-start">
            <img :src="zhuzi" alt="" class="w-6 h-6" object-fit="cover" />
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
const { mm } = useMouseEvent()
mm()
</script>

<style scoped></style>
