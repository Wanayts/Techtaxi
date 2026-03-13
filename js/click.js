const industriesLink = document.querySelector('.dropdown-hover > a');

industriesLink.addEventListener('click', function(e) {

  if (window.innerWidth < 992) { // mobile only
    e.preventDefault();

    const menu = this.parentElement.querySelector('.hover-menu');

    menu.classList.toggle('show-menu');
  }

});

// close dropdown when clicking outside
document.addEventListener('click', function(e){

  if (!e.target.closest('.dropdown-hover')) {
    document.querySelectorAll('.hover-menu').forEach(menu => {
      menu.classList.remove('show-menu');
    });
  }

});
