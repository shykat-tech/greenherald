<template>
  <div class="form-wrapper">
    <form @submit.prevent="handleSubmit" class="form">
      <h2>Complete your payment</h2>

      <div class="top-package-card">
        <div class="package-detail-block">
          <div class="package-title">
            <p>Lifetime</p>

            <div class="popular-badge">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C16.1421 22 19.5 18.6421 19.5 14.5C19.5 13.5 19.5 11.5 17.5 9C17.5 9 17.4004 11.8536 15.4262 11.4408C12.2331 10.7732 16.3551 4.50296 10.5 2C10.5 7 4.5 8.5 4.5 14.5C4.5 18.6421 7.85786 22 12 22Z"
                  stroke="#DAAC5E"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 19.0011C13.933 19.0011 15.5 16.9864 15.5 14.5011C12.3 15.7011 11.1667 12.9379 11 11C9.55426 11.5532 8.5 13.8256 8.5 15C8.5 17.4853 10.067 19.0011 12 19.0011Z"
                  stroke="#DAAC5E"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Popular</span>
            </div>
          </div>
          <div>
            <ul class="package-list">
              <li class="package-item">We'll verify your details.</li>
              <li class="package-item">
                You'll get an email once your account is active.
              </li>
            </ul>
          </div>
        </div>

        <div class="package-price-block">
          <h5>Change plan</h5>
          <div>
            <h3>BDT <span> 5000,000 </span></h3>
          </div>
        </div>
      </div>

      <div class="payment-method-form">
        <h3>Payment Method</h3>

        <div class="payment-method-list">
          <!-- Cards Payment Method -->
          <div class="payment-method-list-item">
            <label for="cards" class="payment-method-item">
              <input
                id="cards"
                type="radio"
                name="payment-method-type"
                value="cards"
                v-model="paymentData.paymentMethodType"
                class="payment-method-input"
              />

              <div class="payment-method-item-block">
                <h5 class="payment-method-item-title">Credit or debit card</h5>

                <div class="payment-method-items">
                  <img src="../../assets/images/dashboard/nagad.png" alt="" />
                  <img src="../../assets/images/dashboard/nagad.png" alt="" />
                  <img src="../../assets/images/dashboard/nagad.png" alt="" />
                  <img src="../../assets/images/dashboard/nagad.png" alt="" />
                </div>
              </div>
            </label>
          </div>

          <!-- MFS Payment Method -->
          <div class="payment-method-list-item">
            <label for="mfs" class="payment-method-item">
              <input
                id="mfs"
                type="radio"
                name="payment-method-type"
                value="mfs"
                v-model="paymentData.paymentMethodType"
                class="payment-method-input"
              />

              <div class="payment-method-item-block">
                <h5 class="payment-method-item-title">
                  Mobile Financial Services (MFS)
                </h5>

                <div class="payment-method-items">
                  <img src="../../assets/images/dashboard/nagad.png" alt="" />
                  <img src="../../assets/images/dashboard/nagad.png" alt="" />
                </div>
              </div>
            </label>
          </div>
        </div>

        <div class="important-notes">
          <p>
            Once you complete your payment, it cannot be canceled or refunded.
            Please review your details carefully before proceeding.
          </p>
        </div>
      </div>

      <!-- Message Block for validation errors -->
      <MessageBlock v-if="showError" :isSuccess="false" />

      <!-- Back Button -->
      <div class="button-group">
        <!-- <button type="button" @click="handleBack" class="btn-back">Back</button> -->
        <button
          type="submit"
          class="btn-submit auth-global-btn"
          :disabled="isLoading"
        >
          {{ isLoading ? "Processing..." : "Proceed to Payment" }}
        </button>

        <button
          type="button"
          @click="handlePayLater"
          class="btn-pay-later auth-global-btn"
        >
          Pay Later
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const emit = defineEmits(["submit", "back"]);

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});

// Reactive refs for message display
const showError = ref(false);

// Reactive payment data
const paymentData = reactive({
  paymentMethodType: "", // 'cards' or 'mfs'
  cardMethod: "", // 'visa', 'mastercard'
  mfsMethod: "", // 'bkash', 'nagad'
  amount: 5000000,
  currency: "BDT",
});

// Form submission handler
const handleSubmit = () => {
  // Reset previous states
  showError.value = false;

  console.log("Submitting payment data:", paymentData);

  // // Validate that a payment method is selected
  // if (!paymentData.paymentMethodType) {
  //   showError.value = true;
  //   return;
  // }

  // // Validate sub-method selection
  // if (paymentData.paymentMethodType === "cards" && !paymentData.cardMethod) {
  //   showError.value = true;
  //   return;
  // }

  // if (paymentData.paymentMethodType === "mfs" && !paymentData.mfsMethod) {
  //   showError.value = true;
  //   return;
  // }

  // Emit the form data to parent for processing
  emit("submit", { ...paymentData });
};

const handlePayLater = () => {
  emit("submit", { ...paymentData, payLater: true });
};
// Back button handler
const handleBack = () => {
  emit("back");
};
</script>

