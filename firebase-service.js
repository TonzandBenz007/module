/**
 * Firebase Firestore Customer & Biometrics Data Service
 * Supports:
 * - Customer Profile (เพศ, อายุ, น้ำหนัก, วัน เดือน ปี เกิด, ส่วนสูง, เบอร์โทร, อีเมล)
 * - Order & Rental Transactions Sync
 * - Real-time Firestore Listeners & Offline LocalStorage Fallback
 */

// Live Firebase Configuration for project: module-ba2c1
let firebaseConfig = {
  apiKey: "AIzaSyCPzWx_P_3mZ_-oobzaZb8twNfEq-VPtFA",
  authDomain: "module-ba2c1.firebaseapp.com",
  projectId: "module-ba2c1",
  storageBucket: "module-ba2c1.firebasestorage.app",
  messagingSenderId: "732162698110",
  appId: "1:732162698110:web:c7c03f03968cc1f253212f",
  measurementId: "G-QW11LKKST5"
};

// Check if user saved custom config in localStorage
const savedCustomConfig = localStorage.getItem("kinetipod_firebase_custom_config");
if (savedCustomConfig) {
  try {
    firebaseConfig = JSON.parse(savedCustomConfig);
  } catch (e) {
    console.warn("Invalid saved custom firebase config", e);
  }
}

let db = null;
let auth = null;
let isFirebaseConnected = false;
let currentUserProfile = JSON.parse(localStorage.getItem("kinetipod_current_user") || "null");

function isRealFirebaseConfig() {
  return firebaseConfig && 
         firebaseConfig.apiKey && 
         !firebaseConfig.apiKey.includes("DemoKey") && 
         !firebaseConfig.apiKey.includes("REPLACE");
}

// Initialize Firebase App, Auth & Firestore
function initFirebaseApp() {
  try {
    const hasRealConfig = isRealFirebaseConfig();
    if (typeof firebase !== "undefined") {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      if (hasRealConfig) {
        db = firebase.firestore();
        auth = firebase.auth();
        isFirebaseConnected = true;
        console.log("🔥 Firebase Auth & Firestore initialized with Live Credentials");
        updateFirebaseStatusUI(true, "เชื่อมต่อ Firebase เรียบร้อย");
        setupFirebaseAuthListener();
      } else {
        isFirebaseConnected = false;
        console.log("⚡ KINETIPOD Running in High-Speed Local & Offline Mode (Demo Config)");
        updateFirebaseStatusUI(false, "โหมดจำลอง / Local Cache");
      }
    } else {
      isFirebaseConnected = false;
      updateFirebaseStatusUI(false, "โหมดจำลอง / Local Cache");
    }
  } catch (error) {
    console.warn("Firebase init error (Using offline mode):", error.message);
    isFirebaseConnected = false;
    updateFirebaseStatusUI(false, "โหมดจำลอง / Local Cache");
  }
}

// Setup Auth State Listener
function setupFirebaseAuthListener() {
  if (auth) {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("👤 Firebase User Logged In:", user.email);
        // Try to fetch extended profile from Firestore
        let profile = currentUserProfile;
        if (db) {
          try {
            const doc = await db.collection("users").doc(user.uid).get();
            if (doc.exists) {
              profile = { uid: user.uid, email: user.email, ...doc.data() };
            }
          } catch (e) {
            console.warn("Could not fetch user profile from firestore:", e.message);
          }
        }
        if (!profile) {
          profile = {
            uid: user.uid,
            name: user.displayName || user.email.split('@')[0],
            email: user.email,
            gender: "ชาย",
            age: 30,
            weight: 65,
            birthDate: "1995-01-01"
          };
        }
        setCurrentUser(profile);
      } else {
        console.log("👤 User Logged Out");
        if (!localStorage.getItem("kinetipod_current_user_keep_demo")) {
          // If not in demo mode
          setCurrentUser(null);
        }
      }
    });
  }
}

