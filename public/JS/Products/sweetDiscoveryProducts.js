// products.js
document.addEventListener('DOMContentLoaded', function() {

    const whatsappButtons = document.querySelectorAll('.whatsapp-order');

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product-name');
            sendWhatsApp(productName);
        });
    });

    function sendWhatsApp(productName) {
        const phoneNumber = "+2348162510102"; // Replace with your WhatsApp number
        const message = `I would like to order: ${productName}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappLink, "_blank");
    }
});