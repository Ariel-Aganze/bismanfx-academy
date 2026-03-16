// Floating WhatsApp Button
document.addEventListener("DOMContentLoaded", () => {
    const phoneNumber = "+243993161923"; 
    
    // Different message for the floating button
    const message = encodeURIComponent("Bonjour, je souhaite en savoir plus sur BismanFx Academy.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    const chatButton = document.createElement('a');
    chatButton.href = whatsappUrl;
    chatButton.target = "_blank";
    // Design épuré pour le bouton chat
    chatButton.className = "fixed bottom-6 right-6 bg-[#EF4444] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center";
    chatButton.innerHTML = `
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 0C5.383 0 0 5.383 0 12.032c0 2.13.55 4.19 1.595 6L.045 24l6.115-1.559a11.966 11.966 0 005.871 1.53h.005c6.649 0 12.031-5.383 12.031-12.033 0-6.648-5.382-12.031-12.036-12.031zM12.036 22h-.005a9.993 9.993 0 01-5.06-1.373l-.362-.215-3.765.986.997-3.67-.236-.375A9.972 9.972 0 012.054 12.03c0-5.503 4.478-9.981 9.982-9.981 5.504 0 9.983 4.478 9.983 9.982 0 5.503-4.479 9.981-9.983 9.981z"/>
        </svg>
    `;
    
    // Add click event to ensure it opens WhatsApp
    chatButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(whatsappUrl, '_blank');
    });
    
    document.body.appendChild(chatButton);
});

// Global WhatsApp function for general inquiries
window.openWhatsAppGeneral = function() {
    const phoneNumber = "+243993161923";
    const message = "Bonjour, je souhaite en savoir plus sur BismanFx Academy.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
};

// Global Telegram function
window.openTelegramGeneral = function() {
    const telegramUsername = "bismanfx_support"; // À remplacer par votre username
    const message = encodeURIComponent("Bonjour, je souhaite rejoindre le support Telegram.");
    const telegramUrl = `https://t.me/${telegramUsername}?text=${message}`;
    window.open(telegramUrl, '_blank');
};