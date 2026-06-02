/**
 * Rose Baghdad V5.0 — VIP Masterpiece Application Core
 * Flawless Bilingual • Cart • Filters
 */

// ═══════════════════════════════════════════════════════════════════════
// PRODUCT DATA
// ═══════════════════════════════════════════════════════════════════════
const PRODUCTS = [
  {
    id: 1, category: 'perfume',
    nameAr: 'عود ملكي', nameEn: 'Oud Royal',
    descAr: 'عود فاخر ممزوج بنفحات الزعفران والعنبر', descEn: 'Imperial oud blended with saffron and amber',
    price: 85000, image: 'assets/images/perfume_1.png'
  },
  {
    id: 2, category: 'incense',
    nameAr: 'بغداد نوار', nameEn: 'Baghdad Noir',
    descAr: 'بخور داكن مدخن معتق ببتلات الورد', descEn: 'Dark smoky Bakhoor aged with rose petals',
    price: 65000, image: 'assets/images/perfume_2.png'
  },
  {
    id: 3, category: 'sets',
    nameAr: 'مجموعة حديقة الورد', nameEn: 'Rose Garden Set',
    descAr: 'عطرين مميزين في صندوق فاخر', descEn: 'Two signature scents in a luxury box',
    price: 125000, image: 'assets/images/perfume_3.png'
  },
  {
    id: 4, category: 'incense',
    nameAr: 'بخور مقدس', nameEn: 'Sacred Bakhoor',
    descAr: 'رقائق عود هندي فاخرة مع خشب الصندل', descEn: 'Premium Hindi oud chips with aged sandalwood',
    price: 45000, image: 'assets/images/perfume_4.png'
  },
  {
    id: 5, category: 'perfume',
    nameAr: 'نسمة بغداد', nameEn: 'Baghdad Breeze',
    descAr: 'عطر خفيف ومنعش بنفحات الحمضيات', descEn: 'Refreshing scent with citrus notes',
    price: 55000, image: 'assets/images/perfume_1.png'
  },
  {
    id: 6, category: 'sets',
    nameAr: 'مجموعة الليالي العربية', nameEn: 'Arabian Nights Set',
    descAr: 'ثلاثة عطور ليلية فاخرة', descEn: 'Three luxurious evening fragrances',
    price: 175000, image: 'assets/images/perfume_3.png'
  }
];

// ═══════════════════════════════════════════════════════════════════════
// TRANSLATION DICTIONARY
// ═══════════════════════════════════════════════════════════════════════
const T = {
  ar: {
    dir: 'rtl', lang: 'ar',
    nav_home: 'الرئيسية', nav_collection: 'المجموعة', nav_story: 'قصتنا',
    hero_over: '✦ تأسست في بغداد، ٢٠٢٢ ✦',
    hero_h1: 'حيث يغدو العطر <span class="text-gold italic">فناً أصيلاً</span>',
    hero_sub: 'عطور فاخرة وبخور أصيل تُصنع بشغف من قلب بغداد للذواقة.',
    hero_cta: 'اكتشف المجموعة',
    col_title: 'المجموعة <span class="text-gold italic">الحصرية</span>',
    filter_all: 'الكل', filter_perfume: 'العطور', filter_incense: 'البخور', filter_sets: 'المجموعات',
    about_over: '✦ تراثنا ✦',
    about_title: 'وُلدت من <span class="text-gold italic">روح بغداد</span>',
    about_p1: 'تأسست "روز بغداد" في عام ٢٠٢٢ بهدف فريد — إحياء الفن القديم للعطور الشرقية وتقديمه لمن يبحث عن أكثر من مجرد رائحة عابرة. نحن نسعى لاستحضار الذكريات والمشاعر والهوية الأصيلة.',
    about_p2: 'كل عطر هو رحلة عبر حدائق الورد في بغداد، إلى الأسواق العتيقة، والتقاليد الخالدة لثقافة البخور العربي.',
    footer_desc: 'ملاذ العطور الشرقية، حيث تلتقي التقاليد العريقة بالفخامة العصرية.',
    footer_quick: 'روابط سريعة', footer_categories: 'الفئات', footer_contact_title: 'تواصل معنا',
    footer_location: 'بغداد، العراق', footer_copyright: '© 2026 روز بغداد. جميع الحقوق محفوظة.',
    cart_title: 'سلة التسوق', cart_empty: 'السلة فارغة.', cart_checkout: 'إتمام الشراء',
    cart_total: 'المجموع', add_cart: 'أضف للسلة', currency: 'د.ع'
  },
  en: {
    dir: 'ltr', lang: 'en',
    nav_home: 'Home', nav_collection: 'Collection', nav_story: 'Our Story',
    hero_over: '✦ EST. BAGHDAD, 2022 ✦',
    hero_h1: 'Where Scent Becomes <span class="text-gold italic">Timeless Art</span>',
    hero_sub: 'Handcrafted luxury perfumes & premium incense from the heart of Baghdad.',
    hero_cta: 'Discover Collection',
    col_title: 'The <span class="text-gold italic">Exclusive</span> Collection',
    filter_all: 'All', filter_perfume: 'Perfumes', filter_incense: 'Incense', filter_sets: 'Gift Sets',
    about_over: '✦ OUR HERITAGE ✦',
    about_title: 'Born from the <span class="text-gold italic">Soul of Baghdad</span>',
    about_p1: 'Rose Baghdad was founded in 2022 to revive the ancient art of Oriental perfumery for those who seek more than a fleeting scent. We aim to evoke memories, emotions, and authentic identity.',
    about_p2: 'Each fragrance is a journey through the rose gardens of Baghdad and the timeless traditions of Arabian incense.',
    footer_desc: 'A sanctuary of Oriental fragrances, where tradition meets modern luxury.',
    footer_quick: 'Quick Links', footer_categories: 'Categories', footer_contact_title: 'Contact Us',
    footer_location: 'Baghdad, Iraq', footer_copyright: '© 2026 Rose Baghdad. All rights reserved.',
    cart_title: 'Shopping Cart', cart_empty: 'Your cart is empty.', cart_checkout: 'Checkout',
    cart_total: 'Total', add_cart: 'Add to Cart', currency: 'IQD'
  }
};

