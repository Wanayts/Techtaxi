document.addEventListener("DOMContentLoaded", function () {

  const dropdown = document.querySelector(".dropdown-hover");
  const menu = dropdown.querySelector(".hover-menu");

  dropdown.addEventListener("click", function(e){

    if (window.innerWidth < 991) {
      e.preventDefault();
      e.stopPropagation();

      menu.classList.toggle("show-menu");
    }

  });

});
