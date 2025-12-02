<template>
  <div
    class="gap-between-sections dashboard-comp-wrapper quick-actions-wrapper"
  >
    <div class="top-bar-quick-actions">
      <h2>Finish your profile</h2>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M12.75 0.75L0.75081 12.7492M12.7492 12.75L0.75 0.75085"
          stroke="#141B34"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div class="progress-bar-wrapper">
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: `${dashboardStore.getActionProgress}%` }"
        ></div>
      </div>
      <div class="counter">1/6</div>
    </div>

    <div class="actions-container">
      <div class="swiper" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="value in actions" :key="value.type">
            <ActionCard
              :type="value.type"
              :title="value.title"
              :description="value.description"
              :icon="value.icon"
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Swiper from "swiper";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

const dashboardStore = useDashboardStore();

const swiper = ref(null);
const swiperInstance = ref(null);

const actions = [
  {
    type: "edit",
    title: "Edit Profile",
    description: "Make changes to your personal information.",
    icon: "edit-icon.svg",
  },
  {
    type: "personal-detail",
    title: "Personal Details",
    description: "Update your personal details and preferences.",
    icon: "personal-detail-icon.svg",
  },
  {
    type: "contact-info",
    title: "Contact Information",
    description: "Add or update your contact information.",
    icon: "contact-info-icon.svg",
  },
  {
    type: "documents",
    title: "Upload Documents",
    description: "Upload necessary documents for verification.",
    icon: "documents-icon.svg",
  },
  {
    type: "likes-contributions",
    title: "Likes & Contributions",
    description: "Share your interests and contributions.",
    icon: "likes-contributions-icon.svg",
  },
  {
    type: "profile-photo",
    title: "Profile Photo",
    description: "Upload a profile photo to personalize your account.",
    icon: "profile-photo-icon.svg",
  },
];

onMounted(() => {
  if (swiper.value) {
    swiperInstance.value = new Swiper(swiper.value, {
      slidesPerView: 2, // Default for all screens
      spaceBetween: 10,
      centeredSlides: false,
      loop: false,
      grabCursor: true,
      autoHeight: false, // Keep uniform height
      watchSlidesProgress: true, // Watch for slide changes

      breakpoints: {
        640: {
          slidesPerView: 1.7,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.7,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
      },
    });
  }
});

onUnmounted(() => {
  if (swiperInstance.value) {
    swiperInstance.value.destroy(true, true);
  }
});
</script>

<style lang="scss" scoped>
.quick-actions-wrapper {
  max-width: 100%;
  overflow: hidden;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  @include mediaMd {
    padding: 0;
    min-height: 450px;
  }
  .top-bar-quick-actions {
    @include clamp-property("margin-bottom", 1, 1.5);

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .progress-bar-wrapper {
    @include clamp-property("margin-bottom", 1, 1.5);
    @include clamp-property("gap", 1, 2);

    display: flex;
    align-items: center;
    justify-content: space-between;

    .progress-bar {
      @include clamp-property("height", 0.5, 0.75);
      width: 100%;
      background-color: $green-50;
      border-radius: 2.0625rem;
      overflow: hidden;
      height: 0.5rem;

      .progress-fill {
        height: 100%;
        background-color: $green-400;
        border-radius: 2rem;
        transition: width 0.3s ease-in-out;
      }
    }
  }

  .actions-container {
    @include clamp-property("margin-top", 1, 1.5);
    flex: 1; // Take remaining space in flex container
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    // Mobile first approach - full width on mobile
    @include mediaSm {
      max-width: 100%;
      width: 100%;
    }

    @include mediaMd {
      max-width: 82dvw;
    }

    .swiper {
      overflow: hidden;
      width: 100%;
      // flex: 1; // Take remaining space in flex container
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;
      justify-content: center;

      .swiper-wrapper {
        display: flex;
        align-items: stretch; // This ensures all slides stretch to same height
        flex: 1;
        height: auto;
      }

      .swiper-slide {
        width: auto;
        flex-shrink: 0;
        display: flex;
        align-items: stretch;
        justify-content: center;
        height: 100%;

        @include mediaSm {
          max-width: none;
          flex: 0 0 auto;
        }

        > * {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

// Global styles for swiper pagination bullets
:global(.swiper-pagination-bullet) {
  width: 8px !important;
  height: 8px !important;
  background-color: $green-200 !important;
  opacity: 1 !important;
  margin: 0 4px !important;
}

:global(.swiper-pagination-bullet-active) {
  background-color: $green-400 !important;
}
</style>
