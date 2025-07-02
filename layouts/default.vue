<template>
  <Sidebar />
</template>

<script setup lang="ts">
  import Sidebar  from '~/components/sidebar.vue'
  import { useConnectionStore } from '~/stores/connection'
  const connection = useConnectionStore()

  onMounted(() => {
    if (!connection.isConnected) connection.connect()
  })
</script>