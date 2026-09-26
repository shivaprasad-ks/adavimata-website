/**
 * Sri Adavimatha Official Website
 * Lightweight, Modern, Dependency-Free Vanilla JavaScript
 */

(function () {
  'use strict';

  // Helper selectors
  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const elements = select(el, all);
    if (!elements) return;
    if (all && Array.isArray(elements)) {
      elements.forEach(e => e.addEventListener(type, listener));
    } else if (elements.addEventListener) {
      elements.addEventListener(type, listener);
    }
  };

  /* -------------------------------------------------------------
   * 1. Header elevation on scroll
   * ----------------------------------------------------------- */
  const header = select('#header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('load', handleScroll);
  }

  /* -------------------------------------------------------------
   * 2. Robust Mobile Navigation Drawer (Attached to body)
   * ----------------------------------------------------------- */
  const initMobileNavigation = () => {
    // 1. Create or get backdrop directly attached to body
    let backdrop = document.getElementById('mobileNavBackdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'mobileNavBackdrop';
      backdrop.className = 'mobile-nav-backdrop';
      document.body.appendChild(backdrop);
    }

    // 2. Create or get drawer directly attached to body
    let drawer = document.getElementById('mobileNavDrawer');
    if (!drawer) {
      drawer = document.createElement('aside');
      drawer.id = 'mobileNavDrawer';
      drawer.className = 'mobile-nav-drawer';
      drawer.setAttribute('role', 'dialog');
      drawer.setAttribute('aria-modal', 'true');
      drawer.setAttribute('aria-label', 'Mobile Navigation');

      const navLinksData = [
        { href: 'index.html', icon: 'bi-house-door', kn: 'ಮುಖಪುಟ', en: 'Home' },
        { href: 'about.html', icon: 'bi-journal-text', kn: 'ಇತಿಹಾಸ & ಪರಂಪರೆ', en: 'History & Heritage' },
        { href: 'our-instituitions.html', icon: 'bi-buildings', kn: 'ಸಂಸ್ಥೆಗಳು', en: 'Institutions' },
        { href: 'social-services.html', icon: 'bi-people', kn: 'ಸಾಮಾಜಿಕ ಸೇವೆಗಳು', en: 'Social Services' },
        { href: 'activities.html', icon: 'bi-calendar-event', kn: 'ಚಟುವಟಿಕೆಗಳು', en: 'Activities' },
        { href: 'gallery.html', icon: 'bi-images', kn: 'ಗ್ಯಾಲರಿ', en: 'Gallery' },
        { href: 'contact.html', icon: 'bi-geo-alt', kn: 'ಸಂಪರ್ಕಿಸಿ', en: 'Contact' }
      ];

      const currentPath = window.location.pathname.split('/').pop() || 'index.html';

      const navItemsHtml = navLinksData.map(item => {
        const isActive = (item.href === currentPath || (currentPath === '' && item.href === 'index.html'));
        return `
          <li>
            <a href="${item.href}" class="${isActive ? 'active' : ''}">
              <i class="bi ${item.icon}"></i>
              <span class="lang-kn">${item.kn}</span>
              <span class="lang-en">${item.en}</span>
            </a>
          </li>
        `;
      }).join('');

      drawer.innerHTML = `
        <div class="mobile-drawer-header">
          <a href="index.html" class="drawer-brand">
            <img src="assets/img/logo1a.jpg" alt="ಶ್ರೀ ಅಡವಿಮಠ ಲಾಂಛನ" width="42" height="42">
            <div>
              <div class="drawer-brand-title lang-kn">ಶ್ರೀ ಅಡವಿಮಠ</div>
              <div class="drawer-brand-title lang-en">Sri Adavimatha</div>
              <div class="drawer-brand-subtitle lang-kn">ಪಡುಗೂರು | ಶ್ರೀ ಕ್ಷೇತ್ರ</div>
              <div class="drawer-brand-subtitle lang-en">Paduguru | Holy Shrine</div>
            </div>
          </a>
          <button class="mobile-drawer-close" aria-label="Close Navigation Menu">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="mobile-drawer-lang">
          <div class="drawer-lang-label">
            <i class="bi bi-translate"></i>
            <span class="lang-kn">ಭಾಷೆ ಆಯ್ಕೆ:</span>
            <span class="lang-en">Select Language:</span>
          </div>
          <div class="lang-switcher-pill w-100" aria-label="Mobile Drawer Language Selector">
            <button class="lang-btn active w-50" data-lang="kn">ಕನ್ನಡ (KN)</button>
            <button class="lang-btn w-50" data-lang="en">English (EN)</button>
          </div>
        </div>

        <div class="mobile-drawer-body">
          <ul class="mobile-drawer-nav">
            ${navItemsHtml}
          </ul>
        </div>

        <div class="mobile-drawer-footer">
          <a href="contact.html" class="btn-drawer-dasoha">
            <i class="bi bi-heart-fill"></i>
            <span class="lang-kn">ದಾಸೋಹ ಸೇವೆ / ದೇಣಿಗೆ</span>
            <span class="lang-en">Dasoha Seva / Donation</span>
          </a>
          <div class="d-flex gap-2">
            <a href="tel:+919448602867" class="btn btn-sm btn-outline-secondary w-50 d-flex align-items-center justify-content-center gap-1">
              <i class="bi bi-telephone-fill text-primary"></i> <span class="lang-kn">ಕರೆ ಮಾಡಿ</span><span class="lang-en">Call</span>
            </a>
            <a href="https://wa.me/919448602867" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-success w-50 d-flex align-items-center justify-content-center gap-1">
              <i class="bi bi-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      `;

      document.body.appendChild(drawer);
    }

    // Drawer Open / Close Functions
    const openDrawer = () => {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';

      select('.mobile-nav-toggle', true).forEach(btn => {
        btn.setAttribute('aria-expanded', 'true');
        const icon = btn.querySelector('i');
        if (icon) {
          icon.classList.remove('bi-list');
          icon.classList.add('bi-x-lg');
        }
      });
    };

    const closeDrawer = () => {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';

      select('.mobile-nav-toggle', true).forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        const icon = btn.querySelector('i');
        if (icon) {
          icon.classList.remove('bi-x-lg');
          icon.classList.add('bi-list');
        }
      });
    };

    // Toggle button click listeners
    select('.mobile-nav-toggle', true).forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (drawer.classList.contains('active')) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    });

    // Backdrop click listener
    backdrop.addEventListener('click', closeDrawer);

    // Close button click listener
    const closeBtn = drawer.querySelector('.mobile-drawer-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    // Auto-close when clicking any drawer link
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('active')) {
        closeDrawer();
      }
    });

    // Close if resized to desktop screen
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991 && drawer.classList.contains('active')) {
        closeDrawer();
      }
    }, { passive: true });
  };

  initMobileNavigation();

  /* -------------------------------------------------------------
   * 3. Modern Hero Slider Carousel
   * ----------------------------------------------------------- */
  const heroSlider = select('.hero-slider-wrapper');
  if (heroSlider) {
    const slides = select('.hero-slide', true);
    const dots = select('.hero-dot', true);
    const prevBtn = select('.hero-btn-arrow.hero-prev');
    const nextBtn = select('.hero-btn-arrow.hero-next');

    let currentSlide = 0;
    let slideInterval = null;
    const intervalTime = 6000;

    const showSlide = (index) => {
      if (slides.length === 0) return;
      if (index >= slides.length) currentSlide = 0;
      else if (index < 0) currentSlide = slides.length - 1;
      else currentSlide = index;

      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);

    const startSlideTimer = () => {
      stopSlideTimer();
      slideInterval = setInterval(nextSlide, intervalTime);
    };

    const stopSlideTimer = () => {
      if (slideInterval) clearInterval(slideInterval);
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startSlideTimer();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startSlideTimer();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
        startSlideTimer();
      });
    });

    // Pause on hover
    heroSlider.addEventListener('mouseenter', stopSlideTimer);
    heroSlider.addEventListener('mouseleave', startSlideTimer);

    // Touch swipe support
    let touchStartX = 0;
    heroSlider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSlider.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
        startSlideTimer();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
        startSlideTimer();
      }
    }, { passive: true });

    // Start auto slider
    showSlide(0);
    startSlideTimer();
  }

  /* -------------------------------------------------------------
   * 4. Interactive Gallery Filtering & Vanilla Lightbox
   * ----------------------------------------------------------- */
  const galleryGrid = select('.gallery-grid');
  const filterBtns = select('.gallery-filter-nav .filter-btn', true);

  if (galleryGrid && filterBtns.length > 0) {
    const items = select('.gallery-item', true);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.getAttribute('data-filter');

        items.forEach(item => {
          if (filterVal === '*' || item.classList.contains(filterVal.replace('.', ''))) {
            item.style.display = '';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  /* Lightbox Logic */
  let lightboxModal = select('#customLightboxModal');
  const galleryClickables = select('.gallery-item, .lightbox-trigger', true);

  if (galleryClickables.length > 0) {
    if (!lightboxModal) {
      lightboxModal = document.createElement('div');
      lightboxModal.id = 'customLightboxModal';
      lightboxModal.className = 'custom-lightbox-modal';
      lightboxModal.innerHTML = `
        <div class="lightbox-content">
          <button class="lightbox-close-btn" aria-label="Close Lightbox">&times;</button>
          <button class="lightbox-nav-btn lightbox-prev" aria-label="Previous Image"><i class="bi bi-chevron-left"></i></button>
          <img src="" alt="Sri Adavimatha Gallery Preview" id="lightboxImg" />
          <div class="lightbox-caption" id="lightboxCaption"></div>
          <button class="lightbox-nav-btn lightbox-next" aria-label="Next Image"><i class="bi bi-chevron-right"></i></button>
        </div>
      `;
      document.body.appendChild(lightboxModal);
    }

    const lightboxImg = select('#lightboxImg');
    const lightboxCaption = select('#lightboxCaption');
    const closeBtn = select('.lightbox-close-btn');
    const prevNavBtn = select('.lightbox-prev');
    const nextNavBtn = select('.lightbox-next');

    let visibleGalleryItems = [];
    let currentLightboxIdx = 0;

    const openLightbox = (index) => {
      // Get all currently visible items in gallery
      visibleGalleryItems = select('.gallery-item', true).filter(item => item.style.display !== 'none');
      if (visibleGalleryItems.length === 0) visibleGalleryItems = galleryClickables;

      currentLightboxIdx = index;
      const targetItem = visibleGalleryItems[currentLightboxIdx];
      if (!targetItem) return;

      const img = targetItem.querySelector('img');
      const title = targetItem.querySelector('.gallery-item-title') || targetItem.getAttribute('data-title');

      lightboxImg.src = targetItem.getAttribute('data-full-img') || (img ? img.src : '');
      lightboxCaption.textContent = (typeof title === 'string' ? title : (title ? title.textContent : (img ? img.alt : '')));

      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        if (lightboxImg) lightboxImg.src = '';
      }, 300);
    };

    const showNextLightbox = () => {
      currentLightboxIdx = (currentLightboxIdx + 1) % visibleGalleryItems.length;
      openLightbox(currentLightboxIdx);
    };

    const showPrevLightbox = () => {
      currentLightboxIdx = (currentLightboxIdx - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
      openLightbox(currentLightboxIdx);
    };

    galleryClickables.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(index);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextNavBtn) nextNavBtn.addEventListener('click', showNextLightbox);
    if (prevNavBtn) prevNavBtn.addEventListener('click', showPrevLightbox);

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') showNextLightbox();
      else if (e.key === 'ArrowLeft') showPrevLightbox();
    });
  }

  /* -------------------------------------------------------------
   * 5. Back to Top Button
   * ----------------------------------------------------------- */
  const backToTop = select('.back-to-top');
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 200) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    };

    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    window.addEventListener('load', toggleBackToTop);

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* -------------------------------------------------------------
   * 6. Contact Form Interactive Handler
   * ----------------------------------------------------------- */
  const contactForm = select('#adavimathaContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = select('#contactName').value.trim();
      const phone = select('#contactPhone').value.trim();
      const message = select('#contactMessage').value.trim();

      if (!name || !phone || !message) {
        alert('ದಯವಿಟ್ಟು ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ (Please fill in all details).');
        return;
      }

      // Build WhatsApp message for instant connection
      const whatsappText = encodeURIComponent(
        `ನಮಸ್ಕಾರ ಶ್ರೀ ಅಡವಿಮಠ,\nಹೆಸರು: ${name}\nದೂರವಾಣಿ: ${phone}\nಸಂದೇಶ: ${message}`
      );
      const whatsappUrl = `https://wa.me/919448602867?text=${whatsappText}`;

      const feedback = select('#contactFormFeedback');
      if (feedback) {
        feedback.innerHTML = `
          <div class="alert alert-success mt-3" role="alert">
            <h6 class="alert-heading font-weight-bold">ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಸಂದೇಶ ಸ್ವೀಕರಿಸಲಾಗಿದೆ.</h6>
            <p class="mb-0">ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ನೇರವಾಗಿ WhatsApp ಮುಖಾಂತರವೂ ಕಳುಹಿಸಬಹುದು:</p>
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-success mt-2">
              <i class="bi bi-whatsapp"></i> WhatsApp ಮೂಲಕ ಕಳುಹಿಸಿ
            </a>
          </div>
        `;
      } else {
        window.open(whatsappUrl, '_blank');
      }

      contactForm.reset();
    });
  }

  /* -------------------------------------------------------------
   * 7. Active Navigation Link Sync
   * ----------------------------------------------------------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  select('#navbar a', true).forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href && !href.startsWith('#') && href !== currentPath) {
      link.classList.remove('active');
    }
  });

  /* -------------------------------------------------------------
   * 8. Language Switcher (Kannada <-> English)
   * ----------------------------------------------------------- */
  const setLanguage = (lang) => {
    if (lang !== 'en' && lang !== 'kn') lang = 'kn';
    try {
      localStorage.setItem('adavimata_lang', lang);
    } catch (e) {
      console.warn('localStorage unavailable', e);
    }

    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;
    if (document.body) {
      document.body.classList.remove('lang-kn', 'lang-en');
      document.body.classList.add(`lang-${lang}`);
    }

    // Update all switcher buttons
    select('.lang-btn', true).forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', btnLang === lang);
    });
  };

  const initLanguage = () => {
    let savedLang = 'kn';
    try {
      savedLang = localStorage.getItem('adavimata_lang') || 'kn';
    } catch (e) {
      savedLang = 'kn';
    }
    setLanguage(savedLang);

    // Document-level event delegation for all language switcher buttons
    document.addEventListener('click', (e) => {
      const langBtn = e.target.closest('.lang-btn');
      if (langBtn) {
        e.preventDefault();
        const targetLang = langBtn.getAttribute('data-lang');
        if (targetLang) {
          setLanguage(targetLang);
        }
      }
    });
  };

  // Run on ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }

})();