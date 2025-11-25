document.addEventListener('DOMContentLoaded', () => {
  const btnOpenBurgerMenu = document.querySelector('.solid_menu');
  const btnCloseBurgerMenu = document.querySelector('.icon-close-burger-menu');
  const burgerMenu = document.querySelector('.burger-menu');

  if (btnOpenBurgerMenu && burgerMenu) {
    btnOpenBurgerMenu.addEventListener('click', () => {
      burgerMenu.classList.add('is-open');
    });
  }

  if (btnCloseBurgerMenu && burgerMenu) {
    btnCloseBurgerMenu.addEventListener('click', () => {
      burgerMenu.classList.remove('is-open');
    });
  }
  try {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target instanceof Element) {
            const animation = entry.target.dataset.animate;
            entry.target.classList.add(
              'animate__animated',
              `animate__${animation}`
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    animatedElements.forEach(el => {
      observer.observe(el);
    });
  } catch (error) {
    console.log(`Ошибка с анимациями: ${error}`);
  }
});
