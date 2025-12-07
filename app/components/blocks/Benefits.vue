<template>
  <div id="mainContainer" ref="mainContainerRef">
    <section id="benefits" ref="benefitsRef">
      <div class="container" ref="containerRef">
        <h2 class="font-heading title" ref="titleRef">
          What&apos;s waiting for you <br />
          when you reconnect
        </h2>

        <div class="blocks" ref="blocksRef">
          <div class="block">
            <h3>Global Connections</h3>
            <span>Link up with alumni around the world for <br />
              friendship, mentorship, and professional growth.</span>
          </div>

          <div class="block">
            <h3>Opportunities & Mentorship</h3>
            <span>
              Link up with alumni around the world for <br />
              friendship, mentorship, and professional growth.</span>
          </div>

          <div class="block">
            <h3>Give Back to the School</h3>
            <span>Link up with alumni around the world for <br />
              friendship, mentorship, and professional growth.</span>
          </div>

          <div class="block circleBlock" ref="circleBlockRef">
            <h3 ref="initTitleRef">Simple to Join</h3>
            <span>Link up with alumni around the world for <br />
              friendship, mentorship, and professional growth.</span>
          </div>
        </div>
      </div>
    </section>

    <section id="dup-benefits" ref="dupBenefitsRef">
      <div class="dup-container" ref="dupContainerRef">
        <h3 ref="nextTitleRef">Simple to Join</h3>

        <div id="steps-container">
          <div class="content" ref="contentRef">
            <div class="hidden-title" ref="hiddenTitleRef">
              <h2>Simple to Join</h2>
            </div>

            <div class="steps" ref="stepsRef">
              <div class="benefitSteps">
                <BenefitsStep v-for="step in stepCards" :key="step.title" :step="step" />
              </div>

              <div class="steps-line">
                <div class="counts">
                  <span class="count">1</span>
                  <span class="count">2</span>
                  <span class="count">3</span>
                </div>
                <div class="back-line">
                  <div class="progress" ref="progressRef" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="smallSteps">
      <h2>Simple to Join</h2>
      <div class="steps-slider" ref="sliderWrapper">
        <div class="slide" v-for="step in stepCards" :key="step.title">
          <BenefitsStep :step="step" />
        </div>
      </div>

      <div class="navigation">
        <div class="nav-count">
          <span ref="currentNumRef" class="current">0{{ activeSlide }}</span>
          <span>-</span>
          <span class="total">0{{ stepCards.length }}</span>
        </div>

        <div class="nav-btn">
          <button @click="prevSlide" :disabled="currentIndex === 0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.80544 8H13.6055" stroke="white" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M7.19531 3.1998C7.19531 3.1998 2.39531 6.73492 2.39531 7.9998C2.39531 9.26476 7.19531 12.7998 7.19531 12.7998"
                stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button @click="nextSlide" :disabled="currentIndex === stepCards.length - 1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1946 8H2.39453" stroke="white" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M8.80469 3.1998C8.80469 3.1998 13.6047 6.73492 13.6047 7.9998C13.6047 9.26476 8.80469 12.7998 8.80469 12.7998"
                stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const { $gsap } = useNuxtApp();

// Refs
const mainContainerRef = ref(null);
const benefitsRef = ref(null);
const circleBlockRef = ref(null);
const dupBenefitsRef = ref(null);
const hiddenTitleRef = ref(null);
const stepsRef = ref(null);
const nextTitleRef = ref(null);
const progressRef = ref(null);
const sliderWrapper = ref(null);
const currentNumRef = ref(null);
const blocksRef = ref(null);
const titleRef = ref(null);
const initTitleRef = ref(null);

// states
const scrollDir = ref("down");

