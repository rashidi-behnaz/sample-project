<template>
  <div class="h-screen bg-[#040d21] text-white flex flex-col">
    <section class="relative pb-6">
      <!-- Header icons -->
      <div class="flex items-center justify-between px-4 pt-4">
        <button type="button">
          <IconBack/>
        </button>
        <button type="button">
          <IconThreeDot/>
        </button>
      </div>

      <div class="flex justify-center mt-5">
        <span class="text-6xl font-semibold">X</span>
      </div>

      <!-- Nickname -->
      <div class="mt-5 px-6">
        <h1 class="text-xl font-medium">Nickname here</h1>
        <span class="text-sm text-green-400">Online</span>
      </div>
    </section>

    <section class="relative bg-[#091223] px-6 pt-6 flex-1 flex flex-col justify-start text-sm">
      <!-- Camera button -->
      <button
        type="button"
        class="absolute -top-6 right-6 w-12 h-12 rounded-full bg-[#2e3647]/80 backdrop-blur flex items-center justify-center"
      >
       <IconCamera/>
      </button>

      <!-- Content -->
      <div class="space-y-10">
        <!-- Account Section -->
        <div class="space-y-6">
          <h2 class="text-green-500 font-semibold text-base">Account</h2>

          <!-- Nickname -->
          <div class="space-y-1">
            <p class="font-medium text-sm">Nickname here</p>
            <p class="text-xs text-gray-400">Tap to change nickname</p>
          </div>

          <!-- Username -->
          <div class="space-y-1">
            <p class="font-medium text-sm">@username_here</p>
            <p class="text-xs text-gray-400">Tap to change username</p>
          </div>

          <!-- Balance -->
          <div class="space-y-1">
            <p class="font-medium text-sm">Balance 0.00000 BTC ≃ 0.00 USD</p>
            <p class="text-xs text-gray-400">Tap to see more detail</p>
          </div>
        </div>

        <!-- Security Section -->
        <div class="space-y-6">
          <h2 class="text-green-500 font-semibold text-base">Security</h2>

          <div class="flex items-center gap-3 text-sm">
            <IconSecurity/>
            <span>Account recovery seeds</span>
          </div>

          <div class="flex items-center gap-3 text-sm">
            <IconPassword/>
            <span>Account cloud password</span>
          </div>
        </div>
      </div>

      <!-- Spacer -->
      <div class="flex-1"></div>
    </section>
  </div>
</template>
<script setup>
  import IconBack from '~/components/icons/icon-back.vue';
  import IconThreeDot from '~/components/icons/icon-threedot.vue';
  import IconCamera from '~/components/icons/icon-camera.vue';
import IconPassword from '~/components/icons/icon-password.vue';
import IconSecurity from '~/components/icons/icon-security.vue';


  definePageMeta({
    layout: false
  })
</script>
