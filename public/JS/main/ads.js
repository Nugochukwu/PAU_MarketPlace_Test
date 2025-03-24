document.addEventListener('DOMContentLoaded', function() {
    const popupAd = document.getElementById('popup-ad');
    const closeBtn = document.getElementById('close-popup');

    // Check if the ad has already been shown in this session
    if (!sessionStorage.getItem('adShown')) {
        setTimeout(function() {
            popupAd.style.display = 'block';
            sessionStorage.setItem('adShown', 'true'); // Mark the ad as shown
        }, 2000);
    }

    closeBtn.addEventListener('click', function() {
        popupAd.style.display = 'none';
    });
});