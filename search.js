// ==================== Portfolio Search System ====================

const searchIndex = [
    // Main Sections
    { id: 'home', title: 'Home', subtitle: 'Portfolio Landing', keywords: ['home', 'landing', 'hero', 'introduction'], type: 'section', href: '/#home', excerpt: 'Hello, I\'m K. M. Arafat Islam - Founder & CEO @BuildSign' },
    { id: 'about', title: 'About', subtitle: 'My Story', keywords: ['about', 'story', 'background', 'biography'], type: 'section', href: '/#about', excerpt: 'Learn about my journey, interests, and what drives me' },
    { id: 'education', title: 'Education', subtitle: 'Academic Background', keywords: ['education', 'university', 'degree', 'diu', 'daffodil'], type: 'section', href: '/#education', excerpt: 'CSE student at Daffodil International University' },
    { id: 'publications', title: 'Publications', subtitle: 'Research Papers', keywords: ['publications', 'research', 'papers', 'ieee', 'ml', 'ai'], type: 'section', href: '/#publications', excerpt: 'Machine learning and AI research publications' },
    { id: 'eca', title: 'Extra-Curricular Activities', subtitle: 'Leadership & Experience', keywords: ['eca', 'activities', 'leadership', 'clubs', 'organizations'], type: 'section', href: '/#eca', excerpt: 'Campus leadership, international programs, and community work' },
    { id: 'skills', title: 'Skills & Certifications', subtitle: 'Technical Expertise', keywords: ['skills', 'certifications', 'certificates', 'courses', 'expertise'], type: 'section', href: '/#skills', excerpt: 'UI/UX, development, machine learning, and professional certifications' },
    { id: 'events', title: 'International Events', subtitle: 'Global Programs', keywords: ['events', 'international', 'programs', 'summits', 'courses'], type: 'section', href: '/#events', excerpt: 'International academic programs and global youth summits' },
    { id: 'contact', title: 'Contact', subtitle: 'Get In Touch', keywords: ['contact', 'email', 'reach', 'connect', 'message'], type: 'section', href: '/#contact', excerpt: 'Let\'s connect - reach out for opportunities or collaborations' },
    
    // About Details
    { id: 'buildsign', title: 'BuildSign', subtitle: 'Digital Product Agency', keywords: ['buildsign', 'agency', 'startup', 'founder', 'ceo', 'fiverr', 'business'], type: 'page', href: '/buildsign.html', excerpt: 'Founder & CEO of BuildSign - Digital product agency serving 200+ global clients' },
    { id: 'fiverr', title: 'Fiverr Success Story', subtitle: 'Top Rated Seller', keywords: ['fiverr', 'freelance', 'top rated', 'seller', 'clients', 'revenue'], type: 'details', href: '/buildsign.html#fiverr', excerpt: 'Level Two Seller managing 200+ orders with $10K+ revenue' },
    { id: 'spirit-on-jersey', title: 'Spirit On Jersey', subtitle: 'Fashion Startup', keywords: ['spirit', 'jersey', 'fashion', 'startup', 'clothing', 'brand'], type: 'details', href: '/buildsign.html#spirit', excerpt: 'Fashion startup merging creativity with entrepreneurial discipline' },
    { id: 'nebulae', title: 'Nebulae', subtitle: 'Scientific Publication', keywords: ['nebulae', 'science', 'publication', 'research', 'astronomy'], type: 'page', href: '/nebulae.html', excerpt: 'Founded Nebulae - scientific publication focusing on science communication' },
    { id: 'intl-affairs', title: 'International Affairs', subtitle: 'DIU Internship', keywords: ['international', 'affairs', 'diu', 'internship', 'global', 'coordination'], type: 'page', href: '/international-affairs.html', excerpt: 'Former Intern at DIU International Affairs Office' },
    
    // ECA Pages
    { id: 'cs-club', title: 'CS Club', subtitle: 'DIU CS Club', keywords: ['cs', 'club', 'diu', 'computer', 'science', 'programming'], type: 'page', href: '/cs-club.html', excerpt: 'Active member of DIU Computer Science Club' },
    { id: 'ieee-pr', title: 'IEEE DIU PR Coordinator', subtitle: 'Public Relations', keywords: ['ieee', 'pr', 'coordinator', 'events', 'programming hero'], type: 'page', href: '/ieee-pr.html', excerpt: 'Organized 38 events with 70-100 participants including Programming Hero collaboration' },
    { id: 'creative-it', title: 'Creative IT Ambassador', subtitle: 'Campus Ambassador', keywords: ['creative', 'it', 'ambassador', 'education', 'outreach'], type: 'page', href: '/creative-it.html', excerpt: 'Campus Ambassador for Creative IT Institute' },
    { id: 'programming-hero', title: 'Programming Hero', subtitle: 'Campus Hero', keywords: ['programming', 'hero', 'campus', 'network', 'coordination'], type: 'page', href: '/programming-hero.html', excerpt: 'Campus Hero coordinating network of 20+ institutions and ~1,000 students' },
    { id: 'tbs-edge', title: 'TBS EDGE Associate', subtitle: 'The Business Standard', keywords: ['tbs', 'edge', 'business', 'standard', 'newsroom', 'editorial'], type: 'page', href: '/tbs-edge.html', excerpt: 'EDGE Associate at The Business Standard newsroom' },
    { id: 'banglay-ielts', title: 'Banglay IELTS Campus Crew', subtitle: 'IELTS & Immigration', keywords: ['banglay', 'ielts', 'immigration', 'education', 'global'], type: 'page', href: '/banglay-ielts.html', excerpt: 'Campus Crew for Banglay IELTS & Immigration Centre' },
    
    // International Events
    { id: 'commtech', title: 'CommTECH Nusantara 2023', subtitle: 'ITS, Indonesia', keywords: ['commtech', 'indonesia', 'its', 'virtual', 'culture', 'technology'], type: 'details', href: '/#events', excerpt: 'International virtual exchange exploring Indonesian culture and technology' },
    { id: 'climate-summit', title: 'Global Youth Climate Summit 2023', subtitle: 'Virtual Delegate', keywords: ['climate', 'summit', 'delegate', 'sustainability', 'tanzania'], type: 'details', href: '/#events', excerpt: 'Selected as Virtual Delegate for global youth climate action discussions' },
    { id: 'rmi-week', title: 'RMI Week 2023', subtitle: 'UNISSULA, Indonesia', keywords: ['rmi', 'resilience', 'disaster', 'infrastructure', 'indonesia'], type: 'details', href: '/#events', excerpt: 'International short course on city resilience and disaster mitigation' },
    { id: 'ubaya', title: 'UBAYA Online Summer Program 2023', subtitle: 'Digital Transformation', keywords: ['ubaya', 'summer', 'ai', 'chatgpt', 'metaverse', 'digital'], type: 'details', href: '/#events', excerpt: 'Global short courses on AI, ChatGPT, and digital transformation' },
    { id: 'reuters', title: 'Introduction to Digital Journalism', subtitle: 'Reuters', keywords: ['reuters', 'journalism', 'media', 'fact-checking', 'ethics'], type: 'details', href: '/#events', excerpt: 'Reuters training on media ethics and digital journalism' },
    { id: 'locust', title: 'LOCUST 2022', subtitle: 'UNISSULA, Indonesia', keywords: ['locust', 'culture', 'science', 'technology', 'indonesia'], type: 'details', href: '/#events', excerpt: 'Local Culture, Science & Technology international short program' },
    
    // Publications
    { id: 'pub-catboost', title: 'CatBoost Classifier for Intrusion Detection', subtitle: 'IEEE CCWC 2024', keywords: ['catboost', 'intrusion', 'detection', 'cybersecurity', 'machine learning'], type: 'publication', href: '/#publications', excerpt: 'Machine learning approach for network intrusion detection using CatBoost' },
    { id: 'pub-stroke', title: 'Stroke Prediction with Machine Learning', subtitle: 'IEEE TENSYMP 2024', keywords: ['stroke', 'prediction', 'healthcare', 'ml', 'classification'], type: 'publication', href: '/#publications', excerpt: 'Predicting stroke risk using ensemble machine learning models' },
    { id: 'pub-chronic-kidney', title: 'Chronic Kidney Disease Prediction', subtitle: 'IEEE TENSYMP 2024', keywords: ['kidney', 'disease', 'prediction', 'healthcare', 'ml'], type: 'publication', href: '/#publications', excerpt: 'Early detection of chronic kidney disease using ML algorithms' },
    { id: 'pub-heart-disease', title: 'Heart Disease Prediction', subtitle: 'IEEE iSAI-NLP 2024', keywords: ['heart', 'disease', 'cardiovascular', 'prediction', 'ml'], type: 'publication', href: '/#publications', excerpt: 'Cardiovascular disease prediction with machine learning' },
    { id: 'pub-intrusion-review', title: 'Intrusion Detection Systems Review', subtitle: 'IEEE TENSYMP 2024', keywords: ['intrusion', 'detection', 'review', 'cybersecurity', 'survey'], type: 'publication', href: '/#publications', excerpt: 'Comprehensive review of machine learning in intrusion detection' },
    { id: 'pub-brain-tumor', title: 'Brain Tumor Detection', subtitle: 'IEEE TENSYMP 2024', keywords: ['brain', 'tumor', 'detection', 'medical', 'imaging', 'cnn'], type: 'publication', href: '/#publications', excerpt: 'Deep learning for brain tumor detection from MRI scans' },
    { id: 'pub-diabetes', title: 'Diabetes Prediction', subtitle: 'IEEE TENSYMP 2024', keywords: ['diabetes', 'prediction', 'healthcare', 'classification'], type: 'publication', href: '/#publications', excerpt: 'Early diabetes prediction using machine learning techniques' },
    { id: 'pub-lung-cancer', title: 'Lung Cancer Detection', subtitle: 'IEEE R10-HTC 2024', keywords: ['lung', 'cancer', 'detection', 'medical', 'imaging'], type: 'publication', href: '/#publications', excerpt: 'AI-driven lung cancer detection from medical imaging' },
    
    // Certificates
    { id: 'certificates', title: 'Professional Certificates', subtitle: 'Coursera & Others', keywords: ['certificates', 'coursera', 'google', 'meta', 'duke', 'ui', 'ux'], type: 'page', href: '/certificates.html', excerpt: 'View all professional certifications including Google UX Design, Meta courses, and more' },
    { id: 'other-certificates', title: 'Other Certificates (80+)', subtitle: 'Additional Certifications', keywords: ['certificates', 'additional', 'courses', 'training'], type: 'page', href: '/other-certificates.html', excerpt: '80+ additional certificates from various platforms and programs' },
    
    // Skills
    { id: 'ui-ux', title: 'UI/UX Design', subtitle: 'Design Skills', keywords: ['ui', 'ux', 'design', 'figma', 'prototyping', 'wireframe'], type: 'skill', href: '/#skills', excerpt: 'User interface and experience design expertise' },
    { id: 'frontend', title: 'Frontend Development', subtitle: 'Web Development', keywords: ['frontend', 'html', 'css', 'javascript', 'react', 'web'], type: 'skill', href: '/#skills', excerpt: 'HTML, CSS, JavaScript, and modern frameworks' },
    { id: 'ml-ai', title: 'Machine Learning & AI', subtitle: 'Technical Skills', keywords: ['machine learning', 'ai', 'python', 'tensorflow', 'ml', 'data'], type: 'skill', href: '/#skills', excerpt: 'Machine learning, AI, and data science expertise' }
];

