<template>
  <div class="premium-theme-card">
    <div class="card-bg">
      <img src="../../assets/images/dashboard/annual-theme-bg.png" alt="" />
    </div>
    <div class="card-content">
      <div class="card-icon">
        <img src="../../assets/images/dashboard/annual-card-icon.png" alt="" />
      </div>
      <h2>Annual user</h2>
      <p>Member since 24 June, 2025</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.premium-theme-card {
  @include clamp-property("border-radius", 1.125, 1.75);

  overflow: hidden;

  background-color: $white;
  position: relative;

  display: flex;
  max-height: 27.82569rem;
  aspect-ratio: 24.1875 / 27.82569;
  padding: 3.75rem 3.25rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  backdrop-filter: blur(13.100000381469727px);

  @include mediaMd {
    min-height: 13.5rem;
    height: 100%;
    aspect-ratio: 21.875 / 13.5;
  }

  .card-bg {
    position: absolute;
    inset: 0;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-content {
    @include clamp-property("padding-block", 2, 3.25);
    @include clamp-property("padding-inline", 3.25, 3.25);

    position: absolute;
    z-index: 1;
    text-align: center;
    color: $white;
    inset: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card-icon {
      @include clamp-property("height", 10.93438, 14.90475);
      @include clamp-property("margin-bottom", 0.6, 0.5);

      aspect-ratio: 358/238.48;

      @include mediaSm {
        max-height: 5.93438rem;
        aspect-ratio: 142.42/94.95;
      }

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    h2 {
      @include clamp-property("font-size", 1.5, 2.5);

      color: $white;
      font-family: $font-manrope;
      text-align: center;
      font-style: normal;
      font-weight: 700;
      line-height: 110%; /* 1.65rem */
      text-transform: uppercase;
    }

    p {
      @include clamp-property("font-size", 0.875, 1);

      margin-top: 0.5rem;

      color: $gray-500;
      font-family: $font-manrope;
      text-align: center;
      font-style: normal;
      font-weight: 400;
      line-height: 110%; /* 1.1rem */
    }
  }
}
</style>
