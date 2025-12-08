<template>
  <button class="primary-btn" ref="buttonEl">
    <span>
      <slot />
    </span>

    <div class="btn-icon-container">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4102 10H4.16016" stroke="#142819" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M10.8398 5C10.8398 5 15.8398 8.68242 15.8398 10C15.8398 11.3177 10.8398 15 10.8398 15" stroke="#142819"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4102 10H4.16016" stroke="#142819" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M10.8398 5C10.8398 5 15.8398 8.68242 15.8398 10C15.8398 11.3177 10.8398 15 10.8398 15" stroke="#142819"
          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const buttonEl = ref(null)

// expose element
defineExpose({
  buttonEl
})
</script>

<style scoped lang="scss">
.primary-btn {
  @include button-default;
  position: relative;
  background: $yellow-700;
  color: $white;
  z-index: 2;
  border: none;
  justify-content: space-between;
  transition: all 0.4s;

  .btn-icon-container {
    @include flex-center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 5rem;
    background: $gray-100;
    transition: all 0.3s;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;

    svg {
      position: absolute;
      transition: all 0.3s;
      flex-shrink: 0;
      right: .5rem;
    }

    svg:nth-child(1) {
      right: 2.5rem;
    }

    svg path {
      transition: stroke 0.3s ease-in;
    }

  }

  &::after {
    content: '';
    position: absolute;
    width: 2.25rem;
    height: 2.25rem;
    background: rgb(255, 255, 255);
    border-radius: 5rem;
    top: 50%;
    right: 0.45rem;
    z-index: -1;
    transform: translateY(-50%);
    transition: all 0.3s ease-in;
  }

  &:hover {
    color: $yellow-700;

    svg path {
      stroke: $yellow-700;
    }

    svg {
      right: -100%;
    }

    svg:nth-child(1) {
      right: .5rem;
    }
  }

  &:hover::after {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    right: 2px;
  }



  // .overlay {
  //   position: absolute;
  //   // @include clamp-property("right", 0.375, 0.5);
  //   top: 50%;
  //   right: 0;
  //   transform: translate(-50%, -50%);
  //   width: 2.25rem;
  //   height: 2.25rem;
  //   border-radius: 5rem;
  //   background: $gray-100;
  //   z-index: -1;
  //   transition: all 0.3s;
  // }

  // &:hover {
  //   color: $yellow-700;

  //   .btn-icon-container {
  //     svg path {
  //       stroke: $yellow-700;
  //     }
  //   }

  //   .overlay {
  //     width: 100%;
  //     height: 100%;
  //     right: 0;
  //     top: 0%;
  //   }
  // }
}
</style>
