import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useConfigStore = defineStore('config', () => {
  const config = ref({
    clock: {
      bgColor: '#f6bec8',
      color: '#fff',
      type: 'clock' as 'clock' | 'timing',
      timing: {
        hour:0,
        second: 8,
        minute: 0,
      }
    },
    footer: {
      bgColor: '#16a085',
      color: '#fff',
      content:'💗爱你呦喵喵老婆💗'
    },
  })

  return { config }
},{persist: true,})
