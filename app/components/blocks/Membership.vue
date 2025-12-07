<template>
  <section id="membership" ref="membershipRef">
    <h2 class="sectionTitle" ref="titleRef">Choose your membership</h2>
    <div class="container" ref="memContainerRef">
      <div class="plans">
        <div class="plan" v-for="plan in membershipPlans">
          <div class="plan--title">
            <h3>{{ plan.title }}</h3>
            <div class="plan--popular-badge" v-if="plan.isPopular">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C16.1421 22 19.5 18.6421 19.5 14.5C19.5 13.5 19.5 11.5 17.5 9C17.5 9 17.4004 11.8536 15.4262 11.4408C12.2331 10.7732 16.3551 4.50296 10.5 2C10.5 7 4.5 8.5 4.5 14.5C4.5 18.6421 7.85786 22 12 22Z"
                  stroke="#DAAC5E" stroke-width="1.5" stroke-linejoin="round" />
                <path
                  d="M12 19.0011C13.933 19.0011 15.5 16.9864 15.5 14.5011C12.3 15.7011 11.1667 12.9379 11 11C9.55426 11.5532 8.5 13.8256 8.5 15C8.5 17.4853 10.067 19.0011 12 19.0011Z"
                  stroke="#DAAC5E" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
              <span>Popular</span>
            </div>
          </div>

          <span class="plan--desc">{{ plan.planDesc }}</span>

          <!-- border-dashed -->
          <div class="dashed-border" />

          <!-- package details -->
          <div class="plan--package">
            <h3 class="plan--price">
              {{ Number(plan.price).toLocaleString() }}&nbsp;{{ plan.currency }}
              <span v-if="plan.package === 'yearly'">/Year</span>
            </h3>

            <ul class="plan--key-points">
              <li v-for="points in plan.keyPoints">
                <div class="ellipse" />
                <span>{{ points }}</span>
              </li>
            </ul>
          </div>

          <!-- Join Button -->
          <CommonPrimaryButton><span>Join as {{ plan.title }} Member</span></CommonPrimaryButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
const { $gsap } = useNuxtApp();

const membershipRef = ref(null);
const memContainerRef = ref(null);
const titleRef = ref(null);


const membershipPlans = [
  {
    title: "Monthly",
    isPopular: false,
    planDesc:
      "Perfect for alumni who want to stay involved, attend events, and remain part of our growing global family — one year at a time.",
    price: 1000,
    currency: "BDT",
    package: "yearly",
    keyPoints: [
      "Invitations to alumni reunions and networking events",
      "Access to the online alumni portal & directory",
      "Monthly newsletters and school updates",
      "Eligibility for alumni-only programs & discounts",
    ],
    joinLink: "/",
  },
  {
    title: "Yearly",
    isPopular: false,
    planDesc:
      "Perfect for alumni who want to stay involved, attend events, and remain part of our growing global family — one year at a time.",
    price: 3000,
    currency: "BDT",
    package: "yearly",
    keyPoints: [
      "Invitations to alumni reunions and networking events",
      "Access to the online alumni portal & directory",
      "Monthly newsletters and school updates",
      "Eligibility for alumni-only programs & discounts",
    ],
    joinLink: "/",
  },
  {
    title: "Lifetime",
    isPopular: true,
    planDesc:
      "Perfect for alumni who want to stay involved, attend events, and remain part of our growing global family — one year at a time.",
    price: 300000,
    currency: "BDT",
    package: "lifetime",
    keyPoints: [
      "Invitations to alumni reunions and networking events",
      "Access to the online alumni portal & directory",
      "Monthly newsletters and school updates",
      "Eligibility for alumni-only programs & discounts",
    ],
    joinLink: "/",
  },
];

onMounted(() => {
  const plans = $gsap.utils.toArray(".plan");

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: membershipRef.value,
      start: "top 80%",
      end: "top top",
      scrub: 1.5,
    }
  })

  tl.fromTo(titleRef.value,
    { y: 500 },
    {
      y: 0,
      ease: "power2.out",
      duration: 2
    },
    0
  ).fromTo(plans,
    { y: 500 },
    {
      y: 0,
      ease: "power2.out",
      duration: 2,
      stagger: 0.3
    }, 1
  );
});
</script>

<style scoped lang="scss">
#membership {
  width: 100vw;
  @include clamp-property("padding-inline", 1.25, 17);
  @include clamp-property("padding-block", 6.25, 8.05);

  .sectionTitle {
    @include clamp-property("font-size", 2, 4);
    @include clamp-property("margin-bottom", 2.5, 5);
    font-weight: 500;
    line-height: 110%;
    text-align: center;
  }

  .container {
    width: 100%;

    .plans {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      @include clamp-property("gap", 1, 2.5);

      @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column-reverse;
      }

      .plan {
        background: $green-500;
        @include clamp-property("border-radius", 1.25, 2);
        @include clamp-property("padding-inline", 2, 4);
        @include clamp-property("padding-block ", 2, 3.12);

        .plan--title {
          display: flex;
          align-items: center;
          gap: 8px;
          @include clamp-property("margin-bottom", 0.64, 1);

          h3 {
            font-weight: 550;
            @include clamp-property("font-size", 1.5, 2.5);
            line-height: 110%;
            color: $gray-100;
          }

          .plan--popular-badge {
            @include flex-center;
            gap: 4px;
            @include clamp-property("padding-inline", 0.64, 1);
            @include clamp-property("padding-block", 0.32, 0.5);
            @include clamp-property("border-radius", 1.03, 1.62);
            flex-direction: row;

            background: #435347;
            color: $gray-100;

            span {
              @include clamp-property("font-size", 0.75, 1.125);
              font-weight: 400;
            }
          }
        }

        .plan--desc {
          @include clamp-property("font-size", 0.875, 1);
          font-weight: 400;
          line-height: 150%;
          color: #b6bcb8;
        }

        .dashed-border {
          @include clamp-property("margin-top", 1.91, 3);
          @include clamp-property("margin-bottom", 2.54, 4);
          border: 1px dashed $green-100;
        }

        .plan--package {
          .plan--price {
            font-family: $font-gloock;
            @include clamp-property("font-size", 2, 3);

            line-height: 110%;
            color: $gray-100;
            margin-bottom: 24px;
            font-weight: 400;

            span {
              @include clamp-property("font-size", 1, 1.125);
              line-height: 160%;
              letter-spacing: -1%;
              font-weight: 400;
              font-family: $font-manrope;
            }
          }

          .plan--key-points>*+* {
            margin-top: 8px;
          }

          .plan--key-points {
            @include clamp-property("margin-bottom", 2.38, 3.75);

            li {
              display: flex;
              align-items: center;
              gap: 10px;
              color: $green-50;

              .ellipse {
                width: 8px;
                height: 8px;
                background: $green-50;
                border-radius: 50%;
                flex-shrink: 0;
              }

              span {
                @include clamp-property("font-size", 0.875, 1.125);
                line-height: 150%;
              }
            }
          }
        }

        @media screen and (max-width: 769px) {
          .plan--title {
            .plan--popular-badge {
              flex-wrap: nowrap;
              flex-direction: row;
            }
          }
        }
      }
    }
  }
}
</style>