// Set Current User State & Update UI
function setCurrentUser(user) {
  currentUserProfile = user;
  if (user) {
    localStorage.setItem("kinetipod_current_user", JSON.stringify(user));
  } else {
    localStorage.removeItem("kinetipod_current_user");
    localStorage.removeItem("kinetipod_current_user_keep_demo");
  }
  if (typeof updateUserNavUI === "function") {
    updateUserNavUI();
  }
}

/**
 * Firebase Auth: Sign Up with Email, Password & Health Biometrics
 */
async function firebaseSignUp(email, password, profileData) {
  let uid = "USR-" + Date.now().toString().slice(-6);
  let userRecord = {
    uid: uid,
    name: profileData.name || email.split('@')[0],
    email: email,
    gender: profileData.gender || "ชาย",
    birthDate: profileData.birthDate || "1995-01-01",
    age: parseInt(profileData.age, 10) || 30,
    weight: parseFloat(profileData.weight) || 65.0,
    height: parseFloat(profileData.height) || 170.0,
    phone: profileData.phone || "-",
    customerType: profileData.customerType || "นักวิ่งซ้อมประจำ",
    createdAt: new Date().toISOString()
  };

  if (auth && isFirebaseConnected) {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      uid = userCredential.user.uid;
      userRecord.uid = uid;

      // Update Display Name in Firebase Auth
      await userCredential.user.updateProfile({
        displayName: userRecord.name
      });

      // Save full profile to Firestore 'users' & 'customers'
      if (db) {
        await db.collection("users").doc(uid).set(userRecord);
        await db.collection("customers").doc(uid).set(userRecord);
      }
    } catch (error) {
      console.warn("Firebase Auth Register Error:", error);
      throw error;
    }
  }

  // Also save to local customer db and set current user
  await saveCustomerToFirebase(userRecord);
  setCurrentUser(userRecord);
  return userRecord;
}

/**
 * Firebase Auth: Sign In with Email & Password
 */
async function firebaseSignIn(email, password) {
  if (auth && isFirebaseConnected) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const uid = userCredential.user.uid;
      let profile = {
        uid: uid,
        name: userCredential.user.displayName || email.split('@')[0],
        email: email,
        gender: "ชาย",
        age: 30,
        weight: 65
      };

      if (db) {
        try {
          const doc = await db.collection("users").doc(uid).get();
          if (doc.exists) {
            profile = { uid, ...doc.data() };
          }
        } catch (e) {
          console.warn("Firestore fetch error:", e);
        }
      }

      setCurrentUser(profile);
      return profile;
    } catch (error) {
      console.warn("Firebase SignIn Error:", error);
      throw error;
    }
  } else {
    // Offline / Demo Simulation
    const existingCustomers = JSON.parse(localStorage.getItem("kinetipod_customers_db") || "[]");
    let matched = existingCustomers.find(c => c.email === email);
    if (!matched) {
      matched = {
        uid: "DEMO-" + Date.now().toString().slice(-4),
        name: email.split('@')[0],
        email: email,
        gender: "ชาย",
        age: 30,
        weight: 65,
        birthDate: "1995-01-01"
      };
    }
    localStorage.setItem("kinetipod_current_user_keep_demo", "true");
    setCurrentUser(matched);
    return matched;
  }
}

/**
 * Firebase Auth: Exact Google Sign-In & Registration Modal (Matching Reference UI)
 */
let googleAuthResolver = null;

