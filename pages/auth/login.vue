<template>
  <main class="min-h-screen bg-[#0f172a] text-white p-4 space-y-6">
    <!-- Header -->
    <div class="flex items-center space-x-3">
      <button class="text-white">←</button>
      <h2 class="text-lg font-semibold">Login</h2>
    </div>

    <!-- Password Field -->
    <div>
      <label class="text-sm mb-1 block">Cloud password</label>
      <input
        v-model="password"
        type="password"
        placeholder="Enter your password here ..."
        class="w-full bg-[#1e293b] p-3 rounded text-sm placeholder-gray-400 focus:outline-none"
      />
    </div>

    <!-- Seed Inputs -->
    <div>
      <label class="text-sm mb-2 block">Your seeds</label>
      <div class="grid grid-cols-3 gap-3">
        <input
          v-for="i in 12"
          :key="i"
          v-model="seeds[i - 1]"
          :placeholder="`${i}-`"
          class="bg-[#1e293b] p-2 rounded text-sm text-white placeholder-gray-500 focus:outline-none"
        />
      </div>
    </div>

    <!-- Login Button -->
    <div class="fixed bottom-4 left-4 right-4">
      <button
        class="w-full py-3 rounded border border-gray-500 hover:bg-gray-800"
        @click="login"
      >
        Login
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
const auth = useAuthStore()

const password = ref('')
const seeds = ref<string[]>(Array(12).fill(''))

function login() {
  console.log('Logging in with:', { password: password.value, seeds: seeds.value })
}
</script>
