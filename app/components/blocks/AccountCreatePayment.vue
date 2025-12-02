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
                  <div class="payment-method-item">
                    <label>
                      <input
                        type="radio"
                        name="card-payment-method"
                        value="visa"
                        v-model="paymentData.cardMethod"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="20"
                        viewBox="0 0 28 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_375_547)">
                          <path
                            d="M25.601 20H2.40098C1.07298 20 0.000976562 18.928 0.000976562 17.6V2.4C0.000976562 1.072 1.07298 0 2.40098 0H25.601C26.929 0 28.001 1.072 28.001 2.4V17.6C28.001 18.928 26.929 20 25.601 20Z"
                            fill="#F8F8F8"
                          />
                          <path
                            d="M25.601 0.8C26.481 0.8 27.201 1.52 27.201 2.4V17.6C27.201 18.48 26.481 19.2 25.601 19.2H2.40098C1.52098 19.2 0.800977 18.48 0.800977 17.6V2.4C0.800977 1.52 1.52098 0.8 2.40098 0.8H25.601ZM25.601 0H2.40098C1.07298 0 0.000976562 1.072 0.000976562 2.4V17.6C0.000976562 18.928 1.07298 20 2.40098 20H25.601C26.929 0 28.001 1.072 28.001 2.4C28.001 1.072 26.929 0 25.601 0Z"
                            fill="#E7E7E7"
                          />
                          <path
                            d="M11.7515 6.56884L10.2795 13.4008H12.0555L13.5275 6.56884H11.7515ZM23.1915 6.56884H21.6795C21.3435 6.56884 21.0475 6.76884 20.9275 7.06484L18.2555 13.4008H20.1195L20.4875 12.3768H22.7675L22.9835 13.4008H24.6315L23.1915 6.56884ZM21.0075 10.9768L21.9355 8.41684L22.4715 10.9768H21.0075ZM9.11946 6.56884L7.27146 11.2168L6.51946 7.26484C6.42346 6.81684 6.08746 6.56084 5.69546 6.56084H2.68746L2.64746 6.76084C3.27146 6.89684 3.96746 7.11284 4.39946 7.33684C4.65546 7.48884 4.73546 7.60884 4.81546 7.94484L6.23146 13.4088H8.10346L10.9915 6.57684H9.11946V6.56884ZM15.8635 8.47284C15.8635 8.23284 16.1035 7.96084 16.6155 7.90484C16.8715 7.88084 17.5755 7.84884 18.3675 8.21684L18.6795 6.76084C18.2475 6.60884 17.6955 6.46484 17.0235 6.46484C15.2715 6.46484 14.0315 7.39284 14.0155 8.72884C13.9995 9.71284 14.9035 10.2648 15.5675 10.5928C16.2555 10.9288 16.4955 11.1448 16.4875 11.4408C16.4875 11.8968 15.9355 12.1048 15.4235 12.1128C14.5355 12.1288 14.0075 11.8728 13.5995 11.6808L13.2795 13.1768C13.6955 13.3688 14.4635 13.5288 15.2635 13.5448C17.1355 13.5448 18.3515 12.6248 18.3675 11.2088C18.3515 9.37684 15.8475 9.26484 15.8635 8.47284Z"
                            fill="#0F2496"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_375_547">
                            <rect width="28" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </label>
                  </div>
                  <div class="payment-method-item">
                    <label>
                      <input
                        type="radio"
                        name="card-payment-method"
                        value="mastercard"
                        v-model="paymentData.cardMethod"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="20"
                        viewBox="0 0 28 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_375_551)">
                          <path
                            d="M25.6005 20H2.40049C1.07249 20 0.000488281 18.928 0.000488281 17.6V2.4C0.000488281 1.072 1.07249 0 2.40049 0H25.6005C26.9285 0 28.0005 1.072 28.0005 2.4V17.6C28.0005 18.928 26.9285 20 25.6005 20Z"
                            fill="#F8F8F8"
                          />
                          <path
                            d="M25.6005 0.8C26.4805 0.8 27.2005 1.52 27.2005 2.4V17.6C27.2005 18.48 26.4805 19.2 25.6005 19.2H2.40049C1.52049 19.2 0.800488 18.48 0.800488 17.6V2.4C0.800488 1.52 1.52049 0.8 2.40049 0.8H25.6005ZM25.6005 0H2.40049C1.07249 0 0.000488281 1.072 0.000488281 2.4V17.6C0.000488281 18.928 1.07249 20 2.40049 20H25.6005C26.9285 20 28.0005 18.928 28.0005 17.6V2.4C28.0005 1.072 26.9285 0 25.6005 0Z"
                            fill="#E7E7E7"
                          />
                          <path
                            d="M22.0658 10.0006C22.0658 12.7617 19.8298 14.9978 17.0783 14.9978C14.3267 14.9978 12.0908 12.7618 12.0908 10.0006C12.0908 7.23942 14.327 5.00342 17.0782 5.00342C19.8294 5.00342 22.0658 7.23942 22.0658 10.0006Z"
                            fill="#F79F1A"
                          />
                          <path
                            d="M15.9101 10.0007C15.9101 12.7618 13.6739 14.9979 10.9226 14.9979C8.17122 14.9979 5.93506 12.7619 5.93506 10.0007C5.93506 7.2395 8.17106 5.00342 10.9226 5.00342C13.6741 5.00342 15.9101 7.2395 15.9101 10.0007Z"
                            fill="#EA001B"
                          />
                          <path
                            d="M13.9964 6.06445C12.8297 6.97829 12.0908 8.39781 12.0908 10.0021C12.0908 11.6063 12.8395 13.0256 13.9964 13.9395C15.1631 13.0256 15.902 11.6061 15.902 10.0019C15.902 8.39765 15.1631 6.97829 13.9964 6.06445Z"
                            fill="#FF5F01"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_375_551">
                            <rect width="28" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </label>
                  </div>
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
                  <div class="payment-method-item">
                    <label>
                      <input
                        type="radio"
                        name="mfs-payment-method"
                        value="bkash"
                        v-model="paymentData.mfsMethod"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="20"
                        viewBox="0 0 28 20"
                        fill="none"
                      >
                        <rect width="28" height="20" rx="4" fill="#E2136E" />
                        <text
                          x="14"
                          y="12"
                          font-family="Arial, sans-serif"
                          font-size="10"
                          font-weight="bold"
                          text-anchor="middle"
                          fill="white"
                        >
                          bKash
                        </text>
                      </svg>
                    </label>
                  </div>
                  <div class="payment-method-item">
                    <label>
                      <input
                        type="radio"
                        name="mfs-payment-method"
                        value="nagad"
                        v-model="paymentData.mfsMethod"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="20"
                        viewBox="0 0 28 20"
                        fill="none"
                      >
                        <rect width="28" height="20" rx="4" fill="#F47920" />
                        <text
                          x="14"
                          y="12"
                          font-family="Arial, sans-serif"
                          font-size="10"
                          font-weight="bold"
                          text-anchor="middle"
                          fill="white"
                        >
                          Nagad
                        </text>
                      </svg>
                    </label>
                  </div>
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
        <button type="button" @click="handleBack" class="btn-back">Back</button>
        <button type="submit" class="btn-submit" :disabled="isLoading">
          {{ isLoading ? "Processing..." : "Proceed to Payment" }}
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

