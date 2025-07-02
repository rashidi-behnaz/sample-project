
<template>
  <div class="relative bg-gray-700 p-4 flex items-center justify-between animate-pulse">
    <div>
      <IconList />
    </div>
    <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
      <Logo />
      <span class="text-sm text-blue-400">Connecting</span>
    </div>
    <div>
      <IconSearch/>
    </div>
  </div>
</template>
<script setup lang="ts">
  import IconList from './icons/icon-list.vue';
  import IconSearch from './icons/icon-search.vue';
  import Logo from './icons/logo.vue';
</script>