function ensureGoogleOAuthDOM() {
  if (document.getElementById("googleOAuthOverlay")) return;

  const modalHtml = `
    <div class="google-oauth-overlay" id="googleOAuthOverlay" onclick="if(event.target === this) closeGoogleOAuthModal()">
      <div class="google-oauth-wrapper">
        <div class="google-oauth-card">
          <button type="button" class="google-oauth-close" onclick="closeGoogleOAuthModal()" title="ปิด">&times;</button>
          
          <!-- Left Column -->
          <div class="google-oauth-col-left">
            <div class="google-brand-logo-wrap">
              <svg viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>

            <h1 class="google-signin-header-title">ลงชื่อเข้าใช้</h1>
            <p class="google-signin-subdesc">ด้วยบัญชี Google เพื่อไปยัง Gmail บัญชีนี้จะพร้อมใช้งานกับแอปอื่นๆ ของ Google ในเบราว์เซอร์</p>
          </div>

          <!-- Right Column -->
          <div class="google-oauth-col-right">
            <div>
              <!-- Material Floating Outlined Input -->
              <div class="google-floating-wrap">
                <input type="text" id="googleEmailInput" class="google-floating-input" value="runner.pro@gmail.com" placeholder=" " autofocus onkeydown="if(event.key === 'Enter') handleGoogleOAuthNextSubmit()">
                <label class="google-floating-label">อีเมลหรือโทรศัพท์</label>
              </div>

              <a href="javascript:void(0)" class="google-forgot-email-link" onclick="handleGoogleForgotEmail()">หากลืมอีเมล</a>

              <p class="google-guest-mode-note">
                หากไม่ใช่คอมพิวเตอร์ของคุณ ให้ใช้โหมดผู้มาเยือนเพื่อลงชื่อเข้าใช้แบบส่วนตัว <a href="javascript:void(0)" onclick="alert('โหมดผู้มาเยือน: ระบบจะไม่บันทึกประวัติการท่องเว็บไว้ในอุปกรณ์นี้')">ดูข้อมูลเพิ่มเติมเกี่ยวกับการใช้โหมดผู้มาเยือน</a>
              </p>

              <!-- Quick Demo Account Suggestions -->
              <div class="google-quick-accounts-strip">
                <div class="google-quick-title"><i class="fa-solid fa-user-check"></i> หรือเลือกบัญชีด่วน:</div>
                <div class="google-quick-items">
                  <button type="button" class="google-quick-acc-btn" onclick="fillAndSubmitGoogleEmail('runner.pro@gmail.com', 'กิตติศักดิ์ พัฒนาการ', 'ชาย', 32, 68.5, '1994-08-12', 'นักวิ่งซ้อมประจำ')">
                    🏃 runner.pro@gmail.com
                  </button>
                  <button type="button" class="google-quick-acc-btn" onclick="fillAndSubmitGoogleEmail('vipada.health@gmail.com', 'พญ. วิภาดา มณีรัตน์', 'หญิง', 38, 54.0, '1988-11-25', 'ผู้ป่วยพักฟื้น/กายภาพ')">
                    🩺 vipada.health@gmail.com
                  </button>
                  <button type="button" class="google-quick-acc-btn" onclick="fillAndSubmitGoogleEmail('coach.thanapol@gmail.com', 'โค้ชธนพล สปีดรันเนอร์', 'ชาย', 36, 64.0, '1990-03-19', 'นักวิ่งซ้อมประจำ')">
                    🥇 coach.thanapol@gmail.com
                  </button>
                </div>
              </div>
            </div>

            <!-- Bottom Action Row -->
            <div class="google-actions-bar">
              <button type="button" class="google-btn-create" onclick="handleGoogleCreateAccount()">สร้างบัญชี</button>
              <button type="button" class="google-btn-next" onclick="handleGoogleOAuthNextSubmit()">
                <span>ถัดไป</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Outside Bottom Bar -->
        <div class="google-oauth-bottom-bar">
          <div class="google-lang-selector">
            <span>ไทย</span>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div class="google-bottom-links">
            <a href="javascript:void(0)" onclick="alert('ศูนย์ช่วยเหลือ Google Account')">ความช่วยเหลือ</a>
            <a href="javascript:void(0)" onclick="alert('นโยบายความเป็นส่วนตัว Google')">ความเป็นส่วนตัว</a>
            <a href="javascript:void(0)" onclick="alert('ข้อกำหนดในการให้บริการ Google')">ข้อกำหนด</a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

function openGoogleOAuthModal() {
  ensureGoogleOAuthDOM();
  const overlay = document.getElementById("googleOAuthOverlay");
  if (overlay) {
    overlay.classList.add("active");
    const input = document.getElementById("googleEmailInput");
    if (input) {
      setTimeout(() => input.focus(), 150);
    }
  }
}

function closeGoogleOAuthModal() {
  const overlay = document.getElementById("googleOAuthOverlay");
  if (overlay) {
    overlay.classList.remove("active");
  }
  if (googleAuthResolver) {
    googleAuthResolver(null);
    googleAuthResolver = null;
  }
}

function handleGoogleForgotEmail() {
  const email = prompt("กรุณาระบุหมายเลขโทรศัพท์หรืออีเมลสำรองสำหรับการกู้คืนบัญชี Google:", "089-123-4567");
  if (email) {
    alert("ระบบได้ส่งรหัสยืนยันไปยัง " + email + " แล้ว");
  }
}

function handleGoogleCreateAccount() {
  const name = prompt("กรอกชื่อ-นามสกุลสำหรับสร้างบัญชี Google ใหม่:", "นักวิ่ง สปีดพลัส");
  if (!name) return;
  const username = name.toLowerCase().replace(/[^a-z0-9]/g, "") || "user" + Date.now().toString().slice(-4);
  const email = `${username}@gmail.com`;
  fillAndSubmitGoogleEmail(email, name, "ชาย", 28, 65.0, "1998-05-10", "นักวิ่งซ้อมประจำ");
}

function fillAndSubmitGoogleEmail(email, name, gender = "ชาย", age = 30, weight = 65.0, birthDate = "1995-01-01", customerType = "นักวิ่งซ้อมประจำ") {
  const input = document.getElementById("googleEmailInput");
  if (input) input.value = email;
  selectGoogleAccount(email, name, gender, age, weight, birthDate, customerType);
}

function handleGoogleOAuthNextSubmit() {
  const input = document.getElementById("googleEmailInput");
  if (!input) return;
  const emailOrPhone = input.value.trim();
  if (!emailOrPhone) {
    alert("กรุณากรอกอีเมลหรือหมายเลขโทรศัพท์");
    input.focus();
    return;
  }

  let email = emailOrPhone;
  if (!email.includes("@")) {
    email = email + "@gmail.com";
  }

  let name = email.split('@')[0].replace(/[._-]/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  if (email.toLowerCase().includes("runner")) name = "กิตติศักดิ์ พัฒนาการ";
  else if (email.toLowerCase().includes("vipada")) name = "พญ. วิภาดา มณีรัตน์";
  else if (email.toLowerCase().includes("coach") || email.toLowerCase().includes("thanapol")) name = "โค้ชธนพล สปีดรันเนอร์";

  selectGoogleAccount(email, name);
}

async function selectGoogleAccount(email, name, gender = "ชาย", age = 30, weight = 65, birthDate = "1995-01-01", customerType = "นักวิ่งซ้อมประจำ") {
  const uid = "GOOGLE-" + (email.split('@')[0]).replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  const userProfile = {
    uid: uid,
    name: name,
    email: email,
    gender: gender,
    age: age,
    weight: weight,
    height: 172,
    birthDate: birthDate,
    customerType: customerType,
    photoURL: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=00F0FF&color=070B14&bold=true`,
    provider: "google.com",
    createdAt: new Date().toISOString()
  };

  // Sync to Firestore in background without blocking UI
  if (db && isFirebaseConnected) {
    db.collection("users").doc(uid).set(userProfile, { merge: true }).catch(e => console.warn("Firestore sync:", e));
    db.collection("customers").doc(uid).set(userProfile, { merge: true }).catch(e => console.warn("Firestore sync:", e));
  }

  localStorage.setItem("kinetipod_current_user_keep_demo", "true");
  setCurrentUser(userProfile);
  saveCustomerToFirebase(userProfile);

  closeGoogleOAuthModal();

  if (googleAuthResolver) {
    googleAuthResolver(userProfile);
    googleAuthResolver = null;
  }

  // Instant Feedback Toast
  if (typeof showToast === "function") {
    showToast(`🎉 ลงชื่อเข้าใช้ด้วย Google สำเร็จ! ยินดีต้อนรับคุณ ${userProfile.name}`, "success");
  }

  // Update UI if on login.html
  if (typeof checkPageAuthState === "function") {
    checkPageAuthState();
  }
  if (typeof closeAuthModal === "function") {
    closeAuthModal();
  }

  return userProfile;
}

