<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
      <div v-if="loading">Loading...</div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(true);
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:loading:end", () => {
  loading.value = false;
});

</script>
