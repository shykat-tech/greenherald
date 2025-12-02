export const useAuth = () => {
  const authStore = useAuthStore()
  const router = useRouter()
  
  const login = async (credentials) => {
    const result = await authStore.login(credentials)
    if (result.success) {
      router.push('/dashboard')
    }
    return result
  }
  
  const register = async (userData) => {
    const result = await authStore.register(userData)
    if (result.success) {
      router.push('/dashboard')
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