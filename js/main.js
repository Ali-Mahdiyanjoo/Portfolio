tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            colors: {
                cyan: {
                    400: '#22d3ee',
                    500: '#06b6d4',
                },
                emerald: {
                    400: '#34d399',
                },
                slate: {
                    850: '#151e2e',
                    900: '#0b1120',
                    950: '#020617',
                }
            },
            animation: {
                'blink': 'blink 1s step-end infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        }
    }
};

const translations = {
    en: {
        'nav-about': '~/about',
        'nav-skills': '~/skills',
        'nav-experience': '~/experience',
        'nav-fun': '~/fun_stuff',
        'nav-contact': '~/contact',
        'hero-greeting': './start_session.sh',
        'hero-im': "Hi, I'm",
        'hero-desc': 'International student at Ynov Campus Strasbourg building reliable cloud systems and automating infrastructure.',
        'sec-num-01': '// 01. ABOUT',
        'h-whoami': 'whoami',
        'about-p1': "Hello! I'm Ali, an international student currently pursuing my Bachelor 3 in IT - Infrastructure & Network at Ynov Campus Strasbourg. My journey into tech started with a deep curiosity about how large-scale systems stay online, leading me down the path of DevOps and System Administration.",
        'about-p2': "I specialize in building reliable cloud environments, automating CI/CD pipelines, and ensuring infrastructure as code (IaC) is secure and scalable. Having worked in various roles in Iran and now transitioning into the French tech ecosystem, I bring a diverse perspective to engineering challenges.",
        'sec-num-02': '// 02. SKILLS',
        'h-skills': 'ls -la skills/',
        'cat-containers': 'Containers & Orchestration',
        'cat-cloud': 'Cloud & IaC',
        'cat-cicd': 'CI/CD & Scripting',
        'cat-observability': 'Observability & Data',
        'cat-certs': 'Certifications',
        'sec-num-03': '// 03. EXPERIENCE',
        'h-exp': 'cat /var/log/experience.log',
        'date-esn': '08/2025 - Present',
        'exp1-l1': 'Migration of legacy WordPress to modern architecture (Django, FastAPI, PostgreSQL, Docker).',
        'exp1-l2': 'AWS infrastructure setup with Terraform, CI/CD pipelines (GitHub Actions), and observability (Prometheus, Grafana, ELK).',
        'exp2-l1': 'Migrated Docker Compose environments to Kubernetes to improve scalability and resilience.',
        'exp2-l2': 'CI/CD automation and AWS deployment via Terraform, Ansible, and GitLab CI.',
        'exp3-l1': 'Administered Kubernetes on AWS with production monitoring.',
        'exp3-l2': 'Automated deployments and optimized Cloud resources on AWS and GCP.',
        'sec-num-04': '// 04. FUN STUFF',
        'h-fun': 'sudo apt install fun',
        'fun1-title': 'International Student',
        'fun1-desc': 'From Tehran to Nancy to Strasbourg — navigating 3 languages, 2 cultures, 1 baguette at a time 🥖',
        'fun2-title': 'CS50x Champion',
        'fun2-desc': "First place at Harvard's CS50x competition with Team Datapanel. Turns out staying awake for 36h straight does pay off.",
        'fun3-title': 'Erasmus+ Volunteer',
        'fun3-desc': 'Helping other international students integrate and feel at home in France. Been there, done that.',
        'fun4-title': 'Automation Addict',
        'fun4-desc': 'If I do something twice, I automate it. If I automate it, I monitor it. If it breaks, I fix the monitoring first.',
        'sec-num-05': '// 05. CONTACT',
        'h-contact': './connect.sh',
        'contact-desc': "Looking for an alternance partner? Let's build something great together. I respond to all messages — usually faster than a CI/CD pipeline.",
        'cv-header': '// DOWNLOAD CV',
        'cv-desc': 'My resume is available in English and French. Same person, different words.',
        'cv-en-label': 'English',
        'cv-fr-label': 'Français'
    },
    fr: {
        'nav-about': '~/a_propos',
        'nav-skills': '~/competences',
        'nav-experience': '~/experience',
        'nav-fun': '~/trucs_cool',
        'nav-contact': '~/contact',
        'hero-greeting': './init_session.sh',
        'hero-im': "Bonjour, je suis",
        'hero-desc': "Étudiant international à Ynov Campus Strasbourg, je construis des systèmes cloud fiables et automatise des infrastructures.",
        'sec-num-01': '// 01. À PROPOS',
        'h-whoami': 'whoami',
        'about-p1': "Bonjour ! Je suis Ali, étudiant international en Bachelor 3 Informatique - Infrastructure & Réseau à Ynov Campus Strasbourg. Ma passion a commencé par une curiosité sur le fonctionnement des systèmes à grande échelle, m'orientant vers le DevOps.",
        'about-p2': "Je me spécialise dans la création d'environnements cloud, l'automatisation CI/CD et l'IaC. Ayant travaillé en Iran et m'intégrant dans l'écosystème français, j'apporte une perspective adaptable aux défis d'ingénierie.",
        'sec-num-02': '// 02. COMPÉTENCES',
        'h-skills': 'ls -la competences/',
        'cat-containers': 'Conteneurs & Orchestration',
        'cat-cloud': 'Cloud & IaC',
        'cat-cicd': 'CI/CD & Scripting',
        'cat-observability': 'Observabilité & Data',
        'cat-certs': 'Certifications',
        'sec-num-03': '// 03. EXPÉRIENCE',
        'h-exp': 'cat /var/log/experience.log',
        'date-esn': '08/2025 - Présent',
        'exp1-l1': "Migration d'une plateforme WordPress vers une architecture moderne (Django, FastAPI, PostgreSQL, Docker).",
        'exp1-l2': "Mise en place d'infrastructures AWS avec Terraform, CI/CD (GitHub Actions), et observabilité (Prometheus, Grafana, ELK).",
        'exp2-l1': "Migration d'environnements Docker Compose vers Kubernetes (scalabilité et résilience).",
        'exp2-l2': "Automatisation CI/CD et déploiement d'infrastructures AWS via Terraform, Ansible et GitLab CI.",
        'exp3-l1': "Administration d'infrastructures Kubernetes sur AWS avec supervision de production.",
        'exp3-l2': "Automatisation des déploiements et optimisation des ressources Cloud sur AWS et GCP.",
        'sec-num-04': '// 04. TRUCS COOL',
        'h-fun': 'sudo apt install fun',
        'fun1-title': 'Étudiant International',
        'fun1-desc': 'De Téhéran à Nancy à Strasbourg — 3 langues, 2 cultures, 1 baguette à la fois 🥖',
        'fun2-title': 'Champion CS50x',
        'fun2-desc': "Première place au concours CS50x de Harvard avec l'équipe Datapanel. 36h sans dormir, ça paie.",
        'fun3-title': 'Bénévole Erasmus+',
        'fun3-desc': "Aider les étudiants étrangers à s'intégrer en France. Je sais ce que c'est.",
        'fun4-title': "Accro à l'automatisation",
        'fun4-desc': "Si je fais quelque chose deux fois, je l'automatise. Si ça casse, je répare le monitoring en premier.",
        'sec-num-05': '// 05. CONTACT',
        'h-contact': './contacter.sh',
        'contact-desc': "À la recherche d'un partenaire d'alternance ? Contactez-moi — je réponds plus vite qu'un pipeline CI/CD.",
        'cv-header': '// TÉLÉCHARGER CV',
        'cv-desc': 'Mon CV est disponible en français et en anglais. Même personne, mots différents.',
        'cv-en-label': 'Anglais',
        'cv-fr-label': 'Français'
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    document.documentElement.lang = currentLang;
    
    document.getElementById('current-lang').innerText = currentLang.toUpperCase();
    document.getElementById('mobile-lang-toggle').innerText = currentLang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    typewriterText = currentLang === 'en' ? textsEN : textsFR;
    textIndex = 0;
    charIndex = 0;
    document.getElementById("typewriter").innerHTML = "";
}

document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
document.getElementById('mobile-lang-toggle').addEventListener('click', toggleLanguage);

const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => menu.classList.toggle('hidden'));
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

const textsEN = ["Cloud Architect", "K8s Administrator", "Terraform Enthusiast", "Automation Expert"];
const textsFR = ["Architecte Cloud", "Administrateur K8s", "Passionné Terraform", "Expert Automatisation"];
let typewriterText = textsEN;
let textIndex = 0, charIndex = 0, isDeleting = false;

function typeWriter() {
    const target = document.getElementById("typewriter");
    const currentString = typewriterText[textIndex];

    if (isDeleting) {
        target.innerText = currentString.substring(0, charIndex - 1);
        charIndex--;
    } else {
        target.innerText = currentString.substring(0, charIndex + 1);
        charIndex++;
    }

    let timeout = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentString.length) {
        timeout = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterText.length;
        timeout = 500;
    }
    setTimeout(typeWriter, timeout);
}
setTimeout(typeWriter, 1000);