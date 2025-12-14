<template>
  <div class="form-wrapper">
    <h2>Provide your details to verify your alumni account</h2>

    <form @submit.prevent="handleFormSubmit" class="form">
      <!-- Email Field -->
      <div class="form-group full-width">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          class="input"
          :disabled="isLoading"
        />
        <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
      </div>

      <div class="form-group full-width">
        <label>Full Name</label>
        <input v-model="name" type="text" class="input" required />
        <p v-if="errors.name && hasAttemptedSubmit" class="error-text">
          {{ errors.name }}
        </p>
      </div>
      <div class="form-group">
        <label>Father's Name</label>
        <input v-model="father_name" type="text" class="input" required />
        <p v-if="errors.father_name && hasAttemptedSubmit" class="error-text">
          {{ errors.father_name }}
        </p>
      </div>

      <div class="form-group">
        <label>Mother's Name</label>
        <input v-model="mother_name" type="text" class="input" required />
        <p v-if="errors.mother_name && hasAttemptedSubmit" class="error-text">
          {{ errors.mother_name }}
        </p>
      </div>

      <div class="form-group">
        <label>Batch</label>
        <select v-model="batch" class="input" required>
          <option value="" disabled selected></option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        <p v-if="errors.batch && hasAttemptedSubmit" class="error-text">
          {{ errors.batch }}
        </p>
      </div>

      <div class="form-group">
        <label>Blood Group</label>
        <select v-model="blood_group" class="input" required>
          <option value="" disabled selected></option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <p v-if="errors.blood_group && hasAttemptedSubmit" class="error-text">
          {{ errors.blood_group }}
        </p>
      </div>

      <div class="form-group full-width">
        <label>Phone Number</label>
        <!-- <input
          v-model="phone"
          type="text"
          placeholder="Your phone number"
          class="input"
          required
        /> -->

        <VueTelInput
          v-model="phone"
          :inputOptions="{
            required: true,
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

      <div class="form-group">
        <label>Organization Name</label>
        <input v-model="organization_name" type="text" class="input" required />
        <p
          v-if="errors.organization_name && hasAttemptedSubmit"
          class="error-text"
        >
          {{ errors.organization_name }}
        </p>
      </div>

      <div class="form-group">
        <label>Designation</label>
        <input v-model="designation" type="text" class="input" required />
        <p v-if="errors.designation && hasAttemptedSubmit" class="error-text">
          {{ errors.designation }}
        </p>
      </div>

      <div class="full-width terms-conditions">
        <div class="input-wrapper">
          <input type="checkbox" id="terms" v-model="terms" />
          <label for="terms">
            <p>
              By proceeding, you agree to our <span>Terms of Service</span> and
              <span>Privacy Policy</span>.
            </p>
          </label>
        </div>

        <p v-if="errors.terms && hasAttemptedSubmit" class="error-text">
          {{ errors.terms }}
        </p>
      </div>
      <!-- Submit -->
      <button type="submit" class="btn-submit full-width">Next</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { VueTelInput } from "vue-tel-input";

// Component emits to parent for step management
const emit = defineEmits(["submit", "back"]);

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const rules = ref({
  letter: false,
  numberOrSpecial: false,
});

// Track if form has been submitted to show validation errors
const hasAttemptedSubmit = ref(false);

const { handleSubmit, errors, meta } = useForm({
  validationSchema: yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    name: yup.string().required("Full name is required"),
    father_name: yup.string().required("Father's name is required"),
    mother_name: yup.string().required("Mother's name is required"),
    batch: yup.string().required("Batch is required"),
    blood_group: yup.string().required("Blood group is required"),
    phone: yup.string().required("Phone number is required"),
    designation: yup.string().required("Current designation is required"),
    organization_name: yup.string().required("Organization name is required"),
    terms: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions"),
  }),
  validateOnMount: false,
});
const { value: email } = useField("email");

