<template>
  <Teleport to="body">
    <Transition name="modal" mode="out-in">
      <AppModal v-if="globalStore.isModalOpen" />
    </Transition>
  </Teleport>

  <NuxtLayout>
    <div id="bg-overlay" />
    <NuxtPage />
    <div v-show="loading" class="loader-wrapper">
      <CommonLoader />
    </div>
  </NuxtLayout>

  <Transition name="arrow">
    <div
      class="arrow"
      v-show="showArrow"
      @click="handleArrowClick"
      :class="{ toggle: scrollAtBottom }"
    >
      <div class="arr">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          class="top-arrow"
        >
          <path
            d="M12 3V21M12 3L5 10M12 3L19 10"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useGlobalStore } from "./stores/global";

const loading = ref(true);
const showArrow = ref(false);
const scrollAtBottom = ref(false);

const globalStore = useGlobalStore();

// Handle arrow click
const handleArrowClick = () => {
  if (scrollAtBottom.value) {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    // Scroll to bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
};

// Scroll listener
const handleScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;

  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

  showArrow.value = scrollPercent >= 5;
  scrollAtBottom.value = scrollPercent >= 50;
};

onMounted(() => {
  // Fake loader
  setTimeout(() => {
    loading.value = false;
  }, 1000);

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
#bg-overlay {
  width: 100%;
  height: 200vh;
  background: linear-gradient(to bottom, $yellow-50, $yellow-50);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
}

.arrow {
  position: fixed;
  bottom: 1.5rem;
  right: 1rem;
  z-index: 99;
  font-size: 28px;
  font-weight: 100;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  transition: all 1s;

  mix-blend-mode: difference;
  color: white;

  .arr {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);

    .top-arrow {
      color: inherit;
    }

    @media screen and (max-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
}

.arrow.toggle {
  transform: rotate(180deg);
}

.arrow-enter-active,
.arrow-leave-active {
  transition: all 1s;
}

.arrow-enter-from,
.arrow-leave-to {
  opacity: 0;
}
</style>
