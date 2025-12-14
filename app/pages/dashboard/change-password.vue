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
      :message="'Account created successfully!'"
      :isDarkBg="true"
    />

    <!-- Signup Form -->
    <div v-else class="form-content">
      <div class="form-wrapper">
        <h2>Create your alumni account</h2>

        <form @submit.prevent="handleSignupSubmit" class="form">
          <!-- Password Field -->
          <div class="form-group password-wrapper">
            <label>Password</label>

            <div class="password-input-container">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Enter your password"
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
                placeholder="Confirm your password"
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
          <button type="submit" class="btn-submit" :disabled="isLoading">
            {{ isLoading ? "Creating Account..." : "Sign up" }}
          </button>

          <div class="separator"><span>or</span></div>

          <div class="social-login">
            <button type="button" @click="handleGoogleSignup">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.6 12.227C22.6 11.518 22.5364 10.8361 22.4182 10.1816H13V14.0498H18.3818C18.15 15.2998 17.4455 16.3589 16.3864 17.068V19.577H19.6182C21.5091 17.8361 22.6 15.2725 22.6 12.227Z"
                  fill="#4285F4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.9988 22.0004C15.6988 22.0004 17.9625 21.105 19.617 19.5777L16.3852 17.0686C15.4897 17.6686 14.3443 18.0232 12.9988 18.0232C10.3943 18.0232 8.18977 16.2641 7.40341 13.9004H4.0625V16.4913C5.70795 19.7595 9.08977 22.0004 12.9988 22.0004Z"
                  fill="#34A853"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.40455 13.9007C7.20455 13.3007 7.09091 12.6598 7.09091 12.0007C7.09091 11.3416 7.20455 10.7007 7.40455 10.1007V7.50977H4.06364C3.38636 8.85977 3 10.3871 3 12.0007C3 13.6143 3.38636 15.1416 4.06364 16.4916L7.40455 13.9007Z"
                  fill="#FBBC05"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.9988 5.97727C14.467 5.97727 15.7852 6.48182 16.8216 7.47273L19.6897 4.60455C17.9579 2.99091 15.6943 2 12.9988 2C9.08977 2 5.70795 4.24091 4.0625 7.50909L7.40341 10.1C8.18977 7.73636 10.3943 5.97727 12.9988 5.97727Z"
                  fill="#EA4335"
                />
              </svg>
              <span>Sign up with Google</span>
            </button>
          </div>
        </form>
      </div>
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
const handleSignupSubmit = handleSubmit(async (values) => {
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

// Form content wrapper
.form-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.block-wrapper {
  @include clamp-property("gap", 3, 4);
  @include clamp-property("padding-top", 2, 3);
  @include clamp-property("padding-bottom", 6, 11.19);

  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  min-width: 40rem;
  max-width: 90dvw;

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
    padding-inline: 2rem;

    h2 {
      @include clamp-property("font-size", 2, 3);
      @include clamp-property("margin-bottom", 0.25, 1);

      color: #fff;
      text-align: center;
      font-style: normal;
      font-weight: 400;
      line-height: 110%;
      font-family: $font-gloock;
    }

    .form {
      .form-group {
        @include clamp-property("margin-top", 1.25, 2);
        display: flex;
        flex-direction: column;

        label {
          @include clamp-property("font-size", 1, 1.125);

          margin-bottom: 0.5rem;

          color: #fff;
          font-family: $font-manrope;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }

        .input {
          @include clamp-property("padding", 1.25, 1.25);

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
    @include clamp-property("margin-top", 1.5, 2);

    color: #e8eae8;
    font-family: $font-manrope;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

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

  .form-footer {
    @include clamp-property("font-size", 0.875, 1);
    @include clamp-property("margin-top", 2, 3);

    p {
      color: $green-50;
      text-align: center;
      font-family: $font-manrope;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }

    span {
      cursor: pointer;
      color: $golden-500;
      text-align: center;

      font-family: $font-manrope;
      font-size: 1rem;
      font-style: normal;
      font-weight: 550;
      line-height: 110%;
    }
  }

  .separator {
    @include clamp-property("padding-block", 1.5, 2);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    width: 100%;
  }

  .btn-submit {
    @include clamp-property("padding", 1.25, 1.5);
    @include clamp-property("margin-top", 1.5, 2);
    @include clamp-property("font-size", 1, 1.125);
    @include clamp-property("height", 3.5, 4.5);

    color: $white;
    font-family: $font-manrope;
    background: $golden-700;

    border-radius: 5rem;
    width: 100%;
    cursor: pointer;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    text-align: center;

    font-style: normal;
    font-weight: 550;
    line-height: 110%;
    transition: all 0.2s ease-in-out;

    &:hover:not(:disabled) {
      background: $yellow-600;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .social-login {
    @include clamp-property("height", 3.25, 4);

    border-radius: 5rem;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      @include clamp-property("padding", 1.25, 1.5);

      width: 100%;
      cursor: pointer;
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;
      align-self: stretch;
      border-radius: 5rem;
      background: transparent;
      text-align: center;

      span {
        @include clamp-property("font-size", 0.875, 1);
        @include clamp-property("gap", 1, 1.375);

        color: $neutral-white;
        font-family: $font-manrope;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: stretch;
      }

      svg {
        @include clamp-property("margin-right", 0.75, 1.375);
        @include clamp-property("width", 1.875, 2.5);
      }
    }
  }
}

.error-text {
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 4px;
}
</style>
