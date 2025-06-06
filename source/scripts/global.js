// import anime from 'animejs';
import LocomotiveScroll from 'locomotive-scroll';

// Motion One
import { timeline,animate, stagger  } from "motion";
import { bounce, circOut } from "./easing";


document.addEventListener('astro:page-load', () => {
  const locomotiveScroll = new LocomotiveScroll();
 

  timeline(
    [
      ["#boxindicator", { y: -200 }, { easing: circOut, duration: 0.5, delay: 0.5 }],
      ["#boxindicator", { y: 0 }, { easing: bounce, duration: 1 }]
    ],
    { repeat: Infinity }
  );





});



