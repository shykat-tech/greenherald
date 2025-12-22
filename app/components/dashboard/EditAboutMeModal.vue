<template>
  <div class="edit-modal-wrapper">
    <h2>Edit About</h2>
    <form @submit.prevent="handleFormSubmit" class="form">
      <div class="form-group">
        <label
          >You can write about your years of experience, industry, or skills.
          People also talk about their achievements or previous job
          experiences.</label
        >
        <textarea
          v-model="about"
          placeholder="Enter your favorite quote"
          class="input"
          :disabled="dashboardStore.isLoading"
          rows="4"
        ></textarea>
        <p v-if="errors.about" class="error-text">
          {{ errors.about }}
        </p>
      </div>

      <div class="button-wrapper">
        <button @click="cancelEdit">Cancel</button>

        <button
          type="button"
          @click="handleFormSubmit"
          :disabled="dashboardStore.isLoading"
          class="submit-btn"
        >
          <span v-if="dashboardStore.isLoading">Saving...</span>
          <span v-else>Save</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useForm, useField } from "vee-validate";

const validationSchema = yup.object({
  about: yup
    .string()
    .max(500, "About Me must be at most 500 characters")
    .required("About Me is required"),
});

const { handleSubmit, errors, setFieldValue } = useForm({
  validationSchema,
});

import * as yup from "yup";

const globalStore = useGlobalStore();
const dashboardStore = useDashboardStore();

const { value: about } = useField("about");

const handleFormSubmit = () => {
  // Logic to handle form submission
  handleSubmit(async (values) => {
    try {
      // await dashboardStore.updateAboutMe(values.about);
      globalStore.closeModal("editAboutMe");
    } catch (error) {
      console.error("Failed to update About Me:", error);
    }
  })();
};

const cancelEdit = () => {
  const globalStore = useGlobalStore();
  globalStore.closeModal("editAboutMe");
};
</script>

<style lang="scss" scoped>
.edit-modal-wrapper {
  // Add your styles here

  h2 {
    @include clamp-property("font-size", 1.5, 2.5);
    @include clamp-property("margin-bottom", 1.5, 2.5);

    color: $green-900;
    font-family: $font-manrope;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 2.75rem */
  }

  @include mediaSm {
    width: 80svw;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      @include clamp-property("font-size", 1, 1.125);
      @include clamp-property("margin-bottom", 0.5, 0.75);

      color: $green-900;
      font-family: $font-manrope;

      font-style: normal;
      font-weight: 550;
      line-height: normal;
    }

    .input {
      @include clamp-property("padding", 0.875, 1.25);
      @include clamp-property("font-size", 0.875, 1);
      @include clamp-property("border-radius", 0.625, 0.75);

      display: flex;
      align-items: center;
      gap: 0.5rem;
      align-self: stretch;
      transition: all 0.2s ease-in-out;
      border-radius: 0.75rem;
      border: 1px solid $neutral-gray-600;
      color: $green-100;

      /* Body */
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      opacity: 0.9;
      /* 1.5rem */

      &:focus {
        opacity: 1;
        outline: none;
        border-color: $golden-700;
      }

      &:disabled {
        background-color: $green-50;
        cursor: not-allowed;
        opacity: 0.7;
      }

      &::placeholder {
        color: #999;
      }
    }

    textarea.input {
      resize: vertical;
      min-height: 80px;
    }

    .error-text {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
      font-weight: 500;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    button {
      @include clamp-property("padding-inline", 1.375, 1.5);
      @include clamp-property("padding-block", 1, 1.375);
      @include clamp-property("font-size", 1, 1.125);

      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 0 0;
      border: none;

      border-radius: 5rem;
      background: transparent;
      color: $white;

      /* Btn 18 */
      font-family: $font-manrope;

      font-style: normal;
      font-weight: 550;
      line-height: 110%;
      /* 1.2375rem */

      cursor: pointer;
      transition: all 0.3s ease-in-out;

      border: 1px solid transparent;

      // last child
      &:first-child {
        background: transparent;
        border-radius: 5rem;
        border: 1px solid $neutral-gray-800;
        color: $neutral-gray-800;
        /* Btn 18 */
        font-family: $font-manrope;

        font-style: normal;
        font-weight: 550;
        line-height: 110%;
        /* 1.2375rem */

        &:hover {
          // background: darken($neutral-gray-800, 5%);
        }
      }

      &:last-child {
        background: $golden-700;
        color: $white;

        &:hover {
          // background: darken($neutral-gray-800, 5%);
        }
      }
    }

    @include mediaSm {
      flex-direction: column;
    }
  }
}
</style>
