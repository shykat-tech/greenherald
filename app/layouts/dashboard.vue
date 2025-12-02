<template>
  <div class="dashboard-wrapper">
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.dashboard-wrapper {
  background-color: $golden-80;
  min-height: 100dvh;
  height: 100%;

  .content-wrapper {
    @include clamp-property("padding-top", 1, 2.5);
    // margin: 0 auto;

    /* navbar height.. will adjusted when I finally implement it */
    margin-top: 10vh;
    // border: 2px solid red;
  }
}
</style>
