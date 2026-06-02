/**
 * Rose Baghdad V4.0 — Application Core
 * Bilingual • Cart System • Product Data • Glassmorphism UI
 */

// ═══════════════════════════════════════════════════════════════════════
// PRODUCT DATA
// ═══════════════════════════════════════════════════════════════════════
const PRODUCTS = [
  {
    id: 1, category: 'perfume', badge: 'bestseller',
    nameAr: 'عود ملكي', nameEn: 'Oud Royal',
    descAr: 'عود فاخر ممزوج بنفحات الزعفران والعنبر — يليق بالملوك',
    descEn: 'An imperial oud blended with saffron and amber — fit for royalty',
    price: 85000, originalPrice: 100000, rating: 5, reviews: 48,
    image: 'assets/images/perfume_1.png'
  },
  {
    id: 2, category: 'incense', badge: 'new',
    nameAr: 'بغداد نوار', nameEn: 'Baghdad Noir',
    descAr: 'بخور داكن مدخن معتق ببتلات الورد ومسك الغزال',
    descEn: 'Dark smoky Bakhoor aged with rose petals and deer musk',
    price: 65000, originalPrice: null, rating: 4, reviews: 32,
    image: 'assets/images/perfume_2.png'
  },
  {
    id: 3, category: 'sets', badge: null,
    nameAr: 'مجموعة حديقة الورد', nameEn: 'Rose Garden Set',
    descAr: 'عطرين مميزين — عود الورد ومسك الياسمين في صندوق فاخر',
    descEn: 'Two signature scents — Rose Oud & Jasmine Musk in a luxury box',
    price: 125000, originalPrice: 150000, rating: 5, reviews: 76,
    image: 'assets/images/perfume_3.png'
  },
  {
    id: 4, category: 'incense', badge: 'limited',
    nameAr: 'بخور مقدس', nameEn: 'Sacred Bakhoor',
    descAr: 'رقائق عود هندي فاخرة مع خشب الصندل المعتق وراتنج العنبر',
    descEn: 'Premium Hindi oud chips with aged sandalwood and amber resin',
    price: 45000, originalPrice: null, rating: 5, reviews: 29,
    image: 'assets/images/perfume_4.png'
  },
  {
    id: 5, category: 'perfume', badge: 'new',
    nameAr: 'نسمة بغداد', nameEn: 'Baghdad Breeze',
    descAr: 'عطر خفيف ومنعش بنفحات الحمضيات والمسك الأبيض',
    descEn: 'A light, refreshing scent with citrus and white musk notes',
    price: 55000, originalPrice: null, rating: 4, reviews: 21,
    image: 'assets/images/perfume_1.png'
  },
  {
    id: 6, category: 'sets', badge: 'bestseller',
    nameAr: 'مجموعة الليالي العربية', nameEn: 'Arabian Nights Set',
    descAr: 'ثلاثة عطور ليلية فاخرة في صندوق هدايا استثنائي',
    descEn: 'Three luxurious evening fragrances in an exceptional gift box',
    price: 175000, originalPrice: 210000, rating: 5, reviews: 54,
    image: 'assets/images/perfume_3.png'
  },
  {
    id: 7, category: 'incense', badge: null,
    nameAr: 'دخان الجنة', nameEn: 'Heaven Smoke',
    descAr: 'بخور فريد من الكمادا العربية والمسك الأبيض النقي',
    descEn: 'Unique incense of Arabic Kumada and pure white musk',
    price: 38000, originalPrice: null, rating: 4, reviews: 17,
    image: 'assets/images/perfume_4.png'
  },
  {
    id: 8, category: 'perfume', badge: 'limited',
    nameAr: 'ورد الطائف الذهبي', nameEn: 'Golden Taif Rose',
    descAr: 'جوهرة العطور — روح وردة الطائف في قارورة ذهبية',
    descEn: 'The crown jewel — the soul of Taif rose in a golden vial',
    price: 150000, originalPrice: null, rating: 5, reviews: 38,
    image: 'assets/images/perfume_2.png'
  }
];

