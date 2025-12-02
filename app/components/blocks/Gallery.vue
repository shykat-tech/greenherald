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
          start: "20% bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });

      tl
        .to([images[0]], {
          top: xs ? "3%" : sm ? "-1%" : md ? "-18%" : lg ? "-40%" : "-27%"
        })
        .to([images[1]], {
          top: xs ? "-2%" : sm ? "2%" : md ? "5%" : "-12%",
          left: xs ? "-15%" : sm ? "-18%" : md ? "2%" : lg ? "5%" : "15%"
        }, "<")
        .to([images[2]], {
          top: xs ? "-3%" : sm ? "3%" : md ? "8%" : "-10%",
        }, "<")
        .to([images[4]], {
          top: xs ? "23%" : sm ? "20%" : md ? "35%" : "35%",
          right: xs ? "-23%" : sm ? "-25%" : "-2%"
        }, "<")
        .to([images[3]], {
          top: xs ? "22%" : sm ? "27%" : md ? "35%" : "25%",
          left: xs ? "-37%" : sm ? "-40%" : md ? "-20%" : lg ? "-15%" : "10%"
        }, "<")
        .to(images[0].querySelector(".img"), {
          scale: 1.2,
        })
        .to([images[5]], {
          top: xs ? "57%" : sm ? "60%" : md ? "75%" : lg ? "72%" : "70%",
        }, "<")
        .to([images[6]], {
          top: xs ? "60%" : sm ? "50%" : md ? "70%" : lg ? "65%" : "70%",
        }, "<")


      $gsap.to(connectRef.value, {
        y: "0%",
        duration: 0.5,
        scrollTrigger: {
          trigger: connectRef.value,
          start: "top bottom",
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
      }, "<").to(images, {
        y: "-20%",
        stagger: 0.01
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
    top: 79%;
    transform: translateY(-50%);
    z-index: 10;

    @media screen and (max-width: 365px) {
      top: 78%;
    }

    @media screen and (min-width: 366px) and (max-width: 480px) {
      top: 75%;
    }

    @media screen and (min-width: 481px) and (max-width: 1024px) {
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
    background: linear-gradient(to top, $green-500, $green-500);
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
      top: 0%;
      left: 50%;
      transform: translateX(-50%);
      aspect-ratio: 4/7;
      @include clamp-property("width", 13.8, 34.31);

      overflow: hidden;


      // @media screen and (max-width: 365px) {
      //   width: 12rem;
      //   height: 20rem;
      // }

      // @media screen and (min-width: 366px) and (max-width: 480px) {
      //   width: 65%;
      //   height: 57%;
      // }

      // @media screen and (min-width: 481px) and (max-width: 768px) {
      //   width: 23rem;
      //   height: 35rem;
      // }

      // @media screen and (min-width: 769px) and (max-width: 1366px) {
      //   width: 30%;
      //   height: 57%;
      // }

      // @media screen and (min-width: 1367px) and (max-width: 1920px) {
      //   aspect-ratio: 4/7;
      // }
    }

    .images-container:nth-child(2) {
      left: -15%;
      top: 20%;
      transform: translateY(-50%);
      @include clamp-property("width", 12, 28);
      aspect-ratio: 46/25;


    }

    .images-container:nth-child(3) {
      right: 7%;
      top: 25%;
      transform: translateY(-50%);
      aspect-ratio: 1;
      z-index: 2;
      @include clamp-property("width", 6, 20);

    }

    .images-container:nth-child(4) {
      left: -20%;
      top: 55%;
      transform: translateY(-50%);
      aspect-ratio: 30/19;
      @include clamp-property("width", 18, 30);

    }

    .images-container:nth-child(5) {
      top: 35%;
      right: -30%;
      transform: translateY(-50%);
      aspect-ratio: 13/14;
      @include clamp-property("width", 9.6, 30);
    }

    .images-container:nth-child(6) {
      top: 100%;
      left: 0%;
      transform: translateY(-50%);
      aspect-ratio: 1;
      @include clamp-property("width", 10, 28);

    }

    .images-container:nth-child(7) {
      top: 100%;
      right: -5%;
      transform: translateY(-50%);
      aspect-ratio: 22/27;
      @include clamp-property("width", 13, 26);

    }

    @media screen and (max-width: 480px) {
      .images-container:nth-child(2) {
        top: 10%;
        left: -25%;
      }

      .images-container:nth-child(3) {
        top: 15%;
        right: -10%;
      }

      .images-container:nth-child(4) {
        top: 35%;
        left: -70%;
      }

      .images-container:nth-child(5) {
        right: -35%;
      }

      .images-container:nth-child(6) {
        top: 80%;
        left: -27%;
      }

      .images-container:nth-child(7) {
        top: 80%;
        right: -40%;
        z-index: 1;
      }
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      .images-container:nth-child(2) {
        top: 10%;
        left: -25%;
      }

      .images-container:nth-child(3) {
        top: 15%;
        right: 0%;
      }

      .images-container:nth-child(4) {
        top: 35%;
        left: -70%;
      }

      .images-container:nth-child(5) {
        right: -35%;
      }

      .images-container:nth-child(6) {
        top: 80%;
        left: -20%;
      }

      .images-container:nth-child(7) {
        top: 80%;
        right: -20%;
        z-index: 1;
      }
    }

    @media screen and (min-width: 1025px) and (max-width: 1366px) {


      .images-container:nth-child(6) {
        left: -20%;
        z-index: 1;
      }

      .images-container:nth-child(7) {
        right: -20%;
        z-index: 1;
      }
    }
  }
}
</style>
