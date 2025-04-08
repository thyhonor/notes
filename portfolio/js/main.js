// Tech Leader Portfolio JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    initNavigation();
    initScrollAnimation();
    initTestimonialSlider();
    initContactForm();
});

// Header scroll effect
function initScrollAnimation() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile Navigation
function initNavigation() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Testimonial Slider
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    
    if (!testimonials.length) return;
    
    let currentIndex = 0;
    const maxIndex = testimonials.length - 1;
    
    function updateSlider() {
        // Update testimonials position
        testimonials.forEach((testimonial, index) => {
            testimonial.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
        
        // Update active dot
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Initialize slider
    updateSlider();
    
    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
            updateSlider();
        });
    }
    
    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
            updateSlider();
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });
    
    // Auto-advance the slider every 5 seconds
    setInterval(() => {
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateSlider();
    }, 5000);
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // For GitHub Pages, we can't process forms server-side
            // So we'll use a simple client-side confirmation
            // In a real-world scenario, you would send this data to a server
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Show success message (simulating form submission)
            showFormMessage('Thanks for your message! I\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Helper function to show form messages
function showFormMessage(message, type) {
    // Check if message element already exists
    let messageEl = document.querySelector('.form-message');
    
    // If not, create it
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.className = 'form-message';
        const contactForm = document.getElementById('contactForm');
        contactForm.parentNode.insertBefore(messageEl, contactForm.nextSibling);
    }
    
    // Set message content and style
    messageEl.textContent = message;
    messageEl.className = `form-message ${type}`;
    
    // Add the styles for the message dynamically if they don't exist
    if (!document.getElementById('form-message-styles')) {
        const style = document.createElement('style');
        style.id = 'form-message-styles';
        style.textContent = `
            .form-message {
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
                font-weight: 500;
            }
            .form-message.success {
                background-color: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }
            .form-message.error {
                background-color: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            messageEl.remove();
        }, 500);
    }, 5000);
} 