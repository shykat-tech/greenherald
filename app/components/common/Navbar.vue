<template>
  <div class="navbar-container">
    <nav id="baseNav" :class="{ open: isMenuOpen }">
      <div class="menu">
        <button class="menu-btn" @click="isMenuOpen = !isMenuOpen">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
            :class="{ open: isMenuOpen }"
          >
            <path
              d="M4 5H20"
              stroke="#7E6B47"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#7E6B47"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 19H20"
              stroke="#7E6B47"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span
            :key="isMenuOpen"
            class="menu-btn-text"
            :style="{ color: isMenuOpen && 'white' }"
          >
            {{ isMenuOpen ? "Close" : "Menu" }}
          </span>
        </button>
      </div>
      <div class="btn-group" :class="{ open: isMenuOpen }">
        <button class="signin-btn" @click="goToSignin">Sign in</button>
      </div>
    </nav>

    <Transition name="fixedNav">
      <nav
        v-if="scrollDir === 'up' && scrollY >= 250"
        id="fixedNav"
        :class="{ open: isMenuOpen }"
        ref="fixedNavRef"
      >
        <div class="menu">
          <button class="menu-btn" @click="isMenuOpen = !isMenuOpen">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class=""
              :class="{ open: isMenuOpen }"
            >
              <path
                d="M4 5H20"
                stroke="#7E6B47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#7E6B47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 19H20"
                stroke="#7E6B47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span
              :key="isMenuOpen"
              class="menu-btn-text"
              :style="{ color: isMenuOpen && 'white' }"
            >
              {{ isMenuOpen ? "Close" : "Menu" }}
            </span>
          </button>
        </div>

        <NuxtLink to="/">
          <img
            src="/assets/images/logo.svg"
            class="nav-logo"
            :class="{ open: isMenuOpen }"
            alt="greenherald-logo"
            ref="navLogoRef"
          />
        </NuxtLink>

        <div class="btn-group" :class="{ open: isMenuOpen }">
          <button class="signin-btn" @click="goToSignin">Sign in</button>
          <button class="join-btn" @click="goToSignup">Join now</button>
        </div>
      </nav>
    </Transition>

    <Transition name="backDrop">
      <div v-if="isMenuOpen" class="backdrop" :class="{ open: isMenuOpen }" />
    </Transition>

    <Transition name="navMenu">
      <ul
        class="open-menu"
        @click="isMenuOpen = false"
        v-if="isMenuOpen"
        :class="{ open: isMenuOpen }"
      >
        <div class="container">
          <div class="bar">
            <NuxtLink to="/">
              <img
                src="/assets/images/logo.svg"
                class="nav-logo"
                :class="{ open: isMenuOpen }"
                alt="greenherald-logo"
                ref="navLogoRef"
              />
            </NuxtLink>
            <div class="menu">
              <button class="menu-btn" @click="isMenuOpen = !isMenuOpen">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="menu-icon"
                  :class="{ open: isMenuOpen }"
                >
                  <path
                    d="M4 5H20"
                    stroke="#7E6B47"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="#7E6B47"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 19H20"
                    stroke="#7E6B47"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span
                  :key="isMenuOpen"
                  class="menu-btn-text"
                  :style="{ color: isMenuOpen && 'white' }"
                >
                  {{ isMenuOpen ? "Close" : "Menu" }}
                </span>
              </button>
            </div>

            <div class="btn-group" :class="{ open: isMenuOpen }">
              <button class="signin-btn" @click="goToSignin">Sign in</button>
              <button class="join-btn" @click="goToSignup">Join now</button>
            </div>
          </div>
          <div class="content">
            <li class="link">
              <NuxtLink
                to="#upcoming-events"
                @click.prevent="$lenis.scrollTo('##upcoming-events')"
                >Events
              </NuxtLink>
            </li>
            <li class="link">
              <NuxtLink
                to="#storyContainer"
                @click.prevent="$lenis.scrollTo('#storyContainer')"
                >Stories
              </NuxtLink>
            </li>
            <li class="link">
              <NuxtLink
                to="#smallSteps"
                @click.prevent="$lenis.scrollTo('#smallSteps')"
                >How to Join
              </NuxtLink>
            </li>
            <li class="link">
              <NuxtLink to="#alumni" @click.prevent="$lenis.scrollTo('#alumni')"
                >The Board</NuxtLink
              >
            </li>
            <li class="link">
              <NuxtLink to="#about" @click.prevent="$lenis.scrollTo('#about')"
                >About Us</NuxtLink
              >
            </li>
            <li class="link">
              <NuxtLink
                to="#benefits"
                @click.prevent="$lenis.scrollTo('#benefits')"
                >Benefits</NuxtLink
              >
            </li>
            <li class="link">
              <NuxtLink
                to="#membership"
                @click.prevent="$lenis.scrollTo('#membership')"
                >Membership</NuxtLink
              >
            </li>

            <div class="btn-group link" :class="{ open: isMenuOpen }">
              <button class="signin-btn" @click="goToSignin">Sign in</button>
              <button class="join-btn" @click="goToSignup">Join now</button>
            </div>
          </div>
        </div>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, onUnmounted } from "vue";
