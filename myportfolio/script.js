document.addEventListener('DOMContentLoaded', function() {  
    // Mobile Navigation  
    const hamburger = document.querySelector('.hamburger');  
    const navLinks = document.querySelector('.nav-links');  

    hamburger.addEventListener('click', function() {  
        this.classList.toggle('active');  
        navLinks.classList.toggle('active');  
    });  

    // Close mobile menu when clicking a link  
    document.querySelectorAll('.nav-links a').forEach(link => {  
        link.addEventListener('click', () => {  
            hamburger.classList.remove('active');  
            navLinks.classList.remove('active');  
        });  
    });  

    // Header scroll effect  
    const header = document.querySelector('header');  

    window.addEventListener('scroll', function() {  
        header.classList.toggle('scrolled', window.scrollY > 100);  
    });  

    // Animate skill bars on scroll  
    const skillBars = document.querySelectorAll('.skill-progress');  

    function animateSkillBars() {  
        skillBars.forEach(bar => {  
            const width = bar.getAttribute('data-width');  
            if (isElementInViewport(bar)) {  
                bar.style.width = `${width}%`;  
            }  
        });  
    }  

    function isElementInViewport(el) {  
        const rect = el.getBoundingClientRect();  
        return (  
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&  
            rect.bottom >= 0  
        );  
    }  

    // Initialize skill bars at 0  
    skillBars.forEach(bar => {  
        bar.style.width = '0';  
    });  

    // Check on load and scroll  
    window.addEventListener('load', animateSkillBars);  
    window.addEventListener('scroll', animateSkillBars);  

    // Smooth scrolling for anchor links  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
        anchor.addEventListener('click', function(e) {  
            e.preventDefault();  

            const targetId = this.getAttribute('href');  
            const targetElement = document.querySelector(targetId);  

            if (targetElement) {  
                window.scrollTo({  
                    top: targetElement.offsetTop - 80,  
                    behavior: 'smooth'  
                });  
            }  
        });  
    });  

    // Form submission  
    const contactForm = document.querySelector('.contact-form');  

    if (contactForm) {  
        contactForm.addEventListener('submit', function(e) {  
            e.preventDefault();  

            // Get form values  
            const name = this.querySelector('input[type="text"]').value;  
            const email = this.querySelector('input[type="email"]').value;  
            const subject = this.querySelector('input[type="text"]:nth-of-type(2)').value;  
            const message = this.querySelector('textarea').value;  

            // Normally you would send the data to a server here  
            console.log('Form submitted:', { name, email, subject, message });  

            // Show success message (you can replace this with a modal or other UI element)  
            alert('Thank you for your message! I will get back to you soon.');  

            // Reset form  
            this.reset();  
        });  
    }  

    // Project card hover effect  
    const projectCards = document.querySelectorAll('.project-card');  

    projectCards.forEach(card => {  
        card.addEventListener('mouseenter', function() {  
            this.style.transform = 'translateY(-10px)';  
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';  
        });  

        card.addEventListener('mouseleave', function() {  
            this.style.transform = '';  
            this.style.boxShadow = '';  
        });  
    });  

    // Show current year in footer  
    const yearElement = document.querySelector('.footer-bottom p');  
    if (yearElement) {  
        const currentYear = new Date().getFullYear();  
        yearElement.textContent = `© ${currentYear} Aklilu Desalegn. All rights reserved.`;  
    }  
});  