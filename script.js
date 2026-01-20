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

const activities = [
    {
        id: "diu-cyber-club",
        role: "Communication & Organizing Secretary",
        org: "DIU Cyber Security Club",
        category: ["Leadership", "Events", "Communication", "Community"],
        metrics: [
            { label: "Events Led", value: "25+" },
            { label: "Students Reached", value: "6,000+" }
        ],
        highlights: [
            "Handled content writing, email communication, documentation, and social media.",
            "Led planning and execution of 25+ seminars, workshops, and competitions.",
            "Improved outreach and internal coordination to solve participation and communication issues."
        ],
        desc: "I was actively involved in the Cyber Security Club at Daffodil International University, where I initially served as Communication Secretary and later took on the role of Organizing Secretary. My responsibilities began with content writing, email communication, documentation, and social media management, which strengthened the club's internal and external communication. As Organizing Secretary, I led the planning and execution of more than 25 seminars, workshops, and competitions—coordinating teams, schedules, and smooth delivery. Through these activities, the club reached and benefited over 6,000 students. This experience developed my communication, leadership, and planning skills and directly supports my current work in agency management and client communication."
    },
    {
        id: "ieee-pr",
        role: "Public Relations Coordinator",
        org: "IEEE DIU Student Branch",
        category: ["PR / Media", "Communication", "Events", "Leadership"],
        metrics: [
            { label: "Events Supported", value: "38" },
            { label: "Avg Participants", value: "70–100" }
        ],
        highlights: [
            "Coordinated with IEEE branches across Bangladesh for announcements and outreach.",
            "Helped organize and promote 38 events with consistent documentation.",
            "Led a 3-day programming program with Programming Hero + competition + bootcamp access."
        ],
        desc: "I served as a Public Relations Coordinator at the IEEE DIU Student Branch, managing internal communication and strengthening collaboration with other IEEE student branches across Bangladesh. I coordinated with different university branches to promote events, share announcements in official groups, and increase participation through structured outreach. During my tenure, I supported 38 events with 70–100 participants on average. A key initiative was a three-day programming event with Programming Hero: three technical sessions, followed by a competition; top three winners received prizes and all participants got a 21-day free bootcamp. This role strengthened my communication, branding, and stakeholder management skills—directly supporting my agency branding and client communication today."
    },
    {
        id: "creative-it-ambassador",
        role: "Campus Ambassador",
        org: "Creative IT Institute",
        category: ["Community", "Communication"],
        metrics: [
            { label: "Outreach Posts", value: "40+" },
            { label: "Student Leads", value: "150+" }
        ],
        highlights: [
            "Promoted practical IT skill development opportunities to students.",
            "Acted as a bridge between the institute and the student community.",
            "Encouraged peers to explore skill-based learning pathways for employability."
        ],
        desc: "I served as a Campus Ambassador for Creative IT Institute, promoting access to practical IT skill development and increasing student engagement with technology-focused learning initiatives. I acted as a bridge between the institute and the university student community—sharing program information through student networks and encouraging participation in training initiatives related to digital skills. Through consistent outreach, I supported peers in exploring skill-based learning pathways that strengthened confidence and long-term career readiness. This experience improved my communication and outreach abilities and reinforced my community impact mindset, which continues to influence my entrepreneurial thinking."
    },
    {
        id: "programming-hero",
        role: "Campus Hero",
        org: "Programming Hero",
        category: ["Leadership", "Community", "Communication"],
        metrics: [
            { label: "Institutions", value: "20+" },
            { label: "Students Reached", value: "1,000+" }
        ],
        highlights: [
            "Represented my university and coordinated a nationwide Campus Hero network.",
            "Managed communication, updates, and engagement across 20+ institutions.",
            "Promoted workshops, bootcamps, and online learning programs for students."
        ],
        desc: "I served as a Campus Hero for Programming Hero, promoting learning initiatives and building student engagement across digital platforms. Beyond representing my own university, I acted as a coordinator for 20+ institutions—managing communication, updates, and engagement across a nationwide student network. Through structured online outreach, the initiatives reached around 1,000 students and provided access to technical learning opportunities. This role strengthened my leadership and team management skills in large groups, and reinforced my community impact mindset—widening access to technology education continues to influence my entrepreneurial and academic goals."
    },
    {
        id: "tbs-edge",
        role: "EDGE Associate",
        org: "The Business Standard",
        category: ["PR / Media", "Communication"],
        metrics: [
            { label: "Articles Promoted", value: "30+" },
            { label: "Campus Reach", value: "1,000+" }
        ],
        highlights: [
            "Supported news outreach, student communication, and public relations activities.",
            "Promoted selected news and initiatives through campus networks.",
            "Learned consistent messaging and media communication in a professional context."
        ],
        desc: "As an EDGE Associate at The Business Standard, I supported the newspaper's youth development wing by helping with news outreach, student communication, and public relations activities. I promoted selected articles and initiatives across campus networks so relevant stories reached a wider student audience. This role gave me hands-on exposure to news distribution, campus-level PR, and media communication. It strengthened my ability to represent a national newspaper, maintain consistent messaging, and manage information flow between students and the organization—helping me understand how professional media platforms build trust and public image."
    },
    {
        id: "banglay-ielts-crew",
        role: "Campus Crew",
        org: "Banglay IELTS & Immigration Centre",
        category: ["Communication", "Community", "PR / Media"],
        metrics: [
            { label: "Sessions Supported", value: "10+" },
            { label: "Students Guided", value: "200+" }
        ],
        highlights: [
            "Promoted IELTS and study-abroad guidance sessions through campus networks.",
            "Supported event coordination, student communication, and response handling.",
            "Helped increase awareness of application steps, documentation, and timelines."
        ],
        desc: "I worked as a Campus Crew member at Banglay IELTS & Immigration Centre, supporting student outreach and engagement around IELTS preparation and study-abroad guidance. I helped promote sessions through campus networks, assisted in coordination, and supported student communication by answering common queries and guiding students to the right resources. This role strengthened my community outreach and communication skills, especially in handling high-volume student interest and maintaining clear, helpful messaging. It also improved my ability to coordinate small campaigns and support learning-focused events with a service mindset."
    }
];

