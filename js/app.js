/**
 * Rose Baghdad V2.0 — Application Core
 * Shared: Product data, Cart state with drawer, Language system, Utilities
 */

// ═══════════════════════════════════════════════════════
// PRODUCT DATA
// ═══════════════════════════════════════════════════════
const PRODUCTS = [
  {
    id: 1, category: 'perfume', badge: 'bestseller',
    nameAr: 'عود ملكي', nameEn: 'Oud Royal',
    descAr: 'عود فاخر ممزوج بنفحات الزعفران والعنبر — يليق بالملوك',
    descEn: 'An imperial oud blended with saffron and amber — fit for royalty',
    longAr: 'عود ملكي هو تجربة عطرية استثنائية تجمع بين أجود أنواع عود الهندي المعتق ونفحات الزعفران الكشميري والعنبر السائل. مدته تتجاوز ١٢ ساعة على الجلد مع أثر يملأ الغرفة. معبأ في زجاجة كريستالية بغطاء ذهبي مصنوع يدوياً.',
    longEn: 'Oud Royal is an exceptional fragrance experience combining the finest aged Hindi oud with Kashmiri saffron and liquid amber. Long-lasting 12+ hours on skin with room-filling sillage. Presented in a crystal bottle with a handcrafted gold cap.',
    price: 85000, originalPrice: 100000, rating: 5, reviews: 48,
    image: 'assets/images/perfume_1.png', tags: ['عود', 'زعفران', 'عنبر']
  },
  {
    id: 2, category: 'incense', badge: 'new',
    nameAr: 'بغداد نوار', nameEn: 'Baghdad Noir',
    descAr: 'بخور داكن مدخن معتق ببتلات الورد ومسك الغزال',
    descEn: 'Dark smoky Bakhoor aged with rose petals and deer musk',
    longAr: 'بغداد نوار هو بخور استثنائي يمزج بين العمق الداكن للعود المدخن وخفة بتلات الورد الطازجة. يُضرم على فحم ليطلق دخانه العطري الذي يبقى عالقاً في الهواء لساعات.',
    longEn: 'Baghdad Noir is an exceptional incense blending dark smoky oud depth with fresh rose petal lightness. Burn over charcoal to release aromatic smoke that lingers for hours.',
    price: 65000, originalPrice: null, rating: 4, reviews: 32,
    image: 'assets/images/perfume_2.png', tags: ['بخور', 'ورد', 'مسك']
  },
  {
    id: 3, category: 'sets', badge: null,
    nameAr: 'مجموعة حديقة الورد', nameEn: 'Rose Garden Set',
    descAr: 'عطرين مميزين — عود الورد ومسك الياسمين في صندوق فاخر',
    descEn: 'Two signature scents — Rose Oud & Jasmine Musk in a luxury box',
    longAr: 'مجموعة حديقة الورد هي الهدية المثالية. تضم عطرين: "عود الورد" و"مسك الياسمين"، في صندوق هدايا فاخر مزيّن بالذهب.',
    longEn: 'The Rose Garden Set is the perfect gift, featuring two signature scents in a luxurious gold-decorated gift box.',
    price: 125000, originalPrice: 150000, rating: 5, reviews: 76,
    image: 'assets/images/perfume_3.png', tags: ['مجموعة', 'هدية', 'ورد']
  },
  {
    id: 4, category: 'incense', badge: 'limited',
    nameAr: 'بخور مقدس', nameEn: 'Sacred Bakhoor',
    descAr: 'رقائق عود هندي فاخرة مع خشب الصندل المعتق وراتنج العنبر',
    descEn: 'Premium Hindi oud chips with aged sandalwood and amber resin',
    longAr: 'البخور المقدس مزيج نادر من رقائق عود هندي فاخرة مع خشب الصندل المعتق وراتنج العنبر الطبيعي. يأتي في علبة خشبية جميلة.',
    longEn: 'Sacred Bakhoor is a rare blend of premium Hindi oud chips with aged sandalwood and natural amber resin, in a beautiful wooden box.',
    price: 45000, originalPrice: null, rating: 5, reviews: 29,
    image: 'assets/images/perfume_4.png', tags: ['بخور', 'عود', 'صندل']
  },
  {
    id: 5, category: 'perfume', badge: 'new',
    nameAr: 'نسمة بغداد', nameEn: 'Baghdad Breeze',
    descAr: 'عطر خفيف ومنعش بنفحات الحمضيات والمسك الأبيض',
    descEn: 'A light, refreshing scent with citrus and white musk notes',
    longAr: 'نسمة بغداد عطر نهاري مثالي يجمع بين انتعاش الحمضيات الطازجة ونعومة المسك الأبيض. مناسب لجميع المناسبات.',
    longEn: 'Baghdad Breeze is a perfect daytime fragrance combining fresh citrus and soft white musk.',
    price: 55000, originalPrice: null, rating: 4, reviews: 21,
    image: 'assets/images/perfume_1.png', tags: ['خفيف', 'مسك', 'حمضيات']
  },
  {
    id: 6, category: 'sets', badge: 'bestseller',
    nameAr: 'مجموعة الليالي العربية', nameEn: 'Arabian Nights Set',
    descAr: 'ثلاثة عطور ليلية فاخرة في صندوق هدايا استثنائي',
    descEn: 'Three luxurious evening fragrances in an exceptional gift box',
    longAr: 'مجموعة الليالي العربية تضم ثلاثة من أفضل عطورنا الليلية في صندوق هدايا استثنائي منقوش بالذهب.',
    longEn: 'The Arabian Nights Set features three of our finest evening fragrances in an exceptional gold-engraved gift box.',
    price: 175000, originalPrice: 210000, rating: 5, reviews: 54,
    image: 'assets/images/perfume_3.png', tags: ['مجموعة', 'هدية', 'ليلي']
  },
  {
    id: 7, category: 'incense', badge: null,
    nameAr: 'دخان الجنة', nameEn: 'Heaven Smoke',
    descAr: 'بخور فريد من الكمادا العربية والمسك الأبيض النقي',
    descEn: 'Unique incense of Arabic Kumada and pure white musk',
    longAr: 'دخان الجنة مزيج فريد من الكمادا العربية الأصيلة مع أنقى أنواع المسك الأبيض.',
    longEn: 'Heaven Smoke is a unique blend of authentic Arabic Kumada with the purest white musk.',
    price: 38000, originalPrice: null, rating: 4, reviews: 17,
    image: 'assets/images/perfume_4.png', tags: ['بخور', 'مسك', 'كمادا']
  },
  {
    id: 8, category: 'perfume', badge: 'limited',
    nameAr: 'ورد الطائف الذهبي', nameEn: 'Golden Taif Rose',
    descAr: 'جوهرة العطور — روح وردة الطائف في قارورة ذهبية',
    descEn: 'The crown jewel — the soul of Taif rose in a golden vial',
    longAr: 'ورد الطائف الذهبي هو أثمن عطورنا. يستخلص من آلاف وردات الطائف ليمنحك رائحة ملكية خالصة.',
    longEn: 'Golden Taif Rose is our most precious fragrance, distilled from thousands of authentic Taif roses.',
    price: 150000, originalPrice: null, rating: 5, reviews: 38,
    image: 'assets/images/perfume_2.png', tags: ['ورد', 'طائف', 'فاخر']
  }
];

