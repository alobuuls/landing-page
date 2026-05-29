document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('hamburguer-checkbox');

  const hideMenu = () => menuBtn.checked = false;

  // Check if the click was inside the menu 
  const outsideMenuHide = e => {
    if (menu.contains(e.target)) return;
    hideMenu();
  }

  const menuItemHide = e => {
    if (!e.target.closest('a')) return;
    hideMenu();
  }

  const scrollToSection = (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    e.preventDefault();
    e.stopPropagation();

    const id = link.getAttribute('href');
    if (!id || id === '#') return;

    const section = document.querySelector(id);
    if (!section) return;

    const top = (section.getBoundingClientRect().top + window.pageYOffset ) - menu.clientHeight;
    window.scrollTo({top, behavior: 'smooth'})
  };

  document.addEventListener('click', e => outsideMenuHide(e));
  document.querySelector('.menu-items').addEventListener('click', e => menuItemHide(e));
  document.querySelector('.menu-items').addEventListener('click', scrollToSection);
});
