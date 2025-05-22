document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger__btn');
    const nav = document.querySelector('.header__nav');
    const dropdowns = document.querySelectorAll('.nav__item--dropdown');
  
    // Бургер меню
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('active');
      nav.classList.toggle('active');
    });
  
    // Активация дропдаунов
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('.nav__link');
      const menu = dropdown.querySelector('.dropdown__menu');
      const submenuItems = dropdown.querySelectorAll('.dropdown__item--nested');
  
      link.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
      });
  
      submenuItems.forEach(item => {
        const sublink = item.querySelector('.dropdown__link');
        const submenu = item.querySelector('.dropdown__submenu');
        sublink.addEventListener('click', (e) => {
          e.preventDefault();
          item.classList.toggle('active');
        });
      });
    });
  
    // Закрытие меню при клике вне
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !burgerBtn.contains(e.target)) {
        nav.classList.remove('active');
        burgerBtn.classList.remove('active');
        dropdowns.forEach(d => d.classList.remove('active'));
      }
    });
  });