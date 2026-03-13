const industriesLink = document.querySelector('.dropdown-hover > a');

industriesLink.addEventListener('click', function(e) {
  if (window.innerWidth < 992) { // mobile
    e.preventDefault();
    const menu = this.nextElementSibling;
    menu.classList.toggle('show-menu');
  }
});
