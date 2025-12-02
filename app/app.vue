<template>
  <Teleport to="body">
    <Transition name="modal" mode="out-in">
      <AppModal v-if="globalStore.isModalOpen" />
    </Transition>
  </Teleport>

  <NuxtLayout>
    <NuxtPage />
    <div v-show="loading" class="loader-wrapper">
      <CommonLoader />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useGlobalStore } from "./stores/global";

const globalStore = useGlobalStore();
import { ref } from "vue";

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 1000);
</script>

<style>
/* Modal transition styles */
.modal-enter-active {
  transition: none; /* Let CSS animations handle the entrance */
}

.modal-leave-active {
  transition: all 0.25s ease-in;
}

.modal-leave-to {
  opacity: 0;
  transform: scale(1);
}
</style>
