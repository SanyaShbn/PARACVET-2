(() => {
  let preloaderAnimationRunning = false;

function fadeOutPreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloaderAnimationRunning = true;
    // Ждём 3 секунды (локально, для тестов)
    setTimeout(() => {
      preloader.style.transition = "opacity 0.5s ease";
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.remove();
        preloaderAnimationRunning = false;
      }, 500);
    }, 3000);
  }
}


  // Обработка полной загрузки страницы - запускаем плавное исчезновение.
  window.addEventListener("load", () => {
    fadeOutPreloader();
  });

  // При внутренних переходах, т. е. навигации (astro:page-load) - мгновенно убираем прелоадер,
  // но только если анимация еще не началась.
  document.addEventListener("astro:page-load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader && !preloaderAnimationRunning) {
      preloader.remove();
    }
  });
})();