/**
 * Main Firebase Google Sign-In Entrypoint
 */
async function firebaseSignInWithGoogle() {
  const isRealConfig = firebaseConfig && firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("DemoKey");

  if (auth && isFirebaseConnected && isRealConfig && typeof firebase.auth.GoogleAuthProvider !== "undefined") {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      const user = result.user;
      const profile = {
        uid: user.uid,
        name: user.displayName || user.email.split('@')[0],
        email: user.email,
        photoURL: user.photoURL,
        gender: "ชาย",
        age: 30,
        weight: 65,
        birthDate: "1995-01-01",
        customerType: "นักวิ่งซ้อมประจำ",
        provider: "google.com",
        createdAt: new Date().toISOString()
      };

      if (db) {
        await db.collection("users").doc(user.uid).set(profile, { merge: true });
        await db.collection("customers").doc(user.uid).set(profile, { merge: true });
      }

      setCurrentUser(profile);
      await saveCustomerToFirebase(profile);
      return profile;
    } catch (error) {
      console.warn("Real Google Sign In Error, fallback to Google Sign-In UI:", error.message);
      openGoogleOAuthModal();
      return new Promise((resolve) => {
        googleAuthResolver = resolve;
      });
    }
  } else {
    // Open Exact Google Sign-In Modal matching reference screenshot
    openGoogleOAuthModal();
    return new Promise((resolve) => {
      googleAuthResolver = resolve;
    });
  }
}

