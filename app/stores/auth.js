import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    // Signup flow state
    signupFlow: {
      currentStep: 1,
      accountData: {
        firstName: '',
        lastName: '',
        phone: '',
        graduationYear: '',
        major: '',
      },
      paymentData: {
        paymentMethodType: '',
        cardMethod: '',
        mfsMethod: '',
        amount: 5000000,
        currency: 'BDT'
      },
      showError: false,
      showSuccess: false,
    },
  }),
  
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    isLoggedIn: (state) => state.isAuthenticated,
    isLoading: (state) => state.loading,
  },
  
  actions: {
    // Login action
    async login(credentials) {
      this.loading = true
      try {
        // Manual authentication for development (no API calls)
        // Simple validation - check if email and password are provided
        if (!credentials.email || !credentials.password) {
          throw new Error('Email and password are required')
        }
        
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(credentials.email)) {
          throw new Error('Please enter a valid email address')
        }
        
        // Password validation (at least 6 characters)
        if (credentials.password.length < 6) {
          throw new Error('Password must be at least 6 characters long')
        }
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Set authenticated state with mock user data
        this.token = `mock-jwt-token-${Date.now()}`
        this.user = {
          id: 1,
          email: credentials.email,
          firstName: 'John',
          lastName: 'Doe',
          name: 'John Doe'
        }
        this.isAuthenticated = true
        
        return { success: true }
      } catch (error) {
        console.error('Login error:', error)
        return { success: false, error: error.message }
      } finally {
        this.loading = false
      }
    },
    
    // Register action
    async register(userData) {
      this.loading = true
      try {
        // Manual authentication for development (no API calls)
        // Simple validation - check if required fields are provided
        if (!userData.email || !userData.password) {
          throw new Error('Email and password are required')
        }
        
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(userData.email)) {
          throw new Error('Please enter a valid email address')
        }
        
        // Password validation (at least 6 characters)
        if (userData.password.length < 6) {
          throw new Error('Password must be at least 6 characters long')
        }
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Auto login after registration with mock data
        this.token = `mock-jwt-token-${Date.now()}`
        this.user = {
          id: 1,
          email: userData.email,
          firstName: userData.firstName || 'New',
          lastName: userData.lastName || 'User',
          name: `${userData.firstName || 'New'} ${userData.lastName || 'User'}`
        }
        // this.isAuthenticated = true
        
        return { success: true }
      } catch (error) {
        console.error('Registration error:', error)
        return { success: false, error: error.message }
      } finally {
        this.loading = false
      }
    },
    
    // Fetch current user
    async fetchUser() {
      if (!this.token) return
      
      this.loading = true
      try {
        const config = useRuntimeConfig()
        const { data, error } = await useFetch(`${config.public.apiBase}/auth/me`, {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        
        if (error.value) {
          // Token might be invalid, logout
          this.logout()
          throw new Error('Failed to fetch user')
        }
        
        this.user = data.value
        this.isAuthenticated = true
      } catch (error) {
        console.error('Fetch user error:', error)
      } finally {
        this.loading = false
      }
    },
    
    // Logout action
    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      
      // Explicitly clear persisted state from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth')
      }
      
      // Don't navigate here - let the calling component handle navigation
      // navigateTo('/auth/signin')
    },
    
    // Check if token is valid
    async validateToken() {
      if (!this.token) return false
      
      try {
        await this.fetchUser()
        return this.isAuthenticated
      } catch (error) {
        return false
      }
    },
    
    // Signup flow actions
    setSignupStep(step) {
      if (!this.signupFlow) this.initializeSignupFlow();
      this.signupFlow.currentStep = step;
    },
    
    updateAccountData(data) {
      if (!this.signupFlow) this.initializeSignupFlow();
      Object.assign(this.signupFlow.accountData, data);
    },
    
    updatePaymentData(data) {
      if (!this.signupFlow) this.initializeSignupFlow();
      Object.assign(this.signupFlow.paymentData, data);
    },
    
    setSignupError(show) {
      if (!this.signupFlow) this.initializeSignupFlow();
      this.signupFlow.showError = show;
    },
    
    setSignupSuccess(show) {
      if (!this.signupFlow) this.initializeSignupFlow();
      this.signupFlow.showSuccess = show;
    },
    
    initializeSignupFlow() {
      this.signupFlow = {
        currentStep: 1,
        accountData: { firstName: '', lastName: '', phone: '', graduationYear: '', major: '' },
        paymentData: { paymentMethodType: '', cardMethod: '', mfsMethod: '', amount: 5000000, currency: 'BDT' },
        showError: false,
        showSuccess: false,
      };
    },
    
    resetSignupFlow() {
      this.signupFlow = {
        currentStep: 1,
        accountData: { firstName: '', lastName: '', phone: '', graduationYear: '', major: '' },
        paymentData: { paymentMethodType: '', cardMethod: '', mfsMethod: '', amount: 5000000, currency: 'BDT' },
        showError: false,
        showSuccess: false,
      };
    },

    // Set user data
    setUser(userData) {
      this.user = userData
    }
  },
  
  // Persist state
  persist: {
    storage: persistedState.localStorage,
    paths: ['user', 'token', 'isAuthenticated', 'signupFlow'],
  },
})