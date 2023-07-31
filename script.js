//this is for the intro text on home screen
const introText = document.getElementById('intro-h1');
const secondText = document.getElementById('second-h1');
const introButton = document.getElementById('enter-button');

setTimeout(() => {
    introText.classList.remove('hide');
    introText.classList.add('fadeIn');
}, 1000);

setTimeout(() => {
    secondText.classList.remove('hide');
    secondText.classList.add('fadeIn');
}, 3000);

setTimeout(() => {
    introButton.classList.remove('hide');
    introButton.classList.add('fadeIn');
}, 5000);




