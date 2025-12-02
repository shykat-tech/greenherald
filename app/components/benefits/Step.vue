<template>
  <div class="step">
    <img src="/assets/images/steps/step1.png" alt="step1" id="stepImg"/>

    <div class="step-desc" id="stepDesc">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 24C40 19.5817 36.4184 16 32 16C27.5816 16 24 19.5817 24 24C24 28.4184 27.5816 32 32 32C36.4184 32 40 28.4184 40 24Z"
          stroke="#A2895B"
          stroke-width="3.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M58.6654 32.0003C58.6654 17.2727 46.7262 5.33362 31.9987 5.33362C17.2711 5.33362 5.33203 17.2727 5.33203 32.0003C5.33203 46.7277 17.2711 58.6669 31.9987 58.6669C46.7262 58.6669 58.6654 46.7277 58.6654 32.0003Z"
          stroke="#A2895B"
          stroke-width="3.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M45.3346 45.3333C45.3346 37.9696 39.365 32 32.0013 32C24.6375 32 18.668 37.9696 18.668 45.3333"
          stroke="#A2895B"
          stroke-width="3.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div class="desc">
        <h3>Sign Up Online</h3>
        <span
          >Fill out your alumni details and choose a membership package (Yearly
          or Lifetime).</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step {
  display: flex;
  align-items: center;
  overflow: hidden;
  @include clamp-property("gap", 1, 2);

  @media screen and (max-width: 767px) {
      flex-direction: column;
    }

  img {
    @include clamp-property("border-radius", 1.5, 2);
    @include clamp-property("height", 24, 32);
    @include clamp-property("width", 21, 29);
    aspect-ratio: 4/5;
    object-fit: cover;

    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .step-desc {
    display: flex;
    flex-direction: column;
    @include clamp-property("gap", 1, 2);

    

    svg {
      @include clamp-property("width", 3, 4);
      @include clamp-property("height", 3, 4);
      flex-shrink: 0;
    }

    .desc {
      h3 {
        @include clamp-property("font-size", 1.5, 2.5);
        @include clamp-property("line-height", 1.8, 3);
        @include clamp-property("letter-spacing", -0.015, -0.025);
        @include clamp-property("margin-bottom", 0.5, 0.5);
        text-wrap: nowrap;
        font-weight: 500;
      }

      span {
        @include clamp-property("font-size", 0.9375, 1);
        @include clamp-property("line-height", 1.4, 1.6);
        @include clamp-property("letter-spacing", -0.015, -0.01);
        font-weight: 400;
        color: $gray-900;
      }
    }

    @media screen and (max-width: 767px) {
      flex-direction: row;
    }
  }
}
</style>
