const twistUp = (atrr) => {
  const buttonsScroll = document.querySelectorAll(atrr);

  for (let buttonScroll of buttonsScroll) {
    buttonScroll.addEventListener('click', function (e) {
      e.preventDefault();

      const link = buttonScroll.getAttribute('href');

      document.querySelector(link).scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    });
  }
};

export {twistUp};