let currentFocusIndex = -1;
let searchResults = [];

function initSearchBar() {
    const searchToggleBtn = document.getElementById('search-toggle-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const searchCloseBtn = document.getElementById('search-close-btn');
    const searchInput = document.getElementById('portfolio-search');
    const searchDropdown = document.getElementById('search-results-dropdown');
    
    if (!searchInput || !searchDropdown || !searchToggleBtn || !searchOverlay || !searchCloseBtn) return;
    
    let currentFocusIndex = -1;
    
    // Open search overlay
    searchToggleBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });
    
    // Close search overlay
    function closeSearch() {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        closeSearchDropdown();
    }
    
    searchCloseBtn.addEventListener('click', closeSearch);
    
    // Close on ESC key
    searchOverlay.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearch();
        }
    });
    
    // Close when clicking outside content
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            closeSearch();
        }
    });
    
    // Input event
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        
        if (query.length === 0) {
            closeSearchDropdown();
            return;
        }
        
        if (query.length < 2) return;
        
        searchResults = performSearch(query);
        renderSearchResults(searchResults);
        currentFocusIndex = -1;
    });
    
    // Focus event
    searchInput.addEventListener('focus', (e) => {
        const query = e.target.value.trim();
        if (query.length >= 2) {
            searchResults = performSearch(query);
            renderSearchResults(searchResults);
        }
    });
    
    // Keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        const resultsItems = searchDropdown.querySelectorAll('.search-result-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentFocusIndex = Math.min(currentFocusIndex + 1, resultsItems.length - 1);
            updateFocusedResult(resultsItems);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentFocusIndex = Math.max(currentFocusIndex - 1, -1);
            updateFocusedResult(resultsItems);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentFocusIndex >= 0 && resultsItems[currentFocusIndex]) {
                resultsItems[currentFocusIndex].click();
            }
        }
    });
}

