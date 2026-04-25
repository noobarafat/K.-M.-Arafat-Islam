// ==================== BuildSign Data ====================
let buildsignServices = [
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

let buildsignServicesDetails = {
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

let buildsignProcess = [
    {
        step: '01',
        title: 'Discovery & Strategy',
        description: 'We begin by understanding your business goals, target audience, and project requirements to define a clear and actionable roadmap.'
    },
    {
        step: '02',
        title: 'Planning & Design',
        description: 'We create structured layouts and refined UI concepts that align with your brand and ensure a seamless user experience.'
    },
    {
        step: '03',
        title: 'Development & Testing',
        description: 'Using clean, scalable code, we build your solution with performance optimization and thorough testing at every stage.'
    },
    {
        step: '04',
        title: 'Delivery & Support',
        description: 'After successful deployment, we provide guidance, monitoring, and ongoing support to ensure long-term success.'
    }
];

let buildsignWhy = [
    {
        title: 'System-based delivery',
        description: 'Organized workflows, clear milestones, and predictable outcomes—no chaos, just quality.'
    },
    {
        title: 'Clear communication',
        description: 'Regular updates, transparent timelines, and honest conversations keep every project on track.'
    },
    {
        title: 'Remote collaboration',
        description: 'Built for remote teams with async-friendly workflows, flexible schedules, and smooth coordination.'
    },
    {
        title: 'Quality without rush culture',
        description: 'Sustainable pace, realistic deadlines, and long-term excellence over quick fixes.'
    }
];

let buildsignFAQs = [
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

let engagementModels = [
    {
        id: 'project-based',
        title: 'Project-Based',
        description: 'Perfect for specific deliverables',
        features: ['Fixed scope & timeline', 'Milestone-based payments', 'Quality guarantee', 'Post-launch support'],
        icon: 'fas fa-box',
        ideal: 'Best for: One-time projects, MVPs, redesigns'
    },
    {
        id: 'retainer',
        title: 'Retainer',
        description: 'Ongoing dedicated support',
        features: ['Monthly hours allocation', 'Priority support', 'Flexible deliverables', 'Team availability'],
        icon: 'fas fa-handshake',
        ideal: 'Best for: Scaling teams, long-term growth'
    },
    {
        id: 'hybrid',
        title: 'Hybrid Model',
        description: 'Combine project and retainer',
        features: ['Custom engagement', 'Flexible scope', 'Best of both', 'Scale as needed'],
        icon: 'fas fa-sliders-h',
        ideal: 'Best for: Growing projects, evolving needs'
    }
];

let caseStudies = [
    {
        id: 'case-1',
        title: 'E-Commerce Platform Redesign',
        category: 'Web Design & Development',
        description: 'Redesigned and rebuilt a failing e-commerce platform, resulting in 3x conversion increase and improved user engagement.',
        metrics: ['3x conversion increase', '50% faster load times', '45% reduction in bounce rate'],
        icon: 'fas fa-shopping-cart',
        color: '#7C3AED'
    },
    {
        id: 'case-2',
        title: 'SaaS Dashboard Platform',
        category: 'Product Design',
        description: 'Created an intuitive dashboard for data analytics that reduced learning curve by 60% and increased user retention.',
        metrics: ['60% faster adoption', '85% task completion rate', '4.8/5 user satisfaction'],
        icon: 'fas fa-chart-line',
        color: '#0EA5E9'
    },
    {
        id: 'case-3',
        title: 'Flutter Mobile App Launch',
        category: 'Mobile Development',
        description: 'Built and launched a cross-platform mobile app from MVP to 10K+ users in 3 months with stellar reviews.',
        metrics: ['10K+ downloads', '4.7/5 rating', 'iOS + Android'],
        icon: 'fas fa-mobile-alt',
        color: '#10B981'
    }
];

let testimonials = [
    {
        id: 'testimonial-1',
        name: 'Ahmed Hassan',
        role: 'Founder, TechStartup BD',
        text: 'BuildSign transformed our vision into reality. The team\'s attention to detail and commitment to quality exceeded expectations. Highly recommended!',
        rating: 5
    },
    {
        id: 'testimonial-2',
        name: 'Sarah Khan',
        role: 'Product Manager, DigitalCo',
        text: 'Working with BuildSign was seamless. Clear communication, transparent process, and they delivered everything on time. A true professional team.',
        rating: 5
    },
    {
        id: 'testimonial-3',
        name: 'Rajesh Patel',
        role: 'CEO, InnovateLabs',
        text: 'The quality of work is exceptional. They don\'t just build products; they build solutions. Our platform went from concept to market-ready in less than 4 months.',
        rating: 5
    }
];

// ==================== Back Navigation ====================
function handleBackNavigation() {
    if (window.history.length > 1 && document.referrer.includes(window.location.hostname)) {
        window.history.back();
    } else {
        window.location.href = 'index.html#about';
    }
}

// ==================== Render Functions ====================
function renderServicesGrid() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    
    grid.innerHTML = buildsignServices.map(service => `
        <div class="buildsign-service-card reveal-stagger" onclick="openServiceModal('${service.id}')">
            <h3 class="service-card-title">${service.title}</h3>
            <p class="service-card-description">${service.description}</p>
            <div class="service-card-action">
                <span class="service-card-action-label">View Details</span>
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
            <span class="process-step-label">STEP ${step.step}</span>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
            <span class="process-bg-number" aria-hidden="true">${step.step}</span>
        </div>
    `).join('');
}

function renderWhyGrid() {
    const grid = document.getElementById('whyGrid');
    if (!grid) return;
    
    grid.innerHTML = buildsignWhy.map((item, index) => {
        const number = String(index + 1).padStart(2, '0');
        return `
        <div class="buildsign-why-card reveal-stagger">
            <span class="why-step-badge">${number}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span class="why-bg-number" aria-hidden="true">${number}</span>
        </div>
    `;
    }).join('');
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

function renderEngagementModels() {
    const grid = document.getElementById('engagementGrid');
    if (!grid) return;
    
    grid.innerHTML = engagementModels.map(model => `
        <div class="engagement-model-card reveal-stagger">
            <div class="engagement-card-header">
                <div class="engagement-card-icon">
                    <i class="${model.icon}"></i>
                </div>
                <h3>${model.title}</h3>
            </div>
            <p class="engagement-card-description">${model.description}</p>
            <ul class="engagement-features">
                ${model.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
            </ul>
            <div class="engagement-card-footer">
                <p class="engagement-ideal">${model.ideal}</p>
                <a href="#bs-contact" class="btn-engagement-cta">Learn More</a>
            </div>
        </div>
    `).join('');
}

function renderCaseStudies() {
    const grid = document.getElementById('caseStudiesGrid');
    if (!grid) return;
    
    grid.innerHTML = caseStudies.map(study => `
        <div class="case-study-card reveal-stagger" style="--case-color: ${study.color}">
            <div class="case-study-header">
                <div class="case-study-icon">
                    <i class="${study.icon}"></i>
                </div>
                <span class="case-study-category">${study.category}</span>
            </div>
            <div class="case-study-content">
                <h3>${study.title}</h3>
                <p>${study.description}</p>
            </div>
            <div class="case-study-metrics">
                ${study.metrics.map(metric => `<div class="case-metric"><i class="fas fa-arrow-up"></i> ${metric}</div>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    
    grid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card reveal-stagger">
            <div class="testimonial-stars">
                ${Array(testimonial.rating).fill().map(() => '<i class="fas fa-star"></i>').join('')}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function animateCounters() {
    const metrics = document.querySelectorAll('.impact-metric-number');
    metrics.forEach(metric => {
        const target = parseInt(metric.getAttribute('data-target'));
        const suffix = metric.getAttribute('data-suffix') || '';
        let current = 0;
        const increment = target / 30;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                metric.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                metric.textContent = target + suffix;
            }
        };
        
        // Trigger animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && current === 0) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(metric);
    });
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
function applyBuildsignStaticContent(staticContent) {
    if (!staticContent) return;

    if (staticContent.seo?.title) {
        document.title = staticContent.seo.title;
    }

    const heroTitle = document.querySelector('.buildsign-hero-title');
    if (heroTitle && staticContent.hero?.title) {
        heroTitle.textContent = staticContent.hero.title;
    }

    const heroSubtitle = document.querySelector('.buildsign-hero-subtitle');
    if (heroSubtitle && staticContent.hero?.subtitle) {
        heroSubtitle.textContent = staticContent.hero.subtitle;
    }

    const heroLinks = document.querySelectorAll('.buildsign-hero-links .buildsign-link');
    if (heroLinks[0] && staticContent.hero?.links?.websiteHref) {
        heroLinks[0].setAttribute('href', staticContent.hero.links.websiteHref);
    }
    if (heroLinks[1] && staticContent.hero?.links?.linkedinHref) {
        heroLinks[1].setAttribute('href', staticContent.hero.links.linkedinHref);
    }
    if (heroLinks[2] && staticContent.hero?.links?.emailHref) {
        heroLinks[2].setAttribute('href', staticContent.hero.links.emailHref);
    }
}

async function loadDynamicBuildsignContent() {
    try {
        const response = await fetch('/api/content', { method: 'GET' });
        if (!response.ok) return;
        const payload = await response.json();
        if (!payload || !payload.ok || !payload.content) return;

        const buildsign = payload.content.buildsign;
        if (!buildsign) return;

        if (Array.isArray(buildsign.datasets?.buildsignServices)) {
            buildsignServices = buildsign.datasets.buildsignServices;
        }
        if (buildsign.datasets?.buildsignServicesDetails && typeof buildsign.datasets.buildsignServicesDetails === 'object') {
            buildsignServicesDetails = buildsign.datasets.buildsignServicesDetails;
        }
        if (Array.isArray(buildsign.datasets?.buildsignProcess)) {
            buildsignProcess = buildsign.datasets.buildsignProcess;
        }
        if (Array.isArray(buildsign.datasets?.buildsignWhy)) {
            buildsignWhy = buildsign.datasets.buildsignWhy;
        }
        if (Array.isArray(buildsign.datasets?.buildsignFAQs)) {
            buildsignFAQs = buildsign.datasets.buildsignFAQs;
        }

        applyBuildsignStaticContent(buildsign.static);
    } catch (error) {
        // Keep local fallback data.
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadDynamicBuildsignContent();

    renderServicesGrid();
    renderProcessGrid();
    renderWhyGrid();
    renderEngagementModels();
    renderCaseStudies();
    renderTestimonials();
    renderFAQGrid();
    animateCounters();

    if (typeof initRevealAnimations === 'function') {
        setTimeout(initRevealAnimations, 100);
    }
});
