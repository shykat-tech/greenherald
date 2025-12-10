export const useAuth = () => {
  const authStore = useAuthStore()
  const router = useRouter()
  
  const login = async (credentials) => {
    const result = await authStore.login(credentials)
    if (result.success) {
      // Use window.location to avoid layout switching issues
      if (typeof window !== 'undefined') {
        window.location.href = '/dashboard'
      }
    }
    return result
  }
  
  const register = async (userData) => {
    const result = await authStore.register(userData)
    if (result.success) {
      // Use window.location to avoid layout switching issues
      if (typeof window !== 'undefined') {
        window.location.href = '/dashboard'
      }
    }
    return result
  }
  
  const logout = () => {
    authStore.logout()
  }
  
  return {
    user: computed(() => authStore.user),
    token: computed(() => authStore.token),
    isAuthenticated: computed(() => authStore.isAuthenticated),
    isLoading: computed(() => authStore.loading),
    login,
    register,
    logout,
  }
}