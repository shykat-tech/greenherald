import { defineNuxtPlugin } from "#app";
import Lenis from "lenis";

export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();

  const isHome = route.path === "/";   // ✅ Check homepage

  // 🔒 Lock scrolling before Lenis is ready — but ONLY for homepage
  if (import.meta.client && isHome) {
    document.documentElement.style.overflow = "hidden";
  }

  const lenis = new Lenis();
  nuxtApp.provide("lenis", lenis);

  // ⛔ Stop lenis only for homepage (to wait for GSAP animation)
  if (isHome) {
    lenis.stop();
  }

  let ready = false;

  function raf(time) {
    lenis.raf(time);

    if (!ready) {
      ready = true;

      // 🔓 Unlock scroll, but only if we locked it
      if (isHome) {
        document.documentElement.style.overflow = "";
      }
    }

    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // 🚀 GO TO TOP ON PAGE RELOAD (safe for all pages)
  if (import.meta.client) {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("load", () => {
      setTimeout(() => {
        lenis.scrollTo(0, { immediate: true });
      }, 0);
    });
  }
});
