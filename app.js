/**
 * KINETIPOD™ - Smart Gait & Shoe Wearable E-Commerce & Interactive Sandbox Engine
 * Features:
 * - Product Catalog, Filters, Search, Sorting
 * - Shopping Cart, Promo Vouchers, Checkout & PromptPay QR Simulator
 * - Interactive Dynamic Foot Pressure Heatmap (Canvas 2D)
 * - Real-time Biomechanical Waveform & Gait Oscilloscope (Canvas 2D)
 * - AI Needs Finder Wizard
 * - Product Comparison & Quick View
 */

// ==========================================
// 1. DATA REPOSITORY
// ==========================================

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "KinetiPod Pro-Run V4 (Proto-X1 Sensor Pod)",
    category: "running",
    categoryLabel: "นักวิ่ง & ไตรกีฬา",
    price: 2890,
    originalPrice: 3590,
    rating: 4.9,
    reviewsCount: 840,
    soldCount: "1.4k+",
    image: "./assets/proto_x1_sensor.png",
    shoeImage: "./assets/hero_smart_shoe_sensor_1789023197347.jpg",
    badges: ["bestseller", "runner", "discount"],
    specs: [
      { label: "ตำแหน่งติดตั้ง", val: "หนีบเชือกรองเท้า (Dual-Lock Clip)" },
      { label: "เซนเซอร์ IMU", val: "100Hz 16-Axis Biomechanics" },
      { label: "อายุแบตเตอรี่", val: "25 ชม. ต่อการชาร์จ" },
      { label: "ระดับการกันน้ำ", val: "IP68 Submersible" },
      { label: "การเชื่อมต่อ", val: "Bluetooth 5.4 / ANT+" },
      { label: "น้ำหนักอุปกรณ์", val: "12 กรัม (เบาพิเศษ)" }
    ],
    features: ["wireless", "waterproof", "bestseller"],
    desc: "เซนเซอร์ Foot Pod ติดเชือกรองเท้าความแม่นยำสูงสำหรับนักวิ่ง วัดกำลังวัตต์ (Running Power), รอบขา (Cadence), Ground Contact Time Balance, Pronation Angle และวิเคราะห์จุดลงเท้า midfoot/heel/forefoot แบบ Real-time ป้องกันอาการเจ็บ ITB และเข่า"
  },
  {
    id: 2,
    name: "RehabGait MediSense 360 Pod",
    category: "rehab",
    categoryLabel: "กายภาพบำบัด & การแพทย์",
    price: 3490,
    originalPrice: 4200,
    rating: 4.95,
    reviewsCount: 620,
    soldCount: "920+",
    image: "./assets/rehabgait_medisense_1789023233777.jpg",
    shoeImage: "./assets/hero_smart_shoe_sensor_1789023197347.jpg",
    badges: ["medical", "bestseller", "discount"],
    specs: [
      { label: "ตำแหน่งติดตั้ง", val: "ติดบนหลังเท้า / ข้อเท้า" },
      { label: "มาตรฐานการแพทย์", val: "ISO 13485 / CE Medical" },
      { label: "การวัดแรงกด", val: "0-2,000 N Dynamic Force" },
      { label: "องศาข้อเท้า", val: "Dorsiflexion / Eversion" },
      { label: "ระบบ Tele-Rehab", val: "ส่งรายงานตรงถึงแพทย์" },
      { label: "การรับประกัน", val: "ศูนย์ไทย 2 ปีเต็ม" }
    ],
    features: ["medical", "wireless", "bestseller"],
    desc: "คลิปเซนเซอร์ Foot Pod เกรดการแพทย์สำหรับผู้ป่วยทำกายภาพบำบัด ฟื้นฟูหลังผ่าตัดเปลี่ยนข้อเข่า ข้อเท้า หรือผู้ป่วยหลอดเลือดสมอง (Stroke) ตรวจจับและฝึกการทิ้งน้ำหนักให้สมดุล พร้อมส่งสถิติความคืบหน้าเข้าสู่ระบบคลินิกออนไลน์"
  },
  {
    id: 3,
    name: "StepSafe ElderGuard Sensor Pod",
    category: "safety",
    categoryLabel: "ความปลอดภัย & ผู้สูงอายุ",
    price: 2190,
    originalPrice: 2790,
    rating: 4.85,
    reviewsCount: 410,
    soldCount: "680+",
    image: "./assets/stepsafe_elderguard_1789023258283.jpg",
    shoeImage: "./assets/hero_smart_shoe_sensor_1789023197347.jpg",
    badges: ["safety", "discount"],
    specs: [
      { label: "ตำแหน่งติดตั้ง", val: "Clip & Go หนีบขอบ/เชือกรองเท้า" },
      { label: "ระบบตรวจจับ", val: "AI Fall & Trip Detection" },
      { label: "การแจ้งเตือน", val: "Auto SOS เข้ามือถือญาติ" },
      { label: "แบตเตอรี่", val: "45 วัน (ระบบ Smart Sleep)" },
      { label: "สัญญาณเตือน", val: "ไฟ Amber Soft LED นำทาง" },
      { label: "กันน้ำ/กันฝุ่น", val: "IP67 ใช้งานในชีวิตประจำวัน" }
    ],
    features: ["wireless", "waterproof"],
    desc: "อุปกรณ์ติดรองเท้าอัจฉริยะสำหรับผู้สูงอายุ ตรวจจับการทรงตัว การสะดุด และเตือนเมื่อมีความเสี่ยงล้ม พร้อมระบบส่งสัญญาณแจ้งเตือนอัตโนมัติเข้าสมาร์ทโฟนของลูกหลานทันที ให้ความอุ่นใจในการใช้ชีวิตทุกก้าว"
  },
  {
    id: 4,
    name: "AgilityPro Strike Sport Pod",
    category: "sports",
    categoryLabel: "นักกีฬา & อัตราเร่ง",
    price: 2590,
    originalPrice: 3190,
    rating: 4.88,
    reviewsCount: 380,
    soldCount: "550+",
    image: "./assets/agilitypro_strike_1789023279774.jpg",
    shoeImage: "./assets/hero_smart_shoe_sensor_1789023197347.jpg",
    badges: ["sports", "discount"],
    specs: [
      { label: "ตำแหน่งติดตั้ง", val: "Heel Armor Mech-Lock ส้นรองเท้า" },
      { label: "ความทนแรงกระแทก", val: "50G Shock-Resistant" },
      { label: "การวัดสปีด", val: "Acceleration 0-100Hz" },
      { label: "ความสูงกระโดด", val: "Vertical Jump (±0.5cm)" },
      { label: "อายุแบตเตอรี่", val: "20 ชม. ไฮสปีดโหมด" },
      { label: "กีฬาที่รองรับ", val: "บาสเกตบอล, ฟุตบอล, แบดมินตัน" }
    ],
    features: ["waterproof", "wireless"],
    desc: "เซนเซอร์ Foot Pod ติดส้นรองเท้าสำหรับนักกีฬาความเร็วสูง ออกแบบมาเพื่อวัดสปีด อัตราเร่งในเสี้ยววินาที แรงเบรก เปลี่ยนทิศทาง และความสูงในการกระโดด ป้องกันอาการเอ็นข้อเท้าและเอ็นไขว้หน้า (ACL) ฉีกขาด"
  },
  {
    id: 5,
    name: "OrthoPressure Smart Insole & Pod Matrix",
    category: "rehab",
    categoryLabel: "กายภาพ & แผ่นรองเท้า",
    price: 3990,
    originalPrice: 4900,
    rating: 4.92,
    reviewsCount: 290,
    soldCount: "430+",
    image: "./assets/orthopressure_smart_insole_1789023627773.jpg",
    shoeImage: "./assets/hero_smart_shoe_sensor_1789023197347.jpg",
    badges: ["medical", "discount"],
    specs: [
      { label: "ตำแหน่งติดตั้ง", val: "แผ่นรองใต้ฝ่าเท้า + Pod ส่งสัญญาณ" },
      { label: "แผ่นเมทริกซ์", val: "8 Piezoelectric Zones" },
      { label: "ความหนาแผ่น", val: "1.8 mm (บางพิเศษตัดได้)" },
      { label: "การแสดงผล", val: "Live Pressure Heatmap" },
      { label: "ตรวจจับสรีระ", val: "เท้าแบน, อุ้งเท้าสูง, รองช้ำ" },
      { label: "อายุการใช้งาน", val: "รองรับการก้าว 2,000,000 ก้าว" }
    ],
    features: ["medical", "wireless"],
    desc: "แผ่นรองเท้าอัจฉริยะเซนเซอร์แรงกด 8 จุด ทำงานร่วมกับไมโครคลิปติดลิ้นรองเท้า แสดงแผนที่ความร้อน (Heatmap) แรงกดใต้ฝ่าเท้าขณะเดินและวิ่ง ช่วยแก้ไขอาการรองช้ำและจัดสมดุลกระดูกข้อเท้าอย่างแม่นยำ"
  },
  {
    id: 6,
    name: "NightGlow Pulse LED Sensor Pod",
    category: "safety",
    categoryLabel: "ความปลอดภัย & วิ่งกลางคืน",
    price: 890,
    originalPrice: 1190,
    rating: 4.8,
    reviewsCount: 510,
    soldCount: "1.2k+",
    image: "./assets/nightglow_pulse_led_1789023650760.jpg",
    shoeImage: "./assets/hero_smart_shoe_sensor_1789023197347.jpg",
    badges: ["runner", "safety", "discount"],
    specs: [
      { label: "ตำแหน่งติดตั้ง", val: "ส้นรองเท้า / ส้นเท้า" },
      { label: "ระยะการมองเห็น", val: "500 เมตร (High Lumen)" },
      { label: "โหมดไฟ", val: "Cadence Sync Pulse / Flash" },
      { label: "แบตเตอรี่", val: "60 ชม. ต่อการชาร์จ Type-C" },
      { label: "ระดับการกันน้ำ", val: "IP68 วิ่งลุยฝนหนัก" },
      { label: "น้ำหนัก", val: "9 กรัม" }
    ],
    features: ["waterproof", "bestseller"],
    desc: "คลิปไฟ LED Foot Pod เซฟตี้ติดส้นรองเท้านวัตกรรมใหม่ มีเซนเซอร์ตรวจจับรอบขา ปรับจังหวะแสงกะพริบตามความเร็วในการวิ่งของคุณโดยอัตโนมัติ เพิ่มทัศนวิสัยและความปลอดภัยในการวิ่ง City Run หรือวิ่งยามค่ำคืน"
  }
];

