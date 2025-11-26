<template>
  <section id="alumni">
    <div class="float-bg">
      <img src="/assets/images/alumni_BG.png" alt="alumni-bg" />
    </div>
    <div class="container">
      <div class="content" ref="contentRef">
        <div class="section-title">
          <h2>Guiding the alumni community</h2>
          <CommonPrimaryButton>View All</CommonPrimaryButton>
        </div>

        <div class="members" ref="membersRef">
          <div class="member" v-for="member in members">
            <div class="img-container">
              <img :src="member.profile_img" :alt="member.name" />
            </div>
            <h3>{{ member.name }}</h3>
            <span>{{ member.role }}</span>
          </div>
        </div>
      </div>

      <div class="call-to-action" ref="CTARef">
        <h2>
          Ready to reconnect with your <br />
          school family?
        </h2>

        <CommonPrimaryButton>Join Now</CommonPrimaryButton>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const membersRef = ref(null);
const CTARef = ref(null);
const contentRef = ref(null);

const members = [
  {
    name: "Michael Brown",
    role: "Contributor",
    profile_img: "/members/pp1.png",
  },
  {
    name: "Alice Johnson",
    role: "Participant",
    profile_img: "/members/pp2.png",
  },
  { name: "Emily Davis", role: "Observer", profile_img: "/members/pp3.png" },
  { name: "John Smith", role: "Convener", profile_img: "/members/pp4.png" },
];

const { $gsap } = useNuxtApp();

onMounted(() => {
  const cards = $gsap.utils.toArray(".member", membersRef.value);

  $gsap.from(cards, {
    y: 200,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: membersRef.value,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  $gsap.to(CTARef.value, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: contentRef.value,
      start: "bottom bottom",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<style scoped lang="scss">
#alumni {
  width: 100vw;
  overflow: hidden;
  position: relative;
  @include clamp-property("padding-inline", 1.25, 8.73);
  @include clamp-property("padding-top", 6.25, 9.38);

  .float-bg {
    position: absolute;
    background: #214129;
    top: 0;
    left: 0;
    width: 100vw;
    height: 90%;
    z-index: -10;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    .content {
      width: 100%;
      @include clamp-property("margin-bottom", 5.02, 5.98);


      .section-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @include clamp-property("margin-bottom", 2.5, 5);


        h2 {
          @include clamp-property("font-size", 2.125, 4.5);
          line-height: 110%;
          letter-spacing: 2px;
          font-family: $font-gloock;
          color: #fcfcfc;
          font-weight: 400;
        }

        @media screen and (max-width: 768px) {
          flex-direction: column;
          align-items: center;
          gap: 1rem;

          h2 {
            width: 100%;
            text-align: center;
          }
        }
      }

      .members {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;

        @media screen and (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .member {
          .img-container {
            aspect-ratio: 4/5;
            background: white;
            border-radius: 24px;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          h3 {
            @include clamp-property("font-size", 1.25, 2.5);
            line-height: 120%;
            letter-spacing: -1%;
            color: #fcfcfc;
            margin-top: 16px;
            margin-bottom: 4px;
            font-weight: 500;
          }

          span {
            @include clamp-property("font-size", 0.875, 1);

            line-height: 160%;
            letter-spacing: -1%;
            color: #b6b6b6;
          }
        }
      }
    }

    .call-to-action {
      width: 100%;
      background: #142819;
      padding: 100px 0;
      border-radius: 28px;
      transform: translateY(50%);

      h2 {
        font-family: $font-gloock;
        @include clamp-property("font-size", 1.625, 4);

        line-height: 110%;
        font-weight: 400;
        text-align: center;
        margin-bottom: 16px;
        color: #fcfcfc;
      }

      span {
        font-size: 16px;
        color: #b6b6b6;
        line-height: 150%;
        text-align: center;
        display: block;
      }

      button {
        margin: auto;
        margin-top: 32px;
      }

      @media screen and (max-width: 768px) {
        padding: 24px;
      }
    }
  }
}
</style>
