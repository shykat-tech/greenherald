export default defineNuxtRouteMiddleware((to, from) => {
  // Skip auth check on server-side to prevent hydration mismatch
  if (process.server) return

  const authStore = useAuthStore()
  
  // If user is already authenticated, redirect to dashboard
  if (authStore.isAuthenticated) {
    return navigateTo('/dashboard')
  }
})