import { defineStore } from 'pinia'

export const useActiveTabStore = defineStore('activeTab', () => {
  const activeTab = ref('tab1') 

  function setTab(tab: string) {
    activeTab.value = tab
  }

  return { activeTab, setTab }
})