const REVIEWS_DATA = [
  {
    id: 1,
    name: "คุณธนิต สิทธิเดช",
    role: "นักวิ่งมาราธอน (Sub-3.30)",
    category: "runner",
    product: "KinetiPod Pro-Run V4",
    stars: 5,
    date: "10 ก.พ. 2026",
    text: "ใช้ตัวนี้คู่กับ Garmin Epix 2 วิ่งซ้อมมาราธอน ข้อมูล Ground Contact Time กับสมดุลซ้าย-ขวาแม่นยำมาก ทำให้รู้ว่าขาซ้ายทิ้งน้ำหนักเยอะกว่า พอปรับตามแล้วอาการเจ็บ ITB หายสนิทเลย คุ้มค่ามากครับ!",
    hasPhoto: true,
    helpful: 42
  },
  {
    id: 2,
    name: "คุณวิภาดา มณีรัตน์",
    role: "ผู้ป่วยผ่าตัดเปลี่ยนข้อเข่า",
    category: "rehab",
    product: "RehabGait MediSense 360",
    stars: 5,
    date: "28 ม.ค. 2026",
    text: "หลังผ่าตัดข้อเข่า คุณหมอแนะนำให้ใช้อุปกรณ์นี้ตอนฝึกเดินที่บ้านค่ะ เห็นตัวเลขแรงกดบนมือถือเลยว่าเราลงน้ำหนักข้างผ่าตัดได้กี่เปอร์เซ็นต์ ทำให้กล้าเดินลงน้ำหนักอย่างถูกต้อง ฟื้นตัวเร็วกว่าที่คิดเยอะมากค่ะ",
    hasPhoto: true,
    helpful: 67
  },
  {
    id: 3,
    name: "คุณภาณุพันธ์ เตชะวัฒน์",
    role: "นักบาสเกตบอล TBL",
    category: "sports",
    product: "AgilityPro Strike Sport",
    stars: 5,
    date: "02 ก.พ. 2026",
    text: "พ็อดติดส้นเท้าแน่นมาก ไม่หลุดเลยเวลาสปรินต์หรือกระโดดรีบาวด์ วัดความสูงการกระโดดและแรงกระแทกตอนแลนดิ้งได้เรียลไทม์ ช่วยให้ทีมโค้ชจัดโปรแกรมซ้อมได้ตรงจุด ป้องกันการเจ็บเข่าได้ดีเยี่ยม",
    hasPhoto: false,
    helpful: 29
  },
  {
    id: 4,
    name: "คุณกมลพร จันทร์กระจ่าง",
    role: "ซื้อให้คุณพ่ออายุ 78 ปี",
    category: "rehab",
    product: "StepSafe ElderGuard Pod",
    stars: 5,
    date: "14 ก.พ. 2026",
    text: "ติดไว้ที่รองเท้าเดินเล่นของคุณพ่อ สบายใจขึ้นเยอะค่ะ เคยมีรอบหนึ่งคุณพ่อสะดุดขั้นบันได เครื่องส่งเสียงเตือนและแจ้งเตือนเข้าไลน์ทันที พ่อบอกใช้งานง่ายมาก ไม่ต้องคอยกดเปิดปิดเอง",
    hasPhoto: true,
    helpful: 55
  },
  {
    id: 5,
    name: "คุณปิยะพงษ์ ศรีสุวรรณ",
    role: "นักวิ่ง Trail 50K",
    category: "runner",
    product: "NightGlow Pulse LED Pro",
    stars: 5,
    date: "05 ก.พ. 2026",
    text: "ไฟสว่างสะใจมาก ระบบกระพริบตามรอบก้าวเท่สุดๆ วิ่งลุยลำธารน้ำตกตอนเทรลกลางคืนเครื่องก็ไม่พัง กันน้ำ IP68 ของจริง แนะนำสายไนท์รันต้องมีติดไว้เลยครับ",
    hasPhoto: true,
    helpful: 34
  },
  {
    id: 6,
    name: "พญ. นภัสสร (คลินิกกระดูกและข้อ)",
    role: "แพทย์ผู้เชี่ยวชาญ",
    category: "rehab",
    product: "OrthoPressure Smart Insole Matrix",
    stars: 5,
    date: "19 ม.ค. 2026",
    text: "นำมาใช้ตรวจวิเคราะห์คนไข้ที่มีปัญหาโรครองช้ำและเท้าแบนในคลินิก แผนที่ Heatmap ละเอียดเทียบเท่าเครื่องสแกนหลักแสนในโรงพยาบาล คนไข้เข้าใจง่ายและปฏิบัติตามคำแนะนำได้ดียิ่งขึ้น",
    hasPhoto: true,
    helpful: 88
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================

let cart = JSON.parse(localStorage.getItem("kinetipod_cart") || "[]");
let appliedVoucher = null;
let currentCategoryFilter = "all";
let currentFeatureFilter = "all";
let currentSort = "featured";
let comparedProductIds = [];
let wishlist = JSON.parse(localStorage.getItem("kinetipod_wishlist") || "[]");

// ==========================================
// 3. INITIALIZATION & DOM READY
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
  initFlashTimer();
  initSandboxSimulator();
  initReviews("all");
  setupEventListeners();
});

// ==========================================
// 4. EVENT LISTENERS SETUP
// ==========================================

function setupEventListeners() {
  // Category tabs
  document.querySelectorAll(".cat-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategoryFilter = tab.getAttribute("data-filter");
      renderProducts();
    });
  });

  // Feature filter chips
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFeatureFilter = chip.getAttribute("data-feature");
      renderProducts();
    });
  });

  // Sort select
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  // Search
  document.getElementById("searchInput").addEventListener("input", (e) => {
    renderProducts(e.target.value);
  });

  document.getElementById("searchSubmitBtn").addEventListener("click", () => {
    const q = document.getElementById("searchInput").value;
    renderProducts(q);
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
  });

  // Search tags
  document.querySelectorAll(".search-tags .tag-item").forEach(tag => {
    tag.addEventListener("click", () => {
      const q = tag.getAttribute("data-search");
      document.getElementById("searchInput").value = q;
      renderProducts(q);
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Nav category links
  document.querySelectorAll(".nav-links a[data-category]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.getAttribute("data-category");
      filterCategory(cat);
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Cart Drawer toggles
  document.getElementById("cartToggleBtn").addEventListener("click", openCartDrawer);
  document.getElementById("cartCloseBtn").addEventListener("click", closeCartDrawer);
  document.getElementById("cartOverlay").addEventListener("click", closeCartDrawer);
  document.getElementById("clearCartBtn").addEventListener("click", clearCart);

  // Promo button in cart
  document.getElementById("applyPromoBtn").addEventListener("click", applyPromoFromInput);

  // Checkout modal
  document.getElementById("openCheckoutModalBtn").addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("กรุณาเลือกสินค้าลงในตะกร้าก่อนดำเนินการชำระเงิน", "warning");
      return;
    }
    closeCartDrawer();
    openCheckoutModal();
  });

  document.getElementById("checkoutModalCloseBtn").addEventListener("click", closeCheckoutModal);
  document.getElementById("checkoutModalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "checkoutModalOverlay") closeCheckoutModal();
  });

  // Product quick view close
  document.getElementById("productModalCloseBtn").addEventListener("click", closeProductModal);
  document.getElementById("productModalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "productModalOverlay") closeProductModal();
  });

  // Compare Drawer
  document.getElementById("compareToggleBtn").addEventListener("click", openCompareDrawer);
  document.getElementById("compareCloseBtn").addEventListener("click", closeCompareDrawer);

  // Hero mode selector
  document.querySelectorAll(".hud-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".hud-mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      switchHeroMode(btn.getAttribute("data-mode"));
    });
  });

  // Reviews filter
  document.querySelectorAll(".rev-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".rev-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      initReviews(tab.getAttribute("data-rev"));
    });
  });

  // FAQ Accordion
  document.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}

// ==========================================
// 5. PRODUCT CATALOG RENDERING
// ==========================================

