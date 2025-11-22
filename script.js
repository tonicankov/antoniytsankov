// Content for each in-phone "app" that should open inside the overlay
const apps = {
  contacts: {
    title: "Contacts",
    html: `
      <div class="contacts-page">
        <header class="contacts-header">
          <img src="icons/1741991268843.jfif" alt="Antoniy Tsankov" class="contacts-photo" />
          <h2 class="contacts-name">Antoniy Tsankov</h2>
          <p class="contacts-subtitle"></p>
        </header>

        <section class="contacts-section">
          <h3 class="contacts-section-title">Personal Info</h3>

          <div class="contacts-row">
            <span class="contacts-row-label">Email</span>
            <a href="mailto:tonicankov@gmail.com" class="contacts-row-value">
              tonicankov@gmail.com
            </a>
          </div>

          <div class="contacts-row">
            <span class="contacts-row-label">Location</span>
            <span class="contacts-row-value">Eindhoven</span>
          </div>

          <div class="contacts-row">
            <span class="contacts-row-label">Birthday</span>
            <span class="contacts-row-value">17 May</span>
          </div>
        </section>

        <section class="contacts-section">
          <h3 class="contacts-section-title">Education</h3>

          <div class="contacts-row">
            <span class="contacts-row-label">University</span>
            <span class="contacts-row-value">
              Eindhoven University of Technology
            </span>
          </div>

          <div class="contacts-row">
            <span class="contacts-row-label">Major</span>
            <span class="contacts-row-value">
              Computer Science &amp; Engineering
            </span>
          </div>
        </section>

        <section class="contacts-section">
          <h3 class="contacts-section-title">Links</h3>

          <div class="contacts-row">
            <span class="contacts-row-label">Instagram</span>
            <a href="https://www.instagram.com/tonicankov/" target="_blank" class="contacts-row-value">
              instagram.com/tonicankov
            </a>
          </div>

          <div class="contacts-row">
            <span class="contacts-row-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/antoniy-tsankov-aba4b5240/" target="_blank" class="contacts-row-value">
              linkedin.com/in/antoniy-tsankov-aba4b5240
            </a>
          </div>

          <div class="contacts-row">
            <span class="contacts-row-label">GitHub</span>
            <a href="https://github.com/tonicankov" target="_blank" class="contacts-row-value">
              github.com/tonicankov
            </a>
          </div>
        </section>
      </div>
    `
  }

  // later you can add:
  // gallery: { title: "Gallery", html: `...` },
  // projects: { ... } etc.
};


const overlay = document.getElementById("app-overlay");
const appTitle = document.getElementById("app-title");
const appContent = document.getElementById("app-content");
const appClose = document.getElementById("app-close");
const lockOverlay = document.getElementById("lock-overlay");
const phoneScreen = document.getElementById("phone-screen");

function openApp(key) {
  // If still locked, first unlock
  if (lockOverlay.classList.contains("active")) {
    lockOverlay.classList.remove("active");
  }
  const app = apps[key];
  if (!app) return;
  appTitle.textContent = app.title;
  appContent.innerHTML = app.html;
  overlay.classList.add("open");
}

document.querySelectorAll("[data-app]").forEach(btn => {
  btn.addEventListener("click", () => openApp(btn.dataset.app));
});

appClose.addEventListener("click", () => {
  overlay.classList.remove("open");
});

overlay.addEventListener("click", e => {
  if (e.target === overlay) {
    overlay.classList.remove("open");
  }
});

// Unlock by tapping anywhere on the screen
// Unlock by tapping the lock overlay
lockOverlay.addEventListener("click", () => {
  if (lockOverlay.classList.contains("active")) {
    lockOverlay.classList.remove("active");
  }
});

// Status bar + lock screen time
function updateTime() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  const statusEl = document.getElementById("status-time");
  const lockEl = document.getElementById("lock-time");
  if (statusEl) statusEl.textContent = `${h}:${m}`;
  if (lockEl) lockEl.textContent = `${h}:${m}`;
}
updateTime();
setInterval(updateTime, 60 * 1000);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
