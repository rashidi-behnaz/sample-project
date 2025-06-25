<template>
  <div class="min-h-screen bg-[#0F172A] text-white p-4 space-y-6">
    <p class="text-sm text-gray-300">
      Please save your seed words. You will need them to recover your account.
    </p>

    <div class="grid grid-cols-3 gap-2">
      <div
        v-for="(seed, index) in seeds"
        :key="index"
        class="bg-[#1E293B] py-2 text-center text-sm rounded"
      >
        {{ index + 1 }}. {{ seed }}
      </div>
    </div>

    <button
      class="mt-4 bg-blue-600 w-full py-2 rounded hover:bg-blue-700"
      @click="generateSeeds"
    >
      Regenerate Seeds
    </button>
 <div class="fixed bottom-4 left-4 right-4">
      
    <NuxtLink to="/auth/register">
      <button class="w-full py-3 rounded border border-gray-500 hover:bg-gray-800">
        Continue
      </button>
    </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'
const { seeds, generateSeeds } = useAuthStore()
</script>