const skills = [
    {
        id: "uiux-gp",
        name: "UI/UX Design",
        issuer: "Grameenphone Academy (Grameenphone Ltd.)",
        meta: ["8 months", "Freelancing Factory", "Top 5 learner", "$3000+ earnings"],
        tags: ["Design", "UI/UX", "Figma", "Freelancing", "App Design", "Web Design", "UX Research"],
        certificateLink: "",
        short: "UI/UX design training through Grameenphone Academy's Freelancing Factory—focused on real market work, strong learning performance, and verified international freelancing earnings.",
        details: "I completed the 8-month Grameenphone Academy Freelancing Factory program in UI/UX Design and was ranked among the top 5 learners. The program was built around learning with earning, so I applied my skills in real market projects. After finishing the course, my recorded freelancing earnings crossed $3000+. I received official certification from Grameenphone Ltd., and this experience became a major foundation for my professional journey and confidence in delivering design work for real clients."
    },
    {
        id: "data-analytics-hdn",
        name: "Data Analytics",
        issuer: "Human Development Network Bangladesh (Accredited Bootcamp)",
        meta: ["12-week bootcamp", "8+ real projects", "Excel • SQL • Python"],
        tags: ["Analytics", "Excel", "Power BI", "SQL", "Python", "Dashboards"],
        certificateLink: "assets/dataanalytics.png",
        short: "12-week career bootcamp with 8+ real projects covering data cleaning, analysis, visualization, dashboards, and business reporting using Excel, SQL, and Python.",
        details: "I completed a 12-week Data Analytics Career Bootcamp accredited by the Human Development Network Bangladesh, working on 8+ real data projects involving cleaning, exploration, visualization, and business reporting. The program included industry-oriented modules on Data Fundamentals, Excel Analytics, SQL & Databases, and Career Readiness. I practiced end-to-end workflows: collecting datasets, cleaning with Excel and Python, writing SQL queries, building dashboards, and presenting insights for decisions. This training strengthened my analytical thinking, attention to detail, and confidence with real datasets, preparing me for data-driven roles in modern business environments."
    },
    {
        id: "mobile-app-edge",
        name: "Mobile App Development",
        issuer: "ICT Division, Government of Bangladesh (EDGE Project) • Bangladesh Computer Council",
        meta: ["80 Hours", "Government funded", "Hands-on prototypes"],
        tags: ["Mobile", "App Dev", "Flutter", "EDGE", "UI Basics", "Backend Concepts"],
        certificateLink: "assets/mobileapp.jpg",
        short: "Government-certified 80-hour training under the EDGE Project—mobile app fundamentals, UI basics, backend concepts, and hands-on prototype building with structured lessons.",
        details: "I successfully completed an 80-hour Mobile App Development training under the Enhancing Digital Government and Economy (EDGE) Project, conducted by the ICT Division, Government of Bangladesh and the Bangladesh Computer Council, in collaboration with the Department of CSE, Jagannath University. I learned mobile app fundamentals, UI design basics, backend concepts, and the complete process of building functional app prototypes. Through structured lessons and hands-on tasks, I practiced real workflows and strengthened my foundation in mobile technology. Completing this government-certified program added value to my technical skill set and exposure to practical, industry-relevant ICT training."
    },
    {
        id: "product-management-bohubrihi",
        name: "Digital Product Management",
        issuer: "Bohubrihi (4-Month Career Track Program)",
        meta: ["4 months", "5 mini-projects", "1 capstone"],
        tags: ["Product", "Strategy", "JIRA", "User Research", "Go-to-market", "UI/UX", "Development", "Engineering"],
        certificateLink: "assets/product.jfif",
        short: "4-month product career track covering full product lifecycle with 5 mini-projects + capstone—BMC, Kano, Hooked model, prioritization, JIRA, validation, and launch strategy.",
        details: "I completed a 4-month Digital Product Management career track program from Bohubrihi, learning the full product lifecycle from idea to launch. I worked on five structured mini-projects and a capstone project—Business Model Canvas (Pathao), Kano Model (Netflix), Hooked Model (Dorik), JIRA-based task management, and a final capstone feature built by applying all concepts. The program covered hypothesis validation, user research, prioritization, development methodologies, go-to-market planning, and post-launch strategy. This training strengthened my product-thinking mindset and helped me connect design, business, and technical understanding toward building meaningful digital solutions."
    },
    {
        id: "nssb-2019",
        name: "National Skill Standard Computer Office Application",
        issuer: "Bangladesh Technical Education Board (Government Certified)",
        meta: ["360 Hours", "6 months", "A+ Grade", "2019"],
        tags: ["Office Tools", "Documentation", "Digital Skills", "MS Word", "Typing", "Hardware"],
        certificateLink: "assets/com.jpg",
        short: "Government-recognized 360-hour National Skill Standard course in Computer Office Application—earned A+ in the national exam and built strong early foundation in digital tools and discipline.",
        details: "In 2019, I earned a government-recognized certification from the Bangladesh Technical Education Board after completing a 360-hour (6-month) National Skill Standard Basic Course in Computer Office Application. The program was conducted by Daffodil International Professional Training Institute, Chandpur, and supervised under the Ministry of Education. I passed the national examination with an A+ grade. This certification built my foundation in essential computer skills, documentation, and professional office applications. Completing a government-standard course early helped build my discipline, interest in technology, and confidence to pursue higher-level digital skills later."
    },
    {
        id: "doe-video-editing",
        name: "Video Editing",
        issuer: "The Duke of Edinburgh's International Award (Bronze Standard)",
        meta: ["Bronze Award", "Skill: Video Editing", "Voluntary service: 30+ patients helped"],
        tags: ["Video Editing", "Consistency", "Discipline", "Service", "Blood", "Football", "Sunamganj"],
        certificateLink: "assets/duke.jpg",
        short: "Bronze Duke of Edinburgh's Award—developed video editing as the skill track, football as physical recreation, and blood donation service supporting 30+ patients plus 4 personal donations.",
        details: "I earned the Bronze Standard of the Duke of Edinburgh's International Award by completing all four phases with consistency and dedication. For the Skill section, I chose video editing and practiced weekly until I became confident. Physical Recreation focused on football training 3–4 days a week, improving discipline and teamwork. In Voluntary Service, I worked in emergency blood management and helped more than 30 patients by arranging blood on time, and I donated blood four times. The Adventurous Journey took place in Tanguar Haor, Sunamganj, building teamwork and adaptability. This award taught discipline, empathy, and personal growth through real responsibility."
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
        details: `<div class="fiverr-details-layout">
            <div class="fiverr-quote-block">
                <i class="fas fa-quote-left quote-icon"></i>
                <p class="quote-text">Freelancing became my real-market training ground—learning with earning through Grameenphone Academy and building global client experience that later shaped BuildSign.</p>
            </div>

            <div class="fiverr-section">
                <h3 class="fiverr-section-title">Services I Deliver on Fiverr</h3>
                <div class="fiverr-services-grid">
                    <div class="fiverr-service-item">
                        <div class="service-item-icon">
                            <i class="fas fa-pencil-ruler"></i>
                        </div>
                        <div class="service-item-content">
                            <h4>UI/UX Design</h4>
                            <p>Web & app UI, UX flows, wireframes, high-fidelity designs, clickable prototypes</p>
                        </div>
                    </div>
                    <div class="fiverr-service-item">
                        <div class="service-item-icon">
                            <i class="fab fa-wordpress"></i>
                        </div>
                        <div class="service-item-content">
                            <h4>WordPress Development</h4>
                            <p>Custom themes, responsive websites, performance-focused builds, easy-to-manage CMS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fiverr-section">
                <h3 class="fiverr-section-title">Seller Credibility</h3>
                <div class="fiverr-stats-grid">
                    <div class="fiverr-stat-card">
                        <i class="fas fa-award stat-icon"></i>
                        <p>Fiverr Level 1 Seller</p>
                    </div>
                    <div class="fiverr-stat-card">
                        <i class="fas fa-star stat-icon"></i>
                        <p>100% 5-star ratings across all completed orders</p>
                    </div>
                    <div class="fiverr-stat-card">
                        <i class="fas fa-clock stat-icon"></i>
                        <p>Consistent on-time delivery</p>
                    </div>
                    <div class="fiverr-stat-card">
                        <i class="fas fa-globe stat-icon"></i>
                        <p>Experience working with international clients</p>
                    </div>
                </div>
            </div>

            <div class="fiverr-section">
                <h3 class="fiverr-section-title">How I Work with Clients</h3>
                <p class="fiverr-text">I focus on understanding requirements clearly before starting, maintaining transparent communication throughout the project, and delivering work that balances usability, performance, and visual clarity. Each Fiverr project is handled with the same quality-first mindset I follow in my agency work.</p>
            </div>

            <div class="fiverr-section">
                <h3 class="fiverr-section-title">From Freelancing to Agency</h3>
                <p class="fiverr-text">The discipline, communication practices, and real client exposure gained on Fiverr became the foundation for building BuildSign as a structured, system-driven digital product agency. What started as individual freelance projects evolved into a platform for creating opportunities for talented students while delivering consistent quality to clients worldwide.</p>
            </div>
        </div>`
    },
    {
        id: "spirit-on-jersey",
        title: "Owner of Spirit On Jersey",
        short: "A sports-driven brand idea built from a simple gap: too few trusted online jersey sellers. I focused on quality, customization, and customer trust from day one.",
        details: `<div class="spirit-details-layout">
            <div class="spirit-header">
                <p class="spirit-subtext">Sportswear brand journey focused on quality, trust, and customization.</p>
            </div>

            <div class="spirit-story">
                <p>Spirit On Jersey started from a very simple place. I saw that trusted jersey sellers were very few in the online space, and at the same time, I have always loved sports. From these two feelings, the idea came. What if I create something where people can get good-quality, customised jerseys without any worry. That is how the journey began.</p>
                
                <p>I still remember the first order. It came on the very first day. It gave me a small push inside, because someone trusted me without even knowing me. Finding the right audience in the beginning was difficult, and I was not sure how the business would grow, but I kept trying step by step.</p>
                
                <p>Through Spirit On Jersey, I learned many things. Business basics, digital marketing, jersey design, customer psychology and understanding market demand. I realized people care a lot about quality and personalization. When customers said they loved their jersey, or when they ordered again, it felt very motivating. These small happy moments told me that I was building something people valued.</p>
                
                <p>My aim with Spirit On Jersey is simple. I want to create a trusted footprint in online selling and make sure customers get what they expect. In the future, I want to grow this into a proper brand, one that people remember for honesty, quality and care.</p>
            </div>

            <div class="spirit-order-section">
                <h3 class="spirit-order-title">Order & Explore</h3>
                <p class="spirit-order-subtitle">Choose a platform to explore designs or place an order.</p>
                
                <div class="spirit-cta-grid">
                    <div class="spirit-cta-card">
                        <div class="spirit-cta-icon">
                            <i class="fab fa-facebook"></i>
                        </div>
                        <h4>Order via Facebook</h4>
                        <p>Message your jersey requirements and get quick confirmation.</p>
                        <a href="https://www.facebook.com/profile.php?id=61562469124798" target="_blank" rel="noopener noreferrer" class="spirit-cta-btn">
                            Facebook
                        </a>
                    </div>
                    
                    <div class="spirit-cta-card">
                        <div class="spirit-cta-icon">
                            <i class="fab fa-pinterest"></i>
                        </div>
                        <h4>Browse Designs (Pinterest)</h4>
                        <p>Explore jersey inspirations, designs, and custom concepts.</p>
                        <a href="https://www.pinterest.com/spiritonjersey/" target="_blank" rel="noopener noreferrer" class="spirit-cta-btn">
                            Open Pinterest
                        </a>
                    </div>
                    
                    <div class="spirit-cta-card">
                        <div class="spirit-cta-icon">
                            <i class="fas fa-globe"></i>
                        </div>
                        <h4>Official Page (Google Site)</h4>
                        <p>See full details, brand info, and updates in one place.</p>
                        <a href="https://sites.google.com/view/spiritonjersey" target="_blank" rel="noopener noreferrer" class="spirit-cta-btn">
                            Visit Website
                        </a>
                    </div>
                </div>
                
                <p class="spirit-order-note">
                    <i class="fas fa-info-circle"></i>
                    Tip: Send your size, team name, player name, and preferred color to get a fast quote.
                </p>
            </div>
        </div>`
    },
    {
        id: "gp-certified",
        title: "Certified & Recognized by Grameenphone Ltd",
        short: "Official recognition for turning skill development into verified earnings and entrepreneurship—freelancing success plus founding a digital agency inside an impact-focused program.",
        details: `<div class="gp-details-layout">
            <div class="gp-content-grid">
                <div class="gp-media-column">
                    <div class="gp-media-card" onclick="openGPLightbox(0)">
                        <img src="assets/gp.jpg" alt="Grameenphone Certification" loading="lazy" onerror="this.parentElement.innerHTML='<div style=\\'padding:20px;text-align:center;color:#999;\\'>Certificate failed to load<br><small>assets/gp.jpg</small></div>'">
                        <p class="gp-media-label">Certification</p>
                    </div>
                    <div class="gp-media-card" onclick="openGPLightbox(1)">
                        <img src="assets/gp1.jpg" alt="Grameenphone Recognition" loading="lazy" onerror="this.parentElement.innerHTML='<div style=\\'padding:20px;text-align:center;color:#999;\\'>Certificate failed to load<br><small>assets/gp1.jpg</small></div>'">
                        <p class="gp-media-label">Recognition</p>
                    </div>
                </div>

                <div class="gp-text-column">
                    <div class="gp-story">
                        <p>This recognition was awarded to acknowledge my successful transition from skill development to sustainable income generation and entrepreneurship, including verified freelancing earnings and the founding of a digital agency during a structured impact-focused program.</p>
                        
                        <p>Grameenphone Academy is a venture of Grameenphone Ltd., operating under the company's ESG (Environmental, Social, and Governance) initiatives. The academy focuses on equipping students with industry-relevant skills free of cost, with the objective of creating sustainable social and economic impact through education and employability.</p>
                        
                        <p>In line with this mission, Grameenphone Academy launched the "Freelancing Factory" program in November 2024, designed to help participants develop professional skills and generate real income opportunities. I was selected as a participant in the UI/UX Design batch of this program.</p>
                        
                        <p>The core motto of the program was "Learn with Earn", where participants were encouraged not only to acquire skills but also to apply them in real market environments. As part of this initiative, I started freelancing on Fiverr, achieved Level 1 Seller status within six months, and concurrently founded BuildSign, a digital service agency.</p>
                        
                        <p>Additionally, only two digital agencies emerged from the cohort, one of which was BuildSign, founded by me. Grameenphone Academy officially certified this achievement as a key sustainable outcome of the program, recognizing it as part of their long-term impact creation efforts.</p>
                    </div>

                    <div class="gp-official-links">
                        <h4>Official Links</h4>
                        <div class="gp-links-row">
                            <a href="https://www.facebook.com/Grameenphone" target="_blank" rel="noopener noreferrer" class="gp-link-item">
                                <i class="fab fa-facebook"></i>
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.grameenphone.academy/" target="_blank" rel="noopener noreferrer" class="gp-link-item">
                                <i class="fas fa-graduation-cap"></i>
                                <span>GP Academy</span>
                            </a>
                            <a href="https://www.linkedin.com/company/grameenphone-ltd/" target="_blank" rel="noopener noreferrer" class="gp-link-item">
                                <i class="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    },
    {
        id: "nebulae-soft",
        title: "Former UI Designer & UX Researcher at Nebulae-Soft",
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
    
    grid.innerHTML = aboutHighlights.map(item => {
        let action = '';
        if (item.id === 'buildsign-founder') {
            action = 'navigateToBuildsign()';
        } else if (item.id === 'nebulae-soft') {
            action = 'navigateToNebulae()';
        } else if (item.id === 'diu-internship') {
            action = 'navigateToInternationalAffairs()';
        } else {
            action = `openAboutDetails('${item.id}')`;
        }
        
        return `
            <div class="about-card reveal-stagger">
                <h3 class="about-card-title">${item.title}</h3>
                <p class="about-card-short">${item.short}</p>
                <button class="btn-view-details" onclick="${action}">
                    View Details <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
    }).join('');
}

