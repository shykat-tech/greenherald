<template>
  <section id="about" ref="aboutRef">
    <div class="gradient-back" ref="gradientBack" />
    <div class="container" ref="containerRef">
      <h2 class="text" ref="textRef">
        Welcome to the SFX Greenherald International School Alumni Association.
        We are a proud network of graduates, united by shared memories and
        achievements. Our mission is to reconnect, inspire, and support each
        other while giving back to the school that shaped us. Together, we
        celebrate our past and build a brighter future.
      </h2>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
const { $gsap, $SplitText, $ScrollTrigger } = useNuxtApp();

// Refs
const aboutRef = ref(null);
const containerRef = ref(null);
const textRef = ref(null);
const gradientBack = ref(null);


onMounted(() => {
  const upcomingHeight =
    document.getElementById("upcoming-events")?.getBoundingClientRect().height || 0;

  const totalHeight = window.innerHeight + upcomingHeight + 20;

  gradientBack.value.style.height = `${totalHeight}px`;


  const target = textRef.value;
  if (!target) return;

  const split = new $SplitText(target, { type: "words" });

  $gsap.set(split.words, { opacity: 0.2 });

  // 1️⃣ PIN THE SECTION UNTIL TEXT ANIMATION IS COMPLETE
  $ScrollTrigger.create({
    trigger: "#about",
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: true,
    pinSpacing: true,
  });

  // 2️⃣ FADE-IN WORDS DURING PINNED SCROLL
  $gsap.to(split.words, {
    opacity: 1,
    stagger: 0.1,
    ease: "none",
    scrollTrigger: {
      trigger: aboutRef.value,
      start: "top top",
      end: "+=100%", // must match pin duration
      scrub: true,
    },
  });

  // 3️⃣ BACKGROUND + TEXTURE TRANSITION
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: aboutRef.value,
      start: "top top",
      end: "center",
      toggleActions: "play none none reverse",
    },
  });

  tl.to(".gradient-back", {
    background: "linear-gradient(to top, #142819 60%, #f7f5f0)",
    duration: 0.2,
  })
    .to(
      textRef.value,
      {
        color: "#fcfcfc",
        duration: 0.2,
      },
      "<"
    );

  $gsap.to(containerRef.value, {
    y: 0,
    scrollTrigger: {
      trigger: aboutRef.value,
      start: "-10% center",
      toggleActions: "play none none play",
    },
  });
});
</script>

<style scoped lang="scss">
#about {
  width: 100vw;
  height: 100vh;
  @include clamp-property("padding-inline", 1.25, 17);
  // @include clamp-property("padding-block", 6.25, 22.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #f7f5f0;

  .gradient-back {
    width: 100%;
    // height: 200vh; // -> handled by JS
    background: linear-gradient(to top, #f7f5f0, #f7f5f0);
    position: absolute;
    bottom: 0;
    z-index: -5;
  }

  .container {
    transform: translateY(50%);

    h2 {
      @include clamp-property("font-size", 1.625, 3);
      @include clamp-property("letter-spacing", -0.016, -0.03);
      font-weight: 450;
      line-height: 160%;
      color: black;
    }
  }
}
</style>
