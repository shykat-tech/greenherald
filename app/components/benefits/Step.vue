<template>
  <div class="step">
    <img :src="props.step?.image" :alt="props.step?.title" id="stepImg" />

    <div class="step-desc" id="stepDesc">
      <div class="icon" v-html="props.step?.icon"></div>

      <div class="desc">
        <h3>{{ props.step?.title }}</h3>
        <span> {{ props.step?.content }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Step object is received as a prop
const props = defineProps({
  step: {
    type: Object,
    required: false,
  },
});

</script>

<style scoped lang="scss">
.step {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  @include clamp-property("gap", 1, 2);

  @media screen and (max-width: 767px) {
    flex-direction: column;
    overflow: auto;
  }

  img {
    @include clamp-property("border-radius", 1.5, 2);
    @include clamp-property("width", 12, 26);
    @include clamp-property("height", 14, 30);
    aspect-ratio: 4/5;
    object-fit: cover;

    @media screen and (max-width: 767px) {
      width: 100%;
      height: 100%;
    }
  }

  .step-desc {
    width: 24rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @include clamp-property("gap", 1, 2);

    .icon {
      margin-block-start: -12px;
    }

    @media screen and (max-width: 480px) {
      width: 100%;
    }

    @media screen and (min-width: 481px) and (max-width: 1024px) {
      width: 14rem;
    }

    @media screen and (min-width: 1025px) and (max-width: 1440px) {
      width: 18rem;
    }

    @media screen and (min-width: 1441px) and (max-width: 1920px) {
      width: 21rem;
    }


    :deep(svg) {
      @include clamp-property("width", 2.5, 4);
    }

    .desc {
      h3 {
        @include clamp-property("font-size", 1.5, 2.5);
        @include clamp-property("line-height", 1.8, 3);
        @include clamp-property("letter-spacing", -0.015, -0.025);
        @include clamp-property("margin-bottom", 0.5, 0.5);
        text-wrap: wrap;
        font-weight: 500;
      }

      span {
        @include clamp-property("font-size", 0.9375, 1);
        @include clamp-property("line-height", 1.4, 1.6);
        @include clamp-property("letter-spacing", -0.015, -0.01);
        font-weight: 400;
        color: $gray-900;
        display: inline-block;
        width: fit-content;
        text-wrap: wrap;
      }
    }

    @media screen and (max-width: 767px) {
      flex-direction: row;
    }
  }
}
</style>
