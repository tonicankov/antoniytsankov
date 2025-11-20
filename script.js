// Content for each "app"
const apps = {
  about: {
    title: "About",
    html: `
      <p>I’m Antoniy – a software developer and markets-obsessed student.
      I care about building systems, understanding risk, and getting strong in both code and the gym.</p>
    `
  },
  code: {
    title: "Code & Projects",
    html: `
      <p>I mostly build in C#, .NET, Blazor, and use Python for data / quant work.</p>
      <ul>
        <li><strong>Project 1</strong> – short description, <a href="#">GitHub</a></li>
        <li><strong>Project 2</strong> – short description, <a href="#">GitHub</a></li>
      </ul>
    `
  },
  markets: {
    title: "Markets",
    html: `
      <p>Notes on trading, Polymarket, risk management, and experiments.
      Over time this turns into a public log of theses, post-mortems, and edges I’m exploring.</p>
    `
  },
  photos: {
    title: "Photos",
    html: `
      <p>Street photography and portraits. Eventually this will be a proper gallery.</p>
      <p><a href="#" target="_blank" rel="noreferrer">Instagram / photo gallery</a></p>
    `
  },
  principles: {
    title: "Principles",
    html: `
      <ul>
        <li>Sleep is leverage, not a luxury.</li>
        <li>No excuses – only choices and their consequences.</li>
        <li>Build things that compound: skill, capital, reputation.</li>
      </ul>
    `
  },
  now: {
    title: "Now",
    html: `
      <p>What I’m focused on right now: building real experience as a developer,
      sharpening my edge in markets, and staying consistent with lifting and deep work.</p>
    `
  },
  links: {
    title: "Links",
    html: `
      <ul>
        <li><a href="https://github.com/tonicankov" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/..." target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="#" target="_blank" rel="noreferrer">CV (PDF)</a></li>
      </ul>
    `
  },
  contact: {
    title: "Contact",
    html: `
      <p>Best way to reach me:</p>
      <ul>
        <li>Email: <a href="mailto:you@example.com">you@example.com</a></li>
      </ul>
    `
  },
  cv: {
    title: "CV",
    html: `
      <p>Link to your resume here:</p>
      <p><a href="#" target="_blank" rel="noreferrer">Open CV (PDF)</a></p>
    `
  },
  github: {
    title: "GitHub",
    html: `
      <p><a href="https://github.com/tonicankov" target="_blank" rel="noreferrer">github.com/tonicankov</a></p>
    `
  },
  linkedin: {
    title: "LinkedIn",
    html: `
      <p><a href="https://www.linkedin.com/in/..." target="_blank" rel="noreferrer">Your LinkedIn</a></p>
    `
  }
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
