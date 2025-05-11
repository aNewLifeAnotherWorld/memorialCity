document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq__item');
  
    faqItems.forEach(item => {
      const question = item.querySelector('.faq__question');
      const answer = item.querySelector('.faq__answer');
  
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
  
        // Закрываем все открытые элементы
        faqItems.forEach(i => {
          i.classList.remove('active');
          i.querySelector('.faq__answer').style.maxHeight = null;
        });
  
        // Открываем текущий элемент, если он не был активным
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  });