import { useGsapCleanup } from "~/composables/useGsapCleanup";
const router = useRouter();

const goToSignup = () => {
  router.push({ path: "/auth/signup" });
};

const goToSignin = () => {
  router.push({ path: "/auth/signin" });
};

const scrollDir = ref("down");
const scrollY = ref(0);
const isMenuOpen = ref(false);

const { $gsap } = useNuxtApp();
const { add, cleanup } = useGsapCleanup();

onMounted(() => {
  let windowOffset = window.pageYOffset;

  const onScroll = () => {
    const y = window.pageYOffset;
    scrollY.value = y;

    scrollDir.value = y > windowOffset ? "down" : "up";
    windowOffset = y;
  };

  window.addEventListener("scroll", onScroll);

  // Animate menu links when menu opens
  watch(isMenuOpen, async (open) => {
    if (!open) return;

    await nextTick();
    const links = $gsap.utils.toArray(".open-menu .link");

    const tl = $gsap.timeline();
    add(tl); // Register timeline for cleanup

    tl.fromTo(
      links,
      { filter: "blur(20px)", opacity: 0 },
      {
        filter: "blur(0px)",
        opacity: 1,
        stagger: 0.1,
        ease: "power3.out",
        duration: 1,
      }
    );
  });

  // Cleanup on unmount
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
    cleanup();
  });
});
</script>

<style scoped lang="scss">
nav,
.bar {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  @include clamp-property("padding-inline", 1.25, 8.12);
  @include clamp-property("padding-block", 1, 1);
  display: flex;
  justify-content: end;
  align-items: center;

  .menu {
    display: flex;

    @media screen and (min-width: 1024px) {
      justify-content: start;
      flex: 1;
    }

    .menu-btn {
      background: transparent;
      border: none;
      @include flex-center;
      flex-direction: row;
      gap: 0.25rem;
      justify-content: end;

      .menu-btn-text {
        color: $yellow-700;
        @include clamp-property("font-size", 1, 1.1);
        font-style: normal;
        font-weight: 500;
        line-height: 110%;
      }
    }
  }

  a {
    @include flex-center;

    .nav-logo {
      @include clamp-property("width", 3, 3.5);
      transition: all 0.3s;
    }

    .nav-logo.open {
      filter: brightness(0) invert(1);
    }
  }

  .btn-group {
    flex: 1;
    display: flex;
    justify-content: end;
    gap: 0.5rem;

    @media screen and (max-width: 1024px) {
      display: none;
    }

    .signin-btn,
    .join-btn {
      @include clamp-property("font-size", 1, 1);
      font-style: normal;
      font-weight: 500;
      line-height: 110%;
      @include clamp-property("padding-inline", 0.5, 1.1);
      @include clamp-property("padding-block", 0.5, 0.62);
      border-radius: 2rem;
      border: 1px solid $yellow-700;
      transition: all 0.5s;
      text-transform: capitalize;
    }

    .signin-btn {
      background: transparent;
      color: $yellow-700;

      &:hover {
        background: $yellow-90;
        color: $yellow-900;
        border-color: $yellow-900;
      }
    }

    .join-btn {
      background: $yellow-700;
      color: $yellow-50;

      &:hover {
        background: $yellow-900;
        border-color: $yellow-900;
      }
    }
  }

  .btn-group.open {
    .signin-btn {
      border-color: $yellow-100;
      color: $yellow-100;

      &:hover {
        background: $yellow-200;
        color: $yellow-900;
        border-color: $yellow-200;
      }
    }

    .join-btn {
      border-color: $yellow-50;
      background: $yellow-50;
      color: $yellow-900;

      &:hover {
        background: $yellow-900;
        color: $yellow-50;
        border-color: $yellow-900;
      }
    }
  }
}

