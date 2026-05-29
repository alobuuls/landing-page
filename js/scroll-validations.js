document.addEventListener('DOMContentLoaded', () => {
  const MOBILE_BREAKPOINT = 768;

  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('hamburguer-checkbox');
  const articles = document.querySelector('.articles');

  // Prevent errors if elements don't exist
  if (!menu || !menuBtn) return;
  
  let lastScrollPos = 0;
  const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;

  const hideMenu = () => menuBtn.checked = false;

  const debounce = (fn, delay = 100) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  const updateMenuDirection = () => {
    if (!isMobile()) return;

    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const articlesScrollHeight = articles.getBoundingClientRect().top + window.pageYOffset;
    const scrollingDown = currentScrollPos > lastScrollPos && currentScrollPos > articlesScrollHeight - 128;
    menu.classList.toggle('scroll-down', scrollingDown);

    if (scrollingDown) hideMenu();
    // Prevent negative values on iOS bounce scroll
    lastScrollPos = Math.max(currentScrollPos, 0);
  };

  const goTop = ({ target }) => {
    if (target.closest('.menu-icon')) return;
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', debounce(() => updateMenuDirection()));
  menu.addEventListener('click', goTop);
});