function performSearch(query) {
    const lowerQuery = query.toLowerCase();
    
    const results = searchIndex.map(item => {
        let score = 0;
        
        // Title match (highest priority)
        if (item.title.toLowerCase().includes(lowerQuery)) {
            score += 10;
        }
        
        // Keyword match (medium priority)
        const keywordMatch = item.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
        if (keywordMatch) {
            score += 5;
        }
        
        // Excerpt match (low priority)
        if (item.excerpt.toLowerCase().includes(lowerQuery)) {
            score += 2;
        }
        
        // Subtitle match
        if (item.subtitle.toLowerCase().includes(lowerQuery)) {
            score += 3;
        }
        
        return { ...item, score };
    });
    
    // Filter and sort
    return results
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8);
}

function renderSearchResults(results) {
    const searchDropdown = document.getElementById('search-results-dropdown');
    
    if (results.length === 0) {
        searchDropdown.innerHTML = '<div class="search-no-results">No matching results found</div>';
        searchDropdown.classList.add('active');
        return;
    }
    
    searchDropdown.innerHTML = results.map((item, index) => `
        <div class="search-result-item" data-index="${index}" data-href="${item.href}" onclick="navigateToResult('${item.href}')">
            <div class="search-result-icon">
                <i class="fas ${getResultIcon(item.type)}"></i>
            </div>
            <div class="search-result-content">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-subtitle">${item.subtitle}</div>
            </div>
            <div class="search-result-type">${item.type}</div>
        </div>
    `).join('');
    
    searchDropdown.classList.add('active');
}

