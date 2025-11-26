<template>
 <component
  :is="resolveComponent(pageType)"
  :pageData="pageData"
  :body=" pageData.body"
/> 
</template>

<script setup>

const route = useRoute();

const apiFetchConfig = useBackendAPI();

// get page url
let pageUrl = route.fullPath.split("?")[0];

//pageUrl contains trailing hash, remove it
if (pageUrl.includes("#")) {
  pageUrl = pageUrl.split("#")[0];
}

const { data, error } = await useAsyncData(pageUrl, () =>
  $fetch(
    `/api/v2/pages/find/?format=json&redirect=false&html_path=${pageUrl}`,
    apiFetchConfig
  )
);

/**Commenting down this part as the backend is not ready yet.. when the backend will be ready we will uncomment this and work with real api response right now will work with mock data */

const pageData = {
  id: "1",
  title: "Homepage",
  body: "<p>This is a home page.</p>",
  meta: {
    type: "page.HomePage"
  }
};

// const pageData = data.value?.data || null;
const pageType = pageData && pageData?.meta.type.split(".")[1];

</script>

<style lang="scss" scoped></style>
