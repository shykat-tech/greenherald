import { defineNuxtPlugin } from "#app";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("gsap", gsap);
  nuxtApp.provide("ScrollTrigger", ScrollTrigger);
  nuxtApp.provide("SplitText", SplitText);

  if (import.meta.client) {
    const { $lenis } = useNuxtApp();
    if ($lenis) {
      $lenis.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          return arguments.length ? $lenis.scrollTo(value) : $lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });
    }
  }
});
