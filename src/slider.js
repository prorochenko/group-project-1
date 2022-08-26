function newSlider(slider) {
  const btnPrev = slider.querySelector('.button--prev');
  const btnNext = slider.querySelector('.button--next');
  const list = slider.querySelector('.list');

  const slideCount = list.childElementCount;

  let currentPosition = 0;

  function moveTo(targetPosition) {
    if (targetPosition < 0) {
      currentPosition = slideCount - 1;
    } else if (targetPosition > slideCount - 1) {
      currentPosition = 0;
    } else {
      currentPosition = targetPosition;
    }

    list.style.transform = `translateX(${-currentPosition * 100}%)`;
  }

  btnNext.addEventListener('click', () => {
    moveTo(currentPosition + 1);
  });

  btnPrev.addEventListener('click', () => {
    moveTo(currentPosition - 1);
  });

  moveTo(0);
}

const slider1 = document.getElementById('slider1');
newSlider(slider1, true);
