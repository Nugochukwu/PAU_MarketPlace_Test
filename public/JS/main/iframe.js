document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('contentFrame');
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    try {
        const storedSrc = localStorage.getItem('iframeSrc');
        if (storedSrc) {
            iframe.src = storedSrc;
        } else {
            iframe.src = "public/Pages/landingPage.html"; // Default page
        }
    } catch (error) {
        console.error("Error accessing localStorage:", error);
        iframe.src = "public/Pages/landingPage.html";
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            iframe.src = this.href;
            try {
                localStorage.setItem('iframeSrc', this.href);
            } catch (error) {
                console.error("Error setting localStorage:", error);
            }
        });
    });

    window.addEventListener('beforeunload', () => {
        try {
            localStorage.setItem('iframeSrc', iframe.src);
        } catch (error) {
            console.error("Error setting localStorage:", error);
        }
    });
});

// Parent page's JavaScript
//document.addEventListener('DOMContentLoaded', function() {
//    const iframe = document.getElementById('contentFrame');
//    const iframeOrigin = new URL(iframe.src).origin;

    // List of allowed origins
//    const allowedOrigins = [iframeOrigin, 'https://example.com', 'https://anothersafe.com']; // Add your trusted origins

//    window.addEventListener('message', function(event) {
//        if (event.origin === iframeOrigin && event.data.type === 'iframeAreaButtonClick') {
//            const targetOrigin = event.data.targetOrigin;

//            if (allowedOrigins.includes(targetOrigin)) {
//                window.location.href = targetOrigin; // Redirect to the allowed origin
//            } else {
//                console.warn(`Redirection to untrusted origin blocked: ${targetOrigin}`);
                // Optionally, display a warning to the user
//            }
//        } else if (event.data.type) {
//            console.warn(`Message received from unexpected origin: ${event.origin}`);
//        }
//    });
//});