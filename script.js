/* ══════════════════════════════════════════════
   SUDARSHAN KARN — Portfolio JS
   script.js
══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavToggle();
  initNavActive();
  initScrollReveal();
  initCountUp();
  initOrbits();
});

/* ════════════════════════════════════════
   1. CUSTOM CURSOR
════════════════════════════════════════ */
function initCursor() {
  const cur   = document.getElementById('cur');
  const trail = document.getElementById('trail');
  if (!cur || !trail) return;

  let mx = 0, my = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX - 4;
    my = e.clientY - 4;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  setInterval(() => {
    tx += (mx - tx) * 0.15;
    ty += (my - ty) * 0.15;
    trail.style.left = (tx - 10) + 'px';
    trail.style.top  = (ty - 10) + 'px';
  }, 16);

  // Scale on interactive elements
  document.querySelectorAll('a, button, .srv-card, .proj-card, .tc-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.transform   = 'scale(2.5)';
      trail.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.transform   = 'scale(1)';
      trail.style.transform = 'scale(1)';
    });
  });
}

/* ════════════════════════════════════════
   2. MOBILE NAV TOGGLE
════════════════════════════════════════ */
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    // Animate hamburger to X
    const spans = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Close nav when a link is clicked
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });
}

/* ════════════════════════════════════════
   3. ACTIVE NAV LINK ON SCROLL
════════════════════════════════════════ */
function initNavActive() {
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(s => {
      if (window.scrollY >= s.offsetTop - 160) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
}

/* ════════════════════════════════════════
   4. SCROLL REVEAL (IntersectionObserver)
════════════════════════════════════════ */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('vis');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.rev, .tl-item').forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════
   5. COUNT-UP ANIMATION
════════════════════════════════════════ */
function initCountUp() {
  const seen = new Set();

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || seen.has(e.target)) return;
      seen.add(e.target);

      e.target.querySelectorAll('[data-target]').forEach(el => {
        const target = +el.dataset.target;
        let current  = 0;
        const step   = target / 60;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current);
          }
        }, 16);
      });
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.stats-bar, .hero-stats').forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════
   6. ORBITAL ICON ANIMATION (JS-driven)
════════════════════════════════════════ */
function initOrbits() {
  const system = document.getElementById('orbitSystem');
  if (!system) return;

  const items = system.querySelectorAll('.o-item');
  if (!items.length) return;

  // Parse initial phases from data attributes
  const state = [];
  items.forEach(el => {
    state.push({
      el,
      radius: parseFloat(el.dataset.radius) || 130,
      speed:  parseFloat(el.dataset.speed)  || 20,   // degrees per second
      phase:  parseFloat(el.dataset.phase)  || 0,    // starting angle in degrees
    });
  });

  let lastTime = null;

  function tick(timestamp) {
    if (lastTime === null) lastTime = timestamp;
    const dt = Math.min((timestamp - lastTime) / 1000, 0.05); // cap dt to avoid jumps
    lastTime = timestamp;

    const cw = system.offsetWidth;
    const ch = system.offsetHeight;
    const cx = cw / 2;
    const cy = ch / 2;

    state.forEach(s => {
      s.phase = (s.phase + s.speed * dt) % 360;

      const rad = s.phase * (Math.PI / 180);
      const x   = Math.cos(rad) * s.radius;
      const y   = Math.sin(rad) * s.radius;

      // Center the item on its orbit point
      const iw = s.el.offsetWidth  || 56;
      const ih = s.el.offsetHeight || 44;

      s.el.style.left = (cx + x - iw / 2) + 'px';
      s.el.style.top  = (cy + y - ih / 2) + 'px';
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
