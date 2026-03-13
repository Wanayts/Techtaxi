const industriesLink = document.querySelector('.dropdown-hover > a');

industriesLink.addEventListener('click', function(e) {
  console.log('Industries link clicked!'); // <--- debug log
  if (window.innerWidth < 992) { // mobile only
    e.preventDefault(); // prevent jumping
    const menu = this.parentElement.querySelector('.hover-menu');

    console.log('Toggling menu:', menu); // <--- debug log

    // Close other open dropdowns
    document.querySelectorAll('.dropdown-hover .hover-menu').forEach(m => {
      if (m !== menu) {
        m.classList.remove('show-menu');
        console.log('Closing other menu:', m);
      }
    });

    // Toggle this menu
    menu.classList.toggle('show-menu');
    console.log('Menu is now visible?', menu.classList.contains('show-menu'));
  }
});

// Close dropdown if clicking outside
document.addEventListener('click', function(e) {
  if (window.innerWidth < 992) {
    const menu = industriesLink.parentElement.querySelector('.hover-menu');
    if (!industriesLink.parentElement.contains(e.target)) {
      menu.classList.remove('show-menu');
      console.log('Clicked outside, menu closed');
    }
  }
});
