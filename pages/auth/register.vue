<template>
  <div class="min-h-screen bg-[#020617] text-white space-y-6">
     <!-- Header -->
     <div class="relative bg-gray-900 h-24 rounded-md flex items-center justify-between">
    <div class="ml-1">
      <IconBack class="w-5 h-5 text-white hover:cursor-pointer"  @click="goToSeed"  />
    </div>
    <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
      <Logo />
      <span class="text-sm text-white-400">Register</span>
    </div>
  </div>
   <div class="flex flex-col items-center justify-center px-4 space-y-6 text-white">
  <div class="relative">
    <div class="w-32 h-32 rounded-full bg-[#141A2A] flex items-center justify-center text-sm text-gray-400">
      Frame
    </div>
    <div class="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-[#1C2336] flex items-center justify-center border border-gray-500 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536M9 13l6-6m-2 9H5v-2.586a1 1 0 01.293-.707l9-9a1 1 0 011.414 0l2.586 2.586a1 1 0 010 1.414l-9 9a1 1 0 01-.707.293H9z" />
      </svg>
    </div>
  </div>

  <!-- فرم ورودی‌ها -->
  <div class="w-full max-w-sm space-y-4">
    <div>
      <label class="text-sm mb-1 block">Username</label>
      <input type="text" placeholder="Enter your username here ..." class="w-full bg-[#141A2A] text-sm text-white rounded px-4 py-2 placeholder-gray-400 focus:outline-none" />
    </div>

    <div>
      <label class="text-sm mb-1 block">Nick name</label>
      <input type="text" placeholder="Enter your nick name  ..." class="w-full bg-[#141A2A] text-sm text-white rounded px-4 py-2 placeholder-gray-400 focus:outline-none" />
    </div>

    <div>
      <label class="text-sm mb-1 block">Cloud password</label>
      <input type="password" placeholder="Enter your password here ..." class="w-full bg-[#141A2A] text-sm text-white rounded px-4 py-2 placeholder-gray-400 focus:outline-none" />
    </div>
  </div>
</div>

   
     <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2">
      <button
      class="w-60 py-3 bg-gray-900 rounded text-sm mx-auto hover:cursor-pointer" @click="register">
      Register
    </button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'
const router = useRouter()

const { username, nickname, password, register } = useAuthStore();
function goToSeed() {
  router.push('/auth/seed') 
}
definePageMeta({
  layout: false
})
</script>
