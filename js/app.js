/**
 * Rose Baghdad – Shared Application Core (V2.0)
 * Handles: Product data, Cart state, Language state, Shared utilities
 */

// ═══════════════════════════════════════════════════════
// PRODUCT DATA STORE
// ═══════════════════════════════════════════════════════
const RB_PRODUCTS = [
  {
    id: 1,
    category: 'perfume',
    badge: 'bestseller',
    badgeAr: 'الأكثر مبيعاً',
    badgeEn: 'Bestseller',
    nameAr: 'عود ملكي',
    nameEn: 'Oud Royal',
    descAr: 'عود فاخر ممزوج بنفحات الزعفران والعنبر — يليق بالملوك',
    descEn: 'An imperial oud with notes of saffron and amber — fit for royalty',
    longDescAr: 'عود ملكي هو تجربة عطرية استثنائية تجمع بين أجود أنواع عود الهندي المعتق ونفحات الزعفران الكشميري والعنبر السائل. مدته تتجاوز 12 ساعة على الجلد مع أثر يملأ الغرفة. معبأ في زجاجة كريستالية بغطاء ذهبي.',
    longDescEn: 'Oud Royal is an exceptional fragrance experience combining the finest aged Hindi oud with Kashmiri saffron and liquid amber. Long-lasting 12+ hours on skin, room-filling sillage. Presented in a crystal bottle with a gold cap.',
    price: 85000,
    originalPrice: 100000,
    rating: 5,
    reviews: 48,
    image: 'assets/images/perfume_1.png',
    tags: ['عود', 'زعفران', 'عنبر']
  },
  {
    id: 2,
    category: 'incense',
    badge: 'new',
    badgeAr: 'جديد',
    badgeEn: 'New',
    nameAr: 'بغداد نوار',
    nameEn: 'Baghdad Noir',
    descAr: 'بخور داكن مدخن معتق ببتلات الورد ومسك الغزال',
    descEn: 'Dark, smoky Bakhoor infused with rose petals and musk',
    longDescAr: 'بغداد نوار هو بخور استثنائي يمزج بين العمق الداكن للعود المدخن وخفة بتلات الورد الطازجة. يُضرم على فحم صغير ليطلق دخانه العطري الذي يبقى عالقاً في الهواء لساعات. تجربة حسية لا تنسى.',
    longDescEn: 'Baghdad Noir is an exceptional incense that blends the dark depth of smoky oud with the lightness of fresh rose petals. Burn over charcoal to release aromatic smoke that lingers for hours.',
    price: 65000,
    originalPrice: null,
    rating: 4,
    reviews: 32,
    image: 'assets/images/perfume_2.png',
    tags: ['بخور', 'ورد', 'مسك']
  },
  {
    id: 3,
    category: 'sets',
    badge: null,
    badgeAr: null,
    badgeEn: null,
    nameAr: 'مجموعة حديقة الورد',
    nameEn: 'Rose Garden Set',
    descAr: 'عطرين مميزين — عود الورد ومسك الياسمين في صندوق فاخر',
    descEn: 'Two signature scents — Rose Oud & Jasmine Musk, elegantly boxed',
    longDescAr: 'مجموعة حديقة الورد هي الهدية المثالية للمناسبات الخاصة. تضم عطرين: "عود الورد" ذو الأريج الزهري الفاخر، و"مسك الياسمين" الناعم والرومانسي. تُقدَّم في صندوق هدايا فاخر مزيّن بالذهب.',
    longDescEn: 'The Rose Garden Set is the perfect gift for special occasions, containing two signature scents in a luxurious gold-decorated gift box.',
    price: 125000,
    originalPrice: 150000,
    rating: 5,
    reviews: 76,
    image: 'assets/images/perfume_3.png',
    tags: ['مجموعة', 'هدية', 'ورد']
  },
  {
    id: 4,
    category: 'incense',
    badge: 'limited',
    badgeAr: 'إصدار محدود',
    badgeEn: 'Limited',
    nameAr: 'بخور مقدس',
    nameEn: 'Sacred Bakhoor',
    descAr: 'رقائق عود هندي فاخرة مع خشب الصندل المعتق وراتنج العنبر',
    descEn: 'Premium Hindi Oud chips with aged sandalwood and amber resin',
    longDescAr: 'البخور المقدس هو مزيج نادر من رقائق عود هندي فاخرة مع خشب الصندل المعتق وراتنج العنبر الطبيعي. يعطي رائحة دافئة وعميقة تملأ المكان بالسكينة والروحانية. يأتي في علبة خشبية جميلة.',
    longDescEn: 'Sacred Bakhoor is a rare blend of premium Hindi oud chips with aged sandalwood and natural amber resin, giving a warm, deep scent that fills the space with peace and spirituality.',
    price: 45000,
    originalPrice: null,
    rating: 5,
    reviews: 29,
    image: 'assets/images/perfume_4.png',
    tags: ['بخور', 'عود', 'صندل']
  },
  {
    id: 5,
    category: 'perfume',
    badge: 'new',
    badgeAr: 'جديد',
    badgeEn: 'New',
    nameAr: 'نسمة بغداد',
    nameEn: 'Baghdad Breeze',
    descAr: 'عطر خفيف ومنعش بنفحات الحمضيات والمسك الأبيض',
    descEn: 'A light, refreshing scent with citrus notes and white musk',
    longDescAr: 'نسمة بغداد عطر نهاري مثالي يجمع بين انتعاش الحمضيات الطازجة ونعومة المسك الأبيض. مناسب لجميع المناسبات ويرافقك طوال اليوم.',
    longDescEn: 'Baghdad Breeze is a perfect daytime fragrance combining fresh citrus and soft white musk. Suitable for all occasions.',
    price: 55000,
    originalPrice: null,
    rating: 4,
    reviews: 21,
    image: 'assets/images/perfume_1.png',
    tags: ['خفيف', 'مسك', 'حمضيات']
  },
  {
    id: 6,
    category: 'sets',
    badge: 'bestseller',
    badgeAr: 'الأكثر مبيعاً',
    badgeEn: 'Bestseller',
    nameAr: 'مجموعة الليالي العربية',
    nameEn: 'Arabian Nights Set',
    descAr: 'ثلاثة عطور ليلية فاخرة في صندوق هدايا استثنائي',
    descEn: 'Three luxurious evening fragrances in an exceptional gift box',
    longDescAr: 'مجموعة الليالي العربية تضم ثلاثة من أفضل عطورنا الليلية في صندوق هدايا استثنائي منقوش بالذهب. الهدية الأجمل لأحبائك.',
    longDescEn: 'The Arabian Nights Set features three of our finest evening fragrances in an exceptional gold-engraved gift box.',
    price: 175000,
    originalPrice: 210000,
    rating: 5,
    reviews: 54,
    image: 'assets/images/perfume_3.png',
    tags: ['مجموعة', 'هدية', 'ليلي']
  },
  {
    id: 7,
    category: 'incense',
    badge: null,
    badgeAr: null,
    badgeEn: null,
    nameAr: 'دخان الجنة',
    nameEn: 'Heaven Smoke',
    descAr: 'بخور فريد من الكمادا العربية والمسك الأبيض النقي',
    descEn: 'Unique incense of Arabic Kumada and pure white musk',
    longDescAr: 'دخان الجنة مزيج فريد من الكمادا العربية الأصيلة مع أنقى أنواع المسك الأبيض. يمنح منزلك رائحة راقية وهادئة.',
    longDescEn: 'Heaven Smoke is a unique blend of authentic Arabic Kumada with the purest white musk, giving your home a refined and calming scent.',
    price: 38000,
    originalPrice: null,
    rating: 4,
    reviews: 17,
    image: 'assets/images/perfume_4.png',
    tags: ['بخور', 'مسك', 'كمادا']
  },
  {
    id: 8,
    category: 'perfume',
    badge: 'limited',
    badgeAr: 'إصدار محدود',
    badgeEn: 'Limited',
    nameAr: 'ورد الطائف الذهبي',
    nameEn: 'Golden Taif Rose',
    descAr: 'جوهرة العطور — روح وردة الطائف في قارورة ذهبية',
    descEn: 'The crown jewel — the soul of Taif rose in a golden vial',
    longDescAr: 'ورد الطائف الذهبي هو أثمن عطورنا. يستخلص من آلاف وردات الطائف الأصيلة ليمنحك رائحة ملكية خالصة لا مثيل لها. قارورة فريدة مطلية بالذهب.',
    longDescEn: 'Golden Taif Rose is our most precious fragrance, distilled from thousands of authentic Taif roses, presented in a unique gold-plated vial.',
    price: 150000,
    originalPrice: null,
    rating: 5,
    reviews: 38,
    image: 'assets/images/perfume_2.png',
    tags: ['ورد', 'طائف', 'فاخر']
  }
];

