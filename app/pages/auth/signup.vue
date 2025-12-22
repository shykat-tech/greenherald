<template>
  <div class="block-wrapper">
    <!-- Error Message Display -->
    <div v-if="showError" class="message-section">
      <MessageBlock
        :loadingStatus="'pending'"
        :title="'Verification in Progress'"
        :message="'Thank you! Your information has been submitted successfully. Our team will verify your details. Please check your email for updates. This process may take up to 24–48 hours.'"
        :isDarkBg="true"
      />
    </div>

    <!-- Success Message Display -->
    <div v-else-if="showSuccess" class="message-section">
      <MessageBlock
        :loadingStatus="'success'"
        :title="'Success!'"
        :message="'Your signup request has been submitted successfully! We will process your application and contact you soon.'"
        :isDarkBg="true"
      />

      <!-- Action buttons for success state -->
      <div class="message-actions">
        <button @click="handleCreateAnother" class="btn-success">
          Submit Another Application
        </button>
        <NuxtLink to="/auth/signin" class="btn-signin">
          Go to Sign In
        </NuxtLink>
      </div>
    </div>

    <!-- Step 1: Account Creation -->
    <div v-else-if="currentStep === 1" class="step-content">
      <div class="logo" @click="goToHome" style="cursor: pointer">
        <img src="../../assets/icons/logo.svg" alt="" />
      </div>
      <div>
        <AccountCreateInfo
          @submit="handleAccountCreateSubmit"
          :isLoading="isLoading"
        />
      </div>
    </div>

    <!-- Step 2: Payment -->
    <div v-else-if="currentStep === 2" class="step-content">
      <div class="logo" @click="goToHome" style="cursor: pointer">
        <img src="../../assets/icons/logo.svg" alt="" />
      </div>
      <div>
        <AccountCreatePayment
          @submit="handlePaymentSubmit"
          @back="handleBackToStep1"
          :isLoading="isLoading"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  middleware: ["guest"],
});

import { ref, computed, watch, onMounted } from "vue";

// Auth store for persistent state
const authStore = useAuthStore();

const router = useRouter();

const goToHome = () => {
  router.push({ path: "/" });
};

// Ensure signupFlow is initialized
if (!authStore.signupFlow) {
  authStore.signupFlow = {
    currentStep: 1,
    accountData: {
      firstName: "",
      lastName: "",
      phone: "",
      graduationYear: "",
      major: "",
    },
    paymentData: {
      paymentMethodType: "",
      cardMethod: "",
      mfsMethod: "",
      amount: 5000000,
      currency: "BDT",
    },
    showError: false,
    showSuccess: false,
  };
}

// Always reset error and success states when component loads
authStore.setSignupError(false);
authStore.setSignupSuccess(false);
authStore.setSignupStep(1);

// Local reactive references to store state with safe fallbacks
const currentStep = computed(() => authStore.signupFlow?.currentStep || 1);
const isLoading = ref(false);
const showError = computed(() => authStore.signupFlow?.showError || false);
const showSuccess = computed(() => authStore.signupFlow?.showSuccess || false);

// Step handlers
const handleAccountCreateSubmit = async (data) => {
  isLoading.value = true;
  authStore.setSignupError(false);

  try {
    // Store account creation data
    authStore.updateAccountData(data);
    console.log("Step 1 - Account data:", authStore.signupFlow.accountData);

    // Always proceed to next step
    authStore.setSignupStep(2);
    updateUrlHash(2);
  } catch (error) {
    console.error("Account creation failed:", error);
    authStore.setSignupError(true);
  } finally {
    isLoading.value = false;
  }
};

