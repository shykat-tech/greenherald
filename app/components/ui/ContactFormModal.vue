<template>
  <div class="contact-form-wrapper">
    <div v-show="isFormSubmitted">
      <MessageBlock
        loading-status="success"
        title="Form submitted successfully!"
        message="Thank you for reaching out to us. We have received your message and will get back to you shortly."
        :is-dark-bg="false"
        :showButton="false"
      />
    </div>
    <div class="form-container-wrapper" v-show="!isFormSubmitted">
      <h3 class="contact-form-title">Need Help?</h3>
      <h3 class="contact-form-title">We're Here for You</h3>

      <div class="contact-info-card">
        <div class="info-item">
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.09133 5.05609L8.83808 4.48626C8.49695 3.71872 8.32638 3.33495 8.04568 3.06369C7.8604 2.88463 7.64236 2.74293 7.40348 2.64633C7.04159 2.5 6.62162 2.5 5.78169 2.5C4.53103 2.5 3.90571 2.5 3.41849 2.80363C3.11966 2.98985 2.83386 3.30601 2.67865 3.62205C2.42557 4.13735 2.48298 4.70507 2.5978 5.84051C3.55053 15.2623 8.7378 20.4495 18.1596 21.4023C19.295 21.5171 19.8628 21.5745 20.3781 21.3214C20.6941 21.1662 21.0103 20.8804 21.1965 20.5816C21.5001 20.0944 21.5001 19.469 21.5001 18.2184C21.5001 17.3785 21.5001 16.9585 21.3538 16.5966C21.2572 16.3577 21.1155 16.1397 20.9364 15.9544C20.6652 15.6737 20.2814 15.5031 19.5139 15.162L18.944 14.9087C18.2715 14.6098 17.9352 14.4604 17.5979 14.432C17.2391 14.4018 16.8787 14.4687 16.5547 14.6257C16.25 14.7733 15.9898 15.0335 15.4694 15.5539C14.9574 16.0659 14.7014 16.3219 14.368 16.4726C14.0436 16.6193 13.5877 16.6817 13.2358 16.6275C12.8742 16.5718 12.6084 16.4219 12.0768 16.1221C10.1923 15.0592 8.94086 13.8077 7.87799 11.9233C7.57818 11.3917 7.42827 11.1259 7.37257 10.7643C7.31837 10.4124 7.38073 9.9565 7.52743 9.63208C7.67819 9.29869 7.93418 9.04269 8.44618 8.5307C8.96659 8.01028 9.2268 7.75008 9.37439 7.44542C9.53139 7.12137 9.59829 6.76104 9.56809 6.40223C9.5397 6.06491 9.39024 5.72863 9.09133 5.05609Z"
                fill="#7E6B47"
              />
              <path
                d="M12.9995 3C17.4178 3 20.9995 6.58172 20.9995 11M13.4995 6.5C15.7086 6.5 17.4995 8.29086 17.4995 10.5"
                stroke="#7E6B47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="info-wrapper">
            <h5>Call us</h5>
            <p>+880 9612 700 400</p>
          </div>
        </div>
        <div class="info-item">
          <div class="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.6823 2.78681C12.7265 2.73773 11.2735 2.73774 9.3177 2.78681L9.24285 2.78869C7.73349 2.82652 6.49161 2.85765 5.49064 3.03175C4.42828 3.21654 3.53876 3.57641 2.78536 4.33174C2.0359 5.08311 1.67705 5.9586 1.49526 7.00416C1.32465 7.98538 1.29883 9.19623 1.26758 10.6617L1.26597 10.7371C1.24467 11.7351 1.24468 12.265 1.26599 13.2629L1.2676 13.3383C1.29884 14.8038 1.32466 16.0146 1.49527 16.9959C1.67707 18.0414 2.03592 18.9169 2.78537 19.6683C3.53878 20.4236 4.42829 20.7835 5.49066 20.9683C6.49162 21.1424 7.7335 21.1735 9.24286 21.2113L9.31772 21.2132C11.2735 21.2623 12.7265 21.2623 14.6823 21.2132L14.7571 21.2113C16.2665 21.1735 17.5084 21.1423 18.5094 20.9682C19.5717 20.7835 20.4612 20.4236 21.2146 19.6683C21.9641 18.9169 22.323 18.0414 22.5047 16.9958C22.6754 16.0146 22.7012 14.8038 22.7324 13.3383L22.734 13.2629C22.7553 12.2649 22.7553 11.7351 22.734 10.7371L22.7324 10.6618C22.7012 9.19627 22.6753 7.98538 22.5047 7.00416C22.3229 5.9586 21.9641 5.08311 21.2146 4.33174C20.7913 3.90728 20.3249 3.6077 19.809 3.39389C19.7305 3.35104 19.6464 3.31873 19.5587 3.29811C19.2289 3.18184 18.8796 3.09616 18.5093 3.03176C17.5084 2.85765 16.2665 2.82652 14.7571 2.78868L14.6823 2.78681ZM20.6798 8.8503C20.6604 8.44479 20.6507 8.24204 20.5039 8.16109C20.3571 8.08014 20.1765 8.18242 19.8155 8.38697L15.5798 10.787C14.2801 11.5234 13.181 12 11.9998 12C10.8186 12 9.71946 11.5234 8.41985 10.787L4.18445 8.38719C3.82343 8.18263 3.64292 8.08035 3.49608 8.1613C3.34924 8.24225 3.33957 8.44501 3.32023 8.85053C3.29416 9.39704 3.28003 10.0306 3.26403 10.7797C3.24333 11.7492 3.24334 12.2508 3.26405 13.2203C3.29736 14.7803 3.32261 15.8393 3.46432 16.6543C3.59776 17.4218 3.82038 17.8777 4.20122 18.2595C4.5781 18.6374 5.04027 18.8638 5.83355 19.0018C6.67174 19.1476 7.76497 19.1776 9.36791 19.2178C11.2902 19.266 12.7098 19.266 14.6321 19.2178C16.235 19.1776 17.3283 19.1476 18.1665 19.0018C18.9597 18.8638 19.4219 18.6374 19.7988 18.2595C20.1796 17.8777 20.4023 17.4218 20.5357 16.6543C20.6774 15.8393 20.7027 14.7803 20.736 13.2203C20.7567 12.2508 20.7567 11.7492 20.736 10.7797C20.72 10.0305 20.7058 9.39687 20.6798 8.8503Z"
                fill="#7E6B47"
              />
            </svg>
          </div>

          <div class="info-wrapper">
            <h5>Write to us</h5>
            <p>greenherald@gmail.com</p>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleFormSubmit">
        <div class="form-group" v-if="!globalStore.alumniStatus">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" />
          <p v-if="errors.fullName && hasAttemptedSubmit" class="error-text">
            {{ errors.fullName }}
          </p>
        </div>

        <div class="form-group" v-if="!globalStore.alumniStatus">
          <label for="batch">Batch</label>
          <select
            name="batch"
            id="batch"
            :class="{ 'placeholder-selected': !formData.batch }"
            v-model="formData.batch"
          >
            <option value="" disabled selected></option>
            <option value="2000-2005">2000-2005</option>
            <option value="2006-2010">2006-2010</option>
            <option value="2011-2015">2011-2015</option>
            <option value="2016-2020">2016-2020</option>
            <option value="2021-2025">2021-2025</option>
          </select>
          <p v-if="errors.batch && hasAttemptedSubmit" class="error-text">
            {{ errors.batch }}
          </p>
        </div>

        <div class="form-group" v-if="!globalStore.alumniStatus">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" />
          <p v-if="errors.email && hasAttemptedSubmit" class="error-text">
            {{ errors.email }}
          </p>
        </div>

        <div class="form-group phone-input-group">
          <label>Phone Number</label>

          <VueTelInput
            v-model="phone"
            :inputOptions="{
              class: 'tel-input',
            }"
            mode="international"
            :preferred-countries="['bd', 'us', 'gb', 'ca']"
            :auto-format="true"
          />
          <p v-if="errors.phone && hasAttemptedSubmit" class="error-text">
            {{ errors.phone }}
          </p>
        </div>

        <!-- your message text area -->
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" name="message" rows="4"></textarea>
          <p v-if="errors.message && hasAttemptedSubmit" class="error-text">
            {{ errors.message }}
          </p>
        </div>

        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>

        <button type="submit" class="btn-submit">
          <span>Submit</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { VueTelInput } from "vue-tel-input";