/**
 * Firebase Auth: Sign Out
 */
async function firebaseSignOut() {
  if (auth && isFirebaseConnected) {
    try {
      await auth.signOut();
    } catch (e) {
      console.warn("SignOut error:", e);
    }
  }
  setCurrentUser(null);
}

/**
 * Firebase Auth: Reset Password Email
 */
async function firebaseResetPassword(email) {
  if (auth && isFirebaseConnected) {
    return await auth.sendPasswordResetEmail(email);
  } else {
    // Demo simulate
    return true;
  }
}

// Update Connection Indicator Badge in UI
function updateFirebaseStatusUI(connected, statusText) {
  const badge = document.getElementById("firebaseStatusBadge");
  if (badge) {
    badge.className = connected ? "fb-badge connected" : "fb-badge offline";
    badge.innerHTML = `<span class="fb-dot"></span> <i class="fa-solid fa-fire"></i> ${statusText}`;
  }
}

/**
 * Save or Update Customer Profile in Firebase Firestore
 * @param {Object} customerData 
 * - name, gender (เพศ), birthDate (วันเกิด), age (อายุ), weight (น้ำหนัก), height, phone, email, type
 */
async function saveCustomerToFirebase(customerData) {
  const customerRecord = {
    id: customerData.id || "CUST-" + Date.now().toString().slice(-6),
    name: customerData.name || "ไม่ระบุชื่อ",
    gender: customerData.gender || "ชาย", // เพศ
    birthDate: customerData.birthDate || "1995-05-15", // วัน เดือน ปี เกิด
    age: parseInt(customerData.age, 10) || calculateAgeFromBirthDate(customerData.birthDate), // อายุ
    weight: parseFloat(customerData.weight) || 65.0, // น้ำหนัก (กก.)
    height: parseFloat(customerData.height) || 172.0, // ส่วนสูง (ซม.)
    phone: customerData.phone || "-",
    email: customerData.email || "-",
    customerType: customerData.customerType || "นักวิ่งซ้อมประจำ",
    runningGoal: customerData.runningGoal || "พัฒนาสปีดและป้องกันอาการบาดเจ็บ",
    recordedAt: new Date().toISOString(),
    timestamp: typeof firebase !== "undefined" && firebase.firestore ? firebase.firestore.FieldValue.serverTimestamp() : new Date()
  };

  // 1. Always save to LocalStorage (Fast Cache)
  const localCustomers = JSON.parse(localStorage.getItem("kinetipod_customers_db") || "[]");
  const existingIdx = localCustomers.findIndex(c => c.phone === customerRecord.phone && customerRecord.phone !== "-");
  if (existingIdx >= 0) {
    localCustomers[existingIdx] = { ...localCustomers[existingIdx], ...customerRecord };
  } else {
    localCustomers.unshift(customerRecord);
  }
  localStorage.setItem("kinetipod_customers_db", JSON.stringify(localCustomers));

  // 2. Save to Firebase Firestore in background if online
  if (isFirebaseConnected && db) {
    db.collection("customers").doc(customerRecord.id).set(customerRecord, { merge: true })
      .then(() => console.log("✅ Customer saved to Firestore:", customerRecord.id))
      .catch(err => console.warn("Could not push to remote Firestore:", err.message));
  }

  // Refresh UI table if open
  if (typeof renderCustomersListUI === "function") {
    renderCustomersListUI();
  }
  return customerRecord;
}

