document.addEventListener("DOMContentLoaded", function () {

  const industriesLink = document.querySelector(".dropdown-hover > a");

  if (!industriesLink) return;

  industriesLink.addEventListener("click", function (e) {

    if (window.innerWidth < 991) { // mobile only
      e.preventDefault();

      const menu = this.parentElement.querySelector(".hover-menu");

      if (menu) {
        menu.classList.toggle("show-menu");
      }

    }

  });

});
