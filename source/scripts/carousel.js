import gsap from "gsap";

export function initCarousel() {
  const track = document.getElementById("carousel-track");
  if (!track) return;

  const slideWidth = 407 + 20;
  const totalSlides = track.children.length;
  const totalWidth = slideWidth * totalSlides;

  gsap.set(track, { x: -(totalWidth / 3) });

  gsap.to(track, {
    x: `-=${totalWidth / 3}`,
    duration: 30,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => {
        const base = totalWidth / 3;
        return parseFloat(x) % base;
      }),
    },
  });
}
