// Particle system
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';

        // Random animation duration
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';

        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        particlesContainer.appendChild(particle);
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const menuButton = document.querySelector('.splash-header .header-menu');
    const closeButton = document.querySelector('.mobile-header .header-menu');
    const mobileMenu = document.querySelector('.mobile');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Open mobile menu
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close mobile menu
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close menu when clicking on links
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Contact form handling
function initContactForm() {
    const form = document.querySelector('.contact-form');
    const notification = document.querySelector('.notification-wrapper');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('incomplete');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('error');
                return;
            }

            // Simulate form submission
            setTimeout(() => {
                showNotification('success');
                form.reset();
            }, 1000);
        });
    }
}

// Show notification
function showNotification(type) {
    const notification = document.querySelector('.notification-wrapper');
    const notificationEl = document.querySelector('.notification');

    // Hide all notification content
    notificationEl.querySelectorAll('.material-icons, .notification-text').forEach(el => {
        el.style.display = 'none';
    });

    // Show relevant content based on type
    if (type === 'success') {
        notificationEl.querySelector('.notification-success').style.display = 'inline';
        notificationEl.querySelector('.notification-text.notification-success').style.display = 'inline';
    } else if (type === 'error') {
        notificationEl.querySelector('.notification-error').style.display = 'inline';
        notificationEl.querySelector('.notification-text.notification-error').style.display = 'inline';
    } else if (type === 'incomplete') {
        notificationEl.querySelector('.notification-incomplete').style.display = 'inline';
        notificationEl.querySelector('.notification-text.notification-incomplete').style.display = 'inline';
    }

    // Show notification
    notification.style.opacity = '1';
    notification.style.visibility = 'visible';

    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.visibility = 'hidden';
    }, 3000);
}

// Add scroll effects
function initScrollEffects() {
    const sections = document.querySelectorAll('.section-achievement, .section-project');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Update copyright year
function updateCopyrightYear() {
    const copyrightDate = document.querySelector('.copyright-date');
    if (copyrightDate) {
        copyrightDate.textContent = new Date().getFullYear();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initMobileMenu();
    initSmoothScrolling();
    initContactForm();
    initScrollEffects();
    updateCopyrightYear();
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    const mobileMenu = document.querySelector('.mobile');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Add parallax effect to backdrop text
function initParallaxEffect() {
    const backdrops = document.querySelectorAll('.splash-backdrop, .about-backdrop, .os-backdrop, .projects-backdrop, .contact-backdrop');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        backdrops.forEach(backdrop => {
            const rate = scrolled * -0.5;
            backdrop.style.transform = `translate(-50%, -50%) translateY(${rate}px)`;
        });
    });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', () => {
    initParallaxEffect();
});

// Add typing effect to the main heading
function initTypingEffect() {
    const heading = document.querySelector('.header-heading');
    if (heading) {
        const text = heading.innerHTML;
        heading.innerHTML = '';
        heading.style.borderRight = '2px solid #2aadd3';

        let index = 0;
        const speed = 100;

        function typeWriter() {
            if (index < text.length) {
                heading.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    heading.style.borderRight = 'none';
                }, 1000);
            }
        }

        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    // Comment out for now as it might interfere with the styling
    // initTypingEffect();
});