// ═══════════════════════════════════════════════════════════════════════
// TRANSLATION DICTIONARY — Complete AR/EN
// ═══════════════════════════════════════════════════════════════════════
const T = {
  ar: {
    dir: 'rtl', lang: 'ar',
    nav_home: 'الرئيسية', nav_collection: 'المجموعة', nav_story: 'قصتنا', nav_contact: 'تواصل معنا',
    nav_logo_sub: 'للعطور والبخور',
    hero_over: '✦ تأسست في بغداد، ٢٠٢٢ ✦',
    hero_h1_1: 'حيث يغدو العطر',
    hero_h1_shimmer: 'فناً أصيلاً',
    hero_sub: 'عطور فاخرة وبخور أصيل تُصنع بشغف من قلب بغداد للذواقة',
    hero_cta: 'اكتشف المجموعة', hero_story_btn: 'قصتنا', hero_scroll: 'اكتشف',
    trust_vip: 'جودة كبار الشخصيات', trust_shipping: 'توصيل مجاني',
    trust_authentic: 'مكونات أصيلة ١٠٠٪', trust_return: 'إرجاع خلال ٧ أيام',
    col_over: '✦ التشكيلة ✦', col_title: 'اكتشف عطورنا <em>المميزة</em>',
    filter_all: 'الكل', filter_perfume: 'العطور', filter_incense: 'البخور', filter_sets: 'مجموعات الهدايا',
    view_all: 'اكتشف التشكيلة الكاملة',
    about_over: '✦ تراثنا ✦',
    about_title_1: 'وُلدت من', about_title_shimmer: 'روح بغداد',
    about_p1: 'تأسست "روز بغداد" في عام ٢٠٢٢ بهدف فريد — إحياء الفن القديم للعطور الشرقية وتقديمه لمن يبحث عن أكثر من مجرد رائحة عابرة.',
    about_p2: 'كل عطر هو رحلة عبر حدائق الورد في بغداد، إلى الأسواق العتيقة، والتقاليد الخالدة لثقافة البخور العربي.',
    stat_perfumes: 'عطر فريد', stat_clients: 'عميل سعيد', stat_years: 'سنوات إبداع',
    feat_over: '✦ تجربة روز بغداد ✦', feat_title: 'لماذا يختارنا <em>الذواقة</em>',
    feat1_title: 'جودة كبار الشخصيات', feat1_desc: 'كل منتج يخضع لاختبارات جودة صارمة لضمان التميز الاستثنائي',
    feat2_title: 'مباشرة من بغداد', feat2_desc: 'تُستخلص وتُصنع بكل أصالة وشغف من قلب العاصمة العراقية',
    feat3_title: 'تغليف فاخر', feat3_desc: 'تغليف جاهز للإهداء يعكس الطبيعة الاستثنائية لعطورنا الراقية',
    feat4_title: 'دعم مخصص', feat4_desc: 'استشارات عطرية شخصية متاحة لأعضاء وعملاء كبار الشخصيات',
    test_over: '✦ قصص عملائنا ✦', test_title: 'ماذا يقول <em>مجتمعنا</em>',
    test1_text: '"عطر عود ملكي يختلف عن أي شيء جربته من قبل. يدوم طوال اليوم وفوحانه ساحر. أصبحت روز بغداد المفضلة لدي."',
    test1_name: 'أحمد كريم', test1_city: 'بغداد، العراق',
    test2_text: '"طلبت مجموعة حديقة الورد كهدية وعائلتي انبهرت تماماً. التغليف بحد ذاته لوحة فنية. تستحق كل دينار."',
    test2_name: 'نور الرشيد', test2_city: 'أربيل، العراق',
    test3_text: '"البخور المقدس أكثر بخور أصيل وجدته منذ سنوات. رائحته تملأ المنزل وتبقى ساعات طويلة. فخامة حقيقية."',
    test3_name: 'فاطمة سعيد', test3_city: 'البصرة، العراق',
    nl_over: '✦ انضم لدائرتنا الخاصة ✦',
    nl_title: 'كن أول من يكتشف إصداراتنا الجديدة',
    nl_sub: 'اشترك لتلقي وصول مبكر حصري وعروض كبار الشخصيات من قلب بغداد.',
    nl_placeholder: 'أدخل بريدك الإلكتروني', nl_btn: 'اشترك الآن',
    nl_success: 'تم التسجيل بنجاح! ✓',
    footer_desc: 'روز بغداد — ملاذ العطور الشرقية، حيث تلتقي التقاليد العريقة بالفخامة العصرية. تأسست بكل حب في بغداد، ٢٠٢٢.',
    footer_quick: 'روابط سريعة', footer_categories: 'الفئات', footer_contact_title: 'تواصل معنا',
    footer_perfumes: 'العطور', footer_incense: 'البخور', footer_gift_sets: 'مجموعات الهدايا',
    footer_location: 'بغداد، العراق',
    footer_copyright: '© 2026 روز بغداد. جميع الحقوق محفوظة.',
    footer_privacy: 'سياسة الخصوصية', footer_terms: 'شروط الخدمة',
    mob_established: 'تأسست ٢٠٢٢', mob_location: 'بغداد، العراق',
    cart_title: 'سلة التسوق', cart_empty: 'سلتك فارغة',
    cart_checkout: 'إتمام الشراء', cart_total: 'المجموع',
    cart_remove: 'إزالة', cart_added: 'تمت الإضافة إلى السلة',
    add_cart: 'أضف للسلة', view_details: 'عرض التفاصيل',
    currency: 'د.ع',
    badge_bestseller: 'الأكثر مبيعاً', badge_new: 'جديد', badge_limited: 'إصدار محدود',
  },
  en: {
    dir: 'ltr', lang: 'en',
    nav_home: 'Home', nav_collection: 'Collection', nav_story: 'Our Story', nav_contact: 'Contact',
    nav_logo_sub: 'Perfumes & Incense',
    hero_over: '✦ Est. Baghdad, 2022 ✦',
    hero_h1_1: 'Where Scent Becomes',
    hero_h1_shimmer: 'Timeless Art',
    hero_sub: 'Handcrafted luxury perfumes & premium incense from the heart of Baghdad',
    hero_cta: 'Discover Collection', hero_story_btn: 'Our Story', hero_scroll: 'SCROLL',
    trust_vip: 'VIP Quality', trust_shipping: 'Free Shipping',
    trust_authentic: '100% Authentic', trust_return: '7-Day Returns',
    col_over: '✦ The Collection ✦', col_title: 'Discover Our <em>Signature</em> Scents',
    filter_all: 'All', filter_perfume: 'Perfumes', filter_incense: 'Incense', filter_sets: 'Gift Sets',
    view_all: 'View Full Collection',
    about_over: '✦ Our Heritage ✦',
    about_title_1: 'Born from the', about_title_shimmer: 'Soul of Baghdad',
    about_p1: 'Rose Baghdad was founded in 2022 with a singular vision — to revive the ancient art of Oriental perfumery and present it to those who seek more than a fleeting scent.',
    about_p2: 'Each fragrance is a journey through the rose gardens of Baghdad, into the timeless souks, and the enduring traditions of Arabian incense culture.',
    stat_perfumes: 'Unique Scents', stat_clients: 'Happy Clients', stat_years: 'Years of Craft',
    feat_over: '✦ The Rose Baghdad Experience ✦', feat_title: 'Why <em>Connoisseurs</em> Choose Us',
    feat1_title: 'VIP Quality', feat1_desc: 'Every product undergoes rigorous quality testing to ensure exceptional excellence',
    feat2_title: 'Direct from Baghdad', feat2_desc: 'Extracted and crafted with authenticity and passion from the heart of the Iraqi capital',
    feat3_title: 'Luxury Packaging', feat3_desc: 'Gift-ready packaging that reflects the exceptional nature of our premium fragrances',
    feat4_title: 'Dedicated Support', feat4_desc: 'Personal fragrance consultations available for VIP members and clients',
    test_over: '✦ Client Stories ✦', test_title: 'What Our <em>Community</em> Says',
    test1_text: '"Oud Royal is unlike anything I\'ve ever tried. It lasts all day with an enchanting sillage. Rose Baghdad has become my absolute favorite."',
    test1_name: 'Ahmed Kareem', test1_city: 'Baghdad, Iraq',
    test2_text: '"I ordered the Rose Garden Set as a gift and my family was completely amazed. The packaging alone is a work of art. Worth every dinar."',
    test2_name: 'Noor Al-Rashid', test2_city: 'Erbil, Iraq',
    test3_text: '"Sacred Bakhoor is the most authentic incense I\'ve found in years. Its scent fills the home and lingers for hours. True luxury."',
    test3_name: 'Fatima Saeed', test3_city: 'Basra, Iraq',
    nl_over: '✦ Join Our Inner Circle ✦',
    nl_title: 'Be the First to Discover Our New Releases',
    nl_sub: 'Subscribe for exclusive early access and VIP offers from the heart of Baghdad.',
    nl_placeholder: 'Enter your email address', nl_btn: 'Subscribe Now',
    nl_success: 'Successfully subscribed! ✓',
    footer_desc: 'Rose Baghdad — a sanctuary of Oriental fragrances, where timeless traditions meet modern luxury. Founded with love in Baghdad, 2022.',
    footer_quick: 'Quick Links', footer_categories: 'Categories', footer_contact_title: 'Contact Us',
    footer_perfumes: 'Perfumes', footer_incense: 'Incense', footer_gift_sets: 'Gift Sets',
    footer_location: 'Baghdad, Iraq',
    footer_copyright: '© 2026 Rose Baghdad. All rights reserved.',
    footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Service',
    mob_established: 'Est. 2022', mob_location: 'Baghdad, Iraq',
    cart_title: 'Shopping Cart', cart_empty: 'Your cart is empty',
    cart_checkout: 'Checkout', cart_total: 'Total',
    cart_remove: 'Remove', cart_added: 'Added to cart',
    add_cart: 'Add to Cart', view_details: 'View Details',
    currency: 'IQD',
    badge_bestseller: 'Bestseller', badge_new: 'New', badge_limited: 'Limited',
  }
};

