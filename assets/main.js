// slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  height: 300,
});

// stops slider's autoslide
const slide = M.Slider.getInstance(slider);
slide.pause();