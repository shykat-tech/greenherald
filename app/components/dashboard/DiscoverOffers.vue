<template>
  <div
    class="discover-offers-section gap-between-sections dashboard-comp-wrapper"
  >
    <div class="top-infos">
      <h2>Discounts & Available Offers</h2>

      <button @click="goToOffersPage">View Offers</button>
    </div>

    <div class="cards">
      <div v-for="value in [1, 2, 3]" :key="value">
        <DiscountCard />
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const goToOffersPage = () => {
  router.push("/dashboard/offers");
};
</script>

<style lang="scss" scoped>
.top-infos {
  @include clamp-property("margin-bottom", 1.5, 2.5);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @include mediaSm {
    flex-direction: column;
    gap: 0.88rem;
  }

  h2 {
    @include clamp-property("font-size", 1.5, 2.25);

    font-family: $font-manrope;
    color: $green-900;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 1.65rem */
  }

  button {
    @include clamp-property("font-size", 0.9375, 1);
    background-color: transparent;
    border: none;

    font-family: $font-manrope;
    color: $golden-700;
    cursor: pointer;
    font-style: normal;
    font-weight: 550;
    line-height: 110%; /* 1.1rem */

    display: flex;
    padding: 0.75rem 1.125rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 3rem;
    border: 1px solid $golden-700;
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