// ═══════════════════════════════════════════════════════════════════════
// LANGUAGE SYSTEM
// ═══════════════════════════════════════════════════════════════════════
const Lang = {
  current: localStorage.getItem('rb_lang') || 'ar',
  get t() { return T[this.current]; },
  toggle() {
    this.current = this.current === 'ar' ? 'en' : 'ar';
    localStorage.setItem('rb_lang', this.current);
    this.apply();
  },
  apply() {
    const t = this.t;
    document.documentElement.setAttribute('dir', t.dir);
    document.documentElement.setAttribute('lang', t.lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (t[k] === undefined) return;
      if (String(t[k]).includes('<')) { el.innerHTML = t[k]; }
      else { el.textContent = t[k]; }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const k = el.getAttribute('data-i18n-placeholder');
      if (t[k]) el.placeholder = t[k];
    });

    document.querySelectorAll('.lang-toggle').forEach(b => {
      b.textContent = this.current === 'ar' ? 'EN' : 'AR';
    });

    document.title = this.current === 'ar'
      ? 'روز بغداد | للعطور والبخور'
      : 'Rose Baghdad | Luxury Perfumes & Incense';

    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', this.current === 'ar'
      ? 'روز بغداد — عطور وبخور فاخرة من قلب بغداد. اكتشف مجموعتنا الاستثنائية.'
      : 'Rose Baghdad — Luxury perfumes and premium incense from the heart of Baghdad.'
    );

    document.dispatchEvent(new CustomEvent('lang:change', { detail: t }));
  }
};

