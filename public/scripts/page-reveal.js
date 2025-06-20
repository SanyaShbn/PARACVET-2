(function () {
  if (!document.startViewTransition) return;

  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.createElement("div");
    overlay.id = "page-reveal";
    Object.assign(overlay.style, {
      position: "fixed",
      inset: 0,
      backgroundColor: "#fff",
      zIndex: 9999,
      pointerEvents: "none",
    });
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.transition =
        "transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)";
      overlay.style.transform = "translateY(0%)";
    });

    document.addEventListener("astro:page-load", () => {
      setTimeout(() => {
        overlay.style.transform = "translateY(-100%)";

        overlay.addEventListener(
          "transitionend",
          () => {
            overlay.remove();
          },
          { once: true },
        );
      }, 500);
    });
  });
})();
