// script.js

// Main Slider
const mainSlider = document.querySelector('.slider');
const mainImages = document.querySelectorAll('.slider img');
let mainCounter = 0;
let mainImageWidth = mainImages[0].clientWidth;

function mainSlide() {
    mainCounter++;
    if (mainCounter >= mainImages.length) {
        mainCounter = 0;
    }
    mainSlider.style.transform = `translateX(-${mainImageWidth * mainCounter}px)`;
}

setInterval(mainSlide, 3000);

window.addEventListener('resize', () => {
    mainImageWidth = mainImages[0].clientWidth;
    mainSlider.style.transform = `translateX(-${mainImageWidth * mainCounter}px)`;
});

// Events Handling
const eventsContainer = document.getElementById('events-container');
const events = [
    { title: 'Event Title 1', description: 'Description of event 1. Date: [Date]' },
    // Add more events here or leave empty
];

if (events.length === 0) {
    eventsContainer.style.display = 'none'; // Hide if no events
} else {
    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
        `;
        eventsContainer.appendChild(eventDiv);
    });
}

// Offering Sliders
document.querySelectorAll('.offering').forEach(offering => {
    const offeringSlider = offering.querySelector('.offering-slider');
    const offeringImages = offering.querySelectorAll('.offering-slider img');
    let offeringCounter = 0;
    let offeringImageWidth = offeringImages[0].clientWidth;

    function offeringSlide() {
        offeringCounter++;
        if (offeringCounter >= offeringImages.length) {
            offeringCounter = 0;
        }
        offeringSlider.style.transform = `translateX(-${offeringImageWidth * offeringCounter}px)`;
    }

    setInterval(offeringSlide, 5000);

    window.addEventListener('resize', () => {
        offeringImageWidth = offeringImages[0].clientWidth;
        offeringSlider.style.transform = `translateX(-${offeringImageWidth * offeringCounter}px)`;
    });
});

function sendWhatsAppMessage() {
    const phoneNumber = "+2348162510102"; // Replace with the phone number
    const message = "Hello, this is a pre-filled message!";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
}
function sendWhatsAppPicture() {
    const phoneNumber = "+2348162510102"; // Replace with the phone number
    const imageURL = "../assets/images/sweetDiscovery/zobo.jpg"; // Replace with the image URL
    const message = `Check out this picture: ${imageURL}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`; // Changed to whatsapp://
    window.open(whatsappLink, "_blank");
}