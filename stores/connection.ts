import { defineStore } from 'pinia'

export const useConnectionStore = defineStore('connection', {
  state: () => ({
    status: 'connecting' as 'connecting' | 'connected' | 'error'
  }),

  getters: {
    isConnected: (state) => state.status === 'connected',
    isConnecting: (state) => state.status === 'connecting'
  },

  actions: {
    async connect () {
      this.status = 'connecting'
      try {
        // Suppose it takes two seconds for the server to respond.
        await new Promise(res => setTimeout(res, 2000))
        this.status = 'connected'
      } catch (e) {
        this.status = 'error'
      }
    }
  }
})