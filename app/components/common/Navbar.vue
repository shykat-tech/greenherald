<template>
    <div class="navbar-container">
        <nav id="baseNav" :class="{ open: isMenuOpen }">
            <div class="menu">
                <button class="menu-btn" @click="isMenuOpen = !isMenuOpen">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="menu-icon" :class="{ open: isMenuOpen }">
                        <path d="M4 5H20" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M4 12H20" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M4 19H20" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <Transition>
                        <span :key="isMenuOpen" class="menu-btn-text" :style="{ color: isMenuOpen && 'white' }">
                            {{ isMenuOpen ? "Close" : "Menu" }}
                        </span>
                    </Transition>
                </button>
            </div>
            <div class="btn-group" :class="{ open: isMenuOpen }">
                <button class="signin-btn" @click="goToSignup">Sign in</button>
            </div>
        </nav>

        <Transition name="fixedNav">
            <nav v-if="(scrollDir === 'up' && scrollY >= 250)" id="fixedNav" :class="{ open: isMenuOpen }"
                ref="fixedNavRef">
                <div class="menu">
                    <button class="menu-btn" @click="isMenuOpen = !isMenuOpen">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="menu-icon" :class="{ open: isMenuOpen }">
                            <path d="M4 5H20" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M4 12H20" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M4 19H20" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <Transition>
                            <span :key="isMenuOpen" class="menu-btn-text" :style="{ color: isMenuOpen && 'white' }">
                                {{ isMenuOpen ? "Close" : "Menu" }}
                            </span>
                        </Transition>
                    </button>
                </div>

                <NuxtLink to="/">
                    <img src="/assets/images/logo.svg" class="nav-logo" :class="{ open: isMenuOpen }"
                        alt="greenherald-logo" ref="navLogoRef" />
                </NuxtLink>

                <div class="btn-group" :class="{ open: isMenuOpen }">
                    <button class="signin-btn" @click="goToSignup">Sign in</button>
                    <button class="join-btn" @click="goToSignup">Join now</button>
                </div>
            </nav>
        </Transition>

        <Transition name="navMenu">
            <ul class="open-menu" v-if="isMenuOpen" :class="{ open: isMenuOpen }">
                <div class="bar">
                    <NuxtLink to="/">
                        <img src="/assets/images/logo.svg" class="nav-logo" :class="{ open: isMenuOpen }"
                            alt="greenherald-logo" ref="navLogoRef" />
                    </NuxtLink>
                    <div class="menu">
                        <button class="menu-btn" @click="isMenuOpen = !isMenuOpen">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="menu-icon" :class="{ open: isMenuOpen }">
                                <path d="M4 5H20" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M4 12H20" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M4 19H20" stroke="#7E6B47" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <Transition>
                                <span :key="isMenuOpen" class="menu-btn-text" :style="{ color: isMenuOpen && 'white' }">
                                    {{ isMenuOpen ? "Close" : "Menu" }}
                                </span>
                            </Transition>
                        </button>
                    </div>


                    <div class="btn-group" :class="{ open: isMenuOpen }">
                        <button class="signin-btn" @click="goToSignup">Sign in</button>
                        <button class="join-btn" @click="goToSignup">Join now</button>
                    </div>
                </div>
                <div class="content">
                    <li class="link">
                        <NuxtLink to="#">Events</NuxtLink>
                    </li>
                    <li class="link">
                        <NuxtLink to="#">Stories</NuxtLink>
                    </li>
                    <li class="link">
                        <NuxtLink to="#">How to Join</NuxtLink>
                    </li>
                    <li class="link">
                        <NuxtLink to="#">The Board</NuxtLink>
                    </li>
                    <li class="link">
                        <NuxtLink to="#">About Us</NuxtLink>
                    </li>
                    <li class="link">
                        <NuxtLink to="#">Benefits</NuxtLink>
                    </li>
                    <li class="link">
                        <NuxtLink to="#">Membership</NuxtLink>
                    </li>

                    <div class="btn-group link" :class="{ open: isMenuOpen }">
                        <button class="signin-btn" @click="goToSignup">Sign in</button>
                        <button class="join-btn" @click="goToSignup">Join now</button>
                    </div>
                </div>
            </ul>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, onUnmounted } from 'vue';
import { useGsapCleanup } from '~/composables/useGsapCleanup';
const router = useRouter();

