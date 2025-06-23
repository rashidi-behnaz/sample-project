<template>
  <header class="flex flex-col px-4 py-3 bg-white shadow-sm">
    <!-- ردیف اول -->
    <div class="flex items-center justify-between">
      <!-- آیکون منو -->
      <button @click="$emit('menu')" class="text-gray-700">
        <span class="material-symbols-outlined text-2xl">menu</span>
      </button>

      <!-- عنوان -->
      <h1 class="text-base font-semibold text-gray-800">
        {{ isConnected ? title : 'Connecting...' }}
      </h1>

      <!-- آیکون سرچ -->
      <button @click="$emit('search')" class="text-gray-700">
        <span class="material-symbols-outlined text-2xl">search</span>
      </button>
    </div>

    
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  statusText: { type: String, default: '' },
  isConnected: { type: Boolean, default: true }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
</style>
