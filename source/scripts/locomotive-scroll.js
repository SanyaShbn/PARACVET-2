import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    },
});

window.addEventListener("load", () => {
  locomotiveScroll.scrollTo("top", { duration: 0 }); // пока так отматываю скролл обратно вверх при перезагрузке страницы, 
                                                     // при навигации вроде и так в начало сбрасывается
});
