<template>
  <div id="loader">
    <img src="/assets/images/logo.svg" alt="greenherald-logo" id="animLogo" fetchpriority="high" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps();
</script>

<style lang="scss" scoped>
#loader {
  width: 100%;
  background: $yellow-500;
  animation: pulse 0.3s linear;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: $yellow-50;
  @include clamp-property("padding-top", 1.5, 6);
  height: 100vh;

  @media screen and (min-width: 375px) {
    height: 105vh;
  }

  @media screen and (min-width: 400px) {
    height: 100vh;
  }

  @media screen and (min-width: 1280px) {
    height: 120vh;
  }

  @media screen and (min-width: 1440px) {
    height: 100vh;
  }

  @media screen and (min-width: 1530px) {
    height: 110vh;
  }

  @media screen and (min-width: 1920px) {
    height: 120vh;
  }

  @media screen and (min-width: 2560px) {
    height: 112vh;
  }

  img {
    @include clamp-property("width", 7, 11.25);
    @include clamp-property("height", 7, 11.25);
    position: absolute;
    left: 50%;
    top: 45%;
    z-index: 10;
    transform: translate(-50%, -50%) scale(2);
    overflow: hidden;

    @media screen and (max-width: 320px) {
      top: 45%;
    }

    @media screen and (min-width: 321px) and (max-width: 768px) {
      top: 50%;
    }

    @media screen and (min-width: 769px) and (max-width: 1366px) {
      top: 40%;
    }

    @media screen and (min-width: 1367px) and (max-width: 1920px) {
      top: 45%;
    }
  }
}
</style>
