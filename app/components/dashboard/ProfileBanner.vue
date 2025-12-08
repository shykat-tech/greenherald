<template>
  <div class="profile-banner-wrapper">
    <div class="profile-bottom-layer">
      <div class="profile-cover-bg">
        <img
          src="../../assets/images/dashboard/profile_banner_annual.png"
          alt=""
          v-if="globalStore.getSiteTheme === 'annual'"
        />
        <img
          src="../../assets/images/dashboard/profile_banner_lifetime.png"
          alt=""
          v-else
        />

        <div class="profile-avatar">
          <img src="../../assets/images/profile_avatar.jpg" alt="" />
        </div>
      </div>

      <div class="profile-info">
        <div>
          <h2 class="profile-name">Mohin Rahman</h2>
          <p class="profile-class">Class of 2012</p>
        </div>

        <button class="edit-profile-btn" @click="handleEditProfile">
          <img src="../../assets/icons/pencil-edit.svg" alt="" />
          <span> Edit Profile </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const coverHeight = ref(null);
const globalStore = useGlobalStore();

const handleEditProfile = () => {
  globalStore.openModal("personalDetail");
};
</script>

<style lang="scss" scoped>
.profile-banner-wrapper {
  width: 100%;
  height: auto;
  background-color: $neutral-white;
  border-radius: 1.75rem;
  overflow: hidden;

  @include mediaSm {
    border-radius: 0;
  }

  .profile-bottom-layer {
    position: relative;

    .profile-cover-bg {
      width: 100%;
      aspect-ratio: 68.3125 / 18.931;
      position: relative;

      img {
        @include clamp-property("border-bottom-left-radius", 0, 1.75);
        @include clamp-property("border-bottom-right-radius", 0, 1.75);

        width: 100%;
        height: 100%;
        object-fit: cover;

        overflow: hidden;

        @include mediaSm {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;

          border: 0;
        }
      }

      .profile-avatar {
        @include clamp-property("width", 8.75, 18.5625);
        @include clamp-property("height", 8.75, 18.5625);
        @include clamp-property("left", 1.25, 2);

        border-radius: 50%;
        overflow: hidden;
        border: 1px solid $neutral-white;

        position: absolute;
        bottom: calc(
          -1 * (#{clamp(8.75rem, 3.125vw + 5.625rem, 18.5625rem)} / 2)
        );

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .profile-info {
    @include clamp-property("padding-inline", 1.25, 2);
    @include clamp-property("padding-bottom", 2, 2);

    display: flex;
    justify-content: space-between;
    align-items: center;

    @include mediaSm {
      align-items: flex-start;
    }

    .profile-name {
      @include clamp-property("margin-top", 4.75, 5.25);
      @include clamp-property("font-size", 1.5, 2.375);

      color: $green-900;
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 600;
      line-height: 110%;
    }

    .profile-class {
      @include clamp-property("font-size", 1, 1.25);
      @include clamp-property("margin-top", 0.25, 0.75);

      margin-top: 0.25rem;
      color: $green-800;
      font-family: $font-manrope;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      /* 1.875rem */
    }

    button {
      @include clamp-property("margin-top", 4.75, -3.5);
      @include clamp-property("padding-inline", 1.125, 2);
      @include clamp-property("padding-block", 0.5, 0.75);
      @include clamp-property("font-size", 0.75, 1);

      background: none;
      border: none;
      outline: none;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      border-radius: 3rem;
      border: 1px solid $golden-700;

      font-family: $font-manrope;
      color: $golden-700;
      font-style: normal;
      font-weight: 550;
      line-height: 110%;

      @include mediaSm {
        margin-top: 0.75rem;
      }
    }

    .edit-profile-btn {
      img {
        @include clamp-property("width", 1.125, 1.5);
        @include clamp-property("height", 1.125, 1.5);
      }
    }
  }
}
</style>
