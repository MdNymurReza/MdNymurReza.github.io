/**
 * MD Nymur Reza Portfolio - Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        offset: 100
    });

    // --- Typing Effect ---
    new Typed('#typing-text', {
        strings: ['Programmer', 'Instructor', 'Problem Solver', 'Builder'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
        cursorChar: '_'
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Navbar background
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Scroll progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";

        // Back to top button
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Active Link Highlighting
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    themeToggle.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);

    // Check for saved theme
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

    // --- Mobile Menu ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- Project Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => {
                b.classList.remove('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/30');
                b.classList.add('glass-card');
            });
            btn.classList.add('bg-primary', 'text-white', 'shadow-lg', 'shadow-primary/30');
            btn.classList.remove('glass-card');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    // Re-trigger AOS for visible cards
                    card.setAttribute('data-aos', 'fade-up');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // --- Skill Bar Animation with Staggered Delay ---
    const skillSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-bar');

    if (skillSection && skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach((bar, index) => {
                        const width = bar.getAttribute('data-width');
                        // Add staggered delay
                        bar.style.transitionDelay = `${index * 150}ms`;
                        bar.style.width = width;
                    });
                    // Stop observing after animation starts
                    skillObserver.unobserve(skillSection);
                }
            });
        }, { threshold: 0.2 });

        skillObserver.observe(skillSection);
    }

    // --- Back to Top ---
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Project Card Tilt Effect ---
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            const inner = card.querySelector('.project-card-inner');
            if (inner) {
                inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const inner = card.querySelector('.project-card-inner');
            if (inner) {
                inner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            }
        });
    });

    // --- EmailJS Integration ---
    (function() {
        // Replace with your actual EmailJS Public Key
        emailjs.init("YOUR_PUBLIC_KEY");
    })();

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Sending...';
            btn.disabled = true;
            lucide.createIcons();

            // Simulate success for demo if no key is provided
            // In production, use: emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            
            setTimeout(() => {
                btn.innerHTML = '<i data-lucide="check-circle" class="w-5 h-5"></i> Message Sent!';
                btn.classList.replace('bg-primary', 'bg-emerald-500');
                lucide.createIcons();
                contactForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('bg-emerald-500', 'bg-primary');
                    btn.disabled = false;
                    lucide.createIcons();
                }, 3000);
            }, 1500);
        });
    }
});
