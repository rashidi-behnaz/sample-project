<template>
  <div class="flex justify-around  text-white p-4">
    <!-- All chats -->
    <button
      @click="store.setTab('tab1')"
      :class="[
        'bg-gray-900 py-2 px-4 rounded text-sm flex items-center gap-2',
        store.activeTab === 'tab1'
          ? 'text-green-500'
          : 'text-gray-500'
      ]"
    >
      All chats
    </button>
    <!-- Received requests -->
    <button
      @click="store.setTab('tab2')"
      :class="[
        'bg-gray-900 py-2 px-4 rounded text-sm flex items-center gap-2',
        store.activeTab === 'tab2'
          ? 'text-green-500'
          : 'text-gray-500'
      ]"
    >
      <span>Received requests</span>
      <span
        :class="[
          'text-xs font-bold rounded w-5 h-5 flex items-center justify-center',
          store.activeTab === 'tab2' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
        ]"
      >
        2
      </span>
    </button>
    <!-- Sent requests -->
    <button
      @click="store.setTab('tab3')"
      :class="[
        'bg-gray-900  py-2 px-4 rounded text-sm flex items-center gap-2',
        store.activeTab === 'tab3'
           ? 'text-green-500'
          : 'text-gray-500'
      ]"
    >
      Sent requests
    </button>
  </div>
</template>
<script setup lang="ts">
  import { useActiveTabStore } from '@/stores/active-tab'
  const store = useActiveTabStore()
</script>
