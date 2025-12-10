<template>
  <div class="about-section gap-between-sections dashboard-comp-wrapper">
    <ComponentTitle compTitle="About Me" @edit-clicked="handleEditClick()" />
    <p>
      I am a highly motivated individual with a passion for learning and growth.
      With a background in the Class of 2012 and a lifetime membership since
      June 24, 2025, I bring a wealth of experience and dedication to any
      endeavor. I am eager to connect with others and contribute to the alumni
      community.
    </p>
  </div>
</template>

<script setup>
const globalStore = useGlobalStore();

const handleEditClick = () => {
  // Logic to handle edit click can be added here
  globalStore.openModal("editAboutMe");
};
</script>

<style lang="scss" scoped>
.about-section {
  p {
    @include clamp-property("font-size", 0.9375, 1);

    color: $green-900;
    font-family: $font-manrope;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
}
</style>
