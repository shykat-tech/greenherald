<template>
  <div id="loader">
    <img src="/assets/images/logo.svg" alt="greenherald-logo" id="animLogo" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps();
</script>

<style lang="scss" scoped>
#loader {
  width: 100%;
  height: 120vh;
  background: $yellow-500;
  animation: pulse 0.3s linear;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: linear-gradient(to bottom, $yellow-100, $yellow-50);

  @include clamp-property("padding-top", 1.5, 6);

  @media screen and (max-width: 320px) {
    height: 110vh;
  }

  @media screen and (min-width: 321px) and (max-width: 768px) {
    height: 100vh;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 150vh;
  }

  @media screen and (min-width: 1025px) and (max-width: 1366px) {
    height: 130vh;
  }

  @media screen and (min-width: 1367px) and (max-width: 1920px) {
    height: 110vh;
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
