document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.about-us, .subscription, .title-section, .articles > article, .text-2b, .ctc-us2, #contact-form > div').forEach(el => el.dataset.animateFadeinup = 'true');
  document.querySelectorAll('.ctn-img-slider, .flag, .ctn-img-carousel').forEach(img => img.dataset.animateRubberband = 'true');
  const animate = document.querySelectorAll('[data-animate-fadeinup], [data-animate-rubberband]');
  const callback = entries => {
  
    entries.forEach(entry => {
      if ( entry.isIntersecting ) {
        entry.target.classList.add('active');
        observerfadeInUp.unobserve(entry.target);
        return;
      }
    });
  }
  
  const opts = { threshold: 0.15, rootMargin: '0px 0px 0px 0px' }
  const observerfadeInUp = new IntersectionObserver(callback, opts);
  animate.forEach(el => observerfadeInUp.observe(el));
});