<template>
  <div id="mainContainer" ref="mainContainerRef">
    <section id="benefits" ref="benefitsRef">
      <div class="container" ref="containerRef">
        <h2 class="font-heading title">
          What&apos;s waiting for you <br />
          when you reconnect
        </h2>

        <div class="blocks">
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
            <h3>Simple to Join</h3>
            <span>Link up with alumni around the world for <br />
              friendship, mentorship, and professional growth.</span>
          </div>
        </div>
      </div>
    </section>

    <section id="dup-benefits" ref="dupBenefitsRef">
      <div class="dup-container" ref="dupContainerRef">
        <h2 class="font-heading title">
          What&apos;s waiting for you <br />
          when you reconnect
        </h2>

        <div class="blocks">
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

          <div class="block circleBlock" ref="titleBlockRef">
            <h3 ref="nextTitleRef">
              Simple to
              <!-- <br /> -->
              Join
            </h3>
            <span ref="blockSpanRef">Link up with alumni around the world for <br />
              friendship, mentorship, and professional growth.</span>
          </div>
        </div>

        <div id="steps-container" ref="stepsContainerRef">
          <div class="content">
            <div class="hidden-title">
              <h2 ref="hiddenTitleRef">Simple to Join</h2>
            </div>

            <div class="steps" ref="stepsRef">
              <div class="benefitSteps">
                <BenefitsStep />
                <BenefitsStep />
                <BenefitsStep />
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
        <div class="slide">
          <BenefitsStep />
        </div>
        <div class="slide">
          <BenefitsStep />
        </div>
        <div class="slide">
          <BenefitsStep />
        </div>
      </div>

      <div class="navigation">
        <div class="count">
          <span ref="currentNumRef" class="current">0{{ activeSlide }}</span>
          <span>-</span>
          <span class="total">0{{ stepCards.length }}</span>
        </div>

        <div class="nav-btn">
          <button @click="prevSlide">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.80544 8H13.6055" stroke="white" stroke-width="1.2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M7.19531 3.1998C7.19531 3.1998 2.39531 6.73492 2.39531 7.9998C2.39531 9.26476 7.19531 12.7998 7.19531 12.7998"
                stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>
          <button @click="nextSlide"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
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
const blockSpanRef = ref(null);
const titleBlockRef = ref(null);
const progressRef = ref(null);
const sliderWrapper = ref(null);
const currentNumRef = ref(null);


// states
const count = ref(0);
const scrollDir = ref("down");

const stepCards = ref([
  { title: "Card 1", content: "Content 1" },
  { title: "Card 2", content: "Content 2" },
  { title: "Card 3", content: "Content 3" },
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
  ).fromTo(desc,
    {
      xPercent: 50,
      opacity: 0
    },
    {
      xPercent: 0, opacity: 1,
      duration: 0.3, ease: "power2.out"
    }, "-=0.1"
  );
};

const nextSlide = () => {
  if (currentIndex < stepCards.value.length - 1) currentIndex++;
  else currentIndex = 0; // loop
  goToSlide(currentIndex);
};

const prevSlide = () => {
  if (currentIndex > 0) currentIndex--;
  else currentIndex = stepCards.value.length - 1; // loop
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

      const hiddenTitlePosition = hiddenTitleRef.value.getBoundingClientRect();
      stepsRef.value.style.transform = `translateX(100%)`;

      const nextTitlePosition = nextTitleRef.value.getBoundingClientRect();

      const exactYposition = nextTitlePosition.y - hiddenTitlePosition.y;
      const exactXposition = nextTitlePosition.x - hiddenTitlePosition.x;

      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: mainContainerRef.value,
          start: "top top",
          end: "250%",
          scrub: true,
          pin: true,
          toggleActions: "play none none reverse",
          onUpdate: (self) => {
            if (self.direction === 1) scrollDir.value = "down";
            else scrollDir.value = "up";
          },
        },
      });

      tl.to(dupBenefitsRef.value, {
        clipPath: "circle(12% at 75% 65%)",
      })
        .to(circleBlockRef.value, { opacity: 0 })
        .to(benefitsRef.value, { x: !sm && "-100%", y: sm && "-100%" }, "<")
        .to(
          dupBenefitsRef.value,
          {
            clipPath: "circle(85% at 43% 50%)",
          },
          "<"
        )
        .to(
          nextTitleRef.value,
          { x: sm ? `${Math.abs(exactXposition)}px` : `-${exactXposition}px`, y: `-${exactYposition}px`, fontSize: sm ? "32px" : md ? "40px" : lg ? "48px" : xl ? "56px" : "64px" },
          "<"
        )
        .to(blockSpanRef.value, { y: `-${exactYposition}px`, x: `-${exactXposition}px`, opacity: 0 }, "<")
        .to(stepsRef.value, {
          x: md ? "-60%" : lg ? "-60%" : xl ? "-40%" : "-40%",
          duration: 3,
          onUpdate() {
            const tweenProgress = this.progress();

            if (tweenProgress === 0) {
              count.value = 0;
            } else if (tweenProgress > 0.4 && tweenProgress < 0.5) {
              count.value = 1;
            } else if (tweenProgress === 1) {
              count.value = 2;
            }

          }
        }, "-=0.1")
        .to(
          progressRef.value,
          {
            width: "100%",
            duration: 0.5,
            // delay: 0.1,
            ease: "none",
            onUpdate() {
              const length = counts.length;
              if (scrollDir.value === "down") {
                $gsap.to(counts.slice(0, count.value + 1), {
                  color: "#E7DFCF",
                  background: "#7E6B47",
                  duration: 0.2
                });
              } else {
                $gsap.to([counts.slice(count.value - length)], {
                  color: "#08110B",
                  background: "#E7DFCF",
                  duration: 0.2
                });
              }
            }
          },
          "<"
        );
    })


});
</script>