// ═══════════════════════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════════════════════
const RB_TRANSLATIONS = {
  ar: {
    dir: 'rtl',
    lang: 'ar',
    nav_home: 'الرئيسية',
    nav_collection: 'المجموعة',
    nav_story: 'قصتنا',
    nav_contact: 'تواصل معنا',
    hero_tag: '✦ أصالة بغداد، تأسست ٢٠٢٢ ✦',
    hero_h1_1: 'حيث يغدو',
    hero_h1_2: 'العطر',
    hero_h1_3: 'فناً أصيلاً',
    hero_sub: 'عطور فاخرة وبخور أصيل تُصنع بشغف من قلب بغداد للذواقة',
    hero_cta: 'اكتشف المجموعة',
    hero_story: 'قصتنا',
    filter_all: 'الكل',
    filter_perfume: 'العطور',
    filter_incense: 'البخور',
    filter_sets: 'مجموعات الهدايا',
    section_collection_tag: '✦ التشكيلة ✦',
    section_collection_h: 'اكتشف عطورنا المميزة',
    view_all: 'اكتشف التشكيلة الكاملة',
    view_details: 'عرض التفاصيل',
    quick_add: 'أضف للسلة',
    add_to_cart: 'أضف للسلة',
    cart_added: 'تم الإضافة للسلة',
    brand_sub: 'للعطور والبخور',
    shop_title: 'متجر روز بغداد | المجموعة الكاملة',
    shop_h: 'المجموعة الكاملة',
    pdp_back: '→ العودة للمتجر',
    pdp_add_cart: 'أضف للسلة',
    pdp_reviews: 'تقييمات',
    currency: 'د.ع',
  },
  en: {
    dir: 'ltr',
    lang: 'en',
    nav_home: 'Home',
    nav_collection: 'Collection',
    nav_story: 'Our Story',
    nav_contact: 'Contact',
    hero_tag: '✦ Est. Baghdad, 2022 ✦',
    hero_h1_1: 'WHERE',
    hero_h1_2: 'SCENT',
    hero_h1_3: 'BECOMES ART',
    hero_sub: 'Handcrafted luxury perfumes & premium incense from the heart of Baghdad',
    hero_cta: 'Discover Collection',
    hero_story: 'Our Story',
    filter_all: 'All',
    filter_perfume: 'Perfumes',
    filter_incense: 'Incense',
    filter_sets: 'Gift Sets',
    section_collection_tag: '✦ The Collection ✦',
    section_collection_h: 'Discover Our Signature Scents',
    view_all: 'View Full Collection',
    view_details: 'View Details',
    quick_add: 'Quick Add',
    add_to_cart: 'Add to Cart',
    cart_added: 'Added to cart',
    brand_sub: 'For Perfumes & Incense',
    shop_title: 'Rose Baghdad | Full Collection',
    shop_h: 'Full Collection',
    pdp_back: '← Back to Shop',
    pdp_add_cart: 'Add to Cart',
    pdp_reviews: 'Reviews',
    currency: 'IQD',
  }
};

