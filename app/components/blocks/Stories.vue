<template>
  <section id="storyContainer" ref="storyContainerRef">
    <section id="stories" ref="storiesRef">
      <h2 class="s-title font-heading" ref="sectionTitleRef">
        Stories that Inspire
      </h2>
      <div class="container" ref="storiesContainerRef">
        <div class="slider" ref="slider">
          <div class="slider-wrapper" ref="sliderWrapper">
            <div class="slide" :class="{ active: i + 1 === activeSlide }" v-for="(slide, i) in slides" :key="i">
              <!-- Left Content -->
              <div class="content">
                <div>
                  <svg width="134" height="107" viewBox="0 0 134 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M105.191 106.899C99.641 106.899 94.7955 105.974 90.6548 104.124C86.6022 102.186 83.2544 99.6313 80.6114 96.4601C77.9684 93.2888 75.9862 89.5889 74.6647 85.3605C73.3432 81.1322 72.6824 76.6395 72.6824 71.8826C72.6824 62.3687 74.092 53.7798 76.9112 46.1158C79.8185 38.3638 83.5628 31.5367 88.144 25.6346C92.7252 19.6444 97.7909 14.5351 103.341 10.3067C108.98 5.99021 114.53 2.55465 119.992 0L123.824 5.15335C116.072 12.4649 109.905 18.9837 105.323 24.7096C100.742 30.3475 98.4517 35.0604 98.4517 38.8483C98.4517 41.1387 99.4208 42.9886 101.359 44.3981C103.297 45.8075 105.676 47.0848 108.495 48.23C111.226 49.2871 114.089 50.4764 117.085 51.7977C120.08 53.1191 122.811 54.8809 125.278 57.0832C127.833 59.1974 129.903 61.8842 131.489 65.1436C133.163 68.403 134 72.5432 134 77.5645C134 80.5596 133.383 83.7749 132.15 87.2105C131.005 90.646 129.199 93.8173 126.732 96.7243C124.353 99.6313 121.358 102.054 117.746 103.992C114.133 105.93 109.949 106.899 105.191 106.899ZM32.5089 106.899C26.9586 106.899 22.1131 105.974 17.9724 104.124C13.9198 102.186 10.572 99.6313 7.92899 96.4601C5.286 93.2888 3.30375 89.5889 1.98225 85.3605C0.660749 81.1322 0 76.6395 0 71.8826C0 62.3687 1.4096 53.7798 4.2288 46.1158C7.13609 38.3638 10.8803 31.5367 15.4615 25.6346C20.0427 19.6444 25.1085 14.5351 30.6588 10.3067C36.2972 5.99021 41.8475 2.55465 47.3097 0L51.142 5.15335C43.3892 12.4649 37.2222 18.9837 32.641 24.7096C28.0598 30.3475 25.7692 35.0604 25.7692 38.8483C25.7692 41.1387 26.7383 42.9886 28.6765 44.3981C30.6147 45.8075 32.9934 47.0848 35.8126 48.23C38.5437 49.2871 41.407 50.4764 44.4024 51.7977C47.3978 53.1191 50.1289 54.8809 52.5957 57.0832C55.1506 59.1974 57.2209 61.8842 58.8067 65.1436C60.4806 68.403 61.3176 72.5432 61.3176 77.5645C61.3176 80.5596 60.7009 83.7749 59.4675 87.2105C58.3222 90.646 56.5161 93.8173 54.0493 96.7243C51.6706 99.6313 48.6752 102.054 45.0631 103.992C41.451 105.93 37.2663 106.899 32.5089 106.899Z"
                      fill="#F2EDE4" />
                  </svg>

                  <p class="slide-text" ref="storyRef">
                    {{ slide.story }}
                  </p>

                  <strong class="slide-insight" ref="insightRef">
                    {{ slide.insight }}
                  </strong>
                </div>

                <!-- slider toggler -->
                <div class="slider-btn-group">
                  <button @click="prevSlide" class="slider-button-prev" :disabled="currentIndex === 0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.49216 12L18.9922 12" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M11 6C11 6 5 10.4189 5 12C5 13.5812 11 18 11 18" stroke="#FCFCFC" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>

                  <div class="slider-pagination">
                    <span v-for="(_, i) in Math.min(slides.length, sliderLimit)" :key="i" class="nav"
                      :class="{ active: i + 1 === activeSlide }" @click="goToSlide(i)" />
                  </div>

                  <button @click="nextSlide" class="slider-button-next" :disabled="currentIndex === slides.length - 1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5078 12L5.00781 12" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M13 6C13 6 19 10.4189 19 12C19 13.5812 13 18 13 18" stroke="#FCFCFC" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Right Image -->

              <div class="img-container">
                <Transition name="slide-img" mode="in-out">
                  <img v-if="slides[activeIndex]" :key="slides[activeIndex].id" :src="slides[activeIndex].image"
                    alt="story" />
                </Transition>
              </div>
            </div>
          </div>


        </div>


      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const { $gsap, $SplitText, $ScrollTrigger } = useNuxtApp();
const { add, cleanup } = useGsapCleanup();

