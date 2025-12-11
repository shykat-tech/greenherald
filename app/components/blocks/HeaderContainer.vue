<template>
  <div>
    <header id="header" ref="headerRef">
      <img src="/assets/images/logo.svg" alt="greenherald-logo" class="logo hiddenLogo" ref="hiddenLogoRef" />

      <img src="/assets/images/logo.svg" alt="greenherald-logo" class="logo animLogo" ref="logoRef" />

      <div class="header-content" ref="headerContentRef">
        <h1 class="heading font-heading" ref="headingRef">
          Together, we carry the
          <br />
          legacy forward
        </h1>

        <div class="subheading" ref="subHeadingRef">
          <span>Reconnect</span>
          <span class="ellipse"></span>
          <span>Celebrate</span>
          <span class="ellipse"></span>
          <span>Grow Together</span>
        </div>

        <div class="btn-group" ref="btnGroupRef">
          <CommonPrimaryButton ref="joinBtnRef" @click="globalStore.openModal('membership')">Join
            Now</CommonPrimaryButton>
        </div>
      </div>

      <!-- images -->
      <div class="imagesContainer" ref="imagesRef">
        <img src="/assets/images/left-2.jpg" />
        <img src="/assets/images/left-1.jpg" />
        <img src="/assets/images/middle.jpg" />
        <img src="/assets/images/right-1.jpg" />
        <img src="/assets/images/right-2.jpg" />
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const globalStore = useGlobalStore();
const { $gsap, $lenis } = useNuxtApp();
const { add, cleanup } = useGsapCleanup();

// refs
const logoRef = ref(null);
const hiddenLogoRef = ref(null);
const headerContentRef = ref(null);
const headingRef = ref(null);
const subHeadingRef = ref(null);
const btnGroupRef = ref(null);
const imagesRef = ref(null);
const headerRef = ref(null);

let mm; // for matchMedia so we can clean it

onMounted(() => {
  const viewportHeight = window.innerHeight;
  const logoPos = hiddenLogoRef.value.getBoundingClientRect();
  const imgs = imagesRef.value.querySelectorAll("img");

  // MATCH-MEDIA instance
  mm = $gsap.matchMedia();

  mm.add(
    {
      sm: "(max-width: 480px)",
      md: "(min-width: 481px) and (max-width: 1024px)",
      lg: "(min-width: 1024px)",
      xl: "(min-width: 1366px)",
      xxl: "(min-width: 1920px)",
    },
    (context) => {
      const { sm, md, lg, xl, xxl } = context.conditions;

      // ---------------------------
      // MAIN TIMELINE
      // ---------------------------
      const tl = $gsap.timeline({ duration: 1.5 });
      add(tl);

      tl.to(logoRef.value, {
        scale: 1,
        top: hiddenLogoRef.value.offsetTop + logoPos.height / 2,
        duration: 0.5,
        onComplete: () => $lenis.start()
      })
        .to([headerContentRef.value, imagesRef.value], {
          opacity: 1,
        }, "<")
        .to("#baseNav", {
          y: 0,
          duration: 1
        }, "<")
        .fromTo(
          headingRef.value,
          { y: viewportHeight },
          {
            y: 0,
            duration: 0.5
          },
          "<"
        )
        .fromTo(
          subHeadingRef.value,
          { y: viewportHeight },
          {
            y: 0,
            duration: 0.6
          },
          "<"
        )
        .fromTo(
          btnGroupRef.value,
          { y: viewportHeight },
          {
            y: 0,
            duration: 0.7
          },
          "<"
        )
        .fromTo(
          imgs,
          { y: "120%" },
          { y: "0%", stagger: 0.2, duration: 0.5 }, "-=0.7"
        );

      const positions = lg
        ? ["-5%", "22%", "50%", "77.5%", "105%"]
        : ["0%", "-20%", "50%", "135%", "100%"];


      // Images wide Transition (all part of tl)
      // no need to add individually because tl is already added

      tl.to(imgs[0], {
        x: `-${positions[0]}`,
        y: "-14rem",
        left: positions[0],
        rotate: 0,
      })
        .to(imgs[1], {
          x: `-${positions[1]}`,
          y: "-6rem",
          left: positions[1],
          rotate: 0,
        }, "<")
        .to(imgs[2], {
          x: `-${positions[2]}`,
          left: positions[2],
          rotate: 0,
        }, "<")
        .to(imgs[3], {
          x: `-${positions[3]}`,
          y: "-6rem",
          left: positions[3],
          rotate: 0,
        }, "<")
        .to(imgs[4], {
          x: `-${positions[4]}`,
          y: "-14rem",
          left: positions[4],
          rotate: 0,
        }, "<");

      // ---------------------------
      // PARALLAX TIMELINE
      // ---------------------------
      const tl2 = $gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.value,
          start: "top top",
          end: "center top",
          scrub: 1.5,
        },
      });

      add(tl2);

      tl2
        .to(logoRef.value, { y: -250 })
        .to(headingRef.value, { y: xxl ? -180 : xl ? -250 : lg ? -200 : -160 }, "<")
        .to(subHeadingRef.value, { y: xxl ? -150 : xl ? -250 : lg ? -200 : -140 }, "<")
        .to(btnGroupRef.value, { y: xxl ? -120 : xl ? -250 : lg ? -200 : -120 }, "<")
        .to([imgs[0], imgs[4]], { yPercent: xxl ? -70 : xl ? -90 : lg ? -100 : -80, duration: 1 }, "<")
        .to([imgs[1], imgs[3]], {
          yPercent: xxl ? -50 : xl ? -80 : lg ? -90 : -60,
          duration: 0.7,
        }, "<")
        .to(imgs[2], { yPercent: xxl ? -20 : xl ? -80 : lg ? -100 : -50, duration: 1 }, "<");
    }
  );
});

