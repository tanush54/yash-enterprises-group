const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const backTop = document.getElementById("backTop");

if (menuBtn) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
}
document.querySelectorAll("#navLinks a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  backTop.style.display = window.scrollY > 500 ? "grid" : "none";
});
backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

const form = document.getElementById("enquiryForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const business = document.getElementById("business").value;
    const message = document.getElementById("message").value.trim();
    const text = `Hello Yash Enterprises Group,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ABusiness: ${encodeURIComponent(business)}%0AEnquiry: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919766765055?text=${text}`, "_blank", "noopener");
  });
}
