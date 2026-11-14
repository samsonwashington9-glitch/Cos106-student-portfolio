// Shared JavaScript: mobile navigation and current year.
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
  }

  document.querySelectorAll(".current-year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
});
