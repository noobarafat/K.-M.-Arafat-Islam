// ==================== TBS EDGE Page JS ====================

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
function handleTBSBackNavigation() {
    if (window.history.length > 1 && document.referrer.includes(window.location.origin)) {
        window.history.back();
    } else {
        window.location.href = '/';
    }
}

// Scroll Reveal Animations
function initTBSReveal() {
    const revealElements = document.querySelectorAll('.tbs-scope-item, .tbs-learned-card, .tbs-cta-card');
    
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
    initTBSReveal();
});

// ==================== Render Publications Grid ====================
const publications = [
    {
        id: "oct-vit-explainable",
        title: "Explainable Deep Neural Diagnostics: Vision Transformer-Based Retinal Disease Classification",
        conference: "Proceedings of the 3rd International Conference on Big Data, IoT and Machine Learning (Springer)",
        index: "Indexed Publication",
        publisher: "Springer",
        link: "https://link.springer.com/chapter/10.1007/978-3-032-15346-3_17#citeas",
        desc: "Vision Transformer-driven retinal diagnostics with explainability features, published in Springer conference proceedings."
    },
    {
        id: "deepcactus",
        title: "DeepCactus: A Transfer Learning-Driven CNN Model for Accurate Identification of Morphologically Overlapping Cactus Breeds",
        conference: "Proceedings of the 3rd International Conference on Big Data, IoT and Machine Learning (Springer)",
        index: "Indexed Publication",
        publisher: "Springer",
        link: "https://link.springer.com/chapter/10.1007/978-3-032-15346-3_44",
        desc: "Transfer learning-based cactus breed identification study in Springer proceedings, focused on morphologically overlapping species."
    },
    {
        id: "walmart-forecasting",
        title: "Resource-Efficient Deep Ensembles for Structured Retail Time-Series Forecasting: A Case Study on Walmart Sales",
        conference: "4th IEEE International Conference on Robotics, Automation, Artificial Intelligence and IoT (RAAICON 2025) — MIST, Dhaka",
        index: "IEEE Xplore",
        desc: "A parameter-efficient deep ensemble with shared MLP backbone achieves near-ensemble accuracy while training 4–5× faster with ~80% fewer parameters."
    },
    {
        id: "gi-ensemble-endoscopy",
        title: "Ensemble Deep Learning for Automated Multiclass Classification of Gastrointestinal Disorders in Endoscopic Images",
        conference: "11th IEEE WIE Conference on Electrical and Computer Engineering (WIECON-ECE 2025) — Cox's Bazar",
        index: "IEEE Xplore",
        desc: "Weighted ensemble of DeepLabV3+, U-Net, and YOLOv4 achieved ~98% accuracy for automated multiclass gastrointestinal disorder classification from endoscopic images."
    },
    {
        id: "mental-health-rank-ensemble",
        title: "Rank-Based Ensemble Learning for Early Detection of Mental Health Disorders in Private University Students",
        conference: "11th IEEE WIE Conference on Electrical and Computer Engineering (WIECON-ECE 2025) — Cox's Bazar",
        index: "IEEE Xplore",
        desc: "Rank-based ensemble of CatBoost, SAINT, and NODE improves robustness and balanced prediction of stress, anxiety, and depression severity levels."
    },
    {
        id: "thesis-idaa",
        title: "Early Detection of Mental Health Disorders Among Private University Students in Bangladesh Using Machine Learning-Based Behavioral Data Analysis",
        conference: "International Conference on Intelligent Data Analysis and Applications (IDAA 2025) — Daffodil International University",
        index: "Atlantis Press / Taylor & Francis",
        desc: "Undergraduate thesis analyzing behavioral survey data from 1,978 students; tuned CatBoost reached 99.79% accuracy with strong generalization."
    },
    {
        id: "tea-leaf-ensemble",
        title: "A Transfer Learning-Based Ensemble Model for Automated Tea Leaf Disease Detection",
        conference: "Undergraduate Conference on Intelligent Computing and Systems (UCICS 2026) — Varendra University",
        index: "Conference Proceedings",
        desc: "Lightweight ensemble combining DenseNet121, Xception, and MobileNet achieved 98.64% accuracy for automated tea leaf disease detection."
    },
    {
        id: "agile-pm-review",
        title: "The Role of Agile Methodology in Enhancing Product Management Efficiency: A Review",
        conference: "Undergraduate Conference on Intelligent Computing and Systems (UCICS 2026) — Varendra University",
        index: "Conference Proceedings",
        desc: "Systematic review (2023–2025) linking Agile practices with product efficiency outcomes such as delivery speed, quality, and stakeholder alignment."
    }
];

