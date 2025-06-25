<template>
  <div class="min-h-screen bg-[#0F172A] text-white p-4 space-y-6">
    <div class="flex justify-center">
      <div class="relative">
        <div class="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
          <span class="text-gray-400">Image</span>
        </div>
        <div class="absolute bottom-0 right-0 bg-gray-600 p-1 rounded-full text-xs">
          ✎
        </div>
      </div>
    </div>

    <input
      type="text"
      placeholder="Enter your username here ..."
      v-model="username"
      class="w-full bg-[#1E293B] p-2 rounded text-sm placeholder-gray-400"
    />

    <input
      type="text"
      placeholder="Enter your nick name ..."
      v-model="nickname"
      class="w-full bg-[#1E293B] p-2 rounded text-sm placeholder-gray-400"
    />

    <input
      type="password"
      placeholder="Enter your password here ..."
      v-model="password"
      class="w-full bg-[#1E293B] p-2 rounded text-sm placeholder-gray-400"
    />

   
     <div class="fixed bottom-4 left-4 right-4">
      <button
      class="w-full py-3  border border-gray-500 rounded hover:bg-gray-800" @click="register">
      Register
    </button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'
const { username, nickname, password, register } = useAuthStore()
</script>
