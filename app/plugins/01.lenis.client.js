import { defineNuxtPlugin } from "#app";
import Lenis from "lenis";

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis();
  nuxtApp.provide("lenis", lenis);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 🚀 GO TO TOP ON PAGE RELOAD
  if (process.client) {
    window.onbeforeunload = () => {
      // Force scroll top before unloading
      window.scrollTo(0, 0);
    };

    // After reload, Lenis needs a tick before resetting
    window.addEventListener("load", () => {
      setTimeout(() => {
        lenis.scrollTo(0, {
          immediate: true,
        });
      }, 10);
    });
  }
});