// ═══════════════════════════════════════════════════════════════════════
// CART SYSTEM
// ═══════════════════════════════════════════════════════════════════════
const Cart = {
  items: JSON.parse(localStorage.getItem('rb_cart') || '[]'),
  save() { localStorage.setItem('rb_cart', JSON.stringify(this.items)); },
  add(id) {
    const ex = this.items.find(i => i.id === id);
    if (ex) { ex.qty++; }
    else {
      const p = PRODUCTS.find(x => x.id === id);
      if (p) this.items.push({ id, qty: 1, price: p.price });
    }
    this.save(); this.updateBadge();
  },
  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save(); this.updateBadge(); this.renderDrawer();
  },
  updateQty(id, delta) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    this.save(); this.updateBadge(); this.renderDrawer();
  },
  count() { return this.items.reduce((s, i) => s + i.qty, 0); },
  total() { return this.items.reduce((s, i) => s + i.qty * i.price, 0); },
  updateBadge() {
    const c = this.count();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = c;
      el.classList.toggle('visible', c > 0);
    });
  },
  openDrawer() {
    this.renderDrawer();
    document.getElementById('cart-overlay')?.classList.add('open');
    document.getElementById('cart-drawer')?.classList.add('open');
    document.body.style.overflow = 'hidden';
  },
  closeDrawer() {
    document.getElementById('cart-overlay')?.classList.remove('open');
    document.getElementById('cart-drawer')?.classList.remove('open');
    document.body.style.overflow = '';
  },
  renderDrawer() {
    const t = Lang.t;
    const lang = Lang.current;
    const itemsEl = document.getElementById('cart-items');
    const footerEl = document.getElementById('cart-footer');
    if (!itemsEl || !footerEl) return;

    if (this.items.length === 0) {
      itemsEl.innerHTML = `
        <div class="cart-empty">
          <svg width="52" height="52" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <p>${t.cart_empty}</p>
        </div>`;
      footerEl.style.display = 'none';
      return;
    }

    footerEl.style.display = 'block';
    itemsEl.innerHTML = this.items.map(item => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return '';
      const name = lang === 'en' ? p.nameEn : p.nameAr;
      return `
        <div class="cart-item">
          <img src="${p.image}" alt="${name}" class="cart-item-img" />
          <div class="cart-item-info">
            <div class="cart-item-name">${name}</div>
            <div class="cart-item-price">${fmtPrice(item.price)}</div>
            <div class="cart-item-controls">
              <div class="qty-control">
                <button class="qty-btn" onclick="Cart.updateQty(${p.id},-1)">−</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="Cart.updateQty(${p.id},1)">+</button>
              </div>
              <button class="cart-item-remove" onclick="Cart.remove(${p.id})">${t.cart_remove}</button>
            </div>
          </div>
        </div>`;
    }).join('');

    const totalEl = document.getElementById('cart-total-val');
    const lblEl   = document.getElementById('cart-total-lbl');
    const chkBtn  = document.getElementById('cart-checkout-btn');
    const titleEl = document.getElementById('cart-title-text');
    if (totalEl) totalEl.textContent = fmtPrice(this.total());
    if (lblEl)   lblEl.textContent   = t.cart_total;
    if (chkBtn)  chkBtn.textContent  = t.cart_checkout;
    if (titleEl) titleEl.textContent = t.cart_title;
  }
};