<style scoped lang="scss">
#mainContainer {
  width: 100vw;
  height: auto;
  background: #f7f5f0;
  position: relative;
  background: url("/assets/images/benefit_BG.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 767px) {
    background: none;
  }

  #benefits,
  #dup-benefits {
    width: 100%;
    height: 100vh;
    @include clamp-property("padding-inline", 1.25, 8.25);
    @include clamp-property("padding-block", 6.25, 15.62);

    @media screen and (max-width: 767px) {
      height: auto;
      background: url("/assets/images/benefit_BG.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

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
            color: #fcfcfc;
            position: relative;
          }

          span {
            font-weight: 400;
            @include clamp-property("font-size", 0.875, 1);
            color: #e0e0e0;
            display: inline-block;
            position: relative;
          }
        }

        @media screen and (max-width: 768px) {
          grid-template-columns: repeat(1, 1fr);

          .block {
            br {
              display: none;
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
    background: #f7f5f0;
    clip-path: circle(0% at 80% 55%);

    @media screen and (max-width: 767px) {
      display: none;
    }

    @media screen and (min-width: 768px) {
      clip-path: circle(0% at 55% 60%);
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      clip-path: circle(0% at 55% 55%);
    }

    @media screen and (min-width: 1024px) and (max-width: 1366px) {
      clip-path: circle(0% at 80% 55%);
    }

    @media screen and (min-width: 1367px) and (max-width: 1440px) {
      clip-path: circle(0% at 80% 57%);
    }

    @media screen and (min-width: 1441px) and (max-width: 1920px) {
      clip-path: circle(0% at 80% 70%);
    }

    @media screen and (min-width: 1921px) and (max-width: 2580px) {
      clip-path: circle(0% at 80% 60%);
    }

    .dup-container {
      .title {
        opacity: 0;
      }

      .blocks {
        .block {
          opacity: 0;
        }

        .circleBlock {
          opacity: 1;
          mix-blend-mode: difference;
          display: flex;
          flex-direction: column;
          justify-content: end;
          position: relative;

          h3 {
            position: absolute;
            top: 0;
            font-weight: 500;
            line-height: 120%;
            text-wrap: nowrap;
            @include clamp-property("font-size", 1.5, 2.5);

            // @media screen and (max-width: 768px) {
            //   font-size: 2rem;
            //   line-height: 2.4rem;
            // }

            // @media screen and (min-width: 769px) and (max-width: 1920px) {
            //   font-size: 40px;
            //   line-height: 120%;

            // }
          }
        }
      }
    }
  }

  .dup-container {
    #steps-container {
      height: 100%;
      width: 100%;
      // @include clamp-property("padding-top", 4.69, 9.37);

      @media screen and (min-width: 768px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .content {
        // @include clamp-property("padding-top", 6.25, 9.37);
        position: relative;
        width: 100%;
        height: 100%;

        .hidden-title {
          @include flex-center;
          // @include clamp-property("margin-bottom", 2.5, 5);
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
          position: absolute;
          top: 25%;
          transform: translateY(-50%);

          .benefitSteps {
            display: flex;
            align-items: center;
            justify-content: center;
            @include clamp-property("gap", 4, 7.5);
            margin-bottom: 2.5rem;
          }

          .steps-line {
            position: relative;
            width: 72%;
            margin-left: 12rem;

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
                background: #e7dfcf;
                border-radius: 50%;
                color: #08110B;
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
              background: #E8EAE8;
              position: absolute;
              top: 50%;
              left: 0%;

              .progress {
                width: 0%;
                height: 100%;
                background: #7E6B47;
              }
            }
          }
        }
      }
    }
  }

  #smallSteps {
    padding-top: 6.25rem;
    background: #F7F5F0;
    overflow: hidden;

    h2 {
      color: #08110B;
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


      .count {
        font-family: $font-gloock;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 110%;
        @include flex-center;
        flex-direction: row;
        gap: 0.25rem;

        .current {
          color: #08110B;
        }

        .total {
          color: #E7DFCF;
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
          background: #7E6B47;
          outline: none;
        }

        button:disabled {
          background: #E7DFCF;

        }
      }
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
}
</style>
