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
},music: {
    title: "Music",
    html: `
      <div class="music-page">
        <header class="music-header">
          <div>
            <h2 class="music-title">Antoniy's Music</h2>
            <p class="music-subtitle">Current rotation and recent plays.</p>
          </div>
          <div class="music-profile">
            <img src="icons/profilepic.jfif" alt="Antoniy" />
          </div>
        </header>

        <section class="music-nowplaying-card">
          <div class="music-nowplaying-header">Now Playing</div>
          <div class="music-nowplaying-main">
            <div class="music-album-art">
              <!-- point this to any cover image you like -->
              <img src="music/kendrick.jpg" alt="Now playing cover" />
            </div>
            <div class="music-track-text">
              <div class="music-track-title">Sing About Me, I’m Dying of Thirst</div>
              <div class="music-track-artist">Kendrick Lamar</div>
            </div>
            <button class="music-play-button" type="button">
              <span class="music-play-button-icon">▶</span>
            </button>
          </div>
          <div class="music-progress">
            <div class="music-progress-bar"></div>
          </div>
        </section>

        <section class="music-recent-card">
          <div class="music-recent-header">
            <div class="music-recent-title">Recent Plays</div>
            <div class="music-recent-meta">5 songs</div>
          </div>

          <div class="music-recent-list">
            <div class="music-song-row">
              <div class="music-song-main">
                <div class="music-song-cover">
                  <img src="music/tears.jfif" alt="Song cover" />
                </div>
                <div>
                  <div class="music-song-title">Everybody Wants to Rule the World</div>
                  <div class="music-song-artist">Tears for Fears</div>
                </div>
              </div>
              <div class="music-song-arrow">›</div>
            </div>

            <div class="music-song-row">
              <div class="music-song-main">
                <div class="music-song-cover">
                  <img src="music/50.jfif" alt="Song cover" />
                </div>
                <div>
                  <div class="music-song-title">Life's on The Line</div>
                  <div class="music-song-artist">50 Cent</div>
                </div>
              </div>
              <div class="music-song-arrow">›</div>
            </div>

            <div class="music-song-row">
              <div class="music-song-main">
                <div class="music-song-cover">
                  <img src="music/umb.jfif" alt="Song cover" />
                </div>
                <div>
                  <div class="music-song-title">Umbrella</div>
                  <div class="music-song-artist">Rihanna</div>
                </div>
              </div>
              <div class="music-song-arrow">›</div>
            </div>

            <div class="music-song-row">
              <div class="music-song-main">
                <div class="music-song-cover">
                  <img src="music/medi.jpg" alt="Song cover" />
                </div>
                <div>
                  <div class="music-song-title">Nadezhda</div>
                  <div class="music-song-artist">Medi</div>
                </div>
              </div>
              <div class="music-song-arrow">›</div>
            </div>

            <div class="music-song-row">
              <div class="music-song-main">
                <div class="music-song-cover">
                  <img src="music/journey.jfif" alt="Song cover" />
                </div>
                <div>
                  <div class="music-song-title">Don't Stop Believin'</div>
                  <div class="music-song-artist">Journey</div>
                </div>
              </div>
              <div class="music-song-arrow">›</div>
            </div>
          </div>
        </section>
      </div>
    `
  },

  fitness: {
    title: "Gym",
    html: `
      <div class="fitness-page">
        <header class="fitness-header">
          <h2 class="fitness-title">Training &amp; Gym</h2>
          <p class="fitness-subtitle">
            The sports I train and the lifts I care about.
          </p>
        </header>

        <section class="fitness-section">
          <h3 class="fitness-section-title">Sports I Train</h3>

          <div class="fitness-card">
            <div class="fitness-sport-name">Boxing</div>
            <div class="fitness-sport-label">Combat sport · Conditioning</div>
            <p class="fitness-sport-desc">
              Multiple sessions per week focused on timing, footwork and conditioning.
              It keeps my cardio honest and forces real sharpness under fatigue.
            </p>
            <div class="fitness-tags">
              <span class="fitness-tag">Pad work</span>
              <span class="fitness-tag">Sparring</span>
              <span class="fitness-tag">Footwork</span>
            </div>
          </div>

          <div class="fitness-card">
            <div class="fitness-sport-name">Strength Training</div>
            <div class="fitness-sport-label">Gym · Compound lifts</div>
            <p class="fitness-sport-desc">
              Base is heavy compounds: bench, squats, rows, weighted pull-ups and shoulder work.
              Goal is dense, athletic strength that transfers to everything else.
            </p>
            <div class="fitness-tags">
              <span class="fitness-tag">Bench</span>
              <span class="fitness-tag">Squats</span>
              <span class="fitness-tag">Pull-ups</span>
            </div>
          </div>

          <div class="fitness-card">
            <div class="fitness-sport-name">Conditioning</div>
            <div class="fitness-sport-label">Engine work</div>
            <p class="fitness-sport-desc">
              Intervals, bag rounds and roadwork to keep the engine high enough
              for hard rounds and long days without fading.
            </p>
            <div class="fitness-tags">
              <span class="fitness-tag">Intervals</span>
              <span class="fitness-tag">Roadwork</span>
              <span class="fitness-tag">Jump rope</span>
            </div>
          </div>
        </section>

        <section class="fitness-section">
          <h3 class="fitness-section-title">Key PRs (fill in later)</h3>
          <div class="fitness-card">
            <ul class="fitness-pr-list">
              <li class="fitness-pr-item">
                <span class="fitness-pr-lift">Bench Press</span>
                <span class="fitness-pr-value">— kg</span>
              </li>
              <li class="fitness-pr-item">
                <span class="fitness-pr-lift">Squat</span>
                <span class="fitness-pr-value">— kg</span>
              </li>
              <li class="fitness-pr-item">
                <span class="fitness-pr-lift">Deadlift</span>
                <span class="fitness-pr-value">— kg</span>
              </li>
              <li class="fitness-pr-item">
                <span class="fitness-pr-lift">Weighted Pull-ups</span>
                <span class="fitness-pr-value">BW + — kg</span>
              </li>
              <li class="fitness-pr-item">
                <span class="fitness-pr-lift">Best 1 km run</span>
                <span class="fitness-pr-value">— : —</span>
              </li>
            </ul>
            <p class="fitness-pr-note">
              Replace the dashes with your real numbers when you want it locked in.
            </p>
          </div>
        </section>
      </div>
    `
  },
   books: {
  title: "Books",
  html: `
    <div class="books-page">
      <header class="books-header">
        <h2 class="books-title">Library</h2>
        <p class="books-subtitle">Books, movies and series I’ve actually finished.</p>
      </header>

      <section class="books-section">
        <h3 class="books-section-title">Books</h3>
        <div class="books-card">

          <div class="media-row" onclick="openMediaItem(0)">
            <div class="media-main">
              <div class="media-cover">BK</div>
              <div>
                <div class="media-text-title">Principles</div>
                <div class="media-text-meta">Ray Dalio</div>
                <div class="media-text-rating">★★★★★ · Must read</div>
              </div>
            </div>
            <div class="media-arrow">›</div>
          </div>

          <div class="media-row" onclick="openMediaItem(1)">
            <div class="media-main">
              <div class="media-cover">BK</div>
              <div>
                <div class="media-text-title">The Almanack of Naval Ravikant</div>
                <div class="media-text-meta"> Eric Jorgenson</div>
                <div class="media-text-rating">★★★★☆ · Simple but worth the read</div>
              </div>
            </div>
            <div class="media-arrow">›</div>
          </div>

          <div class="media-row" onclick="openMediaItem(2)">
            <div class="media-main">
              <div class="media-cover">BK</div>
              <div>
                <div class="media-text-title">The Ancient City</div>
                <div class="media-text-meta">Fustel de Coulanges</div>
                <div class="media-text-rating">★★★★★ · Anthropology</div>
              </div>
            </div>
            <div class="media-arrow">›</div>
          </div>

        </div>
      </section>

      <section class="books-section">
        <h3 class="books-section-title">TV / Series</h3>
        <div class="books-card">

          <div class="media-row" onclick="openMediaItem(1000)">
            <div class="media-main">
              <div class="media-cover">TV</div>
              <div>
                <div class="media-text-title">Sopranos</div>
                <div class="media-text-meta">All seasons</div>
                <div class="media-text-rating"> 10/10 · Best Tv show of all-time</div>
              </div>
            </div>
            <div class="media-arrow">›</div>
          </div>

          <div class="media-row" onclick="openMediaItem(1001)">
            <div class="media-main">
              <div class="media-cover">TV</div>
              <div>
                <div class="media-text-title">The Wire</div>
                <div class="media-text-meta">All seasons</div>
                <div class="media-text-rating"> 10/10 · Everybody able to vote should watch</div>
              </div>
            </div>
            <div class="media-arrow">›</div>
          </div>

          <div class="media-row" onclick="openMediaItem(1001)">
            <div class="media-main">
              <div class="media-cover">TV</div>
              <div>
                <div class="media-text-title">True Detective</div>
                <div class="media-text-meta">Season 1</div>
                <div class="media-text-rating"> 10/10 · Best TV season of all-time</div>
              </div>
            </div>
            <div class="media-arrow">›</div>
          </div>

        </div>
      </section>

      <section class="books-section">
  <h3 class="books-section-title">Movies</h3>
  <div class="books-card">

    <div class="media-row" onclick="openMediaItem(100)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">Enemy</div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">9/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>

    <div class="media-row" onclick="openMediaItem(101)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">Nocturnal Animals</div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">9/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>

    <div class="media-row" onclick="openMediaItem(102)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">The Grey</div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">9/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>

    <div class="media-row" onclick="openMediaItem(103)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">
            The Assassination of Jesse James by the Coward Robert Ford
          </div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">8/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>

    <div class="media-row" onclick="openMediaItem(104)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">Ghost Dog</div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">8.5/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>

    <div class="media-row" onclick="openMediaItem(105)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">The Counselor</div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">7/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>

    <div class="media-row" onclick="openMediaItem(106)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">Michael Clayton</div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">5/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>

    <div class="media-row" onclick="openMediaItem(107)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">Synecdoche, New York</div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">9/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>

    <div class="media-row" onclick="openMediaItem(108)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">Fresh</div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">7.5/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>

   
    <div class="media-row" onclick="openMediaItem(109)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">There Will Be Blood</div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">8/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>
    <div class="media-row" onclick="openMediaItem(110)">
      <div class="media-main">
        <div class="media-cover">MV</div>
        <div>
          <div class="media-text-title">Heat</div>
          <div class="media-text-meta">Movie</div>
          <div class="media-text-rating">7.5/10</div>
        </div>
      </div>
      <div class="media-arrow">›</div>
    </div>
  </div>
</section>


      
    </div>
  `
},
    maps: {
    title: "Maps",
    html: `
      <div class="maps-page">
        <header class="maps-header">
          <h2 class="maps-title">Places I’ve Been</h2>
          <p class="maps-subtitle">
            Starting point in Varna, then bouncing around Europe.
          </p>
        </header>

        <section class="maps-card">
          <div class="maps-map-wrapper">
            <!-- world map background -->
            <img src="icons/map.jpg" alt="World map" />

            <!-- Pins (positions are rough but fine visually) -->
            <div class="maps-pin maps-pin-home">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Varna</div>
            </div>

            <div class="maps-pin maps-pin-barcelona">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Barcelona</div>
            </div>

            <div class="maps-pin maps-pin-amsterdam">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Amsterdam</div>
            </div>

            <div class="maps-pin maps-pin-eindhoven">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Eindhoven</div>
            </div>

            <div class="maps-pin maps-pin-rotterdam">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Rotterdam</div>
            </div>

            <div class="maps-pin maps-pin-hague">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">The Hague</div>
            </div>

            <div class="maps-pin maps-pin-paris">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Paris</div>
            </div>

            <div class="maps-pin maps-pin-vienna">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Vienna</div>
            </div>

            <div class="maps-pin maps-pin-bologna">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Bologna</div>
            </div>

            <div class="maps-pin maps-pin-torino">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Torino</div>
            </div>

            <div class="maps-pin maps-pin-milano">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Milano</div>
            </div>

            <div class="maps-pin maps-pin-salerno">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Salerno</div>
            </div>

            <div class="maps-pin maps-pin-napoli">
              <div class="maps-pin-dot"></div>
              <div class="maps-pin-label">Napoli</div>
            </div>
          </div>

          <div class="maps-list">
            <div class="maps-list-title">Logged so far</div>
            <ul>
              <li><strong>Home:</strong> Varna</li>
              <li>Barcelona</li>
              <li>Amsterdam</li>
              <li>Eindhoven</li>
              <li>Rotterdam</li>
              <li>The Hague</li>
              <li>Paris</li>
              <li>Vienna</li>
              <li>Bologna</li>
              <li>Torino</li>
              <li>Milano</li>
              <li>Salerno</li>
              <li>Napoli</li>
            </ul>
          </div>
        </section>
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

const mediaData = [
  {
    id: 0,
    type: "Book",
    title: "Example Book Title",
    year: "2024",
    rating: "★★★★★",
    description: `
      <p>This is where your real book commentary goes.</p>
      <p>Talk about themes, what you liked, what surprised you, etc.</p>
    `
  },
  {
    id: 1,
    type: "Book",
    title: "Another Book",
    year: "2023",
    rating: "★★★★☆",
    description: `
      <p>Your real review goes here.</p>
    `
  },
  {
    id: 2,
    type: "Movie",
    title: "Example Movie",
    year: "2022",
    rating: "★★★★☆",
    description: `
      <p>Short thought about the movie.</p>
    `
  }
];

// Opens a note
function openNote(index) {
  const note = notesData[index];
  if (!note) return;

  const appContent = document.getElementById("app-content");
  const appTitle = document.getElementById("app-title");
  if (!appContent || !appTitle) return;

  // Change the header title to the note title (optional)
  appTitle.textContent = "Notes";

  appContent.innerHTML = `
    <div class="notes-page">
      <a href="javascript:void(0)" class="note-detail-back" onclick="goBackFromNote()">
        <span class="note-detail-back-icon">‹</span>
        <span>Back</span>
      </a>

      <h2 class="note-detail-title">${note.title}</h2>
      <p class="note-date">${note.date}</p>

      <div style="margin-top: 0.75rem; line-height: 1.5;">
        ${note.content}
      </div>
    </div>
  `;
}

function openMediaItem(id) {
  const item = mediaData.find(x => x.id === id);
  if (!item) return;

  const appContent = document.getElementById("app-content");
  const appTitle = document.getElementById("app-title");

  appTitle.textContent = item.type;

  appContent.innerHTML = `
    <div class="notes-page">

      <a href="javascript:void(0)" class="note-detail-back" onclick="goBackFromMedia()">
        <span class="note-detail-back-icon">‹</span>
        <span>Back</span>
      </a>

      <h2 class="note-detail-title">${item.title}</h2>
      <p class="note-date">${item.type} · ${item.year}</p>

      <p style="color:#f97316; margin-top:0.5rem;">
        ${item.rating}
      </p>

      <div style="margin-top:1rem; line-height:1.55;">
        ${item.description}
      </div>

    </div>
  `;
}

function goBackFromNote() {
  const app = apps.notes;
  const appContent = document.getElementById("app-content");
  const appTitle = document.getElementById("app-title");
  if (!app || !appContent || !appTitle) return;

  appTitle.textContent = app.title;
  appContent.innerHTML = app.html;
}

function goBackFromMedia() {
  const appContent = document.getElementById("app-content");
  const appTitle = document.getElementById("app-title");

  appTitle.textContent = apps.books.title;
  appContent.innerHTML = apps.books.html;
}