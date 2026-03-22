// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Scroll-triggered fade-in animations
const fadeElements = document.querySelectorAll('.section-title, .about-text, .about-highlights, .project-card, .book-card, .connect-text, .social-links, .hero-greeting, .hero-name, .hero-tagline, .hero-cta');

fadeElements.forEach(function (el) {
    el.classList.add('fade-in');
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(function (el) {
    observer.observe(el);
});
