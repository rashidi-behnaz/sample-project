<template>
  <div class="h-screen flex flex-col justify-between items-center bg-gray-900 text-white px-6 py-10">
    <div class="flex flex-col items-center">
      <div class="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-3xl font-bold">
        🧬
      </div>
      <h1 class="text-xl mt-4 font-semibold text-center">Platform Name</h1>
      <p class="text-sm text-gray-400 text-center mt-1">Lorem Ipsum is simply dummy text of the printing</p>
    </div>

    <div class="w-full flex flex-col gap-4">
      <NuxtLink to="/auth/seed">
        <button class="w-full py-3 border border-gray-500 rounded-lg text-white font-medium hover:bg-gray-800">register</button>
      </NuxtLink>
      <NuxtLink to="/auth/login">
        <button class="w-full py-3 border border-gray-500 rounded-lg text-white font-medium hover:bg-gray-800">login</button>
      </NuxtLink>
    </div>
  </div>
</template>
