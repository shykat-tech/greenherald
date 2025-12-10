<template>
  <div class="offer-page-wrapper">
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

    <h2>Discounts & Available Offers</h2>

    <div class="search-field">
      <div class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 17L21 21"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <input type="text" placeholder="Search..." />
    </div>

    <div class="tab-titles-container">
      <ul>
        <li>
          <button>All</button>
        </li>
        <li v-for="value in offers" :key="value.id">
          <button>{{ value.title }}</button>
        </li>
      </ul>
    </div>

    <div class="tab-panel-container">
      <div class="offers-grid">
        <div v-for="offer in offers" :key="offer.id" class="offer-card">
          <DiscountCard :offer="offer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth"],
});

const router = useRouter();

const itemsPerPage = 12;

const itemsToShow = ref();

const showAll = () => {
  // Logic to show all offers
};

const offers = [
  {
    id: 1,
    title: "Healthcare & Wellness",
    description: "Get 20% off on all summer clothing.",
    validUntil: "2024-08-31",
  },
  {
    id: 2,
    title: "Education",
    description: "Up to 50% off on selected electronics.",
    validUntil: "2024-11-29",
  },
  {
    id: 3,
    title: "Food",
    description: "Buy one get one free on all accessories.",
    validUntil: "2025-01-15",
  },
  {
    id: 4,
    title: "Travel",
    description: "Exclusive travel packages at discounted rates.",
    validUntil: "2024-12-31",
  },
  {
    id: 5,
    title: "Entertainment",
    description: "Special discounts on movie tickets and events.",
    validUntil: "2024-10-20",
  },
  {
    id: 6,
    title: "Fitness",
    description: "Free gym membership for 3 months.",
    validUntil: "2025-03-31",
  },
  {
    id: 7,
    title: "Technology",
    description: "Discounts on latest gadgets and software.",
    validUntil: "2024-09-15",
  },
  {
    id: 8,
    title: "Home & Living",
    description: "Up to 30% off on furniture and decor.",
    validUntil: "2024-11-05",
  },
  {
    id: 9,
    title: "Automotive",
    description: "Special offers on car services and accessories.",
    validUntil: "2025-02-28",
  },
  {
    id: 10,
    title: "Fashion",
    description: "Exclusive deals on clothing and footwear.",
    validUntil: "2024-12-15",
  },
  {
    id: 11,
    title: "Beauty & Personal Care",
    description: "Discounts on skincare and beauty products.",
    validUntil: "2024-10-31",
  },
  {
    id: 12,
    title: "Sports & Outdoors",
    description: "Special prices on sports equipment.",
    validUntil: "2025-01-10",
  },
  {
    id: 13,
    title: "Grocery",
    description: "Weekly discounts on fresh produce and essentials.",
    validUntil: "2024-09-30",
  },
];
</script>

<style lang="scss" scoped>
.offer-page-wrapper {
  @include clamp-property("border-radius", 1.125, 1.125);
  @include clamp-property("padding-inline", 1.25, 2.5);
  @include clamp-property("padding-block", 1.5, 2.5);

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  background: $neutral-white;

  .back-btn {
    @include clamp-property("padding-bottom", 1, 2);

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
        line-height: 110%; /* 1.1rem */
      }
    }
  }

  h2 {
    @include clamp-property("font-size", 1.5, 2.5);

    color: $green-900;
    font-family: $font-manrope;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 2.75rem */
  }

  .search-field {
    @include clamp-property("margin-block", 1.5, 2.5);

    position: relative;
    display: flex;
    align-items: center;
    .search-icon {
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-46%);
      pointer-events: none;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        aspect-ratio: 1/1;
      }
    }
    input {
      @include clamp-property("padding", 0.5, 1);
      @include clamp-property("font-size", 0.875, 1rem);

      // border: 1px solid $neutral-gray-300;

      border: none;
      border-radius: 0.5rem;
      outline: none;
      width: 100%;

      display: flex;
      height: 3.375rem;
      padding: 0.75rem;
      align-items: center;
      gap: 0.5rem;

      border-radius: 2.5rem;
      border: 1px solid $green-50;
      background: #f6f6f6;

      padding-left: 2.75rem; // Adjusted padding to accommodate the search icon

      &::placeholder {
        color: $gray-900;
        font-family: $font-manrope;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 1.1rem */
      }
    }
  }

  .tab-titles-container {
    @include clamp-property("margin-top", 1.5, 2.5);

    ul {
      @include clamp-property("gap", 0.5, 1);

      display: flex;
      overflow-x: auto;
      padding-bottom: 0.5rem;

      li {
        list-style: none;
        button {
          background: transparent;
          border: none;
          font-family: $font-manrope;
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          line-height: 110%; /* 1.1rem */
          color: $gray-900;
          cursor: pointer;

          color: $gray-700;

          /* Btn 16 */
          font-family: $font-manrope;
          font-size: 1rem;
          font-style: normal;
          font-weight: 550;
          line-height: 110%; /* 1.1rem */

          display: flex;
          padding: 0.75rem 1.125rem;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;

          border-radius: 3rem;
          border: 1px solid $gray-700;

          white-space: nowrap;

          &:hover {
            // text-decoration: underline;
            background-color: $golden-50;
          }

          &.active & {
            background-color: $golden-500;
            border: 1px solid $golden-700;
            color: $golden-900;
          }
        }
      }
    }
  }

  .tab-panel-container {
    @include clamp-property("margin-top", 1.5, 2.5);

    .offers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      gap: 1.5rem;

      @include mediaMd {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }

      .offer-card {
        width: 100%;
      }
    }
  }
}
</style>
