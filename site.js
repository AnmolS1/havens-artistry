/* =========================================================================
   Haven's Artistry — shared site script
   Header + footer injection, decorative SVG, cart, nav, accordion, forms.
   Lightweight vanilla JS. No frameworks.
   ========================================================================= */
(function () {
	"use strict";

	/* ---- Reusable decorative SVG snippets ---------------------------------
	   SPIRAL_PATH is a compact arc-based coil generated programmatically. */
	const SPIRAL_PATH = "M0 0 A2 5.2 0 0 1 7.2 0 A8.4 11.6 0 0 1 -12.8 0 A14.8 18 0 0 1 20 0 A21.2 24.4 0 0 1 -25.6 0 A27.6 30.8 0 0 1 32.8 0 A34 37.2 0 0 1 -38.4 0 A40.4 43.6 0 0 1 45.6 0 A46.8 50 0 0 1 -51.2 0";

	// a single spiral icon, stroked
	window.SVG = {
		spiral: function (cls) {
			return `<svg class="${cls || ''}" viewBox="-58 -54 116 108" fill="none" aria-hidden="true">
        <path d="${SPIRAL_PATH}" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/>
      </svg>`;
		},
		// small corner flourish: spiral + sprig
		flourish: function (cls) {
			return `<svg class="flourish ${cls || ''}" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <path d="M30 30 A2 3.4 0 0 1 35 30 A5.6 7 0 0 1 24 30 A9.6 11 0 0 1 41 30 A13.6 15 0 0 1 18 30" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/>
        <path d="M30 30 C26 22 20 16 8 12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M18 19 c-4-2-8-1-11 2 4 2 8 1 11-2z" fill="currentColor" opacity=".55"/>
        <path d="M13 23 c-4-1-8 1-10 4 4 1 8-1 10-4z" fill="currentColor" opacity=".4"/>
        <circle cx="8" cy="12" r="2" fill="currentColor"/>
      </svg>`;
		},
		// little spinning spiral for buttons
		spin: function () {
			return `<svg class="spin" viewBox="-20 -20 40 40" fill="none" aria-hidden="true">
        <path d="M0 0 A1.4 2.6 0 0 1 4 0 A5.4 7 0 0 1 -8 0 A9.4 11 0 0 1 13 0 A13.4 15 0 0 1 -17 0" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
      </svg>`;
		},
		// leaf / sprig
		sprig: function (w, cls) {
			return `<svg class="${cls || ''}" width="${w || 64}" viewBox="0 0 120 60" fill="none" aria-hidden="true">
        <path d="M4 52 C30 50 64 42 110 8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M40 44 c-3-9-1-16 5-22 4 8 3 16-5 22z" fill="currentColor" opacity=".55"/>
        <path d="M58 38 c-2-9 1-16 8-21 3 8 1 16-8 21z" fill="currentColor" opacity=".42"/>
        <path d="M78 28 c-2-9 2-16 9-20 2 8-1 16-9 20z" fill="currentColor" opacity=".5"/>
        <path d="M26 48 c-9-2-15 1-20 7 9 2 15-1 20-7z" fill="currentColor" opacity=".42"/>
      </svg>`;
		},
		// four-point sparkle star
		star: function (s, cls) {
			return `<svg class="${cls || ''}" width="${s || 16}" height="${s || 16}" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1Z" fill="currentColor"/>
      </svg>`;
		},
		// full-width vine + spiral border (for footer / dividers)
		vineBorder: function (cls) {
			// repeating gentle wave with spirals and leaves
			return `<svg class="${cls || ''}" viewBox="0 0 1200 54" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 30 C100 8 200 8 300 30 S500 52 600 30 800 8 900 30 1100 52 1200 30" stroke="currentColor" stroke-width="2.2" fill="none" opacity=".9"/>
        <g fill="currentColor">
          <path d="M150 19 c-7-4-14-2-19 4 7 4 14 2 19-4z" opacity=".5"/>
          <path d="M450 41 c7 4 14 2 19-4 -7-4 -14-2 -19 4z" opacity=".5"/>
          <path d="M750 19 c-7-4-14-2-19 4 7 4 14 2 19-4z" opacity=".5"/>
          <path d="M1050 41 c7 4 14 2 19-4 -7-4 -14-2 -19 4z" opacity=".5"/>
        </g>
        <g stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round">
          <path d="M300 30 a3 4 0 0 1 6 0 a7 8 0 0 1 -13 0 a11 12 0 0 1 19 0" opacity=".85"/>
          <path d="M900 30 a3 4 0 0 1 6 0 a7 8 0 0 1 -13 0 a11 12 0 0 1 19 0" opacity=".85"/>
          <path d="M600 30 a3 4 0 0 1 6 0 a7 8 0 0 1 -13 0 a11 12 0 0 1 19 0" opacity=".85"/>
        </g>
      </svg>`;
		},
		cart: function () {
			return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 4h2l2.4 12.2a1.6 1.6 0 0 0 1.6 1.3h8.3a1.6 1.6 0 0 0 1.55-1.2L21 8H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="10" cy="21" r="1.4" fill="currentColor"/><circle cx="18" cy="21" r="1.4" fill="currentColor"/>
      </svg>`;
		}
	};

	/* ---- Decorative divider helper (call inline) --------------------------- */
	window.divider = function () {
		return `<div class="divider"><span class="line"></span>${SVG.sprig(48)}` +
			`<svg viewBox="-58 -54 116 108" width="34" height="34" fill="none"><path d="${SPIRAL_PATH}" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"/></svg>` +
			`<svg width="48" viewBox="0 0 120 60" fill="none" style="transform:scaleX(-1)"><path d="M4 52 C30 50 64 42 110 8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M40 44 c-3-9-1-16 5-22 4 8 3 16-5 22z" fill="currentColor" opacity=".55"/><path d="M58 38 c-2-9 1-16 8-21 3 8 1 16-8 21z" fill="currentColor" opacity=".42"/></svg>` +
			`<span class="line"></span></div>`;
	};

	/* ---- Header ------------------------------------------------------------ */
	const PAGE = document.body.getAttribute('data-page') || '';
	const NAV = [
		['Home', 'index.html', 'home'],
		['Collections', 'collections.html', 'collections'],
		['Shop All', 'shop.html', 'shop'],
		['Custom Order', 'custom-order.html', 'custom'],
		['About', 'about.html', 'about'],
	];

	function buildHeader() {
		const links = NAV.map(([label, href, key]) =>
			`<a href="${href}" class="${PAGE === key ? 'active' : ''}">${label}</a>`).join('');
		return `<header class="site-header">
      <div class="bar">
        <a href="index.html" class="logo-ph" aria-label="Haven's Artistry home">
          ${SVG.spiral('')}
          <span><span class="lm">Logo</span><br><span class="ls">Placeholder</span></span>
        </a>
        <nav class="nav" id="mainnav">${links}</nav>
        <div class="header-right">
          <button class="cart-btn" id="cartBtn" aria-label="Cart">
            ${SVG.cart()}<span class="cart-count" id="cartCount">0</span>
          </button>
          <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;
	}
	// tighten the spiral size inside the logo
	const headerHost = document.getElementById('site-header');
	if (headerHost) { headerHost.outerHTML = buildHeader(); }

	/* ---- Footer ------------------------------------------------------------ */
	function buildFooter() {
		return `<footer class="site-footer footer">
      <svg class="footer-vine" viewBox="0 0 1200 54" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 34 C100 12 200 12 300 34 S500 56 600 34 800 12 900 34 1100 56 1200 34" stroke="currentColor" stroke-width="2.4" fill="none"/>
        <g stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round">
          <path d="M300 34 a3 4 0 0 1 6 0 a7 8 0 0 1 -13 0 a11 12 0 0 1 19 0"/>
          <path d="M600 34 a3 4 0 0 1 6 0 a7 8 0 0 1 -13 0 a11 12 0 0 1 19 0"/>
          <path d="M900 34 a3 4 0 0 1 6 0 a7 8 0 0 1 -13 0 a11 12 0 0 1 19 0"/>
        </g>
        <g fill="currentColor" opacity=".55">
          <path d="M150 22 c-7-4-14-2-19 4 7 4 14 2 19-4z"/><path d="M450 46 c7 4 14 2 19-4 -7-4 -14-2 -19 4z"/>
          <path d="M750 22 c-7-4-14-2-19 4 7 4 14 2 19-4z"/><path d="M1050 46 c7 4 14 2 19-4 -7-4 -14-2 -19 4z"/>
        </g>
      </svg>
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="wm display">Haven's Artistry</div>
            <div class="tag">made by hand and with heart</div>
            <p style="margin-top:12px;color:var(--ink-soft);max-width:34ch;">Tiny treasures grown in a little garden studio — stickers, jewelry, and wire whimsies, each one made just for you.</p>
            <div class="pay-row" aria-label="Accepted payments">
              <!-- Payment provider badges are visual placeholders only.
                   ===== Stripe SDK integration goes here ===== -->
              <span class="pay-chip"><span class="dot" style="background:#635bff"></span>Stripe</span>
              <!-- ===== PayPal SDK integration goes here ===== -->
              <span class="pay-chip"><span class="dot" style="background:#0070ba"></span>PayPal</span>
              <!-- ===== Venmo SDK integration goes here ===== -->
              <span class="pay-chip"><span class="dot" style="background:#3d95ce"></span>Venmo</span>
            </div>
          </div>
          <div>
            <h4>Wander Here</h4>
            <ul class="footer-links">
              <li><a href="faqs.html">FAQs</a></li>
              <li><a href="terms.html">Terms &amp; Conditions</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4>Join the Garden</h4>
            <p style="color:var(--ink-soft);max-width:36ch;">Stay in the loop with new collections, restocks, and garden updates.</p>
            <form class="news-form" onsubmit="return havens.subscribe(event)">
              <input type="email" required placeholder="your@email.com" aria-label="Email address">
              <button class="btn btn-primary" type="submit">${SVG.spin()}Subscribe</button>
            </form>
            <p class="footer-msg" style="min-height:1.2em;font-size:.85rem;color:var(--mauve);margin:.5em 0 0;"></p>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© Haven's Artistry · All blooms reserved.</span>
          <span style="display:inline-flex;gap:8px;align-items:center;color:var(--mauve)">
            ${SVG.star(13)} handmade with heart ${SVG.star(13)}
          </span>
        </div>
      </div>
    </footer>`;
	}
	const footerHost = document.getElementById('site-footer');
	if (footerHost) { footerHost.outerHTML = buildFooter(); }

	/* ---- Cart (placeholder count via localStorage) ------------------------- */
	const havens = window.havens = {};
	function getCart() { try { return JSON.parse(localStorage.getItem('ha_cart') || '[]'); } catch (e) { return []; } }
	function setCart(c) { localStorage.setItem('ha_cart', JSON.stringify(c)); renderCount(); }
	function renderCount() {
		const el = document.getElementById('cartCount'); if (!el) return;
		const n = getCart().reduce((a, b) => a + (b.qty || 1), 0);
		el.textContent = n; el.style.display = n > 0 ? 'flex' : 'none';
	}
	havens.addToCart = function (name, price, btn) {
		const c = getCart(); c.push({ name, price, qty: 1 }); setCart(c);
		if (btn) {
			const t = btn.textContent; btn.classList.add('added'); btn.innerHTML = 'Added &#10003;';
			btn.style.background = 'linear-gradient(135deg,var(--mint),var(--lime))'; btn.style.color = '#3c5b40';
			setTimeout(() => { btn.textContent = t; btn.style.background = ''; btn.style.color = ''; btn.classList.remove('added'); }, 1300);
		}
		const cb = document.getElementById('cartBtn'); if (cb) { cb.style.transform = 'scale(1.25)'; setTimeout(() => cb.style.transform = '', 260); }
	};
	havens.subscribe = function (e) {
		e.preventDefault();
		const f = e.target, msg = f.parentElement.querySelector('.footer-msg');
		if (msg) { msg.textContent = '🌷 Welcome to the garden! Check your inbox soon.'; }
		f.reset(); return false;
	};
	renderCount();

	const cb = document.getElementById('cartBtn');
	if (cb) cb.addEventListener('click', () => { window.location.href = 'checkout.html'; });

	/* ---- Mobile nav -------------------------------------------------------- */
	const ham = document.getElementById('hamburger'), nav = document.getElementById('mainnav');
	if (ham && nav) {
		ham.addEventListener('click', () => {
			const open = nav.classList.toggle('open');
			ham.setAttribute('aria-expanded', open);
		});
	}

	/* ---- Accordion --------------------------------------------------------- */
	document.addEventListener('click', function (e) {
		const q = e.target.closest('.acc-q'); if (!q) return;
		const item = q.parentElement, a = item.querySelector('.acc-a');
		const open = item.classList.toggle('open');
		a.style.maxHeight = open ? a.scrollHeight + 'px' : 0;
	});

	/* ---- Shop filters ------------------------------------------------------ */
	havens.filter = function (cat, btn) {
		document.querySelectorAll('.pill-filters .filter').forEach(b => b.classList.remove('active'));
		if (btn) btn.classList.add('active');
		document.querySelectorAll('[data-cat]').forEach(card => {
			const show = cat === 'all' || card.getAttribute('data-cat') === cat;
			card.style.display = show ? '' : 'none';
		});
	};

	/* ---- Custom order: timelines + fairy express --------------------------- */
	const TIMELINES = {
		Sticker: '1–2 weeks', Earring: '2–3 weeks', Ring: '3–4 weeks',
		Bracelet: '3–4 weeks', Necklace: '4–5 weeks'
	};
	havens.onProductType = function (sel) {
		const out = document.getElementById('timelineOut'); if (!out) return;
		const v = sel.value;
		if (v && TIMELINES[v]) {
			out.innerHTML = `${SVG.star(14)} Estimated timeline: <strong>${TIMELINES[v]}</strong> <span style="color:var(--ink-faint)">(placeholder)</span>`;
			out.style.display = 'flex';
		}
		else { out.style.display = 'none'; }
	};
	havens.fairyToggle = function (cb) {
		const note = document.getElementById('fairyNote'); if (!note) return;
		note.classList.toggle('show', cb.checked);
	};
	havens.submitCustom = function (e) {
		e.preventDefault();
		const ok = document.getElementById('customConfirm');
		if (ok) { ok.style.display = 'flex'; ok.scrollIntoView ? null : null; window.scrollTo({ top: ok.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' }); }
		e.target.style.display = 'none';
		return false;
	};
	havens.fileName = function (input) {
		const lbl = document.getElementById('fileLabel');
		if (lbl && input.files.length) { lbl.textContent = '🌸 ' + input.files[0].name; }
	};

	/* ---- Hero garden (inline SVG so currentColor + screenshots are reliable) */
	function branchSVG(anim, delay) {
		return `<svg class="${anim}"${delay ? ' style="animation-delay:' + delay + '"' : ''} viewBox="0 0 250 122" fill="none">
      <g stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
        <path d="M10 114 C82 106 168 74 246 12"/>
        <path d="M70 92 C62 80 62 70 72 62"/><path d="M126 68 C120 56 122 46 132 40"/>
        <path d="M182 42 C178 30 182 22 192 18"/>
        <path d="M236 14 a1.7 3 0 0 1 4.6 0 a5.7 7 0 0 1 -9.1 0 a9.7 11 0 0 1 14 0" stroke-width="2"/>
      </g>
      <g fill="currentColor" stroke="none">
        <path d="M0 0 C-6 -5 -7 -15 0 -24 C7 -15 6 -5 0 0Z" transform="translate(46 101) rotate(-58) scale(1.05)" opacity=".62"/>
        <path d="M0 0 C-6 -5 -7 -15 0 -24 C7 -15 6 -5 0 0Z" transform="translate(60 96) rotate(38) scale(.9)" opacity=".5"/>
        <path d="M0 0 C-6 -5 -7 -15 0 -24 C7 -15 6 -5 0 0Z" transform="translate(74 88) rotate(-30)" opacity=".58"/>
        <path d="M0 0 C-6 -5 -7 -15 0 -24 C7 -15 6 -5 0 0Z" transform="translate(102 78) rotate(-62) scale(1.08)" opacity=".6"/>
        <path d="M0 0 C-6 -5 -7 -15 0 -24 C7 -15 6 -5 0 0Z" transform="translate(116 72) rotate(44) scale(.92)" opacity=".5"/>
        <path d="M0 0 C-6 -5 -7 -15 0 -24 C7 -15 6 -5 0 0Z" transform="translate(130 64) rotate(-26)" opacity=".56"/>
        <path d="M0 0 C-6 -5 -7 -15 0 -24 C7 -15 6 -5 0 0Z" transform="translate(158 52) rotate(-58)" opacity=".58"/>
        <path d="M0 0 C-6 -5 -7 -15 0 -24 C7 -15 6 -5 0 0Z" transform="translate(174 44) rotate(42) scale(.86)" opacity=".48"/>
        <path d="M0 0 C-6 -5 -7 -15 0 -24 C7 -15 6 -5 0 0Z" transform="translate(190 34) rotate(-22) scale(.9)" opacity=".54"/>
        <path d="M0 0 C-6 -5 -7 -15 0 -24 C7 -15 6 -5 0 0Z" transform="translate(208 26) rotate(-54) scale(.82)" opacity=".5"/>
      </g></svg>`;
	}
	function bloomSVG() {
		let pet = ''; for (let a = 0; a < 360; a += 60) { pet += `<ellipse cx="30" cy="15" rx="7.6" ry="13" transform="rotate(${a} 30 30)"/>`; }
		return `<svg viewBox="0 0 60 60"><g fill="currentColor" stroke="none">${pet}</g>` +
			`<circle cx="30" cy="30" r="7" fill="#fff" opacity=".82"/><circle cx="30" cy="30" r="3.4" fill="currentColor" opacity=".55"/></svg>`;
	}
	function spiralSVG() {
		return `<svg viewBox="-58 -54 116 108" fill="none"><path d="${SPIRAL_PATH}" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>`;
	}
	function buildHeroDeco() {
		const host = document.getElementById('heroDeco'); if (!host) return;
		const branches = [
			['top:-14px;left:-10px;width:240px;color:var(--mint)', 'anim-sway', ''],
			['top:-20px;right:-14px;width:260px;color:var(--lavender);transform:scaleX(-1)', 'anim-sway2', ''],
			['top:32%;left:-34px;width:200px;color:var(--lime);opacity:.8;transform:rotate(56deg)', 'anim-sway2', '1.4s'],
			['top:38%;right:-38px;width:210px;color:var(--rose);opacity:.7;transform:scaleX(-1) rotate(56deg)', 'anim-sway', '.7s'],
			['bottom:-22px;left:13%;width:200px;color:var(--mint);opacity:.85;transform:scaleY(-1)', 'anim-sway2', '2s'],
			['bottom:-26px;right:15%;width:190px;color:var(--pink);opacity:.7;transform:scale(-1,-1)', 'anim-sway', '1.1s']
		];
		const spirals = [
			['bottom:-70px;left:-50px;width:260px;color:var(--pink);opacity:.38', ''],
			['bottom:2%;right:-40px;width:170px;color:var(--rose);opacity:.4;animation-duration:55s;animation-direction:reverse', ''],
			['top:8%;left:40%;width:90px;color:var(--lavender);opacity:.32;animation-duration:48s', ''],
			['top:60%;left:22%;width:120px;color:var(--mauve);opacity:.3;animation-duration:60s;animation-direction:reverse', ''],
			['top:22%;right:14%;width:80px;color:var(--mint);opacity:.42;animation-duration:42s', ''],
			['bottom:24%;left:48%;width:70px;color:var(--rose);opacity:.34;animation-duration:50s;animation-direction:reverse', '']
		];
		const blooms = [
			['top:16%;left:12%;width:64px;color:var(--pink)', 'anim-bloom', ''],
			['top:24%;right:18%;width:54px;color:var(--lavender)', 'anim-float', '1.2s'],
			['bottom:18%;left:30%;width:48px;color:var(--rose)', 'anim-bloom', '.8s'],
			['bottom:26%;right:30%;width:60px;color:var(--mint)', 'anim-float', '2.1s'],
			['top:52%;right:9%;width:42px;color:var(--lavender)', 'anim-bloom', '1.6s'],
			['top:50%;left:7%;width:46px;color:var(--pink)', 'anim-float', '.4s']
		];
		const stars = [
			['top:14%;left:58%;width:26px;height:26px;color:var(--lavender)', ''],
			['top:64%;left:10%;width:22px;height:22px;color:var(--mauve)', '1.2s'],
			['top:30%;right:24%;width:24px;height:24px;color:var(--rose)', '.6s'],
			['top:70%;right:18%;width:18px;height:18px;color:var(--mint)', '1.8s'],
			['top:42%;left:34%;width:16px;height:16px;color:var(--pink)', '.3s'],
			['top:80%;left:42%;width:20px;height:20px;color:var(--lavender)', '2.4s'],
			['top:38%;right:42%;width:14px;height:14px;color:var(--mauve)', '1.5s']
		];
		const petals = [
			['top:0;left:18%;width:26px;color:var(--pink);animation-duration:13s'],
			['top:0;left:38%;width:20px;color:var(--lavender);animation-duration:17s;animation-delay:3s'],
			['top:0;left:62%;width:24px;color:var(--mint);animation-duration:15s;animation-delay:6s'],
			['top:0;left:82%;width:18px;color:var(--rose);animation-duration:19s;animation-delay:1.5s'],
			['top:0;left:50%;width:22px;color:var(--pink);animation-duration:21s;animation-delay:9s']
		];
		let h = '';
		branches.forEach(b => { h += `<div class="hero-br" style="${b[0]}">${branchSVG(b[1], b[2])}</div>`; });
		spirals.forEach(s => { h += `<span class="hero-el anim-spin" style="${s[0]}">${spiralSVG()}</span>`; });
		blooms.forEach(b => { h += `<span class="hero-el ${b[1]}" style="${b[0]}${b[2] ? ';animation-delay:' + b[2] : ''}">${bloomSVG()}</span>`; });
		stars.forEach(s => { h += `<span class="anim-twinkle" style="${s[0]}${s[1] ? ';animation-delay:' + s[1] : ''}">${SVG.star(parseInt(s[0].match(/width:(\d+)/)[1]))}</span>`; });
		petals.forEach(p => { h += `<span class="hero-el anim-fall" style="${p[0]}">${bloomSVG()}</span>`; });
		host.innerHTML = h;
	}
	buildHeroDeco();

	/* ---- Auto-decorate hooks ---------------------------------------------- */
	function decorate() {
		document.querySelectorAll('[data-divider]').forEach(el => { if (!el.dataset.done) { el.innerHTML = divider(); el.classList.add('divider-wrap'); el.dataset.done = 1; } });
		document.querySelectorAll('[data-spiral]').forEach(el => { if (!el.dataset.done) { el.innerHTML = SVG.spiral(); el.dataset.done = 1; } });
		document.querySelectorAll('[data-flourish]').forEach(el => {
			if (!el.dataset.done) {
				el.classList.add('framed');
				el.insertAdjacentHTML('beforeend', SVG.flourish('tl') + SVG.flourish('tr') + SVG.flourish('bl') + SVG.flourish('br'));
				el.dataset.done = 1;
			}
		});
		document.querySelectorAll('[data-sprig]').forEach(el => {
			if (!el.dataset.done) {
				const pos = el.getAttribute('data-sprig') || 'br';
				const wrap = document.createElement('span'); wrap.className = 'sprig sprig-' + pos;
				wrap.innerHTML = SVG.sprig(70); el.appendChild(wrap); el.dataset.done = 1;
			}
		});
		document.querySelectorAll('.anim-twinkle').forEach(s => {
			if (!s.dataset.done && !s.children.length) {
				const w = parseInt(s.style.width) || 14; s.innerHTML = SVG.star(w); s.dataset.done = 1;
			}
		});
		document.querySelectorAll('.acc-q').forEach(q => {
			if (!q.querySelector('.tw')) {
				const t = document.createElement('span'); t.className = 'tw';
				t.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>';
				q.appendChild(t);
			}
		});
	}
	decorate();

	/* ---- Reveal on scroll (cheap IntersectionObserver) --------------------- */
	if ('IntersectionObserver' in window) {
		const io = new IntersectionObserver((entries) => {
			entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
		}, { threshold: .12 });
		requestAnimationFrame(() => document.querySelectorAll('.reveal').forEach(el => io.observe(el)));
	} else {
		document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
	}
})();