const { value: name, meta: nameMeta } = useField("name", undefined, {
  validateOnMount: false,
  validateOnValueUpdate: false,
});
const { value: father_name, meta: fatherNameMeta } = useField(
  "father_name",
  undefined,
  {
    validateOnMount: false,
    validateOnValueUpdate: false,
  }
);
const { value: mother_name, meta: motherNameMeta } = useField(
  "mother_name",
  undefined,
  {
    validateOnMount: false,
    validateOnValueUpdate: false,
  }
);
const { value: batch, meta: batchMeta } = useField("batch", undefined, {
  initialValue: "",
  validateOnMount: false,
  validateOnValueUpdate: false,
});
const { value: blood_group, meta: bloodGroupMeta } = useField(
  "blood_group",
  undefined,
  {
    initialValue: "",
    validateOnMount: false,
    validateOnValueUpdate: false,
  }
);
const { value: phone, meta: phoneMeta } = useField("phone", undefined, {
  validateOnMount: false,
  validateOnValueUpdate: false,
});
const { value: designation, meta: designationMeta } = useField(
  "designation",
  undefined,
  {
    validateOnMount: false,
    validateOnValueUpdate: false,
  }
);
const { value: organization_name, meta: organizationMeta } = useField(
  "organization_name",
  undefined,
  {
    validateOnMount: false,
    validateOnValueUpdate: false,
  }
);
const { value: terms, meta: termsMeta } = useField("terms", undefined, {
  validateOnMount: false,
  validateOnValueUpdate: false,
});

// Form submission handler that emits to parent
const handleFormSubmit = handleSubmit(
  async (values) => {
    console.log("AccountCreateInfo form submitted with values:", values);

    // Transform data to match parent expectations
    const formData = {
      firstName: values.name?.split(" ")[0] || "",
      lastName: values.name?.split(" ").slice(1).join(" ") || "",
      phone: values.phone || "",
      graduationYear: values.batch || "",
      major: values.designation || "",
      // Include other fields as needed
      fatherName: values.father_name || "",
      motherName: values.mother_name || "",
      bloodGroup: values.blood_group || "",
      organizationName: values.organization_name || "",
    };

    console.log("Emitting form data to parent:", formData);
    // Emit to parent
    emit("submit", formData);
  },
  (errors) => {
    // This function runs when validation fails
    hasAttemptedSubmit.value = true;
    console.log("Form validation failed:", errors);
  }
);
</script>

<style lang="scss" scoped>
// Checkbox tick animations
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

