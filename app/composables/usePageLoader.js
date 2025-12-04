import { useRouter } from "#app";
import { ref } from "vue";

export const usePageLoader = () => {
  const loading = ref(false);
  const router = useRouter();

  router.beforeEach(() => {
    loading.value = true;
  });

  router.afterEach(() => {
    loading.value = false;
  });

  return { loading };
};
