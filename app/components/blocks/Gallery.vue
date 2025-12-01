<template>
  <section id="gallery" ref="galleryRef">
    <div class="gallery-gradient-back" ref="gradientBack" />

    <div class="title-container" ref="titleContainerRef">
      <div class="connect-text" ref="connectRef">
        <h2 class="title font-heading" ref="connectTitle">
          Ready to <br />
          Reconnect?
        </h2>

        <CommonPrimaryButton ref="joinButtonRef">Join Now</CommonPrimaryButton>
      </div>
    </div>

    <div class="images-wrapper" ref="imageWrapperRef">
      <div class="images-container" ref="imageContainerRef" v-for="(_, i) in 7" :key="i">
        <img :src="`/gallery/gallery${i + 1}.jpg`" class="img" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const { $gsap, $ScrollTrigger } = useNuxtApp();

const galleryRef = ref(null);
const connectRef = ref(null);
const imageWrapperRef = ref(null);
const imageContainerRef = ref(null);
const titleContainerRef = ref(null);
const joinButtonRef = ref(null);
const gradientBack = ref(null);
const connectTitle = ref(null);


const windowWidth = ref(0);

onMounted(() => {
  const upcomingHeight =
    document.getElementById("stories")?.getBoundingClientRect().height || 0;
  const totalHeight = window.innerHeight + upcomingHeight;

  gradientBack.value.style.height = `${totalHeight}px`;


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
      xs: "(max-width: 365px)",
      sm: "(min-width: 366px) and (max-width: 480px)",
      md: "(min-width: 481px) and (max-width: 1024px)",
      lg: "(min-width: 1025px) and (max-width: 1920px)",
      xl: "(min-width: 1921px)",
    },
    (context) => {
      const { xs, sm, md, lg } = context.conditions;

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

      tl
        .to([images[0]], {
          top: xs ? "7%" : sm ? "8%" : md ? "10%" : lg ? "5%" : "5%",
        })
        .to(
          [images[1]],
          {
            top: xs ? "20%" : sm ? "20%" : md ? "25%" : lg ? "25%" : "20%",
            left: xs ? "-12%" : sm ? "-12%" : md ? "8%" : lg ? "10%" : "15%",
            scale: xs ? 0.9 : sm ? 0.9 : 1,
          },
          "<"
        )
        .to(
          [images[2]],
          {
            top: xs ? "22%" : sm ? "22%" : md ? "25%" : lg ? "25%" : "20%",
            right: xs ? "-10%" : sm ? "-10%" : md ? "5%" : lg ? "13%" : "10%",
          },
          "<"
        ).to(
          [images[3]],
          {
            top: xs ? "45%" : sm ? "45%" : md ? "48%" : lg ? "57%" : "48%",
            left: xs ? "-50%" : sm ? "-50%" : md ? "-5%" : lg ? "2%" : "10%",
            scale: lg ? 0.8 : 1
          },
          "<"
        )
        .to(
          [images[4]],
          {
            top: xs ? "35%" : sm ? "40%" : md ? "50%" : lg ? "58%" : "55%",
            right: xs ? "-22%" : sm ? "-25%" : md ? "-8%" : lg ? "5%" : "5%",
            scale: lg ? 0.8 : 1

          },
          "<"
        )
        .to(
          [images[5]],
          {
            top: xs ? "75%" : sm ? "70%" : md ? "75%" : lg ? "85%" : "80%",
            left: xs ? "-30%" : sm ? "-30%" : md ? "-15%" : lg ? "0%" : "5%",
            scale: lg ? 0.6 : 1
          },
          "<"
        )
        .to(
          [images[6]],
          {
            top: xs ? "60%" : sm ? "65%" : md ? "70%" : lg ? "85%" : "80%",
            right: xs ? "-40%" : sm ? "-40%" : md ? "-20%" : lg ? "0%" : "0%",
            scale: xs ? 1 : sm ? 1 : md ? 0.9 : lg ? 0.7 : 1,
          },
          "<"
        );

      $gsap.to(connectRef.value, {
        y: "0%",
        duration: 0.3,
        scrollTrigger: {
          trigger: connectRef.value,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });


      const tl2 = $gsap.timeline({
        scrollTrigger: {
          trigger: galleryRef.value,
          start: "40% top",
          toggleActions: "play none none reverse",
          ease: "none",
        },
      })

      tl2.to(gradientBack.value, {
        background: "linear-gradient(to top, #f7f5f0 100%, #142819)",
        duration: 0.2,
      }).to(connectTitle.value, {
        color: "#000000"
      }, "<");


    })
});
</script>

<style scoped lang="scss">
#gallery {
  width: 100vw;
  height: 100vh;
  @include clamp-property("padding-inline", 0, 10.76);
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

    @media screen and (max-width: 480px) {
      top: 80%;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      top: 80%;
    }

    @media screen and (min-width: 1024px) and (max-width: 1920px) {
      top: 80%;
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

  .gallery-gradient-back {
    width: 100%;
    // height: 200vh; // -> handled by JS
    background: linear-gradient(to top, #142819, #142819);
    position: absolute;
    top: 0;
    z-index: -15;
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
      width: 30%;
      height: 60%;

      @media screen and (max-width: 365px) {
        width: 12rem;
        height: 20rem;
      }

      @media screen and (min-width: 366px) and (max-width: 480px) {
        width: 65%;
        height: 57%;
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 23rem;
        height: 35rem;
      }

      @media screen and (min-width: 769px) and (max-width: 1366px) {
        width: 30%;
        height: 57%;
      }

      @media screen and (min-width: 1367px) and (max-width: 1920px) {
        width: 30%;
        height: 57%;
      }
    }

    .images-container:nth-child(2) {
      left: 0%;
      top: 15%;
      transform: translateY(-50%);
      @include clamp-property("width", 12, 28);

    }

    .images-container:nth-child(3) {
      right: 0%;
      top: 15%;
      transform: translateY(-50%) scale(1);
      aspect-ratio: 1;
      @include clamp-property("width", 6, 20);

    }

    .images-container:nth-child(4) {
      left: -20%;
      top: 45%;
      transform: translateY(-50%);
      @include clamp-property("width", 18, 30);

    }

    .images-container:nth-child(5) {
      right: -20%;
      top: 45%;
      transform: translateY(-50%);
      aspect-ratio: 1;
      @include clamp-property("width", 9.6, 30);


    }

    .images-container:nth-child(6) {
      top: 75%;
      left: -10%;
      transform: translateY(-50%);
      aspect-ratio: 1;
      @include clamp-property("width", 10, 28);

    }

    .images-container:nth-child(7) {
      top: 75%;
      right: -10%;
      transform: translateY(-50%);
      aspect-ratio: 4/5;
      @include clamp-property("width", 13, 26);

    }
  }
}
</style>