/**
 * Fetch all customers (From Firestore or Local fallback)
 */
async function getCustomerProfiles() {
  if (isFirebaseConnected && db) {
    try {
      const snapshot = await db.collection("customers").orderBy("recordedAt", "desc").limit(50).get();
      if (!snapshot.empty) {
        const list = [];
        snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
        return list;
      }
    } catch (e) {
      console.warn("Firestore fetch error, fallback to local:", e.message);
    }
  }
  return JSON.parse(localStorage.getItem("kinetipod_customers_db") || "[]");
}

/**
 * Calculate age automatically from birth date string (YYYY-MM-DD)
 */
function calculateAgeFromBirthDate(birthDateStr) {
  if (!birthDateStr) return 30;
  const birth = new Date(birthDateStr);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return isNaN(age) || age <= 0 ? 30 : age;
}

// Seed initial demo customers if empty
function seedDemoCustomersIfEmpty() {
  const existing = JSON.parse(localStorage.getItem("kinetipod_customers_db") || "[]");
  if (existing.length === 0) {
    const demoData = [
      {
        id: "CUST-100821",
        name: "กิตติศักดิ์ พัฒนาการ",
        gender: "ชาย",
        birthDate: "1994-08-12",
        age: 32,
        weight: 68.5,
        height: 175,
        phone: "089-123-4567",
        email: "runner.pro@gmail.com",
        customerType: "นักวิ่งซ้อมประจำ",
        runningGoal: "ซ้อมมาราธอน Sub-3.30 & วัด Pace ลู่วิ่ง",
        recordedAt: new Date(Date.now() - 86400000 * 2).toISOString()
      },
      {
        id: "CUST-100822",
        name: "วิภาดา มณีรัตน์",
        gender: "หญิง",
        birthDate: "1988-11-25",
        age: 38,
        weight: 54.0,
        height: 162,
        phone: "081-987-6543",
        email: "vipada.rehab@yahoo.com",
        customerType: "ผู้ป่วยพักฟื้น/กายภาพ",
        runningGoal: "ฟื้นฟูข้อเข่าหลังผ่าตัด & ฝึกทิ้งน้ำหนัก",
        recordedAt: new Date(Date.now() - 86400000 * 5).toISOString()
      },
      {
        id: "CUST-100823",
        name: "ธนพล นันทกานต์",
        gender: "ชาย",
        birthDate: "1990-03-19",
        age: 36,
        weight: 64.0,
        height: 178,
        phone: "086-555-4321",
        email: "coach.thanapol@speedrun.th",
        customerType: "นักวิ่งซ้อมประจำ",
        runningGoal: "วัดรอบขา Cadence 185 SPM & องศาข้อเท้า",
        recordedAt: new Date(Date.now() - 86400000 * 8).toISOString()
      }
    ];
    localStorage.setItem("kinetipod_customers_db", JSON.stringify(demoData));
  }
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  seedDemoCustomersIfEmpty();
  initFirebaseApp();
});