function renderProducts(searchQuery = "") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  let filtered = PRODUCTS_DATA.filter(item => {
    // Category filter
    const matchCategory = (currentCategoryFilter === "all") || (item.category === currentCategoryFilter);
    // Feature filter
    const matchFeature = (currentFeatureFilter === "all") || (item.features && item.features.includes(currentFeatureFilter));
    // Search query
    let matchSearch = true;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      matchSearch = item.name.toLowerCase().includes(q) || 
                    item.desc.toLowerCase().includes(q) || 
                    item.categoryLabel.toLowerCase().includes(q);
    }
    return matchCategory && matchFeature && matchSearch;
  });

  // Sorting
  if (currentSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === "discount") {
    filtered.sort((a, b) => (b.originalPrice - b.price) - (a.originalPrice - a.price));
  }

  // Update counts
  const countAll = document.getElementById("countAll");
  if (countAll) countAll.innerText = PRODUCTS_DATA.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-results-box" style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.02); border-radius: 16px;">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 15px;"></i>
        <h3>ไม่พบสินค้าที่ตรงกับเงื่อนไขการค้นหา</h3>
        <p style="color: var(--text-secondary); margin-top: 8px;">ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่อื่นดูครับ</p>
        <button class="btn btn-outline" style="margin-top: 18px;" onclick="resetCatalogFilters()">แสดงสินค้าทั้งหมด</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlist = wishlist.includes(product.id);
    const isCompared = comparedProductIds.includes(product.id);
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    // Badges HTML
    let badgesHtml = "";
    if (product.badges.includes("bestseller")) {
      badgesHtml += `<span class="badge-tag bestseller"><i class="fa-solid fa-fire"></i> ขายดีอันดับ 1</span>`;
    }
    if (product.badges.includes("medical")) {
      badgesHtml += `<span class="badge-tag medical"><i class="fa-solid fa-certificate"></i> เกรดการแพทย์</span>`;
    }
    if (product.badges.includes("runner")) {
      badgesHtml += `<span class="badge-tag runner"><i class="fa-solid fa-person-running"></i> สำหรับวิ่ง</span>`;
    }
    if (discountPercent > 0) {
      badgesHtml += `<span class="badge-tag discount">ลด ${discountPercent}%</span>`;
    }

    return `
      <div class="product-card" data-id="${product.id}" onclick="openProductQuickView(${product.id})">
        <div class="prod-badge-ribbon">
          ${badgesHtml}
        </div>

        <div class="prod-actions-top" onclick="event.stopPropagation();">
          <button class="icon-btn-float ${isWishlist ? 'active' : ''}" title="ถูกใจ" onclick="toggleWishlist(${product.id})">
            <i class="${isWishlist ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          <button class="icon-btn-float ${isCompared ? 'active' : ''}" title="เปรียบเทียบสเปก" onclick="toggleCompare(${product.id})">
            <i class="fa-solid fa-code-compare"></i>
          </button>
        </div>

        <div class="prod-image-wrap">
          <img src="${product.image}" alt="${product.name}" class="prod-img" loading="lazy">
          <div class="prod-sensor-tag">
            <i class="fa-solid fa-microchip"></i> Foot Pod Sensor
          </div>
          <div class="prod-quick-view-overlay">
            <button class="btn btn-sm btn-glass" onclick="event.stopPropagation(); openProductQuickView(${product.id})">
              <i class="fa-solid fa-shoe-prints text-cyan"></i> ดูมุมมองติดบนรองเท้า & สเปก
            </button>
          </div>
        </div>

        <div class="prod-body">
          <span class="prod-category">${product.categoryLabel}</span>
          <h3 class="prod-title">${product.name}</h3>

          <div class="prod-rating-row">
            <span class="prod-stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span class="prod-rating-num">${product.rating}</span>
            <span class="prod-sold-count">(${product.soldCount} ขายแล้ว)</span>
          </div>

          <div class="prod-specs-tags">
            ${product.specs.slice(0, 3).map(s => `<span class="spec-mini-tag"><i class="fa-solid fa-check text-cyan"></i> ${s.label}: ${s.val}</span>`).join('')}
          </div>

          <div class="prod-footer" onclick="event.stopPropagation();">
            <div class="prod-price-box">
              <span class="current-price">฿${product.price.toLocaleString()}</span>
              <span class="original-price">฿${product.originalPrice.toLocaleString()}</span>
            </div>
            <div class="prod-footer-btns">
              <button class="btn-card-cart" onclick="addToCart(${product.id})" title="เพิ่มลงในตะกร้า">
                <i class="fa-solid fa-cart-plus"></i> เพิ่มลงตะกร้า
              </button>
              <button class="btn-card-buy" onclick="directBuyNow(${product.id})" title="สั่งซื้อและชำระเงินทันที">
                <i class="fa-solid fa-bolt"></i> ซื้อเลย
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCategory(cat) {
  currentCategoryFilter = cat;
  document.querySelectorAll(".cat-tab").forEach(tab => {
    if (tab.getAttribute("data-filter") === cat) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  renderProducts();
}

function resetCatalogFilters() {
  currentCategoryFilter = "all";
  currentFeatureFilter = "all";
  document.getElementById("searchInput").value = "";
  document.querySelectorAll(".cat-tab").forEach(t => t.classList.toggle("active", t.getAttribute("data-filter") === "all"));
  document.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("active", c.getAttribute("data-feature") === "all"));
  renderProducts();
}

// ==========================================
// 6. SHOPPING CART SYSTEM
// ==========================================

function addToCart(productId, qty = 1) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      originalPrice: prod.originalPrice,
      image: prod.image,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`เพิ่ม "${prod.name}" ลงในตะกร้าเรียบร้อยแล้ว`, "success");
  animateCartBadge();
}

function quickAddToCart(productId) {
  addToCart(productId, 1);
  openCartDrawer();
}

function updateCartItemQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  showToast("ลบสินค้าออกจากตะกร้าแล้ว", "info");
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  appliedVoucher = null;
  saveCart();
  updateCartUI();
  showToast("ล้างตะกร้าสินค้าเรียบร้อย", "info");
}

function saveCart() {
  localStorage.setItem("kinetipod_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Nav badges & Top bar count
  const topBarCount = document.getElementById("topBarCartCount");
  const navCount = document.getElementById("cartCount");
  const navTotal = document.getElementById("cartTotalNav");
  const drawerCount = document.getElementById("cartDrawerItemCount");
  if (topBarCount) topBarCount.innerText = totalItems;
  if (navCount) navCount.innerText = totalItems;
  if (navTotal) navTotal.innerText = `฿${subtotal.toLocaleString()}`;
  if (drawerCount) drawerCount.innerText = totalItems;

  // Free shipping progress (target: 1,500 THB)
  const shippingTarget = 1500;
  const progressPercent = Math.min(100, Math.round((subtotal / shippingTarget) * 100));
  const shippingBar = document.getElementById("shippingProgressBar");
  const shippingText = document.getElementById("shippingProgressText");

  let isFreeShipping = subtotal >= shippingTarget;
  if (appliedVoucher && appliedVoucher.code === "FREESHIP") {
    isFreeShipping = true;
  }

  if (shippingBar) shippingBar.style.width = `${progressPercent}%`;
  if (shippingText) {
    if (isFreeShipping) {
      shippingText.innerHTML = `<span class="text-green"><i class="fa-solid fa-circle-check"></i> ยินดีด้วย! คุณได้รับสิทธิ์ <strong>จัดส่งด่วนฟรี</strong></span>`;
    } else {
      const remaining = shippingTarget - subtotal;
      shippingText.innerHTML = `สั่งซื้ออีก <strong>฿${remaining.toLocaleString()}</strong> เพื่อรับสิทธิ์ <strong>จัดส่งฟรี!</strong>`;
    }
  }

  // Calculate discount
  let discountAmount = 0;
  if (appliedVoucher) {
    if (typeof appliedVoucher.discount === "number") {
      discountAmount = appliedVoucher.discount;
    } else if (typeof appliedVoucher.discount === "string" && appliedVoucher.discount.includes("%")) {
      const pct = parseFloat(appliedVoucher.discount) / 100;
      discountAmount = Math.round(subtotal * pct);
    }
  }

  const shippingCost = (isFreeShipping || subtotal === 0) ? 0 : 60;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  // Cart Drawer values
  const subtotalElem = document.getElementById("cartSubtotalText");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountElem = document.getElementById("cartDiscountText");
  const shippingElem = document.getElementById("cartShippingText");
  const grandTotalElem = document.getElementById("cartGrandTotalText");

  if (subtotalElem) subtotalElem.innerText = `฿${subtotal.toLocaleString()}`;
  if (shippingElem) shippingElem.innerText = shippingCost === 0 ? "ฟรี (Free)" : `฿${shippingCost}`;
  if (grandTotalElem) grandTotalElem.innerText = `฿${grandTotal.toLocaleString()}`;

  if (discountRow && discountElem) {
    if (discountAmount > 0) {
      discountRow.style.display = "flex";
      discountElem.innerText = `-฿${discountAmount.toLocaleString()} (${appliedVoucher.code})`;
    } else {
      discountRow.style.display = "none";
    }
  }

  // Cart items list render
  const listContainer = document.getElementById("cartItemsList");
  if (listContainer) {
    if (cart.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center" style="padding: 50px 10px; color: var(--text-muted);">
          <i class="fa-solid fa-bag-shopping" style="font-size: 3rem; margin-bottom: 12px; color: var(--border-light);"></i>
          <p style="font-size: 0.95rem;">ยังไม่มีสินค้าในตะกร้า</p>
          <a href="#catalog" class="btn btn-sm btn-outline" style="margin-top: 15px;" onclick="closeCartDrawer()">เลือกชมสินค้า</a>
        </div>
      `;
    } else {
      listContainer.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <span class="cart-item-title">${item.name}</span>
            <span class="cart-item-price">฿${(item.price * item.qty).toLocaleString()}</span>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="updateCartItemQty(${item.id}, -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartItemQty(${item.id}, 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="ลบ">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join('');
    }
  }
}

function openCartDrawer() {
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function animateCartBadge() {
  const badge = document.getElementById("cartCount");
  if (badge) {
    badge.classList.remove("cart-badge-pulse");
    void badge.offsetWidth; // Trigger reflow
    badge.classList.add("cart-badge-pulse");
  }
}

// ==========================================
// 7. VOUCHER & PROMO CODE ENGINE
// ==========================================

function claimVoucher(code, discount, minSpend = 0) {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  appliedVoucher = { code, discount, minSpend };
  
  // Highlight buttons
  document.querySelectorAll(`.claim-btn[data-code="${code}"]`).forEach(btn => {
    btn.classList.add("claimed");
    btn.innerHTML = `<i class="fa-solid fa-check"></i> เก็บโค้ดแล้ว`;
  });

  updateCartUI();
  showToast(`เก็บโค้ดส่วนลด "${code}" เรียบร้อยแล้ว! นำไปใช้ในตะกร้าอัตโนมัติ`, "success");
}

function applyPromoFromInput() {
  const input = document.getElementById("cartPromoInput");
  const feedback = document.getElementById("promoFeedback");
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    feedback.innerHTML = `<span class="text-coral">กรุณากรอกโค้ดส่วนลด</span>`;
    return;
  }

  if (code === "KINETI500") {
    claimVoucher("KINETI500", 500, 2500);
    feedback.innerHTML = `<span class="text-green">ใช้โค้ด KINETI500 ลดทันที ฿500</span>`;
  } else if (code === "PHYSIOCARE") {
    claimVoucher("PHYSIOCARE", "15%", 0);
    feedback.innerHTML = `<span class="text-green">ใช้โค้ด PHYSIOCARE ลด 15%</span>`;
  } else if (code === "FREESHIP") {
    claimVoucher("FREESHIP", "FREE_SHIPPING", 1000);
    feedback.innerHTML = `<span class="text-green">ใช้โค้ด FREESHIP จัดส่งฟรี</span>`;
  } else if (code === "RUNNER300") {
    claimVoucher("RUNNER300", 300, 1800);
    feedback.innerHTML = `<span class="text-green">ใช้โค้ด RUNNER300 ลด ฿300</span>`;
  } else {
    feedback.innerHTML = `<span class="text-coral">โค้ดส่วนลดไม่ถูกต้อง หรือหมดอายุ</span>`;
  }
}

function initFlashTimer() {
  let seconds = 5 * 3600 + 42 * 60 + 19;
  const hElem = document.getElementById("timerHours");
  const mElem = document.getElementById("timerMins");
  const sElem = document.getElementById("timerSecs");

  setInterval(() => {
    if (seconds > 0) seconds--;
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    if (hElem) hElem.innerText = String(h).padStart(2, "0");
    if (mElem) mElem.innerText = String(m).padStart(2, "0");
    if (sElem) sElem.innerText = String(s).padStart(2, "0");
  }, 1000);
}

// ==========================================
// 8. INTERACTIVE GAIT SANDBOX & CANVAS SIMULATOR
// ==========================================

let activeScenario = "marathon";
let animFrameId = null;
let wavePhase = 0;

const SCENARIO_PRESETS = {
  marathon: {
    cadence: "182 SPM",
    gct: "212 ms",
    osc: "6.8 cm",
    pronation: "-2.4° (Neutral)",
    symmetry: "50.2% L / 49.8% R",
    symmetryScore: "98.4%",
    score: 94,
    scoreTitle: "ฟอร์มการวิ่งยอดเยี่ยม (Optimal Form)",
    scoreDesc: "การลงน้ำหนักกลางเท้าสมดุล ไร้แรงกระแทกเกินเกณฑ์ที่ข้อเข่าและข้อเท้า",
    feedback: [
      { type: "positive", text: "สมดุลการก้าวเท้าซ้าย-ขวาอยู่ในเกณฑ์มาตรฐานสากล (< 1% ต่าง)" },
      { type: "note", text: "รอบขาเฉลี่ย 182 SPM ช่วยประหยัดพลังงานได้ถึง 14%" }
    ],
    recommendedProdId: 1,
    leftPressure: [0.3, 0.4, 0.8, 0.9, 0.5],
    rightPressure: [0.3, 0.4, 0.8, 0.9, 0.5]
  },
  "knee-rehab": {
    cadence: "108 SPM",
    gct: "480 ms",
    osc: "3.2 cm",
    pronation: "+4.8° (Over-supination)",
    symmetry: "38.5% L (ผ่าตัด) / 61.5% R",
    symmetryScore: "62.0%",
    score: 68,
    scoreTitle: "อยู่ในเกณฑ์ฟื้นฟู (Rehabilitation Phase)",
    scoreDesc: "พบการลงน้ำหนักขาซ้ายน้อยกว่าปกติ แนะนำเพิ่มน้ำหนักขาซ้ายตามคำแนะนำแพทย์",
    feedback: [
      { type: "warning", text: "⚠️ ขาซ้ายทิ้งน้ำหนักเพียง 38.5% เนื่องจากความกังวลหลังผ่าตัด" },
      { type: "note", text: "ระบบเปิดโหมด Audio Haptic เตือนเสียงเตือนจังหวะก้าวให้สมดุล" }
    ],
    recommendedProdId: 2,
    leftPressure: [0.15, 0.2, 0.35, 0.4, 0.2],
    rightPressure: [0.6, 0.7, 0.9, 0.95, 0.6]
  },
  "heel-strike": {
    cadence: "158 SPM",
    gct: "295 ms",
    osc: "9.4 cm",
    pronation: "+8.2° (Overpronation)",
    symmetry: "47.2% L / 52.8% R",
    symmetryScore: "89.4%",
    score: 74,
    scoreTitle: "ลงส้นเท้าหนักเกินไป (Heavy Heel Strike)",
    scoreDesc: "ตรวจพบแรงกระแทกเฉียบพลันที่ส้นเท้าสูงกว่าปกติ เสี่ยงต่อโรครองช้ำและข้อเข่า",
    feedback: [
      { type: "warning", text: "⚠️ แรงกระแทกส้นเท้า 3.4G เกินค่าแนะนำ (ปกติ < 2.5G)" },
      { type: "note", text: "แนะนำปรับเพิ่มรอบขาเป็น 170+ SPM เพื่อเลื่อนจุดลงเท้ามาที่กลางเท้า" }
    ],
    recommendedProdId: 5,
    leftPressure: [0.95, 0.9, 0.4, 0.3, 0.2],
    rightPressure: [0.95, 0.9, 0.4, 0.3, 0.2]
  },
  sprint: {
    cadence: "228 SPM",
    gct: "142 ms",
    osc: "4.5 cm",
    pronation: "0.2° (Forefoot Strike)",
    symmetry: "50.0% L / 50.0% R",
    symmetryScore: "99.8%",
    score: 98,
    scoreTitle: "สปรินต์อัตราเร่งสูงสุด (Max Acceleration)",
    scoreDesc: "ลงปลายเท้าสมบูรณ์แบบ อัตราเร่งและแรงส่งสูงสุด",
    feedback: [
      { type: "positive", text: "Ground Contact Time ต่ำมากเพียง 142ms ส่งแรงดีดตัวยอดเยี่ยม" },
      { type: "positive", text: "แรงกระโดด Vertical Force 4.2G ถ่ายเทพลังงานได้เต็มประสิทธิภาพ" }
    ],
    recommendedProdId: 4,
    leftPressure: [0.05, 0.1, 0.6, 0.95, 0.98],
    rightPressure: [0.05, 0.1, 0.6, 0.95, 0.98]
  }
};

