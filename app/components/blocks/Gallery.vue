<template>
  <section id="gallery" ref="galleryRef">
    <div class="title-container" ref="titleContainerRef">
      <div class="connect-text" ref="connectRef">
        <h2 class="title font-heading">
          Ready to <br />
          Reconnect?
        </h2>

        <CommonPrimaryButton ref="joinButtonRef">Join Now</CommonPrimaryButton>
      </div>
    </div>

    <!-- <div class="images-wrapper" ref="imageWrapperRef">
      <div class="images-container" ref="imageContainerRef" v-for="(pos, i) in positions" :key="i" :style="{
        top: windowWidth <= 480 ? pos.mTop + '%' : pos.top + '%',
        left: windowWidth <= 480 ? pos.mLeft + '%' : (pos.left ? pos.left + '%' : 'unset'),
        right: windowWidth <= 480 ? 'unset' : (pos.right ? pos.right + '%' : 'unset'),
        width: pos.width + 'px',
        height: pos.height + 'px',
        zIndex: pos.zIndex,
      }">
        <img :src="`/gallery/gallery${i + 1}.jpg`" class="img" />
      </div>

    </div> -->

    <div class="images-wrapper" ref="imageWrapperRef">
      <div class="images-container" ref="imageContainerRef" v-for="(pos, i) in positions" :key="i">
        <img :src="`/gallery/gallery${i + 1}.jpg`" class="img" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const { $gsap, $ScrollTrigger } = useNuxtApp();

const positions = [
  { top: 0, left: 40, width: 550, height: 854, zIndex: 1, mTop: 5, mLeft: -20 },
  { top: 20, left: 0, width: 436, height: 236, zIndex: 1, mTop: 15, mLeft: -55 },
  { top: 10, right: 20, width: 252, height: 252, zIndex: 1, mTop: 10, mRight: -25 },
  { top: 15, left: 15, width: 484, height: 306, zIndex: 1, mTop: 20, mLeft: -50 },
  { top: 20, right: -2, width: 394, height: 424, zIndex: 1, mTop: 25, mRight: -5 },
  { top: 55, left: 15, width: 440, height: 440, zIndex: 1, mTop: 15, mLeft: -60 },
  { top: 50, right: 5, width: 392, height: 480, zIndex: 1, mTop: 10, mRight: -25 },
];


const galleryRef = ref(null);
// const titleRef = ref(null);
const connectRef = ref(null);
const imageWrapperRef = ref(null);
const imageContainerRef = ref(null);
const titleContainerRef = ref(null);
const joinButtonRef = ref(null);

const windowWidth = ref(0);

onMounted(() => {
  // Set initial width on client
  windowWidth.value = window.innerWidth;

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };

  window.addEventListener("resize", handleResize);

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
});

onMounted(() => {

  $ScrollTrigger.create({
    trigger: galleryRef.value,
    start: "top top",
    end: "bottom center",
    pin: true,
    scrub: true,
    pinSpacing: true,
  });

  const images = $gsap.utils.toArray(imageContainerRef.value);

  const mm = $gsap.matchMedia();

  mm.add(
    {
      sm: "(max-width: 480px)",
      md: "(min-width: 481px) and (max-width: 1024px)",
      lg: "(min-width: 1025px)",
    },
    (context) => {
      const { sm, md } = context.conditions;

      const tl = $gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: imageWrapperRef.value,
          start: "20% bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });

      tl.to([images[0]], {
        top: sm ? "5%" : md ? "10%" : "3%",
      })
        .to(
          [images[1]],
          {
            top: sm ? "10%" : md ? "15%" : "20%",
            left: sm ? "5%" : md ? "10%" : "15%",
          },
          "<"
        )
        .to(
          [images[2]],
          {
            top: sm ? "10%" : md ? "15%" : "20%",
            right: sm ? "5%" : md ? "15%" : "25%",
          },
          "<"
        ).to(
          [images[3]],
          {
            top: sm ? "45%" : md ? "40%" : "45%",
            left: sm ? "-3%" : "10%"
          },
          "<"
        )
        .to(
          [images[4]],
          {
            top: sm ? "30%" : md ? "40%" : "55%",
            right: sm ? "-10%" : md ? "-15%" : "10%",
          },
          "<"
        )
        .to(
          [images[5]],
          {
            top: sm ? "75%" : md ? "55%" : "80%",
            left: sm ? "-20%" : md ? "-10%" : "5%"
          },
          "<"
        )
        .to(
          [images[6]],
          {
            top: sm ? "60%" : md ? "55%" : "80%",
            right: sm ? "-20%" : md ? "0%" : "5%",
            scale: sm ? 0.8 : md ? 0.9 : 0.7,
          },
          "<"
        );

      $gsap.to(connectRef.value, {
        y: "0%",
        duration: "0.3",
        scrollTrigger: {
          trigger: connectRef.value,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

    })
});
</script>

<style scoped lang="scss">
#gallery {
  width: 100vw;
  height: 100vh;
  @include clamp-property("padding-inline", 0, 10.76);
  background: #142819;
  position: relative;

  @include flex-center;

  .texture {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10;
  }

  .title-container {
    overflow: hidden;
    position: absolute;
    top: 80%;
    transform: translateY(-50%);
    z-index: 10;

    @media screen and (max-width: 768px) {
      top: 80%;

    }

    @media screen and (min-width: 1024px) and (max-width: 1920px) {
      top: 90%;

    }

    .title {
      @include clamp-property("font-size", 2.125, 5);
      color: white;
      text-align: center;
      line-height: 110%;
    }

    .connect-text {
      @include flex-center;
      flex-direction: column;
      @include clamp-property("gap", 1, 1.5);
      transform: translateY(100%);
    }
  }

  .images-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;

    .images-container {
      position: absolute;

      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .images-container:nth-child(1) {
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      width: 34rem;

      @media screen and (max-width: 768px) {
        width: 12rem;
      }

      @media screen and (min-width: 480px) and (max-width: 768px) {
        width: 18rem;
      }

      @media screen and (min-width: 769px) and (max-width: 1366px) {
        width: 18rem;
      }

      @media screen and (min-width: 1367px) and (max-width: 1920px) {
        width: 28rem;
      }
    }

    .images-container:nth-child(2) {
      left: 0%;
      top: 15%;
      transform: translateY(-50%);
      @include clamp-property("width", 10, 27);

    }

    .images-container:nth-child(3) {
      right: 0%;
      top: 15%;
      transform: translateY(-50%) scale(1);
      aspect-ratio: 1;
      @include clamp-property("width", 6, 15);

    }

    .images-container:nth-child(4) {
      left: -20%;
      top: 45%;
      transform: translateY(-50%);
      @include clamp-property("width", 12, 30);

    }

    .images-container:nth-child(5) {
      right: -20%;
      top: 45%;
      transform: translateY(-50%);
      aspect-ratio: 1;
      @include clamp-property("width", 9.6, 28);


    }

    .images-container:nth-child(6) {
      top: 75%;
      left: -10%;
      transform: translateY(-50%);
      aspect-ratio: 1;
      @include clamp-property("width", 10, 24);

    }

    .images-container:nth-child(7) {
      top: 75%;
      right: -10%;
      transform: translateY(-50%);
      aspect-ratio: 4/5;
      @include clamp-property("width", 13, 24);

    }
  }
}
</style>
