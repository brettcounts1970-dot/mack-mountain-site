# Mack Mountain Properties — Website

The website for **Mack Mountain Lodge** and Mack Mountain Properties, near Lake Greeson in the
Ouachita Mountains of Kirby, Arkansas. Live at **https://staymackmountain.com**.

This is a fast, self-contained static website (plain HTML, CSS, and a little JavaScript — no build
step required). When this repository is connected to Netlify, every saved change publishes
automatically.

---

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `lodge.html` | The Lodge |
| `gallery.html` | Gallery |
| `area-guide.html` | Area Guide |
| `weddings.html` | Weddings & Gatherings |
| `contact.html` | Contact |
| `thanks.html` | Thank-you page shown after a form is submitted |

Shared styling is in `css/styles.css`. Shared behavior (menu, photo lightbox, etc.) is in
`js/main.js`. Photos live in `images/`.

---

## Quick edits

**Change links, email, phone, or social handles (in one place):**
Open `js/main.js` and edit the `window.MMP = { ... }` block at the top:

```js
window.MMP = {
  booking: "",     // your Airbnb listing URL — until set, "Book" buttons go to the Contact page
  email:   "",     // e.g. "stay@staymackmountain.com"
  phone:   "",     // e.g. "+1 (555) 123-4567"  (leave blank to hide)
  instagram: "",   // e.g. "https://instagram.com/staymackmountain"
  facebook:  "",   // e.g. "https://facebook.com/staymackmountain"
};
```

**Add a gallery photo:**
1. Put the new `.jpg` in the `images/` folder.
2. In `gallery.html`, copy one existing photo line and change the filename:
   ```html
   <a class="g-item" data-lightbox data-full="images/NEW-PHOTO.jpg"><img src="images/NEW-PHOTO.jpg" alt="Short description — Mack Mountain Lodge" loading="lazy" /></a>
   ```

---

## Brand

- Pine green `#2F3E34` · Deep pine `#243128` · Cream `#F4EEE3` · Amber `#B9743E`
- Fonts: Fraunces (headings) + Inter (body)

---

## How it deploys

Connected to Netlify with **no build command** and the **publish directory set to the repository
root**. Netlify also auto-detects the contact and wedding forms; submissions appear under the
project's **Forms** tab in Netlify.

## On the roadmap

- Wire up the Airbnb "Book" links, email/phone, and Instagram/Facebook (see `js/main.js` above)
- Direct booking (booking platform + channel manager, or custom)
