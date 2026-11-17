/* ============================================================
   WAFFLE TIME: SITE CONFIGURATION (edit this block only)
   Anything set to null shows as "To be confirmed" on the page.
   Facebook links are PLACEHOLDERS (null) until the pages exist.
   ============================================================ */
const SITE = {
  contact: null, // e.g. "0917 000 0000" once confirmed
  branches: [
    { name: "Morning Star", address: null, hours: null, phone: null, facebook: null },
    { name: "The Plaza",    address: null, hours: null, phone: null, facebook: null }
  ],
  // Menu names confirmed by owner 2026-11-17. Add description, price, image when available: { name, description, price, image }  (price e.g. "₱99"; image e.g. "assets/waffle1.jpg")
  menu: [
    { name: "Bacon N Cheese", description: null, price: null, image: null },
    { name: "German Cheese Franks", description: null, price: null, image: null },
    { name: "TJ CheeseDog", description: null, price: null, image: null },
    { name: "Ham N Cheese", description: null, price: null, image: null },
    { name: "American Hotdog", description: null, price: null, image: null },
    { name: "Belgian Chocolate", description: null, price: null, image: null },
    { name: "Bavarian Cream", description: null, price: null, image: null },
    { name: "Ultimate Ube", description: null, price: null, image: null },
    { name: "Cheese Delite", description: null, price: null, image: null },
    { name: "Swiss Chocolate", description: null, price: null, image: null },
    { name: "Tuna Salad", description: null, price: null, image: null }
  ],

  heroImage: null // e.g. "assets/hero.jpg"
};

const TBC = '<span class="muted">To be confirmed</span>';
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = id => document.getElementById(id);

$('menu-grid').innerHTML = SITE.menu.map(m => `
  <article class="card">
    <div class="card-img" ${m.image ? `style="background-image:url('${esc(m.image)}')" role="img" aria-label="${esc(m.name)}"` : ''}>${m.image ? '' : 'Photo coming soon'}</div>
    <div class="card-body"><h3>${esc(m.name)}</h3>${m.description ? `<p>${esc(m.description)}</p>` : ''}${m.price ? '' : '<p class="muted">Price coming soon</p>'}${m.price ? `<p><strong>${esc(m.price)}</strong></p>` : ''}</div>
  </article>`).join('');

$('branch-grid').innerHTML = SITE.branches.map(b => `
  <article class="card"><div class="card-body">
    <h3>${esc(b.name)}</h3>
    <p><strong>Address:</strong> ${b.address ? esc(b.address) : TBC}</p>
    <p><strong>Hours:</strong> ${b.hours ? esc(b.hours) : TBC}</p>
    <p><strong>Contact:</strong> ${b.phone ? esc(b.phone) : TBC}</p>
  </div></article>`).join('');

const fbButton = b => b.facebook
  ? `<a class="btn" href="${esc(b.facebook)}" target="_blank" rel="noopener">Order at ${esc(b.name)}</a>`
  : `<a class="btn" aria-disabled="true" role="link" href="#order" title="Facebook page not available yet">${esc(b.name)}: Facebook page coming soon</a>`;
$('order-grid').innerHTML = SITE.branches.map(fbButton).join('');

$('footer-links').innerHTML = SITE.branches.map(b => b.facebook
  ? `<a href="${esc(b.facebook)}" target="_blank" rel="noopener">${esc(b.name)} on Facebook</a>`
  : `<span>${esc(b.name)}: Facebook coming soon</span>`).join(' · ');
$('footer-contact').textContent = SITE.contact ? 'Contact: ' + SITE.contact : 'Contact details coming soon.';

if (SITE.heroImage) {
  const art = document.querySelector('.hero-art');
  art.style.backgroundImage = `url('${SITE.heroImage}')`;
  art.classList.add('has-photo');
}

document.querySelectorAll('a[aria-disabled="true"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
const toggle = document.querySelector('.nav-toggle'), links = $('links');
toggle.addEventListener('click', () => toggle.setAttribute('aria-expanded', links.classList.toggle('open')));
links.addEventListener('click', e => { if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); } });
