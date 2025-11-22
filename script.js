// Content for each in-phone "app" that should open inside the overlay
const apps = {
  contacts: {
    title: "Contacts",
    html: `
      <div class="contacts-page">
        <div class="contacts-inner">
          <header class="contacts-header">
            <img src="icons/profilepic.jfif" alt="Antoniy Tsankov" class="contacts-photo" />
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
              <a href="https://www.instagram.com/tonicankov/" target="_blank"
                 class="contacts-row-value contacts-link-pill">
                <span class="contacts-link-icon">📸</span>
                <span>@tonicankov</span>
              </a>
            </div>

            <div class="contacts-row">
              <span class="contacts-row-label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/antoniy-tsankov-aba4b5240/" target="_blank"
                 class="contacts-row-value contacts-link-pill">
                <span class="contacts-link-icon">💼</span>
                <span>antoniy-tsankov</span>
              </a>
            </div>

            <div class="contacts-row">
              <span class="contacts-row-label">GitHub</span>
              <a href="https://github.com/tonicankov" target="_blank"
                 class="contacts-row-value contacts-link-pill">
                <span class="contacts-link-icon">🐙</span>
                <span>tonicankov</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    `
  },

  // later you can add:
  // gallery: { title: "Gallery", html: `...` },
  gallery: {
    title: "Gallery",
    html: `
      <div class="gallery-page">
        <header class="gallery-header">
          <h2 class="gallery-title">Antoniy's Photo Library</h2>
          <p class="gallery-subtitle">A few snapshots from my life.</p>
        </header>

        <!-- Featured image -->
        <section class="gallery-feature">
          <div class="gallery-feature-image-wrapper">
            <img src="photos/dog.jpg" alt="Featured photo" />
            <div class="gallery-feature-overlay">
              <span class="gallery-feature-label">Image of the Day</span>
              <a href="photos/dog.jpg" target="_blank" class="gallery-feature-button">
                View
              </a>
            </div>
          </div>
        </section>

        <!-- Grid of photos -->
        <section class="gallery-grid">
          <div class="gallery-grid-item">
            <img src="photos/dog.jpg" alt="Photo 1" />
          </div>
           <div class="gallery-grid-item">
            <img src="photos/razhojdam.jpg" alt="Photo 2" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/marathon.png" alt="Photo 5" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/paris.jpg" alt="Photo 8" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/italy2.jpg" alt="Photo 3" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/climb.jpg" alt="Photo 4" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/italy.jpg" alt="Photo 6" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/cool.jpg" alt="Photo 7" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/italy3.jpg" alt="Photo 8" />
          </div>
           <div class="gallery-grid-item">
            <img src="photos/tech.jpg" alt="Photo 7" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/cat.jpg" alt="Photo 3" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/glow.jpg" alt="Photo 4" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/boss.jpg" alt="Photo 6" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/cat2.jpg" alt="Photo 7" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/wow.jpg" alt="Photo 8" />
          </div>
          <div class="gallery-grid-item">
            <img src="photos/ezero.jpg" alt="Photo 7" />
          </div>
          
        </section>
      </div>
    `
  },notes: {
  title: "Notes",
  html: `
    <div class="notes-page">

      <!-- Recent Note -->
      <div class="note-card note-featured">
        <div class="note-badge">
          <span style="font-size: 0.65rem;">●</span>
          Recent Note
        </div>

        <h3 class="note-title">Thoughts on My Internship</h3>
        <p class="note-preview">The lessons, surprises, and realities I discovered...</p>

        <span class="note-date">Oct 12</span>
        <a class="note-open-button" href="#" onclick="openNote(0)">Open</a>
      </div>

      <!-- All Notes -->
      <div class="notes-section-title">All Notes</div>
      <div class="note-card">

        <div class="note-row" onclick="openNote(0)">
          <div>
            <div class="note-row-title">Thoughts on My Internship</div>
            <div class="note-row-preview">Lessons, surprises, and insights...</div>
          </div>
          <div class="note-row-arrow">›</div>
        </div>

        <div class="note-row" onclick="openNote(1)">
          <div>
            <div class="note-row-title">Introducing Myself</div>
            <div class="note-row-preview">A quick intro to who I am...</div>
          </div>
          <div class="note-row-arrow">›</div>
        </div>

      </div>

    </div>
  `
}
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

// Simple note data
const notesData = [
  {
    title: "Thoughts on My Internship",
    date: "Oct 12",
    content: `
      <h2>Thoughts on My Internship</h2>
      <p>This is where you write your real note.</p>
      <p>Talk about what happened, what you learned, anything.</p>
    `
  },
  {
    title: "Introducing Myself",
    date: "Oct 8",
    content: `
      <h2>Introducing Myself</h2>
      <p>A short introduction note.</p>
    `
  }
];

// Opens a note
function openNote(index) {
  const note = notesData[index];

  document.getElementById("app-content").innerHTML = `
    <div class="notes-page">
      <h2 style="text-align:center; margin-bottom:1rem;">${note.title}</h2>
      <p class="note-date">${note.date}</p>
      <div style="margin-top:1rem; line-height:1.5;">${note.content}</div>
      <br/><br/>
      <a href="#" class="note-open-button" onclick="loadApp('notes')">Back</a>
    </div>
  `;
}