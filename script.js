// ==================== About Highlights Data ====================
const publications = [
    {
        id: "oct-vit-explainable",
        title: "Explainable Deep Neural Diagnostics: Vision Transformer-Based Retinal Disease Classification from OCT Images Using Gradient-Driven Visual Attribution",
        conference: "3rd International Conference on Big Data, IoT and Machine Learning (BIM 2025) — Dhaka International University, Bangladesh",
        index: "Springer / Kluwer",
        desc: "Vision Transformer–based OCT classification with gradient-driven visual attribution to improve transparency and interpretability for real clinical retinal disease screening."
    },
    {
        id: "deepcactus",
        title: "DeepCactus: A Transfer Learning-Driven CNN Model for Accurate Identification of Morphologically Overlapping Cactus Breeds",
        conference: "3rd International Conference on Big Data, IoT and Machine Learning (BIM 2025) — Dhaka International University, Bangladesh",
        index: "Springer / Kluwer",
        desc: "Transfer learning framework using VGG16 achieved ~96.83% accuracy in distinguishing visually overlapping cactus species from real-world field image data."
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

const aboutHighlights = [
    {
        id: "buildsign-founder",
        title: "Founder & CEO of BuildSign | Digital Product Agency",
        short: "BuildSign is more than an agency—it's a remote-first model built to bridge the gap between student skills and real paid opportunities, especially international work.",
        details: "BuildSign wasn't started only as a digital agency. I built it to solve a deeper issue: skilled students often lack real earning opportunities, especially remote or international work. After freelancing, I saw how online platforms remove location and schedule barriers. BuildSign became a shared opportunity—about ten people have worked with us and earned through flexible remote projects, sometimes supporting families. Beyond income, they gained confidence, professional experience, and long-term skills. We grow slowly and responsibly, shaped by Grameenphone Academy's learning-first mindset. The long-term goal is to train and support 10–20 students yearly."
    },
    {
        id: "fiverr-level1",
        title: "Level 1 Seller on Fiverr",
        short: "Freelancing became my real-market training ground—learning with earning through Grameenphone Academy and building global client experience that later shaped BuildSign.",
        details: "I started freelancing to apply my skills in a real market while learning continuously. Through the Grameenphone Academy Freelancing Factory program (learning with earning), I improved my UI/UX skills and launched on Fiverr. My first order came from an international client, showing how digital skills create value beyond local borders. Over time, each project strengthened my communication, client handling, and problem-solving. In a cohort of 100+ students, I became one of the top ten earners. Freelancing wasn't the final goal—it became the foundation for BuildSign, expanding from individual work to creating opportunities for others through a sustainable model."
    },
    {
        id: "spirit-on-jersey",
        title: "Owner of Spirit On Jersey",
        short: "A sports-driven brand idea built from a simple gap: too few trusted online jersey sellers. I focused on quality, customization, and customer trust from day one.",
        details: "Spirit On Jersey started from two things: my love for sports and the lack of trusted online jersey sellers. I wanted to create a place where people could buy quality, customized jerseys without worry. I still remember getting the first order on day one—it proved someone could trust the brand early. The beginning was tough: finding the right audience and understanding growth. Step by step, I learned business basics, digital marketing, jersey design, and customer psychology. People value quality and personalization, and repeat orders confirmed that. My goal is to build a trusted footprint and grow Spirit On Jersey into a remembered brand."
    },
    {
        id: "gp-certified",
        title: "Certified & Recognized by Grameenphone Ltd",
        short: "Official recognition for turning skill development into verified earnings and entrepreneurship—freelancing success plus founding a digital agency inside an impact-focused program.",
        details: "This recognition acknowledges my transition from skill development to sustainable income and entrepreneurship—verified freelancing earnings and founding a digital agency during a structured, impact-focused program. Grameenphone Academy, a Grameenphone Ltd. ESG initiative, provides free industry-relevant skills to create social and economic impact. In November 2024, it launched the 'Freelancing Factory' with the motto 'Learn with Earn.' I joined the UI/UX Design batch, started freelancing on Fiverr, achieved Level 1 Seller within six months, and founded BuildSign. Only two agencies emerged from the cohort; BuildSign was one, officially certified as a sustainable program outcome."
    },
    {
        id: "nebulae-soft",
        title: "Former UI Designer & UX Researccher at Nebulae-Soft",
        short: "My first structured product-team experience—learning real workflows, collaboration, and system-based execution that shaped how I manage projects and teams today.",
        details: "I joined Nebulae Soft in June 2024 as a UI Designer and UX Researcher, gaining my first exposure to structured, team-based work in a real product environment. I learned how responsibilities are distributed, how teams collaborate, and how design workflows connect with development, timelines, and delivery. I independently handled a project for an army-related client—running meetings, gathering requirements, and coordinating with the team—strengthening leadership, communication, and trust. A key challenge was aligning stakeholders, which I solved through clarity and regular clarification. This role shaped my system-oriented mindset, which I later applied directly in freelancing from January 2025 and in BuildSign."
    },
    {
        id: "diu-internship",
        title: "Former Intern, International Affairs– Daffodil International University",
        short: "Hands-on exposure to international coordination—content, communication, and event support that strengthened cross-cultural professionalism and systems thinking.",
        details: "I joined the International Affairs Office at Daffodil International University to learn how international collaboration and professional communication work in practice. I supported content writing, communication, and event management—helping students, guests, and partner institutions through clear information sharing and organized engagement. Interacting with international delegates improved my confidence and taught me that tone, clarity, and cultural awareness matter. I also saw how strong coordination across departments makes events successful and prevents inefficiency. This internship prepared me for international and multicultural environments, supports my work with global clients, and aligns with my interest in programs like Erasmus Mundus. The discipline and communication habits still influence how I run BuildSign."
    }
];

// ==================== Render About Grid ====================
function renderAboutGrid() {
    const grid = document.getElementById('about-grid');
    if (!grid) return;
    
    grid.innerHTML = aboutHighlights.map(item => `
        <div class="about-card">
            <h3 class="about-card-title">${item.title}</h3>
            <p class="about-card-short">${item.short}</p>
            <button class="btn-view-details" onclick="openAboutDetails('${item.id}')">
                View Details <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `).join('');
}

renderAboutGrid();

// ==================== Render Publications Grid ====================
function renderPublicationsGrid() {
    const grid = document.getElementById('publicationsGrid');
    if (!grid) return;
    
    grid.innerHTML = publications.map(pub => `
        <div class="publication-card">
            <div class="publication-header">
                <span class="publication-index">${pub.index}</span>
            </div>
            <h3 class="publication-title">${pub.title}</h3>
            <p class="publication-conference">${pub.conference}</p>
            <p class="publication-desc">${pub.desc}</p>
            <button class="btn-read-paper" disabled>
                <i class="fas fa-file-alt"></i>
                Read Paper (Soon)
            </button>
        </div>
    `).join('');
}

renderPublicationsGrid();

// ==================== About Details Modal ====================
function openAboutDetails(id) {
    const item = aboutHighlights.find(h => h.id === id);
    if (!item) return;
    
    document.getElementById('modal-breadcrumb-title').textContent = item.title;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-details').textContent = item.details;
    document.getElementById('about-details-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAboutDetails() {
    document.getElementById('about-details-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeAboutDetails();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAboutDetails();
    }
});

// Initialize about grid on page load
document.addEventListener('DOMContentLoaded', () => {
    renderAboutGrid();
});

// ==================== Mobile Menu Toggle ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== Navbar Scroll Effect ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// ==================== Active Navigation Link ====================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Smooth Scrolling ====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Skill Bars Animation ====================
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
            bar.style.animation = 'fillBar 1.5s ease-in-out forwards';
        }
    });
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// ==================== Scroll Reveal Animation ====================
const revealElements = () => {
    const reveals = document.querySelectorAll('.project-card, .skill-category, .contact-item, .info-item');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.project-card, .skill-category, .contact-item, .info-item');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
});

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// ==================== Contact Form Validation & Submission ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields!', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address!', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual backend API call)
    showNotification('Thank you! Your message has been sent successfully!', 'success');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send this data to a backend server
    // Example:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, subject, message })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     showNotification('Message sent successfully!', 'success');
    //     contactForm.reset();
    // })
    // .catch(error => {
    //     showNotification('Failed to send message. Please try again.', 'error');
    // });
});

