<template>
  <div class="form-wrapper">
    <h2>Tell us about you</h2>

    <form @submit.prevent="handleFormSubmit" class="form">
      <div class="form-group full-width">
        <label>Full Name</label>
        <input
          v-model="name"
          type="text"
          placeholder="Your name"
          class="input"
          required
        />
        <p v-if="errors.name" class="error-text">{{ errors.name }}</p>
      </div>
      <div class="form-group">
        <label>Father's Name</label>
        <input
          v-model="father_name"
          type="text"
          placeholder="Father's name"
          class="input"
          required
        />
        <p v-if="errors.father_name" class="error-text">
          {{ errors.father_name }}
        </p>
      </div>
      <div class="form-group">
        <label>Mother's Name</label>
        <input
          v-model="mother_name"
          type="text"
          placeholder="Mother's name"
          class="input"
          required
        />
        <p v-if="errors.mother_name" class="error-text">
          {{ errors.mother_name }}
        </p>
      </div>

      <div class="form-group">
        <label>Batch</label>
        <input
          v-model="batch"
          type="text"
          placeholder="Your batch"
          class="input"
          required
        />
        <p v-if="errors.batch" class="error-text">{{ errors.batch }}</p>
      </div>

      <div class="form-group">
        <label>Blood Group</label>
        <input
          v-model="blood_group"
          type="text"
          placeholder="Your blood group"
          class="input"
          required
        />
        <p v-if="errors.blood_group" class="error-text">
          {{ errors.blood_group }}
        </p>
      </div>

      <div class="form-group full-width">
        <label>Phone Number</label>
        <input
          v-model="phone"
          type="text"
          placeholder="Your phone number"
          class="input"
          required
        />
        <p v-if="errors.phone" class="error-text">{{ errors.phone }}</p>
      </div>

      <div class="form-group">
        <label>Current Profession</label>
        <input
          v-model="current_profession"
          type="text"
          placeholder="Your current profession"
          class="input"
          required
        />
        <p v-if="errors.current_profession" class="error-text">
          {{ errors.current_profession }}
        </p>
      </div>

      <div class="form-group">
        <label>Company Name</label>
        <input
          v-model="company_name"
          type="text"
          placeholder="Your company name"
          class="input"
          required
        />
        <p v-if="errors.company_name" class="error-text">
          {{ errors.company_name }}
        </p>
      </div>

      <div class="full-width terms-conditions">
        <input type="checkbox" id="terms" v-model="terms" />
        <label for="terms"
          >By proceeding, you agree to our <span>Terms of Service</span> and
          <span>Privacy Policy</span>.</label
        >
        <p v-if="errors.terms" class="error-text">{{ errors.terms }}</p>
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

const { handleSubmit, errors } = useForm({
  validationSchema: yup.object({
    name: yup.string().required("Full name is required"),
    father_name: yup.string().required("Father's name is required"),
    mother_name: yup.string().required("Mother's name is required"),
    batch: yup.string().required("Batch is required"),
    blood_group: yup.string().required("Blood group is required"),
    phone: yup.string().required("Phone number is required"),
    current_profession: yup.string().required("Current profession is required"),
    company_name: yup.string().required("Company name is required"),
    terms: yup
      .boolean()
      .oneOf([true], "You must agree to the terms and conditions"),
  }),
});

const { value: name } = useField("name");
const { value: father_name } = useField("father_name");
const { value: mother_name } = useField("mother_name");
const { value: batch } = useField("batch");
const { value: blood_group } = useField("blood_group");
const { value: phone } = useField("phone");
const { value: current_profession } = useField("current_profession");
const { value: company_name } = useField("company_name");
const { value: terms } = useField("terms");

// Form submission handler that emits to parent
const handleFormSubmit = handleSubmit(async (values) => {
  console.log("AccountCreateInfo form submitted with values:", values);

  // Transform data to match parent expectations
  const formData = {
    firstName: values.name?.split(" ")[0] || "",
    lastName: values.name?.split(" ").slice(1).join(" ") || "",
    phone: values.phone || "",
    graduationYear: values.batch || "",
    major: values.current_profession || "",
    // Include other fields as needed
    fatherName: values.father_name || "",
    motherName: values.mother_name || "",
    bloodGroup: values.blood_group || "",
    companyName: values.company_name || "",
  };

  console.log("Emitting form data to parent:", formData);
  // Emit to parent
  emit("submit", formData);
});
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
    color: #fff;
    text-align: center;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    margin-bottom: 3rem;
    font-family: $font-gloock;
  }

  .form {
    display: grid;
    gap: 2rem;

    grid-template-columns: repeat(2, 1fr);

    .full-width {
      grid-column: span 2;
    }

    .terms-conditions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: $font-manrope;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;

      color: #e8eae8;

      input {
        width: 1rem;
        height: 1rem;
        accent-color: $yellow-600;
        background-color: transparent;

        border-radius: 0.25rem;
        border: 1px solid #b29764;

        cursor: pointer;
      }

      span {
        color: #b29764;

        /* Body */
        font-family: $font-manrope;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }

    .form-group {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 0.5rem;

        color: #fff;
        font-family: $font-manrope;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .input {
        outline: none;
        border-radius: 0.75rem;
        background: rgba(255, 255, 255, 0.06);
        display: flex;
        height: 4rem;
        padding: 1.25rem;
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
  width: 100%;
  padding: 12px;
  color: #fff;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  border: none;

  display: flex;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 5rem;
  background: #7e6b47;
  text-align: center;

  color: #fff;

  /* Btn 18 */
  font-family: $font-manrope;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 550;
  line-height: 110%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: $yellow-600;
  }
}
</style>
