<template>
  <div class="relative bg-gray-700 p-4 flex items-center justify-between">
    <div>
      <IconsIconList @click="toggleSidebar()" class="w-5 h-5 text-white hover:cursor-pointer" />
    </div>
    <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
      <Logo />
      <span class="text-sm text-white-400">Chatty</span>
    </div>
    <div>
      <IconSearch/>
    </div>
  </div>
</template>
<script setup>
  import { useUiStore } from '~/stores/sidebar'
  import Logo from './icons/logo.vue';
  import IconSearch from './icons/icon-search.vue';
  const { toggleSidebar } = useUiStore()
</script>