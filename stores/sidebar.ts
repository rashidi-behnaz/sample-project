import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const sidebarOpen = ref(false)

  function toggleSidebar(force:any) {
    sidebarOpen.value = typeof force === 'boolean'
      ? force
      : !sidebarOpen.value
  }

  return { sidebarOpen, toggleSidebar }
})
