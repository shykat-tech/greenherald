<template>
  <div class="block-wrapper">
    <div class="logo">
      <img src="../../assets/icons/logo.svg" alt="" />
    </div>

    <!-- Error Message Display -->
    <MessageBlock
      v-if="showError"
      :loadingStatus="'error'"
      :title="'Oops!'"
      :isDarkBg="true"
      :message="'Something went wrong. We couldn’t complete your request. Please try again.'"
    />

    <!-- Success Message Display -->
    <MessageBlock
      v-else-if="showSuccess"
      :loadingStatus="'success'"
      :title="'Success!'"
      :message="'Password reset successfully!'"
      :isDarkBg="true"
    />

    <div v-else class="form-wrapper">
      <h2>Reset your password</h2>
      <p class="subtitle">
        Please choose a password that hasn't been used before.
      </p>

      <form @submit.prevent="handleResetPasswordSubmit" class="form">
        <!-- Password Field -->
        <div class="form-group password-wrapper">
          <label>Password</label>

          <div class="password-input-container">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              class="input"
              :disabled="isLoading"
              @input="checkPasswordRules"
            />

            <!-- Eye toggle button -->
            <button
              type="button"
              class="toggle-eye"
              @click="showPassword = !showPassword"
            >
              <transition name="eye-fade" mode="out-in">
                <svg
                  v-if="showPassword"
                  key="eye-off"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M1 1l22 22"></path>
                  <path d="M10.58 10.58a2 2 0 102.83 2.83"></path>
                  <path
                    d="M9.88 4.24A10.07 10.07 0 0112 4c5 0 9 4 10 7-0.33 1.03-1 2.5-2.12 3.88M6.12 6.12A10.07 10.07 0 002 11c0.33 1.03 1 2.5 2.12 3.88A10.07 10.07 0 0012 20a9.94 9.94 0 004.12-.88"
                  ></path>
                </svg>

                <svg
                  v-else
                  key="eye-on"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </transition>
            </button>
          </div>

          <p v-if="errors.password" class="error-text">
            {{ errors.password }}
          </p>
        </div>

        <!-- Password Requirements -->
        <div class="password-requirements">
          <h5>Your password must contain:</h5>

          <div class="radio-group">
            <div class="checkbox-wrapper">
              <transition name="check-fade">
                <svg
                  v-if="rules.letter"
                  key="checked"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#6FCF97"
                    stroke-width="2"
                  />
                  <path
                    d="M5 8L7 10L11 6"
                    stroke="#6FCF97"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-else
                  key="unchecked"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#6FCF97"
                    stroke-width="2"
                  />
                </svg>
              </transition>
            </div>
            <label>At least 1 letter</label>
          </div>

          <div class="radio-group">
            <div class="checkbox-wrapper">
              <transition name="check-fade">
                <svg
                  v-if="rules.numberOrSpecial"
                  key="checked"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#6FCF97"
                    stroke-width="2"
                  />
                  <path
                    d="M5 8L7 10L11 6"
                    stroke="#6FCF97"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-else
                  key="unchecked"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#6FCF97"
                    stroke-width="2"
                  />
                </svg>
              </transition>
            </div>
            <label>1 number OR 1 special character</label>
          </div>
        </div>

        <div class="form-group password-wrapper">
          <label>Confirm Password</label>

          <div class="password-input-container">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="confirmPassword"
              class="input"
              :disabled="isLoading"
            />

            <!-- Eye toggle button -->
            <button
              type="button"
              class="toggle-eye"
              @click="showConfirmPassword = !showConfirmPassword"
            >
              <transition name="eye-fade" mode="out-in">
                <svg
                  v-if="showConfirmPassword"
                  key="eye-off"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M1 1l22 22"></path>
                  <path d="M10.58 10.58a2 2 0 102.83 2.83"></path>
                  <path
                    d="M9.88 4.24A10.07 10.07 0 0112 4c5 0 9 4 10 7-0.33 1.03-1 2.5-2.12 3.88M6.12 6.12A10.07 10.07 0 002 11c0.33 1.03 1 2.5 2.12 3.88A10.07 10.07 0 0012 20a9.94 9.94 0 004.12-.88"
                  ></path>
                </svg>

                <svg
                  v-else
                  key="eye-on"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </transition>
            </button>
          </div>

          <p v-if="errors.confirmPassword" class="error-text">
            {{ errors.confirmPassword }}
          </p>
        </div>

        <!-- Submit -->
        <div class="button-container">
          <button class="auth-global-btn btn-cancel" @click="router.back()">
            Cancel
          </button>

          <button
            type="submit"
            class="auth-global-btn btn-submit"
            :disabled="isLoading"
          >
            {{ isLoading ? "Resetting Password..." : "Reset Password" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  middleware: ["guest"],
});

import { ref, watch, onMounted } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const router = useRouter();

// Simple reactive state
const isLoading = ref(false);
const showError = ref(false);
const showSuccess = ref(false);

// Password visibility
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Password validation rules
const rules = ref({
  letter: false,
  numberOrSpecial: false,
});

const checkPasswordRules = () => {
  const pwd = password.value || "";
  rules.value.letter = /[A-Za-z]/.test(pwd);
  rules.value.numberOrSpecial = /[\d\W]/.test(pwd);
};