// ==================== Notification System ====================
function showNotification(message, type) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 9999;
        animation: slideInRight 0.5s ease;
        font-weight: 500;
    `;
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

// ==================== Typing Effect for Tagline ====================
const taglineElement = document.querySelector('.tagline');
if (taglineElement) {
    const taglineText = taglineElement.textContent;
    taglineElement.textContent = '';
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < taglineText.length) {
            taglineElement.textContent += taglineText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// ==================== Project Card Tilt Effect ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== Scroll to Top Button ====================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 999;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
});

// ==================== Cursor Trail Effect (Optional) ====================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ==================== Initialize AOS (Animate On Scroll) Alternative ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// ==================== Performance Optimization ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedReveal = debounce(revealElements, 50);
const debouncedSkillBars = debounce(animateSkillBars, 50);

window.removeEventListener('scroll', revealElements);
window.removeEventListener('scroll', animateSkillBars);
window.addEventListener('scroll', debouncedReveal);
window.addEventListener('scroll', debouncedSkillBars);

// ==================== Console Message ====================
console.log('%c👋 Welcome to my Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped with ❤️ by K M Arafat Islam', 'color: #8b5cf6; font-size: 14px;');
console.log('%cInterested in the code? Check out my GitHub!', 'color: #10b981; font-size: 12px;');
