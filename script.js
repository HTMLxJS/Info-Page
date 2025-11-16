// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Advanced Typing Animation Feature ---
    const typingElement = document.getElementById('typing-text');
    // Multiple messages for continuous animation
    const messages = ["Simple Solutions, Great Taste.", "Engineered for Performance.", "Code is Poetry."];
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 70;
    const deletingSpeed = 40;
    const delayBetweenMessages = 1500;

    function type() {
        if (!typingElement) return; // Exit if the element isn't found
        
        const currentMessage = messages[messageIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentMessage.length) {
            speed = delayBetweenMessages;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
        }

        setTimeout(type, speed);
    }
    
    // Start the typing animation after a short delay
    setTimeout(type, 500);
    
    // --- 2. Advanced Functional Enhancements ---
    
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.addEventListener('contextmenu', event => event.preventDefault()); // Professional UX lock

    // Copy Discord Username on Click with success animation
    const discordCard = document.getElementById('source-code-section');
    if (discordCard) {
        discordCard.addEventListener('click', () => {
            const username = 'Aloo.khalo';
            navigator.clipboard.writeText(username).then(() => {
                // Apply the CSS success animation
                discordCard.classList.add('animate-success');
                setTimeout(() => {
                    discordCard.classList.remove('animate-success');
                }, 700);
                alert(`"${username}" copied to clipboard! DM me on Discord to get the source.`);
            });
        });
    }

    // --- 3. High-Performance Visual Animations ---

    // Scroll-Reveal Animation Logic (Intersection Observer)
    const elementsToAnimate = document.querySelectorAll('.animate-hidden');
    
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('animate-hidden');
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => observer.observe(el));

    
    // 3D Parallax Tilt Effect (Desktop Mouse and Mobile Optimization)
    const tiltCards = document.querySelectorAll('.info-card, .credit-card');

    tiltCards.forEach(card => {
        const innerContent = card.querySelector('.parallax-inner');
        if (!innerContent) return; 

        // --- Desktop Mouse Move Effect ---
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / centerY;
            const rotateY = (x - centerX) / centerX;
            
            // 2-Layer Tilt: Subtle Card Tilt + Inner Content Parallax Shift
            card.style.transform = `perspective(1000px) rotateX(${rotateX * -3}deg) rotateY(${rotateY * 3}deg) scale(1.01)`; 
            innerContent.style.transform = `translateX(${rotateY * 5}px) translateY(${rotateX * 5}px)`;
        });

        card.addEventListener('mouseleave', () => {
            // Reset transform when the mouse leaves
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            innerContent.style.transform = `translateX(0) translateY(0)`;
        });
        
        // --- Mobile Optimization: Reset on touch-end to avoid sticky tilt ---
        card.addEventListener('touchend', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            innerContent.style.transform = `translateX(0) translateY(0)`;
        });
    });
});