const stepCards = ref([
  {
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 24C40 19.5817 36.4184 16 32 16C27.5816 16 24 19.5817 24 24C24 28.4184 27.5816 32 32 32C36.4184 32 40 28.4184 40 24Z" stroke="#7E6B47" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M58.6654 32.0003C58.6654 17.2727 46.7262 5.33362 31.9987 5.33362C17.2711 5.33362 5.33203 17.2727 5.33203 32.0003C5.33203 46.7277 17.2711 58.6669 31.9987 58.6669C46.7262 58.6669 58.6654 46.7277 58.6654 32.0003Z" stroke="#7E6B47" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M45.3346 45.3333C45.3346 37.9696 39.365 32 32.0013 32C24.6375 32 18.668 37.9696 18.668 45.3333" stroke="#7E6B47" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    image: "/steps/step1.png",
    title: "Sign Up Online",
    content:
      "Fill out your alumni details and choose a membership package (Yearly or Lifetime).",
  },
  {
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.64 50.6668H50.6654M50.64 50.6668C48.9795 52.3135 45.9702 51.9034 43.8598 51.9034C41.2694 51.9034 40.0219 52.41 38.1731 54.2588C36.599 55.8332 34.4886 58.6668 31.9987 58.6668C29.5088 58.6668 27.3984 55.8332 25.8242 54.2588C23.9754 52.41 22.728 51.9034 20.1375 51.9034C18.0272 51.9034 15.0178 52.3135 13.3573 50.6668C11.6835 49.0071 12.0954 45.9852 12.0954 43.8612C12.0954 41.1772 11.5085 39.9431 9.59704 38.0316C6.75374 35.1884 5.33208 33.7666 5.33203 32.0002C5.33206 30.2335 6.75368 28.8119 9.59696 25.9686C11.3032 24.2623 12.0954 22.5716 12.0954 20.139C12.0954 18.0286 11.6853 15.0192 13.332 13.3587C14.9918 11.6849 18.0136 12.0969 20.1376 12.0969C22.5701 12.0969 24.2609 11.3047 25.9671 9.59848C28.8104 6.75515 30.232 5.3335 31.9987 5.3335C33.7654 5.3335 35.187 6.75515 38.0302 9.59848C39.736 11.3043 41.4267 12.0969 43.8598 12.0969C45.9702 12.0969 48.9798 11.6867 50.6403 13.3335C52.3139 14.9933 51.9019 18.0151 51.9019 20.139C51.9019 22.823 52.4891 24.0571 54.4003 25.9686C57.2438 28.8119 58.6654 30.2335 58.6654 32.0002C58.6654 33.7666 57.2438 35.1884 54.4003 38.0316C52.4888 39.9431 51.9019 41.1772 51.9019 43.8612C51.9019 45.9852 52.3139 49.0071 50.64 50.6668Z" stroke="#7E6B47" stroke-width="4"/>
<path d="M24 34.381C24 34.381 27.2 36.1192 28.8 38.6666C28.8 38.6666 33.6 28.6666 40 25.3333" stroke="#7E6B47" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    image: "/steps/step2.png",
    title: "Verify Your Information",
    content: "We’ll confirm your graduation details for secure access.",
  },
  {
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.3346 22.6668C37.3346 15.303 31.365 9.3335 24.0013 9.3335C16.6375 9.3335 10.668 15.303 10.668 22.6668C10.668 30.0306 16.6375 36.0002 24.0013 36.0002C31.365 36.0002 37.3346 30.0306 37.3346 22.6668Z" stroke="#7E6B47" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.6654 54.6667C42.6654 44.3573 34.308 36 23.9987 36C13.6894 36 5.33203 44.3573 5.33203 54.6667" stroke="#7E6B47" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.668 33.0477C42.668 33.0477 45.868 34.7859 47.468 37.3333C47.468 37.3333 52.268 27.3333 58.668 24" stroke="#7E6B47" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    image: "/steps/step3.png",
    title: "Become a Member",
    content:
      "Start enjoying all the benefits: events, connections, and community updates.",
  },
]);

let currentIndex = 0;
let slideWidth = 0;
let activeSlide = ref(1);

const updateSlideWidth = () => {
  slideWidth = sliderWrapper.value.querySelector(".slide").offsetWidth;
};

