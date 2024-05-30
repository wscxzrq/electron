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
        minute: 8,
        second: 0,
      },
      mode:'filpclock' as 'filpclock' | 'base'
    },
    footer: {
      bgColor: '#EA9A8E',
      color: '#fff',
      content:'💗爱你呦喵喵老婆💗'
    },
  })

  return { config }
},{persist: true,})
