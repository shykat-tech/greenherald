import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        siteTheme: 'annual', // 'annual' or 'lifetime'
        isModalOpen: false,
        openModalType: '', //to handle multiple modal types- alumni-confirmation-modal
        alumniStatus: null, // true for alumni, false for non-alumni, null for not set
        
        // Form submission state
        isFormSubmitting: false,
        formSubmissionError: null,
        formSubmissionSuccess: false,
        membershipPlan: null, // object representing selected membership plan
        
        // Alumni-specific form data
        alumniFormData: {
            // Basic Info (always visible)
            fullName: '',
            email: '',
            phone: '',
            
            // Alumni-specific fields (only show if alumniStatus === true)
            graduationYear: '',
            alumniId: '',
            currentPosition: '',
            currentCompany: '',
            department: '',
            
            // Non-alumni specific fields (only show if alumniStatus === false)
            institution: '',
            expectedGraduation: '',
            studentId: '',
            
            // Common fields
            eventPreferences: [],
            specialRequests: '',
            emergencyContact: '',
            dietaryRestrictions: ''
        }
    }),

    getters: {
        getSiteTheme: (state) => state.siteTheme,
        getIsModalOpen: (state) => state.isModalOpen,
        getOpenModalType: (state) => state.openModalType,
        getAlumniStatus: (state) => state.alumniStatus,
        getFormData: (state) => state.alumniFormData,
        getIsFormSubmitting: (state) => state.isFormSubmitting,
        getFormSubmissionError: (state) => state.formSubmissionError,
        getFormSubmissionSuccess: (state) => state.formSubmissionSuccess,
        
        // Conditional field visibility
        showAlumniFields: (state) => state.alumniStatus === true,
        showNonAlumniFields: (state) => state.alumniStatus === false,
        isAlumniStatusSet: (state) => state.alumniStatus !== null,
        getMembershipPlan: (state) => state.membershipPlan,
    },

    actions: {
        openModal(type) {
            this.isModalOpen = true
            this.openModalType = type
        },
        
        closeModal() {
            this.isModalOpen = false
            this.openModalType = ''

            document.documentElement.style.removeProperty("--modal-bg-color");
        },
        setMembershipPlan(plan) {
            this.membershipPlan = plan
            if(this.isModalOpen) {
                this.closeModal()
            }
        },
        
        setAlumniStatus(status) {
            this.alumniStatus = status
            // Clear form data when status changes
            this.resetFormData()
        },
        
        // Form data management
        updateFormField(field, value) {
            if (this.alumniFormData.hasOwnProperty(field)) {
                this.alumniFormData[field] = value
            }
        },
        
        resetFormData() {
            this.alumniFormData = {
                fullName: '',
                email: '',
                phone: '',
                graduationYear: '',
                alumniId: '',
                currentPosition: '',
                currentCompany: '',
                department: '',
                institution: '',
                expectedGraduation: '',
                studentId: '',
                eventPreferences: [],
                specialRequests: '',
                emergencyContact: '',
                dietaryRestrictions: ''
            }
        },
        
        // Form submission
        async submitForm(additionalData = {}) {
            this.isFormSubmitting = true
            this.formSubmissionError = null
            this.formSubmissionSuccess = false
            
            try {
                // Prepare form data based on alumni status
                const submissionData = {
                    ...this.alumniFormData,
                    alumniStatus: this.alumniStatus,
                    ...additionalData
                }
                
                // Filter out fields based on alumni status
                if (this.alumniStatus === true) {
                    // Remove non-alumni specific fields
                    delete submissionData.institution
                    delete submissionData.expectedGraduation
                    delete submissionData.studentId
                } else if (this.alumniStatus === false) {
                    // Remove alumni-specific fields
                    delete submissionData.graduationYear
                    delete submissionData.alumniId
                    delete submissionData.currentPosition
                    delete submissionData.currentCompany
                    delete submissionData.department
                }
                
                // Simulate API call - replace with actual API endpoint
                const response = await $fetch('/api/event-registration', {
                    method: 'POST',
                    body: submissionData
                })
                
                this.formSubmissionSuccess = true
                
                // Reset form after successful submission
                setTimeout(() => {
                    this.resetFormData()
                    this.formSubmissionSuccess = false
                }, 3000)
                
                return { success: true, data: response }
                
            } catch (error) {
                this.formSubmissionError = error.message || 'An error occurred while submitting the form'
                return { success: false, error: error.message }
            } finally {
                this.isFormSubmitting = false
            }
        },
        
        // Validation helpers
        validateRequiredFields() {
            const errors = []
            
            // Common required fields
            if (!this.alumniFormData.fullName.trim()) {
                errors.push('Full name is required')
            }
            if (!this.alumniFormData.email.trim()) {
                errors.push('Email is required')
            }
            if (!this.alumniFormData.phone.trim()) {
                errors.push('Phone number is required')
            }
            
            // Alumni-specific validation
            if (this.alumniStatus === true) {
                if (!this.alumniFormData.graduationYear) {
                    errors.push('Graduation year is required')
                }
                if (!this.alumniFormData.alumniId.trim()) {
                    errors.push('Alumni ID is required')
                }
            }
            
            // Non-alumni specific validation
            if (this.alumniStatus === false) {
                if (!this.alumniFormData.institution.trim()) {
                    errors.push('Institution is required')
                }
                if (!this.alumniFormData.expectedGraduation) {
                    errors.push('Expected graduation is required')
                }
            }
            
            return errors
        },
        
        // Clear form errors
        clearFormError() {
            this.formSubmissionError = null
        }
    },
})