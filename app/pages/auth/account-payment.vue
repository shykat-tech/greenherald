<template>
  <div class="block-wrapper">
    <div class="logo">
      <img src="../../assets/icons/logo.svg" alt="" />
    </div>
    <div>
      <AccountCreatePayment />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  middleware: ["guest"],
});
</script>

<style lang="scss" scoped>
.block-wrapper {
  @include clamp-property("gap", 3, 4);
  @include clamp-property("padding-top", 2, 3);
  @include clamp-property("padding-bottom", 6, 11.19);

  max-width: 40rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  .logo {
    display: block;
    margin: 0 auto;

    img {
      @include clamp-property("width", 5.4585, 7.4585);
      @include clamp-property("height", 5.4585, 7.5);
    }
  }
}
</style>
