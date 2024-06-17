// script.js
document.addEventListener('scroll', function() {
    const element = document.querySelector('.nav_to_style');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 550) {
        element.style.backgroundColor = 'rgba(30,144,255,0.9)';
    } else {
        element.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});

