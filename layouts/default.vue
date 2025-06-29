<template>
  <Header />
  <Sidebar />
</template>

<script setup lang="ts">
  import Header from '~/components/header.vue'
  import Sidebar  from '~/components/sidebar.vue'
  import { useConnectionStore } from '~/stores/connection'
  const connection = useConnectionStore()

  onMounted(() => {
    if (!connection.isConnected) connection.connect()
  })
</script>