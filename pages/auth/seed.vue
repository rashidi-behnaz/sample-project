<template>
    <div class="min-h-screen bg-[#020617] text-white">

   <!-- Header -->
   <div class="relative bg-gray-900 h-24 rounded-md flex items-center justify-between">
    <div class="ml-1">
      <IconBack class="w-5 h-5 text-white hover:cursor-pointer"  @click="goToIndex"  />
    </div>
    <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
      <Logo />
      <span class="text-sm text-white-400">Register</span>
    </div>
  </div>
  <!--seed-->
  <div class="p-4 m-5 rounded bg-gray-900 container mx-auto max-w-4xl">
    <p class="text-sm text-gray-300">
      Lorem ipsum odor amet, consectetuer adipiscing elit. Pharetra porta neque primis vulputate netus auctor volutpat dignissim. Massa fames aliquam morbi mattis velit arcu. Elementum est mollis elementum velit, neque interdum sed. Quam egestas
    </p>
  </div>
    

 <div class="p-4 m-4 container mx-auto grid grid-cols-3 gap-4 max-w-4xl">
  <div
    v-for="(seed, index) in seeds"
    :key="index"
    class="bg-gray-900 px-3 py-2 py-1 text-center text-xs rounded-lg"
  >
    {{ index + 1 }}. {{ seed }}
  </div>
</div>

<div class="container mx-auto max-w-4xl mt-4 mb-24 flex justify-center">
  <button 
    class="bg-gray-900 w-48 py-2 rounded-lg text-sm mx-auto block hover:cursor-pointer"
    @click="generateSeeds"
  >
    Regenerate Seeds
  </button>
</div>
 <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2">
       <label class="flex items-center space-x-2 text-sm text-white mb-2">
    <input type="checkbox" class="form-checkbox accent-green-700 w-4 h-4" />
    <span>I wrote down my seed to safe place</span>
  </label>
    <NuxtLink to="/auth/register">
      <button class="w-60 py-3 bg-gray-900 rounded text-sm mx-auto hover:cursor-pointer">
        Continue
      </button>
    </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'
const router = useRouter()

const { seeds, generateSeeds } = useAuthStore();
function goToIndex() {
  router.push('/') 
}
definePageMeta({
  layout: false
})
</script>