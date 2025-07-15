const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const visibleSlides = 3;
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth + 20; // 100px + 2×10px margin

function updateSliderPosition() {
    const offset = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > totalSlides - visibleSlides) {
        currentIndex = 0; // loop to start
    }
    updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - visibleSlides; // loop to end
    }
    updateSliderPosition();
});