// ═══════════════════════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════════════════════
const T = {
  ar: {
    dir: 'rtl', lang: 'ar',
    nav_home: 'الرئيسية', nav_collection: 'المجموعة', nav_story: 'قصتنا', nav_contact: 'تواصل معنا',
    filter_all: 'الكل', filter_perfume: 'العطور', filter_incense: 'البخور', filter_sets: 'مجموعات الهدايا',
    add_cart: 'أضف للسلة', quick_add: 'إضافة سريعة', view_details: 'عرض التفاصيل',
    cart_title: 'سلة التسوق', cart_empty: 'سلتك فارغة', cart_checkout: 'إتمام الشراء',
    cart_total: 'المجموع', cart_remove: 'إزالة', cart_added: 'تمت الإضافة',
    currency: 'د.ع', pdp_back: 'العودة للمتجر', pdp_reviews: 'تقييم',
    hero_over: '✦ تأسست في بغداد، ٢٠٢٢ ✦',
    hero_h1: 'حيث يغدو العطر فناً أصيلاً',
    hero_sub: 'عطور فاخرة وبخور أصيل تُصنع بشغف من قلب بغداد للذواقة',
    hero_cta: 'اكتشف المجموعة', hero_story: 'قصتنا',
    col_over: '✦ التشكيلة ✦', col_title: 'اكتشف عطورنا المميزة',
    view_all: 'اكتشف التشكيلة الكاملة',
    shop_title: 'المجموعة الكاملة',
  },
  en: {
    dir: 'ltr', lang: 'en',
    nav_home: 'Home', nav_collection: 'Collection', nav_story: 'Our Story', nav_contact: 'Contact',
    filter_all: 'All', filter_perfume: 'Perfumes', filter_incense: 'Incense', filter_sets: 'Gift Sets',
    add_cart: 'Add to Cart', quick_add: 'Quick Add', view_details: 'View Details',
    cart_title: 'Shopping Cart', cart_empty: 'Your cart is empty', cart_checkout: 'Checkout',
    cart_total: 'Total', cart_remove: 'Remove', cart_added: 'Added to cart',
    currency: 'IQD', pdp_back: 'Back to Shop', pdp_reviews: 'reviews',
    hero_over: '✦ Est. Baghdad, 2022 ✦',
    hero_h1: 'Where Scent Becomes Art',
    hero_sub: 'Handcrafted luxury perfumes & premium incense from the heart of Baghdad',
    hero_cta: 'Discover Collection', hero_story: 'Our Story',
    col_over: '✦ The Collection ✦', col_title: 'Discover Our Signature Scents',
    view_all: 'View Full Collection',
    shop_title: 'Full Collection',
  }
};

