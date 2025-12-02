export const useApi = () => {
  const config = useRuntimeConfig()
  const authStore = useAuthStore()
  
  const apiFetch = async (url, options = {}) => {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    }
    
    // Add auth token if available
    if (authStore.token) {
      headers.Authorization = `Bearer ${authStore.token}`
    }
    
    try {
      const response = await $fetch(`${config.public.apiBase}${url}`, {
        ...options,
        headers,
      })
      
      return { data: response, error: null }
    } catch (error) {
      // Handle 401 - unauthorized
      if (error.response?.status === 401) {
        authStore.logout()
      }
      
      return { data: null, error }
    }
  }
  
  return {
    get: (url, options) => apiFetch(url, { ...options, method: 'GET' }),
    post: (url, body, options) => apiFetch(url, { ...options, method: 'POST', body }),
    put: (url, body, options) => apiFetch(url, { ...options, method: 'PUT', body }),
    delete: (url, options) => apiFetch(url, { ...options, method: 'DELETE' }),
  }
}