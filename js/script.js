$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  let hamburger = document.querySelector(".hamburger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-navbar");
  let mainContentWrapper = document.querySelector(".main-content-wrapper");

  hamburger.addEventListener("click", () => {
    hamburger.style.cssText += "display: none";
    times.style.cssText += "display: block";
    mobileNav.style.cssText += "transform: translateX(0)";
    mainContentWrapper.style.cssText += "opacity: 0.3";
  });

  times.addEventListener("click", () => {
    times.style.cssText += "display: none";
    hamburger.style.cssText += "display: block";
    mobileNav.style.cssText += "transform: translateX(-100%)";
    mainContentWrapper.style.cssText += "opacity: 1";
  });
});
