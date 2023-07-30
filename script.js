//this is for the intro text
setTimeout(() => {
    const introText = document.getElementById('intro-h1');
    const secondText = document.getElementById('second-h1');
   
    introText.classList.add('fadeOut');



    setTimeout(() => {
        introText.style.visibility = 'none';
    }, 2000);
setTimeout(() => {
        
        introText.classList.remove('fadeOut');
        secondText.style.visibility = 'visible';
        secondText.classList.add('fadeIn');
    }, 1);
}, 5000);



