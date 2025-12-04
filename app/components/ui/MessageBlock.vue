<template>
  <div class="message-block-wrapper" :class="{ 'dark-bg': isDarkBg }">
    <div class="wrapper">
      <div v-if="isSuccess" class="icon success-icon">
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
      <div v-else class="icon error-icon">
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
    </div>
  </div>
</template>

<script setup>
defineProps({
  isSuccess: {
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
});
</script>

<style lang="scss" scoped>
.message-block-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-inline: 1.5rem;

  .dark-bg {
    .message-title {
      color: $neutral-white;
    }

    p {
      color: $neutral-gray-700;
    }
  }

  :not(.dark-bg) {
    .message-title {
      color: $green-900;
    }
    p {
      color: $neutral-gray-900;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 40rem;

    .icon {
      @include clamp-property("width", 4.5, 8);
      @include clamp-property("height", 4.5, 8);
      @include clamp-property("padding", 1, 1.5);
      @include clamp-property("margin-bottom", 2, 3);

      border-radius: 62.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      gap: 0.5rem;
      aspect-ratio: 1/1;

      &.success-icon {
        background: $golden-700;
      }

      &.error-icon {
        background-color: #dd2c2c;
      }
    }

    .message-title {
      @include clamp-property("font-size", 2, 3);
      font-family: $font-gloock;

      text-align: center;
      font-style: normal;
      font-weight: 400;
      line-height: 110%; /* 3.3rem */
    }

    p {
      @include clamp-property("margin-top", 0.75, 1.25);
      @include clamp-property("font-size", 0.875, 1);

      text-align: center;

      /* Body */
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 1.5rem */
    }
  }
}
</style>
