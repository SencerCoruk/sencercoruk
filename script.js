document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 85,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    };
    
    // Add fade-in class to CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Initial check and add event listener for scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Pulsating heart animation enhancer
    const heart = document.querySelector('.heart-icon i');
    
    if (heart) {
        heart.addEventListener('mouseover', function() {
            this.style.color = '#f06292';
            this.style.animationDuration = '0.8s';
        });
        
        heart.addEventListener('mouseout', function() {
            this.style.color = '';
            this.style.animationDuration = '1.5s';
        });
    }
}); 