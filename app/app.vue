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
    <div class="arrow" ref="arrow" v-if="showArrow" @click="handleArrowClick">
      <div class="arr">
        <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
          class="top-arrow" data-v-e05cd847="">
          <path d="M12 3V21M12 3L5 10M12 3L19 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            class="top-arrow-path" data-v-e05cd847=""></path>
        </svg>
      </div>
    </div>

  </Transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useGlobalStore } from "./stores/global";

const loading = ref(true);
const showArrow = ref(false);
const arrow = ref(null);

const handleArrowClick = () => {
  if (!arrow.value) return;

  if (arrow.value.classList.contains("toggle")) {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    // Scroll to bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000)


  // Scroll listener
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

    if (showArrow.value) {
      if (scrollPercent >= 50) {
        arrow.value.classList.add("toggle")
      } else {
        arrow.value.classList.remove("toggle")
      }
    }

    showArrow.value = scrollPercent >= 5;
  };



  window.addEventListener("scroll", handleScroll);
  handleScroll(); // initial check

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
})

const globalStore = useGlobalStore();


</script>

<style lang="scss">
/* Modal transition styles */
.modal-enter-active {
  transition: none;
  /* Let CSS animations handle the entrance */
}

.modal-leave-active {
  transition: all 0.25s ease-in;
}

.modal-leave-to {
  opacity: 0;
  transform: scale(1);
}

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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);

    .top-arrow {
      color: inherit;
    }

    @media screen and (max-width:768px) {
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
