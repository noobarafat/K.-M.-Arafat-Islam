// ==================== BuildSign Data ====================
const buildsignServices = [
    {
        id: 'app-design',
        title: 'App Design',
        description: 'User-centered mobile experiences that feel intuitive and premium.',
        icon: 'fas fa-mobile-alt'
    },
    {
        id: 'website-design',
        title: 'Website Design',
        description: 'Modern, responsive websites that convert visitors into customers.',
        icon: 'fas fa-window-maximize'
    },
    {
        id: 'dashboard-design',
        title: 'Dashboard Design',
        description: 'Data visualization and admin panels that make complex information clear.',
        icon: 'fas fa-chart-line'
    },
    {
        id: 'wordpress-dev',
        title: 'WordPress Development',
        description: 'Custom WordPress sites with flexible content management and SEO optimization.',
        icon: 'fab fa-wordpress'
    },
    {
        id: 'flutter-dev',
        title: 'Flutter Development',
        description: 'Cross-platform mobile apps built with Flutter for iOS and Android.',
        icon: 'fas fa-code'
    },
    {
        id: 'logo-graphic',
        title: 'Logo & Graphic Design',
        description: 'Brand identity and visual assets that make your business memorable.',
        icon: 'fas fa-palette'
    }
];

const buildsignServicesDetails = {
    'app-design': {
        title: 'App Design',
        icon: 'fas fa-mobile-alt',
        description: 'We design mobile apps that prioritize user experience and visual clarity. From wireframes to high-fidelity prototypes, every screen is crafted to ensure smooth navigation and engagement.',
        deliverables: ['User research & personas', 'Wireframes & user flows', 'High-fidelity UI design', 'Interactive prototypes', 'Design system documentation'],
        timeline: '3-6 weeks'
    },
    'website-design': {
        title: 'Website Design',
        icon: 'fas fa-window-maximize',
        description: 'Your website is your digital storefront. We create responsive, conversion-focused web designs that look beautiful on every device.',
        deliverables: ['Responsive layouts', 'Landing page design', 'Brand-consistent visuals', 'Interactive elements', 'Mobile-first approach'],
        timeline: '2-4 weeks'
    },
    'dashboard-design': {
        title: 'Dashboard Design',
        icon: 'fas fa-chart-line',
        description: 'Dashboards should make data accessible, not overwhelming. We design admin panels and analytics interfaces that help users understand insights quickly.',
        deliverables: ['Information architecture', 'Data visualization design', 'User-friendly layouts', 'Customizable components', 'Dark/light mode support'],
        timeline: '3-5 weeks'
    },
    'wordpress-dev': {
        title: 'WordPress Development',
        icon: 'fab fa-wordpress',
        description: 'WordPress powers flexibility and scalability. We build custom themes, optimize performance, and create intuitive content management experiences.',
        deliverables: ['Custom theme development', 'Plugin integration', 'SEO optimization', 'Performance tuning', 'Content migration'],
        timeline: '4-6 weeks'
    },
    'flutter-dev': {
        title: 'Flutter Development',
        icon: 'fas fa-code',
        description: 'Flutter enables beautiful, fast apps for both iOS and Android from a single codebase. We build feature-rich mobile applications with smooth animations.',
        deliverables: ['Cross-platform development', 'API integration', 'State management', 'App store deployment', 'Post-launch support'],
        timeline: '6-10 weeks'
    },
    'logo-graphic': {
        title: 'Logo & Graphic Design',
        icon: 'fas fa-palette',
        description: 'Your brand deserves a visual identity that stands out. We create logos, brand guidelines, and marketing materials that communicate your values.',
        deliverables: ['Logo design concepts', 'Brand style guide', 'Social media templates', 'Marketing collateral', 'Vector source files'],
        timeline: '2-3 weeks'
    }
};

const buildsignProcess = [
    {
        step: '01',
        title: 'Discovery & Requirements',
        description: 'We listen to your needs, understand your goals, and define clear project scope with transparent timelines.',
        icon: 'fas fa-search'
    },
    {
        step: '02',
        title: 'Design & Prototype',
        description: 'Visual mockups and interactive prototypes help you see the solution before development begins.',
        icon: 'fas fa-pencil-ruler'
    },
    {
        step: '03',
        title: 'Development & QA',
        description: 'Clean code, regular updates, and thorough testing ensure quality at every stage of development.',
        icon: 'fas fa-code'
    },
    {
        step: '04',
        title: 'Delivery & Support',
        description: 'Launch with confidence. We provide documentation, training, and ongoing support after delivery.',
        icon: 'fas fa-rocket'
    }
];

const buildsignWhy = [
    {
        title: 'System-based delivery',
        description: 'Organized workflows, clear milestones, and predictable outcomes—no chaos, just quality.',
        icon: 'fas fa-cogs'
    },
    {
        title: 'Clear communication',
        description: 'Regular updates, transparent timelines, and honest conversations keep projects on track.',
        icon: 'fas fa-comments'
    },
    {
        title: 'Remote collaboration',
        description: 'Built for remote teams. Flexible schedules, async communication, and global accessibility.',
        icon: 'fas fa-globe'
    },
    {
        title: 'Quality without rush culture',
        description: 'Sustainable pace, realistic deadlines, and focus on long-term excellence over quick fixes.',
        icon: 'fas fa-award'
    }
];

