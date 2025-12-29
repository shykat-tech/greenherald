<template>
  <div class="event-form-wrapper">
    <div v-if="isFormSubmitted" class="message-block-container">
      <MessageBlock
        :loadingStatus="isError ? 'error' : 'success'"
        :title="isError ? 'Oops!' : 'Registration successful!'"
        :message="
          isError
            ? 'Something went wrong. We couldn’t complete your request. Please try again.'
            : 'Thank you for registering. A confirmation email has been sent to your email and save your payment receipt for reference.'
        "
        :isDarkBg="false"
      />
    </div>

    <div class="event-form-container" v-else>
      <h2 class="event-page-title">Global Alumni Reunion 2025</h2>
      <div class="event-form-banner">
        <img src="../assets/images/event-form-banner.png" alt="banner" />
      </div>

      <div class="event-info-card">
        <div class="left">
          <div>
            <h5 class="event-info-title">Event Date</h5>
            <p class="event-info-detail">December 15-20, 2025</p>
          </div>
          <div>
            <h5 class="event-info-title">Event Venue</h5>
            <p class="event-info-detail">Banani, Dhaka</p>
          </div>
        </div>

        <div class="right">
          <h5 class="event-info-title">Registration Fee</h5>
          <p class="event-info-detail price">BDT 2000</p>
        </div>
      </div>

      <div class="form-container-wrapper">
        <h3 class="event-form-title">
          To secure your spot at this exclusive alumni event, fill in your
          details below.
        </h3>

        <div class="registered-user-profile" v-if="globalStore.alumniStatus">
          <div class="info-item">
            <h4>Name</h4>
            <p class="info-detail">John Doe</p>
          </div>

          <div class="info-item">
            <h4>Batch</h4>
            <p class="info-detail">2010-2015</p>
          </div>

          <div class="info-item">
            <h4>Email</h4>
            <p class="info-detail">Paid</p>
          </div>
        </div>
        <form @submit.prevent="handleFormSubmit">
          <div class="form-group" v-if="!globalStore.alumniStatus">
            <label for="batch" required>Batch</label>
            <select name="batch" id="batch" required>
              <option value="" disabled selected></option>
              <option value="2000-2005">2000-2005</option>
              <option value="2006-2010">2006-2010</option>
              <option value="2011-2015">2011-2015</option>
              <option value="2016-2020">2016-2020</option>
              <option value="2021-2025">2021-2025</option>
            </select>
          </div>

          <div class="form-group" v-if="!globalStore.alumniStatus">
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>

          <div class="form-group" v-if="!globalStore.alumniStatus">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div class="form-group">
            <label>Phone Number <span>*</span></label>

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

          <div class="form-group" v-if="globalStore.alumniStatus">
            <label>Food Preferences</label>
            <div class="radio-group">
              <label>
                <input
                  v-model="foodPreferences"
                  type="radio"
                  value="vegetarian"
                />
                Vegetarian
              </label>
              <label>
                <input v-model="foodPreferences" type="radio" value="vegan" />
                Vegan
              </label>
              <label>
                <input
                  v-model="foodPreferences"
                  type="radio"
                  value="non-vegetarian"
                />
                Non-Vegetarian
              </label>
            </div>
            <p v-if="errors.foodPreferences" class="error-text">
              {{ errors.foodPreferences }}
            </p>
          </div>

          <!-- radio button for t shirt -->
          <div class="form-group" v-if="globalStore.alumniStatus">
            <label>T-Shirt Size</label>
            <div class="radio-group">
              <label>
                <input v-model="tshirtSize" type="radio" value="S" />
                Small
              </label>
              <label>
                <input v-model="tshirtSize" type="radio" value="M" />
                Medium
              </label>
              <label>
                <input v-model="tshirtSize" type="radio" value="L" />
                Large
              </label>
              <label>
                <input v-model="tshirtSize" type="radio" value="XL" />
                Extra Large
              </label>
            </div>
            <p v-if="errors.tshirtSize" class="error-text">
              {{ errors.tshirtSize }}
            </p>
          </div>

          <div class="form-group">
            <label>Payment methods <span>*</span></label>
            <div class="radio-group">
              <label class="payment-option">
                <input
                  v-model="paymentMethod"
                  type="radio"
                  value="card-transfer"
                />
                <div class="options">
                  <p>Credit or debit card</p>

                  <div>
                    <img
                      src="../assets/images/dashboard/visa-logo.svg"
                      alt="Visa"
                      width="40"
                    />
                    <img
                      src="../assets/images/dashboard/mastercard-logo.svg"
                      alt="Mastercard"
                      width="40"
                    />
                    <img
                      src="../assets/images/dashboard/amex-logo.svg"
                      alt="Amex"
                      width="40"
                    />
                  </div>
                </div>
              </label>

              <label class="payment-option">
                <input
                  v-model="paymentMethod"
                  type="radio"
                  value="mobile-transfer"
                />

                <div class="options">
                  <p>Mobile Payment</p>

                  <div>
                    <img
                      src="../assets/images/dashboard/nagad.png"
                      alt="Nagad"
                      width="40"
                    />
                    <img
                      src="../assets/images/dashboard/bkash.png"
                      alt="Nagad"
                      width="40"
                    />
                  </div>
                </div>
              </label>
            </div>
            <p v-if="errors.paymentMethod" class="error-text">
              {{ errors.paymentMethod }}
            </p>
          </div>

          <button type="submit" class="btn-submit">Proceed to Payment</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VueTelInput } from "vue-tel-input";

