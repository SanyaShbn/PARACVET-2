import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const scrollEl = document.querySelector("#main-container");

  if (!scrollEl) return;

  const locoScroll = new LocomotiveScroll({
    el: scrollEl,
    smooth: true,
    multiplier: 1,
    class: "is-reveal",
  });

  locoScroll.on("scroll", () => {
    ScrollTrigger.update();
  });

  ScrollTrigger.scrollerProxy(scrollEl, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    scrollLeft(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.x;
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
});