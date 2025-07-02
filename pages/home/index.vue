<template>
  <Header />
   <div class="min-h-screen p-4 bg-[#020617]">
    <ChatTab />
    <component :is="currentComponent" class="transition duration-300" />
  </div>
</template>

<script setup lang="ts">
  import Header from '~/components/header.vue'
  import { useConnectionStore } from '~/stores/connection'

  const connection = useConnectionStore()

  onMounted(() => {
    if (!connection.isConnected) connection.connect()
  })



import { computed } from 'vue'
import { useActiveTabStore } from '@/stores/active-tab'
import ChatTab from '@/components/tabs/chat-tabs.vue'
import AllChat from '@/components/tabs/all-chat.vue'
import SentRequest from '@/components/tabs/sent-request.vue'
import RecievedRequest from '@/components/tabs/recieved-request.vue'

const store = useActiveTabStore()

const currentComponent = computed(() => {
  switch (store.activeTab) {
    case 'tab1': return AllChat
    case 'tab2': return RecievedRequest
    case 'tab3': return SentRequest
    default: return AllChat
  }
})
</script>
