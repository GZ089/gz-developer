
// ---------- CONTENT DATA (EASY TO UPDATE) ----------
// ---------- CONTENT DATA (PROFESSIONAL VERSION) ----------
const contentData = {
    about: {
        title: "Hey There! I am Gul Zaman, also known as GZ_Developer",
        paragraphs: [
            "I am <strong>GZ_Developer</strong>, a passionate and creative web developer who transforms ideas into reality. With expertise in <span style='color: #ff5733; font-weight: bold;'>HTML, CSS, JavaScript</span>, and modern frameworks like <span style='color: #3498db; font-weight: bold;'>React</span>, I specialize in building sleek, responsive, and high-performance web applications.",
            "My skillset extends to <span style='color: #27ae60; font-weight: bold;'>backend development</span>, where I craft robust APIs using <span style='color: #f39c12; font-weight: bold;'>Node.js, Flask, and Firebase</span>. Whether it's a stunning front-end interface or a powerful backend, I ensure seamless integration and optimal performance.",
            "I have also developed <span style='color: #e74c3c; font-weight: bold;'>AI-powered applications</span>, including a <strong>Text-to-Image Generator</strong> and an <strong>AI-based PDF Editor</strong>. Additionally, I work with <span style='color: #8e44ad; font-weight: bold;'>automation</span> and continuously optimize workflows for better efficiency.",
            "If you're looking for an <span style='color: #2c3e50; font-weight: bold;'>innovative, detail-oriented, and result-driven developer</span> to bring your project to life, look no further."
        ],
        img: "../assests/gz.png"
    },
    skills: {
        title: "My Skills and Experiences",
        paragraphs: [
            "<strong>I'm <span style='color: #ff5733;'>GZ_Developer</span></strong>, a creative and passionate web developer, turning ideas into high-performance digital experiences.",
            "<span style='color: #3498db; font-weight: bold;'>Front-End Development:</span> I craft stunning, responsive, and dynamic UIs using <strong>HTML, CSS, JavaScript, and React</strong> with smooth interactions and animations.",
            "<span style='color: #27ae60; font-weight: bold;'>Back-End Development:</span> I develop powerful and scalable applications using <strong>Node.js, Flask, and Firebase</strong>. APIs, authentication, and database management are my expertise.",
            "<span style='color: #f39c12; font-weight: bold;'>AI and Automation:</span> I work with <strong>AI-powered applications</strong> like Text-to-Image Generators, PDF Editors, and automation tools to deliver smart solutions.",
            "<span style='color: #8e44ad; font-weight: bold;'>Performance Optimization:</span> I ensure <strong>fast, efficient, and SEO-friendly</strong> web applications for the best user experience.",
            "Ready to build something amazing together? Let's connect and make it happen."
        ],
        bars: [
            { label: "HTML", percent: 95, cls: "html" },
            { label: "CSS", percent: 90, cls: "css" },
            { label: "Javascript", percent: 80, cls: "javascript" },
            { label: "Python", percent: 85, cls: "python" },
            { label: "PHP", percent: 65, cls: "php" }
        ]
    },
    services: {
        intro: "<strong>Welcome to <span style='color: #ff5733;'>GZ_Developer's</span> Service Hub.</strong><br><br> <span style='color: #3498db; font-weight: bold;'>Custom Web Development:</span> Get fast, responsive, and feature-packed websites using <strong>HTML, CSS, JavaScript, and React.</strong> Your dream website, brought to life.<br><br> <span style='color: #27ae60; font-weight: bold;'>Backend Solutions:</span> From <strong>Node.js, Flask, Firebase</strong> to database management, I build scalable and secure backend solutions. APIs, authentication, and automation all sorted.<br><br> <span style='color: #f39c12; font-weight: bold;'>UI/UX and Animations:</span> I craft visually stunning interfaces with <strong>smooth animations and engaging interactions</strong>. First impressions matter.<br><br> <span style='color: #8e44ad; font-weight: bold;'>App Development:</span> Need a progressive web app? I cover <strong>React, Flutter, and PWA</strong> technologies.<br><br> <span style='color: #e74c3c; font-weight: bold;'>AI-Powered Tools and Automation:</span> I develop <strong>AI-based text-to-image generators, PDF tools, web scrapers</strong>, and automation scripts to save time and boost productivity.<br><br> <span style='color: #9b59b6; font-weight: bold;'>SEO and Performance Optimization:</span> Websites that rank higher and load faster. I fine-tune <strong>SEO, performance, and accessibility</strong> for maximum results.<br><br> <span style='color: #2ecc71; font-weight: bold;'>Let's Build Something Amazing.</span> Contact me today and let's turn your ideas into reality.",
        cards: [
            { icon: "fas fa-palette", title: "Web Design and Development", items: [
                "Need a modern, stunning, and fully responsive website?",
                "I create sleek and user-friendly web designs using HTML, CSS, JavaScript and modern frameworks like React and Tailwind CSS.",
                "Pixel-perfect UI with smooth animations.",
                "Mobile-first and SEO-friendly designs.",
                "Optimized performance for fast loading speeds.",
                "Custom themes and branding tailored to your business.",
                "Whether it's a portfolio, e-commerce store, or business website, I've got you covered."
            ]},
            { icon: "fas fa-object-group", title: "Motion Graphic Design", items: [
                "Creative Animations – Motion graphics that bring designs to life.",
                "Seamless Transitions – Eye-catching effects that enhance every frame.",
                "Custom Designs – Unique styles that elevate your brand identity.",
                "Engaging Visuals – Motion graphics that captivate audiences.",
                "Professional and Stunning – High-quality animations that deliver impact."
            ]},
            { icon: "fas fa-file-code", title: "Web Development", items: [
                "Dynamic Websites – Fast, responsive, and modern web solutions.",
                "Front-end Magic – Sleek UI/UX designs for seamless user experiences.",
                "Back-end Power – Secure, scalable, and high-performance applications.",
                "API Integrations – Smooth and efficient third-party service integrations.",
                "SEO and Speed Optimized – Blazing fast websites that rank higher on Google."
            ]}
        ]
    },
    work: {
        projects: [
            {
                title: "Personal AI Assistant ",
                image: "../assests/gz_ai.jpg",
                url: "https://github.com/gz089/gz_ai"
            },
            {
                title: "Mine Soft Office",
                image: "https://minesoftoffice.netlify.app/minesoft2.png",
                url: "https://minesoftoffice.netlify.app"
            },
            {
                title: "AyeshaMall",
                image: "https://ayesha-mall.netlify.app/image/logo.png",
                url: "https://ayesha-mall.netlify.app"
            },
            {
                title: "Gz Developer",
                image: "../assests/logo.jpg",
                url: "https://gz-developer.netlify.app"
            },

            {
                title: "Link my Group",
                image: "../assests/logo.gif",
                url: "https://gulzaman.netlify.app"
            },
             {
                title: "Gul zaman",
                image: "../assests/gz.png",
                url: "https://link-my-group.web.app"
            }
        ]
    }
};
// ---------- RENDER FUNCTIONS ----------
function renderAbout() {
    const container = document.getElementById('aboutContent');
    const data = contentData.about;
    container.innerHTML = `
        <div class="column col-left reveal">
            <div class="img-card" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
                <img src="${data.img}" alt="GZ_Developer">
            </div>
        </div>
        <div class="column col-right reveal">
            <h2 class="content-title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">${data.title}</h2>
            ${data.paragraphs.map(p => `<p class="paragraph-text" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="400">${p}</p>`).join('')}
            <a href="#" class="btn" data-aos="zoom-out-left" data-aos-duration="1000" data-aos-delay="600">See more</a>
        </div>
    `;
}

