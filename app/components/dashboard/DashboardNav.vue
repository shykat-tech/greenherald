<template>
  <nav>
    <div class="left">
      <div class="site-logo" @click="goToHome">
        <img src="../../assets/images/logo.svg" alt="" />
      </div>

      <div class="search-field">
        <div class="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 17L21 21"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input type="text" placeholder="Search..." />
      </div>
    </div>

    <div class="right">
      <div class="mbl-search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 17L21 21"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
            stroke="#141B34"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="notification-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.5 18C15.5 19.933 13.933 21.5 12 21.5C10.067 21.5 8.5 19.933 8.5 18"
            stroke="#08110B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.2311 18H4.76887C3.79195 18 3 17.208 3 16.2311C3 15.762 3.18636 15.3121 3.51809 14.9803L4.12132 14.3771C4.68393 13.8145 5 13.0514 5 12.2558V9.5C5 5.63401 8.13401 2.5 12 2.5C15.866 2.5 19 5.634 19 9.5V12.2558C19 13.0514 19.3161 13.8145 19.8787 14.3771L20.4819 14.9803C20.8136 15.3121 21 15.762 21 16.2311C21 17.208 20.208 18 19.2311 18Z"
            stroke="#08110B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="profile-dropdown">
        <div class="profile-avatar">
          <img
            class="profile-picture"
            src="../../assets/images/profile_avatar.jpg"
            alt=""
          />
        </div>

        <div class="profile-dropdown-panel">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const router = useRouter();

const goToHome = () => {
  router.push("/");
};

onMounted(() => {
  // Any additional setup can be done here

  const navHeight = document.querySelector("nav").offsetHeight;
  //inject the nav height to css variable
  document.documentElement.style.setProperty(
    "--dashboard-nav-height",
    `${navHeight}px`
  );
});
</script>

<style lang="scss" scoped>
nav {
  @include clamp-property("padding-block", 0.75, 1.25);
  @include clamp-property("padding-inline", 1.25, 15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $neutral-white;
  position: fixed;
  width: 100%;
  z-index: 20;

  .left {
    display: flex;
    align-items: center;
    gap: 2rem;

    .site-logo {
      @include clamp-property("width", 2.75, 4.47519);
      aspect-ratio: 1/1;
      cursor: pointer;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    .search-field {
      position: relative;
      display: flex;
      align-items: center;

      @include mediaSm {
        display: none;
      }

      .search-icon {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-46%);
        pointer-events: none;

        svg {
          width: 1.5rem;
          height: 1.5rem;
          aspect-ratio: 1/1;
        }
      }
      input {
        @include clamp-property("padding", 0.5, 1);
        @include clamp-property("font-size", 0.875, 1rem);
        min-width: 30rem;

        // border: 1px solid $neutral-gray-300;

        border: none;
        outline: none;

        display: flex;
        width: 100%;
        height: 3.375rem;
        padding: 0.75rem;
        align-items: center;
        gap: 0.5rem;

        border-radius: 2.5rem;
        border: 1px solid $green-50;
        background: #f6f6f6;

        padding-left: 2.75rem; // Adjusted padding to accommodate the search icon

        &::placeholder {
          color: $gray-900;
          font-family: $font-manrope;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 110%; /* 1.1rem */
        }
      }
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .mbl-search-icon {
      cursor: pointer;

      display: none;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      border-radius: 2.5rem;
      border: 1px solid $green-50;
      background: $gray-100;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        aspect-ratio: 1/1;

        @include mediaSm {
          width: 1rem;
          height: 1rem;
        }
      }

      @include mediaSm {
        display: flex;
      }
    }
    .notification-icon {
      cursor: pointer;

      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      border-radius: 2.5rem;
      border: 1px solid $green-50;
      background: $gray-100;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        aspect-ratio: 1/1;

        @include mediaSm {
          width: 1.125rem;
          height: 1.125rem;
        }
      }
    }

    .profile-dropdown {
      position: relative;

      .profile-avatar {
        width: 2.5rem;
        height: 2.5rem;
        aspect-ratio: 1/1;
        background-color: #d9d9d9;
        border-radius: 50%;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;

          cursor: pointer;
        }
      }
      .profile-dropdown-panel {
        position: absolute;
        top: 110%;
        right: 0;
        background-color: $neutral-white;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        overflow: hidden;
        transition: all 0.3s ease;
        display: none;
        z-index: 10;
        ul {
          list-style: none;
          margin: 0;
          padding: 0;

          li {
            padding: 0.75rem 1.5rem;
            cursor: pointer;

            &:hover {
              background-color: $gray-100;
            }
          }
        }
      }
      &:hover .profile-dropdown-panel {
        display: block;
      }
    }
  }
}
</style>
