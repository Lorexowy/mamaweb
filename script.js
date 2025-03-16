document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation
    const mobileMenuButton = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-item');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Animacja pływających elementów
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const delay = Math.random() * 3;
        
        element.style.animationDuration = `${speed}s`;
        element.style.animationDelay = `${delay}s`;
    });
    
    // Efekt parallax przy przewijaniu
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const backgroundElements = section.querySelectorAll('[data-parallax]');
            
            backgroundElements.forEach(element => {
                const speed = element.getAttribute('data-parallax');
                element.style.transform = `translateY(${scrollPosition * speed}px)`;
            });
        });
    });
    
    // Animacja elementów przy scrollowaniu
    const elementsToAnimate = document.querySelectorAll('.gallery-item, .product-category, .contact-card');
    
    function animateOnScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Wywołanie początkowe
    
    // Galeria filtrowanie
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to current button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.transform = 'scale(0.8)';
                    item.style.opacity = '0';
                    
                    setTimeout(() => {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.transform = 'scale(1)';
                            item.style.opacity = '1';
                        }, 50);
                    }, 300);
                } else {
                    item.style.transform = 'scale(0.8)';
                    item.style.opacity = '0';
                    
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Header height offset
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efekty kart kontaktowych
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.contact-icon').style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.contact-icon').style.transform = 'scale(1)';
        });
    });
    
    // Animacja FAQ items przy scrollowaniu
    const faqItems = document.querySelectorAll('.faq-item');
    
    function animateFaqItems() {
        faqItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, 150 * index);
        });
    }
    
    // Wywołaj animację po załadowaniu strony
    if (faqItems.length > 0) {
        window.addEventListener('load', animateFaqItems);
    }
    
    // Social Media integration
    function initFacebookFeed() {
        console.log('Initializing Facebook feed');
        
        // W rzeczywistej implementacji należy użyć Facebook Graph API
        // Poniższy kod jest przykładem, jak zainicjować Facebook SDK
        /*
        window.fbAsyncInit = function() {
            FB.init({
                appId      : 'YOUR_APP_ID',
                cookie     : true,
                xfbml      : true,
                version    : 'v16.0'
            });
                
            FB.api(
                '/PAGE_ID/posts',
                'GET',
                {"fields":"message,full_picture,created_time,permalink_url,likes.summary(true),comments.summary(true)"},
                function(response) {
                    if (response && !response.error) {
                        const fbFeed = document.getElementById('fb-feed');
                        fbFeed.innerHTML = '';
                        
                        response.data.slice(0, 3).forEach(post => {
                            const postElement = document.createElement('div');
                            postElement.className = 'social-post';
                            // Tutaj dodajemy zawartość posta
                            fbFeed.appendChild(postElement);
                        });
                    }
                }
            );
        };
        */
    }
    
    function initInstagramFeed() {
        console.log('Initializing Instagram feed');
        
        // W rzeczywistej implementacji należy użyć Instagram Graph API
        // Poniższy kod jest przykładem, jak zainicjować Instagram feed
        /*
        fetch('https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=YOUR_ACCESS_TOKEN')
            .then(response => response.json())
            .then(data => {
                const instaFeed = document.getElementById('insta-feed');
                instaFeed.innerHTML = '';
                
                data.data.slice(0, 6).forEach(post => {
                    if (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM') {
                        const postElement = document.createElement('div');
                        postElement.className = 'insta-post';
                        // Tutaj dodajemy zawartość posta
                        instaFeed.appendChild(postElement);
                    }
                });
            })
            .catch(error => console.error('Error fetching Instagram posts:', error));
        */
    }
    
    // Inicjalizacja feedów z mediów społecznościowych
    initFacebookFeed();
    initInstagramFeed();
    
    // Scroll animations (this would be enhanced in a real site with libraries like AOS)
    function revealOnScroll() {
        const elements = document.querySelectorAll('.gallery-item, .product-category, .contact-method');
        
        elements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }
    
    // Add visible class for CSS animations
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    // Lazy loading images (modern browsers have native support)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
});