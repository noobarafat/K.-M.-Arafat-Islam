// ==================== TBS EDGE Page JS ====================

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
function handleTBSBackNavigation() {
    if (window.history.length > 1 && document.referrer.includes(window.location.origin)) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
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

// ==================== Render Publications Grid ====================
const publications = [
    {
        id: 'oct-vit-explainable',
        title: 'Explainable Deep Neural Diagnostics: Vision Transformer-Based Retinal Disease Classification',
        conference: 'Proceedings of the 3rd International Conference on Big Data, IoT and Machine Learning (Springer)',
        index: 'Indexed Publication',
        publisher: 'Springer',
        link: 'https://link.springer.com/chapter/10.1007/978-3-032-15346-3_17#citeas',
        desc: 'Vision Transformer-driven retinal diagnostics with explainability features, published in Springer conference proceedings.'
    },
    {
        id: 'deepcactus',
        title: 'DeepCactus: A Transfer Learning-Driven CNN Model for Accurate Identification of Morphologically Overlapping Cactus Breeds',
        conference: 'Proceedings of the 3rd International Conference on Big Data, IoT and Machine Learning (Springer)',
        index: 'Indexed Publication',
        publisher: 'Springer',
        link: 'https://link.springer.com/chapter/10.1007/978-3-032-15346-3_44',
        desc: 'Transfer learning-based cactus breed identification study in Springer proceedings, focused on morphologically overlapping species.'
    },
    {
        id: 'walmart-forecasting',
        title: 'Resource-Efficient Deep Ensembles for Structured Retail Time-Series Forecasting: A Case Study on Walmart Sales',
        conference: '4th IEEE International Conference on Robotics, Automation, Artificial Intelligence and IoT (RAAICON 2025) — MIST, Dhaka',
        index: 'IEEE Xplore',
        desc: 'A parameter-efficient deep ensemble with shared MLP backbone achieves near-ensemble accuracy while training 4–5× faster with ~80% fewer parameters.'
    },
    {
        id: 'gi-ensemble-endoscopy',
        title: 'Ensemble Deep Learning for Automated Multiclass Classification of Gastrointestinal Disorders in Endoscopic Images',
        conference: '11th IEEE WIE Conference on Electrical and Computer Engineering (WIECON-ECE 2025) — Cox\'s Bazar',
        index: 'IEEE Xplore',
        desc: 'Weighted ensemble of DeepLabV3+, U-Net, and YOLOv4 achieved ~98% accuracy for automated multiclass gastrointestinal disorder classification from endoscopic images.'
    },
    {
        id: 'mental-health-rank-ensemble',
        title: 'Rank-Based Ensemble Learning for Early Detection of Mental Health Disorders in Private University Students',
        conference: '11th IEEE WIE Conference on Electrical and Computer Engineering (WIECON-ECE 2025) — Cox\'s Bazar',
        index: 'IEEE Xplore',
        desc: 'Rank-based ensemble of CatBoost, SAINT, and NODE improves robustness and balanced prediction of stress, anxiety, and depression severity levels.'
    },
    {
        id: 'thesis-idaa',
        title: 'Early Detection of Mental Health Disorders Among Private University Students in Bangladesh Using Machine Learning-Based Behavioral Data Analysis',
        conference: 'International Conference on Intelligent Data Analysis and Applications (IDAA 2025) — Daffodil International University',
        index: 'Atlantis Press / Taylor & Francis',
        desc: 'Undergraduate thesis analyzing behavioral survey data from 1,978 students; tuned CatBoost reached 99.79% accuracy with strong generalization.'
    },
    {
        id: 'tea-leaf-ensemble',
        title: 'A Transfer Learning-Based Ensemble Model for Automated Tea Leaf Disease Detection',
        conference: 'Undergraduate Conference on Intelligent Computing and Systems (UCICS 2026) — Varendra University',
        index: 'Conference Proceedings',
        desc: 'Lightweight ensemble combining DenseNet121, Xception, and MobileNet achieved 98.64% accuracy for automated tea leaf disease detection.'
    },
    {
        id: 'agile-pm-review',
        title: 'The Role of Agile Methodology in Enhancing Product Management Efficiency: A Review',
        conference: 'Undergraduate Conference on Intelligent Computing and Systems (UCICS 2026) — Varendra University',
        index: 'Conference Proceedings',
        desc: 'Systematic review (2023–2025) linking Agile practices with product efficiency outcomes such as delivery speed, quality, and stakeholder alignment.'
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

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initTBSReveal();
    renderPublicationsGrid();
});
