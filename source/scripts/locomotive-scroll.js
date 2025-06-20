import LocomotiveScroll from "locomotive-scroll";

document.addEventListener("astro:page-load", () => {
  const locomotiveScroll = new LocomotiveScroll();
});

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // пока так отматываю скролл обратно вверх при перезагрузке страницы,
                                                          // при навигации вроде и так в начало сбрасывается
});