function navigateToBuildsign() {
    window.location.href = 'buildsign.html';
}

function navigateToNebulae() {
    window.location.href = 'nebulae.html';
}

function navigateToInternationalAffairs() {
    window.location.href = 'international-affairs.html';
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

// ==================== Activities Section ====================
let currentFilter = 'All';

function renderActivitiesGrid() {
    const grid = document.getElementById('activitiesGrid');
    if (!grid) return;
    
    console.log('Current Filter:', currentFilter);
    
    const filteredActivities = currentFilter === 'All' 
        ? activities 
        : activities.filter(activity => {
            const normalizedFilter = currentFilter.trim().toLowerCase();
            const hasMatch = activity.category.some(cat => {
                const normalizedCat = cat.trim().toLowerCase();
                console.log(`Comparing: "${normalizedCat}" === "${normalizedFilter}"`, normalizedCat === normalizedFilter);
                return normalizedCat === normalizedFilter;
            });
            return hasMatch;
        });
    
    console.log('Filtered Activities Count:', filteredActivities.length);
    
    if (filteredActivities.length === 0) {
        grid.innerHTML = `
            <div class="activities-empty-state">
                <i class="fas fa-filter"></i>
                <p>No activities found for "${currentFilter}"</p>
                <button class="btn-reset-filter" onclick="resetFilter()">
                    <i class="fas fa-redo"></i> Show All Activities
                </button>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredActivities.map(activity => {
        let clickAction = '';
        if (activity.id === 'diu-cyber-club') {
            clickAction = 'navigateToCSClub()';
        } else if (activity.id === 'ieee-pr') {
            clickAction = 'navigateToIEEEPR()';
        } else if (activity.id === 'creative-it-ambassador') {
            clickAction = 'navigateToCreativeIT()';
        } else if (activity.id === 'programming-hero') {
            clickAction = 'navigateToProgrammingHero()';
        } else if (activity.id === 'tbs-edge') {
            clickAction = 'navigateToTBSEdge()';
        } else if (activity.id === 'banglay-ielts-crew') {
            clickAction = 'navigateToBanglayIELTS()';
        } else {
            clickAction = `openActivityDetails('${activity.id}')`;
        }
        
        return `
            <div class="activity-card" onclick="${clickAction}">
                <div class="activity-card-gradient"></div>
                <h3 class="activity-role">${activity.role}</h3>
                <p class="activity-org">${activity.org}</p>
                <div class="activity-metrics">
                    ${activity.metrics.slice(0, 2).map(metric => `
                        <div class="activity-metric">
                            <span class="metric-value">${metric.value}</span>
                            <span class="metric-label">${metric.label}</span>
                        </div>
                    `).join('')}
                </div>
                <ul class="activity-highlights-preview">
                    ${activity.highlights.slice(0, 2).map(highlight => `
                        <li>${highlight}</li>
                    `).join('')}
                </ul>
                <p class="activity-click-hint"><i class="fas fa-arrow-right"></i> Click to view more</p>
            </div>
        `;
    }).join('');
}

function resetFilter() {
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        if (chip.getAttribute('data-filter') === 'All') {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });
    currentFilter = 'All';
    renderActivitiesGrid();
    
    const section = document.getElementById('eca');
    if (section) {
        const navbarHeight = 80;
        const sectionTop = section.offsetTop - navbarHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
}

function navigateToCSClub() {
    window.location.href = 'csclub.html';
}

function navigateToIEEEPR() {
    window.location.href = 'ieee-pr.html';
}

function navigateToCreativeIT() {
    window.location.href = 'creative-it.html';
}

function navigateToProgrammingHero() {
    window.location.href = 'programming-hero.html';
}

function navigateToTBSEdge() {
    window.location.href = 'tbs-edge.html';
}

function navigateToBanglayIELTS() {
    window.location.href = 'banglay-ielts.html';
}

renderActivitiesGrid();

// Filter functionality
const filterChips = document.querySelectorAll('.filter-chip');
filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.getAttribute('data-filter');
        renderActivitiesGrid();
        
        const section = document.getElementById('eca');
        if (section && window.innerWidth < 768) {
            const navbarHeight = 80;
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
    });
});

// Activity Details Modal
function openActivityDetails(id) {
    const activity = activities.find(a => a.id === id);
    if (!activity) return;
    
    document.getElementById('activity-modal-breadcrumb-title').textContent = activity.role;
    document.getElementById('activity-modal-title').textContent = activity.role;
    document.getElementById('activity-modal-org').textContent = activity.org;
    
    document.getElementById('activity-modal-metrics').innerHTML = activity.metrics.map(metric => `
        <div class="activity-metric-large">
            <span class="metric-value-large">${metric.value}</span>
            <span class="metric-label-large">${metric.label}</span>
        </div>
    `).join('');
    
    document.getElementById('activity-modal-highlights-list').innerHTML = activity.highlights.map(highlight => `
        <li>${highlight}</li>
    `).join('');
    
    document.getElementById('activity-modal-description').textContent = activity.desc;
    
    document.getElementById('activity-details-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeActivityDetails() {
    document.getElementById('activity-details-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeActivityDetails();
        closeSkillDetails();
        closeCertificateViewer();
        closeEventDetails();
        closeMultiCertificateViewer();
    }
});

// ==================== Skills & Certifications Section ====================
function renderSkillsCompact() {
    const container = document.getElementById('skillsCompactContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="skill-compact-grid">
            ${skills.map(skill => {
                const visibleTags = skill.tags.slice(0, 3);
                const hiddenCount = skill.tags.length - 3;
                
                return `
                    <div class="skill-compact-card">
                        <h4 class="skill-compact-name">${skill.name}</h4>
                        <div class="skill-compact-tags">
                            ${visibleTags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                            ${hiddenCount > 0 ? `<span class="skill-tag skill-tag-more">+${hiddenCount}</span>` : ''}
                        </div>
                        <div class="skill-compact-actions">
                            <button class="btn-skill-details" onclick="openSkillDetails('${skill.id}')">
                                <i class="fas fa-info-circle"></i> View Details
                            </button>
                            <button class="btn-skill-certificate ${skill.certificateLink ? '' : 'btn-skill-certificate-disabled'}" 
                                    ${skill.certificateLink ? `onclick="openCertificate('${skill.certificateLink}')"` : 'disabled'}>
                                <i class="fas fa-certificate"></i> 
                                ${skill.certificateLink ? 'View Certificate' : 'Certificate (Soon)'}
                            </button>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function openSkillDetails(id) {
    const skill = skills.find(s => s.id === id);
    if (!skill) return;
    
    document.getElementById('skill-modal-breadcrumb-title').textContent = skill.name;
    document.getElementById('skill-modal-title').textContent = skill.name;
    document.getElementById('skill-modal-issuer').textContent = skill.issuer;
    
    document.getElementById('skill-modal-meta').innerHTML = skill.meta.map(item => `
        <span class="skill-meta-chip">${item}</span>
    `).join('');
    
    document.getElementById('skill-modal-tags').innerHTML = skill.tags.map(tag => `
        <span class="skill-tag-large">${tag}</span>
    `).join('');
    
    document.getElementById('skill-modal-details').textContent = skill.details;
    
    const certSection = document.getElementById('skill-modal-certificate-section');
    
    if (skill.certificateLink) {
        const ext = skill.certificateLink.split('.').pop().toLowerCase();
        
        if (ext === 'pdf') {
            certSection.innerHTML = `
                <div class="skill-certificate-container">
                    <div class="skill-certificate-header">
                        <h3>Certificate</h3>
                        <button class="btn-fullscreen" onclick="window.open('${skill.certificateLink}', '_blank')" title="Open Fullscreen">
                            <i class="fas fa-expand"></i>
                        </button>
                    </div>
                    <div class="skill-certificate-preview">
                        <iframe src="${skill.certificateLink}" class="skill-certificate-pdf" frameborder="0"></iframe>
                    </div>
                </div>
            `;
        } else if (['png', 'jpg', 'jpeg', 'jfif', 'webp'].includes(ext)) {
            certSection.innerHTML = `
                <div class="skill-certificate-container">
                    <div class="skill-certificate-header">
                        <h3>Certificate</h3>
                        <button class="btn-fullscreen" onclick="openCertificateLightbox('${skill.certificateLink}')" title="View Fullscreen">
                            <i class="fas fa-expand"></i>
                        </button>
                    </div>
                    <div class="skill-certificate-preview">
                        <img src="${skill.certificateLink}" alt="${skill.name} Certificate" class="skill-certificate-image" onclick="openCertificateLightbox('${skill.certificateLink}')">
                    </div>
                </div>
            `;
        }
    } else {
        certSection.innerHTML = `
            <div class="skill-certificate-container">
                <div class="skill-certificate-header">
                    <h3>Certificate</h3>
                </div>
                <div class="skill-certificate-placeholder">
                    <i class="fas fa-certificate"></i>
                    <p>Certificate Coming Soon</p>
                </div>
            </div>
        `;
    }
    
    document.getElementById('skill-details-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openCertificateLightbox(certificateLink) {
    const modal = document.getElementById('certificate-viewer-modal');
    const img = document.getElementById('certificate-viewer-image');
    img.src = certificateLink;
    modal.classList.add('active');
}

function openCertificate(certificateLink) {
    const ext = certificateLink.split('.').pop().toLowerCase();
    
    if (ext === 'pdf') {
        window.open(certificateLink, '_blank', 'noopener,noreferrer');
    } else if (['png', 'jpg', 'jpeg', 'jfif'].includes(ext)) {
        const modal = document.getElementById('certificate-viewer-modal');
        const img = document.getElementById('certificate-viewer-image');
        img.src = certificateLink;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCertificateViewer() {
    const modal = document.getElementById('certificate-viewer-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function closeSkillDetails() {
    document.getElementById('skill-details-modal').classList.remove('active');
    document.body.style.overflow = '';
}

renderSkillsCompact();

// ==================== International Events Section ====================
const internationalEvents = [
    {
        id: "comtech-2023",
        institute: "Institut Teknologi Sepuluh Nopember (ITS), Indonesia",
        title: "CommTECH Nusantara 2023 — Virtual Exploration of Indonesia",
        locationType: "International • Virtual",
        certificates: ["assets/int/comtech.png"],
        short: "International virtual exchange exploring Indonesian culture, technology, and community-driven innovation through workshops and peer collaboration with global participants.",
        details: "I participated in the CommTECH Nusantara 2023: Virtual Exploration of Indonesia, an international program hosted by Institut Teknologi Sepuluh Nopember (ITS), Indonesia. The program brought together global participants to explore Indonesian culture, technology and community through a virtual academic exchange model. During the program, I learned about Indonesian social innovation, local industry practices, cultural heritage and the country's approach to community-driven development. The sessions included interactive workshops, cultural immersion activities, group discussions and problem-based learning with international peers. This experience developed cross-cultural communication, global awareness and international connections that continue to motivate my academic and professional growth."
    },
    {
        id: "climate-summit-2023",
        institute: "Global Youth Leadership Center • University of Dar es Salaam • Tanzania Forest Service Agency",
        title: "Global Youth Climate Summit 2023 — Virtual Delegate",
        locationType: "International • Virtual",
        certificates: ["assets/int/gsummit.pdf"],
        short: "Selected as a global virtual delegate to engage in climate action discussions on sustainability, resilience, policy, and youth-led solutions with changemakers worldwide.",
        details: "I was selected as a virtual delegate for the Global Youth Climate Summit 2023, a global platform organized by the Global Youth Leadership Center in partnership with the University of Dar es Salaam and the Tanzania Forest Service Agency. More than a thousand youth applicants from different countries compete for a chance to join this summit each year, and being selected was a significant milestone. Throughout the summit, I engaged in discussions on climate resilience, global environmental policy, innovation for sustainability and youth-driven climate solutions. This experience strengthened my global perspective, enhanced my leadership mindset, and connected me with changemakers and youth leaders worldwide."
    },
    {
        id: "rmi-week-2023",
        institute: "Universitas Islam Sultan Agung (UNISSULA), Semarang, Indonesia",
        title: "RMI Week 2023 — International Short Course",
        locationType: "International • Short Course",
        certificates: ["assets/int/rmi.pdf", "assets/int/rmibd.jpg"],
        short: "International short course on city resilience and disaster mitigation, including cross-country teamwork and a case-study proposing solutions for real urban challenges.",
        details: "I was selected for the International Short Course on City Resilience, Disaster Mitigation and Infrastructure (RMI Week 2023) at UNISSULA. I worked with students from multiple countries to study climate risks, resilient infrastructure, and disaster-ready communities. A key part was a collaborative international case study where our mixed-country team analyzed real urban challenges and proposed solutions combining engineering, policy insight, and community readiness. This experience strengthened cross-cultural teamwork, problem-solving, and understanding of global disaster management strategies, aligning with my goals in innovation, entrepreneurship, and impact-driven leadership."
    },
    {
        id: "ubaya-2023",
        institute: "Universitas Surabaya (UBAYA), Indonesia",
        title: "UBAYA Online Summer Program 2023 — Global Short Courses",
        locationType: "International • Online",
        certificates: ["assets/int/ubaya1.pdf", "assets/int/ubaya2.pdf"],
        short: "Two global short courses on digital transformation, personal branding, and future tech—AI, ChatGPT, and metaverse concepts—through interactive learning with international peers.",
        details: "I participated in the UBAYA Online Summer Program 2023 organized by Universitas Surabaya (UBAYA). Across two global short courses, I explored how technology shapes modern life and collaborated with international participants. The first module, Digitalize Your Life, covered digital transformation trends, personal branding, online communication, and productivity tools. The second module focused on ChatGPT, AI applications, human–AI interaction, metaverse concepts, and future digital ecosystems. These programs strengthened my global exposure, cross-cultural communication, and understanding of emerging technologies, supporting my mindset as a future entrepreneur and digital product builder."
    },
    {
        id: "reuters-journalism",
        institute: "Reuters • Sponsored by Meta Journalism Project",
        title: "Introduction to Digital Journalism",
        locationType: "International • Online",
        certificates: ["assets/int/reu.png"],
        short: "Completed Reuters training covering media ethics, fact-checking, sourcing, misinformation handling, and producing digital content aligned with global journalism standards.",
        details: "I completed the Introduction to Digital Journalism online training offered by Reuters and sponsored by the Meta Journalism Project. The course covered media ethics, fact-checking, sourcing reliable information, producing digital content, and how journalism operates in today's fast-changing online environment. Through structured modules, I learned how journalists verify information, combat misinformation, and communicate effectively across digital platforms. This training improved my critical thinking, writing clarity, and understanding of global media standards—supporting my growth as an entrepreneur, communicator, and future global professional."
    },
    {
        id: "locust-2022",
        institute: "Industrial Technology Faculty, UNISSULA, Indonesia",
        title: "LOCUST 2022 — Local Culture, Science & Technology Short Program",
        locationType: "International • Short Program",
        certificates: ["assets/int/uni.pdf"],
        short: "International short program exploring how culture influences innovation and technology adoption, with cross-cultural interaction focused on community development and local industry practices.",
        details: "I participated in LOCUST 2022: Local Culture, Science & Technology Short Program, organized by the Industrial Technology Faculty of UNISSULA, Indonesia. The program brought together students to explore the connection between culture, innovation and technology in Southeast Asia. I learned about Indonesian local culture, scientific approaches to community development and technology-driven solutions used in local industries. Through lectures, discussions and cross-cultural interaction, I developed a broader perspective on how context shapes innovation. This experience strengthened my global mindset and interest in international learning and entrepreneurship."
    }
];

function renderEventsGrid() {
    const grid = document.getElementById('eventsGrid');
    if (!grid) return;
    
    grid.innerHTML = internationalEvents.map(event => `
        <div class="event-card">
            <span class="event-location-badge">${event.locationType}</span>
            <p class="event-institute">${event.institute}</p>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-short">${event.short}</p>
            <div class="event-actions">
                <button class="btn-event-certificate" onclick="event.stopPropagation(); openEventCertificates('${event.id}')">
                    <i class="fas fa-certificate"></i> View Certificate
                </button>
                <button class="btn-event-details" onclick="event.stopPropagation(); openEventDetails('${event.id}')">
                    <i class="fas fa-info-circle"></i> View Details
                </button>
            </div>
        </div>
    `).join('');
}

function extractHighlights(text) {
    const sentences = text.split(/\.\s+/).filter(s => s.length > 40).slice(0, 5);
    return sentences.map(s => s.trim() + '.').slice(0, 5);
}

function openEventDetails(eventId) {
    const event = internationalEvents.find(e => e.id === eventId);
    if (!event) return;
    
    const modal = document.getElementById('event-details-modal');
    
    // Special handling for CommTECH
    if (eventId === 'comtech-2023') {
        document.getElementById('event-modal-institute').textContent = 'Hosted by Institut Teknologi Sepuluh Nopember (ITS), Indonesia';
        document.getElementById('event-modal-location').textContent = '';
        document.getElementById('event-modal-title').textContent = 'CommTECH Nusantara 2023 — Virtual Exploration of Indonesia';
        
        document.getElementById('event-modal-description').innerHTML = `
            <p>I participated in <strong>CommTECH Nusantara 2023: Virtual Exploration of Indonesia</strong>, an international academic program hosted by Institut Teknologi Sepuluh Nopember (ITS), one of Indonesia's top-ranked public universities. The program brought together participants from different countries to engage in a virtual academic and cultural exchange focused on Indonesia's approach to technology, innovation, and community development.</p>
            
            <p>Throughout the program, I took part in interactive workshops, guided discussions, and collaborative sessions with international participants. These activities explored Indonesian social innovation, local industry practices, and the role of technology in community-driven development. Working in a multinational learning environment strengthened my understanding of how cultural context influences technological solutions and policy thinking.</p>
            
            <p>This experience enhanced my cross-cultural communication skills and global academic awareness. Engaging with international peers helped me develop confidence in collaborative learning environments and broadened my perspective as a global learner. CommTECH Nusantara played a meaningful role in shaping my interest in international programs, academic exchange, and globally connected innovation.</p>
        `;
        
        const highlightsContainer = document.getElementById('event-modal-highlights');
        highlightsContainer.innerHTML = `
            <div class="event-inline-highlights">
                <div class="event-highlight-item">
                    <i class="fas fa-globe-asia"></i>
                    <span>International academic exchange program</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-university"></i>
                    <span>Hosted by a leading Southeast Asian public university</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-users"></i>
                    <span>Multinational participant collaboration</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-lightbulb"></i>
                    <span>Focus on culture, technology, and community innovation</span>
                </div>
            </div>
            
            <div class="event-certificate-display">
                <h4>Certificate of Participation</h4>
                <div class="event-cert-preview" onclick="openCertificateLightbox('assets/int/comtech.png', 'Certificate of Participation — CommTECH Nusantara 2023')">
                    <img src="assets/int/comtech.png" alt="CommTECH Certificate">
                    <div class="cert-preview-overlay">
                        <i class="fas fa-search-plus"></i>
                        <span>Click to view full size</span>
                    </div>
                </div>
                <p class="cert-label">Certificate of Participation — CommTECH Nusantara 2023</p>
            </div>
        `;
    } else if (eventId === 'climate-summit-2023') {
        document.getElementById('event-modal-institute').textContent = 'Organized by Global Youth Leadership Center • University of Dar es Salaam • Tanzania Forest Service Agency';
        document.getElementById('event-modal-location').textContent = '';
        document.getElementById('event-modal-title').textContent = 'Global Youth Climate Summit 2023 — Virtual Delegate';
        
        document.getElementById('event-modal-description').innerHTML = `
            <p>I was selected as a <strong>Virtual Delegate</strong> for the Global Youth Climate Summit 2023, an international platform bringing together young leaders from across the world to discuss climate action, sustainability, and global environmental responsibility. The summit was organized by the Global Youth Leadership Center in collaboration with the University of Dar es Salaam and the Tanzania Forest Service Agency, creating a truly global and interdisciplinary learning environment.</p>
            
            <p>Throughout the summit, I engaged in high-level discussions on climate resilience, environmental policy, innovation for sustainability, and youth-driven solutions to global climate challenges. Participating alongside delegates from diverse countries helped me understand how environmental issues are approached differently across regions while reinforcing the importance of collective global action.</p>
            
            <p>Being selected as a delegate among a competitive international applicant pool was a meaningful milestone for me. This experience strengthened my global leadership mindset, improved my ability to engage in international dialogue, and connected me with youth changemakers and environmental initiatives worldwide. The summit deepened my sense of responsibility toward sustainable development and continues to influence my perspective on impact-driven work in a global context.</p>
        `;
        
        const highlightsContainer = document.getElementById('event-modal-highlights');
        highlightsContainer.innerHTML = `
            <div class="event-inline-highlights">
                <div class="event-highlight-item">
                    <i class="fas fa-award"></i>
                    <span>Selected Virtual Delegate in a global youth summit</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-handshake"></i>
                    <span>Collaboration with international institutions and agencies</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-leaf"></i>
                    <span>Focus on climate action, sustainability, and resilience</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-globe-americas"></i>
                    <span>Participation with youth leaders from multiple countries</span>
                </div>
            </div>
            
            <div class="event-certificate-display">
                <h4>Certificate of Participation</h4>
                <div class="event-cert-pdf-viewer">
                    <embed src="assets/int/gsummit.pdf#toolbar=0" type="application/pdf" class="event-cert-pdf-embed">
                    <p class="pdf-fallback-text">PDF viewer may not be supported in your browser. <a href="assets/int/gsummit.pdf" target="_blank" rel="noopener noreferrer">Click here to view certificate</a></p>
                </div>
                <p class="cert-label">Certificate of Participation — Global Youth Climate Summit 2023</p>
            </div>
        `;
    } else if (eventId === 'rmi-week-2023') {
        document.getElementById('event-modal-institute').textContent = 'Universitas Islam Sultan Agung (UNISSULA), Semarang, Indonesia';
        document.getElementById('event-modal-location').textContent = '';
        document.getElementById('event-modal-title').textContent = 'RMI Week 2023 — International Short Course';
        
        document.getElementById('event-modal-description').innerHTML = `
            <p>I was selected to participate in the <strong>International Short Course on City Resilience, Disaster Mitigation, and Infrastructure (RMI Week 2023)</strong>, hosted by Universitas Islam Sultan Agung (UNISSULA) in Semarang, Indonesia. The program brought together students from multiple countries to explore how cities respond to climate risks, strengthen infrastructure, and build disaster-resilient communities through interdisciplinary and international collaboration.</p>
            
            <p>During the program, I worked closely with international peers in a mixed-country team to analyze real-world urban resilience challenges. One of the most impactful components of the course was a collaborative international case study, where our team combined engineering perspectives, policy insight, and community readiness to propose practical solutions for disaster mitigation and infrastructure resilience.</p>
            
            <p>In addition to the international coursework, I also presented the outcomes of this learning experience in Bangladesh, where the presentation received recognition for its analytical depth and clarity. This extended the impact of the program beyond the host country and reinforced my ability to translate international learning into local academic and professional contexts.</p>
            
            <p>Participating in RMI Week strengthened my confidence in global teamwork, analytical problem-solving, and structured communication. The experience deepened my understanding of how different countries approach resilience planning and prepared me for future work in international, impact-driven environments.</p>
        `;
        
        const highlightsContainer = document.getElementById('event-modal-highlights');
        highlightsContainer.innerHTML = `
            <div class="event-inline-highlights">
                <div class="event-highlight-item">
                    <i class="fas fa-graduation-cap"></i>
                    <span>International short course hosted in Indonesia</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-users-cog"></i>
                    <span>Multinational teamwork and case-study collaboration</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-shield-alt"></i>
                    <span>Focus on city resilience, disaster mitigation, and infrastructure</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-globe-asia"></i>
                    <span>International learning translated into local academic recognition</span>
                </div>
            </div>
            
            <div class="event-certificate-display">
                <h4>Certificates</h4>
                <div class="event-multi-cert-grid">
                    <div class="event-cert-item">
                        <div class="event-cert-pdf-viewer">
                            <embed src="assets/int/rmi.pdf#toolbar=0" type="application/pdf" class="event-cert-pdf-embed">
                            <p class="pdf-fallback-text">PDF viewer may not be supported. <a href="assets/int/rmi.pdf" target="_blank" rel="noopener noreferrer">View certificate</a></p>
                        </div>
                        <p class="cert-label">Certificate — RMI Week 2023 (UNISSULA, Indonesia)</p>
                    </div>
                    <div class="event-cert-item">
                        <div class="event-cert-preview" onclick="openCertificateLightbox('assets/int/rmibd.jpg', 'Certificate — RMI Week Presentation & Recognition (Bangladesh)')">
                            <img src="assets/int/rmibd.jpg" alt="RMI Bangladesh Certificate">
                            <div class="cert-preview-overlay">
                                <i class="fas fa-search-plus"></i>
                                <span>Click to view full size</span>
                            </div>
                        </div>
                        <p class="cert-label">Certificate — RMI Week Presentation & Recognition (Bangladesh)</p>
                    </div>
                </div>
            </div>
        `;
    } else if (eventId === 'ubaya-2023') {
        document.getElementById('event-modal-institute').textContent = 'International • Online | Universitas Surabaya (UBAYA), Indonesia';
        document.getElementById('event-modal-location').textContent = '';
        document.getElementById('event-modal-title').textContent = 'UBAYA Online Summer Program 2023 — Global Short Courses';
        
        document.getElementById('event-modal-description').innerHTML = `
            <p>I participated in the <strong>UBAYA Online Summer Program 2023</strong>, an international online initiative organized by Universitas Surabaya (UBAYA), one of Indonesia's leading private universities. The program brought together participants from different countries to explore how emerging digital technologies are shaping modern life, work, and global interaction through structured short courses and collaborative learning.</p>
            
            <p>The program consisted of two global short courses. The first, <strong>Digitalize Your Life</strong>, focused on digital transformation, personal branding, online communication, and productivity systems that influence how individuals and organizations operate in a digitally connected world. The second course, <strong>ChatGPT, Artificial Intelligence, and Metaverse for Our Daily Life</strong>, explored practical applications of AI, human–AI interaction, metaverse concepts, and the future of digital ecosystems.</p>
            
            <p>Engaging in discussions and learning activities with international participants helped me develop a broader global perspective on technology adoption and digital innovation. This experience strengthened my confidence in cross-cultural communication and kept me aligned with emerging global trends in AI and digital transformation, which continue to influence my academic interests and entrepreneurial thinking.</p>
        `;
        
        const highlightsContainer = document.getElementById('event-modal-highlights');
        highlightsContainer.innerHTML = `
            <div class="event-inline-highlights">
                <div class="event-highlight-item">
                    <i class="fas fa-laptop-code"></i>
                    <span>International online summer program hosted by a leading Indonesian university</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-users"></i>
                    <span>Global participant interaction and collaborative learning</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-robot"></i>
                    <span>Focus on digital transformation, AI, and future technologies</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-globe"></i>
                    <span>Strengthened global communication and future-ready mindset</span>
                </div>
            </div>
            
            <div class="event-certificate-display">
                <h4>Certificates</h4>
                <div class="event-multi-cert-grid">
                    <div class="event-cert-item">
                        <div class="event-cert-pdf-viewer">
                            <embed src="assets/int/ubaya1.pdf#toolbar=0" type="application/pdf" class="event-cert-pdf-embed">
                            <p class="pdf-fallback-text">PDF viewer may not be supported. <a href="assets/int/ubaya1.pdf" target="_blank" rel="noopener noreferrer">View certificate</a></p>
                        </div>
                        <p class="cert-label">Certificate — Digitalize Your Life (UBAYA Online Summer Program 2023)</p>
                    </div>
                    <div class="event-cert-item">
                        <div class="event-cert-pdf-viewer">
                            <embed src="assets/int/ubaya2.pdf#toolbar=0" type="application/pdf" class="event-cert-pdf-embed">
                            <p class="pdf-fallback-text">PDF viewer may not be supported. <a href="assets/int/ubaya2.pdf" target="_blank" rel="noopener noreferrer">View certificate</a></p>
                        </div>
                        <p class="cert-label">Certificate — ChatGPT, AI & Metaverse for Daily Life (UBAYA Online Summer Program 2023)</p>
                    </div>
                </div>
            </div>
        `;
    } else if (eventId === 'reuters-journalism') {
        document.getElementById('event-modal-institute').textContent = 'Reuters • Sponsored by Meta Journalism Project';
        document.getElementById('event-modal-location').textContent = '';
        document.getElementById('event-modal-title').textContent = 'Introduction to Digital Journalism';
        
        document.getElementById('event-modal-description').innerHTML = `
            <p>I completed the <strong>Introduction to Digital Journalism</strong> training offered by Reuters, one of the world's most respected international news organizations, and sponsored by the Meta Journalism Project. This global program focused on building essential skills required for responsible journalism in today's fast-evolving digital media landscape.</p>
            
            <p>Through five structured learning modules, the training covered core areas such as media ethics, fact-checking, sourcing reliable information, digital storytelling, and understanding how modern journalism operates in online environments. The program emphasized accuracy, credibility, and accountability—key principles that define professional news reporting worldwide.</p>
            
            <p>Participating in a globally recognized journalism program strengthened my ability to evaluate information critically and communicate clearly across digital platforms. This experience sharpened my understanding of responsible content creation and reinforced the importance of trust, transparency, and ethical standards—skills that continue to support my work in communication, entrepreneurship, and leadership roles.</p>
        `;
        
        const highlightsContainer = document.getElementById('event-modal-highlights');
        highlightsContainer.innerHTML = `
            <div class="event-inline-highlights">
                <div class="event-highlight-item">
                    <i class="fas fa-newspaper"></i>
                    <span>Training delivered by a globally trusted news organization</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-handshake"></i>
                    <span>Sponsored by the Meta Journalism Project</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-check-double"></i>
                    <span>Focus on media ethics, fact-checking, and digital reporting</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-shield-alt"></i>
                    <span>Strengthened credibility-driven communication mindset</span>
                </div>
            </div>
            
            <div class="event-certificate-display">
                <h4>Certificate of Completion</h4>
                <div class="event-cert-preview" onclick="openCertificateLightbox('assets/int/reu.png', 'Certificate of Completion — Introduction to Digital Journalism (Reuters)')">
                    <img src="assets/int/reu.png" alt="Reuters Digital Journalism Certificate">
                    <div class="cert-preview-overlay">
                        <i class="fas fa-search-plus"></i>
                        <span>Click to view full size</span>
                    </div>
                </div>
                <p class="cert-label">Certificate of Completion — Introduction to Digital Journalism (Reuters)</p>
            </div>
        `;
    } else if (eventId === 'locust-2022') {
        document.getElementById('event-modal-institute').textContent = 'Industrial Technology Faculty, Universitas Islam Sultan Agung (UNISSULA), Indonesia';
        document.getElementById('event-modal-location').textContent = '';
        document.getElementById('event-modal-title').textContent = 'LOCUST 2022 — Local Culture, Science & Technology Short Program';
        
        document.getElementById('event-modal-description').innerHTML = `
            <p>I participated in <strong>LOCUST 2022: Local Culture, Science & Technology Short Program</strong>, an international academic initiative organized by the Industrial Technology Faculty of Universitas Islam Sultan Agung (UNISSULA), Indonesia. The program brought together participants to explore how cultural context, scientific knowledge, and technological innovation interact to support sustainable community and industrial development in Southeast Asia.</p>
            
            <p>Throughout the program, I engaged in lectures, interactive discussions, and cross-cultural learning activities that highlighted how technology adoption and innovation are shaped by local culture and societal needs. Learning alongside international participants helped me understand how technological solutions must adapt to cultural and regional contexts in order to create meaningful and sustainable impact.</p>
            
            <p>This experience strengthened my global perspective at an early stage of my academic journey. It improved my ability to collaborate across cultures and deepened my understanding of how science and technology can support local communities. LOCUST 2022 played a formative role in shaping my interest in international learning, innovation, and impact-driven development.</p>
        `;
        
        const highlightsContainer = document.getElementById('event-modal-highlights');
        highlightsContainer.innerHTML = `
            <div class="event-inline-highlights">
                <div class="event-highlight-item">
                    <i class="fas fa-graduation-cap"></i>
                    <span>International short program hosted by an Indonesian university</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-cogs"></i>
                    <span>Focus on culture-driven technology and innovation</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-users"></i>
                    <span>Cross-cultural academic interaction</span>
                </div>
                <div class="event-highlight-item">
                    <i class="fas fa-globe-asia"></i>
                    <span>Early global exposure in academic learning</span>
                </div>
            </div>
            
            <div class="event-certificate-display">
                <h4>Certificate of Participation</h4>
                <div class="event-cert-pdf-viewer">
                    <embed src="assets/int/uni.pdf#toolbar=0" type="application/pdf" class="event-cert-pdf-embed">
                    <p class="pdf-fallback-text">PDF viewer may not be supported. <a href="assets/int/uni.pdf" target="_blank" rel="noopener noreferrer">View certificate</a></p>
                </div>
                <p class="cert-label">Certificate of Participation — LOCUST 2022 (UNISSULA, Indonesia)</p>
            </div>
        `;
    } else {
        // Default handling for other events
        document.getElementById('event-modal-institute').textContent = event.institute;
        document.getElementById('event-modal-location').textContent = event.locationType;
        document.getElementById('event-modal-title').textContent = event.title;
        document.getElementById('event-modal-description').textContent = event.details;
        
        const highlights = extractHighlights(event.details);
        const highlightsContainer = document.getElementById('event-modal-highlights');
        highlightsContainer.innerHTML = `
            <h4>Key Highlights</h4>
            <ul>
                ${highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        `;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize floating exit button
    initFloatingExitButton();
}

function openCertificateLightbox(imageSrc, caption) {
    let lightbox = document.getElementById('certificate-lightbox');
    if (!lightbox) {
        // Create lightbox if it doesn't exist
        lightbox = document.createElement('div');
        lightbox.id = 'certificate-lightbox';
        lightbox.className = 'certificate-lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" onclick="closeCertificateLightbox()">
                    <i class="fas fa-times"></i>
                </button>
                <img src="${imageSrc}" alt="${caption}">
                <p class="lightbox-caption">${caption}</p>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        // Close on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeCertificateLightbox();
            }
        });
        
        setTimeout(() => lightbox.classList.add('active'), 10);
    } else {
        lightbox.querySelector('img').src = imageSrc;
        lightbox.querySelector('img').alt = caption;
        lightbox.querySelector('.lightbox-caption').textContent = caption;
        lightbox.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
}

function closeCertificateLightbox() {
    const lightbox = document.getElementById('certificate-lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeEventDetails() {
    const modal = document.getElementById('event-details-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Remove floating button
    const floatingBtn = document.getElementById('floating-exit-btn');
    if (floatingBtn) floatingBtn.remove();
}

function initFloatingExitButton() {
    // Remove existing button if present
    const existing = document.getElementById('floating-exit-btn');
    if (existing) existing.remove();
    
    // Create floating exit button
    const floatingBtn = document.createElement('button');
    floatingBtn.id = 'floating-exit-btn';
    floatingBtn.className = 'floating-exit-btn';
    floatingBtn.innerHTML = '<i class="fas fa-times"></i> Close';
    floatingBtn.onclick = closeEventDetails;
    floatingBtn.style.opacity = '0';
    floatingBtn.style.visibility = 'hidden';
    floatingBtn.style.pointerEvents = 'none';
    
    document.body.appendChild(floatingBtn);
    
    // Use IntersectionObserver on certificate display
    const certDisplay = document.querySelector('.event-certificate-display');
    if (!certDisplay) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                floatingBtn.style.opacity = '1';
                floatingBtn.style.visibility = 'visible';
                floatingBtn.style.pointerEvents = 'auto';
            } else {
                floatingBtn.style.opacity = '0';
                floatingBtn.style.visibility = 'hidden';
                floatingBtn.style.pointerEvents = 'none';
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px'
    });
    
    observer.observe(certDisplay);
}

let currentEventCertificates = [];
let currentCertIndex = 0;

async function openEventCertificates(eventId) {
    const event = internationalEvents.find(e => e.id === eventId);
    if (!event || !event.certificates.length) return;
    
    currentEventCertificates = event.certificates;
    currentCertIndex = 0;
    
    const modal = document.getElementById('multi-certificate-viewer-modal');
    document.getElementById('multi-certificate-viewer-title').textContent = event.title;
    
    if (currentEventCertificates.length > 1) {
        document.getElementById('certificate-carousel-controls').style.display = 'flex';
    } else {
        document.getElementById('certificate-carousel-controls').style.display = 'none';
    }
    
    await displayCurrentCertificate();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

async function displayCurrentCertificate() {
    const url = currentEventCertificates[currentCertIndex];
    const img = document.getElementById('multi-certificate-viewer-image');
    const canvas = document.getElementById('multi-certificate-viewer-canvas');
    const newTabBtn = document.getElementById('btn-multi-open-new-tab');
    const counter = document.getElementById('certificate-counter');
    
    img.style.display = 'none';
    canvas.style.display = 'none';
    newTabBtn.style.display = 'none';
    
    counter.textContent = `${currentCertIndex + 1} / ${currentEventCertificates.length}`;
    
    const isPdf = url.toLowerCase().endsWith('.pdf');
    
    if (isPdf) {
        try {
            const success = await renderPDFToCanvasEvent(url, canvas, 1200);
            if (success) {
                canvas.style.display = 'block';
            } else {
                throw new Error('PDF rendering failed');
            }
        } catch (error) {
            console.error('PDF rendering error:', error);
            // Fallback: try iframe
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.style.width = '100%';
            iframe.style.height = '80vh';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '12px';
            
            const wrapper = document.querySelector('#multi-certificate-viewer-modal .certificate-viewer-image-wrapper');
            wrapper.innerHTML = '';
            wrapper.appendChild(iframe);
            
            // Show fallback button
            newTabBtn.style.display = 'inline-flex';
            newTabBtn.onclick = () => window.open(url, '_blank');
        }
    } else {
        img.src = url;
        img.alt = 'Certificate';
        img.style.display = 'block';
        img.onerror = () => {
            console.error('Image load failed:', url);
            newTabBtn.style.display = 'inline-flex';
            newTabBtn.textContent = 'Open Certificate';
            newTabBtn.onclick = () => window.open(url, '_blank');
        };
    }
}

const pdfCacheEvent = new Map();

async function renderPDFToCanvasEvent(url, canvas, maxWidth = 1200) {
    try {
        if (typeof pdfjsLib === 'undefined') {
            console.error('pdf.js not loaded');
            return false;
        }
        
        let pdf;
        if (pdfCacheEvent.has(url)) {
            pdf = pdfCacheEvent.get(url);
        } else {
            const loadingTask = pdfjsLib.getDocument(url);
            pdf = await loadingTask.promise;
            pdfCacheEvent.set(url, pdf);
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

function prevCertificate() {
    if (currentCertIndex > 0) {
        currentCertIndex--;
        displayCurrentCertificate();
    }
}

function nextCertificate() {
    if (currentCertIndex < currentEventCertificates.length - 1) {
        currentCertIndex++;
        displayCurrentCertificate();
    }
}

function closeMultiCertificateViewer() {
    const modal = document.getElementById('multi-certificate-viewer-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentEventCertificates = [];
    currentCertIndex = 0;
    
    // Clean up wrapper content
    const wrapper = document.querySelector('#multi-certificate-viewer-modal .certificate-viewer-image-wrapper');
    const img = document.getElementById('multi-certificate-viewer-image');
    const canvas = document.getElementById('multi-certificate-viewer-canvas');
    
    if (wrapper && !wrapper.contains(img)) {
        wrapper.innerHTML = '';
        wrapper.appendChild(img);
        wrapper.appendChild(canvas);
    }
}

renderEventsGrid();

// Configure PDF.js worker
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// ==================== About Details Modal ====================
function openAboutDetails(id) {
    console.log("=== OPENING ABOUT DETAILS ===");
    console.log("Item ID:", id);
    
    const item = aboutHighlights.find(h => h.id === id);
    if (!item) {
        console.error("Item not found:", id);
        return;
    }
    
    console.log("Item found:", item.title);
    
    // Use HTML content for Fiverr item
    let detailsContent = item.details;
    if (id === 'fiverr-level1') {
        console.log("FIVERR DETAILS VIEW RENDERED");
        detailsContent = item.details;
    }
    
    document.getElementById('modal-breadcrumb-title').textContent = item.title;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-details').innerHTML = detailsContent;
    document.getElementById('about-details-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log("Modal opened successfully");
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
        closeGPLightbox();
    }
});

// ==================== GP Lightbox ====================
function openGPLightbox(index) {
    const images = ['assets/gp.jpg', 'assets/gp1.jpg'];
    const labels = ['Certification', 'Recognition'];
    
    let lightbox = document.querySelector('.gp-lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'gp-lightbox';
        lightbox.style.cssText = 'position:fixed;inset:0;z-index:99999;';
        lightbox.innerHTML = `
            <div class="gp-lightbox-overlay" onclick="closeGPLightbox()"></div>
            <div class="gp-lightbox-content">
                <button class="gp-lightbox-close" onclick="closeGPLightbox()">&times;</button>
                <img class="gp-lightbox-img" src="" alt="">
                <p class="gp-lightbox-label"></p>
                <div class="gp-lightbox-nav">
                    <button class="gp-lightbox-prev" onclick="changeGPImage(-1)">&#10094;</button>
                    <button class="gp-lightbox-next" onclick="changeGPImage(1)">&#10095;</button>
                </div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }
    
    window.currentGPIndex = index;
    window.gpImages = images;
    window.gpLabels = labels;
    
    lightbox.querySelector('.gp-lightbox-img').src = images[index];
    lightbox.querySelector('.gp-lightbox-label').textContent = labels[index];
    lightbox.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeGPLightbox() {
    const lightbox = document.querySelector('.gp-lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
}

function changeGPImage(direction) {
    window.currentGPIndex += direction;
    if (window.currentGPIndex < 0) window.currentGPIndex = window.gpImages.length - 1;
    if (window.currentGPIndex >= window.gpImages.length) window.currentGPIndex = 0;
    
    const lightbox = document.querySelector('.gp-lightbox');
    lightbox.querySelector('.gp-lightbox-img').src = window.gpImages[window.currentGPIndex];
    lightbox.querySelector('.gp-lightbox-label').textContent = window.gpLabels[window.currentGPIndex];
}

// Initialize about grid on page load
document.addEventListener('DOMContentLoaded', () => {
    renderAboutGrid();
});

// ==================== Reveal Animation System ====================
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealElements.forEach(el => el.classList.add('revealed'));
        return;
    }
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('reveal-stagger')) {
                    const siblings = entry.target.parentElement.querySelectorAll('.reveal-stagger');
                    const elementIndex = Array.from(siblings).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, elementIndex * 80);
                } else {
                    entry.target.classList.add('revealed');
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// ==================== Scroll Progress Indicator ====================
function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });

// ==================== Page Transition ====================
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-transition');
    initRevealAnimations();
});

// Re-initialize on page show (handles back/forward)
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        initRevealAnimations();
    }
});

// ==================== Navbar Active State Management ====================
function updateNavbarActiveState() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    // If not on homepage, remove all active states
    if (currentPath !== '/' && currentPath !== '/index.html' && !currentPath.endsWith('/K M Arafat Islam/')) {
        navLinks.forEach(link => link.classList.remove('active'));
        return;
    }
    
    // On homepage, use intersection observer for section detection
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Initialize navbar state on page load
document.addEventListener('DOMContentLoaded', () => {
    updateNavbarActiveState();
});

// Re-initialize on page show (handles back/forward navigation)
window.addEventListener('pageshow', () => {
    updateNavbarActiveState();
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

// ==================== Contact Section ====================
function copyEmail() {
    const email = 'uxdev.arafat@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const copyBtn = document.querySelector('.btn-copy-email');
        const originalHTML = copyBtn.innerHTML;
        
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        copyBtn.classList.add('copied');
        
        showToast('Email copied to clipboard!');
        
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            copyBtn.classList.remove('copied');
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Failed to copy email');
    });
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    const subject = `Portfolio Contact — ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    showToast('Message prepared. Email opened.');
    
    setTimeout(() => {
        window.location.href = `mailto:uxdev.arafat@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    }, 500);
    
    document.getElementById('contactForm').reset();
}

function showToast(message) {
    const toast = document.getElementById('contactToast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
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

const updateScrollBtnStyles = () => {
    const isMobile = window.innerWidth < 768;
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: ${isMobile ? 'calc(18px + env(safe-area-inset-bottom))' : '30px'};
        right: ${isMobile ? '14px' : '30px'};
        width: ${isMobile ? '40px' : '50px'};
        height: ${isMobile ? '40px' : '50px'};
        border-radius: 50%;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        display: ${window.scrollY > 600 ? 'flex' : 'none'};
        align-items: center;
        justify-content: center;
        font-size: ${isMobile ? '1rem' : '1.2rem'};
        z-index: 50;
        transition: all 0.3s ease;
    `;
};

updateScrollBtnStyles();
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

window.addEventListener('resize', updateScrollBtnStyles);

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
