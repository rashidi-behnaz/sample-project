<template>
  <div class="h-screen flex flex-col justify-between items-center bg-[#020617] text-white px-6 py-10">
    <div class="flex flex-col items-center">
      <div>
        <SplashLogo />
      </div>
      <h1 class="text-xl mt-4 font-semibold text-center">Platform Name</h1>
      <p class="text-sm text-gray-400 text-center mt-1">Lorem Ipsum is simply dummy text of the printing</p>
    </div>

    <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col space-y-2">
      <NuxtLink to="/auth/seed">
        <button class="w-60 py-3 bg-gray-900 rounded text-sm mx-auto hover:cursor-pointer">register</button>
      </NuxtLink>
      <NuxtLink to="/auth/login">
        <button class="w-60 py-3 bg-gray-900 rounded text-sm mx-auto hover:cursor-pointer">login</button>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
  import SplashLogo from '~/components/icons/splash-logo.vue';

  definePageMeta({
    layout: false
  })
</script>