// Refs
const storiesRef = ref(null);
const storiesContainerRef = ref(null);
const sliderWrapper = ref(null);
const sectionTitleRef = ref(null);
const storyContainerRef = ref(null);

let currentIndex = 0;
let slideWidth = 0;
const activeSlide = ref(1);
const activeIndex = ref(0);

// --------------------
// Slides Data
// --------------------
const slides = [
  {
    id: 1,
    insight: "Success begins with curiosity and asking the right questions to grow and inspire others.",
    story: "After graduating from S.F.X Greenherald International School in 2008, Aarif Hasan turned his curiosity into a tech startup in Singapore. His early years were filled with science fairs, coding competitions, and debate clubs that built his problem-solving and leadership skills. His company now employs over 200 people, and he actively mentors young entrepreneurs, encouraging them to explore ideas and take bold steps.",
    image: "/story/testimonial1.png",
  },
  {
    id: 2,
    insight: "Giving back to the community is one of the most meaningful and rewarding forms of success.",
    story: "Maria began her journey in school volunteer programs and debate clubs, developing leadership and communication skills. After graduation, she created youth empowerment programs focused on education and mentorship. Her initiatives now reach thousands internationally, providing guidance, learning opportunities, and essential skills to underprivileged students, helping them shape brighter futures through consistent community support.",
    image: "/story/middle.jpg",
  },
  {
    id: 3,
    insight: "Leadership grows through experience, challenges, and learning to guide others effectively.",
    story: "John launched a small community coding project after school that eventually grew into an international program. He emphasized hands-on learning, mentoring students in real-world problem-solving, teamwork, and collaboration. Navigating challenges such as limited resources and diverse group needs helped him develop resilience, empathy, and strategic thinking, shaping him into a strong and thoughtful leader.",
    image: "/story/right-1.jpg",
  },
  {
    id: 4,
    insight: "Innovation flourishes when curiosity, creativity, and empathy work together to shape new solutions.",
    story: "Sophie explored technology from a young age, building small apps and joining competitions that nurtured her coding interest. After school, she founded a global platform connecting students with mentors to improve access to education and skill-building. By listening to feedback, refining her ideas, and scaling internationally, Sophie shows that innovation thrives on curiosity, persistence, and a desire to help others.",
    image: "/story/right-2.jpg",
  },
];

const sliderLimit = 10;

// --------------------
// Slider Helpers
// --------------------
const updateSlideWidth = () => {
  slideWidth = sliderWrapper.value.querySelector(".slide")?.offsetWidth || 0;
};

const goToSlide = (index) => {
  activeIndex.value = index;

  const slidesEls = sliderWrapper.value.querySelectorAll(".slide");
  const actSlide = slidesEls[index];

  const story = actSlide.querySelector(".slide-text");
  const insight = actSlide.querySelector(".slide-insight");

  // SplitText
  const splitStory = new $SplitText(story, { type: "lines, words", linesClass: "line", mask: "lines" });
  const splitInsight = new $SplitText(insight, { type: "lines, words", linesClass: "line", mask: "lines" });

  // Initial state
  $gsap.set(splitStory.lines, { opacity: 0, yPercent: 100 });
  $gsap.set(splitInsight.lines, { opacity: 0, yPercent: 100 });

  // Timeline for slide animation
  const tl = $gsap.timeline();
  add(tl);

  tl.to(sliderWrapper.value, { x: -slideWidth * index, duration: 0, ease: "none" })
    .to([...splitStory.lines, ...splitInsight.lines], { opacity: 1, yPercent: 0, stagger: 0.1, duration: 0.7, ease: "power3.out" }, 0.1);

  activeSlide.value = index + 1;
};

const nextSlide = () => {
  if (currentIndex < Math.min(slides.length, sliderLimit) - 1) currentIndex++;
  goToSlide(currentIndex);
};

const prevSlide = () => {
  if (currentIndex > 0) currentIndex--;
  goToSlide(currentIndex);
};

// --------------------
// Mounted Animations
// --------------------
let mm; // matchMedia instance

onMounted(() => {
  updateSlideWidth();
  window.addEventListener("resize", updateSlideWidth);

  mm = $gsap.matchMedia();

  mm.add(
    {
      sm: "(max-width: 480px)",
      md: "(min-width: 481px) and (max-width: 768px)",
      lg: "(min-width: 769px)",
    },
    (context) => {
      const { sm, md, lg } = context.conditions;

      // Scale story container with scroll
      const scaleTween = $gsap.to(storyContainerRef.value, {
        scale: lg ? 0.9 : 1,
        ease: "none",
        scrollTrigger: {
          trigger: storyContainerRef.value,
          start: "top top",
          end: "+=100%",
          pin: lg && true,
          scrub: 1.5,
          pinSpacing: false,
        },
      });
      add(scaleTween);

      // Timeline for section title and stories container
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: storiesRef.value,
          start: "top 80%",
          end: "top top",
          scrub: 1.5,
        },
      });
      add(tl);

      tl.fromTo(sectionTitleRef.value, { y: 500 }, { y: 0, ease: "power2.out", duration: 2 }, 0)
        .fromTo(storiesContainerRef.value, { y: 500 }, { y: 0, ease: "power2.out", duration: 2 }, 1);

      // Timeline for background + section title color
      const tl2 = $gsap.timeline({
        scrollTrigger: {
          trigger: storiesRef.value,
          start: "top center",
          end: "top top",
          toggleActions: "play none none reverse",
        },
      });
      add(tl2);

      tl2.to("#bg-overlay", { background: "linear-gradient(to bottom, #f7f5f0 80%, #142819)", duration: 0.6 })
        .to(sectionTitleRef.value, { color: "black", duration: 0.6 }, "<")
        .to("#galleryCTATitle", { color: "black", duration: 0.6 }, "<");
    }
  );
});