const buildsignFAQs = [
    {
        question: 'What kind of clients do you work with?',
        answer: 'We work with startups, small businesses, and entrepreneurs who value quality and clear communication. Our ideal clients appreciate thoughtful design, sustainable timelines, and building meaningful digital products.'
    },
    {
        question: 'How do you price projects?',
        answer: 'Pricing depends on project scope, timeline, and deliverables. After an initial consultation, we provide a detailed proposal with transparent costs. We focus on value-driven pricing that reflects the quality and impact of the work.'
    },
    {
        question: 'How do remote projects work?',
        answer: 'Everything happens online. We use tools like Figma, Slack, and project management platforms for collaboration. You will receive regular updates, review prototypes, and provide feedback asynchronously—no need for constant meetings.'
    },
    {
        question: 'What\'s your typical timeline?',
        answer: 'Timelines vary by service. Small projects like logo design take 2–3 weeks, while app development can take 6–10 weeks. We set realistic deadlines during discovery and keep you updated throughout the process.'
    }
];

// ==================== Back Navigation ====================
function handleBackNavigation() {
    if (window.history.length > 1 && document.referrer.includes(window.location.hostname)) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

// ==================== Render Functions ====================
function renderServicesGrid() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    
    grid.innerHTML = buildsignServices.map(service => `
        <div class="buildsign-service-card reveal-stagger" onclick="openServiceModal('${service.id}')">
            <div class="service-card-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="service-card-action">
                <span>View Details</span>
                <i class="fas fa-arrow-right"></i>
            </div>
        </div>
    `).join('');
}

function renderProcessGrid() {
    const grid = document.getElementById('processGrid');
    if (!grid) return;
    
    grid.innerHTML = buildsignProcess.map(step => `
        <div class="buildsign-process-card reveal-stagger">
            <div class="process-step-number">${step.step}</div>
            <div class="process-icon">
                <i class="${step.icon}"></i>
            </div>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
        </div>
    `).join('');
}

function renderWhyGrid() {
    const grid = document.getElementById('whyGrid');
    if (!grid) return;
    
    grid.innerHTML = buildsignWhy.map(item => `
        <div class="buildsign-why-card reveal-stagger">
            <div class="why-icon">
                <i class="${item.icon}"></i>
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `).join('');
}

function renderFAQGrid() {
    const grid = document.getElementById('faqGrid');
    if (!grid) return;
    
    grid.innerHTML = buildsignFAQs.map((faq, index) => `
        <div class="buildsign-faq-item reveal-stagger" data-index="${index}">
            <div class="faq-question" onclick="toggleFAQ(${index})">
                <h3>${faq.question}</h3>
                <i class="fas fa-plus faq-icon"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

// ==================== Service Modal ====================
function openServiceModal(serviceId) {
    const details = buildsignServicesDetails[serviceId];
    if (!details) return;
    
    const modal = document.getElementById('serviceModal');
    const content = document.getElementById('serviceModalContent');
    
    content.innerHTML = `
        <div class="service-modal-header">
            <div class="service-modal-icon">
                <i class="${details.icon}"></i>
            </div>
            <div>
                <h2>${details.title}</h2>
                <p class="service-timeline"><i class="fas fa-clock"></i> ${details.timeline}</p>
            </div>
        </div>
        <p class="service-modal-description">${details.description}</p>
        <div class="service-modal-section">
            <h3>What you get</h3>
            <ul class="service-deliverables">
                ${details.deliverables.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('')}
            </ul>
        </div>
        <div class="service-modal-actions">
            <a href="#bs-contact" class="btn-primary-gradient" onclick="closeServiceModal()">
                <i class="fas fa-rocket"></i> Start This Project
            </a>
            <button class="btn-outline" onclick="closeServiceModal()">
                Close
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('serviceModal');
    const overlay = modal?.querySelector('.buildsign-modal-overlay');
    
    if (overlay) {
        overlay.addEventListener('click', closeServiceModal);
    }
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeServiceModal();
        }
    });
});

// ==================== FAQ Toggle ====================
function toggleFAQ(index) {
    const items = document.querySelectorAll('.buildsign-faq-item');
    const item = items[index];
    const isActive = item.classList.contains('active');
    
    // Close all items
    items.forEach(i => i.classList.remove('active'));
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        item.classList.add('active');
    }
}

// ==================== Smooth Scroll ====================
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    renderServicesGrid();
    renderProcessGrid();
    renderWhyGrid();
    renderFAQGrid();
    
    // Initialize reveal animations if available
    if (typeof initRevealAnimations === 'function') {
        setTimeout(initRevealAnimations, 100);
    }
});