function getResultIcon(type) {
    const icons = {
        'section': 'fa-layer-group',
        'page': 'fa-file-alt',
        'details': 'fa-info-circle',
        'publication': 'fa-file-invoice',
        'skill': 'fa-code',
        'certificate': 'fa-certificate'
    };
    return icons[type] || 'fa-circle';
}

function updateFocusedResult(items) {
    items.forEach((item, index) => {
        if (index === currentFocusIndex) {
            item.classList.add('focused');
            item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } else {
            item.classList.remove('focused');
        }
    });
}

function navigateToResult(href) {
    const searchOverlay = document.getElementById('search-overlay');
    searchOverlay.classList.remove('active');
    closeSearchDropdown();
    document.getElementById('portfolio-search').value = '';
    
    if (href.startsWith('/#')) {
        // Hash navigation
        const hash = href.substring(2);
        
        if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
            window.location.href = href;
        } else {
            const section = document.getElementById(hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    } else {
        // Page navigation
        window.location.href = href;
    }
}

function closeSearchDropdown() {
    const searchDropdown = document.getElementById('search-results-dropdown');
    if (searchDropdown) {
        searchDropdown.classList.remove('active');
        searchDropdown.innerHTML = '';
    }
    currentFocusIndex = -1;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initSearchBar);