// ═══════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════
function fmtPrice(n) {
  return n.toLocaleString() + ' ' + Lang.t.currency;
}
function stars(r) {
  return '★'.repeat(r) + '☆'.repeat(5 - r);
}
function showToast(msg) {
  let t = document.getElementById('app-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'app-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> ${msg}`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3200);
}

// ═══════════════════════════════════════════════════════════════════════
// PRODUCT CARD BUILDER — Seamless dark luxury
// ═══════════════════════════════════════════════════════════════════════
function buildCard(p) {
  const lang = Lang.current;
  const t    = Lang.t;
  const name = lang === 'en' ? p.nameEn : p.nameAr;
  const desc = lang === 'en' ? p.descEn : p.descAr;
  const badge = p.badge ? t['badge_' + p.badge] : null;
  const safeName = (name || '').replace(/'/g, "\\'");

  return `
    <div class="product-card" data-id="${p.id}">
      <div class="card-image-wrap">
        ${badge ? `<span class="card-badge ${p.badge}">${badge}</span>` : ''}
        <button class="card-wishlist" onclick="event.stopPropagation();this.classList.toggle('active');" aria-label="Wishlist">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
        <img src="${p.image}" alt="${name}" loading="lazy" />
        <div class="card-overlay">
          <button class="card-overlay-btn btn-add-cart"
            onclick="event.stopPropagation();Cart.add(${p.id});showToast('${t.cart_added}: ${safeName}')">
            ${t.add_cart}
          </button>
          <button class="card-overlay-btn btn-view-details"
            onclick="event.stopPropagation();window.location.href='product.html?id=${p.id}'">
            ${t.view_details}
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-stars">${stars(p.rating)} <span class="count">(${p.reviews})</span></div>
        <h3 class="card-name">${name}</h3>
        <p class="card-desc">${desc}</p>
        <div class="card-price-row">
          <span class="card-price">${fmtPrice(p.price)}</span>
          ${p.originalPrice ? `<span class="card-price-old">${fmtPrice(p.originalPrice)}</span>` : ''}
        </div>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════════
// APP INIT
// ═══════════════════════════════════════════════════════════════════════
function initApp() {
  // Navbar scroll effect
  const nav = document.querySelector('.navbar');
  if (nav) {
    const checkScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  // Mobile menu
  const mobOpen    = document.getElementById('mob-open');
  const mobClose   = document.getElementById('mob-close');
  const mobOverlay = document.getElementById('mob-overlay');
  const mobDrawer  = document.getElementById('mob-drawer');
  const toggleMob  = open => {
    mobOverlay?.classList.toggle('open', open);
    mobDrawer?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  mobOpen?.addEventListener('click', () => toggleMob(true));
  mobClose?.addEventListener('click', () => toggleMob(false));
  mobOverlay?.addEventListener('click', () => toggleMob(false));
  document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => toggleMob(false)));

  // Cart
  document.querySelectorAll('.cart-trigger').forEach(b => b.addEventListener('click', () => Cart.openDrawer()));
  document.getElementById('cart-close')?.addEventListener('click', () => Cart.closeDrawer());
  document.getElementById('cart-overlay')?.addEventListener('click', () => Cart.closeDrawer());

  // Language toggle
  document.querySelectorAll('.lang-toggle').forEach(b => b.addEventListener('click', () => Lang.toggle()));

  // Scroll reveal
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
  }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

  Cart.updateBadge();
  Lang.apply();
}

document.addEventListener('DOMContentLoaded', initApp);
