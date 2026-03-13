document.addEventListener('DOMContentLoaded', function() {
  const industriesLink = document.querySelector('.dropdown-hover > a');
  const navbar = document.querySelector('.navbar');

  industriesLink.addEventListener('click', function(e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      const menu = this.parentElement.querySelector('.hover-menu');

      // toggle class
      menu.classList.toggle('show-menu');
    }
  });

  // close if clicked outside navbar
  document.addEventListener('click', function(e) {
    if (window.innerWidth < 992) {
      const menu = industriesLink.parentElement.querySelector('.hover-menu');
      if (!navbar.contains(e.target)) {
        menu.classList.remove('show-menu');
      }
    }
  });
});
