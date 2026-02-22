// ==================== Creative IT Page JS ====================

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function closeMobileMenu() {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
}

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

document.addEventListener('click', (event) => {
    if (!navMenu?.classList.contains('active')) return;
    if (navMenu.contains(event.target) || hamburger?.contains(event.target)) return;
    closeMobileMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
        closeMobileMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMobileMenu();
    }
});

// Back Navigation
function handleCITBackNavigation() {
    if (window.history.length > 1 && document.referrer.includes(window.location.origin)) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

// Scroll Reveal Animations
function initCITReveal() {
    const revealElements = document.querySelectorAll('.cit-scope-item, .cit-impact-block, .cit-skill-card, .cit-cta-card');
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealElements.forEach(el => el.classList.add('revealed'));
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 60);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initCITReveal();
});