const handlePaymentSubmit = async (data) => {
  isLoading.value = true;
  authStore.setSignupError(false);

  try {
    // Store payment data
    authStore.updatePaymentData(data);

    console.log("Step 2 - Payment data:", authStore.signupFlow.paymentData);
    console.log("Complete signup flow data:", {
      account: authStore.signupFlow.accountData,
      payment: authStore.signupFlow.paymentData,
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simple validation to determine success or error
    const accountData = authStore.signupFlow.accountData;
    const paymentData = authStore.signupFlow.paymentData;

    const hasRequiredAccountData =
      accountData.firstName &&
      accountData.lastName &&
      accountData.phone &&
      accountData.graduationYear &&
      accountData.major;

    const hasRequiredPaymentData =
      paymentData.paymentMethodType &&
      (paymentData.cardMethod || paymentData.mfsMethod);

    if (hasRequiredAccountData && hasRequiredPaymentData) {
      // Show success message - no authentication
      authStore.setSignupSuccess(true);
    } else {
      // Show error message if required fields are missing
      authStore.setSignupError(true);
    }
  } catch (error) {
    console.error("Payment submission failed:", error);
    authStore.setSignupError(true);
  } finally {
    isLoading.value = false;
  }
};

// URL hash management for step tracking
const updateUrlHash = (step) => {
  if (process.client) {
    window.location.hash = `step-${step}`;
  }
};

const initializeFromHash = () => {
  if (process.client && window.location.hash) {
    const hashStep = window.location.hash.replace("#step-", "");
    const stepNumber = parseInt(hashStep);
    if (stepNumber >= 1 && stepNumber <= 2) {
      authStore.setSignupStep(stepNumber);
    }
  } else {
    authStore.setSignupStep(1);
    updateUrlHash(1);
  }
};

// Back navigation handler
const handleBackToStep1 = () => {
  authStore.setSignupStep(1);
  updateUrlHash(1);
};

// Action button handlers for success/error states
const handleRetrySubmission = () => {
  authStore.setSignupError(false);
  // Stay on step 2 to allow user to retry
};

const handleResetForm = () => {
  authStore.resetSignupFlow();
  authStore.setSignupStep(1);
  updateUrlHash(1);
};

const handleCreateAnother = () => {
  authStore.resetSignupFlow();
  authStore.setSignupStep(1);
  updateUrlHash(1);
};

// Initialize step from URL hash on mount
onMounted(() => {
  if (!authStore.signupFlow) {
    authStore.initializeSignupFlow();
  }

  authStore.setSignupError(false);
  authStore.setSignupSuccess(false);
  initializeFromHash();
});

// Watch for step changes and update URL hash
watch(
  () => authStore.signupFlow?.currentStep,
  (newStep) => {
    if (newStep) {
      updateUrlHash(newStep);
      authStore.setSignupError(false);
      authStore.setSignupSuccess(false);
    }
  }
);
</script>

<style lang="scss" scoped>
.block-wrapper {
  @include clamp-property("gap", 3, 4);
  @include clamp-property("padding-top", 2, 3);
  @include clamp-property("padding-bottom", 2, 11.19);

  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  width: max(41rem, 31svw);

  @include mediaSm {
    min-width: unset;
    width: 90svw;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;

    img {
      @include clamp-property("width", 5.4585, 7.4585);
      @include clamp-property("height", 5.4585, 7.5);
    }
  }
}

.message-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.message-actions {
  @include clamp-property("gap", 1, 1.5);
  @include clamp-property("margin-top", 2, 3);

  display: flex;
  flex-direction: column;
  width: 100%;

  @include mediaSm {
    flex-direction: column;
    gap: 1rem;
  }

  .btn-retry,
  .btn-reset,
  .btn-success {
    @include clamp-property("padding", 1.25, 1.5);
    @include clamp-property("font-size", 1, 1.125);
    @include clamp-property("height", 3.5, 4.5);

    color: $white;
    font-family: $font-manrope;
    border-radius: 5rem;
    cursor: pointer;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-style: normal;
    font-weight: 550;
    line-height: 110%;
    transition: all 0.2s ease-in-out;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .btn-retry {
    background: $golden-700;

    &:hover:not(:disabled) {
      background: $yellow-600;
    }
  }

  .btn-reset {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .btn-success {
    background: $golden-700;

    &:hover:not(:disabled) {
      background: $yellow-600;
    }
  }

  .btn-signin {
    @include clamp-property("padding", 1.25, 1.5);
    @include clamp-property("font-size", 1, 1.125);
    @include clamp-property("height", 3.5, 4.5);

    color: $white;
    font-family: $font-manrope;
    border-radius: 5rem;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-style: normal;
    font-weight: 550;
    line-height: 110%;
    transition: all 0.2s ease-in-out;

    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
