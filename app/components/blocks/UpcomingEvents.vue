<template>
  <section id="upcoming-events" ref="upcomingEventsRef">
    <h1 class="heading font-heading" ref="titleRef">Upcoming events</h1>

    <div class="container" ref="containerRef">
      <div class="banner">
        <img src="/assets/images/events.png" alt="event-banner" />
      </div>

      <div class="content">
        <!-- Time -->
        <div class="time">
          <div class="timer">
            <span class="block">
              <span class="dynamic">{{ days }}</span>
              <span class="static">DAYS</span>
            </span>
            <span><svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 14V10.1325H3.98198V14H0ZM0.0180181 3.8675V0H4V3.8675H0.0180181Z" fill="#7E6B47" />
              </svg>
            </span>
            <span class="block">
              <span class="dynamic">{{ hours }}</span>
              <span class="static">HOURS</span>
            </span>
            <span><svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 14V10.1325H3.98198V14H0ZM0.0180181 3.8675V0H4V3.8675H0.0180181Z" fill="#7E6B47" />
              </svg>
            </span>

            <span class="block">
              <span class="dynamic">{{ minutes }}</span>
              <span class="static">MIN</span>
            </span>
            <span><svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 14V10.1325H3.98198V14H0ZM0.0180181 3.8675V0H4V3.8675H0.0180181Z" fill="#7E6B47" />
              </svg>
            </span>
            <span class="block">
              <span class="dynamic">{{ seconds }}</span>
              <span class="static">SEC</span>
            </span>
          </div>
        </div>

        <!-- Event Details -->
        <div class="event-details">
          <!-- Event Title -->
          <div class="title">
            <h2><strong>Global Alumni Reunion 2025</strong></h2>
            <span>Relive the yearbook memories, reconnect with classmates, and
              celebrate our legacy.</span>
          </div>

          <!-- Venue details -->
          <div class="date-venue">
            <div class="item">
              <div class="head">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.1 1.25C8.63848 1.25 9.075 1.68754 9.075 2.22727V3.21284C9.6529 3.20453 10.2784 3.20453 10.9537 3.20454H13.0463C13.7216 3.20453 14.3471 3.20453 14.925 3.21284V2.22727C14.925 1.68754 15.3615 1.25 15.9 1.25C16.4385 1.25 16.875 1.68754 16.875 2.22727V3.29947C17.0513 3.31556 17.221 3.33437 17.3843 3.35638C18.5544 3.51407 19.5397 3.85141 20.3221 4.63573C21.1046 5.42004 21.4412 6.40758 21.5985 7.58045C21.75 8.71014 21.75 10.1975 21.75 11.9796C21.75 12.518 21.3135 12.9545 20.775 12.9545C20.2365 12.9545 19.8 12.5385 19.8 12C19.8 11.1378 19.7996 10.3958 19.7862 9.75H4.21386C4.20045 10.3958 4.20001 11.1378 4.20001 12V13.9545C4.20001 15.8249 4.20208 17.1294 4.3341 18.1137C4.46235 19.0698 4.69693 19.5761 5.05673 19.9367C5.41652 20.2974 5.92166 20.5325 6.87557 20.6611C7.85752 20.7934 9.15897 20.7955 11.025 20.7955C11.5647 20.7955 11.975 21.233 11.975 21.7727C11.975 22.3125 11.5375 22.75 10.9977 22.75C9.21986 22.75 7.74279 22.75 6.61573 22.5982C5.44559 22.4405 4.46035 22.1031 3.67786 21.3188C2.89537 20.5345 2.5588 19.547 2.40148 18.3741C2.24996 17.2444 2.24998 15.8081 2.25 14.0261V11.9285C2.24998 10.1465 2.24996 8.71012 2.40148 7.58045C2.5588 6.40758 2.89537 5.42004 3.67786 4.63573C4.46035 3.85141 5.44559 3.51407 6.61573 3.35638C6.77902 3.33437 6.94874 3.31556 7.125 3.29947V2.22727C7.125 1.68754 7.56152 1.25 8.1 1.25Z"
                    fill="#A2895B" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM17.75 16.2656C17.75 15.8514 17.4142 15.5156 17 15.5156C16.5858 15.5156 16.25 15.8514 16.25 16.2656V17.9988C16.25 18.2716 16.3982 18.523 16.6369 18.6551L17.904 19.3562C18.2664 19.5567 18.7228 19.4255 18.9233 19.0631C19.1239 18.7006 18.9926 18.2442 18.6302 18.0437L17.75 17.5567V16.2656Z"
                    fill="#A2895B" />
                </svg>

                <strong>Event Date</strong>
              </div>
              <span>Nov 30, 2025</span>
            </div>
            <div class="item">
              <div class="head">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13.5942 16.9967C15.1422 16.8628 16.6507 9.26482 15.7078 8.33055C14.5036 7.13731 6.49595 9.45337 7.02507 10.8533C7.22489 11.382 8.23414 11.7159 10.2526 12.3836C11.0471 12.6465 11.3476 12.9349 11.6175 13.7361C11.6646 13.876 11.7157 14.0678 11.7745 14.2889C12.057 15.3511 12.5194 17.0896 13.5942 16.9967Z"
                    fill="#A2895B" />
                </svg>

                <strong>Event Venue</strong>
              </div>
              <span>Banani, Dhaka</span>
            </div>
            <div class="item">
              <div class="head">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.1 1.25C8.63848 1.25 9.075 1.68754 9.075 2.22727V3.21284C9.6529 3.20453 10.2784 3.20453 10.9537 3.20454H13.0463C13.7216 3.20453 14.3471 3.20453 14.925 3.21284V2.22727C14.925 1.68754 15.3615 1.25 15.9 1.25C16.4385 1.25 16.875 1.68754 16.875 2.22727V3.29947C17.0513 3.31556 17.221 3.33437 17.3843 3.35638C18.5544 3.51407 19.5397 3.85141 20.3221 4.63573C21.1046 5.42004 21.4412 6.40758 21.5985 7.58045C21.75 8.71014 21.75 10.1975 21.75 11.9796C21.75 12.518 21.3135 12.9545 20.775 12.9545C20.2365 12.9545 19.8 12.5385 19.8 12C19.8 11.1378 19.7996 10.3958 19.7862 9.75H4.21386C4.20045 10.3958 4.20001 11.1378 4.20001 12V13.9545C4.20001 15.8249 4.20208 17.1294 4.3341 18.1137C4.46235 19.0698 4.69693 19.5761 5.05673 19.9367C5.41652 20.2974 5.92166 20.5325 6.87557 20.6611C7.85752 20.7934 9.15897 20.7955 11.025 20.7955C11.5647 20.7955 11.975 21.233 11.975 21.7727C11.975 22.3125 11.5375 22.75 10.9977 22.75C9.21986 22.75 7.74279 22.75 6.61573 22.5982C5.44559 22.4405 4.46035 22.1031 3.67786 21.3188C2.89537 20.5345 2.5588 19.547 2.40148 18.3741C2.24996 17.2444 2.24998 15.8081 2.25 14.0261V11.9285C2.24998 10.1465 2.24996 8.71012 2.40148 7.58045C2.5588 6.40758 2.89537 5.42004 3.67786 4.63573C4.46035 3.85141 5.44559 3.51407 6.61573 3.35638C6.77902 3.33437 6.94874 3.31556 7.125 3.29947V2.22727C7.125 1.68754 7.56152 1.25 8.1 1.25Z"
                    fill="#A2895B" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM17.75 16.2656C17.75 15.8514 17.4142 15.5156 17 15.5156C16.5858 15.5156 16.25 15.8514 16.25 16.2656V17.9988C16.25 18.2716 16.3982 18.523 16.6369 18.6551L17.904 19.3562C18.2664 19.5567 18.7228 19.4255 18.9233 19.0631C19.1239 18.7006 18.9926 18.2442 18.6302 18.0437L17.75 17.5567V16.2656Z"
                    fill="#A2895B" />
                </svg>

                <strong>Registration closes</strong>
              </div>
              <span>Nov 27, 2025</span>
            </div>
          </div>

          <!-- Buttons -->
          <div class="btn-group">
            <CommonPrimaryButton @click="globalStore.openModal('alumniConfirmation')">Register Now</CommonPrimaryButton>
            <!-- <CommonPrimaryButton variant="secondary" @click="globalStore.openModal('alumniConfirmation')">View Details
            </CommonPrimaryButton> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const { $gsap } = useNuxtApp();
