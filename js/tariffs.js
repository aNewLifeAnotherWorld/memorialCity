document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.tariff-card__toggle');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const list = button.nextElementSibling;
        const isActive = list.classList.contains('active');
  
        // Закрываем все списки
        document.querySelectorAll('.tariff-card__list').forEach(item => {
          item.classList.remove('active');
        });
        document.querySelectorAll('.tariff-card__toggle').forEach(btn => {
          btn.textContent = 'Подробнее';
        });
  
        // Открываем текущий список, если он не был активен
        if (!isActive) {
          list.classList.add('active');
          button.textContent = 'Свернуть';
        }
      });
    });
  });