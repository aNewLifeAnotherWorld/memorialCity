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
            <a href="index.html#services" class="mobile-menu__link">Услуги <span class="mobile-menu__toggle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
            <ul class="mobile-menu__dropdown">
              <li class="mobile-menu__subitem mobile-menu__subitem--nested">
                <a href="funeral-org.html" class="mobile-menu__sublink">Организация похорон <span class="mobile-menu__toggle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
                <ul class="mobile-menu__subdropdown">
                  <li><a href="funeral-org.html#agent" class="mobile-menu__sublink">Вызов ритуального агента</a></li>
                  <li><a href="funeral-org.html#remote-order" class="mobile-menu__sublink">Оформить заказ удаленно</a></li>
                  <li><a href="funeral-org.html#morgue-transport" class="mobile-menu__sublink">Перевозка тела в морг</a></li>
                  <li><a href="funeral-org.html#ceremony-master" class="mobile-menu__sublink">Услуги церемониймейстера</a></li>
                  <li><a href="funeral-org.html#escort-team" class="mobile-menu__sublink">Услуги бригады сопровождения</a></li>
                  <li><a href="funeral-org.html#ritual-lift" class="mobile-menu__sublink">Заказ ритуального лифта (только МО)</a></li>
                  <li><a href="funeral-org.html#cremation" class="mobile-menu__sublink">Кремация</a></li>
                  <li><a href="funeral-org.html#cemetery-place" class="mobile-menu__sublink">Место на кладбище МО</a></li>
                </ul>
              </li>
              <li><a href="cargo-200.html" class="mobile-menu__sublink">Груз 200</a></li>
              <li><a href="hearse-rental.html" class="mobile-menu__sublink">Аренда катафалка</a></li>
              <li><a href="vip-funeral.html" class="mobile-menu__sublink">VIP-похороны</a></li>
              <li><a href="memorial-org.html" class="mobile-menu__sublink">Организация поминок</a></li>
              <li class="mobile-menu__subitem mobile-menu__subitem--nested">
                <a href="additional-services.html" class="mobile-menu__sublink">Дополнительные услуги <span class="mobile-menu__toggle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
                <ul class="mobile-menu__subdropdown">
                  <li><a href="additional-services.html#grave-improvement" class="mobile-menu__sublink">Благоустройство захоронения</a></li>
                  <li><a href="additional-services.html#monuments" class="mobile-menu__sublink">Памятники</a></li>
                  <li><a href="additional-services.html#fences" class="mobile-menu__sublink">Ограды</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="mobile-menu__item mobile-menu__item--dropdown">
            <a href="catalog.html" class="mobile-menu__link">Каталог <span class="mobile-menu__toggle"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5"/></svg></span></a>
            <ul class="mobile-menu__dropdown">
              <li><a href="catalog.html#catalog-item1" class="mobile-menu__sublink">Категория 1</a></li>
              <li><a href="catalog.html#catalog-item2" class="mobile-menu__sublink">Категория 2</a></li>
            </ul>
          </li>
          <li class="mobile-menu__item"><a href="reviews.html" class="mobile-menu__link">Отзывы</a></li>
          <li class="mobile-menu__item"><a href="about.html" class="mobile-menu__link">О нас</a></li>
          <li class="mobile-menu__item"><a href="contacts.html" class="mobile-menu__link">Контакты</a></li>
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

    // Закрытие мобильного меню при выборе ссылки
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
    const dropdownItems = document.querySelectorAll('.nav__item--dropdown, .dropdown__item--nested');

    dropdownItems.forEach(item => {
      const toggle = item.querySelector('.dropdown__icon');
      const link = item.querySelector('.nav__link, .dropdown__link');
      const dropdown = item.querySelector('.dropdown__menu') || item.querySelector('.dropdown__submenu');

      // Флаг для отслеживания, было ли подменю открыто кликом
      let isClicked = false;

      // Раскрытие при клике на стрелку
      if (toggle) {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const isActive = item.classList.contains('active');

          // Закрываем другие подменю на том же уровне
          item.parentElement.querySelectorAll(`:scope > .${item.classList[0]}.active`).forEach(sibling => {
            if (sibling !== item) {
              sibling.classList.remove('active');
              const siblingDropdown = sibling.querySelector('.dropdown__menu, .dropdown__submenu');
              if (siblingDropdown) siblingDropdown.classList.remove('active');
            }
          });

          // Переключаем текущее подменю
          item.classList.toggle('active');
          if (dropdown) dropdown.classList.toggle('active');
          isClicked = !isActive; // Обновляем флаг
        });
      }

      // Раскрытие при наведении
      item.addEventListener('mouseenter', () => {
        if (!isClicked) { // Открываем только если не было клика
          item.classList.add('active');
          if (dropdown) dropdown.classList.add('active');
        }
      });

      // Закрытие при уходе курсора
      item.addEventListener('mouseleave', () => {
        if (!isClicked) { // Закрываем только если не было клика
          item.classList.remove('active');
          if (dropdown) dropdown.classList.remove('active');
        }
      });

      // Закрытие подменю после выбора ссылки
      if (link) {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && href !== '#') {
            window.location.href = href;
            // Закрываем все подменю
            dropdownItems.forEach(item => {
              item.classList.remove('active');
              const itemDropdown = item.querySelector('.dropdown__menu, .dropdown__submenu');
              if (itemDropdown) itemDropdown.classList.remove('active');
            });
            isClicked = false; // Сбрасываем флаг
          }
        });
      }
    });

    // Закрытие подменю при клике вне
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav__item--dropdown') && !e.target.closest('.dropdown__item--nested')) {
        dropdownItems.forEach(item => {
          item.classList.remove('active');
          const dropdown = item.querySelector('.dropdown__menu, .dropdown__submenu');
          if (dropdown) dropdown.classList.remove('active');
        });
      }
    });
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

  // Проверка скролла для шапки
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
});