const globalStore = useGlobalStore();
const { add, cleanup } = useGsapCleanup();

// Refs
const upcomingEventsRef = ref(null);
const titleRef = ref(null);
const containerRef = ref(null);

// Countdown state
const days = ref("00");
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

const date = "2025-12-30T00:00:00";
let countdown;
let mm; // matchMedia instance

onMounted(() => {
  // Start countdown
  countdown = useCountdown(date, (values) => {
    days.value = values.days;
    hours.value = values.hours;
    minutes.value = values.minutes;
    seconds.value = values.seconds;
  });
  countdown.start();

  // GSAP MatchMedia
  mm = $gsap.matchMedia();

  mm.add(
    {
      isMobile: "(max-width: 480px)",
      isTablet: "(min-width: 481px) and (max-width: 768px)",
      isDesktop: "(min-width: 769px)",
    },
    (context) => {
      const { isMobile } = context.conditions;

      // ScrollTrigger timeline
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: upcomingEventsRef.value,
          start: "-30% 80%",
          end: "top top",
          scrub: 1.5,
        },
      });

      add(tl); // Track timeline + its ScrollTrigger

      tl.fromTo(
        titleRef.value,
        { y: 500 },
        { y: 0, ease: "power2.out", duration: 2 },
        0
      ).fromTo(
        containerRef.value,
        { y: 500 },
        { y: 0, ease: "power2.out", duration: 2 },
        1
      );
    }
  );
});

