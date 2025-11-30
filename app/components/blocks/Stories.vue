<template>
  <section id="stories" ref="storiesRef">
    <div class="container" ref="storiesContainerRef">
      <h2 class="s-title font-heading">Stories that Inspire</h2>

      <div class="swiper" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="slide in slides" :key="slide">
            <!-- Left Content -->
            <div class="content ">
              <div>
                <svg width="134" height="107" viewBox="0 0 134 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M105.191 106.899C99.641 106.899 94.7955 105.974 90.6548 104.124C86.6022 102.186 83.2544 99.6313 80.6114 96.4601C77.9684 93.2888 75.9862 89.5889 74.6647 85.3605C73.3432 81.1322 72.6824 76.6395 72.6824 71.8826C72.6824 62.3687 74.092 53.7798 76.9112 46.1158C79.8185 38.3638 83.5628 31.5367 88.144 25.6346C92.7252 19.6444 97.7909 14.5351 103.341 10.3067C108.98 5.99021 114.53 2.55465 119.992 0L123.824 5.15335C116.072 12.4649 109.905 18.9837 105.323 24.7096C100.742 30.3475 98.4517 35.0604 98.4517 38.8483C98.4517 41.1387 99.4208 42.9886 101.359 44.3981C103.297 45.8075 105.676 47.0848 108.495 48.23C111.226 49.2871 114.089 50.4764 117.085 51.7977C120.08 53.1191 122.811 54.8809 125.278 57.0832C127.833 59.1974 129.903 61.8842 131.489 65.1436C133.163 68.403 134 72.5432 134 77.5645C134 80.5596 133.383 83.7749 132.15 87.2105C131.005 90.646 129.199 93.8173 126.732 96.7243C124.353 99.6313 121.358 102.054 117.746 103.992C114.133 105.93 109.949 106.899 105.191 106.899ZM32.5089 106.899C26.9586 106.899 22.1131 105.974 17.9724 104.124C13.9198 102.186 10.572 99.6313 7.92899 96.4601C5.286 93.2888 3.30375 89.5889 1.98225 85.3605C0.660749 81.1322 0 76.6395 0 71.8826C0 62.3687 1.4096 53.7798 4.2288 46.1158C7.13609 38.3638 10.8803 31.5367 15.4615 25.6346C20.0427 19.6444 25.1085 14.5351 30.6588 10.3067C36.2972 5.99021 41.8475 2.55465 47.3097 0L51.142 5.15335C43.3892 12.4649 37.2222 18.9837 32.641 24.7096C28.0598 30.3475 25.7692 35.0604 25.7692 38.8483C25.7692 41.1387 26.7383 42.9886 28.6765 44.3981C30.6147 45.8075 32.9934 47.0848 35.8126 48.23C38.5437 49.2871 41.407 50.4764 44.4024 51.7977C47.3978 53.1191 50.1289 54.8809 52.5957 57.0832C55.1506 59.1974 57.2209 61.8842 58.8067 65.1436C60.4806 68.403 61.3176 72.5432 61.3176 77.5645C61.3176 80.5596 60.7009 83.7749 59.4675 87.2105C58.3222 90.646 56.5161 93.8173 54.0493 96.7243C51.6706 99.6313 48.6752 102.054 45.0631 103.992C41.451 105.93 37.2663 106.899 32.5089 106.899Z"
                    fill="#F2EDE4" />
                </svg>

                <p class="slide-text">
                  After graduating from S.F.X Greenherald International School
                  in 2008, Aarif Hasan turned his curiosity for problem-solving
                  into a thriving tech startup in Singapore.
                  <br />
                  Today, he mentors young entrepreneurs and often says his
                  leadership lessons started right here — in the school&apos;s
                  debate club.
                </p>

                <strong>
                  The best part of success is giving back to where it began.
                </strong>
              </div>
            </div>

            <!-- Right Image -->
            <div class="img-container ">
              <img src="/assets/images/testimonial1.png" alt="story1" class="slide-img" />
            </div>
          </div>
        </div>

        <!-- slider toggler -->
        <div class="slider-btn-group">
          <button @click="swiper.value.slidePrev()" class="swiper-button-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.49216 12L18.9922 12" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M11 6C11 6 5 10.4189 5 12C5 13.5812 11 18 11 18" stroke="#FCFCFC" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <div class="swiper-pagination"></div>

          <button @click="swiper.value.slideNext()" class="swiper-button-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5078 12L5.00781 12" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M13 6C13 6 19 10.4189 19 12C19 13.5812 13 18 13 18" stroke="#FCFCFC" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Swiper from "swiper";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