const globalStore = useGlobalStore();

// Form data
const formData = ref({
  fullName: "",
  email: "",
  batch: "",
  phone: "",
  message: "",
});

const phone = ref("");
const errors = ref({});
const hasAttemptedSubmit = ref(false);

// Form submission states
const isFormSubmitting = ref(false);
const isFormSubmitted = ref(false);
const isError = ref(false);
const errorMessage = ref("");
const successMessage = ref("");

const handleFormSubmit = async (event) => {
  hasAttemptedSubmit.value = true;

  // Collect form data from the form event
  const form = event.target;
  const formDataObj = new FormData(form);

  // Update reactive form data
  if (!globalStore.alumniStatus) {
    formData.value.fullName = formDataObj.get("fullName") || "";
    formData.value.email = formDataObj.get("email") || "";
    formData.value.batch = formDataObj.get("batch") || "";
  }
  formData.value.phone = phone.value;
  formData.value.message = formDataObj.get("message") || "";

  // Validate form (now returns empty object since all fields are optional)
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    errors.value = validationErrors;
    return;
  }

  // Clear previous errors
  errors.value = {};
  errorMessage.value = "";

  // Show success message immediately
  isFormSubmitted.value = true;
  successMessage.value =
    "Thank you for your message! We will get back to you soon.";

  // Reset form after successful submission
  form.reset();
  phone.value = "";
  formData.value = {
    fullName: "",
    email: "",
    batch: "",
    phone: "",
    message: "",
  };
};

