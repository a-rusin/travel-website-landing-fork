const images = document.querySelectorAll('.slider .slider__img');
const slider_container = document.querySelector('.slider_container');
const inner_slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');

const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');

let gap = 0;
if (window.innerWidth > 768) {
    gap = 60;
    } else if (window.innerWidth <= 768) {
        gap = 30;
    } 


let current = 1;
let imgSize = images[0].clientWidth + gap;

// коэффциент сдвига
let k = 0; 
if (window.innerWidth > 768) {
    k = 0;
    } else if (window.innerWidth <= 415) {
        k = -(430 + 40) * 2;
        console.log('текущее значение k = ' + k);
    } else if (window.innerWidth <= 768) {
        k = -430*2;
    } 
inner_slider.style.transform = `translateX(${-imgSize + k}px)`;

const dotsClassRemove = () => {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
}

prevBtn.addEventListener('click', () => {
    dotsClassRemove();

    if (current <= 0) return;
    inner_slider.style.transition = '200ms ease-in-out transform';
    current--;
    dots[current].classList.add('active');
    inner_slider.style.transform = `translateX(${-imgSize * current + k}px)`;
})

nextBtn.addEventListener('click', () => {
    dotsClassRemove();

    if (current >= images.length - 1) return;
    inner_slider.style.transition = '200ms ease-in-out transform';
    current++;
    if (current < dots.length) {
        dots[current].classList.add('active');
    } else { 
        dots[current - 3].classList.add('active');
    }

    inner_slider.style.transform = `translateX(${-imgSize * current + k}px)`;
})

inner_slider.addEventListener('transitionend', () => {
    if (images[current].classList.contains('first_img')) {
        inner_slider.style.transition = 'none';
        current = images.length - 2;
        inner_slider.style.transform = `translateX(${-imgSize * current + k}px)`;
    }
    if (images[current].classList.contains('last_img')) {
        inner_slider.style.transition = 'none';
        current = images.length - current;
        inner_slider.style.transform = `translateX(${-imgSize * current + k}px)`;
    }
})