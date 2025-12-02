<template>
  <div class="card-wrapper">
    <div class="card-image">
      <img src="../../assets/images/event-form-banner.png" alt="" />
    </div>
    <div class="card-details">
      <h3>Special Discount for Alumni</h3>
      <p>Get a 20% discount on all alumni merchandise. Limited time offer!</p>
      <div class="card-action">
        <button>Explore Options</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card-wrapper {
  width: 100%;
  height: 100%;
  .card-image {
    width: 100%;
    aspect-ratio: 3 / 2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
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

    button {
      @include clamp-property("margin-top", 0.62, 1);
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
  }
}
</style>
