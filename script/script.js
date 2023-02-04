const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const currentSlideSpan = document.querySelector(".current-slide");
const totalSlidesSpan = document.querySelector(".total-slides");
const captions = document.querySelectorAll(".caption");
const descriptions = document.querySelectorAll(".description");

let currentSlide = 0;
let interval;

const updateCurrentSlide = () => {
  currentSlideSpan.textContent = currentSlide + 1;
};

const updateDots = () => {
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const updateCaptions = () => {
  captions.forEach((caption, index) => {
    if (index === currentSlide) {
      caption.style.display = "block";
    } else {
      caption.style.display = "none";
    }
  });
};

const updateDescriptions = () => {
  descriptions.forEach((description, index) => {
    if (index === currentSlide) {
      description.style.display = "block";
    } else {
      description.style.display = "none";
    }
  });
};

const startSlider = () => {
  interval = setInterval(nextSlide, 3000);
};

const stopSlider = () => {
  clearInterval(interval);
};

const nextSlide = () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
    slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
  } else {
    currentSlide++;
    slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
  }

  updateDots();
  updateCurrentSlide();
  updateCaptions();
  updateDescriptions();
};

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
    slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
  } else {
    currentSlide--;
    slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
  }

  updateDots();
  updateCurrentSlide();
  updateCaptions();
  updateDescriptions();
};

container.addEventListener("mouseenter", stopSlider);
container.addEventListener("mouseleave", startSlider);

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    updateDots();
    updateCurrentSlide();
    updateCaptions();
    updateDescriptions();
  });
});

totalSlidesSpan.textContent = slides.length;
updateDots();
updateCurrentSlide();
updateCaptions();
updateDescriptions();
startSlider();