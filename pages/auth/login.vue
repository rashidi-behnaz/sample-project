<template>
  <main class="min-h-screen bg-[#020617] text-white space-y-6">
    <!-- Header -->
     <div class="relative bg-gray-900 h-24 rounded-md flex items-center justify-between">
    <div class="ml-1">
      <IconBack @click="goToIndex"  />
    </div>
    <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
      <Logo />
      <span class="text-sm text-white-400">Login</span>
    </div>
  </div>
   <!-- Password Field -->
    <div class="p-4 m-5 rounded container mx-auto max-w-4xl">
      <label class="text-sm mb-1 block">Cloud password</label>
      <input
        v-model="password"
        type="password"
        placeholder="Enter your password here ..."
        class="w-full bg-gray-900 p-3 rounded text-sm placeholder-gray-400 focus:outline-none"
      />
    </div>
    <!-- Seed Inputs -->
    <div class="p-4 m-5 rounded container mx-auto max-w-4xl">
      <label class="text-sm mb-2 block">Your seeds</label>
      <div class="grid grid-cols-3 gap-3">
        <input
          v-for="i in 12"
          :key="i"
          v-model="seeds[i - 1]"
          :placeholder="`${i}-`"
          class="bg-gray-900 px-3 py-2 py-1 text-center text-xs rounded-lg"
        />
      </div>
    </div>
    <!-- Login Button -->
    <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2">
      <button
        class="w-60 py-3 bg-gray-900 rounded text-sm mx-auto hover:cursor-pointer"
        @click="goToHome"
      >
        Login
      </button>
    </div>
  </main>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import IconBack from '~/components/icons/icon-back.vue';
  import Logo from '~/components/icons/logo.vue';
  import { useAuthStore } from '~/stores/auth'
  const auth = useAuthStore();
  const router = useRouter()

  const password = ref('')
  const seeds = ref<string[]>(Array(12).fill(''))

  function login() {
    console.log('Logging in with:', { password: password.value, seeds: seeds.value })
  }
  function goToIndex() {
    router.push('/') 
  }
   function goToHome() {
    router.push('/home') 
  }
  definePageMeta({
    layout: false
  })
</script>
