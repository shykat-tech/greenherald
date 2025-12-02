<template>
  <section id="membership" ref="membershipRef">
    <div class="container" ref="memContainerRef">
      <h2 class="sectionTitle">Choose your membership</h2>

      <div class="plans">
        <div class="plan" v-for="plan in membershipPlans">
          <div class="plan--title">
            <h3>{{ plan.title }}</h3>
            <div class="plan--popular-badge" v-if="plan.isPopular">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C16.1421 22 19.5 18.6421 19.5 14.5C19.5 13.5 19.5 11.5 17.5 9C17.5 9 17.4004 11.8536 15.4262 11.4408C12.2331 10.7732 16.3551 4.50296 10.5 2C10.5 7 4.5 8.5 4.5 14.5C4.5 18.6421 7.85786 22 12 22Z"
                  stroke="#DAAC5E"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 19.0011C13.933 19.0011 15.5 16.9864 15.5 14.5011C12.3 15.7011 11.1667 12.9379 11 11C9.55426 11.5532 8.5 13.8256 8.5 15C8.5 17.4853 10.067 19.0011 12 19.0011Z"
                  stroke="#DAAC5E"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
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
          <CommonPrimaryButton @click="joinMembership"
            ><span>Join as {{ plan.title }} Member</span></CommonPrimaryButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
const { $gsap } = useNuxtApp();

const router = useRouter();

const membershipRef = ref(null);
const memContainerRef = ref(null);

const membershipPlans = [
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

const joinMembership = () => {
  // Logic to handle membership joining
  //if the user is not authenticated, redirect to login page
  const isAuthenticated = false; // Replace with actual authentication check
  if (!isAuthenticated) {
    router.push({ path: "/auth/signin" });
  } else {
    router.push({ path: "/auth/dashboard" });
  }
};
</script>

<style scoped lang="scss">
#membership {
  @include flex-center;

  .container {
    width: 100%;

    .sectionTitle {
      @include clamp-property("font-size", 2, 4);
      font-weight: 500;
      line-height: 110%;
      text-align: center;
      @include clamp-property("margin-bottom", 2.5, 5);
    }

    .plans {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      @include clamp-property("gap", 1, 2.5);

      @media screen and (max-width: 769px) {
        display: flex;
        flex-direction: column-reverse;
      }

      .plan {
        // @include clamp-property("width",, 41.75)
        max-width: 41.75rem;
        height: auto;
        background: #142819;
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
            color: #fcfcfc;
          }

          .plan--popular-badge {
            @include flex-center;
            gap: 4px;
            @include clamp-property("padding-inline", 0.64, 1);
            @include clamp-property("padding-block", 0.32, 0.5);
            @include clamp-property("border-radius", 1.03, 1.62);

            background: #435347;
            color: #fcfcfc;

            span {
              @include clamp-property("font-size", 0.125, 0.75);
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
          margin-top: 48px;
          margin-bottom: 64px;
          border: 1px dashed #626f65;
        }

        .plan--package {
          .plan--price {
            font-family: $font-gloock;
            @include clamp-property("font-size", 2, 3);

            line-height: 110%;
            color: #fcfcfc;
            margin-bottom: 24px;
            font-weight: 400;

            span {
              @include clamp-property("font-size", 0.397, 1.125);
              line-height: 160%;
              letter-spacing: -1%;
              font-weight: 400;
              font-family: $font-manrope;
            }
          }

          .plan--key-points > * + * {
            margin-top: 8px;
          }

          .plan--key-points {
            margin-bottom: 60px;

            li {
              display: flex;
              align-items: center;
              gap: 10px;
              color: #e8eae8;

              .ellipse {
                width: 8px;
                height: 8px;
                background: #e8eae8;
                border-radius: 50%;
                flex-shrink: 0;
              }

              span {
                font-size: 16px;
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

          .dashed-border {
            margin-top: 30px;
            margin-bottom: 40px;
          }

          .plan--package {
            .plan--key-points {
              margin-bottom: 38px;
            }
          }
        }
      }
    }
  }
}
</style>
