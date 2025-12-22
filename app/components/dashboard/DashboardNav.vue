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
          <div class="profile-info">
            <div class="avatar">
              <img
                class="profile-picture"
                src="../../assets/images/profile_avatar.jpg"
                alt=""
              />
            </div>

            <div class="infos">
              <div class="profile-name">John Doe</div>
              <div class="profile-email">john.doe@example.com</div>
            </div>
          </div>
          <ul>
            <li role="button" @click="goToChangePassword">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.5 14.5C18.8137 14.5 21.5 11.8137 21.5 8.5C21.5 5.18629 18.8137 2.5 15.5 2.5C12.1863 2.5 9.5 5.18629 9.5 8.5C9.5 9.38041 9.68962 10.2165 10.0303 10.9697L2.5 18.5V21.5H5.5V19.5H7.5V17.5H9.5L13.0303 13.9697C13.7835 14.3104 14.6196 14.5 15.5 14.5Z"
                  stroke="#08110B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 6.5L16.5 7.5"
                  stroke="#08110B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Change Password</span>
            </li>

            <li @click="handleLogout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.86907 4C4.97674 5.49689 3 8.51664 3 11.9981C3 16.9686 7.02944 20.9981 12 20.9981C16.9706 20.9981 21 16.9686 21 11.9981C21 8.51664 19.0233 5.49689 16.1309 4"
                  stroke="#08110B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 3V10"
                  stroke="#08110B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span> Logout </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const router = useRouter();

const authStore = useAuthStore();

const goToChangePassword = () => {
  console.log("Navigating to Change Password page");
  router.push("/dashboard/change-password");
};

const handleLogout = () => {
  console.log("Logout: Before logout - Auth state:", {
    isAuthenticated: authStore.isAuthenticated,
    hasToken: !!authStore.token,
    user: authStore.user,
  });

  // Clear any authentication tokens or user data here
  // For example, if using localStorage:
  authStore.logout();

  console.log("Logout: After logout - Auth state:", {
    isAuthenticated: authStore.isAuthenticated,
    hasToken: !!authStore.token,
    user: authStore.user,
  });

  console.log("Logout: localStorage check:", {
    localStorage:
      typeof window !== "undefined" ? localStorage.getItem("auth") : "SSR",
  });

  // Use full page redirect to avoid layout switching issues
  if (typeof window !== "undefined") {
    window.location.href = "/auth/signin";
  }
};

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
  background-color: $white;
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

        padding-left: 2.75rem;

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
    @include clamp-property("gap", 0.5, 1);

    display: flex;
    justify-content: center;
    align-items: center;

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
        top: 100%;
        right: 0;
        background-color: $white;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        overflow: hidden;

        opacity: 0;
        visibility: hidden;
        transform: translateY(-15px) scale(0.9);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

        z-index: 10;
        margin-top: 0.5rem;

        &::before {
          content: "";
          position: absolute;
          top: -0.5rem;
          left: 0;
          right: 0;
          height: 0.5rem;
          background: transparent;
        }

        .profile-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;

          .avatar {
            width: 3.375rem;
            height: 3.375rem;
            aspect-ratio: 1/1;
            background-color: #d9d9d9;
            border-radius: 50%;
            overflow: hidden;

            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }

          .infos {
            .profile-name {
              color: $gray-900;
              font-family: $font-manrope;
              font-size: 1.125rem;
              font-style: normal;
              font-weight: 550;
              line-height: 110%; /* 1.2375rem */
            }

            .profile-email {
              color: $gray-900;
              font-family: $font-manrope;
              font-size: 0.875rem;
              font-style: normal;
              font-weight: 400;
              line-height: 110%; /* 0.9625rem */
            }
          }
        }
        ul {
          @include clamp-property("padding-block", 0.75, 1);
          list-style: none;
          margin: 0;
          padding: 0;
          min-width: min(24.4375rem, 90svw);

          li {
            @include clamp-property("font-size", 1, 1.125);
            @include clamp-property("padding-block", 0.5, 0.75);
            @include clamp-property("padding-inline", 1, 1.25);

            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
            transition: background-color 0.2s ease-in-out;

            svg {
              width: 1.5rem;
              height: 1.5rem;
              aspect-ratio: 1/1;
            }

            span {
              color: $green-900;

              /* Btn 16 */
              font-family: $font-manrope;
              font-size: 1rem;
              font-style: normal;
              font-weight: 550;
              line-height: 110%; /* 1.1rem */
            }

            &:hover {
              background-color: $gray-100;
            }
          }
        }
      }
      &:hover .profile-dropdown-panel,
      .profile-dropdown-panel:hover {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }
    }
  }
}
</style>
