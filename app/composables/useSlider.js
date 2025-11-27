import { gsap } from "gsap";
let inProgress = false;

export default function useSlider(data) {
  const compData = JSON.parse(JSON.stringify(data));

  const currentIndex = ref(0);
  const nextIndex = ref(1);
  const direction = ref(null);

  function currentSlide() {
    console.log("currentIndex", currentIndex.value);
    console.log("currentSlide", compData[currentIndex.value]);
    return compData[currentIndex.value];
  }

  function nextSlide() {
    return compData[nextIndex.value];
  }

  function next() {
    if (inProgress) return;
    inProgress = true;

    if (currentIndex.value < compData.length - 1) {
      currentIndex.value += 1;
      nextIndex.value = (currentIndex.value + 1) % compData.length;
      direction.value = "next";
    } else {
      currentIndex.value = 0;
      nextIndex.value = 1;
      direction.value = "next";
    }
  }

  function prev() {
    if (inProgress) return;
    inProgress = true;

    if (currentIndex.value > 0) {
      currentIndex.value -= 1;
      nextIndex.value =
        currentIndex.value - 1 >= 0
          ? currentIndex.value - 1
          : compData.length - 1;
      direction.value = "prev";
    } else {
      currentIndex.value = compData.length - 1;
      nextIndex.value = compData.length - 2;
      direction.value = "prev";
    }
  }

  function slideEnter(el, done) {
    const nextName = el.querySelector(".next-doc-name");
    const xPercent = direction.value === "next" ? 100 : -100;
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", onComplete: done },
    });
    tl.fromTo(el, { xPercent }, { duration: 1.2, xPercent: 0 }, "start").fromTo(
      nextName,
      { opacity: 0 },
      {
        duration: 1,
        opacity: 1,
        onComplete: () => {
          inProgress = false;
        },
      },
      "start+=0.1"
    );
  }

  function slideLeave(el, done) {
    const nextName = el.querySelector(".next-doc-name");
    const xPercent = direction.value === "next" ? -100 : 100;
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });
    tl.fromTo(
      el,
      { xPercent: 0, opacity: 1 },
      { duration: 1.2, xPercent },
      "start"
    ).fromTo(
      nextName,
      { opacity: 1 },
      { duration: 1, opacity: 0 },
      "start+=0.1"
    );
  }

  function slideInfoEnter(el, done) {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", onComplete: done },
    });
    const xPercent = direction.value === "next" ? 100 : -100;
    tl.fromTo(el, { opacity: 0 }, { duration: 1.2, opacity: 1 }, "start+=0.5");
  }

  function slideInfoLeave(el, done) {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });
    const xPercent = direction.value === "next" ? -100 : 100;
    tl.fromTo(el, { opacity: 1 }, { duration: 0.8, opacity: 0 }, "start");
  }

  return {
    currentSlide,
    next,
    prev,
    currentIndex,
    direction,
    slideEnter,
    slideLeave,
    nextSlide,
    slideInfoEnter,
    slideInfoLeave,
    nextIndex,
  };
}
