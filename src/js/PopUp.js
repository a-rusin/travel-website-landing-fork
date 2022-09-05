// import { Slider } from '../js/Slider.js';


const loginOverlay = document.querySelector('.login_overlay'); 
// console.log(loginOverlay);
const loginButton = document.querySelector('#login_btn');

const openModalWindow = () => {
    loginOverlay.classList.add('open');
}
// const closeModalWindow = (event) => {

//         console.log(event);
//         console.log(event.target);
//         console.log(event.currentTarget);
//         event.stopPropagation();
//     // loginOverlay.classList.remove('open');
// }


loginButton.addEventListener('click', openModalWindow );


loginOverlay.addEventListener('click', closeModalWindow );


// const addOpenToLoginOverlay = () => {

// }
// addOpenToLoginOverlay();`