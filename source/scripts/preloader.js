document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.opacity = "0";
    document.getElementById("main-container").style.opacity = "1";
    document.getElementById("main-container").style.transform = "translateY(0)";
    
    setTimeout(() => {
      document.getElementById("preloader").remove();
    }, 1000);
  }, 3000);
});
