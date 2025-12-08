<template>
  <div :key="pageData.id + pageData.meta.slug" v-if="pageData">
    <div v-for="(block, idx) in pageData.body" :key="block.id">

      <component :is="resolveComponent(componentLookup[block.type])" :compData="block.value" :compId="block.id"
        :componentIndex="idx" :blockType="block.type" />

    </div>
  </div>
</template>

<script setup>
const pageData = {
  id: "1",
  title: "Homepage",
  body: [
    { id: "101", type: "header", value: { text: "This is a header section" } },
    {
      id: "102", type: "upcoming_events", value: { text: "This is a events section" }
    },
    {
      id: "103", type: "about",
      value: { text: "This is a about section" }
    },
    {
      id: "104", type: "gallery",
      value: { text: "This is a gallery section" }
    },
    {
      id: "105", type: "story",
      value: { text: "This is a story section" }
    },
    {
      id: "106", type: "benefits",
      value: { text: "This is a benefits section" }
    },
    {
      id: "107", type: "membership",
      value: { text: "This is a membership section" }
    },
    {
      id: "108", type: "alumni",
      value: { text: "This is a alumni section" }
    },
    {
      id: "109", type: "footer",
      value: { text: "This is a footer section" }
    },
  ],
  meta: { slug: "homepage" },
};

const componentLookup = {
  header: "HeaderContainer",
  upcoming_events: "UpcomingEvents",
  about: "AboutSection",
  gallery: "Gallery",
  story: "Stories",
  benefits: "Benefits",
  membership: "Membership",
  alumni: "Alumni",
  footer: 'Footer'
}; </script>