const goToSlide = (index) => {
  activeSlide.value = index + 1;

  const slides = sliderWrapper.value.querySelectorAll(".slide");
  const actSlide = slides[index];

  $gsap.to(currentNumRef.value, {
    y: -20,
    opacity: 0,
    duration: 0.25,
    ease: "power2.in",
    onComplete() {
      // Animate number in
      $gsap.fromTo(
        currentNumRef.value,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        }
      );
    },
  });

  const img = actSlide.querySelector("#stepImg");
  const desc = actSlide.querySelector("#stepDesc");

  const tl = $gsap.timeline();

  tl.to(sliderWrapper.value, {
    x: -slideWidth * index,
    duration: 0.3,
    ease: "power2.out",
  });

  tl.fromTo(
    img,
    { xPercent: 50, opacity: 0 },
    { xPercent: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
    "<0.1"
  ).fromTo(
    desc,
    {
      xPercent: 50,
      opacity: 0,
    },
    {
      xPercent: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    },
    "-=0.1"
  );
};

const nextSlide = () => {
  if (currentIndex < stepCards.value.length - 1) currentIndex++;
  //else currentIndex = 0; // loop
  goToSlide(currentIndex);
};

const prevSlide = () => {
  if (currentIndex > 0) currentIndex--;
  //else currentIndex = stepCards.value.length - 1; // loop
  goToSlide(currentIndex);
};

onMounted(() => {
  updateSlideWidth();
  window.addEventListener("resize", updateSlideWidth);

  const counts = $gsap.utils.toArray(".count");

  const mm = $gsap.matchMedia();

  mm.add(
    {
      sm: "(max-width: 480px)",
      md: "(min-width: 481px) and (max-width: 768px)",
      lg: "(min-width: 769px) and (max-width: 1366px)",
      xl: "(min-width: 1367px) and (max-width: 1920px)",
      xxl: "(min-width: 1921px)",
    },
    (context) => {
      const { sm, md, lg, xl } = context.conditions;

      if (sm) return;
      nextTitleRef.value.style.transform = `translate(${initTitleRef.value.offsetLeft}px, ${initTitleRef.value.offsetTop}px)`;

      const hiddenTitlePosition = hiddenTitleRef.value.getBoundingClientRect();
      stepsRef.value.style.transform = `translateX(100%)`;

      const exactXposition = hiddenTitlePosition.x;
      const exactYposition = hiddenTitleRef.value.offsetTop;

      const tl2 = $gsap.timeline({
        scrollTrigger: {
          trigger: mainContainerRef.value,
          start: "top 80%",
          end: "top top",
          scrub: 1.5,
        },
      });

      tl2
        .fromTo(
          titleRef.value,
          { y: 500 },
          {
            y: 0,
            ease: "power2.out",
            duration: 2,
          },
          0
        )
        .fromTo(
          blocksRef.value,
          { y: 300 },
          {
            y: 0,
            ease: "power2.out",
            duration: 2,
          },
          1
        );

      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: mainContainerRef.value,
          start: "top top",
          end: "+=350%",
          scrub: 1.5,
          pin: true,
          toggleActions: "play none none reverse",
          onUpdate: (self) => {
            if (self.direction === 1) scrollDir.value = "down";
            else scrollDir.value = "up";
          },
        },
      });

      tl.to(dupBenefitsRef.value, {
        clipPath: md
          ? "circle(12% at 60% 70%)"
          : lg
            ? "circle(12% at 77% 70%)"
            : xl
              ? "circle(12% at 80% 70%)"
              : "circle(12% at 80% 65%)",
      })
        .to(circleBlockRef.value, { opacity: 0, x: 700 })
        .to(
          benefitsRef.value,
          {
            x: !sm && "-100%",
            y: sm && "-100%",
          },
          "<"
        )
        .to(
          dupBenefitsRef.value,
          {
            clipPath: "circle(75% at 50% 50%)",
          },
          "<"
        )
        .to(
          nextTitleRef.value,
          {
            x: `${exactXposition}px`,
            y: `${exactYposition}px`,
            fontSize: sm ? 32 : md ? 32 : lg ? 48 : xl ? 56 : 64,
          },
          "<"
        )
        .to(
          stepsRef.value,
          {
            x: md ? "-65%" : lg ? "-55%" : xl ? "-45%" : "-38%",
            duration: 2.7,
          },
          "-=0.5"
        )
        .to(
          progressRef.value,
          {
            width: "100%",
            duration: 0.5,
            delay: 0.3,
            duration: 2,
            ease: "none",
            onUpdate() {
              const pg = Math.floor(this.progress() * 100);

              if (scrollDir.value === "down") {
                if (pg === 0) {
                  $gsap.to(counts[0], {
                    color: "#E7DFCF",
                    background: "#7E6B47",
                    duration: 0.2,
                  });
                } else if (pg === 50) {
                  $gsap.to(counts[1], {
                    color: "#E7DFCF",
                    background: "#7E6B47",
                    duration: 0.2,
                  });
                } else if (pg === 100) {
                  $gsap.to(counts[2], {
                    color: "#E7DFCF",
                    background: "#7E6B47",
                    duration: 0.2,
                  });
                }
              } else {
                if (pg === 0) {
                  $gsap.to(counts[0], {
                    color: "#08110B",
                    background: "#E7DFCF",
                    duration: 0.2,
                  });
                } else if (pg === 50) {
                  $gsap.to(counts[1], {
                    color: "#08110B",
                    background: "#E7DFCF",
                    duration: 0.2,
                  });
                } else if (pg !== 100) {
                  $gsap.to(counts[2], {
                    color: "#08110B",
                    background: "#E7DFCF",
                    duration: 0.2,
                  });
                }
              }
            },
          },
          "<"
        );
    }
  );
});
</script>

