// --- Config ---
const phoneCab = "917870639642";   // WhatsApp for cab enquiries (no +)
const phoneShop = "917870639642";  // WhatsApp for dry fruit orders (can be same)

// Build WhatsApp link including current page URL
function buildWaLink(phone, message) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const body = `${message}\n\nPage link: ${url}\n\nPlease confirm. Thanks!`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(body)}`;
}

// Attach WA to generic enquiry buttons (data-wa)
document.querySelectorAll("[data-wa]").forEach((el) => {
  const extra = el.getAttribute("data-wa-text") || "General Enquiry";
  el.setAttribute("href", buildWaLink(phoneCab, extra));
  el.setAttribute("rel", "noopener");
});

// Attach WA to product Buy buttons (data-buy)
document.querySelectorAll("[data-buy]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = btn.getAttribute("data-name") || "Product";
    const price = btn.getAttribute("data-price") || "";
    const pack = btn.getAttribute("data-pack") || "";
    const msg =
      `Order: ${name}\nPack: ${pack}\nPrice: ₹${price}\n\nQty: 1\nAddress:\nPincode:\nPayment (COD/UPI):`;
    window.location.href = buildWaLink(phoneShop, msg);
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach((lnk) =>
    lnk.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
    })
  );
}

// Year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