function initSandboxSimulator() {
  document.querySelectorAll(".scenario-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".scenario-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeScenario = btn.getAttribute("data-scenario");
      updateSandboxDashboard();
    });
  });

  updateSandboxDashboard();
  runContinuousAnimation();
}

function updateSandboxDashboard() {
  const data = SCENARIO_PRESETS[activeScenario];
  if (!data) return;

  // Update summary metrics
  const gct = document.getElementById("gctVal");
  const osc = document.getElementById("oscVal");
  const pronation = document.getElementById("pronationVal");
  const symmetry = document.getElementById("symmetryVal");

  if (gct) gct.innerText = data.gct;
  if (osc) osc.innerText = data.osc;
  if (pronation) pronation.innerText = data.pronation;
  if (symmetry) symmetry.innerText = data.symmetryScore;

  // AI Box
  const scoreNum = document.getElementById("aiScoreNum");
  const scoreTitle = document.getElementById("aiScoreTitle");
  const scoreDesc = document.getElementById("aiScoreDesc");
  const feedbackList = document.getElementById("aiFeedbackList");

  if (scoreNum) scoreNum.innerText = data.score;
  if (scoreTitle) scoreTitle.innerText = data.scoreTitle;
  if (scoreDesc) scoreDesc.innerText = data.scoreDesc;

  if (feedbackList) {
    feedbackList.innerHTML = data.feedback.map(item => `
      <div class="feedback-item ${item.type}">
        <i class="fa-solid ${item.type === 'positive' ? 'fa-circle-check' : item.type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info'}"></i>
        <span>${item.text}</span>
      </div>
    `).join('');
  }

  // Recommended Product Snippet
  const recContainer = document.getElementById("aiRecommendedProduct");
  const recProd = PRODUCTS_DATA.find(p => p.id === data.recommendedProdId);
  if (recContainer && recProd) {
    recContainer.innerHTML = `
      <span class="rec-badge">อุปกรณ์ที่เหมาะสมที่สุดกับท่าทางนี้:</span>
      <div class="rec-prod-snippet">
        <img src="${recProd.image}" alt="${recProd.name}" class="rec-thumb">
        <div>
          <strong>${recProd.name}</strong>
          <span class="rec-price">฿${recProd.price.toLocaleString()} <del>฿${recProd.originalPrice.toLocaleString()}</del></span>
        </div>
        <button class="btn btn-sm btn-cyan" onclick="quickAddToCart(${recProd.id})">สั่งซื้อเลย</button>
      </div>
    `;
  }
}

function runContinuousAnimation() {
  const leftCanvas = document.getElementById("leftFootCanvas");
  const rightCanvas = document.getElementById("rightFootCanvas");
  const waveCanvas = document.getElementById("waveformCanvas");

  if (!leftCanvas || !rightCanvas || !waveCanvas) return;

  const leftCtx = leftCanvas.getContext("2d");
  const rightCtx = rightCanvas.getContext("2d");
  const waveCtx = waveCanvas.getContext("2d");

  function draw() {
    wavePhase += 0.05;
    const pulseFactor = 0.8 + 0.2 * Math.sin(wavePhase * 2);

    const data = SCENARIO_PRESETS[activeScenario];
    if (data) {
      drawFootHeatmap(leftCtx, leftCanvas.width, leftCanvas.height, data.leftPressure, pulseFactor, "L");
      drawFootHeatmap(rightCtx, rightCanvas.width, rightCanvas.height, data.rightPressure, pulseFactor, "R");
      drawWaveform(waveCtx, waveCanvas.width, waveCanvas.height, wavePhase, activeScenario);
    }

    animFrameId = requestAnimationFrame(draw);
  }

  draw();
}

