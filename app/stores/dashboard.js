import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        actionProgress: 60.0,
        isActionsVisible: false,
        
        // Profile form state
        profileForm: {
            // Personal Details
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            dateOfBirth: '',
            address: '',
            city: '',
            country: '',
            zipCode: '',
            
            // Contact Info
            emergencyContactName: '',
            emergencyContactPhone: '',
            emergencyContactRelation: '',
            
            // Documents & Details
            educationLevel: '',
            batch: '',
            gender: '',
            bloodGroup: '',
            fatherName: '',
            motherName: '',
            professionalDetails: '',
            currentCompany: '',
            maritalStatus: '',
            spouseName: '',
            hasChildren: false,
            
            // Likes & Contributions
            interests: [],
            skills: [],
            contributions: '',
            socialLinks: {
                linkedin: '',
                facebook: '',
                twitter: '',
                github: ''
            }
        },
        
        // Loading and error states
        isLoading: false,
        formErrors: {},
        submitError: null,
        submitSuccess: false,
    }),

    getters: {
        getIsActionsVisible: (state) => state.isActionsVisible,
        getActionProgress: (state) => state.actionProgress,
        getProfileForm: (state) => state.profileForm,
        getIsLoading: (state) => state.isLoading,
        getFormErrors: (state) => state.formErrors,
        getSubmitError: (state) => state.submitError,
        getSubmitSuccess: (state) => state.submitSuccess,
    },

    actions: {
        setIsActionsVisible(value) {
            this.isActionsVisible = value
        },
        setActionProgress(progress) {
            this.actionProgress = progress
        },
        
        // Profile form actions
        updateProfileField(field, value) {
            // Handle nested fields like socialLinks
            if (field.includes('.')) {
                const [parent, child] = field.split('.')
                this.profileForm[parent][child] = value
            } else {
                this.profileForm[field] = value
            }
        },
        
        setFormLoading(loading) {
            this.isLoading = loading
        },
        
        setFormErrors(errors) {
            this.formErrors = errors
        },
        
        clearFormError(field) {
            if (this.formErrors[field]) {
                delete this.formErrors[field]
            }
        },
        
        setSubmitError(error) {
            this.submitError = error
        },
        
        setSubmitSuccess(success) {
            this.submitSuccess = success
        },
        
        // Initialize form with user data
        initializeProfileForm(userData) {
            if (userData) {
                Object.keys(this.profileForm).forEach(key => {
                    if (userData[key] !== undefined) {
                        this.profileForm[key] = userData[key]
                    }
                })
            }
        },
        
        // Submit profile update
        async submitProfileUpdate() {
            this.setFormLoading(true)
            this.setSubmitError(null)
            this.setSubmitSuccess(false)
            
            try {
                console.log('📤 Dashboard Store: Starting profile update...')
                console.log('📤 Profile data to submit:', JSON.stringify(this.profileForm, null, 2))
                
                // For now, let's simulate API call with timeout to test the flow
                await new Promise(resolve => setTimeout(resolve, 1500))
                
                // TODO: Uncomment when API is ready
                // const api = useApi()
                // const { data, error } = await api.put('/user/profile', this.profileForm)
                // if (error) {
                //     this.setSubmitError(error.message || 'Failed to update profile')
                //     return { success: false, error }
                // }
                
                console.log('✅ Dashboard Store: Profile updated successfully (simulated)')
                this.setSubmitSuccess(true)
                
                // Update the user data in auth store if needed
                const authStore = useAuthStore()
                if (authStore.user) {
                    console.log('🔄 Updating auth store user data...')
                    authStore.setUser({ ...authStore.user, ...this.profileForm })
                }
                
                return { success: true, data: this.profileForm }
                
            } catch (error) {
                console.error('💥 Dashboard Store: Profile update error:', error)
                this.setSubmitError('Network error occurred. Please try again.')
                return { success: false, error }
            } finally {
                this.setFormLoading(false)
            }
        },
        
        // Reset form state
        resetForm() {
            this.profileForm = {
                email: '',
                firstName: '',
                lastName: '',
                phone: '',
                dateOfBirth: '',
                address: '',
                city: '',
                country: '',
                zipCode: '',
                emergencyContactName: '',
                emergencyContactPhone: '',
                emergencyContactRelation: '',
                educationLevel: '',
                batch: '',
                gender: '',
                bloodGroup: '',
                fatherName: '',
                motherName: '',
                professionalDetails: '',
                currentCompany: '',
                maritalStatus: '',
                spouseName: '',
                hasChildren: false,
                interests: [],
                skills: [],
                contributions: '',
                socialLinks: {
                    linkedin: '',
                    facebook: '',
                    twitter: '',
                    github: ''
                }
            }
            this.formErrors = {}
            this.submitError = null
            this.submitSuccess = false
        }
    },
})