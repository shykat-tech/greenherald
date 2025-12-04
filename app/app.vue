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
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useGlobalStore } from "./stores/global";


const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000)
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
</style>
