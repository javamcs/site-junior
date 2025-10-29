/**
 * Site Junior Chauk - Scripts Principais
 * 
 * GERENCIA:
 * - Botão voltar ao topo
 * - Lazy loading de imagens
 * - Scroll suave
 * - Banner do topo (se houver)
 * 
 * IMPORTANTE: Não altere os seletores CSS (#backToTop, .hero-section, etc)
 * sem atualizar o HTML correspondente.
 */

(function() {
    'use strict';

    /**
     * Inicializa o botão "Voltar ao Topo"
     * Seletor: #backToTop
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
     * Configura lazy loading para melhor performance
     * - Imagens da .hero-section: loading="eager" (carregam imediatamente)
     * - Demais imagens: loading="lazy" (carregam sob demanda)
     */
    function initLazyLoading() {
        const images = document.querySelectorAll('img');
        images.forEach(function(img) {
            // Imagens da hero section carregam imediatamente (sem lazy)
            const isHeroImage = img.closest('.hero-section') !== null;
            if (!isHeroImage) {
                img.loading = 'lazy';
            } else {
                img.loading = 'eager'; // Carrega imediatamente
            }
        });
    }

    /**
     * Remove scroll-snap e habilita scroll suave
     * Melhora a experiência de navegação
     */
    function initSmoothScroll() {
        // Remove qualquer comportamento de scroll-snap que possa causar movimento em blocos
        const html = document.documentElement;
        html.style.scrollSnapType = 'none';
        html.style.scrollBehavior = 'smooth';
        
        // Garante que as seções não tenham scroll-snap
        const sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            section.style.scrollSnapAlign = 'none';
        });
    }

    /**
     * Inicializa o banner do topo (se existir)
     * Seletores: #topBanner, #closeBanner
     * Nota: Esta funcionalidade só funciona se o HTML tiver esses IDs
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
        initSmoothScroll();
    }

    // Aguarda o carregamento do DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
