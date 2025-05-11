document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger__btn');
  let mobileMenu = document.querySelector('.mobile-menu');

  function createMobileMenu() {
    if (!mobileMenu && window.innerWidth <= 768) {
      mobileMenu = document.createElement('div');
      mobileMenu.classList.add('mobile-menu');
      mobileMenu.innerHTML = `
        <div class="mobile-menu__logo">
          <img src="images/logo.png" alt="Memorial City Logo">
        </div>
        <ul class="mobile-menu__list">
          <li class="mobile-menu__item mobile-menu__item--dropdown">
            <a href="#services" class="mobile-menu__link">Услуги <span class="mobile-menu__toggle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
            <ul class="mobile-menu__dropdown">
              <li class="mobile-menu__subitem mobile-menu__subitem--nested">
                <a href="#funeral-org" class="mobile-menu__sublink">Организация похорон <span class="mobile-menu__toggle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
                <ul class="mobile-menu__subdropdown">
                  <li><a href="#agent" class="mobile-menu__sublink">Вызов ритуального агента</a></li>
                  <li><a href="#remote-order" class="mobile-menu__sublink">Оформить заказ удаленно</a></li>
                  <li><a href="#morgue-transport" class="mobile-menu__sublink">Перевозка тела в морг</a></li>
                  <li><a href="#ceremony-master" class="mobile-menu__sublink">Услуги церемониймейстера</a></li>
                  <li><a href="#escort-team" class="mobile-menu__sublink">Услуги бригады сопровождения</a></li>
                  <li><a href="#ritual-lift" class="mobile-menu__sublink">Заказ ритуального лифта (только МО)</a></li>
                  <li><a href="#cremation" class="mobile-menu__sublink">Кремация</a></li>
                  <li><a href="#cemetery-place" class="mobile-menu__sublink">Место на кладбище МО</a></li>
                </ul>
              </li>
              <li><a href="#cargo-200" class="mobile-menu__sublink">Груз 200</a></li>
              <li><a href="#hearse-rental" class="mobile-menu__sublink">Аренда катафалка</a></li>
              <li><a href="#vip-funeral" class="mobile-menu__sublink">VIP-похороны</a></li>
              <li><a href="#memorial-org" class="mobile-menu__sublink">Организация поминок</a></li>
              <li class="mobile-menu__subitem mobile-menu__subitem--nested">
                <a href="#additional" class="mobile-menu__sublink">Дополнительные услуги <span class="mobile-menu__toggle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
                <ul class="mobile-menu__subdropdown">
                  <li><a href="#grave-improvement" class="mobile-menu__sublink">Благоустройство захоронения</a></li>
                  <li><a href="#monuments" class="mobile-menu__sublink">Памятники</a></li>
                  <li><a href="#fences" class="mobile-menu__sublink">Ограды</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="mobile-menu__item mobile-menu__item--dropdown">
            <a href="#catalog" class="mobile-menu__link">Каталог <span class="mobile-menu__toggle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
            <ul class="mobile-menu__dropdown">
              <li><a href="#catalog-item1" class="mobile-menu__sublink">Категория 1</a></li>
              <li><a href="#catalog-item2" class="mobile-menu__sublink">Категория 2</a></li>
            </ul>
          </li>
          <li class="mobile-menu__item"><a href="#reviews" class="mobile-menu__link">Отзывы</a></li>
          <li class="mobile-menu__item"><a href="#about" class="mobile-menu__link">О нас</a></li>
          <li class="mobile-menu__item"><a href="#contacts" class="mobile-menu__link">Контакты</a></li>
        </ul>
        <div class="mobile-menu__buttons">
          <a href="https://wa.me/74951182288" class="mobile-menu__button whatsapp" target="_blank">WhatsApp</a>
          <a href="https://t.me/+74951182288" class="mobile-menu__button telegram" target="_blank">Telegram</a>
          <a href="tel:+74951182288" class="mobile-menu__button phone" target="_blank">Позвонить</a>
        </div>
      `;
      document.body.appendChild(mobileMenu);
    }
  }

  function toggleMobileMenu() {
    if (burgerBtn && mobileMenu) {
      burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        burgerBtn.classList.toggle('active');
        console.log('Burger clicked');
      });
    }
  }

  function setupDropdowns() {
    document.querySelectorAll('.mobile-menu__toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.closest('.mobile-menu__item--dropdown') || toggle.closest('.mobile-menu__subitem--nested');
        if (parent) {
          const isActive = parent.classList.contains('active');
          parent.classList.toggle('active');
          const dropdown = parent.querySelector('.mobile-menu__dropdown') || parent.querySelector('.mobile-menu__subdropdown');
          if (dropdown) dropdown.classList.toggle('active');

          parent.parentElement.querySelectorAll(`:scope > .${parent.classList[1]}.active`).forEach(item => {
            if (item !== parent) {
              item.classList.remove('active');
              const itemDropdown = item.querySelector('.mobile-menu__dropdown, .mobile-menu__subdropdown');
              if (itemDropdown) itemDropdown.classList.remove('active');
            }
          });
        }
      });
    });

    document.querySelectorAll('.mobile-menu__link, .mobile-menu__sublink').forEach(link => {
      link.addEventListener('click', (e) => {
        if (!link.querySelector('.mobile-menu__toggle')) {
          mobileMenu.classList.remove('active');
          burgerBtn.classList.remove('active');
        }
      });
    });
  }

  function setupDesktopDropdowns() {
    const dropdownToggles = document.querySelectorAll('.dropdown__icon');
    if (dropdownToggles.length > 0) {
      dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const parent = toggle.closest('.nav__item--dropdown') || toggle.closest('.dropdown__item--nested');
          if (parent) {
            const isActive = parent.classList.contains('active');
            console.log('Toggling dropdown, parent:', parent, 'isActive:', isActive); // Отладка

            // Закрываем другие подменю на том же уровне
            parent.parentElement.querySelectorAll(`:scope > .${parent.classList[0]}.active`).forEach(item => {
              if (item !== parent) {
                item.classList.remove('active');
                const itemDropdown = item.querySelector('.dropdown__menu, .dropdown__submenu');
                if (itemDropdown) itemDropdown.classList.remove('active');
              }
            });

            // Переключаем текущее подменю
            parent.classList.toggle('active');
            const dropdown = parent.querySelector('.dropdown__menu') || parent.querySelector('.dropdown__submenu');
            if (dropdown) {
              dropdown.classList.toggle('active');
              console.log('Dropdown state:', dropdown.classList.contains('active')); // Отладка
            }
          }
        });
      });

      // Закрытие подменю при клике вне
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav__item--dropdown') && !e.target.closest('.dropdown__item--nested')) {
          document.querySelectorAll('.nav__item--dropdown.active, .dropdown__item--nested.active').forEach(item => {
            item.classList.remove('active');
            const dropdown = item.querySelector('.dropdown__menu, .dropdown__submenu');
            if (dropdown) dropdown.classList.remove('active');
          });
        }
      });
    } else {
      console.log('No dropdown toggles found'); // Отладка
    }
  }

  function handleResize() {
    if (window.innerWidth > 768 && mobileMenu) {
      mobileMenu.classList.remove('active');
      burgerBtn.classList.remove('active');
      document.body.removeChild(mobileMenu);
      mobileMenu = null;
    } else if (window.innerWidth <= 768 && !mobileMenu) {
      createMobileMenu();
      toggleMobileMenu();
      setupDropdowns();
    }
  }

  handleResize();
  window.addEventListener('resize', handleResize);

  setupDesktopDropdowns();

  // Проверка скролла (из index.html)
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
});