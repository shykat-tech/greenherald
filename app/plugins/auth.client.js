export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore()
  
  // If token exists, validate and fetch user
  if (authStore.token && !authStore.user) {
    await authStore.validateToken()
  }
})