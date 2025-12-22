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
      :message="'Email sent successfully!'"
      :isDarkBg="true"
    />

    <div class="form-wrapper" v-else>
      <h2>Forgot your password?</h2>

      <p class="subtitle">
        Enter your email that we can send you password reset link.
      </p>

      <form @submit.prevent="handleForgotPassword" class="form">
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            v-model="email"
            class="input"
            :disabled="isLoading"
            placeholder="Enter your email"
            required
          />
          <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
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
            {{ isLoading ? "Sending Email..." : "Send Email" }}
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

import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const router = useRouter();

// Simple reactive state
const isLoading = ref(false);
const showError = ref(false);
const showSuccess = ref(false);

// Form validation
const { handleSubmit, errors } = useForm({
  validationSchema: yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
  }),
});

const { value: email } = useField("email");

const authStore = useAuthStore();
const { forgotPassword } = authStore;

// Signup handler
const handleForgotPassword = handleSubmit(async (values) => {
  isLoading.value = true;
  showError.value = false;

  try {
    const result = await forgotPassword(values.email);
    if (result.success) {
      showSuccess.value = true;
    } else {
      showError.value = true;
    }
  } catch (error) {
    console.error("Signup failed:", error);
    showError.value = true;
  } finally {
    isLoading.value = false;
  }
});
</script>

<style lang="scss" scoped>
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
