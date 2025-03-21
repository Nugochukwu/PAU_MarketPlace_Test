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

const iframe = document.getElementById('contentFrame');
    const fullPageButton = document.getElementById('fullPageButton');
    const navLinks = document.querySelectorAll('#navbar a');

    function updateButtonLink() {
        if (iframe && fullPageButton) {
            fullPageButton.dataset.href = iframe.src;
        }
    }

    // Initial update
    updateButtonLink();

    // MutationObserver to monitor src changes
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'src') {
                updateButtonLink();
            }
        });
    });

    observer.observe(iframe, { attributes: true, attributeFilter: ['src'] });

    // Navigation link click event
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            iframe.src = this.href;
            iframe.dataset.initialSrc = this.dataset.initialSrc;
            updateButtonLink();
        });
    });

    // Button click event
    fullPageButton.addEventListener('click', function() {
        const href = this.dataset.href;
        if (href) {
            window.open(href, "_blank");
        }
    });