function drawFootHeatmap(ctx, w, h, pressureArray, pulse, side) {
  ctx.clearRect(0, 0, w, h);

  // Background Foot Silhouette
  ctx.save();
  ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
  ctx.strokeStyle = "rgba(0, 240, 255, 0.35)";
  ctx.lineWidth = 1.5;

  ctx.beginPath();
  const cx = w / 2;
  // Draw an anatomical foot shape
  ctx.moveTo(cx - 15, h - 30);
  // Heel
  ctx.bezierCurveTo(cx - 30, h - 30, cx - 35, h - 70, cx - 25, h - 110);
  // Arch
  ctx.bezierCurveTo(cx - 10, h - 160, cx - 15, h - 200, cx - 38, h - 230);
  // Forefoot & Toes
  ctx.bezierCurveTo(cx - 45, h - 270, cx - 20, h - 290, cx, h - 290);
  ctx.bezierCurveTo(cx + 35, h - 290, cx + 45, h - 260, cx + 38, h - 220);
  // Outer lateral edge
  ctx.bezierCurveTo(cx + 35, h - 170, cx + 32, h - 90, cx + 25, h - 30);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Draw Heatmap spots based on pressure levels
  // Spots: [Heel, Midfoot, Ball-Left, Ball-Right, Toes]
  const spots = [
    { x: cx, y: h - 55, r: 24, p: pressureArray[0] },      // Heel
    { x: cx + (side === 'L' ? 10 : -10), y: h - 135, r: 18, p: pressureArray[1] }, // Midfoot arch/lateral
    { x: cx - 16, y: h - 225, r: 20, p: pressureArray[2] }, // Ball inner
    { x: cx + 16, y: h - 225, r: 20, p: pressureArray[3] }, // Ball outer
    { x: cx, y: h - 265, r: 22, p: pressureArray[4] }       // Big toe & toes
  ];

  spots.forEach(spot => {
    const intensity = spot.p * pulse;
    const grad = ctx.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.r * (1 + intensity * 0.4));
    
    if (intensity > 0.7) {
      grad.addColorStop(0, "rgba(255, 70, 85, 0.9)");
      grad.addColorStop(0.4, "rgba(245, 158, 11, 0.7)");
      grad.addColorStop(0.8, "rgba(16, 185, 129, 0.3)");
      grad.addColorStop(1, "rgba(0, 240, 255, 0)");
    } else if (intensity > 0.4) {
      grad.addColorStop(0, "rgba(245, 158, 11, 0.85)");
      grad.addColorStop(0.5, "rgba(16, 185, 129, 0.5)");
      grad.addColorStop(1, "rgba(0, 240, 255, 0)");
    } else {
      grad.addColorStop(0, "rgba(0, 240, 255, 0.7)");
      grad.addColorStop(0.6, "rgba(16, 185, 129, 0.2)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    }

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(spot.x, spot.y, spot.r * 1.4, 0, Math.PI * 2);
    ctx.fill();
  });

  // Sensor node icon on laces
  ctx.fillStyle = "var(--primary-cyan)";
  ctx.strokeStyle = "#FFF";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, h - 175, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

function drawWaveform(ctx, w, h, phase, scenario) {
  ctx.clearRect(0, 0, w, h);

  // Draw Grid Lines
  ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += 30) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Draw Ground Reaction Force (Cyan curve)
  ctx.strokeStyle = "#00F0FF";
  ctx.lineWidth = 2.5;
  ctx.shadowColor = "rgba(0, 240, 255, 0.8)";
  ctx.shadowBlur = 10;
  ctx.beginPath();

  const midY = h * 0.55;
  for (let x = 0; x < w; x++) {
    const freq = scenario === 'sprint' ? 0.04 : scenario === 'marathon' ? 0.025 : 0.015;
    const amp = scenario === 'sprint' ? 45 : scenario === 'heel-strike' ? 55 : 35;
    const y = midY + Math.sin(x * freq + phase) * amp * Math.cos((x * 0.01) + phase * 0.5);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Draw Pronation Angle (Lime / Coral secondary wave)
  ctx.strokeStyle = scenario === 'heel-strike' ? "#FF4655" : "#10B981";
  ctx.lineWidth = 1.8;
  ctx.shadowColor = scenario === 'heel-strike' ? "rgba(255, 70, 85, 0.8)" : "rgba(16, 185, 129, 0.8)";
  ctx.shadowBlur = 6;
  ctx.beginPath();

  for (let x = 0; x < w; x++) {
    const freq2 = scenario === 'sprint' ? 0.03 : 0.02;
    const amp2 = 20;
    const y = midY + 25 + Math.sin(x * freq2 - phase * 1.5) * amp2;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.shadowBlur = 0; // Reset
}

// ==========================================
// 9. HERO MODE SWITCHER
// ==========================================

function switchHeroMode(mode) {
  const m1L = document.getElementById("metric1Label");
  const m1V = document.getElementById("metric1Value");
  const m2L = document.getElementById("metric2Label");
  const m2V = document.getElementById("metric2Value");
  const m3L = document.getElementById("metric3Label");
  const m3V = document.getElementById("metric3Value");
  const m4L = document.getElementById("metric4Label");
  const m4V = document.getElementById("metric4Value");

  if (mode === "runner") {
    m1L.innerHTML = `<i class="fa-solid fa-bolt"></i> รอบขา (Cadence)`;
    m1V.innerHTML = `182 <small>SPM</small>`;
    m2L.innerHTML = `<i class="fa-solid fa-scale-balanced"></i> สมดุล ซ้าย/ขวา`;
    m2V.innerHTML = `50.1% L / 49.9% R`;
    m3L.innerHTML = `<i class="fa-solid fa-shoe-prints"></i> จุดลงเท้า (Strike)`;
    m3V.innerHTML = `Midfoot (12°)`;
    m4L.innerHTML = `<i class="fa-solid fa-chart-simple"></i> กำลังวิ่ง (Power)`;
    m4V.innerHTML = `285 <small>Watts</small>`;
  } else if (mode === "physio") {
    m1L.innerHTML = `<i class="fa-solid fa-weight-scale"></i> แรงกดฝ่าเท้า (Force)`;
    m1V.innerHTML = `1,250 <small>N</small>`;
    m2L.innerHTML = `<i class="fa-solid fa-scale-balanced"></i> สมดุลข้างผ่าตัด`;
    m2V.innerHTML = `48.5% L / 51.5% R`;
    m3L.innerHTML = `<i class="fa-solid fa-angle-up"></i> องศาข้อเท้า (Gait)`;
    m3V.innerHTML = `Dorsi: 18.5°`;
    m4L.innerHTML = `<i class="fa-solid fa-heart-pulse"></i> คะแนนฟื้นตัว`;
    m4V.innerHTML = `94 / 100`;
  } else if (mode === "elder") {
    m1L.innerHTML = `<i class="fa-solid fa-person-walking"></i> ความมั่นคงการทรงตัว`;
    m1V.innerHTML = `96% <small>Stable</small>`;
    m2L.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ตรวจจับการสะดุด`;
    m2V.innerHTML = `0 ครั้ง (ปกติ)`;
    m3L.innerHTML = `<i class="fa-solid fa-shield-check"></i> สถานะ SOS Fall`;
    m3V.innerHTML = `ACTIVE (พร้อมเตือน)`;
    m4L.innerHTML = `<i class="fa-solid fa-battery-full"></i> แบตเตอรี่คงเหลือ`;
    m4V.innerHTML = `92% (38 วัน)`;
  }
}

// ==========================================
// 10. AI NEEDS FINDER WIZARD
// ==========================================

let wizardAnswers = {
  role: null,
  goal: null
};

const WIZARD_GOALS = {
  runner: [
    { key: "speed", title: "เพิ่มความเร็ว & ปรับเพซ (Sub-3 / Sub-4)", desc: "ต้องการวัดค่า Running Power (วัตต์) และรอบขาเพื่อวางแผนแข่ง" },
    { key: "injury", title: "แก้ปัญหาบาดเจ็บเรื้อรัง (เข่า, ITB, รองช้ำ)", desc: "ต้องการตรวจจุดลงเท้า Ground Contact Time Balance ซ้าย-ขวา" }
  ],
  rehab: [
    { key: "post-op", title: "ฟื้นฟูหลังผ่าตัดเข่า / ข้อเท้า / สะโพก", desc: "ต้องการฝึกเดินทิ้งน้ำหนักข้างที่ผ่าตัดให้เท่ากับข้างปกติ" },
    { key: "stroke", title: "กายภาพบำบัดกล้ามเนื้ออ่อนแรง / อัมพฤกษ์", desc: "ต้องการวัดองศาการยกปลายเท้า และส่งรายงานให้แพทย์ออนไลน์" }
  ],
  sports: [
    { key: "agility", title: "วัดสปีด อัตราเร่ง การเปลี่ยนทิศทาง", desc: "สำหรับนักฟุตบอล และแบดมินตัน" },
    { key: "jump", title: "วัดความสูงการกระโดด & แรงกระแทกแลนดิ้ง", desc: "สำหรับนักบาสเกตบอลและวอลเลย์บอล" }
  ],
  elder: [
    { key: "fall-prevent", title: "ป้องกันการหกล้ม & ตรวจจับการสะดุด", desc: "ต้องการระบบ SOS แจ้งเตือนเข้าไลน์ลูกหลานอัตโนมัติ" },
    { key: "mobility", title: "ติดตามการเดินออกกำลังกายประจำวัน", desc: "ต้องการเซนเซอร์ที่ไม่ต้องชาร์จบ่อย ใช้งานง่ายเพียงแค่หนีบ" }
  ]
};

function selectWizardOption(step, key, val) {
  wizardAnswers[key] = val;

  if (step === 1) {
    // Generate Step 2 options dynamically
    const goals = WIZARD_GOALS[val] || [];
    const container = document.getElementById("step2DynamicOptions");
    container.innerHTML = goals.map(g => `
      <div class="option-card" onclick="selectWizardOption(2, 'goal', '${g.key}')">
        <div class="option-icon"><i class="fa-solid fa-bullseye"></i></div>
        <h4>${g.title}</h4>
        <p>${g.desc}</p>
      </div>
    `).join('');

    goToWizardStep(2);
  } else if (step === 2) {
    calculateWizardRecommendation();
    goToWizardStep(3);
  }
}

function goToWizardStep(stepNum) {
  for (let i = 1; i <= 3; i++) {
    const content = document.getElementById(`wStep${i}`);
    const ind = document.getElementById(`wStepInd${i}`);
    if (content) content.classList.toggle("active", i === stepNum);
    if (ind) ind.classList.toggle("active", i <= stepNum);
  }
}

function calculateWizardRecommendation() {
  let recProdId = 1;

  if (wizardAnswers.role === "runner") {
    recProdId = wizardAnswers.goal === "injury" ? 5 : 1;
  } else if (wizardAnswers.role === "rehab") {
    recProdId = 2;
  } else if (wizardAnswers.role === "sports") {
    recProdId = 4;
  } else if (wizardAnswers.role === "elder") {
    recProdId = 3;
  }

  const prod = PRODUCTS_DATA.find(p => p.id === recProdId);
  const container = document.getElementById("recommendationResult");
  if (!container || !prod) return;

  container.innerHTML = `
    <img src="${prod.image}" alt="${prod.name}" class="rec-img-large">
    <div>
      <span class="rec-match-pill"><i class="fa-solid fa-sparkles"></i> AI MATCH SCORE 99%</span>
      <h3 class="rec-title">${prod.name}</h3>
      <p class="rec-desc">${prod.desc}</p>
      
      <div class="rec-price-row">
        <span class="rec-price-main">฿${prod.price.toLocaleString()}</span>
        <span class="rec-price-old">฿${prod.originalPrice.toLocaleString()}</span>
        <span class="badge-tag discount">ลดพิเศษวันนี้</span>
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn btn-primary btn-glow" onclick="quickAddToCart(${prod.id})">
          <i class="fa-solid fa-cart-shopping"></i> สั่งซื้อรุ่นนี้ทันที
        </button>
        <button class="btn btn-glass" onclick="openProductQuickView(${prod.id})">
          <i class="fa-solid fa-circle-info"></i> ดูสเปกฉบับเต็ม
        </button>
      </div>
    </div>
  `;
}

function resetWizard() {
  wizardAnswers = { role: null, goal: null };
  goToWizardStep(1);
}

// ==========================================
// 11. QUICK VIEW & PRODUCT MODAL (ON-SHOE & POD DUAL VIEW)
// ==========================================

function openProductQuickView(productId, activeView = "shoe") {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const discountPercent = Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100);
  const currentImg = (activeView === "shoe") ? (prod.shoeImage || prod.image) : prod.image;
  const isShoe = (activeView === "shoe");

  const content = document.getElementById("productModalContent");
  content.innerHTML = `
    <!-- Left Column: Visual Display & Switcher -->
    <div class="modal-visual-col">
      <!-- View Switcher Tabs -->
      <div class="modal-view-switcher">
        <button class="modal-switch-btn ${isShoe ? 'active' : ''}" onclick="openProductQuickView(${prod.id}, 'shoe')">
          <i class="fa-solid fa-shoe-prints"></i> ติดตั้งบนรองเท้า (On-Shoe)
        </button>
        <button class="modal-switch-btn ${!isShoe ? 'active' : ''}" onclick="openProductQuickView(${prod.id}, 'pod')">
          <i class="fa-solid fa-microchip"></i> ตัวเครื่องเซนเซอร์ (Pod Device)
        </button>
      </div>

      <!-- Main Visual Frame -->
      <div class="modal-img-container">
        <img src="${currentImg}" alt="${prod.name}" class="modal-prod-image">
        
        <!-- Interactive Badge Overlay -->
        ${isShoe ? `
          <div class="modal-img-badge on-shoe">
            <span class="live-dot pulse-anim"></span>
            <span><i class="fa-solid fa-bolt text-amber"></i> แสดงมุมมอง Foot Pod ติดบนรองเท้าจริง</span>
          </div>
          <div class="modal-shoe-hud">
            <div class="hud-pill"><i class="fa-solid fa-shield-check text-green"></i> Dual-Lock Clip แน่นหนา</div>
            <div class="hud-pill"><i class="fa-solid fa-wifi text-cyan"></i> Live 100Hz IMU</div>
            <div class="hud-pill"><i class="fa-solid fa-water text-cyan"></i> IP68 กันน้ำ 100%</div>
          </div>
        ` : `
          <div class="modal-img-badge pod-view">
            <i class="fa-solid fa-microchip text-cyan"></i>
            <span>ฮาร์ดแวร์ Foot Pod Sensor น้ำหนักเบาพิเศษ</span>
          </div>
        `}
      </div>

      <!-- Thumbnail Switchers -->
      <div class="modal-thumbs-row">
        <div class="modal-thumb-box ${isShoe ? 'active' : ''}" onclick="openProductQuickView(${prod.id}, 'shoe')">
          <img src="${prod.shoeImage || prod.image}" alt="On Shoe View">
          <span>มุมมองติดบนรองเท้า</span>
        </div>
        <div class="modal-thumb-box ${!isShoe ? 'active' : ''}" onclick="openProductQuickView(${prod.id}, 'pod')">
          <img src="${prod.image}" alt="Pod View">
          <span>มุมมองตัวเครื่อง Foot Pod</span>
        </div>
      </div>
    </div>

    <!-- Right Column: Info, Specs & Actions -->
    <div class="modal-prod-info">
      <div class="modal-badge-row">
        <span class="prod-category">${prod.categoryLabel}</span>
        ${prod.badges.includes("bestseller") ? '<span class="badge-tag bestseller"><i class="fa-solid fa-fire"></i> ขายดีอันดับ 1</span>' : ''}
        ${prod.badges.includes("medical") ? '<span class="badge-tag medical"><i class="fa-solid fa-certificate"></i> เกรดการแพทย์</span>' : ''}
      </div>

      <h2 class="modal-title">${prod.name}</h2>
      
      <div class="prod-rating-row">
        <span class="prod-stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </span>
        <span class="prod-rating-num">${prod.rating}</span>
        <span class="prod-sold-count">(${prod.reviewsCount} รีวิว | ${prod.soldCount} ยอดขาย)</span>
      </div>

      <div class="modal-price-card">
        <div class="rec-price-row" style="margin-bottom: 0;">
          <span class="rec-price-main">฿${prod.price.toLocaleString()}</span>
          <span class="rec-price-old">฿${prod.originalPrice.toLocaleString()}</span>
          ${discountPercent > 0 ? `<span class="badge-tag discount">ลดพิเศษ ${discountPercent}%</span>` : ''}
        </div>
        <div class="modal-stock-status">
          <i class="fa-solid fa-circle-check text-green"></i> มีสินค้าพร้อมส่ง (ศูนย์ไทย จัดส่งใน 24 ชม.)
        </div>
      </div>

      <div class="modal-highlight-note">
        <i class="fa-solid fa-circle-check text-cyan"></i>
        <span><strong>ความเข้ากันได้ 100%:</strong> ออกแบบให้ติดกับเชือกรองเท้าหรือส้นรองเท้าวิ่งได้ทุกแบรนด์ (Nike, Adidas, Hoka, Asics, ฯลฯ) ไม่หลุดขณะวิ่ง</span>
      </div>

      <p class="modal-desc">${prod.desc}</p>

      <h4 class="specs-sec-title">
        <i class="fa-solid fa-sliders text-cyan"></i> ข้อมูลสเปกทางเทคนิค (Technical Specifications):
      </h4>
      <div class="modal-specs-list">
        ${prod.specs.map(s => `
          <div class="modal-spec-item">
            <span>${s.label}:</span>
            <strong>${s.val}</strong>
          </div>
        `).join('')}
      </div>

      <!-- Main Action Buttons -->
      <div class="modal-action-buttons">
        <button class="btn btn-primary btn-glow btn-modal-buy" onclick="directBuyNow(${prod.id})">
          <i class="fa-solid fa-bolt"></i> สั่งซื้อทันที / ชำระเงิน
        </button>
        <button class="btn btn-outline btn-modal-cart" onclick="addToCart(${prod.id}); closeProductModal();">
          <i class="fa-solid fa-cart-plus"></i> เพิ่มลงตะกร้า
        </button>
        <button class="btn btn-glass icon-btn-compare" title="เปรียบเทียบสเปก" onclick="toggleCompare(${prod.id}); closeProductModal();">
          <i class="fa-solid fa-code-compare"></i>
        </button>
      </div>
    </div>
  `;

  document.getElementById("productModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function directBuyNow(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      originalPrice: prod.originalPrice,
      image: prod.image,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  closeProductModal();
  openCheckoutModal();
  showToast(`เพิ่ม "${prod.name}" และเปิดหน้าชำระเงินเรียบร้อยแล้ว`, "success");
}

function closeProductModal() {
  document.getElementById("productModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 12. COMPARISON DRAWER SYSTEM
// ==========================================

function toggleCompare(productId) {
  if (comparedProductIds.includes(productId)) {
    comparedProductIds = comparedProductIds.filter(id => id !== productId);
    showToast("นำสินค้าออกจากการเปรียบเทียบแล้ว", "info");
  } else {
    if (comparedProductIds.length >= 3) {
      showToast("เปรียบเทียบได้สูงสุด 3 รายการพร้อมกัน", "warning");
      return;
    }
    comparedProductIds.push(productId);
    showToast("เพิ่มลงในตารางเปรียบเทียบสเปกแล้ว", "success");
  }

  updateCompareUI();
  renderProducts();
}

function updateCompareUI() {
  const countBadge = document.getElementById("compareCount");
  const drawerCount = document.getElementById("compareDrawerCount");
  if (countBadge) countBadge.innerText = comparedProductIds.length;
  if (drawerCount) drawerCount.innerText = comparedProductIds.length;

  const wrap = document.getElementById("compareTableWrap");
  if (!wrap) return;

  if (comparedProductIds.length === 0) {
    wrap.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 30px;">ยังไม่มีสินค้าที่เลือกเปรียบเทียบ (กดไอคอน <i class="fa-solid fa-code-compare"></i> ที่การ์ดสินค้า)</p>`;
    return;
  }

  const prods = PRODUCTS_DATA.filter(p => comparedProductIds.includes(p.id));

  wrap.innerHTML = `
    <div class="compare-grid">
      <div class="compare-col" style="background: transparent; border: none;">
        <div class="compare-col-header" style="color: var(--text-muted);">รายการเปรียบเทียบ</div>
        <p style="font-size: 0.85rem; margin-bottom: 8px;">ราคา</p>
        <p style="font-size: 0.85rem; margin-bottom: 8px;">หมวดหมู่</p>
        <p style="font-size: 0.85rem; margin-bottom: 8px;">แบตเตอรี่</p>
        <p style="font-size: 0.85rem; margin-bottom: 8px;">การกันน้ำ</p>
        <p style="font-size: 0.85rem;">การเชื่อมต่อ</p>
      </div>
      ${prods.map(p => `
        <div class="compare-col">
          <div class="compare-col-header">${p.name}</div>
          <p style="font-weight: 700; color: var(--primary-cyan); margin-bottom: 8px;">฿${p.price.toLocaleString()}</p>
          <p style="font-size: 0.82rem; margin-bottom: 8px;">${p.categoryLabel}</p>
          <p style="font-size: 0.82rem; margin-bottom: 8px;">${p.specs.find(s=>s.label.includes('แบต'))?.val || '25 ชม.'}</p>
          <p style="font-size: 0.82rem; margin-bottom: 8px;">${p.specs.find(s=>s.label.includes('กันน้ำ'))?.val || 'IP68'}</p>
          <p style="font-size: 0.82rem; margin-bottom: 14px;">${p.specs.find(s=>s.label.includes('เชื่อมต่อ'))?.val || 'BLE 5.4'}</p>
          <button class="btn btn-sm btn-cyan" style="width: 100%;" onclick="quickAddToCart(${p.id})">สั่งซื้อ</button>
        </div>
      `).join('')}
    </div>
  `;
}

function openCompareDrawer() {
  updateCompareUI();
  document.getElementById("compareDrawer").classList.add("active");
}

function closeCompareDrawer() {
  document.getElementById("compareDrawer").classList.remove("active");
}

function toggleWishlist(productId) {
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
    showToast("นำออกจากรายการถูกใจแล้ว", "info");
  } else {
    wishlist.push(productId);
    showToast("เพิ่มลงในรายการถูกใจแล้ว", "success");
  }
  localStorage.setItem("kinetipod_wishlist", JSON.stringify(wishlist));
  const count = document.getElementById("wishlistCount");
  if (count) count.innerText = wishlist.length;
  renderProducts();
}

// ==========================================
// 13. CHECKOUT & PROMPTPAY QR SIMULATOR
// ==========================================

let selectedPayMethod = "promptpay";

function selectPayOption(method) {
  selectedPayMethod = method;
  document.querySelectorAll(".pay-option").forEach(opt => {
    const radio = opt.querySelector(`input[value="${method}"]`);
    if (radio) {
      radio.checked = true;
      opt.classList.add("active");
    } else {
      opt.classList.remove("active");
    }
  });

  const detailView = document.getElementById("paymentDetailsView");
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;
  if (appliedVoucher) {
    if (typeof appliedVoucher.discount === "number") discountAmount = appliedVoucher.discount;
    else if (typeof appliedVoucher.discount === "string" && appliedVoucher.discount.includes("%")) {
      discountAmount = Math.round(subtotal * (parseFloat(appliedVoucher.discount) / 100));
    }
  }
  const shipping = (subtotal >= 1500 || (appliedVoucher && appliedVoucher.code === "FREESHIP")) ? 0 : 60;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  if (method === "promptpay") {
    detailView.innerHTML = `
      <div class="promptpay-box text-center">
        <p class="qr-intro">สแกน QR Code ด้วยแอปธนาคารใดก็ได้เพื่อชำระเงินทันที</p>
        <div class="qr-mockup">
          <div class="qr-frame">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=KINETIPOD-PAY-${grandTotal}-ORDER" alt="QR Code PromptPay" class="qr-image">
            <div class="qr-badge">PromptPay</div>
          </div>
          <div class="qr-amount-show">
            ยอดชำระ: <strong class="highlight-cyan">฿${grandTotal.toLocaleString()}</strong>
          </div>
        </div>
      </div>
    `;
  } else if (method === "credit") {
    detailView.innerHTML = `
      <div style="padding: 10px;">
        <div class="form-group">
          <label>หมายเลขบัตรเครดิต/เดบิต (16 หลัก)</label>
          <input type="text" placeholder="4xxx xxxx xxxx xxxx" value="4532 8900 1234 5678">
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label>วันหมดอายุ (MM/YY)</label>
            <input type="text" placeholder="MM/YY" value="12/28">
          </div>
          <div class="form-group">
            <label>รหัสความปลอดภัย (CVV)</label>
            <input type="password" placeholder="123" value="888">
          </div>
        </div>
      </div>
    `;
  } else if (method === "cod") {
    detailView.innerHTML = `
      <div style="padding: 15px; text-align: center; color: var(--text-secondary);">
        <i class="fa-solid fa-hand-holding-dollar text-green" style="font-size: 2rem; margin-bottom: 8px;"></i>
        <p>ชำระเงินสดหรือโอนจ่ายผ่านพนักงานส่งพัสดุเมื่อได้รับสินค้าถึงหน้าบ้าน</p>
      </div>
    `;
  }
}

function openCheckoutModal() {
  const summaryBox = document.getElementById("checkoutItemsSummary");
  const subtotalElem = document.getElementById("coSubtotal");
  const discountRow = document.getElementById("coDiscountRow");
  const discountElem = document.getElementById("coDiscount");
  const shippingElem = document.getElementById("coShipping");
  const grandTotalElem = document.getElementById("coGrandTotal");
  const amountShow = document.getElementById("checkoutAmountShow");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;
  if (appliedVoucher) {
    if (typeof appliedVoucher.discount === "number") discountAmount = appliedVoucher.discount;
    else if (typeof appliedVoucher.discount === "string" && appliedVoucher.discount.includes("%")) {
      discountAmount = Math.round(subtotal * (parseFloat(appliedVoucher.discount) / 100));
    }
  }

  const isFreeShipping = (subtotal >= 1500) || (appliedVoucher && appliedVoucher.code === "FREESHIP");
  const shipping = isFreeShipping ? 0 : 60;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  if (summaryBox) {
    summaryBox.innerHTML = cart.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 6px;">
        <span>${item.name} x ${item.qty}</span>
        <strong>฿${(item.price * item.qty).toLocaleString()}</strong>
      </div>
    `).join('');
  }

  if (subtotalElem) subtotalElem.innerText = `฿${subtotal.toLocaleString()}`;
  if (shippingElem) shippingElem.innerText = shipping === 0 ? "ฟรี (Free)" : `฿${shipping}`;
  if (grandTotalElem) grandTotalElem.innerText = `฿${grandTotal.toLocaleString()}`;
  if (amountShow) amountShow.innerText = `฿${grandTotal.toLocaleString()}`;

  if (discountRow && discountElem) {
    if (discountAmount > 0) {
      discountRow.style.display = "flex";
      discountElem.innerText = `-฿${discountAmount.toLocaleString()}`;
    } else {
      discountRow.style.display = "none";
    }
  }

  selectPayOption(selectedPayMethod);
  document.getElementById("checkoutModalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkoutModalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function processOrderPlacement() {
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();

  if (!name || !phone || !address) {
    showToast("กรุณากรอกข้อมูลชื่อ เบอร์โทร และที่อยู่จัดส่งให้ครบถ้วน", "warning");
    return;
  }

  const orderId = `KP-2026-${Math.floor(10000 + Math.random() * 90000)}`;
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;
  if (appliedVoucher) {
    if (typeof appliedVoucher.discount === "number") discountAmount = appliedVoucher.discount;
    else if (typeof appliedVoucher.discount === "string" && appliedVoucher.discount.includes("%")) {
      discountAmount = Math.round(subtotal * (parseFloat(appliedVoucher.discount) / 100));
    }
  }
  const shipping = (subtotal >= 1500 || (appliedVoucher && appliedVoucher.code === "FREESHIP")) ? 0 : 60;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  // Success summary details
  document.getElementById("successOrderId").innerText = orderId;
  const successSummary = document.getElementById("successSummaryBox");
  if (successSummary) {
    successSummary.innerHTML = `
      <div style="margin-bottom: 8px;"><strong>ผู้สั่งซื้อ:</strong> ${name} (${phone})</div>
      <div style="margin-bottom: 8px;"><strong>สถานที่จัดส่ง:</strong> ${address}</div>
      <div style="margin-bottom: 8px;"><strong>ช่องทางชำระเงิน:</strong> ${selectedPayMethod.toUpperCase()} (ชำระเรียบร้อย)</div>
      <div style="margin-bottom: 8px;"><strong>ยอดชำระสุทธิ:</strong> <span class="highlight-cyan">฿${grandTotal.toLocaleString()}</span></div>
      <div><strong>การรับประกัน:</strong> ประกันศูนย์ไทย 2 ปีเต็ม (เริ่มคุ้มครองทันที)</div>
    `;
  }

  // Save Customer data with biometrics to Firebase Firestore
  const gender = document.getElementById("custGender") ? document.getElementById("custGender").value : "ชาย";
  const birthDate = document.getElementById("custBirthDate") ? document.getElementById("custBirthDate").value : "1994-08-12";
  const age = document.getElementById("custAge") ? document.getElementById("custAge").value : "32";
  const weight = document.getElementById("custWeight") ? document.getElementById("custWeight").value : "68.5";
  const height = document.getElementById("custHeight") ? document.getElementById("custHeight").value : "175";

  if (typeof saveCustomerToFirebase === "function") {
    saveCustomerToFirebase({
      name,
      phone,
      email,
      gender,
      birthDate,
      age,
      weight,
      height,
      customerType: "นักวิ่งซ้อมประจำ",
      runningGoal: `สั่งซื้อสินค้าออเดอร์ #${orderId}`
    });
  }

  closeCheckoutModal();
  document.getElementById("orderSuccessOverlay").classList.add("active");

  // Clear cart
  cart = [];
  appliedVoucher = null;
  saveCart();
  updateCartUI();
}

