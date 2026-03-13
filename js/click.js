document.addEventListener('click', function(e) {
  const dropdown = document.querySelector('.dropdown-hover');
  const menu = dropdown.querySelector('.hover-menu');

  if (!dropdown.contains(e.target) && window.innerWidth < 768) {
    menu.style.display = 'none';
  }
});