.form-wrapper {
  h2 {
    @include clamp-property("font-size", 1.75, 3);
    @include clamp-property("margin-bottom", 1.75, 3);

    color: #fff;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    font-family: $font-gloock;
  }

  .form {
    @include clamp-property("gap", 1, 2);

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    @include mediaSm {
      grid-template-columns: 1fr;
    }

    .full-width {
      grid-column: span 2;

      @include mediaSm {
        grid-column: span 1;
      }
    }

    .terms-conditions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-family: $font-manrope;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;

      color: #e8eae8;

      @include mediaSm {
        width: 100%;
        margin-top: 1rem;
      }

      .input-wrapper {
        display: flex;
        align-items: flex-start;
        width: 100%;
        gap: 0.5rem;

        input {
          width: 1rem !important;
          height: 1rem !important;
          min-width: 1rem !important;
          min-height: 1rem !important;
          max-width: 1rem !important;
          max-height: 1rem !important;
          flex-shrink: 0;
          aspect-ratio: 1 / 1;
          accent-color: $yellow-600;
          background-color: transparent;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;

          border-radius: 0.25rem;
          border: 1px solid #b29764;
          margin-top: 0.25rem;

          cursor: pointer;

          &:checked {
            background-color: transparent;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23B29764' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='20,6 9,17 4,12'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 0.75rem;
          }
        }

        p {
          @include clamp-property("font-size", 1.125, 1.125);
          flex: 1;

          span {
            @include clamp-property("font-size", 1.125, 1.125);
            color: #b29764;

            /* Body */
            font-family: $font-manrope;

            font-style: normal;
            font-weight: 400;
            line-height: 150%;

            cursor: pointer;
          }
        }
      }
    }

    .form-group {
      display: flex;
      flex-direction: column;

      @include mediaSm {
        width: 100%;
      }

      label {
        @include clamp-property("font-size", 1, 1.125);

        margin-bottom: 0.5rem;

        color: #fff;
        font-family: $font-manrope;

        font-style: normal;
        font-weight: 500;
        line-height: normal;

        opacity: 0.8;
      }

      .input {
        @include clamp-property("font-size", 0.935, 1);
        @include clamp-property("padding", 1, 1.25);
        @include clamp-property("height", 3.5, 4);
        @include clamp-property("border-radius", 0.6, 0.75);

        outline: none;

        background: rgba(255, 255, 255, 0.06);
        display: flex;

        align-items: center;
        gap: 0.5rem;
        align-self: stretch;
        border: 2px solid transparent;
        transition: all 0.2s ease-in-out;
        color: #fff;

        width: 100%;

        &::placeholder {
          @include clamp-property("font-size", 0.935, 1);
          color: rgba(255, 255, 255, 0.6);
          font-family: $font-manrope;
          font-weight: 400;
          font-style: normal;
          line-height: normal;
          opacity: 1;
        }

        &:focus {
          @include clamp-property("border-radius", 0.6, 0.75);
          border-color: $yellow-600;
        }
      }

      // Style select elements specifically
      select.input {
        @include clamp-property("font-size", 1, 1.125);
        cursor: pointer;
        padding-right: 2rem; // Add extra padding for dropdown arrow
        appearance: none; // Remove default styling
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 1rem;

        option {
          @include clamp-property("font-size", 1, 1.125);
          background: #2a2a2a;
          color: #fff;
          padding: 0.5rem;

          &:disabled {
            color: #888;
            opacity: 0.7;
          }
        }

        // Style for placeholder state
        &:invalid {
          @include clamp-property("font-size", 1, 1.125);
          color: rgba(255, 255, 255, 0.6);
          font-family: $font-manrope;
          font-weight: 400;
          font-style: normal;
          line-height: normal;
          opacity: 0.8;
        }
      }

      // Vue Tel Input specific styling
      :deep(.vue-tel-input) {
        outline: none;
        border-radius: 0.75rem;
        background: rgba(255, 255, 255, 0.06);
        border: 2px solid transparent;
        transition: all 0.2s ease-in-out;

        &:focus-within {
          border-color: $yellow-600;
        }

        .vti__dropdown {
          background: rgba(255, 255, 255, 0.06);
          border: none;
          border-radius: 0.75rem 0 0 0.75rem;

          .vti__selection {
            @include clamp-property("font-size", 0.935, 1);
            color: #fff;
            padding: 0 0.5rem;
          }

          .vti__dropdown-arrow {
            color: #fff;
          }
        }

        .vti__input {
          @include clamp-property("font-size", 0.935, 1);
          @include clamp-property("padding", 1, 1.25);
          @include clamp-property("height", 3.5, 4);
          @include clamp-property("border-radius", 0.6, 0.75);

          background: transparent;
          border: none;
          color: #fff;

          outline: none;

          &::placeholder {
            @include clamp-property("font-size", 0.935, 1);
            color: rgba(255, 255, 255, 0.6);
            font-family: $font-manrope;
            font-weight: 400;
            font-style: normal;
            line-height: normal;
            opacity: 0;
          }
        }
      }

      // Vue Tel Input dropdown styling
      :deep(.vti__dropdown-list) {
        @include clamp-property("border-radius", 0.6, 0.75);

        background: #2a2a2a;
        border: 1px solid rgba(255, 255, 255, 0.1);

        max-height: 200px;
        overflow-y: auto;

        .vti__dropdown-item {
          color: #fff;
          padding: 0.5rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);

          &:hover,
          &.highlighted {
            background: rgba(255, 255, 255, 0.1);
          }

          .vti__flag {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}

.error-text {
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 4px;
}

.btn-submit {
  @include clamp-property("font-size", 1, 1.125);
  @include clamp-property("padding", 1.25, 1.5);

  width: 100%;
  cursor: pointer;
  border: none;

  display: flex;

  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 5rem;
  background: #7e6b47;
  text-align: center;

  color: #fff;

  /* Btn 18 */
  font-family: $font-manrope;
  font-style: normal;
  font-weight: 550;
  line-height: 110%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: $yellow-600;
  }
}
</style>
