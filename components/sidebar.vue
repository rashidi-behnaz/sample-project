<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-40 bg-black/60 lg:hidden"
      @click="ui.toggleSidebar(false)"
    />
  </transition>
  <transition name="slide-left">
    <aside
      v-if="visible"
      class="fixed top-0 left-0 z-50 h-full w-3/4 max-w-xs
             bg-gray-900 text-white flex flex-col">

        <div class="bg-gray-700 flex flex-col items-start px-4 py-5 bg-surface">
          <div class="w-12 h-12 rounded-full bg-gray-500 mb-2" />
          <div class="text-left">
            <p class="text-sm font-medium">Nickname here</p>
            <p class="text-xs text-gray-400">@username_here</p>
          </div>
        </div>

      <nav class="flex-1 px-4 py-6 space-y-4">
        <NuxtLink
        v-for="item in menu"
        :key="item.to"
        :to="item.to"
        class="flex items-center gap-3 py-2 text-sm hover:text-gray-300"
        @click="ui.toggleSidebar(false)"
      >
        <component :is="item.icon" class="w-5 h-5 shrink-0 text-gray-400" />
        <span>{{ item.label }}</span>
      </NuxtLink>
     </nav>
     
      <div class="py-4 text-center text-xs text-gray-500">
        {{ new Date().toLocaleDateString('en-GB') }} &nbsp; {{ version }}
      </div>
    </aside>
  </transition>
   <transition name="fade">
    <IconNewChat @click="GotoProfile"
      v-if="visible"
      class="fixed bottom-4 left-[calc(75%+12px)] z-50"/>
  </transition>
</template>
<script setup>
    const menu = [
      { label: 'My account',      to: '/account', icon: AccountIcon },
      { label: 'My wallet',       to: '/wallet',  icon: WalletIcon },
      { label: 'About platform',  to: '/about',   icon: InfoIcon },
      { label: 'Logout',          to: '/logout',  icon: LogoutIcon },
    ]
    const version = 'v1.0.0';
     function goToProfile() {
    router.push('/home/profile') 
  }
    import { computed } from 'vue'
    import { useUiStore } from '~/stores/sidebar'
    import AccountIcon  from '~/components/icons/icon-account.vue'
    import WalletIcon   from '~/components/icons/icon-wallet.vue'
    import InfoIcon     from '~/components/icons/icon-about.vue'
    import LogoutIcon   from '~/components/icons/icon-logOut.vue'
    import IconNewChat from './icons/icon-newChat.vue';
    const ui = useUiStore()
    const visible = computed(() => ui.sidebarOpen)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform .25s;
}
.slide-left-enter-from, .slide-left-leave-to  {
  transform: translateX(-100%);
}
</style>
