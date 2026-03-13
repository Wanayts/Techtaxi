const dropdowns = document.querySelectorAll('.dropdown-hover > a');

dropdowns.forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth < 768) {
      e.preventDefault(); 
      const menu = this.nextElementSibling;

      // Toggle this menu
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        // First close any other open menu
        document.querySelectorAll('.dropdown-hover .hover-menu').forEach(m => m.style.display = 'none');
        menu.style.display = 'block';
      }
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
  if (window.innerWidth < 768) {
    dropdowns.forEach(link => {
      const dropdown = link.parentElement;
      const menu = link.nextElementSibling;
      if (!dropdown.contains(e.target)) {
        menu.style.display = 'none';
      }
    });
  }
});
