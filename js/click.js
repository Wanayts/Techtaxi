document.addEventListener("DOMContentLoaded", function () {

  const dropdown = document.querySelector(".dropdown-hover");
  const link = dropdown.querySelector("a");
  const menu = dropdown.querySelector(".hover-menu");
  const navbarCollapse = document.getElementById("mainNav");

  function mobileDropdownHandler(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: true});
      navbarCollapse.addEventListener("shown.bs.collapse", function handler() {
        menu.classList.toggle("show-menu");
        navbarCollapse.removeEventListener("shown.bs.collapse", handler);
      });
    } else {
      menu.classList.toggle("show-menu");
    }
  }

  // Only attach click handler if screen is mobile
  function attachDropdown() {
    if (window.innerWidth < 992) {
      link.addEventListener("click", mobileDropdownHandler);
    } else {
      link.removeEventListener("click", mobileDropdownHandler);
      menu.classList.remove("show-menu"); // reset desktop
    }
  }

  attachDropdown();

  // Re-check on window resize
  window.addEventListener("resize", attachDropdown);

  // Close dropdown when clicking outside
  document.addEventListener("click", function(e){
    if (!e.target.closest(".dropdown-hover")) {
      menu.classList.remove("show-menu");
    }
  });

});
