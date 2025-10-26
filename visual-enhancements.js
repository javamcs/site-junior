/**
 * Visual Enhancements Script
 * Melhora a experiência visual do site com animações e efeitos
 */

(function() {
    'use strict';

    // ============================================
    // 1. SCROLL REVEAL - Revela elementos ao rolar
    // ============================================
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Reveal apenas uma vez
                    if (entry.target.dataset.revealOnce !== 'false') {
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Elementos para revelar
        const revealElements = document.querySelectorAll('.podcast-section, .contact-section, .works-grid .work-card, .video-item');
        revealElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // ============================================
    // 2. PARTICLES BACKGROUND (opcional - leve)
    // ============================================
    function initParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;

        // Criar partículas
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 3 + 1;
            const left = Math.random() * 100;
            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * 5;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 215, 0, 0.3);
                border-radius: 50%;
                left: ${left}%;
                animation: float ${duration}s infinite ease-in-out;
                animation-delay: ${delay}s;
            `;
            
            particlesContainer.appendChild(particle);
        }

        document.body.appendChild(particlesContainer);
    }

    // ============================================
    // 3. SCROLL PROGRESS BAR
    // ============================================
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--color-primary), var(--color-primary-hover));
            z-index: 9998;
            transform-origin: left;
            transform: scaleX(0);
            transition: transform 0.1s ease;
        `;

        document.body.appendChild(progressBar);

        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.transform = `scaleX(${scrolled / 100})`;
        }, { passive: true });
    }

    // ============================================
    // 4. SMOOTH SCROLL SNAP
    // ============================================
    function initSmoothSnap() {
        // Adiciona scroll-snap ao CSS
        const style = document.createElement('style');
        style.textContent = `
            html {
                scroll-snap-type: y proximity;
            }
            
            section {
                scroll-snap-align: start;
            }
            
            .revealed {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(100vh) translateX(0);
                }
                50% {
                    transform: translateY(-10vh) translateX(20px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ============================================
    // 5. HOVER EFFECTS MELHORADOS
    // ============================================
    function initEnhancedHovers() {
        // Cards com efeito de elevação melhorado
        const cards = document.querySelectorAll('.work-card, .video-item, .podcast-image-wrapper');
        
        cards.forEach(function(card) {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // ============================================
    // 6. CURSOR CUSTOMIZADO (opcional)
    // ============================================
    function initCustomCursor() {
        // Aplica apenas se não for mobile
        if (window.innerWidth <= 768) return;

        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            width: 10px;
            height: 10px;
            border: 2px solid var(--color-primary);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease;
            display: none;
        `;

        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'custom-cursor-follower';
        cursorFollower.style.cssText = `
            width: 30px;
            height: 30px;
            border: 2px solid rgba(255, 215, 0, 0.3);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            transition: all 0.3s ease;
            display: none;
        `;

        document.body.appendChild(cursor);
        document.body.appendChild(cursorFollower);

        document.addEventListener('mousemove', function(e) {
            cursor.style.display = 'block';
            cursorFollower.style.display = 'block';
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            setTimeout(function() {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 50);
        });

        // Efeito nos links
        const links = document.querySelectorAll('a, button');
        links.forEach(function(link) {
            link.addEventListener('mouseenter', function() {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.borderColor = 'var(--color-primary-hover)';
            });
            link.addEventListener('mouseleave', function() {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = 'var(--color-primary)';
            });
        });
    }

    // ============================================
    // 7. PARALLAX EFX SUAVE
    // ============================================
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            parallaxElements.forEach(function(el) {
                const speed = 0.5;
                el.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
            });
        }, { passive: true });
    }

    // ============================================
    // 8. PRELOADER (Loading Screen)
    // ============================================
    function initPreloader() {
        const preloader = document.createElement('div');
        preloader.id = 'preloader';
        preloader.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                transition: opacity 0.5s ease;
            ">
                <div style="
                    color: var(--color-primary);
                    font-size: 2rem;
                    font-weight: 700;
                    letter-spacing: 0.2rem;
                    animation: pulse 1.5s ease infinite;
                ">
                    JUNIOR CHAUK
                </div>
            </div>
        `;
        
        document.body.appendChild(preloader);

        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
        `;
        document.head.appendChild(style);

        // Remove após carregar
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.style.opacity = '0';
                setTimeout(function() {
                    preloader.remove();
                }, 500);
            }, 800);
        });
    }

    // ============================================
    // INICIALIZAÇÃO
    // ============================================
    function init() {
        initScrollReveal();
        initSmoothSnap();
        initEnhancedHovers();
        initScrollProgress();
        
        // Opcionais (pode comentar se não quiser)
        initParticles();
        initPreloader();
        
        // Apenas desktop
        if (window.innerWidth > 768) {
            initCustomCursor();
            initParallax();
        }
    }

    // Iniciar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