<style lang="scss" scoped>
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

  .top-package-card {
    @include clamp-property("margin-top", 1.25, 2);
    @include clamp-property("padding", 1.5, 2);
    @include clamp-property("gap", 0.5, 1);

    display: grid;
    grid-template-columns: 1fr 1fr;

    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 1.125rem;
    background: $green-500;
    height: 100%;

    @include mediaSm {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      gap: 2rem;
    }

    .package-detail-block {
      @include clamp-property("gap", 0.75, 1);
      display: flex;
      flex-direction: column;

      height: 100%;

      .package-title {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 0.5rem;

        p {
          @include clamp-property("font-size", 1.25, 1.5);

          color: $white;
          font-family: $font-manrope;

          font-style: normal;
          font-weight: 500;
          line-height: 110%;
        }

        .popular-badge {
          display: flex;
          padding: 0.25rem 0.5rem;
          justify-content: center;
          align-items: center;
          gap: 0.125rem;
          border-radius: 1.625rem;
          background: $green-400;

          svg {
            width: 1.25rem;
            height: 1.25rem;
            aspect-ratio: 1/1;
          }

          span {
            color: $white;
            font-family: $font-manrope;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 110%;
          }
        }
      }

      .package-list {
        @include clamp-property("margin-top", 1, 1.5);
        @include clamp-property("gap", 0.75, 1);

        display: flex;
        flex-direction: column;
        text-decoration: none;

        li {
          margin-left: 1.5rem;

          color: $neutral-gray-700;
          font-family: $font-manrope;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }

    .package-price-block {
      @include clamp-property("gap", 0.875, 1);

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      height: 100%;

      @include mediaSm {
        align-items: flex-start;
        justify-content: space-between;
      }

      h5 {
        @include clamp-property("font-size", 1, 1);
        color: $golden-500;
        font-family: $font-manrope;

        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
        opacity: 0.75;
      }

      h3 {
        @include clamp-property("font-size", 1.75, 1.5);
        color: $white;
        font-family: $font-manrope;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 1.65rem */
        letter-spacing: -0.03rem;

        span {
          font-weight: 400;
        }
      }
    }
  }

  .payment-method-form {
    @include clamp-property("margin-top", 2.5, 2.5);

    h3 {
      @include clamp-property("font-size", 1.25, 2);
      @include clamp-property("margin-bottom", 1.25, 2);

      color: $white;
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 500;
      line-height: 110%;
      letter-spacing: -0.04rem;
    }

    .payment-method-list {
      border-radius: 0.5rem;
      border: 1px solid var(--Green-green-400, #214129);

      .payment-method-list-item {
        @include clamp-property("gap", 0.875, 1);
        @include clamp-property("padding-inline", 1.25, 1.75);
        @include clamp-property("padding-block", 1.25, 1.75);

        display: flex;
        align-items: flex-start;

        align-self: stretch;

        &:not(:last-child) {
          border-bottom: 1px solid var(--Green-green-400, #214129);
        }

        .payment-method-item {
          @include clamp-property("gap", 0.75, 0.75);

          cursor: pointer;

          display: flex;
          justify-content: flex-start;
          align-items: flex-start;

          width: 100%;
          .payment-method-item-block {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.5rem;

            .payment-method-item-title {
              color: $white;

              font-family: $font-manrope;
              font-size: 1rem;
              font-style: normal;
              font-weight: 400;
              line-height: normal;

              opacity: 0.9;
            }

            .payment-method-items {
              @include clamp-property("gap", 0.5, 1);

              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;

              .payment-method-item {
                svg {
                  width: 1.75rem;
                  height: 1.25rem;
                  transition: all 0.3s ease;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }

  .important-notes {
    @include clamp-property("margin-top", 1.5, 2);

    p {
      @include clamp-property("font-size", 0.875, 1);

      color: $green-50;
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }

  .button-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    .btn-back {
      @include clamp-property("padding", 1.25, 1.5);
      @include clamp-property("font-size", 1, 1.125);
      @include clamp-property("height", 3.5, 4.5);

      color: $golden-700;
      font-family: $font-manrope;
      background: transparent;
      border: 2px solid $golden-700;

      border-radius: 5rem;
      flex: 1;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      font-style: normal;
      font-weight: 550;
      line-height: 110%;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: $golden-700;
        color: $white;
      }
    }
    .btn-submit {
      @include clamp-property("padding", 1.25, 1.5);
      @include clamp-property("font-size", 1, 1.125);

      color: $white;
      background: $golden-700;

      flex: 2;

      &:hover:not(:disabled) {
        background: $yellow-600;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .btn-pay-later {
      @include clamp-property("padding", 0.25, 1.5);
      @include clamp-property("font-size", 1, 1.125);
      @include clamp-property("height", 2.5, 4.5);

      color: $golden-700;
      font-family: $font-manrope;
      background: transparent;
      border: none;

      &:hover {
        color: $white;
      }
    }
  }
}

input[type="radio"] {
  @include clamp-property("width", 1, 1);
  @include clamp-property("height", 1, 1);

  margin-top: 0.25rem;

  border: 1px solid $golden-700;
  appearance: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
  &:checked {
    background: $golden-700;
  }
}
</style>
