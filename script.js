const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

let navOpenTimeout;
let navCloseTimeout;

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
    clearTimeout(navCloseTimeout);
    if (!nav.classList.contains("openNav")) {
        nav.classList.add("openNav"); // Open immediately
        nav.classList.remove("openSearch");
        searchIcon.classList.replace("uil-times", "uil-search");
    }
});

navCloseBtn.addEventListener("click", () => {
    clearTimeout(navOpenTimeout);
    navCloseTimeout = setTimeout(() => {
        nav.classList.remove("openNav");
    }, 300);
});

document.addEventListener("mousemove", (event) => {
    if (event.clientX <= 5 && !nav.classList.contains("openSearch")) {
        clearTimeout(navCloseTimeout);
        if (!nav.classList.contains("openNav")) {
            clearTimeout(navOpenTimeout);
            navOpenTimeout = setTimeout(() => {
                nav.classList.add("openNav");
                nav.classList.remove("openSearch");
                searchIcon.classList.replace("uil-times", "uil-search");
            }, 150);
        }
    } else {
        clearTimeout(navOpenTimeout);
    }
});

nav.addEventListener("mouseleave", () => {
    if (!nav.classList.contains("openSearch")) {
        clearTimeout(navOpenTimeout);
        navCloseTimeout = setTimeout(() => {
            nav.classList.remove("openNav");
        }, 300);
    }
});

//ads 
document.addEventListener('DOMContentLoaded', function() {
  const popupAd = document.getElementById('popup-ad');
  const closeBtn = document.getElementById('close-popup');

  // Show the popup after a delay (e.g., 3 seconds)
  setTimeout(function() {
      popupAd.style.display = 'block';
  }, 2000);

  // Close the popup when the close button is clicked
  closeBtn.addEventListener('click', function() {
      popupAd.style.display = 'none';
  });
});
//main page
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
