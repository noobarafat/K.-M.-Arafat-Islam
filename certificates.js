// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// ==================== Certificate Files List ====================
const certificateFiles = [
    "62b0c3911742a.pdf", "633b3873abf83.pdf", "633b3d03a1abc.pdf", "633b406c68a98.pdf", "633b420e10580.pdf",
    "633c580e97654.pdf", "633c5ad5d393b.pdf", "633fdb88386d7.pdf", "633fdc4e7ce04.pdf", "635847550abe4.pdf",
    "Attention Mechanism with Google Cloud.pdf", "Be Professional with LinkedIn.png", "Boss VS Leader.pdf",
    "Carer Planning From News Media.pdf", "certificate-acing-aptitude-tests.pdf",
    "certificate-advanced-skills-for-professional-landscape.pdf", "certificate-automation-the-future-workplace.pdf",
    "certificate-career-launchpad.pdf", "certificate-career-with-ai.pdf", "certificate-cv-writing-for-professionals.pdf",
    "certificate-design-system-in-figma.pdf", "certificate-facebook-marketing-course.pdf",
    "certificate-innovation-at-work.pdf", "certificate-leadership-skills.pdf",
    "certificate-masterclass-on-you-should-learn-cybersecurity.pdf", "certificate-module-1-basics-of-entrepreneurship.pdf",
    "certificate-module-1-introduction-to-wordpress.pdf", "certificate-module-1-research-nutshell.pdf",
    "certificate-module-10-company-formation-legal-know-hows-and-governance.pdf", "certificate-module-2-customer-persona.pdf",
    "certificate-module-2-wordpress-installation.pdf", "certificate-module-3-basic-of-wordpress-part-1.pdf",
    "certificate-module-3-market-research-and-market-sizing.pdf", "certificate-module-4-setting-your-key-metrics.pdf",
    "certificate-module-5-product-development-using-design-thinking-minimum-viable-product-mvp.pdf",
    "certificate-module-6-startup-financial-model.pdf", "certificate-module-7-business-model-canvas.pdf",
    "certificate-module-8-investment-readiness.pdf", "certificate-module-9-pitch-deck-readiness-and-pitching-to-investors.pdf",
    "certificate-ms-excel-beginner-to-advanced.pdf", "certificate-ms-powerpoint-advanced-course.pdf",
    "certificate-online-safety.pdf", "certificate-professional-content-writing.pdf",
    "certificate-tips-and-techniques-on-interview-and-assessment-centre.pdf", "certificate_instructor_sabur-khan.pdf",
    "certs (1).pdf", "certs.pdf", "cert_232942.png", "Common Etiqutte of LIfe.pdf",
    "Create Image Captioning Models with Google Cloud.pdf", "Digital Leteracy Course for Youth.pdf",
    "Email Writing Etiquate.pdf", "Employability Skils.pdf", "Encoder-Decoder Architecture with Google Cloud.pdf",
    "English For University Students.pdf", "Generative AI Fundamentals with Google Cloud.pdf",
    "goedu-certificate-instructor-ejaj-ur-rahman.pdf", "goedu-certificate-instructor-muhammad-sajidul-islam.pdf",
    "goedu-certificate-instructor-nusrat-tasnim-2.pdf", "goedu-certificate-instructor-shah-fahad-hossain.pdf",
    "How To say NO How to propose.pdf", "Introduction to Gen AI Studio with Google Cloud.pdf",
    "Introduction to Generative AI with Google Cloud.pdf", "Introduction to Image Generation with Google Cloud.pdf",
    "Introduction to Large Language Models with Google Cloud.pdf", "Introduction to Liberal Values.pdf",
    "K M Arafat Islam.pdf", "K.-M.-Arafat-Islam.jpg", "Know Thyself.pdf", "k_m_arafat_islam_2023_stage_2_certificate.pdf",
    "MS Excel.png", "MS Powerpoint Advance Course.png", "Possitibity.pdf", "Resume Writing Skill.pdf",
    "Setting and Achieving Focus, Goals and Targets.pdf", "Soft Skill & Hard Skill.pdf", "some.pdf",
    "Spoken English.png", "Start A CV.pdf", "The Art of Public Speaking.pdf",
    "Transformer Models and BERT Model with Google Cloud.pdf", "Writing Professional Emails.pdf"
];

