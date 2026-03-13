const dropdowns = document.querySelectorAll('.dropdown-hover > a');

dropdowns.forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth < 768) {
      e.preventDefault(); // Prevent link jump
      const menu = this.nextElementSibling; // .hover-menu
      // Toggle only this menu
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
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
