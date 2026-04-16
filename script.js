// Smooth scroll for in-page hash links (e.g. from sub-page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  });
});

// Set active nav item: on sub-pages use current path, on index no section highlight needed
const navLinks = document.querySelectorAll('.nav-link');
const currentPath = window.location.pathname.replace(/^.*\//, '') || 'index.html';

function setActiveNav() {
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    const linkPage = href === './' || href === 'index.html' ? 'index.html' : href;
    if (linkPage === currentPath || (currentPath === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}

setActiveNav();
