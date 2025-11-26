<template>
  <div :key="pageData.id + pageData.meta.slug" v-if="pageData">
    <NuxtLazyHydrate
      when-idle
      v-for="(block, idx) in pageData.body"
      :key="'comp-' + block.id"
    >
      <component
        :id="'comp-' + block.id"
        :is="resolveComponent('Lazy' + componentLookup[block.type])"
        :compData="block.value"
        :compId="block.id"
        :componentIndex="idx"
        :blockType="block.type"
      />
    </NuxtLazyHydrate>
  </div>
</template>

<script setup>
/**Right now we will be working with mock data */
// const { pageData, body } = defineProps("pageData", "body");

const pageData = {
  id: "1",
  title: "Homepage",
  body: [
    {
      id: "101",
      type: "header",
      value: {
        text: "This is a header section",
      },
    },
    {
      id: "102",
      type: "upcoming_events",
      value: {
        text: "This is a events section",
      },
    },
    {
      id: "103",
      type: "about",
      value: {
        text: "This is a about section",
      },
    },
  ],
  meta: {
    slug: "homepage",
  },
};

//** Based on component names we will make sure to load the correct components, be aware of the casing!!! */
const componentLookup = {
  header: "HeaderContainer",
  // upcoming_events: "UpcomingEvents",
  // about: "AboutSection",
};
</script>

<style lang="scss" scoped></style>
