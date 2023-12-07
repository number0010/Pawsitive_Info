let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;


const bnrLeftBtn = document.querySelector("#bannerLeftBtn") 
const bnrRightBtn = document.querySelector("#bannerRightBtn") 

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}
 
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
}
 
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
}
 
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // 3초마다 자동 슬라이드                
    bnrLeftBtn.addEventListener('click',prevSlide)
    bnrRightBtn.addEventListener('click',nextSlide)

});