// Validation function
const validateForm = () => {
  // Since all fields are optional, no validation is needed
  return {};
};
</script>

<style lang="scss" scoped>
.contact-form-wrapper {
  @include clamp-property("padding-block", 1.5, 2.5);
  @include clamp-property("padding-inline", 1, 1.5);
  @include clamp-property("border-radius", 1, 1.75);
  @include clamp-property("gap", 1.25, 1.75);

  display: flex;
  flex-direction: column;
  //   align-items: flex-end;

  width: min(80svw, 50rem);

  //   background: $white;
}
.form-container-wrapper {
  .contact-info-card {
    @include clamp-property("margin-top", 1.5, 2.81);
    @include clamp-property("padding-block", 1.5, 1.75);
    @include clamp-property("padding-inline", 1.25, 2);
    @include clamp-property("margin-bottom", 1.5, 2.5);
    @include clamp-property("border-radius", 0.75, 1.125);

    display: grid;
    grid-template-columns: 1fr 1fr;

    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch;
    align-items: center;
    background: $golden-90;

    @include mediaSm {
      grid-template-columns: 1fr;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 1rem;

      .icon-wrapper {
        @include clamp-property("width", 2, 3);
        @include clamp-property("height", 2, 3);
        @include clamp-property("padding", 0.5, 0.75);

        background: $golden-50;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        aspect-ratio: 1/1;

        svg {
          @include clamp-property("width", 1, 1.5);
          @include clamp-property("height", 1, 1.5);

          flex-shrink: 0;
        }
      }

      .info-wrapper {
        h5 {
          @include clamp-property("font-size", 0.935, 1.125);
          color: #0a0e0e;
          font-family: $font-manrope;

          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 1.6875rem */
        }
        p {
          @include clamp-property("font-size", 1, 1.25);
          color: #0a0e0e;
          font-family: Manrope;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }

  .contact-form-title {
    @include clamp-property("font-size", 1.5, 2);

    color: $green-900;
    text-align: center;
    font-family: $font-gloock;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 2.4rem */
    letter-spacing: 0.05rem;
    text-wrap: balance;
    -webkit-text-wrap: balance; /* Safari support */

    /* Fallback for browsers that don't support text-wrap: balance */
    max-width: 15ch; /* Limits line length for better balance */
    margin-inline: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        @include clamp-property("font-size", 1, 1.125);
        color: $green-900;
        font-family: $font-manrope;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        opacity: 0.9;
      }
      input,
      select {
        @include clamp-property("padding", 1, 1.25);
        @include clamp-property("font-size", 1, 1.125);
        // @include clamp-property("height", 3.5, 4);
        @include clamp-property("border-radius", 0.5, 0.75);

        border: 1px solid $gray-600;
        font-family: $font-manrope;
        border-radius: 0.75rem;
        color: $green-900;

        display: flex;

        align-items: center;
        gap: 0.5rem;
        align-self: stretch;

        &:focus {
          outline: none;
          border-color: $golden-700;
          box-shadow: 0 0 0 2px rgba(126, 107, 71, 0.3);
        }
      }

      select {
        padding-right: 2.5rem !important;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 0.5rem center;
        background-repeat: no-repeat;
        background-size: 1.5rem 1.5rem;

        &.placeholder-selected {
          color: rgba($green-900, 0.5);
          opacity: 0.7;
        }

        option {
          color: $green-900;
          opacity: 1;
        }
      }

      // .input {
      //   @include clamp-property("font-size", 0.935, 1);
      //   @include clamp-property("padding", 1, 1.25);
      //   @include clamp-property("height", 3.5, 4);
      //   @include clamp-property("border-radius", 0.6, 0.75);

      //   outline: none;

      //   background: rgba(255, 255, 255, 0.06);
      //   display: flex;

      //   align-items: center;
      //   gap: 0.5rem;
      //   align-self: stretch;
      //   border: 2px solid transparent;
      //   transition: all 0.2s ease-in-out;
      //   color: #fff;

      //   width: 100%;

      //   &::placeholder {
      //     @include clamp-property("font-size", 0.935, 1);
      //     color: rgba(255, 255, 255, 0.6);
      //     font-family: $font-manrope;
      //     font-weight: 400;
      //     font-style: normal;
      //     line-height: normal;
      //     opacity: 1;
      //   }

      //   &:focus {
      //     @include clamp-property("border-radius", 0.6, 0.75);
      //     border-color: $yellow-600;
      //   }
      // }

      &.phone-input-group {
        input {
          border: none;
          outline: none;
        }
      }

      // Vue Tel Input specific styling
      :deep(.vue-tel-input) {
        border-radius: 0.75rem;
        // border: 1px solid $gray-600;
        background: transparent;
        transition: all 0.2s ease-in-out;

        &:focus-within {
          border-color: $golden-700;
          box-shadow: 0 0 0 2px rgba(126, 107, 71, 0.3);
        }

        .vti__dropdown {
          background: $white;
          // border: 1px solid $gray-600;
          border-radius: 0.75rem;

          .vti__selection {
            @include clamp-property("font-size", 0.935, 1);
            color: $green-900;
            padding: 0 0.5rem;
          }

          .vti__dropdown-arrow {
            color: $green-900;
          }
        }

        .vti__input {
          @include clamp-property("font-size", 1, 1.125);
          @include clamp-property("padding", 1, 1.25);
          @include clamp-property("border-radius", 0.5, 0.75);

          background: transparent;
          border: none;
          color: $green-900;
          outline: none;
          font-family: $font-manrope;

          &::placeholder {
            color: rgba($green-900, 0.6);
            font-family: $font-manrope;
            font-weight: 400;
            opacity: 1;
          }
        }
      }

      // Vue Tel Input dropdown styling
      :deep(.vti__dropdown-list) {
        @include clamp-property("border-radius", 0.6, 0.75);

        background: $white;
        // border: 1px solid $gray-600;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

        max-height: 200px;
        overflow-y: auto;

        .vti__dropdown-item {
          color: $green-900;
          padding: 0.5rem 1rem;
          border-bottom: 1px solid rgba($gray-600, 0.2);

          &:hover,
          &.highlighted {
            background: $golden-50;
          }

          .vti__flag {
            margin-right: 0.5rem;
          }
        }
      }
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

      &:hover {
        background: $yellow-600;
      }
    }

    .alumni-status-indicator {
      margin-bottom: 1.5rem;
      width: 100%;
      display: flex;
      justify-content: center;

      .status-badge {
        @include clamp-property("padding", 0.75, 1);
        @include clamp-property("font-size", 0.875, 1);
        border-radius: 2rem;
        font-family: $font-manrope;
        font-weight: 600;
        text-align: center;

        &.alumni {
          background: $green-100;
          color: $green-900;
          border: 2px solid $green-700;
        }

        &.non-alumni {
          background: $golden-500;
          color: $golden-900;
          border: 2px solid $golden-700;
        }
      }
    }

    .radio-group {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 0.5rem;

      label {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0;
        font-weight: normal;
        cursor: pointer;

        display: flex;
        padding: 1rem 1.5rem 1rem 0.75rem;
        align-items: center;
        gap: 0.5rem;
        flex: 1 0 0;

        border-radius: 0.75rem;
        border: 1px solid $green-50;

        @include clamp-property("font-size", 0.875, 1);

        color: $green-900;
        font-family: $font-manrope;

        text-align: center;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 1.5rem */

        transition: all 0.2s ease-in-out;

        input[type="radio"] {
          outline: none;
          margin: 0;
          width: 16px;
          height: 16px;
          accent-color: $golden-700;
          margin-top: 0.25rem;
        }

        &:has(input[type="radio"]:checked) {
          border-color: $golden-700;
          background-color: $golden-50;
        }
      }

      .payment-option {
        display: flex;

        .options {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;

          width: 100%;

          p {
            margin: 0;
          }

          div {
            display: flex;
            gap: 0.5rem;
            align-items: center;

            img {
              height: 1.25rem;
              width: auto;
              object-fit: cover;
            }
          }
        }
      }
    }

    .error-text {
      @include clamp-property("font-size", 0.875, 1);
      color: #dc2626;
      font-family: $font-manrope;
      font-weight: 500;
      margin-top: 0.25rem;
    }

    textarea {
      @include clamp-property("padding", 0.75, 1);
      @include clamp-property("font-size", 1, 1.125);
      border: 1px solid $gray-600;
      border-radius: 0.5rem;
      font-family: $font-manrope;
      color: $green-900;
      resize: vertical;
      min-height: 80px;

      &:focus {
        outline: none;
        border-color: $golden-700;
        box-shadow: 0 0 0 2px rgba(126, 107, 71, 0.3);
      }
    }

    .error-message {
      padding: 1rem;
      background: #fef2f2;
      color: #dc2626;
      border: 1px solid #fecaca;
      border-radius: 0.5rem;
      font-family: $font-manrope;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .success-message {
      padding: 1rem;
      background: #f0fdf4;
      color: #166534;
      border: 1px solid #bbf7d0;
      border-radius: 0.5rem;
      font-family: $font-manrope;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .btn-submit:disabled {
      background: #d1d5db;
      color: #6b7280;
      cursor: not-allowed;

      &:hover {
        background: #d1d5db;
      }
    }

    .loading-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .spinner {
        width: 1rem;
        height: 1rem;
        color: currentColor;
      }
    }
  }
}
</style>