function closeSuccessAndReset() {
  document.getElementById("orderSuccessOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 14. REVIEWS COMPONENT
// ==========================================

function initReviews(filterType = "all") {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;

  let list = REVIEWS_DATA;
  if (filterType === "photo") list = list.filter(r => r.hasPhoto);
  else if (filterType === "runner") list = list.filter(r => r.category === "runner");
  else if (filterType === "rehab") list = list.filter(r => r.category === "rehab");
  else if (filterType === "five-star") list = list.filter(r => r.stars === 5);

  grid.innerHTML = list.map(r => `
    <div class="review-card">
      <div class="review-user-row">
        <div>
          <span class="review-user">${r.name}</span>
          <div style="font-size: 0.72rem; color: var(--text-muted);">${r.role}</div>
        </div>
        <span class="review-date">${r.date}</span>
      </div>

      <div class="review-stars">
        ${'<i class="fa-solid fa-star"></i>'.repeat(r.stars)}
      </div>

      <span class="review-product-tag"><i class="fa-solid fa-shoe-prints"></i> ซื้อรุ่น: ${r.product}</span>

      <p class="review-text">"${r.text}"</p>

      <div class="review-helpful" onclick="this.innerHTML='<i class=\\'fa-solid fa-thumbs-up text-cyan\\'></i> รีวิวนี้มีประโยชน์ (${r.helpful + 1})'">
        <i class="fa-regular fa-thumbs-up"></i> รีวิวนี้มีประโยชน์ (${r.helpful})
      </div>
    </div>
  `).join('');
}

// ==========================================
// 15. TOAST NOTIFICATION UTILITY
// ==========================================

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "fa-circle-info text-cyan";
  if (type === "success") icon = "fa-circle-check text-green";
  if (type === "warning") icon = "fa-triangle-exclamation text-amber";
  if (type === "coral") icon = "fa-bolt text-coral";

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideInRight 0.3s ease reverse";
    setTimeout(() => toast.remove(), 280);
  }, 3500);
}