// ═══════════════════════════════════════════════════════
// LANGUAGE
// ═══════════════════════════════════════════════════════
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
      if (t[k] !== undefined) el.textContent = t[k];
    });
    document.querySelectorAll('.lang-toggle').forEach(b => {
      b.textContent = this.current === 'ar' ? 'EN' : 'AR';
    });
    document.dispatchEvent(new CustomEvent('lang:change', { detail: t }));
  }
};

// ═══════════════════════════════════════════════════════
// CART
// ═══════════════════════════════════════════════════════
const Cart = {
  items: JSON.parse(localStorage.getItem('rb_cart') || '[]'),
  save() { localStorage.setItem('rb_cart', JSON.stringify(this.items)); },

  add(id) {
    const ex = this.items.find(i => i.id === id);
    if (ex) { ex.qty++; } else {
      const p = PRODUCTS.find(x => x.id === id);
      if (p) this.items.push({ id, qty: 1, price: p.price });
    }
    this.save(); this.updateUI();
  },
  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save(); this.updateUI(); this.renderDrawer();
  },
  updateQty(id, delta) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    this.save(); this.updateUI(); this.renderDrawer();
  },
  count() { return this.items.reduce((s, i) => s + i.qty, 0); },
  total() { return this.items.reduce((s, i) => s + i.qty * i.price, 0); },

  updateUI() {
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
          <svg width="56" height="56" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <p style="font-size:0.95rem;">${t.cart_empty}</p>
          <button onclick="Cart.closeDrawer();window.location.href='shop.html'" class="btn-primary" style="font-size:0.85rem;padding:12px 28px;">
            ${t.nav_collection}
          </button>
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
            <div class="cart-item-price">${formatPrice(item.price)}</div>
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

    document.getElementById('cart-total-val').textContent = formatPrice(this.total());
    document.getElementById('cart-total-lbl').textContent = t.cart_total;
    document.getElementById('cart-checkout-btn').textContent = t.cart_checkout;
    document.getElementById('cart-title-text').textContent = t.cart_title;
  }
};

// ═══════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════
function formatPrice(n) {
  return n.toLocaleString() + ' ' + Lang.t.currency;
}
function stars(r) { return '★'.repeat(r) + '☆'.repeat(5 - r); }

function showToast(msg) {
  let t = document.getElementById('app-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'app-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> ${msg}`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

function buildCard(p) {
  const lang = Lang.current;
  const t = Lang.t;
  const name = lang === 'en' ? p.nameEn : p.nameAr;
  const desc = lang === 'en' ? p.descEn : p.descAr;
  const badge = p.badge ? (lang === 'en'
    ? { bestseller:'Bestseller', new:'New', limited:'Limited' }[p.badge]
    : { bestseller:'الأكثر مبيعاً', new:'جديد', limited:'إصدار محدود' }[p.badge]) : null;

  return `
    <div class="product-card" data-id="${p.id}" onclick="window.location.href='product.html?id=${p.id}'">
      <div class="card-image-wrap">
        ${badge ? `<span class="card-badge ${p.badge}">${badge}</span>` : ''}
        <button class="card-wishlist" onclick="event.stopPropagation();this.classList.toggle('active');" aria-label="Wishlist">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
        <img src="${p.image}" alt="${name}" loading="lazy" />
        <div class="card-overlay">
          <button class="card-overlay-btn" onclick="event.stopPropagation();Cart.add(${p.id});showToast('${t.cart_added}: ${name}');">
            ${t.quick_add}
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-stars">${stars(p.rating)} <span class="count">(${p.reviews})</span></div>
        <h3 class="card-name">${name}</h3>
        <p class="card-desc">${desc}</p>
        <div class="card-price-row">
          <span class="card-price">${formatPrice(p.price)}</span>
          ${p.originalPrice ? `<span class="card-price-old">${formatPrice(p.originalPrice)}</span>` : ''}
        </div>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════
// SHARED INIT
// ═══════════════════════════════════════════════════════
function initApp() {
  // Navbar scroll
  const nav = document.querySelector('.navbar');
  if (nav) {
    const check = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  // Mobile menu
  const mobOpen = document.getElementById('mob-open');
  const mobClose = document.getElementById('mob-close');
  const mobOverlay = document.getElementById('mob-overlay');
  const mobDrawer = document.getElementById('mob-drawer');
  function toggleMob(open) {
    mobOverlay?.classList.toggle('open', open);
    mobDrawer?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  mobOpen?.addEventListener('click', () => toggleMob(true));
  mobClose?.addEventListener('click', () => toggleMob(false));
  mobOverlay?.addEventListener('click', () => toggleMob(false));

  // Cart drawer triggers
  document.querySelectorAll('.cart-trigger').forEach(b =>
    b.addEventListener('click', () => Cart.openDrawer())
  );
  document.getElementById('cart-close')?.addEventListener('click', () => Cart.closeDrawer());
  document.getElementById('cart-overlay')?.addEventListener('click', () => Cart.closeDrawer());

  // Language toggle
  document.querySelectorAll('.lang-toggle').forEach(b =>
    b.addEventListener('click', () => Lang.toggle())
  );

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Init state
  Cart.updateUI();
  Lang.apply();
}

document.addEventListener('DOMContentLoaded', initApp);
