
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".mobile-menu-toggle");
    const menu = document.querySelector(".mobile-menu");

    toggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  });

