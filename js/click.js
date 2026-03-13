const dropdowns = document.querySelectorAll('.dropdown-hover > a');

dropdowns.forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth < 991) {
      e.preventDefault();
      const menu = this.nextElementSibling;

      // Close other open menus
      document.querySelectorAll('.dropdown-hover .hover-menu').forEach(m => {
        if (m !== menu) m.classList.remove('show-menu');
      });

      // Toggle this menu
      menu.classList.toggle('show-menu');
    }
  });
});

// Close when clicking outside
document.addEventListener('click', function(e) {
  if (window.innerWidth < 991) {
    dropdowns.forEach(link => {
      const dropdown = link.parentElement;
      const menu = link.nextElementSibling;
      if (!dropdown.contains(e.target)) {
        menu.classList.remove('show-menu');
      }
    });
  }
});
