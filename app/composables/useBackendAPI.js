export const useBackendAPI = () => {
  const config = useRuntimeConfig();
  return {
    baseURL: config.public.apiBase,
  };
};