// --------------------
// Cleanup on unmount
// --------------------
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSlideWidth);
  cleanup();  // kills all tracked tweens, timelines, ScrollTriggers
  mm?.kill(); // kills matchMedia instance
});
</script>


<style scoped lang="scss">
#storyContainer {
  width: 100vw;
  height: auto;
  @include flex-center;
  padding-bottom: 3rem;

  @media screen and (min-width: 768px) {
    height: 100vh;
    padding-bottom: 0rem;
  }

  #stories {
    width: 100%;
    height: auto;
    position: relative;
    // @include clamp-property("padding-block", 6.25, 11.56);

    .s-title {
      text-align: center;
      @include clamp-property("font-size", 2.125, 4.5);
      @include clamp-property("margin-bottom", 1.5, 5);
      line-height: 110%;
      font-weight: 400;
      color: white;
    }

    .container {
      width: 100%;
      position: relative;
      height: 100%;
    }

    .slider {
      width: 100%;
      height: 100%;
      position: relative;


      .slider-wrapper {
        display: flex;
        position: relative;

        .slide {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          flex-shrink: 0;
          @include clamp-property("padding-inline", 1.25, 8.12);

          @media screen and (max-width: 769px) {
            & {
              flex-direction: column;
              justify-content: center;
              gap: 24px;
            }
          }

          .content {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media screen and (max-width: 768px) {
              & {
                width: 100%;

                svg {
                  width: 70px;
                  height: 70px;
                }
              }
            }

            p {
              @include clamp-property("font-size", 1.125, 1.5);
              @include clamp-property("margin-bottom", 1.5, 4.5);
              color: $green-800;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
              letter-spacing: -0.015rem;
            }

            strong {
              @include clamp-property("font-size", 1.25, 1.75);
              font-weight: 450;
              line-height: 140%;
              text-align: start;
              letter-spacing: -0.0175rem;
            }
          }
        }

        .img-container {
          width: 35%;
          overflow: hidden;
          @include clamp-property("border-radius", 1.5, 2.5);
          position: relative;
          aspect-ratio: 10/11;

          @media screen and (max-width: 420px) {
            & {
              aspect-ratio: 4/5;
            }
          }

          @media screen and (max-width: 768px) {
            & {
              width: 100%;
            }
          }

          @media screen and (min-width: 769px) and (max-width: 1366px) {
            & {
              width: 35%;
            }
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            transform: scale(1.2);
            @include clamp-property("border-radius", 1.5, 2.5);
            transition: all 1s ease;
          }

          img:has(+ img.slide-img-enter-active) {
            transform: translate(-15%, -15%) scale(1.2);
            opacity: 0;
          }
        }
      }


    }
  }
}

.slider-btn-group {
  z-index: 30;
  @include flex-center;
  justify-content: start;
  gap: 24px;
  height: auto;
  margin-bottom: 1rem;

  .slider-pagination {
    position: relative;
    @include flex-center;
    flex-direction: row;
    gap: 18px;

    .nav {
      width: 0.5rem;
      height: 0.5rem;
      background: $green-50;
      border-radius: 50%;
      cursor: pointer;
    }

    .nav.active {
      background: $yellow-700;
      position: relative;
      transition: all 0.5s;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        background: transparent;
        border-radius: 50%;
        border: 2px solid $yellow-400;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    position: relative;
    flex-direction: row;
    margin-top: 48px;

    svg {
      width: 20px;
    }
  }

  .slider-button-prev,
  .slider-button-next {
    position: relative !important;
    @include clamp-property("width", 2.75, 3.25);
    @include clamp-property("height", 2.75, 3.25);
    @include flex-center;
    border: none;
    border-radius: 50%;
    background: $yellow-700;
    flex-shrink: 0;
    color: transparent !important;
    padding: 8px;
    outline: none;

    &:disabled {
      background: $yellow-100;
    }
  }
}

.slide-img-enter-active,
.slide-img-leave-active {
  transition: all 1s ease;
}

.slide-img-enter-from {
  opacity: 0;
  transform: translate(15%, 15%) scale(1.5) !important;
}

.slide-img-enter-to {
  opacity: 1;
  transform: translate(0, 0) scale(1.2) !important;
}

.slide-img-leave-from {
  opacity: 1;
  transform: translate(0%, 0%) scale(1.5);
}

.slide-img-leave-to {
  transform: translate(15%, 15%) scale(1.2);
  opacity: 0;
}
</style>