// ═══════════════════════════════════════════════════════
// CART STATE MANAGER
// ═══════════════════════════════════════════════════════
const RBCart = {
  items: JSON.parse(localStorage.getItem('rb_cart') || '[]'),

  save() {
    localStorage.setItem('rb_cart', JSON.stringify(this.items));
  },

  add(productId) {
    const existing = this.items.find(i => i.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      const product = RB_PRODUCTS.find(p => p.id === productId);
      if (product) this.items.push({ id: productId, qty: 1, price: product.price });
    }
    this.save();
    this.updateBadge();
    return this.items.reduce((s, i) => s + i.qty, 0);
  },

  getCount() {
    return this.items.reduce((s, i) => s + i.qty, 0);
  },

  updateBadge() {
    const count = this.getCount();
    document.querySelectorAll('#cart-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// ═══════════════════════════════════════════════════════
// LANGUAGE STATE MANAGER
// ═══════════════════════════════════════════════════════
const RBLang = {
  current: localStorage.getItem('rb_lang') || 'ar',

  get t() {
    return RB_TRANSLATIONS[this.current];
  },

  toggle() {
    this.current = this.current === 'ar' ? 'en' : 'ar';
    localStorage.setItem('rb_lang', this.current);
    this.apply();
  },

  apply() {
    const t = this.t;
    const html = document.documentElement;
    html.setAttribute('dir', t.dir);
    html.setAttribute('lang', t.lang);

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Update switcher buttons
    document.querySelectorAll('.lang-switcher-btn').forEach(btn => {
      btn.textContent = this.current === 'ar' ? 'EN' : 'AR';
    });

    // Fire custom event for page-specific updates
    document.dispatchEvent(new CustomEvent('rb:langchange', { detail: t }));
  }
};

// ═══════════════════════════════════════════════════════
// SHARED UI UTILITIES
// ═══════════════════════════════════════════════════════
const RBUtils = {
  formatPrice(price, lang) {
    const t = RB_TRANSLATIONS[lang || RBLang.current];
    return lang === 'en'
      ? `${price.toLocaleString()} ${t.currency}`
      : `${price.toLocaleString()} ${t.currency}`;
  },

  stars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  },

  showToast(message, type = 'success') {
    let toast = document.getElementById('rb-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'rb-toast';
      toast.style.cssText = `
        position:fixed; bottom:24px; ${RBLang.current === 'rtl' ? 'left' : 'right'}:24px; z-index:9999;
        background:#3d3627; color:#f5d79d; padding:14px 22px;
        font-family:'Tajawal',sans-serif; font-size:0.95rem;
        border-${RBLang.current === 'ar' ? 'right' : 'left'}:3px solid #b39d72;
        display:flex; align-items:center; gap:10px;
        transform:translateY(80px); opacity:0;
        transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
        box-shadow: 0 8px 32px rgba(61,54,39,0.4);
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> ${message}`;
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
    clearTimeout(RBUtils._toastTimer);
    RBUtils._toastTimer = setTimeout(() => {
      toast.style.transform = 'translateY(80px)';
      toast.style.opacity = '0';
    }, 3000);
  },

  // Build a product card HTML string
  buildCard(product, lang) {
    const t = RB_TRANSLATIONS[lang || RBLang.current];
    const name = lang === 'en' ? product.nameEn : product.nameAr;
    const desc = lang === 'en' ? product.descEn : product.descAr;
    const badge = lang === 'en' ? product.badgeEn : product.badgeAr;
    const badgeStyle = product.badge === 'bestseller'
      ? 'background:#3d3627;color:#f5d79d;'
      : product.badge === 'limited'
      ? 'background:#524834;color:#f5d79d;'
      : 'background:#b39d72;color:#f5f2ed;';

    return `
      <div class="product-card" data-id="${product.id}" data-category="${product.category}">
        <div class="product-image-wrap">
          ${badge ? `<span class="badge-label" style="${badgeStyle}">${badge}</span>` : ''}
          <button class="btn-wishlist" aria-label="wishlist" onclick="event.stopPropagation(); this.classList.toggle('active'); this.style.background=this.classList.contains('active')?'#b39d72':'rgba(245,242,237,0.9)';">
            <svg width="16" height="16" fill="none" stroke="${product.badge ? '#f5f2ed' : '#b39d72'}" stroke-width="1.5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </button>
          <img src="${product.image}" alt="${name}" loading="lazy" />
          <div class="quick-add-overlay">
            <button class="btn-quick-add" onclick="event.stopPropagation(); RBCart.add(${product.id}); RBUtils.showToast('${t.cart_added}: ${name}');">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              <span data-i18n="quick_add">${t.quick_add}</span>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="stars">${RBUtils.stars(product.rating)} <span class="review-count">(${product.reviews})</span></div>
          <h3 class="card-name">${name}</h3>
          <p class="card-desc">${desc}</p>
          <div class="card-price-row">
            <span class="card-price">${RBUtils.formatPrice(product.price, lang)}</span>
            ${product.originalPrice ? `<span class="card-original">${RBUtils.formatPrice(product.originalPrice, lang)}</span>` : ''}
          </div>
          <button class="btn-view-details" onclick="window.location.href='product.html?id=${product.id}'" data-i18n="view_details">${t.view_details}</button>
        </div>
      </div>`;
  }
};

// ═══════════════════════════════════════════════════════
// SHARED NAVBAR INIT
// ═══════════════════════════════════════════════════════
function RBInitNavbar() {
  // Scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // Mobile menu
  const menuBtn = document.getElementById('menu-btn');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('menu-backdrop');

  function toggleMenu() {
    mobileMenu?.classList.toggle('open');
    backdrop?.classList.toggle('hidden');
  }
  menuBtn?.addEventListener('click', toggleMenu);
  menuClose?.addEventListener('click', toggleMenu);
  backdrop?.addEventListener('click', toggleMenu);

  // Language switcher
  document.querySelectorAll('.lang-switcher-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      RBLang.toggle();
    });
  });

  // Init cart badge
  RBCart.updateBadge();

  // Apply saved language
  RBLang.apply();
}

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', RBInitNavbar);