// ==========================================
// 16. BUSINESS MODEL CANVAS (BMC) HANDLERS
// ==========================================

function selectRevenuePlan(type) {
  if (type === 'rental') {
    openRentalModal();
  } else if (type === 'sub') {
    openSubscriptionModal();
  } else {
    quickAddToCart(1);
  }
}

function openRentalModal() {
  const modal = document.getElementById("rentalModalOverlay");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeRentalModal() {
  const modal = document.getElementById("rentalModalOverlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function submitRentalBooking() {
  const duration = document.getElementById("rentalDurationSelect") ? document.getElementById("rentalDurationSelect").value : "1 เดือน";
  const name = document.getElementById("rentalName") ? document.getElementById("rentalName").value : "ผู้รับบริการ";
  const phone = document.getElementById("rentalPhone") ? document.getElementById("rentalPhone").value : "-";

  if (typeof saveCustomerToFirebase === "function") {
    saveCustomerToFirebase({
      name,
      phone,
      customerType: "ผู้ป่วยพักฟื้น/กายภาพ",
      runningGoal: `เช่าอุปกรณ์ฟื้นฟู (${duration})`
    });
  }

  closeRentalModal();
  showToast(`จองคิวเช่าอุปกรณ์ (${duration}) สำเร็จ! ข้อมูลบันทึกเข้า Firebase แล้ว`, "success");
}

function openSubscriptionModal() {
  const modal = document.getElementById("subscriptionModalOverlay");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeSubscriptionModal() {
  const modal = document.getElementById("subscriptionModalOverlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function submitSubscription() {
  const plan = document.querySelector('input[name="subPlanOption"]:checked') ? document.querySelector('input[name="subPlanOption"]:checked').value : "Monthly";
  const email = document.getElementById("subEmail") ? document.getElementById("subEmail").value : "-";

  if (typeof saveCustomerToFirebase === "function") {
    saveCustomerToFirebase({
      email,
      name: "สมาชิก " + plan,
      customerType: "นักวิ่งซ้อมประจำ",
      runningGoal: `สมัครสมาชิก AI Coach Pro (${plan})`
    });
  }

  closeSubscriptionModal();
  showToast(`เปิดใช้งาน AI Running Coach Pro (${plan}) สำเร็จ! เริ่มทดลองใช้ฟรี 14 วันเรียบร้อย`, "success");
}

function playAudioAlertDemo(type) {
  let speechText = "";
  let toastMsg = "";

  if (type === 'good') {
    speechText = "ฟอร์มการลงเท้าสมบูรณ์ สมดุลซ้ายขวา ห้าสิบต่อห้าสิบ รอบขาเหมาะสม";
    toastMsg = "🔊 Audio Alert: 'ฟอร์มการลงเท้าสมบูรณ์ สมดุลซ้ายขวา 50:50'";
  } else if (type === 'pronation') {
    speechText = "แจ้งเตือน! ข้อเท้าขวาบิดเข้าด้านในเกินเกณฑ์ กรุณาปรับแนวก้าวเพื่อป้องกันอาการเจ็บเข่า";
    toastMsg = "⚠️ Audio Alert: 'แจ้งเตือน! ข้อเท้าขวาบิด Overpronation เกิน 6°'";
  } else if (type === 'heel') {
    speechText = "แจ้งเตือน! การลงส้นเท้ามีแรงกระแทกสูงเกินสองจุดห้าจี แนะนำปรับลงน้ำหนักกลางเท้า";
    toastMsg = "⚠️ Audio Alert: 'แจ้งเตือน! ลงส้นเท้าแรงกระแทกสูง แนะนำ Midfoot Strike'";
  }

  showToast(toastMsg, type === 'good' ? 'success' : 'warning');

  // Web Speech Synthesis (TTS in Thai if available)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = 'th-TH';
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

// ==========================================
// 17. FIREBASE & CUSTOMER PROFILE MANAGEMENT
// ==========================================

// Auto calculate age from Date of Birth
function autoCalcCheckoutAge(birthDateStr) {
  if (typeof calculateAgeFromBirthDate === "function") {
    const age = calculateAgeFromBirthDate(birthDateStr);
    const ageInput = document.getElementById("custAge");
    if (ageInput) ageInput.value = age;
  }
}

function autoCalcProfileAge(birthDateStr) {
  if (typeof calculateAgeFromBirthDate === "function") {
    const age = calculateAgeFromBirthDate(birthDateStr);
    const ageInput = document.getElementById("profAge");
    if (ageInput) ageInput.value = age;
  }
}

// Open & Close Profile Modal
function openCustomerProfileModal() {
  const modal = document.getElementById("customerProfileModalOverlay");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCustomerProfileModal() {
  const modal = document.getElementById("customerProfileModalOverlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Handle Profile Submission
async function handleCustomerProfileSubmit(event) {
  event.preventDefault();
  
  const customerData = {
    name: document.getElementById("profName").value.trim(),
    gender: document.getElementById("profGender").value, // เพศ
    birthDate: document.getElementById("profBirthDate").value, // วัน เดือน ปี เกิด
    age: parseInt(document.getElementById("profAge").value, 10), // อายุ
    weight: parseFloat(document.getElementById("profWeight").value), // น้ำหนัก
    height: parseFloat(document.getElementById("profHeight").value) || 170,
    phone: document.getElementById("profPhone").value.trim(),
    email: document.getElementById("profEmail").value.trim(),
    customerType: document.getElementById("profCustomerType").value,
    runningGoal: document.getElementById("profGoal").value.trim()
  };

  if (typeof saveCustomerToFirebase === "function") {
    await saveCustomerToFirebase(customerData);
    closeCustomerProfileModal();
    showToast(`✅ บันทึกข้อมูลคุณ "${customerData.name}" (เพศ ${customerData.gender}, อายุ ${customerData.age} ปี, น้ำหนัก ${customerData.weight} กก.) เข้า Firebase เรียบร้อย!`, "success");
    openCustomersDrawer();
  }
}

// Customer Database Drawer
function openCustomersDrawer() {
  const drawer = document.getElementById("customersDrawer");
  const overlay = document.getElementById("customersOverlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    renderCustomersListUI();
  }
}

function closeCustomersDrawer() {
  const drawer = document.getElementById("customersDrawer");
  const overlay = document.getElementById("customersOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Render Customers List into Drawer Table
async function renderCustomersListUI(filteredList = null) {
  const tbody = document.getElementById("customersTableBody");
  if (!tbody) return;

  const customers = filteredList || (typeof getCustomerProfiles === "function" ? await getCustomerProfiles() : JSON.parse(localStorage.getItem("kinetipod_customers_db") || "[]"));
  
  // Update Counts & Stats
  const totalCount = customers.length;
  const maleCount = customers.filter(c => c.gender === "ชาย").length;
  const femaleCount = customers.filter(c => c.gender === "หญิง").length;
  const avgAge = totalCount > 0 ? Math.round(customers.reduce((sum, c) => sum + (c.age || 30), 0) / totalCount) : 0;
  const avgWeight = totalCount > 0 ? (customers.reduce((sum, c) => sum + (c.weight || 60), 0) / totalCount).toFixed(1) : 0;

  if (document.getElementById("totalCustomersCount")) document.getElementById("totalCustomersCount").innerText = totalCount;
  if (document.getElementById("customersCountBadge")) document.getElementById("customersCountBadge").innerText = totalCount;
  if (document.getElementById("statMaleCount")) document.getElementById("statMaleCount").innerText = maleCount;
  if (document.getElementById("statFemaleCount")) document.getElementById("statFemaleCount").innerText = femaleCount;
  if (document.getElementById("statAvgAge")) document.getElementById("statAvgAge").innerText = avgAge;
  if (document.getElementById("statAvgWeight")) document.getElementById("statAvgWeight").innerText = avgWeight + " kg";

  if (customers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center" style="padding: 24px; color: var(--text-secondary);">ยังไม่มีข้อมูลลูกค้าในระบบ</td></tr>`;
    return;
  }

  tbody.innerHTML = customers.map(c => `
    <tr>
      <td>
        <strong>${c.name}</strong>
        <div style="font-size: 0.72rem; color: var(--text-muted);">${c.id || '-'}</div>
      </td>
      <td>
        <span class="gender-tag ${c.gender === 'หญิง' ? 'female' : 'male'}">
          <i class="fa-solid ${c.gender === 'หญิง' ? 'fa-venus' : 'fa-mars'}"></i> ${c.gender || 'ชาย'}
        </span>
      </td>
      <td style="color: var(--primary-cyan); font-family: monospace;">${c.birthDate || '-'}</td>
      <td><span class="age-tag">${c.age || '-'}</span> ปี</td>
      <td><span class="weight-tag">${c.weight ? c.weight + ' กก.' : '-'}</span></td>
      <td>${c.phone || '-'}</td>
      <td><span style="font-size: 0.75rem; color: var(--text-secondary);">${c.customerType || 'นักวิ่ง'}</span></td>
    </tr>
  `).join('');
}

// Filter Customers Table by Search and Gender
async function filterCustomersTable() {
  const search = (document.getElementById("customerSearchInput")?.value || "").toLowerCase();
  const genderFilter = document.getElementById("customerGenderFilter")?.value || "all";
  const allCustomers = typeof getCustomerProfiles === "function" ? await getCustomerProfiles() : JSON.parse(localStorage.getItem("kinetipod_customers_db") || "[]");

  const filtered = allCustomers.filter(c => {
    const matchSearch = (c.name || "").toLowerCase().includes(search) || (c.phone || "").includes(search) || (c.email || "").toLowerCase().includes(search);
    const matchGender = genderFilter === "all" || c.gender === genderFilter;
    return matchSearch && matchGender;
  });

  renderCustomersListUI(filtered);
}

// Export Customers to JSON file
async function exportCustomersJSON() {
  const data = typeof getCustomerProfiles === "function" ? await getCustomerProfiles() : JSON.parse(localStorage.getItem("kinetipod_customers_db") || "[]");
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `kinetipod_customers_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  showToast("ส่งออกข้อมูลลูกค้า JSON สำเร็จ!", "success");
}

// Firebase Settings Modal
function openFirebaseSettingsModal() {
  const modal = document.getElementById("firebaseSettingsModalOverlay");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    const input = document.getElementById("firebaseConfigJsonInput");
    if (input && typeof firebaseConfig !== "undefined") {
      input.value = JSON.stringify(firebaseConfig, null, 2);
    }
  }
}

function closeFirebaseSettingsModal() {
  const modal = document.getElementById("firebaseSettingsModalOverlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function saveCustomFirebaseConfig() {
  const input = document.getElementById("firebaseConfigJsonInput");
  if (!input) return;
  try {
    const parsed = JSON.parse(input.value.trim());
    localStorage.setItem("kinetipod_firebase_custom_config", JSON.stringify(parsed));
    closeFirebaseSettingsModal();
    showToast("บันทึก Firebase Config สำเร็จ! กำลังรีโหลดเพื่อเชื่อมต่อ...", "success");
    setTimeout(() => window.location.reload(), 1200);
  } catch (e) {
    alert("รูปแบบ JSON ไม่ถูกต้อง กรุณาตรวจสอบวงเล็บและเครื่องหมายคำพูด");
  }
}

function resetDefaultFirebaseConfig() {
  localStorage.removeItem("kinetipod_firebase_custom_config");
  closeFirebaseSettingsModal();
  showToast("รีเซ็ตการตั้งค่า Firebase เป็นค่าเริ่มต้นแล้ว", "info");
  setTimeout(() => window.location.reload(), 1000);
}

// Initial customers count and user session update on load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (typeof renderCustomersListUI === "function") renderCustomersListUI();
    updateUserNavUI();
  }, 300);
});

// ==========================================
// 18. FIREBASE AUTHENTICATION UI & LOGIC
// ==========================================

function openAuthModal(tab = "login") {
  const modal = document.getElementById("authModalOverlay");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    switchAuthTab(tab);
  }
}

function closeAuthModal() {
  const modal = document.getElementById("authModalOverlay");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function switchAuthTab(tab) {
  // Hide all panes
  document.querySelectorAll(".auth-tab-pane").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".auth-tab-btn").forEach(b => b.classList.remove("active"));

  if (tab === "login") {
    document.getElementById("authPaneLogin")?.classList.add("active");
    document.getElementById("authTabBtnLogin")?.classList.add("active");
  } else if (tab === "register") {
    document.getElementById("authPaneRegister")?.classList.add("active");
    document.getElementById("authTabBtnRegister")?.classList.add("active");
  } else if (tab === "reset") {
    document.getElementById("authPaneReset")?.classList.add("active");
    document.getElementById("authTabBtnReset")?.classList.add("active");
  }
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === "password") {
    input.type = "text";
    btn.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  } else {
    input.type = "password";
    btn.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  }
}

function autoCalcRegAge(birthDateStr) {
  if (typeof calculateAgeFromBirthDate === "function") {
    const age = calculateAgeFromBirthDate(birthDateStr);
    const ageInput = document.getElementById("regAge");
    if (ageInput) ageInput.value = age;
  }
}

// Quick demo filler
function fillQuickLogin(email, password, label) {
  const emailInput = document.getElementById("loginEmail");
  const passInput = document.getElementById("loginPassword");
  if (emailInput && passInput) {
    emailInput.value = email;
    passInput.value = password;
    showToast(`เลือกบัญชีทดสอบ: ${label}`, "info");
  }
}

// Handle Email/Password Login
async function handleEmailPasswordLogin(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  try {
    if (typeof firebaseSignIn === "function") {
      const user = await firebaseSignIn(email, password);
      closeAuthModal();
      showToast(`👋 ยินดีต้อนรับคุณ "${user.name || user.email}" เข้าสู่ระบบ Firebase สำเร็จ!`, "success");
    }
  } catch (error) {
    alert("เข้าสู่ระบบไม่สำเร็จ: " + (error.message || "กรุณาตรวจสอบอีเมลและรหัสผ่าน"));
  }
}

// Handle Register with Health Profile
async function handleEmailPasswordRegister(event) {
  event.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("regConfirmPassword").value;

  if (password !== confirmPassword) {
    alert("รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน!");
    return;
  }

  const profileData = {
    name: name,
    gender: document.getElementById("regGender").value,
    birthDate: document.getElementById("regBirthDate").value,
    age: parseInt(document.getElementById("regAge").value, 10),
    weight: parseFloat(document.getElementById("regWeight").value),
    height: parseFloat(document.getElementById("regHeight").value) || 170,
    customerType: document.getElementById("regCustomerType").value
  };

  try {
    if (typeof firebaseSignUp === "function") {
      const user = await firebaseSignUp(email, password, profileData);
      closeAuthModal();
      showToast(`🎉 สมัครสมาชิกและบันทึกข้อมูลสุขภาพคุณ "${user.name}" เข้า Firebase สำเร็จ!`, "success");
    }
  } catch (error) {
    alert("สมัครสมาชิกไม่สำเร็จ: " + (error.message || "เกิดข้อผิดพลาดในการลงทะเบียน"));
  }
}

// Handle Google Sign In
async function handleGoogleLogin() {
  try {
    if (typeof firebaseSignInWithGoogle === "function") {
      const user = await firebaseSignInWithGoogle();
      if (user) {
        closeAuthModal();
        showToast(`🎉 เข้าสู่ระบบด้วย Google สำเร็จ! ยินดีต้อนรับคุณ ${user.name}`, "success");
      }
    }
  } catch (error) {
    console.warn("Google login popup closed or blocked:", error);
  }
}

// Handle Password Reset
async function handlePasswordResetSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("resetEmail").value.trim();

  try {
    if (typeof firebaseResetPassword === "function") {
      await firebaseResetPassword(email);
      showToast(`📧 ส่งลิงก์รีเซ็ตรหัสผ่านไปยังอีเมล ${email} เรียบร้อยแล้ว!`, "success");
      switchAuthTab("login");
    }
  } catch (error) {
    alert("ไม่สามารถส่งลิงก์ได้: " + error.message);
  }
}

// Toggle Dropdown or Open Modal
function toggleUserAuthDropdownOrOpenModal() {
  const user = currentUserProfile;
  if (!user) {
    window.location.href = "login.html";
  } else {
    const menu = document.getElementById("userDropdownMenu");
    if (menu) {
      menu.style.display = menu.style.display === "none" ? "block" : "none";
    }
  }
}

// Logout
async function handleUserLogout() {
  if (typeof firebaseSignOut === "function") {
    await firebaseSignOut();
  }
  const menu = document.getElementById("userDropdownMenu");
  if (menu) menu.style.display = "none";
  if (typeof showToast === "function") {
    showToast("🚪 ออกจากระบบเรียบร้อยแล้ว กำลังกลับสู่หน้าเข้าสู่ระบบ...", "info");
  }
  setTimeout(() => {
    window.location.href = "login.html";
  }, 350);
}

// Update User UI in Header
function updateUserNavUI() {
  const user = currentUserProfile;
  const label = document.getElementById("userNavLabel");
  const avatarSlot = document.getElementById("userNavAvatarSlot");
  const dropdownName = document.getElementById("userDropdownName");
  const dropdownEmail = document.getElementById("userDropdownEmail");
  const dropdownAvatar = document.getElementById("userDropdownAvatar");

  if (user) {
    const initials = (user.name || "U").slice(0, 2).toUpperCase();
    if (label) label.innerText = (user.name || "ผู้ใช้งาน").split(" ")[0];
    if (avatarSlot) avatarSlot.innerHTML = `<div class="user-avatar-circle" style="width: 24px; height: 24px; font-size: 0.68rem;">${initials}</div>`;
    if (dropdownName) dropdownName.innerText = user.name || "ผู้ใช้งาน";
    if (dropdownEmail) dropdownEmail.innerText = user.email || "-";
    if (dropdownAvatar) dropdownAvatar.innerText = initials;
  } else {
    if (label) label.innerText = "เข้าสู่ระบบ";
    if (avatarSlot) avatarSlot.innerHTML = `<i class="fa-solid fa-circle-user text-cyan"></i>`;
    const menu = document.getElementById("userDropdownMenu");
    if (menu) menu.style.display = "none";
  }
}

// Close User Dropdown when clicking outside
document.addEventListener("click", (e) => {
  const userAuthWrap = document.getElementById("userAuthNavWrap");
  const userMenu = document.getElementById("userDropdownMenu");
  if (userMenu && userAuthWrap && !userAuthWrap.contains(e.target)) {
    userMenu.style.display = "none";
  }
});