onBeforeUnmount(() => {
  cleanup();   // kills all tracked GSAP timelines, tweens, triggers
  mm?.kill();  // kills matchMedia context
});
</script>


<style lang="scss">
#upcoming-events {
  width: 100%;
  @include clamp-property("padding-top", 6.25, 8.875);
  @include clamp-property("padding-inline", 1.25, 17);
  position: relative;
  z-index: 5;

  .heading {
    text-align: center;
    @include clamp-property("font-size", 2.125, 4.5);
    @include clamp-property("margin-bottom", 2.5, 5);
    // transform: translateY(150%)
  }

  .container {
    @include flex-center;
    align-items: stretch;
    @include clamp-property("gap", 1, 3.75);
    // transform: translateY(50%);

    .banner {
      width: 48%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 28px;
        @include clamp-property("border-radius", 1.5, 2);

        object-fit: cover;
        object-position: center;
      }

      @media screen and (max-width: 1024px) {
        width: 100%;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
        height: 400px;
      }
    }

    .content {
      width: 52%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @include clamp-property("padding-block", 0, 1.5);

      @media screen and (max-width: 1024px) {
        width: 100%;
      }

      .time {
        width: 100%;

        .timer {
          @include flex-start;
          margin-bottom: 8px;
          gap: 24px;

          .block {
            width: 2.5rem;
            line-height: 150%;
            letter-spacing: -1%;
            display: flex;
            flex-direction: column;
            gap: 2.5px;
            align-items: center;
            flex-shrink: 0;

            .dynamic {
              font-weight: 600;
              @include clamp-property("font-size", 1.25, 2);

              color: $yellow-700;
            }

            .static {
              @include clamp-property("font-size", 0.75, 0.75);
              display: inline-block;
              text-align: center;
              width: 100%;
              font-weight: 400;
              color: $gray-900;
            }
          }
        }

        .last-date {
          @include clamp-property("font-size", 1, 1);
          color: $green-900;
        }
      }

      .event-details {
        margin-top: 1.75rem;

        .title {
          margin-bottom: 1.75rem;

          h2 {
            @include clamp-property("font-size", 1.625, 3);

            letter-spacing: -0.03rem;
            line-height: 110%;
            color: #0e0e0c;

            strong {
              font-weight: 550;
              width: 100%;
            }
          }

          span {
            display: inline-block;
            margin-top: 0.5rem;
            color: $gray-800;
            width: 70%;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: -0.01rem;
            @include clamp-property("font-size", 1, 1);
          }
        }

        .date-venue {
          display: flex;
          align-items: center;
          @include clamp-property("column-gap", 1, 5);
          @include clamp-property("row-gap", 1, 1);

          flex-wrap: wrap;

          @media screen and (max-width: 769px) {
            justify-content: space-between;
          }

          .item {
            @include clamp-property("font-size", 1, 1);

            .head {
              display: flex;
              align-items: center;
              gap: 6px;

              strong {
                font-weight: 600;
              }
            }

            span {
              font-weight: 400;
            }
          }
        }

        .btn-group {
          @include clamp-property("margin-top", 2.5, 4);

          display: flex;
          gap: 8px;

          .details-btn {
            @include button-default;
            background: none;

            .btn-icon-container {
              position: relative;
              display: flex;
              flex-direction: column;
              width: 20px;
              height: 20px;
              overflow: hidden;

              svg {
                position: absolute;
                transition: all 0.3s;
                flex-shrink: 0;
                margin-top: 1px;
              }

              svg:nth-child(1) {
                right: 20px;
              }

              svg path {
                stroke: black;
              }
            }

            &:hover {
              svg {
                transform: translateX(100%);
              }
            }
          }
        }
      }
    }
  }

}
</style>