const { $gsap } = useNuxtApp();

const storiesRef = ref(null);
const storiesContainerRef = ref(null);
const swiper = ref(null);
const slides = ref(Array.from({ length: 3 }));

onMounted(() => {
  swiper.value = new Swiper(".swiper", {
    modules: [Pagination, Navigation, EffectFade],
    effect: "fade",        
    fadeEffect: {
      crossFade: true      
    },
    speed: 0,            
    spaceBetween: 100,      
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init() {
        animateSlide(this);
      },
      slideChangeTransitionStart() {
        animateSlide(this);
      },
    },
  });

  const mm = $gsap.matchMedia();

  mm.add(
    {
      isMobile: "(max-width: 480px)",
      isTablet: "(min-width: 481px) and (max-width: 768px)",
      isDesktop: "(min-width: 769px)",
    },
    (context) => {
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: "#gallery",
          start: "center top",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(storiesContainerRef.value, { y: 0 })
    }
  );
});
function animateSlide(swiperInstance) {
  const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
  if (!activeSlide) return;

  console.log(activeSlide);

  const text = activeSlide.querySelector(".content");
  const img = activeSlide.querySelector(".slide-img");



  $gsap.set( img, { x: 200, opacity: 0 });
  $gsap.set( text, { x: -200, opacity: 0 });

  const tl = $gsap.timeline();

  tl.to(text, { x: 0, opacity: 1, duration: 1, ease: "power3.out", })
  .to(img, { x: 0,opacity: 1, duration: 0.7, ease: "power3.out", }, "<");
}

</script>

<style scoped lang="scss">
#stories {
  width: 100vw;
  @include clamp-property("padding-inline", 1.25, 8.12);
  @include clamp-property("padding-block", 6.25, 11.56);
  // background: #142819;
  @include flex-center;

  .container {
    width: 100%;
    transform: translateY(50%);
    position: relative;
    height: 100%;

    .s-title {
      text-align: center;
      @include clamp-property("font-size", 2.125, 4.5);
      @include clamp-property("margin-bottom", 1.5, 5);
      line-height: 110%;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
    position: relative;

    .swiper-wrapper {
      .swiper-slide {
        display: flex;
        justify-content: space-between;
        align-items: stretch;

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

          @media screen and (max-width: 769px) {
            & {
              width: 100%;

              svg {
                width: 70px;
                height: 70px;
              }
            }
          }

          p {
            @include clamp-property("font-size", 1.125, 1.75);
            @include clamp-property("margin-bottom", 1.5, 5.5);
            line-height: 140%;
            text-wrap: wrap;
          }

          strong {
            @include clamp-property("font-size", 1.25, 2);
            font-weight: 450;
            line-height: 140%;
          }
        }

        .img-container {
          width: 35%;

          @media screen and (max-width: 769px) {
            & {
              width: 100%;
            }
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            @include clamp-property("border-radius", 1.5, 2.5);
          }
        }
      }
    }

    .slider-btn-group {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 30;
      @include flex-center;
      gap: 24px;
      height: auto;

      .swiper-pagination-horizontal {
        position: relative;
        @include flex-center;
        gap: 18px;
        margin-top: -4px;
      }

      @media screen and (max-width: 1920px) {
        position: relative;
        flex-direction: row;
        margin-top: 48px;
        justify-content: start;

        svg {
          width: 20px;
        }

        .swiper-pagination-horizontal {
          width: fit-content;
          flex-direction: row;
        }
      }
    }
  }
}
</style>