.menu-icon.open path {
  stroke: white;
  transition: all 0.5s;
  transform-origin: center;
  width: 30px;
}

.menu-icon.open path:nth-child(1) {
  transform: translate(-8px, 6px) rotate(45deg) scale(1.4);
}

.menu-icon.open path:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}

.menu-icon.open path:nth-child(3) {
  transform: translate(-8px, -8px) rotate(-45deg) scale(1.4);
}

#baseNav {
  transform: translateY(-100%);
}

#fixedNav {
  position: fixed;
  z-index: 999;
  background: $yellow-50;
  transition: all 0.3s;

  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    flex-direction: row-reverse;
  }
}

#fixedNav.open {
  background: $yellow-700;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;

  @media screen and (max-width: 1024px) {
    display: none;
  }
}

.open-menu {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  clip-path: inset(0 0 0 0);

  .container {
    background: $yellow-700;

    .bar {
      background: $yellow-700;
      position: relative;

      .nav-logo {
        display: none;
      }

      @media screen and (max-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;

        .menu {
          width: 100%;
          display: flex;
          flex: 0;
        }

        .nav-logo {
          display: block;
        }
      }
    }

    .content {
      width: 100%;
      @include clamp-property("padding-inline", 1.25, 36.38);
      @include clamp-property("padding-block", 2.5, 6.72);
      background: $yellow-700;

      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(4, auto);
      @include clamp-property("row-gap", 1.5, 2.5);
      column-gap: 6.25rem;

      .btn-group {
        display: none;
      }

      li {
        a {
          color: white;
          text-decoration: none;
          font-style: normal;
          @include clamp-property("font-size", 1.5, 2);
          font-weight: 400;
          line-height: normal;
          transition: all 0.5s;

          &:hover {
            color: $yellow-200;
          }
        }
      }

      @media screen and (max-width: 375px) {
        padding-top: 1rem;

        li {
          a {
            font-size: 1rem;
          }
        }
      }

      @media screen and (max-width: 1024px) {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        .btn-group {
          width: 100%;
          padding-top: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: start;
          gap: 1rem;

          .signin-btn,
          .join-btn {
            width: 100%;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 500;
            line-height: 130%;
            padding-inline: 1.5rem;
            padding-block: 1rem;
            border-radius: 2rem;
            border: 1px solid $yellow-700;
            transition: all 0.5s;
          }

          .signin-btn {
            background: none;
            color: $yellow-700;
          }

          .join-btn {
            background: $yellow-50;
            color: $yellow-50;

            &:hover {
              background: $yellow-900;
              border-color: $yellow-900;
            }
          }
        }

        .btn-group.open {
          .signin-btn {
            border-color: $yellow-100;
            color: $yellow-50;

            &:hover {
              background: $yellow-200;
              color: $yellow-900;
              border-color: $yellow-200;
            }
          }

          .join-btn {
            border-color: $yellow-50;
            background: $yellow-50;
            color: $yellow-900;

            &:hover {
              background: $yellow-900;
              color: $yellow-50;
              border-color: $yellow-200;
            }
          }

          @media screen and (max-width: 375px) {
            padding-top: 0;

            .signin-btn,
            .join-btn {
              padding-block: 0.7rem;
            }
          }
        }
      }
    }
  }
}

.fixedNav-enter-active,
.fixedNav-leave-active {
  transition: all 0.7s;
}

.fixedNav-enter-from,
.fixedNav-leave-to {
  transform: translateY(-100%);
}

.backDrop-enter-active,
.backDrop-leave-active {
  transition: all 0.7s;
}

.backDrop-enter-from,
.backDrop-leave-to {
  opacity: 0;
}

.navMenu-enter-active,
.navMenu-leave-active {
  transition: clip-path 0.7s cubic-bezier(0, -0.01, 0.43, 0.99);
}

.navMenu-enter-from,
.navMenu-leave-to {
  // display: none;
  clip-path: inset(0 0 100% 0);
}
</style>