const globalStore = useGlobalStore();

const phone = ref("");
const paymentMethod = ref("");
const foodPreferences = ref("");
const tshirtSize = ref("");
const errors = ref({});
const hasAttemptedSubmit = ref(false);

const isFormSubmitted = ref(false);
const isError = ref(false);

const handleFormSubmit = async () => {
  try {
    hasAttemptedSubmit.value = true;

    // Simple phone validation
    if (!phone.value || phone.value.length < 7) {
      errors.value.phone = "Please enter a valid phone number";
      return;
    } else {
      errors.value.phone = "";
    }

    // Payment method validation
    if (!paymentMethod.value) {
      errors.value.paymentMethod = "Please select a payment method";
      return;
    } else {
      errors.value.paymentMethod = "";
    }

    // Food preferences validation
    if (!foodPreferences.value) {
      errors.value.foodPreferences = "Please select your food preference";
      return;
    } else {
      errors.value.foodPreferences = "";
    }

    // T-shirt size validation
    if (!tshirtSize.value) {
      errors.value.tshirtSize = "Please select your t-shirt size";
      return;
    } else {
      errors.value.tshirtSize = "";
    }

    isFormSubmitted.value = true;
    console.log("Form submitted with:", {
      phone: phone.value,
      paymentMethod: paymentMethod.value,
      foodPreferences: foodPreferences.value,
      tshirtSize: tshirtSize.value,
      alumniStatus: globalStore.alumniStatus,
    });
  } catch (error) {
    console.error("Form submission error:", error);
    isError.value = true;
  }
};
</script>

<style lang="scss" scoped>
.event-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 10vh;
  background: $green-50;
  min-height: 100dvh;

  .message-block-container {
    @include clamp-property("padding", 1, 3);

    display: flex;
    min-width: 44.625rem;
    max-width: 90svw;
    flex-direction: column;
    align-items: center;

    border-radius: 1.75rem;
    background: $white;
    @include mediaSm {
      min-width: unset;
      padding-block: 2.125rem;
    }
  }

  .event-form-container {
    @include clamp-property("padding-inline", 1, 1.25);
    @include clamp-property("padding-top", 1.5, 2);
    @include clamp-property("padding-bottom", 0.5, 0.5);

    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.75rem;
    background: $white;
    max-width: 50rem;

    .event-page-title {
      @include clamp-property("font-size", 1.5, 2);
      @include clamp-property("margin-bottom", 1.5, 2);

      color: $green-900;
      text-align: center;
      font-family: $font-gloock;

      font-style: normal;
      font-weight: 400;
      line-height: 110%; /* 2.2rem */
      letter-spacing: -0.04rem;
    }

    .event-form-banner {
      @include clamp-property("margin-bottom", 1, 1);

      width: 100%;
      aspect-ratio: 8 / 3;
      border-radius: 1.125rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .event-info-card {
      @include clamp-property("padding-block", 1, 1.75);
      @include clamp-property("padding-inline", 1.25, 2);

      background: $golden-90;

      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.5rem;
      align-self: stretch;
      border-radius: 1.125rem;

      .left {
        @include clamp-property("gap", 2, 3.5);
        display: flex;
      }

      .event-info-title {
        @include clamp-property("font-size", 1, 1);

        color: $green-900;
        font-family: $font-manrope;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: -0.01rem;
        opacity: 0.7;
      }

      .event-info-detail {
        @include clamp-property("font-size", 0.875, 1.125);

        color: $green-900;
        font-family: $font-manrope;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: -0.01125rem;

        &.price {
          @include clamp-property("font-size", 1, 1.5);

          font-style: normal;
          font-weight: 600;
          letter-spacing: -0.015rem;
        }
      }
    }

    .registered-user-profile {
      @include clamp-property("padding-block", 1, 1.5);
      @include clamp-property("padding-inline", 1.25, 2);

      display: flex;
      justify-content: space-between;
      align-self: stretch;
      margin-top: 1.5rem;
      margin-bottom: 2rem;
      border: 1px solid $gray-600;
      border-radius: 0.75rem;

      .info-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      h4 {
        @include clamp-property("font-size", 0.875, 1);

        color: $green-900;
        font-family: $font-manrope;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: -0.01rem;
        opacity: 0.7;
      }
      .info-detail {
        @include clamp-property("font-size", 1, 1.125);

        color: $green-900;
        font-family: $font-manrope;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: -0.01125rem;
      }
    }

    .form-container-wrapper {
      @include clamp-property("padding-block", 1.5, 2.5);
      @include clamp-property("padding-inline", 1, 1.5);

      .event-form-title {
        @include clamp-property("font-size", 1.25, 1.5);
        @include clamp-property("margin-bottom", 1.5, 2.81);

        color: $green-900;
        font-family: $font-gloock;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 2.1rem */
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

          :deep(.vue-tel-input) {
            border-radius: 0.75rem;
            // border: 1px solid $gray-600;
            background: transparent;
            transition: all 0.2s ease-in-out;

            border: none;

            &:focus-within {
              border-color: $golden-700;
              box-shadow: 0 0 0 2px rgba(126, 107, 71, 0.3);
            }

            .vti__dropdown {
              background: $white;
              border: 1px solid $gray-600;
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

              border: 1px solid $gray-600;
              margin-left: 0.75em;

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
            border: 1px solid $gray-600;
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

  &:disabled {
    background: #d1d5db;
    color: #6b7280;
    cursor: not-allowed;

    &:hover {
      background: #d1d5db;
    }
  }
}
</style>
