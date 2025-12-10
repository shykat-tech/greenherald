export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore()
  
  // Ensure auth state is properly initialized on client
  await new Promise(resolve => {
    // Wait for next tick to ensure persisted state is restored
    nextTick(() => {
      // If token exists but user is not authenticated, validate token
      if (authStore.token && !authStore.isAuthenticated) {
        authStore.validateToken().finally(resolve)
      } else {
        resolve()
      }
    })
  })
})