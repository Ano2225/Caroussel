let slideIndex = 0;

const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

showSlides(slideIndex);

function showSlides(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    }else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'block'

}
function nextSlide() {
    showSlides(++slideIndex);
}

function prevSlide() {
    showSlides(--slideIndex);
}

prevBtn.addEventListener('click',prevSlide)
nextBtn.addEventListener('click',nextSlide);

//Fonction pour faire defiler automatiquement les images

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

startAutoSlide();

