<template>
  <div class="theme-card-wrapper">
    <div class="card-bg">
      <!-- <img src="../../assets/images/diamond-bg.jpg" alt="" /> -->
    </div>

    <div class="card-top-wrapper">
      <!-- <img src="../../assets/images/diamond_theme.png" alt="" /> -->

      <div class="theme-info-wrapper">
        <h2>Annual user</h2>
        <p>Member since 24 june, 2025</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.theme-card-wrapper {
  @include clamp-property("padding-block", 2, 3.25);

  border: 2px solid red;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  gap: 0.625rem;

  overflow: hidden;
  border-radius: 1.75rem;
  backdrop-filter: blur(13.100000381469727px);
  width: 100%;
  aspect-ratio: 24.0625 / 27.82569;

  @include mediaMd {
    width: 100%;
    aspect-ratio: 21.875 / 13.5;
  }

  .card-bg {
    height: 100%;
    width: 100%;
    position: absolute;
    inset: 0;
    z-index: -1;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .card-top-wrapper {
    position: absolute;
    z-index: 1;
    inset: 0;

    width: 100%;
    height: 100%;

    padding: 3.25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .theme-info-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      @include mediaMd {
        // display: none;
      }

      h2 {
        @include clamp-property("font-size", 1.5, 2.5);

        color: $white;
        font-family: $font-manrope;
        text-align: center;
        font-style: normal;
        font-weight: 700;
        line-height: 110%; /* 2.75rem */
        text-transform: uppercase;
      }

      p {
        color: $neutral-gray-500;
        text-align: center;
        font-family: $font-manrope;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 1.1rem */
      }
    }
  }
}
</style>