// ==================== Title Generation ====================
function generateTitleFromFilename(filename) {
    let title = filename.replace(/\.(pdf|png|jpg|jpeg|jfif|webp)$/i, '');
    title = title.replace(/[_-]/g, ' ');
    title = title.replace(/\b(final|certificate|cert|copy|scan|image|img|pdf)\b/gi, '');
    title = title.replace(/\s+/g, ' ').trim();
    
    if (!title || title.length === 0) {
        return 'Certificate';
    }
    
    title = title.split(' ')
        .filter(word => word.length > 0)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    
    return title.length > 0 ? title : 'Certificate';
}

function getFileExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}

function isPDF(filename) {
    return getFileExtension(filename) === 'pdf';
}

// ==================== PDF Rendering ====================
const pdfCache = new Map();

async function renderPDFToCanvas(url, canvas, maxWidth = 300) {
    try {
        let pdf;
        if (pdfCache.has(url)) {
            pdf = pdfCache.get(url);
        } else {
            const loadingTask = pdfjsLib.getDocument(url);
            pdf = await loadingTask.promise;
            pdfCache.set(url, pdf);
        }
        
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const scale = maxWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });
        
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;
        
        const context = canvas.getContext('2d');
        await page.render({
            canvasContext: context,
            viewport: scaledViewport
        }).promise;
        
        return true;
    } catch (error) {
        console.error('PDF rendering failed:', error);
        return false;
    }
}

// ==================== Render Certificates Grid ====================
async function renderCertificatesGrid() {
    const grid = document.getElementById('certificatesGalleryGrid');
    if (!grid) return;
    
    grid.innerHTML = certificateFiles.map((filename, index) => {
        const title = generateTitleFromFilename(filename) || 'Certificate';
        const url = `assets/soft/${filename}`;
        const isImage = !isPDF(filename);
        
        return `
            <div class="certificate-gallery-card" data-index="${index}">
                <div class="certificate-gallery-preview">
                    ${isImage 
                        ? `<img src="${url}" alt="${title}" class="certificate-gallery-thumbnail" loading="lazy">`
                        : `<canvas class="certificate-gallery-thumbnail-canvas" data-url="${url}"></canvas>`
                    }
                </div>
                <div class="certificate-gallery-info">
                    <h4 class="certificate-gallery-title">${title}</h4>
                </div>
                <button class="btn-certificate-open" onclick="openCertificateModal('${url}', '${title}', ${!isImage})">
                    <i class="fas fa-external-link-alt"></i> Open Certificate
                </button>
            </div>
        `;
    }).join('');
    
    // Render PDF thumbnails
    const canvases = grid.querySelectorAll('.certificate-gallery-thumbnail-canvas');
    for (const canvas of canvases) {
        const url = canvas.getAttribute('data-url');
        const success = await renderPDFToCanvas(url, canvas, 300);
        if (!success) {
            canvas.parentElement.innerHTML = `<div class="certificate-gallery-pdf-icon"><i class="fas fa-file-certificate"></i></div>`;
        }
    }
}

// ==================== Certificate Modal ====================
let currentCertificateUrl = '';

async function openCertificateModal(url, title, isPdf) {
    const modal = document.getElementById('certificate-viewer-modal');
    const titleEl = document.getElementById('certificate-viewer-title');
    const img = document.getElementById('certificate-viewer-image');
    const canvas = document.getElementById('certificate-viewer-canvas');
    const newTabBtn = document.getElementById('btn-open-new-tab');
    
    currentCertificateUrl = url;
    titleEl.textContent = title;
    
    img.style.display = 'none';
    canvas.style.display = 'none';
    newTabBtn.style.display = 'none';
    
    if (isPdf) {
        const success = await renderPDFToCanvas(url, canvas, 1200);
        if (success) {
            canvas.style.display = 'block';
        } else {
            newTabBtn.style.display = 'inline-flex';
            newTabBtn.onclick = () => window.open(url, '_blank');
        }
    } else {
        img.src = url;
        img.style.display = 'block';
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCertificateViewer() {
    const modal = document.getElementById('certificate-viewer-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentCertificateUrl = '';
}

// ==================== Mobile Menu Toggle ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ==================== ESC Key Handler ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertificateViewer();
    }
});

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    // Remove all navbar active states on certificates page
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    renderCertificatesGrid();
    
    // Initialize reveal animations
    if (typeof initRevealAnimations === 'function') {
        initRevealAnimations();
    }
});
