/* script.js */

const navbar = document.getElementById('navbar');

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Desktop behavior
        if (e.clientX < 10) {
            navbar.style.left = '0';
        } else if (e.clientX > 200) {
            navbar.style.left = '-200px';
        }
    }
});

document.addEventListener('scroll', () => {
    if (window.innerWidth <= 760) { // Mobile behavior
        if (window.scrollY < 10) {
            navbar.style.top = '60px'; // Show below header
        } else {
            navbar.style.top = '-60px'; // Hide above header
        }
    }
});

navbar.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
        navbar.style.left = '-200px';
    }
});