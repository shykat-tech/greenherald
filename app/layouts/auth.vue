<template>
  <div class="auth-layout-wrapper">
    <nav></nav>

    <div class="auth-pages-inner-container">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.auth-layout-wrapper {
  background: $green-850;
  min-height: 100svh;
  width: 100svw;

  .auth-pages-inner-container {
    min-height: 100vh;
    width: 100%;
    margin-inline: auto;
    color: #fff;

    display: grid;
  }
}
</style>
