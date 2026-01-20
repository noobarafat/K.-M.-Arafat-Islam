// ==================== Nebulae Page JS ====================

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Back Navigation
function handleNebulaeBackNavigation() {
    if (window.history.length > 1 && document.referrer.includes(window.location.origin)) {
        window.history.back();
    } else {
        window.location.href = '/';
    }
}

// Nebulae Certificate Lightbox
function openNebulaeLightbox(index) {
    const images = ['assets/UI.jpg', 'assets/UX.jpg'];
    const labels = ['UI Certificate', 'UX Certificate'];
    
    let lightbox = document.querySelector('.nebulae-lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'nebulae-lightbox';
        lightbox.style.cssText = 'position:fixed;inset:0;z-index:99999;';
        lightbox.innerHTML = `
            <div class="nebulae-lightbox-overlay" onclick="closeNebulaeLightbox()"></div>
            <div class="nebulae-lightbox-content">
                <button class="nebulae-lightbox-close" onclick="closeNebulaeLightbox()">&times;</button>
                <img class="nebulae-lightbox-img" src="" alt="">
                <p class="nebulae-lightbox-label"></p>
                <div class="nebulae-lightbox-nav">
                    <button class="nebulae-lightbox-prev" onclick="changeNebulaeImage(-1)">&#10094;</button>
                    <button class="nebulae-lightbox-next" onclick="changeNebulaeImage(1)">&#10095;</button>
                </div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }
    
    window.currentNebulaeIndex = index;
    window.nebulaeImages = images;
    window.nebulaeLabels = labels;
    
    lightbox.querySelector('.nebulae-lightbox-img').src = images[index];
    lightbox.querySelector('.nebulae-lightbox-label').textContent = labels[index];
    lightbox.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeNebulaeLightbox() {
    const lightbox = document.querySelector('.nebulae-lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
}

function changeNebulaeImage(direction) {
    window.currentNebulaeIndex += direction;
    if (window.currentNebulaeIndex < 0) window.currentNebulaeIndex = window.nebulaeImages.length - 1;
    if (window.currentNebulaeIndex >= window.nebulaeImages.length) window.currentNebulaeIndex = 0;
    
    const lightbox = document.querySelector('.nebulae-lightbox');
    lightbox.querySelector('.nebulae-lightbox-img').src = window.nebulaeImages[window.currentNebulaeIndex];
    lightbox.querySelector('.nebulae-lightbox-label').textContent = window.nebulaeLabels[window.currentNebulaeIndex];
}

// ESC key support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeNebulaeLightbox();
    }
});

// Scroll Reveal Animations
function initNebulaeReveal() {
    const revealElements = document.querySelectorAll('.nebulae-timeline-item, .nebulae-cert-card, .nebulae-cta-card');
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealElements.forEach(el => el.classList.add('revealed'));
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
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
    initNebulaeReveal();
});
