const industriesLink = document.querySelector('.dropdown-hover > a');

industriesLink.addEventListener('click', function(e) {

  if (window.innerWidth < 992) { // mobile only
    e.preventDefault();

    const menu = this.parentElement.querySelector('.hover-menu');

    menu.classList.toggle('show-menu');
  }

});
