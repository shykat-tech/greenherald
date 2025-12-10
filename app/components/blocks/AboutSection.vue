<template>
  <section id="about" ref="aboutRef">
    <!-- <div class="gradient-back" ref="gradientBack" /> -->
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
import { onMounted, onBeforeUnmount, ref } from "vue";
const { $gsap, $SplitText, $ScrollTrigger } = useNuxtApp();
const { add, cleanup } = useGsapCleanup();

// Refs
const aboutRef = ref(null);
const containerRef = ref(null);
const textRef = ref(null);
// const gradientBack = ref(null)

onMounted(() => {
  const target = textRef.value;
  if (!target) return;

  const split = new $SplitText(target, { type: "words" });

  // Standalone tweens for initial setup
  const setWords = $gsap.set(split.words, { opacity: 0.2 });
  const setLines = $gsap.set(split.lines, { opacity: 0, y: "100px" });

  add(setWords);
  add(setLines);

  // 1️⃣ PIN THE SECTION UNTIL TEXT ANIMATION IS COMPLETE
  const pinTrigger = $ScrollTrigger.create({
    trigger: aboutRef.value,
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: 1.5,
    pinSpacing: true,
  });
  add(pinTrigger);

  // 2️⃣ FADE-IN WORDS DURING PINNED SCROLL
  const fadeWords = $gsap.to(split.words, {
    opacity: 1,
    stagger: 0.1,
    ease: "none",
    scrollTrigger: {
      trigger: aboutRef.value,
      start: "top top",
      end: "+=100%",
      scrub: 1.5,
    },
  });
  add(fadeWords);

  // 3️⃣ BACKGROUND + TEXTURE TRANSITION
  const bgTimeline = $gsap.timeline({
    scrollTrigger: {
      trigger: aboutRef.value,
      start: "top top",
      end: "center",
      toggleActions: "play none none reverse",
    },
  });

  bgTimeline
    .to("#bg-overlay", { background: "linear-gradient(to bottom, #142819 80%, #f7f5f0)", duration: 0.6 })
    .to(textRef.value, { color: "#fcfcfc", duration: 0.6 }, "<");

  add(bgTimeline);

  // Container fade-in
  const containerTween = $gsap.to(containerRef.value, {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: aboutRef.value,
      start: "-10% center",
      toggleActions: "play none none reverse",
    },
  });
  add(containerTween);
});

// CLEANUP ON UNMOUNT
onBeforeUnmount(() => {
  cleanup(); // kills all tweens, timelines, and ScrollTriggers tracked via add()
});
</script>


<style scoped lang="scss">
#about {
  width: 100vw;
  height: 100vh;
  @include clamp-property("padding-inline", 1.25, 17);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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
