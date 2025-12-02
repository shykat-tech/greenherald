<template>
  <div
    class="discover-offers-section gap-between-sections dashboard-comp-wrapper"
  >
    <div class="top-infos">
      <h2>Discounts & Available Offers</h2>

      <button>View Offers</button>
    </div>

    <div class="cards">
      <div v-for="value in [1, 2, 3, 4]" :key="value">
        <DiscountCard />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.top-infos {
  @include clamp-property("margin-bottom", 1.5, 2.5);

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: $font-manrope;
    color: $green-900;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 1.65rem */
  }

  button {
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
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;

  @include mediaMd {
    grid-template-columns: 1fr 1fr;
  }

  @include mediaSm {
    grid-template-columns: 1fr;
  }
}
</style>
