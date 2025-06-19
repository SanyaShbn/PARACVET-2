import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function animateSplitText(targetSelector = ".animated-text") {
  document.fonts.ready.then(() => {
    const target = document.querySelector(targetSelector);
    if (!target) return;

    const split = new SplitText(target, { type: "words" });
    gsap.set(split.words, { color: "#121315" });

    ScrollTrigger.create({
      trigger: target,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const total = split.words.length;

        split.words.forEach((word, i) => {
          const threshold = i / total;
          const ratio = gsap.utils.clamp(0, 1, (progress - threshold) * total);

          gsap.to(word, {
            color: gsap.utils.interpolate("#121315", "#808080", ratio),
            duration: 0.4,
            overwrite: true,
            ease: "power2.out",
          });
        });
      },
    });
  });
}