// CLEANUP EVERYTHING
onBeforeUnmount(() => {
  cleanup();        // kills all tweens + timelines + triggers tracked in "add"
  mm?.kill();       // kill matchMedia context
});
</script>


<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  @include clamp-property("padding-top", 4.5, 6);
  background: $yellow-50;
  transition: all 0.5s ease-in-out;
  height: 100vh;

  @media screen and (min-width: 375px) {
    height: 105vh;
  }

  @media screen and (min-width: 400px) {
    height: 100vh;
  }

  @media screen and (min-width: 1280px) {
    height: 120vh;
  }

  @media screen and (min-width: 1440px) {
    height: 100vh;
  }

  @media screen and (min-width: 1530px) {
    height: 110vh;
  }

  @media screen and (min-width: 1920px) {
    height: 120vh;
  }

  @media screen and (min-width: 2560px) {
    height: 112vh;
  }

  .header-content {
    @include clamp-property("padding-inline", 1.25, 26.19);
    will-change: transform;
    opacity: 0;
  }

  .logo {
    @include clamp-property("width", 7, 11.25);
    @include clamp-property("height", 7, 11.25);
    @include clamp-property("margin-bottom", 1.5, 3);
  }

  .logo.hiddenLogo {
    opacity: 0;
  }

  .animLogo {
    position: absolute;
    left: 50%;
    top: 45%;
    z-index: 10;
    transform: translate(-50%, -50%) scale(2);

    @media screen and (max-width: 320px) {
      top: 45%;
    }

    @media screen and (min-width: 321px) and (max-width: 768px) {
      top: 50%;
    }

    @media screen and (min-width: 769px) and (max-width: 1366px) {
      top: 40%;
    }

    @media screen and (min-width: 1367px) and (max-width: 1920px) {
      top: 45%;
    }
  }

  .heading {
    font-weight: 400;
    text-align: center;
    line-height: 110%;
    letter-spacing: -0.11rem;
    color: $green-Hero-Text;
    text-wrap: wrap;
    @include clamp-property("font-size", 3, 5.5);

    @media screen and (max-width: 1024px) {
      & {
        br {
          display: none;
        }
      }
    }
  }

  .subheading {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    @include clamp-property("margin-top", 1, 2.5);
    @include clamp-property("margin-bottom", 2.5, 3.5);

    flex-wrap: wrap;

    span {
      text-transform: uppercase;
      color: $green-900;
      letter-spacing: 0.2025rem;
      @include clamp-property("font-size", 0.875, 1.125);
      display: inline-block;
      font-weight: 500;
      text-wrap: nowrap;
    }

    span.ellipse {
      width: 8px;
      height: 8px;
      background-color: #435347;
      border-radius: 50%;
      flex-shrink: 0;
    }

    @media screen and (max-width: 480px) {
      & {
        gap: 8px;

        span {
          letter-spacing: 0px;
        }

        span.ellipse {
          width: 4px;
          height: 4px;
        }
      }
    }
  }

  .btn-group {
    width: 100%;
    @include flex-center;
    gap: 4px;
    @include clamp-property("margin-bottom", 7, 7);

    @media screen and (max-width: 480px) {
      gap: 0.5rem;
    }

    button {
      transition: all 0.3s;
    }

  }

  .imagesContainer {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    opacity: 0;

    img {
      aspect-ratio: 4/5;
      object-fit: cover;
      width: 42%;
      height: auto;
      position: absolute;

      @media screen and (min-width: 1024px) {
        width: 20%;
      }

      @media screen and (min-width: 2560px) {
        width: 20.5%;
      }
    }

    img:nth-child(1) {
      transform: rotate(-16deg);
      opacity: 0;
    }

    img:nth-child(2) {
      transform: rotate(11deg);
    }

    img:nth-child(4) {
      z-index: 5;
      transform: rotate(-6deg);
    }

    img:nth-child(5) {
      transform: rotate(-1deg);
      opacity: 0;
    }

    @media screen and (min-width: 1024px) {

      img:nth-child(1),
      img:nth-child(5) {
        opacity: 1
      }
    }
  }
}
</style>