<style scoped lang="scss">
#mainContainer {
  height: auto;
  position: relative;
  background: url("/assets/images/benefit_BG.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    background: none;
  }

  #benefits,
  #dup-benefits {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    @include clamp-property("padding-inline", 1.25, 8.25);
    display: flex;
    align-items: center;

    @media screen and (max-width: 767px) {
      height: auto;
      background: url("/assets/images/benefit_BG.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      padding-block: 6.25rem;
    }

    .container,
    .dup-container {
      width: 100%;

      .title {
        @include clamp-property("font-size", 2.125, 4.5);
        @include clamp-property("line-height", 2.55, 4.95);
        @include clamp-property("margin-bottom", 5, 15.87);
        color: white;
      }

      .blocks {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: start;
        flex-wrap: wrap;
        @include clamp-property("gap", 2.5, 5);

        .block {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          height: 100%;
          @include clamp-property("gap", 0.5, 1.25);

          h3 {
            font-weight: 500;
            line-height: 120%;
            @include clamp-property("font-size", 1.5, 2.5);
            color: $gray-100;
            position: relative;
          }

          span {
            font-weight: 400;
            @include clamp-property("font-size", 0.875, 1);
            color: $gray-500;
            display: inline-block;
            position: relative;

            @media screen and (max-width: 1440px) {
              br {
                display: none;
              }
            }
          }
        }

        @media screen and (max-width: 768px) {
          grid-template-columns: repeat(1, 1fr);

          .block {
            br {
              display: none;
            }

            span {
              br {
                display: none;
              }
            }
          }
        }

        @media screen and (min-width: 481px) and (max-width: 1024px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }

  #dup-benefits {
    position: absolute;
    top: 0;
    left: 0;
    background: $yellow-50;
    clip-path: circle(0% at 80% 60%);
    overflow: hidden;
    will-change: clip-path, transform;
    padding-inline: 0;

    @media screen and (max-width: 767px) {
      display: none;
    }

    @media screen and (min-width: 768px) {
      clip-path: circle(0% at 60% 70%);
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      clip-path: circle(0% at 60% 70%);
    }

    @media screen and (min-width: 1025px) and (max-width: 1366px) {
      clip-path: circle(0% at 80% 70%);
    }

    @media screen and (min-width: 1367px) and (max-width: 1440px) {
      clip-path: circle(0% at 80% 65%);
    }

    @media screen and (min-width: 1441px) and (max-width: 1920px) {
      clip-path: circle(0% at 80% 65%);
    }

    @media screen and (min-width: 1921px) and (max-width: 2560px) {
      clip-path: circle(0% at 80% 60%);
    }

    @media screen and (min-width: 2561px) {
      clip-path: circle(0% at 80% 45%);
    }

    .dup-container {
      h3 {
        position: absolute;
        top: 0;
        font-weight: 500;
        line-height: 120%;
        text-wrap: nowrap;
        @include clamp-property("font-size", 1.5, 2.5);
        transition: font-size 0.3s;

        will-change: transform;
      }
    }
  }

  .dup-container {
    #steps-container {
      height: 100%;
      width: 100%;
      background: unset;

      @media screen and (min-width: 768px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

      }

      .content {
        position: relative;
        width: 100%;
        height: 100%;

        .hidden-title {
          @include flex-center;
          position: absolute;
          left: 50%;
          top: 10%;
          transform: translateX(-50%);

          @media screen and (min-width: 768px) {
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
          }

          h2 {
            font-size: 4rem;
            line-height: 4.8rem;
            letter-spacing: -0.04rem;
            font-weight: 500;
            text-align: center;
            text-wrap: nowrap;

            @media screen and (max-width: 768px) {
              font-size: 2rem;
              line-height: 2.4rem;
            }

            @media screen and (min-width: 769px) and (max-width: 1920px) {
              font-size: 3rem;
              line-height: 3.6rem;
            }
          }

          opacity: 0;
        }

        .steps {
          width: auto;
          position: absolute;
          top: 25%;
          transform: translateY(-50%);

          .benefitSteps {
            display: flex;
            align-items: center;
            justify-content: start;
            @include clamp-property("gap", 4, 7.5);
            margin-bottom: 2.5rem;
            position: relative;
            width: max-content;
          }

          .steps-line {
            position: relative;
            margin-inline: 7%;

            @media screen and (max-width: 768px) {
              width: 70%;
            }

            @media screen and (min-width: 769px) and (max-width: 1024px) {
              width: 73%;
            }

            @media screen and (min-width: 1025px) and (max-width: 1440px) {
              width: 71%;
            }

            @media screen and (min-width: 1441px) {
              width: 72%;
            }

            .counts {
              display: flex;
              justify-content: space-between;
              position: relative;
              z-index: 1;

              .count {
                display: flex;
                width: 3.75rem;
                height: 3.75rem;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                background: $yellow-100;
                border-radius: 50%;
                color: $green-900;
                font-family: $font-gloock;
                font-size: 1.375rem;
                font-weight: 400;
                line-height: 160%;
                letter-spacing: -0.01375rem;
              }
            }

            .back-line {
              width: 100%;
              height: 0.125rem;
              background: $green-50;
              position: absolute;
              top: 50%;
              left: 0%;

              .progress {
                width: 0%;
                height: 100%;
                background: $yellow-700;
              }
            }
          }
        }
      }
    }
  }

  #smallSteps {
    padding-top: 6.25rem;
    background: $yellow-50;
    overflow: hidden;

    h2 {
      color: $green-900;
      font-size: 2rem;
      font-weight: 500;
      line-height: 120%;
      letter-spacing: -0.02rem;
      text-align: center;
    }

    .steps-slider {
      margin-block: 2.5rem;
      display: flex;
      transition: transform 0.5s;
      width: 100%;

      .slide {
        width: 100%;
        flex-shrink: 0;
        padding-inline: 1.25rem;
      }
    }

    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-inline: 1.25rem;

      .nav-count {
        font-family: $font-gloock;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 110%;
        @include flex-center;
        flex-direction: row;
        gap: 0.25rem;

        .current {
          color: $green-900;
        }

        .total {
          color: $yellow-100;
        }
      }

      .nav-btn {
        @include flex-center;
        flex-direction: row;
        gap: 0.5rem;

        button {
          display: flex;
          padding: 0.875rem;
          justify-content: center;
          align-items: center;
          gap: 0.625rem;
          border-radius: 50%;
          border: none;
          background: $yellow-700;
          outline: none;
        }

        button:disabled {
          background: $yellow-100;
        }
      }
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
}
</style>
