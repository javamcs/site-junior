/**
 * Site Junior Chauk - Scripts
 * Gerenciamento de interatividade do site
 */

(function() {
    'use strict';

    /**
     * Inicializa o botão "Voltar ao Topo"
     */
    function initBackToTop() {
        const backToTopButton = document.getElementById('backToTop');
        
        if (!backToTopButton) return;

        // Mostrar/esconder botão ao rolar a página
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }, { passive: true });

        // Voltar ao topo com animação suave
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Adiciona loading="lazy" a imagens para melhor performance
     */
    function initLazyLoading() {
        const images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.loading = 'lazy';
        });
    }

    /**
     * Inicializa o banner do topo com botão de fechar
     */
    function initTopBanner() {
        const topBanner = document.getElementById('topBanner');
        const closeButton = document.getElementById('closeBanner');
        
        if (!topBanner || !closeButton) return;

        closeButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            topBanner.classList.add('hidden');
            
            // Remove o padding do hero section quando o banner é fechado
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.style.paddingTop = '0';
            }
        });
    }

    /**
     * Inicialização quando o DOM estiver pronto
     */
    function init() {
        initBackToTop();
        initLazyLoading();
        initTopBanner();
    }

    // Aguarda o carregamento do DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
