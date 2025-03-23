window.sweetDiscoveryInit = function() {
    // Main Slider
    document.querySelectorAll('.slider.scrollable').forEach(mainSlider => {
        const mainImages = mainSlider.querySelectorAll('img');
        if (mainImages.length > 0) {
            let mainCounter = 0;
            let mainImageWidth = mainImages[0].clientWidth;

            function mainSlide() {
                mainCounter++;
                if (mainCounter >= mainImages.length) {
                    mainCounter = 0;
                }
                mainSlider.scrollTo({
                    left: mainImageWidth * mainCounter,
                    behavior: 'smooth'
                });
            }

            setInterval(mainSlide, 3000);

            window.addEventListener('resize', () => {
                mainImageWidth = mainImages[0].clientWidth;
                mainSlider.scrollTo({
                    left: mainImageWidth * mainCounter,
                    behavior: 'smooth'
                });
            });
        }
    });

    // Events Handling **Moved to include.js
    

    // Offering Sliders
    document.querySelectorAll('.slider.scrollable').forEach(mainSlider => {
        // ... (main slider logic - unchanged) ...
    });

    // Offering Sliders (Scrollable)
    document.querySelectorAll('.offering').forEach(offering => {
        const offeringSlider = offering.querySelector('.offering-slider.scrollable');
        if (offeringSlider) {
            const offeringImages = offeringSlider.querySelectorAll('img');
            let offeringCounter = 0;
            let offeringImageWidth = offeringImages[0].clientWidth;

            function offeringSlide() {
                offeringCounter++;
                if (offeringCounter >= offeringImages.length) {
                    offeringCounter = 0;
                }
                offeringSlider.scrollTo({
                    left: offeringImageWidth * offeringCounter,
                    behavior: 'smooth'
                });
            }

            setInterval(offeringSlide, 5000);

            window.addEventListener('resize', () => {
                offeringImageWidth = offeringImages[0].clientWidth;
                offeringSlider.scrollTo({
                    left: offeringImageWidth * offeringCounter,
                    behavior: 'smooth'
                });
            });
        }
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

    const pageTitle = document.getElementById('pageTitle');
    if(pageTitle){
        pageTitle.textContent = "Page 1 - Delicious Treats";
    }

    const slider = document.getElementById('pageSlider');
    if(slider){
        slider.innerHTML = `
            <img src="../assets/images/sweetDiscovery/bread1.jpg" alt="Page 1 Image 1">
            <img src="../assets/images/sweetDiscovery/bread1.jpg" alt="Page 1 Image 2">
            <img src="../assets/images/sweetDiscovery/bread1.jpg" alt="Page 1 Image 3">
        `;
    }

    const productsButton = document.getElementById('productsButton');
    if(productsButton){
        productsButton.addEventListener('click', function() {
            window.location.href = "./Products/sweetDiscoveryProducts.html"; // Or window.open("your-link-url", "_blank"); for a new tab
        });
    }

};