// Form validation
const { handleSubmit, errors } = useForm({
  validationSchema: yup.object({
    password: yup
      .string()
      .matches(/[A-Za-z]/, "Password must contain at least one letter")
      .matches(/[\d\W]/, "Password must contain a number or special character")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  }),
});

const { value: password } = useField("password");
const { value: confirmPassword } = useField("confirmPassword");

// Watch password for validation rules
watch(
  () => password.value,
  () => {
    checkPasswordRules();
  }
);

// Signup handler
const handleResetPasswordSubmit = handleSubmit(async (values) => {
  isLoading.value = true;
  showError.value = false;

  try {
    // Log signup data
    console.log("Signup data:", values);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Show success message
    showSuccess.value = true;

    // API integration structure (uncomment when API is ready):
    /*
    const result = await register(values);
    if (result.success) {
      showSuccess.value = true;
      setTimeout(() => {
        navigateTo('/dashboard');
      }, 2000);
    } else {
      showError.value = true;
    }
    */
  } catch (error) {
    console.error("Signup failed:", error);
    showError.value = true;
  } finally {
    isLoading.value = false;
  }
});

const handleGoogleSignup = () => {
  // Implement Google OAuth signup
  console.log("Google signup clicked");
};

// Initialize form on mount
onMounted(() => {
  // Initialize password validation
  checkPasswordRules();
});
</script>

<style lang="scss" scoped>
.check-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.check-fade-leave-active {
  transition: all 0.2s ease;
}

.check-fade-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.check-fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.block-wrapper {
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  min-width: 40rem;
  max-width: 90dvw;

  @include clamp-property("gap", 3, 4);
  @include clamp-property("padding-top", 2, 3);
  @include clamp-property("padding-bottom", 6, 11.19);

  @include mediaSm {
    min-width: unset;
    width: 90svw;
  }

  .logo {
    display: block;
    margin: 0 auto;

    img {
      @include clamp-property("width", 5.4585, 7.4585);
      @include clamp-property("height", 5.4585, 7.5);
    }
  }

  .form-wrapper {
    width: 100%;

    h2 {
      color: #fff;
      text-align: center;
      font-style: normal;
      font-weight: 400;
      line-height: 110%;
      font-family: $font-gloock;

      @include clamp-property("font-size", 2, 3);
      @include clamp-property("margin-bottom", 0.75, 1);
    }

    .subtitle {
      color: $gray-700;
      text-align: center;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 1.5rem */

      @include clamp-property("font-size", 0.875, 1);
      @include clamp-property("margin-bottom", 1, 1.5);
    }

    .form {
      .form-group {
        display: flex;
        flex-direction: column;

        @include clamp-property("margin-top", 1.25, 2);

        label {
          margin-bottom: 0.5rem;

          color: #fff;
          font-family: $font-manrope;
          font-style: normal;
          font-weight: 500;
          line-height: normal;

          @include clamp-property("font-size", 1, 1.125);
        }

        .error-text {
          color: #ef4444;
          font-size: 0.85rem;
          margin-top: 4px;
        }

        .input {
          outline: none;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.06);
          display: flex;

          align-items: center;
          gap: 0.5rem;
          align-self: stretch;
          border: 2px solid transparent;
          transition: all 0.2s ease-in-out;
          color: #fff;

          width: 100%;

          @include clamp-property("padding", 1.25, 1.25);
          &:focus {
            border-color: $yellow-600;
            border-radius: 0.75rem;
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        }
      }

      .password-wrapper {
        position: relative;
      }

      .password-input-container {
        position: relative;
      }

      .toggle-eye {
        @include clamp-property("width", 1.75, 2);
        @include clamp-property("height", 1.75, 2);
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;

        svg {
          width: 100%;
          height: 100%;
          object-fit: contain;

          stroke: $green-50;
        }
      }

      .eye-fade-enter-active,
      .eye-fade-leave-active {
        transition: all 0.3s ease;
      }

      .eye-fade-enter-from {
        opacity: 0;
        transform: scale(0.8) rotate(-15deg);
      }

      .eye-fade-leave-to {
        opacity: 0;
        transform: scale(0.8) rotate(15deg);
      }
    }
  }

  .password-requirements {
    color: #e8eae8;
    font-family: $font-manrope;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    @include clamp-property("margin-top", 1.5, 2);

    h5 {
      color: #e8eae8;
      font-family: $font-manrope;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    }

    .radio-group {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .checkbox-wrapper {
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }

      label {
        color: #e8eae8;
        font-family: $font-manrope;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
      }
    }
  }

  .button-container {
    display: flex;
    align-items: center;

    @include clamp-property("gap", 0.875, 1.125);
    @include clamp-property("margin-top", 1.75, 2);

    @include mediaSm {
      flex-direction: column;
    }

    .btn-cancel {
      color: $golden-700;
      border: 1px solid $golden-700;

      &:hover {
        color: $golden-600;
      }

      @include mediaSm {
        order: 2;
      }
    }

    .btn-submit {
      color: $white;

      background: $golden-700;

      &:hover:not(:disabled) {
        background: $yellow-600;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
}
</style>
