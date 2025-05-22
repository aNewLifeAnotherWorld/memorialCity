document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href*="#"]');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      const [page, targetId] = href.split('#');
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';

      if (!page || page === currentPage) {
        event.preventDefault();
        if (targetId) {
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop - 80, // Учитываем высоту шапки
              behavior: 'smooth'
            });
          }
        }
      }
    });
  });
});