// Back button handler
const handleBack = () => {
  emit("back");
};
</script>

<style lang="scss" scoped>
.form-wrapper {
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

          color: $neutral-white;
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
            color: $neutral-white;
            font-family: $font-manrope;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 110%;
          }
        }
      }

      .package-list {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

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
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1rem;
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
        opacity: 0.9;
      }

      h3 {
        @include clamp-property("font-size", 1.75, 1.5);
        color: $neutral-white;
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

      color: $neutral-white;
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
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1.75rem;
        align-self: stretch;

        &:not(:last-child) {
          border-bottom: 1px solid var(--Green-green-400, #214129);
        }

        .payment-method-item {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 0.75rem;

          input[type="radio"] {
            cursor: pointer;
            appearance: none;
          }

          .payment-method-input {
            @include clamp-property("width", 1, 1.25);
            @include clamp-property("height", 1, 1.25);

            background-color: transparent !important;
            border: 2px solid $green-400;
            border-radius: 50%;
            margin-top: 0.25rem;
            position: relative;

            &:checked {
              border-color: $golden-700;
              background-color: $golden-700;

              &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 0.5rem;
                height: 0.5rem;
                background-color: white;
                border-radius: 50%;
              }
            }
          }

          .payment-method-item-block {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.5rem;

            .payment-method-item-title {
              color: $neutral-white;

              font-family: $font-manrope;
              font-size: 1rem;
              font-style: normal;
              font-weight: 400;
              line-height: normal;

              opacity: 0.9;
            }

            .payment-method-items {
              display: flex;
              gap: 1rem;
              flex-wrap: wrap;
              justify-content: flex-start;

              .payment-method-item {
                label {
                  cursor: pointer;

                  input[type="radio"] {
                    display: none;
                    transition: all 0.3s ease;

                    &:checked + svg {
                      border: 2px solid $golden-700;
                      box-shadow: 0 0 10px $golden-700;
                      transform: scale(1.05);
                    }
                  }

                  svg {
                    width: 1.75rem;
                    height: 1.25rem;
                    border: 2px solid transparent;
                    border-radius: 4px;
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
    gap: 1rem;
    margin-top: 2rem;
  }

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
    @include clamp-property("height", 3.5, 4.5);

    color: $white;
    font-family: $font-manrope;
    background: $golden-700;

    border-radius: 5rem;
    flex: 2;
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

    &:hover:not(:disabled) {
      background: $yellow-600;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}
</style>
