/* =========================================================
   Mack Mountain Properties — site scripts
   ---------------------------------------------------------
   EDIT THIS CONFIG to update links everywhere at once.
   ========================================================= */
window.MMP = {
  // "Book" buttons point here. Internal page (book.html) hosts the Guesty booking widget; OTA links live on the Book/Contact pages.
  booking: "book.html",
  email:   "stay@staymackmountain.com",
  phone:   "",
  instagram: "",
  facebook:  "",
};

(function () {
  var cfg = window.MMP || {};

  // ---- Wire booking links ----
  document.querySelectorAll(".js-book").forEach(function (a) {
    var url = cfg.booking || "contact.html";
    a.setAttribute("href", url);
    if (/^https?:/i.test(url)) { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); }
    else { a.removeAttribute("target"); a.removeAttribute("rel"); }
  });

  // ---- Wire email / phone ----
  document.querySelectorAll(".js-email").forEach(function (a) {
    if (cfg.email) { a.setAttribute("href", "mailto:" + cfg.email); if (a.dataset.fill !== "keep") a.textContent = cfg.email; }
  });
  document.querySelectorAll(".js-phone").forEach(function (a) {
    if (cfg.phone) { a.setAttribute("href", "tel:" + cfg.phone.replace(/[^0-9+]/g, "")); if (a.dataset.fill !== "keep") a.textContent = cfg.phone; a.closest("[data-phone-wrap]") && (a.closest("[data-phone-wrap]").style.display = "");
    } else { var w = a.closest("[data-phone-wrap]"); if (w) w.style.display = "none"; }
  });

  // ---- Wire socials ----
  document.querySelectorAll(".js-instagram").forEach(function (a) {
    if (cfg.instagram) { a.setAttribute("href", cfg.instagram); a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); a.style.display = ""; }
    else { a.style.display = "none"; }
  });
  document.querySelectorAll(".js-facebook").forEach(function (a) {
    if (cfg.facebook) { a.setAttribute("href", cfg.facebook); a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); a.style.display = ""; }
    else { a.style.display = "none"; }
  });

  // ---- Mobile nav toggle ----
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("menu-open");
      var open = document.body.classList.contains("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("menu-open"); toggle.setAttribute("aria-expanded", "false"); });
    });
  }

  // ---- Header shadow on scroll ----
  var header = document.querySelector(".site-header");
  function onScroll() { if (!header) return; header.classList.toggle("scrolled", window.scrollY > 12); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---- Scroll reveal ----
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // ---- Lightbox for gallery images ----
  var lb = document.getElementById("lightbox");
  if (lb) {
    var lbImg = lb.querySelector("img");
    document.querySelectorAll("[data-lightbox]").forEach(function (el) {
      el.addEventListener("click", function () {
        var src = el.getAttribute("data-full") || el.getAttribute("src");
        if (src) { lbImg.setAttribute("src", src); lb.classList.add("open"); document.body.style.overflow = "hidden"; }
      });
    });
    function close() { lb.classList.remove("open"); document.body.style.overflow = ""; lbImg.setAttribute("src", ""); }
    lb.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  // ---- Footer year ----
  document.querySelectorAll(".js-year").forEach(function (el) { el.textContent = "2026"; });
})();
