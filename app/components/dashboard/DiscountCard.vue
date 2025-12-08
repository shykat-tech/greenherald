<template>
  <div class="card-wrapper">
    <div class="card-image">
      <img src="../../assets/images/discount_plh.jpg" alt="" />

      <div class="image-tag">Alumni Discount</div>
    </div>
    <div class="card-details">
      <h3>Special Discount for Alumni</h3>
      <p>Get a 20% discount on all alumni merchandise. Limited time offer!</p>
      <div class="card-action">
        <button @click="gotToOfferDetails(2)">
          <span>Check it out</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M13.875 9H3.75"
              stroke="#7E6B47"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.75 13.5C9.75 13.5 14.25 10.1858 14.25 9C14.25 7.8141 9.75 4.5 9.75 4.5"
              stroke="#7E6B47"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const gotToOfferDetails = (id) => {
  // Logic to navigate to offer details page
  router.push(`/dashboard/offers/${id}`);
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 100%;
  height: 100%;
  .card-image {
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
    }

    .image-tag {
      position: absolute;
      bottom: 1rem;
      left: 0.6875rem;

      border-radius: 1.5rem;
      background: rgba(8, 17, 11, 0.6);
      backdrop-filter: blur(4px);

      display: flex;
      padding: 0.25rem 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;

      color: $neutral-white;
      font-family: $font-manrope;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 1.125rem */
    }
  }

  .card-details {
    @include clamp-property("margin-top", 1.5, 1);

    h3 {
      @include clamp-property("font-size", 1.25, 1.5);

      font-family: $font-manrope;
      color: #000;
      font-style: normal;
      font-weight: 600;
      line-height: 110%;
    }
    p {
      @include clamp-property("margin-top", 0.38, 0.5);
      @include clamp-property("font-size", 0.9375, 1rem);

      color: $neutral-gray-900;
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 1.40625rem */
    }

    .card-action {
      @include clamp-property("margin-top", 0.62, 1);

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        background-color: transparent;
        color: $neutral-white;
        border: none;

        font-family: $font-manrope;
        cursor: pointer;
        color: $golden-700;
        font-size: 1rem;
        font-style: normal;
        font-weight: 550;
        line-height: 110%; /* 1.1rem */
      }

      svg {
        width: 1.125rem;
        height: 1.125rem;
        aspect-ratio: 1/1;
        font-size: 1rem;
      }
    }
  }
}
</style>
