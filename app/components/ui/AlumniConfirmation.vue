<template>
  <div class="alumni-modal-wrapper">
    <div class="top-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
      >
        <path
          d="M54.375 31.875C54.375 21.5197 45.9802 13.125 35.625 13.125C25.2697 13.125 16.875 21.5197 16.875 31.875C16.875 42.2302 25.2697 50.625 35.625 50.625C45.9802 50.625 54.375 42.2302 54.375 31.875Z"
          stroke="#B29764"
          stroke-width="5.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M61.875 76.875C61.875 62.3775 50.1225 50.625 35.625 50.625C21.1275 50.625 9.375 62.3775 9.375 76.875"
          stroke="#B29764"
          stroke-width="5.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M65.625 36.9231C65.625 33.0996 68.9828 30 73.125 30C77.2672 30 80.625 33.0996 80.625 36.9231C80.625 38.3014 80.1889 39.5854 79.4366 40.6642C77.1952 43.8795 73.125 45.0709 73.125 48.8944V50.625M73.0883 60H73.122"
          stroke="#B29764"
          stroke-width="5.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <h2>Are you an alumni member?</h2>

    <p>
      Your membership status helps us customize your registration experience.
    </p>

    <div class="btn-group">
      <button @click="confirmAlumni">Yes, Im</button>
      <button @click="denyAlumni">No, I'm not</button>
    </div>
  </div>
</template>

<script setup>
const globalStore = useGlobalStore();

const router = useRouter();

const confirmAlumni = () => {
  // Logic for confirming alumni status
  //if yes then will take to

  globalStore.closeModal();
  globalStore.setAlumniStatus(true);

  router.push("/event-form");
};

const denyAlumni = () => {
  // Logic for denying alumni status

  globalStore.closeModal();
  globalStore.setAlumniStatus(false);
  router.push("/event-form");
};
</script>

<style lang="scss" scoped>
.alumni-modal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    @include clamp-property("width", 3.75, 5.625);
    @include clamp-property("height", 3.75, 5.625);

    aspect-ratio: 1/1;
  }

  h2 {
    @include clamp-property("font-size", 1.75, 3);
    @include clamp-property("margin-top", 0.75, 1);

    font-family: $font-gloock;
    color: $green-900;

    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;

    max-width: 30rem;
  }

  p {
    @include clamp-property("margin-top", 0.25, 0.5);

    color: $neutral-gray-900;
    text-align: center;

    /* Body */
    font-family: $font-manrope;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
  }

  .btn-group {
    @include clamp-property("gap", 0.75, 1);
    @include clamp-property("margin-top", 2, 3);

    display: flex;
    justify-content: center;
    align-items: center;

    @include mediaSm {
      flex-direction: column;
      width: 100%;

      button {
        width: 100%;
      }
    }

    button {
      @include clamp-property("padding-inline", 2, 4);
      @include clamp-property("padding-block", 1.125, 1.5);
      @include clamp-property("font-size", 1, 1.125);

      background: $golden-700;
      color: $white;
      border: none;
      border-radius: 0.625rem;
      cursor: pointer;
      transition: all 0.3s ease;

      border-radius: 5rem;

      font-style: normal;
      font-weight: 550;
      line-height: 110%;

      &:hover {
        background: $golden-600;
      }

      &:last-child {
        color: $golden-700;
        background: transparent;
        border: 1px solid $golden-700;

        /* Btn 18 */
        font-family: $font-manrope;
        font-style: normal;
        font-weight: 550;
        line-height: 110%; /* 1.2375rem */

        &:hover {
          background: $golden-600;
          color: $white;
          border-color: $golden-600;
        }
      }
    }
  }
}
</style>
