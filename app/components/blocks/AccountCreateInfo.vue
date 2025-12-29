<template>
  <div class="form-wrapper">
    <h2>Provide your details to verify your alumni account</h2>

    <form @submit.prevent="handleFormSubmit" class="form">
      <!-- Email Field -->
      <div class="form-group full-width">
        <label>Email Address</label>
        <input
          v-model="email"
          type="email"
          class="input"
          :disabled="isLoading"
        />
        <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
        <p class="email-info">
          This email cannot be changed later. All communication will be sent
          here.
        </p>
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
        <div class="custom-select-wrapper">
          <div
            class="custom-select"
            :class="{ 'is-open': batchDropdownOpen, 'is-selected': batch }"
            @click="toggleBatchDropdown"
          >
            <span class="selected-value">{{ batch }}</span>
            <span class="dropdown-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </span>
          </div>
          <div v-if="batchDropdownOpen" class="dropdown-options">
            <div
              v-for="year in batchOptions"
              :key="year"
              class="dropdown-option"
              :class="{ selected: batch === year }"
              @click="selectBatch(year)"
            >
              {{ year }}
            </div>
          </div>
        </div>
        <p v-if="errors.batch && hasAttemptedSubmit" class="error-text">
          {{ errors.batch }}
        </p>
      </div>

      <div class="form-group">
        <label>Blood Group</label>
        <div class="custom-select-wrapper">
          <div
            class="custom-select"
            :class="{
              'is-open': bloodGroupDropdownOpen,
              'is-selected': blood_group,
            }"
            @click="toggleBloodGroupDropdown"
          >
            <span class="selected-value">{{ blood_group }}</span>
            <span class="dropdown-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </span>
          </div>
          <div v-if="bloodGroupDropdownOpen" class="dropdown-options">
            <div
              v-for="group in bloodGroupOptions"
              :key="group"
              class="dropdown-option"
              :class="{ selected: blood_group === group }"
              @click="selectBloodGroup(group)"
            >
              {{ group }}
            </div>
          </div>
        </div>
        <p v-if="errors.blood_group && hasAttemptedSubmit" class="error-text">
          {{ errors.blood_group }}
        </p>
      </div>

      <div class="phone-number-wrapper full-width">
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
          <input type="checkbox" id="terms" v-model="terms" required />
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
      <button type="submit" class="btn-submit full-width auth-global-btn">
        Next
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
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

// Custom dropdown state
const batchDropdownOpen = ref(false);
const bloodGroupDropdownOpen = ref(false);

// Dropdown options
const batchOptions = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
];
const bloodGroupOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

// Dropdown methods
const toggleBatchDropdown = () => {
  batchDropdownOpen.value = !batchDropdownOpen.value;
  if (batchDropdownOpen.value) {
    bloodGroupDropdownOpen.value = false;
  }
};

const toggleBloodGroupDropdown = () => {
  bloodGroupDropdownOpen.value = !bloodGroupDropdownOpen.value;
  if (bloodGroupDropdownOpen.value) {
    batchDropdownOpen.value = false;
  }
};

const selectBatch = (year) => {
  batch.value = year;
  batchDropdownOpen.value = false;
};

const selectBloodGroup = (group) => {
  blood_group.value = group;
  bloodGroupDropdownOpen.value = false;
};

// Close dropdowns when clicking outside
const closeDropdowns = () => {
  batchDropdownOpen.value = false;
  bloodGroupDropdownOpen.value = false;
};

