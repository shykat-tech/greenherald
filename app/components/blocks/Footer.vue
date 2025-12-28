<template>
  <footer>
    <ul class="left-section">
      <!-- <li>
                <NuxtLink to="/">Upcoming Event</NuxtLink>
            </li> -->
      <li>
        <NuxtLink
          to="/"
          @click="openContactModal"
          aria-label="Contact Form Open"
          >Contact</NuxtLink
        >
      </li>
      <li>
        <span>Follow us</span>

        <NuxtLink to="/" target="_blank" aria-label="Facebook Link">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1057_571)">
              <g clip-path="url(#clip1_1057_571)">
                <path
                  d="M18.8936 2.25H5.10645C3.53152 2.25 2.25 3.53152 2.25 5.10645V18.8936C2.25 20.4685 3.53152 21.75 5.10645 21.75H10.8574V14.8564H8.57227V11.4287H10.8574V9.10547C10.8574 7.2153 12.395 5.67773 14.2852 5.67773H17.751V9.10547H14.2852V11.4287H17.751L17.1797 14.8564H14.2852V21.75H18.8936C20.4685 21.75 21.75 20.4685 21.75 18.8936V5.10645C21.75 3.53152 20.4685 2.25 18.8936 2.25Z"
                  fill="#08110B"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1057_571">
                <rect width="24" height="24" fill="white" />
              </clipPath>
              <clipPath id="clip1_1057_571">
                <rect
                  width="19.5"
                  height="19.5"
                  fill="white"
                  transform="translate(2.25 2.25)"
                />
              </clipPath>
            </defs>
          </svg>
        </NuxtLink>
      </li>
    </ul>
    <div class="right-section">
      <span>© 2025 SFX Greenherald. All Rights Reserved.</span>

      <NuxtLink
        to="https://co.design/"
        aria-label="COdesign link"
        target="_blank"
      >
        <span>Made by</span>
        &nbsp;
        <svg
          width="32"
          height="16"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7861 0.00059804C21.6064 0.0252778 19.6752 0.883704 18.2751 2.27865L18.274 2.27757L15.5153 5.06961L10.6941 9.94869C10.6941 9.94869 10.4841 10.1611 10.3785 10.2674C10.3774 10.2685 10.3764 10.2695 10.3753 10.2706C9.79624 10.8565 8.98259 11.2159 8.05484 11.2267C6.2004 11.2471 4.77572 9.85963 4.75652 8.01508C4.73733 6.18556 6.13109 4.74877 7.945 4.72838C9.70987 4.70907 11.0994 5.94735 11.2721 7.63201L14.9458 3.89249C13.5424 1.50499 10.9223 -0.0348121 7.8309 0.00059804C3.37662 0.0499576 -0.045399 3.57702 0.000455444 8.06981C0.0473763 12.6012 3.54511 16.05 8.09856 15.9985C10.3401 15.9738 12.3097 15.0735 13.7269 13.6743C13.7419 13.6592 13.7579 13.6453 13.7728 13.6303L13.8218 13.5798L16.4718 10.8983C17.6096 13.9436 20.427 16.0306 23.9685 15.9899C28.5262 15.9384 32.0484 12.422 31.9994 7.90671C31.9503 3.37958 28.3876 -0.0509075 23.7861 0.00059804ZM24.0101 11.2267C22.1556 11.2471 20.7309 9.8607 20.7117 8.01508C20.6925 6.18556 22.0863 4.74877 23.9002 4.72838C25.7739 4.70799 27.2252 6.10508 27.2455 7.94855C27.2657 9.78773 25.8656 11.2052 24.0101 11.2267Z"
            fill="black"
          />
        </svg>
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup>
const globalStore = useGlobalStore();

const openContactModal = () => {
  globalStore.openModal("contactForm");
  //set background color for modal
  document.documentElement.style.setProperty("--modal-bg-color", "#FFF");
};
</script>

<style scoped lang="scss">
footer {
  padding-top: 2.5rem;
  @include clamp-property("padding-bottom", 1.56, 2.56);
  @include clamp-property("padding-inline", 1.25, 8.73);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-section {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 2.62rem;

    li {
      @include flex-center;
      flex-direction: row;
      gap: 0.75rem;
      font-weight: 550;
      line-height: 110%;
    }

    li a {
      @include flex-center;
      flex-direction: row;
      gap: 8px;
      text-decoration: none;
      color: $green-900;
      line-height: 110%;

      svg {
        @include clamp-property("width", 1.5, 1.5);
        @include clamp-property("height", 1.5, 1.5);
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 42px;

    span {
      color: $gray-900;
      line-height: 125%;
    }

    a {
      color: $gray-900;
      text-decoration: none;
      @include flex-center;
      gap: 0.25rem;
      line-height: 140%;

      svg {
        width: 2rem;
        height: 1rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;

    .left-section {
      gap: 1.5rem;
      justify-content: center;
      width: 100%;

      li a {
        flex-direction: row;
        text-wrap: nowrap;
      }
    }

    .right-section {
      flex-direction: column;
      justify-content: center;
      gap: 0.62rem;
      font-size: 0.8125rem;

      a {
        flex-direction: row;

        svg {
          opacity: 0.9;
        }
      }
    }
  }
}
</style>