const goToSignup = () => {
    router.push({ path: "/auth/signup" });
};

const scrollDir = ref('down');
const scrollY = ref(0);
const isMenuOpen = ref(false);

const { $gsap } = useNuxtApp();
const { add, cleanup } = useGsapCleanup();

onMounted(() => {
    let windowOffset = window.pageYOffset;

    const onScroll = () => {
        const y = window.pageYOffset;
        scrollY.value = y;

        scrollDir.value = y > windowOffset ? 'down' : 'up';
        windowOffset = y;
    };

    window.addEventListener("scroll", onScroll);

    // Animate menu links when menu opens
    watch(isMenuOpen, async (open) => {
        if (!open) return;

        await nextTick();
        const links = $gsap.utils.toArray('.open-menu .link');

        const tl = $gsap.timeline();
        add(tl); // Register timeline for cleanup

        tl.fromTo(
            links,
            { filter: "blur(20px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, stagger: 0.1, ease: "power3.out", duration: 1 }
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
    justify-content: space-between;
    align-items: center;

    .menu {
        flex: 1;

        .menu-btn {
            background: transparent;
            border: none;
            @include flex-center;
            flex-direction: row;
            gap: 0.25rem;

            .menu-btn-text {
                color: $yellow-700;
                font-size: 1rem;
                font-style: normal;
                font-weight: 500;
                line-height: 110%;
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
        }
    }

    a {
        @include flex-center;

        .nav-logo {
            width: 3rem;
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
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 110%;
            padding-inline: 1rem;
            padding-block: 0.62rem;
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
            border-color: $yellow-900;
            background: $yellow-900;
            color: $yellow-50;

            &:hover {
                background: $yellow-200;
                color: $yellow-900;
                border-color: $yellow-200;
            }
        }
    }

    @media screen and (max-width:1024px) {
        justify-content: end;
        flex-direction: row-reverse;

        .menu {
            flex: 0
        }
    }
}

#baseNav {
    transform: translateY(-100%);
}

#fixedNav {
    position: fixed;
    z-index: 998;
    background: $yellow-50;
    transition: all 0.3s;

    @media screen and (max-width:1024px) {
        justify-content: space-between;
        flex-direction: row-reverse;
    }
}

#fixedNav.open {
    background: $yellow-700;
}

.open-menu {
    height: 100dvh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    clip-path: inset(0 0 0 0);

    .bar {
        position: relative;
        background: $yellow-700;

        .nav-logo {
            display: none;
        }

        @media screen and (max-width: 1024px) {
            flex-direction: row;
            justify-content: space-between;

            .menu {
                width: 100%;
                display: flex;
            }

            .nav-logo {
                display: block;
            }
        }
    }

    .content {
        width: 100%;
        @include clamp-property("padding-inline", 1.25, 36.38);
        @include clamp-property("padding-block", 5, 6.72);
        background: $yellow-700;

        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(4, auto);
        @include clamp-property("row-gap", 1.25, 2.5);
        column-gap: 6.25rem;

        .btn-group {
            display: none;
        }

        li {
            a {
                color: white;
                text-decoration: none;
                @include clamp-property("font-size", 1.5, 2);
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                transition: all 0.5s;

                &:hover {
                    color: $yellow-200;
                }
            }
        }

        @media screen and (max-width:1024px) {
            height: 100svh;
            display: flex;
            flex-direction: column;
            justify-content: start;


            .btn-group {
                padding-top: 2.5rem;
                border-top: 1px solid $yellow-50;
                display: flex;
                justify-content: start;
                gap: 0.5rem;

                @media screen and (max-width:360px) {
                    padding-top: 1.25rem;
                }

                .signin-btn,
                .join-btn {
                    font-size: 1rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 110%;
                    padding-inline: 1rem;
                    padding-block: 0.62rem;
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
                    border-color: $yellow-900;
                    background: $yellow-900;
                    color: $yellow-50;

                    &:hover {
                        background: $yellow-200;
                        color: $yellow-900;
                        border-color: $yellow-200;
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

.navMenu-enter-active,
.navMenu-leave-active {
    transition: clip-path 1s cubic-bezier(0, -0.01, .43, .99);
}

.navMenu-enter-from,
.navMenu-leave-to {
    // display: none;
    clip-path: inset(0 0 100% 0);
}
</style>