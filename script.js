// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav?.classList.remove('open');
    }
  });
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp helpers (Buy / Book / Enquire)
const WA = 'https://wa.me/917870639642?text=';
const encode = (s) => encodeURIComponent(s);

function attachWA(selector, prefix) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.dataset.whats || btn.dataset.book || btn.dataset.enq || 'enquiry';
      const text = `${prefix}${item}`;
      window.location.href = WA + encode(text);
    });
  });
}

attachWA('.btn-buy', 'Buy request: ');
attachWA('.btn-book', 'Booking request: ');
attachWA('.btn-ghost[data-enq]', 'Enquiry about: ');
