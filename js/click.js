// Select the "Industries" link
const industriesLink = document.querySelector('.dropdown-hover > a');

industriesLink.addEventListener('click', function(e) {
  if (window.innerWidth < 992) { // mobile only
    e.preventDefault(); // prevent link jump
    const menu = this.nextElementSibling;
    // Close other open dropdowns
    document.querySelectorAll('.dropdown-hover .hover-menu').forEach(m => {
      if (m !== menu) m.classList.remove('show-menu');
    });
    // Toggle this dropdown
    menu.classList.toggle('show-menu');
  }
});

// Close the dropdown if clicking outside
document.addEventListener('click', function(e) {
  if (window.innerWidth < 992) {
    const menu = industriesLink.nextElementSibling;
    if (!industriesLink.parentElement.contains(e.target)) {
      menu.classList.remove('show-menu');
    }
  }
});
