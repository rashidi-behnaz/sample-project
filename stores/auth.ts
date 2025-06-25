import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const username = ref('')
  const nickname = ref('')
  const password = ref('')
  const seeds = ref(Array(12).fill('dummyword'))

  function generateSeeds() {
    seeds.value = Array(12).fill(null).map(() => {
      return Math.random().toString(36).substring(2, 7) 
    })
  }

  function register() {
    console.log('Registering user with data:', {
      username: username.value,
      nickname: nickname.value,
      password: password.value,
      seeds: seeds.value
    })
    alert('Registered! (Dummy logic)')
  }

  return {
    username,
    nickname,
    password,
    seeds,
    generateSeeds,
    register
  }
})