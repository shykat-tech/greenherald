<template>
  <div class="block-wrapper">
    <div class="logo">
      <img src="../../assets/icons/logo.svg" alt="" />
    </div>
    <div>
      <!-- stage 2 -->
      <AccountCreateInfo />

      <!-- stage 3 -->

      <!-- <AccountCreatePayment /> -->
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
  max-width: 606px;
  margin: 0 auto;
  padding-block: 3rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .logo {
    display: block;
    margin: 0 auto;
    flex-shrink: 0;

    img {
      width: 7.4585rem;
      height: 7.5rem;
    }
  }
}
</style>
