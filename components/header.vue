<template>
  <div class="text-white space-y-6">
    <!--connecting status -->
    <div class="space-y-4">
      <CardConnecting v-if="connection.isConnecting" />

      <CardConnected v-else />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useConnectionStore } from '~/stores/connection'
  import CardConnecting from '~/components/card-connecting.vue'
  import CardConnected from '~/components/card-connected.vue'

  const connection = useConnectionStore()
</script>