function renderPublicationsGrid() {
    const grid = document.getElementById('publicationsGrid');
    if (!grid) return;
    
    grid.innerHTML = publications.map(pub => `
        <div class="publication-card">
            <div class="publication-header">
                <span class="publication-index">${pub.index}</span>
                ${pub.publisher === 'Springer' ? '<span class="publication-badge springer-badge">Springer</span>' : ''}
            </div>
            <h3 class="publication-title"><strong>${pub.title}</strong></h3>
            <p class="publication-conference">${pub.conference}</p>
            <p class="publication-desc">${pub.desc}</p>
            ${pub.link ? `
                <a class="btn-view-publication" href="${pub.link}" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i>
                    View Publication
                </a>
            ` : `
                <button class="btn-read-paper" disabled>
                    <i class="fas fa-file-alt"></i>
                    Read Paper (Soon)
                </button>
            `}
        </div>
    `).join('');
}

renderPublicationsGrid();

// ==================== Publication Card Styling ====================
.publication-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.publication-badge {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.02em;
}

.springer-badge {
    background: rgba(124, 58, 237, 0.12);
    border: 1px solid rgba(124, 58, 237, 0.4);
    color: var(--purple);
}

.btn-view-publication {
    padding: 12px 24px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--purple), var(--purple-600));
    border: 2px solid transparent;
    color: var(--btnText);
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.25s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    align-self: flex-start;
    text-decoration: none;
}

.btn-view-publication:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(124, 58, 237, 0.35);
}

.btn-view-publication i {
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .btn-view-publication {
        width: 100%;
        justify-content: center;
    }
}

.buildsign-services {
    padding: 56px 0;
}

.buildsign-services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(20px, 2.4vw, 28px);
}

@media (min-width: 768px) {
    .buildsign-services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .buildsign-services-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.buildsign-service-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    padding: clamp(22px, 3vw, 28px);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(3, 7, 18, 0.2);
}

.buildsign-service-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(140deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0) 42%);
    opacity: 0.7;
}

.buildsign-service-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background: radial-gradient(420px circle at 10% 0%, rgba(124, 58, 237, 0.18), transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.buildsign-service-card:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(124, 58, 237, 0.35);
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(16, 24, 40, 0.3);
}

.buildsign-service-card:hover::after {
    opacity: 1;
}

.service-card-icon {
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.92), rgba(59, 130, 246, 0.9));
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.25rem;
    margin-bottom: 18px;
    box-shadow: 0 6px 18px rgba(124, 58, 237, 0.28);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.buildsign-service-card:hover .service-card-icon {
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.4);
}

.service-card-title {
    font-size: clamp(1.08rem, 1.7vw, 1.2rem);
    font-weight: 700;
    color: var(--text-main);
    margin: 0 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.35;
}

.service-card-description {
    font-size: 0.92rem;
    line-height: 1.72;
    color: var(--text-muted);
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex: 1;
}

.service-card-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
    padding-top: 14px;
    border-top: 1px solid rgba(124, 58, 237, 0.16);
    color: var(--purple);
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1;
    transition: color 0.3s ease, border-color 0.3s ease;
}

.service-card-action-label {
    transition: color 0.3s ease;
}

.service-card-action i {
    transition: transform 0.3s ease;
}

.buildsign-service-card:hover .service-card-action {
    border-color: rgba(124, 58, 237, 0.3);
}

.buildsign-service-card:hover .service-card-action-label {
    color: var(--text-main);
}

.buildsign-service-card:hover .service-card-action i {
    transform: translateX(5px);
}

@media (prefers-reduced-motion: reduce) {
    .buildsign-service-card,
    .buildsign-service-card::after,
    .service-card-icon,
    .service-card-action,
    .service-card-action-label,
    .service-card-action i {
        transition: none;
    }

    .buildsign-service-card:hover {
        transform: none;
    }
}

<section id="bs-services" class="buildsign-services">
    <div class="container">
        <div class="buildsign-section-header reveal">
            <h2>Services</h2>
        </div>
        <div class="buildsign-services-grid" id="servicesGrid">
            <!-- Rendered per item -->
            <!--
            <div class="buildsign-service-card reveal-stagger" onclick="openServiceModal('app-design')">
                <div class="service-card-icon"><i class="fas fa-mobile-alt"></i></div>
                <h3 class="service-card-title">App Design</h3>
                <p class="service-card-description">User-centered mobile experiences that feel intuitive and premium.</p>
                <div class="service-card-action">
                    <span class="service-card-action-label">View Details</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            -->
        </div>
    </div>
</section>
