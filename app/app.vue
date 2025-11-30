<template>
  <NuxtLayout>
    <NuxtPage />
    <div v-show="loading" class="loader-wrapper">
      <CommonLoader />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 1000)

</script>
