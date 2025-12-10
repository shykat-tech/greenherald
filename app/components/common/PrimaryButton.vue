<template>
  <button ref="buttonEl" :class="{
    sm: size === 'sm',
    secondary: variant === 'secondary',
  }" @click="clickHandler">
    <span>
      <slot />
    </span>
    <!-- <i-small-arrow filled /> -->
    <div class="arrow-container">
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
const router = useRouter();
const { size, variant, data } = defineProps([
  "size",
  "variant",
  "data",
]);

const buttonEl = ref(null)

// expose element
defineExpose({
  buttonEl
})

const clickHandler = () => {
  if (data?.link.type === "page") {
    router.push(data?.link.link);
  }

  if (data?.link.type === "link") {
    window.open(data?.link.link, "_blank");
  }
};
</script>

<style lang="scss" scoped>
button {
  @include clamp-property("--height", 2.5, 3.2, 320, 1920);
  @include clamp-property("font-size", 1, 1.125);
  @include clamp-property("padding-block", 0.38, 0.5);
  @include clamp-property("padding-right", 0.38, 0.5);
  @include clamp-property("padding-left", 1.25, 1.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.62rem;
  position: relative;
  background-color: $yellow-700;
  color: white;
  text-align: left;
  font-weight: 500;
  z-index: 1;
  height: var(--height);
  border: none;
  border-radius: calc(var(--height) / 2);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    z-index: -1;
    transition: 0.3s;
    clip-path: inset(calc(var(--height) * 0.15) calc(var(--height) * 0.15) calc(var(--height) * 0.15) calc(100% - (var(--height) - (var(--height) * 0.12))) round calc(var(--height)));
  }

  span {
    white-space: nowrap;
    line-height: 110%
  }

  .arrow-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(var(--height) * 0.75);
    width: calc(var(--height) * 0.75);
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }

  svg {
    stroke: $yellow-700;
    height: calc(var(--height) * 0.4);
    width: calc(var(--height) * 0.4);
    position: absolute;
    transition: all 0.3s ease-in;
  }

  svg:nth-child(1) {
    transform: translateX(-150%);
  }

  &.secondary {
    background-color: transparent;
    color: $green-900;

    svg path {
      stroke: white;
    }

    &::before {
      background: $yellow-700;
    }
  }

  &.sm {
    @include clamp-property("--height", 1.75, 3.5);
    @include clamp-property("font-size", 0.75, 1);
    @include clamp-property("gap", 1, 1);
    @include clamp-property("padding-block", 0.2, 1);
  }

  &:hover {
    color: $yellow-700;
    cursor: pointer;

    svg {
      transform: translateX(150%)
    }

    svg:nth-child(1) {
      transform: translateX(0);
    }

    svg path {
      stroke: $yellow-700;
    }

    &::before {
      clip-path: inset(calc(var(--height) * 0.035) round calc(var(--height) / 2));
    }

    &.secondary {
      color: white;
      border: 1px solid $yellow-700;


      svg path {
        stroke: white;
      }
    }
  }

  @include mediaLg {
    @include clamp-property("font-size", 1.2, 2.6, 1920, 5120);
    @include clamp-property("--height", 3.5, 8, 1920, 5120);
  }
}
</style>
