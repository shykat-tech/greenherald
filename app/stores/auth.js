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
      signupData: {
        email: '',
        password: '',
      },
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
        const config = useRuntimeConfig()
        const { data, error } = await useFetch(`${config.public.apiBase}/auth/login`, {
          method: 'POST',
          body: credentials,
        })
        
        if (error.value) {
          throw new Error(error.value.message || 'Login failed')
        }
        
        // Store auth data
        this.token = data.value.token
        this.user = data.value.user
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
        const config = useRuntimeConfig()
        // const { data, error } = await useFetch(`${config.public.apiBase}/auth/register`, {
        //   method: 'POST',
        //   body: userData,
        // }) 
        
        // if (error.value) {
        //   throw new Error(error.value.message ||  'Registration failed')
        // }
        
        // Auto login after registration
        // this.token = data.value.token
        // this.user = data.value.user
        this.isAuthenticated = true
        
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
      
      // Navigate to login page
      navigateTo('/login')
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
    
    updateSignupData(data) {
      if (!this.signupFlow) this.initializeSignupFlow();
      Object.assign(this.signupFlow.signupData, data);
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
        signupData: { email: '', password: '' },
        accountData: { firstName: '', lastName: '', phone: '', graduationYear: '', major: '' },
        paymentData: { paymentMethodType: '', cardMethod: '', mfsMethod: '', amount: 5000000, currency: 'BDT' },
        showError: false,
        showSuccess: false,
      };
    },
    
    resetSignupFlow() {
      this.signupFlow = {
        currentStep: 1,
        signupData: { email: '', password: '' },
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