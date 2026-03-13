const industriesLink = document.querySelector('.dropdown-hover > a');

industriesLink.addEventListener('click', function(e) {
  if (window.innerWidth < 992) { // mobile only
    e.preventDefault(); // prevent jumping
    const menu = this.parentElement.querySelector('.hover-menu');

    // Close other open dropdowns
    document.querySelectorAll('.dropdown-hover .hover-menu').forEach(m => {
      if (m !== menu) m.classList.remove('show-menu');
    });

    // Toggle this menu
    menu.classList.toggle('show-menu');
  }
});

// Close dropdown if clicking outside
document.addEventListener('click', function(e) {
  if (window.innerWidth < 992) {
    const menu = industriesLink.parentElement.querySelector('.hover-menu');
    if (!industriesLink.parentElement.contains(e.target)) {
      menu.classList.remove('show-menu');
    }
  }
});
