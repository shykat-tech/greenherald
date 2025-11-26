<template>
  <button class="primary-btn">
    <span>
      <slot />
    </span>
    <div class="btn-icon-container">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3281 8H3.32812"
          stroke="#142819"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.67188 4C8.67188 4 12.6719 6.94593 12.6719 8C12.6719 9.05413 8.67188 12 8.67188 12"
          stroke="#142819"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div class="overlay" />
    </div>
  </button>
</template>

<style scoped lang="scss">
.primary-btn {
  @include button-default;
  position: relative;
  background: #7e6b47;
  color: #ffffff;
  z-index: 2;

  .btn-icon-container {
    @include flex-center;
    flex-shrink: none;
    padding: 10px;
    border-radius: 50%;
    background: #ffffff;
    transition: all 0.3s;
    flex-shrink: 0;

    svg path {
      transition: stroke 0.3s;
    }
  }

  .overlay {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 80px;
    background: white;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    color: #7e6b47;

    .btn-icon-container {
      svg path {
        stroke: #7e6b47;
      }
    }

    .overlay {
      width: 98%;
      height: 95%;
      right: 1%;
    }
  }
}
</style>