function renderSkills() {
    const container = document.getElementById('skillsContent');
    const data = contentData.skills;
    let barsHtml = data.bars.map((bar, idx) => `
        <div class="bar">
            <div class="info" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="${100 + idx * 100}">
                <span>${bar.label}</span>
                <span>${bar.percent}%</span>
            </div>
            <div class="line ${bar.cls}" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="${140 + idx * 100}"></div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="column col-left">
            <h2 class="content-title" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">${data.title}</h2>
            ${data.paragraphs.map(p => `<div class="paragraph-text" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="300">${p}</div>`).join('')}
            <a href="#" class="btn" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="400">See more</a>
        </div>
        <div class="column col-right">
            ${barsHtml}
        </div>
    `;
}

function renderServices() {
    const introContainer = document.getElementById('servicesIntro');
    const cardsContainer = document.getElementById('servicesContent');
    const data = contentData.services;
    introContainer.innerHTML = data.intro;

    let cardsHtml = data.cards.map((card, idx) => `
        <div class="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${400 + idx * 150}">
            <div class="service-icon"><i class="${card.icon}"></i></div>
            <div class="info">
                <h3>${card.title}</h3>
                <ul style="list-style:none; padding-left:0;">
                    ${card.items.map(item => `<li class="Lis" style="margin-bottom:6px;">${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
    cardsContainer.innerHTML = cardsHtml;
}

function renderWork() {
    const container = document.getElementById('workContent');
    const projects = contentData.work.projects;
    let html = projects.map((project, idx) => `
        <div class="card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${200 + idx * 100}">
            <div class="card-img">
                <a href="${project.url}" target="_blank">
                    <img src="${project.image}" alt="${project.title}">
                </a>
            </div>
            <h3 style="color: white; text-align: center; margin-top: 10px; font-size: 1em;">
                <a href="${project.url}" target="_blank" style="color: #3a6cf4; text-decoration: none;">
                    ${project.title}
                </a>
            </h3>
        </div>
    `).join('');
    container.innerHTML = html;
}
// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', function() {
    // init AOS
    AOS.init({ offset: 0 });

    renderAbout();
    renderSkills();
    renderServices();
    renderWork();

    // menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const navigation = document.getElementById('navigation');
    const navLinks = navigation.querySelectorAll('a');

    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            navigation.classList.remove('active');
        });
    });

    // sticky header
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });


    });