// ═══════════════════════════════════════════════════════════════════════
// APP STATE & RENDERING
// ═══════════════════════════════════════════════════════════════════════
const App = {
    lang: localStorage.getItem('rb_lang_v5') || 'ar',
    cart: JSON.parse(localStorage.getItem('rb_cart_v5') || '[]'),
    filter: 'all',

    init() {
        this.bindEvents();
        this.applyLanguage();
        this.renderProducts();
        this.updateCartUI();
    },

    bindEvents() {
        document.getElementById('langToggle')?.addEventListener('click', () => {
            this.lang = this.lang === 'ar' ? 'en' : 'ar';
            localStorage.setItem('rb_lang_v5', this.lang);
            this.applyLanguage();
            this.renderProducts();
            this.renderCartDrawer();
        });

        document.getElementById('cartToggle')?.addEventListener('click', () => this.toggleCart(true));
        document.getElementById('closeCart')?.addEventListener('click', () => this.toggleCart(false));
        document.getElementById('cart-drawer-overlay')?.addEventListener('click', () => this.toggleCart(false));

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('bg-gold', 'text-black');
                    b.classList.add('bg-transparent', 'text-silver', 'border-transparent');
                });
                const target = e.target;
                target.classList.remove('bg-transparent', 'text-silver', 'border-transparent');
                target.classList.add('bg-gold', 'text-black');
                
                this.filter = target.dataset.filter;
                this.renderProducts();
            });
        });
    },

    applyLanguage() {
        const t = T[this.lang];
        document.documentElement.dir = t.dir;
        document.documentElement.lang = t.lang;
        
        document.getElementById('langToggle').textContent = this.lang === 'ar' ? 'EN' : 'AR';
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (String(t[key]).includes('<')) el.innerHTML = t[key];
                else el.textContent = t[key];
            }
        });

        const drawer = document.getElementById('cart-drawer');
        if (drawer) {
            if (this.lang === 'ar') {
                drawer.classList.remove('translate-x-[100%]', 'right-0', 'border-l');
                drawer.classList.add('translate-x-[-100%]', 'left-0', 'border-r');
            } else {
                drawer.classList.remove('translate-x-[-100%]', 'left-0', 'border-r');
                drawer.classList.add('translate-x-[100%]', 'right-0', 'border-l');
            }
        }
    },

    renderProducts() {
        const grid = document.getElementById('product-grid');
        if (!grid) return;
        
        const filtered = this.filter === 'all' 
            ? PRODUCTS 
            : PRODUCTS.filter(p => p.category === this.filter);
            
        const t = T[this.lang];
        
        grid.innerHTML = filtered.map(p => {
            const name = this.lang === 'en' ? p.nameEn : p.nameAr;
            const desc = this.lang === 'en' ? p.descEn : p.descAr;
            
            return `
            <div class="group flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(197,160,89,0.1)]">
                <div class="aspect-[4/5] overflow-hidden relative">
                    <img src="${p.image}" alt="${name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                </div>
                <div class="p-8 bg-[#111] flex flex-col flex-1 border-t border-white/5 rounded-b-2xl">
                    <h3 class="text-2xl font-light text-pearl mb-3">${name}</h3>
                    <p class="text-sm text-silver mb-8 flex-1 leading-relaxed">${desc}</p>
                    <div class="flex items-center justify-between mb-8">
                        <span class="text-gold font-semibold text-xl">${p.price.toLocaleString()} ${t.currency}</span>
                    </div>
                    <button onclick="App.addToCart(${p.id})" class="w-full py-4 bg-white/5 border border-white/10 text-pearl hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 rounded-full text-sm font-semibold tracking-wider">
                        ${t.add_cart}
                    </button>
                </div>
            </div>
            `;
        }).join('');
    },

    addToCart(id) {
        const item = this.cart.find(i => i.id === id);
        if (item) {
            item.qty++;
        } else {
            const p = PRODUCTS.find(x => x.id === id);
            if (p) this.cart.push({ id: p.id, qty: 1, price: p.price });
        }
        this.saveCart();
        this.updateCartUI();
        this.toggleCart(true);
    },

    removeFromCart(id) {
        this.cart = this.cart.filter(i => i.id !== id);
        this.saveCart();
        this.updateCartUI();
        this.renderCartDrawer();
    },

    updateQty(id, delta) {
        const item = this.cart.find(i => i.id === id);
        if (item) {
            item.qty = Math.max(1, item.qty + delta);
            this.saveCart();
            this.updateCartUI();
            this.renderCartDrawer();
        }
    },

    saveCart() {
        localStorage.setItem('rb_cart_v5', JSON.stringify(this.cart));
    },

    updateCartUI() {
        const count = this.cart.reduce((sum, item) => sum + item.qty, 0);
        const badge = document.getElementById('cartBadge');
        if (badge) {
            badge.textContent = count;
            if (count > 0) badge.classList.remove('hidden');
            else badge.classList.add('hidden');
        }
    },

    toggleCart(show) {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-drawer-overlay');
        
        if (show) {
            this.renderCartDrawer();
            overlay.classList.remove('hidden');
            setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            
            drawer.classList.remove('translate-x-[100%]', 'translate-x-[-100%]');
            drawer.classList.add('translate-x-0');
            document.body.style.overflow = 'hidden';
        } else {
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
            
            drawer.classList.remove('translate-x-0');
            if (this.lang === 'ar') {
                drawer.classList.add('translate-x-[-100%]');
            } else {
                drawer.classList.add('translate-x-[100%]');
            }
            document.body.style.overflow = '';
        }
    },

    renderCartDrawer() {
        const container = document.getElementById('cart-items');
        const footer = document.getElementById('cart-footer');
        const t = T[this.lang];
        
        if (this.cart.length === 0) {
            container.innerHTML = `<div class="text-silver text-center mt-12 text-lg">${t.cart_empty}</div>`;
            footer.classList.add('hidden');
            return;
        }

        footer.classList.remove('hidden');
        let total = 0;

        container.innerHTML = this.cart.map(item => {
            const p = PRODUCTS.find(x => x.id === item.id);
            if (!p) return '';
            total += item.qty * item.price;
            const name = this.lang === 'en' ? p.nameEn : p.nameAr;
            
            return `
            <div class="flex gap-6 pb-8 border-b border-white/5 last:border-0">
                <div class="w-24 h-32 overflow-hidden rounded-xl border border-white/10 bg-[#111]">
                    <img src="${p.image}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 flex flex-col py-1">
                    <h4 class="text-pearl font-light text-lg mb-2">${name}</h4>
                    <span class="text-gold font-semibold mb-4">${p.price.toLocaleString()} ${t.currency}</span>
                    <div class="flex items-center justify-between mt-auto">
                        <div class="flex items-center border border-white/10 rounded-full overflow-hidden bg-white/5">
                            <button onclick="App.updateQty(${p.id}, -1)" class="px-4 py-1.5 text-silver hover:text-gold hover:bg-white/5 transition-all">-</button>
                            <span class="px-3 text-sm text-pearl font-medium">${item.qty}</span>
                            <button onclick="App.updateQty(${p.id}, 1)" class="px-4 py-1.5 text-silver hover:text-gold hover:bg-white/5 transition-all">+</button>
                        </div>
                        <button onclick="App.removeFromCart(${p.id})" class="text-silver hover:text-red-400 transition-colors p-2 hover:bg-white/5 rounded-full">
                            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        document.getElementById('cart-total-val').textContent = `${total.toLocaleString()} ${t.currency}`;
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
