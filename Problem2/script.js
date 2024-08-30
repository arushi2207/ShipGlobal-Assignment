const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');

let index = 0;

function showImage(newIndex) {
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    index = newIndex;
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    showImage(index - 1);
});

nextButton.addEventListener('click', () => {
    showImage(index + 1);
});

// Show the first image initially
showImage(index);
