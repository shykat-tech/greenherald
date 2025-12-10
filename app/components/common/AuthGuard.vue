<template>
  <div v-if="isAuthenticated && isInitialized">
    <slot />
  </div>
  <div v-else-if="isLoading" class="auth-loading">
    <Loader />
  </div>
  <!-- Don't render anything if not authenticated and not loading -->
</template>

<script setup>
const authStore = useAuthStore();
const router = useRouter();
const isInitialized = ref(false);
const isLoading = ref(true);
const isAuthenticated = ref(false);

onMounted(async () => {
  console.log("AuthGuard: Starting auth check");
  console.log("AuthGuard: Initial auth state:", {
    isAuthenticated: authStore.isAuthenticated,
    hasToken: !!authStore.token,
    user: authStore.user,
  });

  // Wait for persisted state to be restored
  await nextTick();

  console.log("AuthGuard: After nextTick auth state:", {
    isAuthenticated: authStore.isAuthenticated,
    hasToken: !!authStore.token,
    user: authStore.user,
  });

  // If we have a token but user is not authenticated, validate it
  if (authStore.token && !authStore.isAuthenticated) {
    console.log("AuthGuard: Validating token...");
    await authStore.validateToken();
    console.log("AuthGuard: After token validation:", {
      isAuthenticated: authStore.isAuthenticated,
      hasToken: !!authStore.token,
      user: authStore.user,
    });
  }

  // Check authentication
  if (!authStore.isAuthenticated) {
    console.log("AuthGuard: User not authenticated, redirecting to signin");
    isLoading.value = false;
    await router.push("/auth/signin");
    return;
  }

  console.log("AuthGuard: User authenticated, allowing access");
  isAuthenticated.value = true;
  isInitialized.value = true;
  isLoading.value = false;
});
</script>

<style scoped>
.auth-loading {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
