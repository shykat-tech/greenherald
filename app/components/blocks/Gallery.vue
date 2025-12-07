<template>
  <section id="gallery" ref="galleryRef">
    <div class="images-wrapper" ref="imageWrapperRef">
      <div class="images-container" ref="imageContainerRef" v-for="(_, i) in 7" :key="i">
        <img :src="`/gallery/gallery${i + 1}.jpg`" class="img" />
      </div>
    </div>

    <div class="title-container" ref="titleContainerRef">
      <div class="connect-text" ref="connectRef">
        <h2 class="title font-heading" ref="connectTitle" id="galleryCTATitle">
          Ready to <br />
          Reconnect?
        </h2>

        <CommonPrimaryButton ref="joinButtonRef">Join Now</CommonPrimaryButton>
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
// const gradientBack = ref(null);
const connectTitle = ref(null);


const windowWidth = ref(0);

onMounted(() => {
  const upcomingHeight =
    document.getElementById("stories")?.getBoundingClientRect().height || 0;
  const totalHeight = window.innerHeight + upcomingHeight;

  // gradientBack.value.style.height = `${totalHeight}px`;


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

  // $ScrollTrigger.create({
  //   trigger: galleryRef.value,
  //   start: "top top",
  //   end: "center center",
  //   pin: true,
  //   scrub: 1.5,
  //   pinSpacing: true,
  // });

  const images = $gsap.utils.toArray(imageContainerRef.value);


  const mm = $gsap.matchMedia();

  mm.add(
    {
      xs: "(max-width: 365px)",
      sm: "(min-width: 366px) and (max-width: 480px)",
      md: "(min-width: 481px) and (max-width: 1024px)",
      lg: "(min-width: 1025px) and (max-width: 1366px)",
      xl: "(min-width: 1367px) and (max-width: 1920px)",
      xxl: "(min-width: 1921px)",
    },
    (context) => {
      const { xs, sm, md, lg, xl, xxl } = context.conditions;

      const tl = $gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: imageWrapperRef.value,
          start: "top center",
          end: "center center",
          toggleActions: "play none none reverse",
          scrub: 1.5,
        },
      });

      tl
        .to([images[0]], {
          y: 0
        })
        .to([images[1]], {
          top: xs ? "10%" : sm ? "10%" : md ? "-40%" : "-20%",
          left: xs ? "-25%" : sm ? "-25%" : md ? "2%" : lg ? "5%" : "12%"
        }, "<")
        .to([images[2]], {
          top: xs ? "-8%" : sm ? "-12%" : md ? "-40%" : "-20%",
        }, "<")

        .to([images[4]], {
          top: xs ? "20%" : sm ? "15%" : md ? "20%" : "17%",
          right: xs ? "-24%" : sm ? "-24%" : md ? "-10%" : lg ? "-2%" : "5%"
        }, "<")
        .to([images[3]], {
          top: xs ? "45%" : sm ? "40%" : md ? "33%" : lg ? "40%" : "30%",
          left: xs ? "-50%" : sm ? "-40%" : md ? "-15%" : lg ? "5%" : "12%"
        }, "<")
        .to(images[0].querySelector(".img"), {
          scale: 1.1,
        }, "<")
        .to([images[5]], {
          top: xs ? "100%" : sm ? "100%" : md ? "80%" : lg ? "80%" : "70%",
          left: xs ? "-30%" : sm ? "-30%" : md ? "-10%" : lg ? "-5%" : "5%"
        }, "<")
        .to([images[6]], {
          top: xs ? "65%" : sm ? "65%" : md ? "70%" : lg ? "65%" : "60%",
        }, "<")

      const tl2 = $gsap.timeline({
        scrollTrigger: {
          trigger: titleContainerRef.value,
          start: "bottom 90%",
          toggleActions: "play none none reverse",
          duration: 0.7
        },
      });

      tl2.to(connectRef.value, {
        y: 0,
        duration: 0.6
      })
    })
});
</script>

<style scoped lang="scss">
#gallery {
  width: 100vw;
  min-height: 100vh;
  @include clamp-property("padding-inline", 0, 10.76);
  position: relative;
  @include flex-center;
  flex-direction: column;
  @include clamp-property("padding-bottom", 2, 10);
  // overflow: hidden;

  .images-wrapper {
    position: relative;
    width: 100vw;
    height: 100%;
    // min-height: 100vh;
    @include clamp-property("padding-bottom", 4, 10);

    .images-container {
      position: absolute;

      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .images-container:nth-child(1) {
      position: relative;
      margin-inline: auto;
      transform: translateX(-5%);
      aspect-ratio: 4/7;
      transform: translateY(200px);

      @include clamp-property("width", 13.8, 34.31);
    }

    .images-container:nth-child(2) {
      top: 35%;
      left: -10%;
      @include clamp-property("width", 12, 28);
      aspect-ratio: 46/25;


    }

    .images-container:nth-child(3) {
      top: 30%;
      right: 12%;
      aspect-ratio: 1;
      z-index: 2;
      @include clamp-property("width", 6, 20);

    }

    .images-container:nth-child(4) {
      left: -10%;
      top: 35%;
      aspect-ratio: 30/19;
      @include clamp-property("width", 18, 30);

    }

    .images-container:nth-child(5) {
      top: 30%;
      right: -10%;
      aspect-ratio: 13/14;
      @include clamp-property("width", 9.6, 30);
    }

    .images-container:nth-child(6) {
      top: 100%;
      left: 0%;
      aspect-ratio: 1;
      @include clamp-property("width", 10, 28);

    }

    .images-container:nth-child(7) {
      top: 100%;
      right: -5%;
      aspect-ratio: 22/27;
      @include clamp-property("width", 13, 26);

    }

    @media screen and (max-width: 480px) {
      .images-container:nth-child(2) {
        top: 15%;
        left: -25%;
      }

      .images-container:nth-child(3) {
        top: 15%;
        right: -10%;
      }

      .images-container:nth-child(4) {
        top: 35%;
        left: -60%;
      }

      .images-container:nth-child(5) {
        right: -30%;
      }

      .images-container:nth-child(6) {
        top: 100%;
        left: -27%;
      }

      .images-container:nth-child(7) {
        top: 100%;
        right: -40%;
        z-index: 1;
      }
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      .images-container:nth-child(2) {
        top: 20%;
        left: -20%;
      }

      .images-container:nth-child(3) {
        top: 20%;
        right: 0%;
      }

      .images-container:nth-child(4) {
        top: 50%;
        left: -30%;
      }

      .images-container:nth-child(5) {
        top: 45%;
        right: -25%;
      }

      .images-container:nth-child(6) {
        top: 100%;
        left: -20%;
      }

      .images-container:nth-child(7) {
        top: 100%;
        right: -20%;
        z-index: 1;
      }
    }

    @media screen and (min-width: 769px) and (max-width: 1366px) {
      .images-container:nth-child(2) {
        top: 20%;
        right: -25%;
      }

      .images-container:nth-child(4) {
        top: 50%;
        right: -25%;
      }

      .images-container:nth-child(5) {
        top: 45%;
        right: -20%;
      }

      .images-container:nth-child(6) {
        left: -15%;
        z-index: 1;
      }

      .images-container:nth-child(7) {
        right: -10%;
        z-index: 1;
      }
    }
  }

  .title-container {
    overflow: hidden;

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

  // .gallery-gradient-back {
  //   width: 100%;
  //   // height: 200vh; // -> handled by JS
  //   background: linear-gradient(to top, $green-500, $green-500);
  //   position: absolute;
  //   top: 0;
  //   z-index: -15;
  // }


}
</style>
