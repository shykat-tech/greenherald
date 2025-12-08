<template>
  <div class="discount-detail-wrapper">
    <div class="back-btn">
      <button @click="router.back()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.5 12.0039H19"
            stroke="#5E5E5E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.9999 18.0001C10.9999 18.0001 5.00001 13.581 5 11.9999C4.99999 10.4188 11 6 11 6"
            stroke="#5E5E5E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span> Back </span>
      </button>
    </div>

    <div class="page-contents">
      <h2 class="offer-title">Exclusive Coffee Perks</h2>
      <div class="page-image-container">
        <img src="../../../assets/images/discount-detail-banner.jpg" alt="" />
      </div>

      <p class="top-paragraph">
        Enjoy your time, unwind your day, and dive into a world of special
        coffee rewards made just for those who truly appreciate every sip.
      </p>

      <div class="validity-block">
        <div class="details-block">
          <div class="detail-item">
            <h5>Validity</h5>
            <p>December 12, 2025</p>
          </div>

          <div class="mobile-only detail-item">
            <h5>Category</h5>
            <p>Lifestyle</p>
          </div>
        </div>

        <div class="details-block desktop-only">
          <div class="detail-item">
            <h5>Category</h5>
            <p>Lifestyle</p>
          </div>
        </div>

        <div class="time-block">
          <div class="time-segment">
            <h5>12</h5>
            <p>Days</p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="14"
            viewBox="0 0 4  14"
            fill="none"
          >
            <path
              d="M0 14V10.1325H3.98198V14H0ZM0.0180181 3.8675V0H4V3.8675H0.0180181Z"
              fill="#7E6B47"
            />
          </svg>

          <div class="time-segment">
            <h5>08</h5>
            <p>Hours</p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="14"
            viewBox="0 0 4 14"
            fill="none"
          >
            <path
              d="M0 14V10.1325H3.98198V14H0ZM0.0180181 3.8675V0H4V3.8675H0.0180181Z"
              fill="#7E6B47"
            />
          </svg>
          <div class="time-segment">
            <h5>30</h5>
            <p>Minutes</p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="14"
            viewBox="0 0 4 14"
            fill="none"
          >
            <path
              d="M0 14V10.1325H3.98198V14H0ZM0.0180181 3.8675V0H4V3.8675H0.0180181Z"
              fill="#7E6B47"
            />
          </svg>

          <div class="time-segment">
            <h5>45</h5>
            <p>Seconds</p>
          </div>
        </div>
      </div>

      <div class="validity-border"></div>

      <div class="rich-text-block">
        <h4>About this offer</h4>

        <p>
          Embark on an unforgettable journey to the breathtaking Kingdom of
          Bhutan. This exclusive Drukair Holidays campaign, in partnership with
          City Bank, is your passport to an extraordinary adventure, offering
          you a unique opportunity to immerse yourself in stunning Himalayan
          landscapes, ancient monasteries, and a vibrant, untouched culture.
          Take advantage of this special offer, exclusively for our City Bank
          AMEX cardholders, to save on your dream holiday package.  What's in it
          for you: 15% Savings: Enjoy a significant discount on all-inclusive
          holiday packages. All-Inclusive Packages: Your trip includes flights,
          comfortable accommodation, guided tours, and local transportation.
          Expert Local Guides: Explore the best of Bhutan with knowledgeable and
          friendly guides. Flexible Itineraries: Choose from a variety of
          curated packages or customize your own adventure. Hassle-Free Booking:
          Our dedicated team is here to ensure a smooth and easy booking process
          from start to finish.  Featured packages Discover our most popular
          itineraries and find the perfect journey for you. Cultural & Spiritual
          Journey: Explore iconic monasteries and fortresses. Adventure &
          Trekking: Hike through pristine mountain trails and breathtaking
          valleys. Family Getaway: Enjoy a stress-free holiday with activities
          for all ages. Luxury & Relaxation: Unwind in premium hotels and
          experience Bhutan in style.
        </p>
      </div>
    </div>
  </div>
  <div class="latest-offers">
    <DiscoverOffers />
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const offerId = router.currentRoute.value.params.id;

definePageMeta({
  layout: "dashboard",
});
</script>

<style lang="scss" scoped>
.discount-detail-wrapper {
  @include clamp-property("padding-block", 1.5, 2.5);
  @include clamp-property("padding-inline", 1.25, 2.5);

  gap: 1rem;
  align-self: stretch;

  border-radius: 1.125rem;
  background: $neutral-white;

  .back-btn {
    @include clamp-property("padding-bottom", 2, 1);
    display: flex;
    align-items: center;

    gap: 0.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      aspect-ratio: 1/1;
    }

    button {
      @include clamp-property("font-size", 0.875, 1);
      @include clamp-property("gap", 0.5, 0.75);

      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      cursor: pointer;

      span {
        color: $gray-900;
        font-family: $font-manrope;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%;
        /* 1.1rem */
      }
    }
  }

  .page-contents {
    .offer-title {
      @include clamp-property("font-size", 1.5, 2.5);
      @include clamp-property("padding-bottom", 1.5, 2.5);

      color: $green-900;
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 600;
      line-height: 130%; /* 3.25rem */
    }

    .page-image-container {
      @include clamp-property("border-radius", 1, 1.75);
      width: 100%;
      aspect-ratio: 1004/418.33;
      overflow: hidden;

      img {
        width: 100%;
        aspect-ratio: 1004/418.33;
        object-fit: cover;
      }
    }

    .top-paragraph {
      @include clamp-property("padding-top", 0.75, 1);
      @include clamp-property("font-size", 0.8125, 1);

      color: $gray-700;
      font-family: $font-manrope;

      /* Body */
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 1.5rem */
    }

    .validity-block {
      @include clamp-property("padding-block", 1.5, 3);

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;

      @include mediaSm {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        .details-block {
          order: 2;
        }

        .time-block {
          order: 1;
          width: 100%;
        }
      }

      .details-block {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;

          h5 {
            @include clamp-property("font-size", 0.9375, 1);

            color: $gray-700;
            font-family: $font-manrope;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 1.875rem */
          }

          p {
            @include clamp-property("font-size", 1, 1.125);

            color: $gray-900;
            font-family: $font-manrope;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 1.6875rem */
          }
        }

        @include mediaSm {
          gap: 2.5rem;
          width: 100%;
          justify-content: flex-start;
        }
      }

      .time-block {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 1rem;

        @include mediaSm {
          justify-content: flex-start;
        }

        .time-segment {
          @include clamp-property("gap", 0.75, 1);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;

          h5 {
            @include clamp-property("font-size", 1.75, 2);

            color: $yellow-700;
            font-family: $font-manrope;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 2.625rem */
            letter-spacing: -0.0175rem;
          }
          p {
            color: $gray-900;
            text-align: center;
            font-family: $font-manrope;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 1.125rem */
            letter-spacing: -0.0075rem;
            text-transform: uppercase;
          }
        }
      }
    }

    .validity-border {
      height: 2px;
      background: $gray-100;
      width: 100%;
    }

    .rich-text-block {
      @include richtext();
    }
  }
}

.latest-offers {
  @include clamp-property("padding-block", 1, 1.5);
  @include clamp-property("padding-inline", 1.25, 1.5);
  @include clamp-property("margin-top", 1.5, 2.5);

  border-radius: 1.125rem;
  background: var(--Neutral-White, #fff);
}

.mobile-only {
  display: none !important;

  @include mediaSm {
    display: flex !important;
  }
}

.desktop-only {
  display: flex !important;

  @include mediaSm {
    display: none !important;
  }
}
</style>
