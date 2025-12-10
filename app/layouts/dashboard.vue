<template>
  <div class="dashboard-wrapper">
    <DashboardNav />

    <div class="content-wrapper">
      <slot />
    </div>

    <div class="dashboard-footer" v-if="route.name !== 'dashboard'">
      <p>© 2025 SFX Greenherald. All Rights Reserved.</p>
      <p>
        Made by
        <a href="https://co.design" target="_blank" rel="noopener noreferrer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
          >
            <g opacity="0.9" clip-path="url(#clip0_1109_2216)">
              <path
                d="M23.7861 0.00059804C21.6064 0.0252778 19.6752 0.883704 18.2751 2.27865L18.274 2.27757L15.5153 5.06961L10.6941 9.94869C10.6941 9.94869 10.4841 10.1611 10.3785 10.2674C10.3774 10.2685 10.3764 10.2695 10.3753 10.2706C9.79624 10.8565 8.98259 11.2159 8.05484 11.2267C6.2004 11.2471 4.77572 9.85963 4.75652 8.01508C4.73733 6.18556 6.13109 4.74877 7.945 4.72838C9.70987 4.70907 11.0994 5.94735 11.2721 7.63201L14.9458 3.89249C13.5424 1.50499 10.9223 -0.0348121 7.8309 0.00059804C3.37662 0.0499576 -0.045399 3.57702 0.000455444 8.06981C0.0473763 12.6012 3.54511 16.05 8.09856 15.9985C10.3401 15.9738 12.3097 15.0735 13.7269 13.6743C13.7419 13.6592 13.7579 13.6453 13.7728 13.6303L13.8218 13.5798L16.4718 10.8983C17.6096 13.9436 20.427 16.0306 23.9685 15.9899C28.5262 15.9384 32.0484 12.422 31.9994 7.90671C31.9503 3.37958 28.3876 -0.0509075 23.7861 0.00059804ZM24.0101 11.2267C22.1556 11.2471 20.7309 9.8607 20.7117 8.01508C20.6925 6.18556 22.0863 4.74877 23.9002 4.72838C25.7739 4.70799 27.2252 6.10508 27.2455 7.94855C27.2657 9.78773 25.8656 11.2052 24.0101 11.2267Z"
                fill="#08110B"
              />
            </g>
            <defs>
              <clipPath id="clip0_1109_2216">
                <rect width="32" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped>
.dashboard-wrapper {
  background-color: $golden-80;
  min-height: 100dvh;
  height: 100%;

  .content-wrapper {
    @include clamp-property("padding-bottom", 1, 2.5);
    @include clamp-property("padding-inline", 1.25, 15);

    padding-top: calc(var(--dashboard-nav-height) + 2.48rem);
    margin-inline: auto;

    @include mediaSm {
      padding-inline: 0;
      padding-top: var(--dashboard-nav-height);
    }
  }

  .dashboard-footer {
    @include clamp-property("padding-bottom", 2, 4);
    @include clamp-property("padding-top", 0.5, 1);

    color: #5e5e5e;
    text-align: center;
    font-family: Manrope;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 1.09375rem */
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    @include mediaSm {
      flex-direction: column;
      gap: 0.25rem;
    }

    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;
    }
  }
}
</style>
