<template>
  <div class="message-block-wrapper" :class="{ 'dark-bg': isDarkBg }">
    <div class="wrapper">
      <div v-if="loadingStatus === 'success'" class="icon success-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <g clip-path="url(#clip0_397_15)">
            <path
              d="M10 36L24 50L56 18"
              stroke="white"
              stroke-width="4.44444"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_397_15">
              <rect width="64" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div v-if="loadingStatus === 'pending'" class="icon success-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M45.8699 5.3335H18.1295C14.2422 5.3335 10.8316 7.95936 10.6758 11.743C10.4798 16.5036 13.8279 19.6647 17.3444 22.6324C22.2091 26.7378 24.6415 28.7906 24.8966 31.389C24.9365 31.7956 24.9365 32.2047 24.8966 32.6114C24.6415 35.2098 22.2092 37.2626 17.3444 41.3679C13.731 44.4172 10.4696 47.2522 10.6758 52.2572C10.8316 56.041 14.2422 58.6668 18.1295 58.6668H45.8699C49.7571 58.6668 53.1678 56.041 53.3235 52.2572C53.4475 49.245 52.3312 46.2455 49.96 44.1602C48.879 43.2092 47.7566 42.2975 46.655 41.3679C41.7902 37.2626 39.3579 35.2098 39.1027 32.6114C39.0627 32.2047 39.0627 31.7956 39.1027 31.389C39.3579 28.7906 41.7902 26.7378 46.655 22.6324C50.2304 19.615 53.5272 16.6884 53.3235 11.743C53.1678 7.95936 49.7571 5.3335 45.8699 5.3335Z"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M24 57.7014C24 56.523 24 55.9337 24.2336 55.4188C24.2707 55.3369 24.312 55.2569 24.3573 55.1793C24.6427 54.6905 25.1256 54.3454 26.0915 53.6553C28.7747 51.7388 30.116 50.7804 31.6405 50.6785C31.88 50.6625 32.12 50.6625 32.3595 50.6785C33.884 50.7804 35.2253 51.7388 37.9085 53.6553C38.8744 54.3454 39.3573 54.6905 39.6427 55.1793C39.688 55.2569 39.7293 55.3369 39.7664 55.4188C40 55.9337 40 56.523 40 57.7014V58.6665H24V57.7014Z"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div v-else-if="loadingStatus === 'error'" class="icon error-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M37.1325 56H26.8669C14.519 56 8.34515 56 6.06998 51.9837C3.79481 47.9677 6.95265 42.6437 13.2683 31.996L18.4012 23.3422C24.4679 13.1141 27.5013 8 31.9997 8C36.4981 8 39.5314 13.1141 45.5981 23.3422L50.7312 31.996C57.0466 42.6437 60.2045 47.9677 57.9293 51.9837C55.6541 56 49.4802 56 37.1325 56Z"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 24V36"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32 45.3125V45.3392"
            stroke="white"
            stroke-width="4.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <h3 class="message-title">{{ title }}</h3>

      <p>
        {{ message }}
      </p>

      <div class="message-actions" v-if="showButton">
        <button @click="backToHome" class="auth-global-btn btn-reset">
          Back to home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loadingStatus: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
  message: {
    type: String,
    required: false,
    default: "",
  },
  isDarkBg: {
    type: Boolean,
    required: false,
    default: false,
  },
  showButton: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const backToHome = () => {
  window.location.href = "/";
};
</script>

<style lang="scss" scoped>
.message-block-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-inline: 1.5rem;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 40rem;

    .icon {
      border-radius: 62.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      gap: 0.5rem;
      aspect-ratio: 1/1;

      @include clamp-property("width", 4.5, 8);
      @include clamp-property("height", 4.5, 8);
      @include clamp-property("padding", 1, 1.5);
      @include clamp-property("margin-bottom", 2, 3);

      &.success-icon {
        background: $golden-700;
      }

      &.error-icon {
        background-color: #dd2c2c;
      }
    }

    .message-title {
      font-family: $font-gloock;

      text-align: center;
      font-style: normal;
      font-weight: 400;
      line-height: 110%; /* 3.3rem */
      @include clamp-property("font-size", 2, 3);
    }

    p {
      text-align: center;

      /* Body */
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 1.5rem */

      @include clamp-property("margin-top", 0.75, 1.25);
      @include clamp-property("font-size", 0.875, 1);
    }

    .message-actions {
      @include clamp-property("gap", 1, 1.5);
      @include clamp-property("margin-top", 2, 4.5);

      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;

      @include mediaSm {
        flex-direction: column;
        gap: 1rem;
      }

      .btn-reset {
        transition: all 0.2s ease-in-out;

        min-width: min(19.0625rem, 90svw);

        border: 1px solid $golden-700;

        color: $golden-700;

        &:hover {
          color: $golden-600;
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      }
    }
  }

  // Default styles (non-dark background)
  .message-title {
    color: $green-900;
  }

  p {
    color: $neutral-gray-900;
  }

  // Dark background styles with higher specificity
  &.dark-bg {
    .message-title {
      color: $white !important;
    }

    p {
      color: $neutral-gray-700 !important;
    }
  }
}
</style>