// Add click outside listener
onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select-wrapper")) {
      closeDropdowns();
    }
  });
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdowns);
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @include clamp-property("gap", 1, 2);
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
        margin-bottom: 0.5rem;
        color: #fff;
        font-family: $font-manrope;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        opacity: 0.8;

        @include clamp-property("font-size", 1, 1.125);
      }

      .input {
        @include clamp-property("font-size", 0.935, 1);
        @include clamp-property("padding", 1, 1.25);
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

      .email-info {
        color: $white;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 1.3125rem */
        margin-top: 0.5rem;
      }

      // Custom dropdown styling
      .custom-select-wrapper {
        position: relative;
        width: 100%;

        .custom-select {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;

          outline: none;
          background: rgba(255, 255, 255, 0.06);
          border: 2px solid transparent;
          transition: all 0.2s ease-in-out;
          color: #fff;
          font-family: $font-manrope;
          font-weight: 400;
          line-height: normal;

          @include clamp-property("font-size", 1, 1.125);
          @include clamp-property("padding", 1, 1.25);
          @include clamp-property("border-radius", 0.6, 0.75);

          &:hover,
          &.is-open {
            border-color: $yellow-600;
          }

          .selected-value {
            flex: 1;
            color: #fff;

            &:empty::after {
              content: attr(data-placeholder);
              color: rgba(255, 255, 255, 0.6);
            }
          }

          &:not(.is-selected) .selected-value {
            color: rgba(255, 255, 255, 0.6);
          }

          .dropdown-arrow {
            width: 1rem;
            height: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease;

            svg {
              width: 100%;
              height: 100%;
            }
          }

          &.is-open .dropdown-arrow {
            transform: rotate(180deg);
          }
        }

        .dropdown-options {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 1000;

          background: #2a2a2a;
          border: 2px solid rgba(255, 255, 255, 0.1);
          max-height: 200px;
          overflow-y: auto;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

          @include clamp-property("border-radius", 0.6, 0.75);
          @include clamp-property("margin-top", 0.25, 0.5);

          .dropdown-option {
            color: #fff;
            font-family: $font-manrope;
            font-weight: 400;
            line-height: 150%;
            cursor: pointer;
            transition: background-color 0.2s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);

            @include clamp-property("font-size", 1.125, 1.25);
            @include clamp-property("padding", 0.75, 1);

            &:last-child {
              border-bottom: none;
            }

            &:hover {
              background: rgba(255, 255, 255, 0.1);
            }

            &.selected {
              background: rgba(178, 151, 100, 0.2);
              color: $yellow-600;
            }

            // Enhanced mobile touch target
            @include mediaSm {
              min-height: 40px; // iOS recommended touch target
              display: flex;
              align-items: center;

              @include clamp-property("padding", 1, 1.25);
              @include clamp-property("font-size", 1.25, 1.375);
            }
          }

          // Mobile-specific dropdown styling
          @include mediaSm {
            max-height: 250px;
            border-width: 1px;
          }
        }

        // Mobile-specific wrapper styling
        @include mediaSm {
          .custom-select {
            @include clamp-property("font-size", 1.125, 1.25);
          }
        }
      }
    }

    .phone-number-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        color: #fff;
        font-family: $font-manrope;

        font-style: normal;
        font-weight: 500;
        line-height: normal;
        opacity: 0.8;

        @include clamp-property("font-size", 1, 1.125);
      }

      // Vue Tel Input specific styling
      :deep(.vue-tel-input) {
        outline: none;
        border-radius: 0.75rem;
        // background: rgba(255, 255, 255, 0.06);
        border: 2px solid transparent;
        transition: all 0.2s ease-in-out;

        &:focus-within {
          border-color: $yellow-600;
        }

        .vti__dropdown {
          border: none;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          gap: 0.5rem;

          @include clamp-property("padding-block", 1, 1.25);
          @include clamp-property("padding-inline", 0.5, 1.25);
          @include clamp-property("border-radius", 0.6, 0.75);
          @include clamp-property("gap", 0.25, 0.5);

          .vti__selection {
            color: #fff;

            @include clamp-property("font-size", 0.935, 1);
            @include clamp-property("border-radius", 0.6, 0.75);
          }

          .vti__dropdown-arrow {
            color: #fff;
            margin-left: 0.25rem;
          }
        }

        .vti__input {
          border-radius: 0.75rem;
          background: transparent;
          border: none;
          color: #fff;
          outline: none;

          background: rgba(255, 255, 255, 0.06);
          margin-left: 1rem;

          @include clamp-property("font-size", 0.935, 1);
          @include clamp-property("border-radius", 0.6, 0.75);
          @include clamp-property("padding", 1, 1.25);

          &::placeholder {
            color: rgba(255, 255, 255, 0.6);
            font-family: $font-manrope;
            font-weight: 400;
            font-style: normal;
            line-height: normal;
            opacity: 0;
            @include clamp-property("font-size", 0.935, 1);
          }
        }
      }

      // Vue Tel Input dropdown styling
      :deep(.vti__dropdown-list) {
        @include clamp-property("border-radius", 0.6, 0.75);

        background: #2a2a2a;
        // border: 1px solid rgba(255, 255, 255, 0.1);

        max-height: 200px;
        overflow-y: auto;

        .vti__dropdown-item {
          color: #fff;
          padding: 0.5rem 1rem;
          // border-bottom: 1px solid rgba(255, 255, 255, 0.05);

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

  color: $white;
  background: $golden-700;

  &:hover {
    background: $yellow-600;
  }
}
</style>
