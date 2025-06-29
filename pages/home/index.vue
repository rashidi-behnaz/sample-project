<template>
  <Header />
</template>

<script setup lang="ts">
  import Header from '~/components/header.vue'
  import { useConnectionStore } from '~/stores/connection'

  const connection = useConnectionStore()

  onMounted(() => {
    if (!connection.isConnected) connection.connect()
  })
</script>
