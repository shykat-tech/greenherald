import { defineNuxtPlugin } from "#app";
import Lenis from "lenis";

export default defineNuxtPlugin((nuxtApp) => {
  // 🔒 Prevent user scrolling before Lenis is ready
  if (process.client) {
    document.documentElement.style.overflow = "hidden";
  }

  const lenis = new Lenis();

  lenis.stop()
  nuxtApp.provide("lenis", lenis);

  let ready = false;

  function raf(time) {
    lenis.raf(time);

    // 🔓 Unlock scroll once Lenis has completed its first tick
    if (!ready) {
      ready = true;
      document.documentElement.style.overflow = "";
    }

    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // 🚀 GO TO TOP ON PAGE RELOAD
  if (process.client) {
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
