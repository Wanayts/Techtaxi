document.addEventListener("DOMContentLoaded", function () {

  // Select the navbar collapse
  const navbarCollapse = document.getElementById("mainNav");

  // Select the dropdown
  const dropdown = document.querySelector(".dropdown-hover");
  const link = dropdown.querySelector("a");
  const menu = dropdown.querySelector(".hover-menu");

  // Only for mobile
  link.addEventListener("click", function(e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      e.stopPropagation();

      // Make sure the navbar collapse is open
      if (!navbarCollapse.classList.contains("show")) {
        // Open navbar first
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: true});
        // Wait for animation to finish, then toggle menu
        navbarCollapse.addEventListener("shown.bs.collapse", function handler() {
          menu.classList.toggle("show-menu");
          navbarCollapse.removeEventListener("shown.bs.collapse", handler);
        });
      } else {
        menu.classList.toggle("show-menu");
      }
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function(e){
    if (!e.target.closest(".dropdown-hover")) {
      menu.classList.remove("show-menu");
    }
  });

});
