import LocomotiveScroll from 'locomotive-scroll';

let scroll;

function initLocomotiveScroll() {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    
    if (!scrollContainer) {
        return;
    }

    if (scroll) {
        scroll.destroy();
    }

    scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        multiplier: 1,
    });
}

document.addEventListener("DOMContentLoaded", initLocomotiveScroll);

document.addEventListener("astro:page-load", () => {
    initLocomotiveScroll();
});
