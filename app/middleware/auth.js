export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore()
  
  console.log('Auth Middleware: Running auth check', {
    isServer: process.server,
    isClient: process.client,
    isAuthenticated: authStore.isAuthenticated,
    hasToken: !!authStore.token,
    route: to.path
  })
  
  // On server side, always allow - we'll handle auth on client
  if (process.server) {
    console.log('Auth Middleware: Server side - allowing request')
    return
  }
  
  // On client side, wait for store hydration before checking auth
  if (process.client) {
    // Wait for persisted state to be restored
    await nextTick()
    
    // If we have a token but no authentication, try to validate
    if (authStore.token && !authStore.isAuthenticated) {
      console.log('Auth Middleware: Validating token...')
      await authStore.validateToken()
    }
    
    // Now check authentication
    if (!authStore.isAuthenticated) {
      console.log('Auth Middleware: User not authenticated, redirecting to signin')
      // Use window.location to force a full page reload and avoid layout conflicts
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/signin'
      }
      return
    }
    
    console.log('Auth Middleware: User authenticated, allowing access')
  }
})       