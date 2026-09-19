# ಶ್ರೀ ಅಡವಿಮಠ, ಪಡುಗೂರು | Sri Adavimatha Official Website

[![Website](https://img.shields.io/badge/Website-www.adavimata.com-orange.svg)](https://www.adavimata.com)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-Modern-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla%20Tokens-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E?logo=javascript&logoColor=black)](#)
[![Bilingual](https://img.shields.io/badge/Languages-ಕನ್ನಡ%20%7C%20English-darkgreen)](#)

Official modernized website for **Sri Adavimatha (ಶ್ರೀ ಅಡವಿಮಠ)**, a revered 500-year-old Veerashaiva spiritual, educational, and social institution located in Paduguru village, Gundlupete Taluk, Chamarajanagar District, Karnataka, India.

Live Website: **[https://www.adavimata.com](https://www.adavimata.com)**

---

## 🌟 Overview

Sri Adavimatha was founded over five centuries ago by the divine saint **Sri Guru Maddaneshwara**, an eminent virakta from the lineage of Edeyuru Sri Siddhalingeshwara. The Matha is dedicated to spiritual enlightenment, social upliftment, and universal brotherhood through:
- **ಉಚಿತ ಶಿಕ್ಷಣ (ಮಹಾಮನೆ)**: Free residential education, meals, and boarding for 65+ rural and underprivileged students (Classes 1–10).
- **ಹಿರಿಯರ ಮನೆ (ವೃದ್ಧಾಶ್ರಮ)**: A compassionate, peaceful elder care home providing healthcare, food, and dignity for senior citizens.
- **ಗೋಶಾಲೆ ಮತ್ತು ಸಾವಯವ ಕೃಷಿ**: Indigenous cattle protection sanctuary and toxic-free organic agriculture model.
- **ನಿತ್ಯ ಅನ್ನದಾಸೋಹ**: Daily free sacred meals (Mahaprasada) served to all visiting pilgrims without discrimination.

---

## ✨ Key Features

- **🌐 Instant Bilingual Toggle (ಕನ್ನಡ & English)**:
  - **ಕನ್ನಡ (Kannada)** is the default language.
  - Seamless toggle button in the top bar and mobile drawer.
  - Remembers user language preference via `localStorage`.
  - Zero-flicker pre-rendering using header data attributes.
- **🎨 Sacred & Modern Visual Design**:
  - Spiritual palette of Divine Saffron (`#c2410c`), Sacred Antique Gold (`#d97706`), and Warm Ivory card surfaces (`#fcfaf6`).
  - Native Google Fonts for authentic Kannada typography (`Noto Sans Kannada`, `Tiro Kannada`) alongside modern headings (`Outfit`).
  - Frosted glassmorphic header (`backdrop-filter: blur(12px)`) with elevation on scroll.
  - Hero slider featuring high-resolution visuals and animated devotional Vachanas (by Jagadjyothi Basaveshwara and Sri Guru Maddaneshwara).
- **⚡ Lightweight, Zero-Dependency Vanilla Architecture**:
  - High-performance, self-contained CSS3 design system with CSS custom properties.
  - Clean Vanilla JavaScript (no broken plugins or npm build steps required).
  - Built-in full-screen modal Lightbox for high-resolution photo previews with keyboard controls (ESC, Arrow keys).
  - Works out-of-the-box on GitHub Pages and any static web server.
- **📱 100% Mobile Responsive**:
  - Touch-friendly slide-out drawer menu with blur backdrop.
  - Responsive cards, tables, and adaptive CSS grids.
- **💬 Direct Devotee Connectivity**:
  - Click-to-call, click-to-email, and one-click WhatsApp message builder.
  - Embedded responsive Google Maps route guidance to Paduguru.

---

## 📂 Site Map & Pages

| Page | Description |
| :--- | :--- |
| **[`index.html`](index.html)** | **ಮುಖಪುಟ / Home**: Hero slider, quick highlights strip, 500-year history overview, Guru Parampara cards, core services preview, photo showcase, darshan & dasoha timings. |
| **[`about.html`](about.html)** | **ಇತಿಹಾಸ & ಪರಂಪರೆ / History & Lineage**: Comprehensive 500-year history, the miracle of Terakanambi with the royal elephant, ascetic seers, Late Sri Shivakumara Swamiji, and present seer Sri Shivalingendra Swamiji. |
| **[`our-instituitions.html`](our-instituitions.html)** | **ಸಂಸ್ಥೆಗಳು / Institutions**: Profile of Sri Maddaneshwara Vidya Samsthe (Nursery, Primary, High School), the *Mahamane* free residential scheme, and building inauguration history by dignitaries. |
| **[`social-services.html`](social-services.html)** | **ಸಾಮಾಜಿಕ ಸೇವೆಗಳು / Social Services**: Dedicated profiles for Mahamane, Hiriyara Mane (Elder Home), Goshala & Organic Farming, and Daily Nitya Dasoha. |
| **[`activities.html`](activities.html)** | **ಚಟುವಟಿಕೆಗಳು / Activities**: Annual celebrations (Maha Shivaratri, Guru Poornima, Jathra Mahotsava), daily pooja schedule, and School Annual Day. |
| **[`gallery.html`](gallery.html)** | **ಗ್ಯಾಲರಿ / Gallery**: Filterable photo gallery (All, Shrines, Institutions, Social Services) with built-in modal lightbox. |
| **[`contact.html`](contact.html)** | **ಸಂಪರ್ಕಿಸಿ / Contact**: Temple timings, address, phone, email, WhatsApp connect, query form, and Google Map. |

---

## 🚀 Getting Started

### Prerequisites
No complex toolchain is required. You only need Python (3.x) or any simple static HTTP server.

### Local Development
Clone the repository and run the local development server:

```bash
# Clone repository
git clone https://github.com/shivaprasad-ks/adavimata-website.git
cd adavimata-website

# Start local server (Option A: npm)
npm start

# Or directly with Python (Option B)
python3 -m http.server 8000
```

Open your browser at:
👉 **`http://localhost:8000`**

---

## 📁 Project Structure

```plaintext
adavimata-website/
├── CNAME                         # Custom domain config for GitHub Pages (www.adavimata.com)
├── README.md                     # Project documentation (this file)
├── package.json                  # Metadata & dev scripts
├── index.html                    # Homepage (ಮುಖಪುಟ)
├── about.html                    # History & Guru Tradition (ಇತಿಹಾಸ ಮತ್ತು ಪರಂಪರೆ)
├── our-instituitions.html         # Educational Institutions & Mahamane (ವಿದ್ಯಾಸಂಸ್ಥೆಗಳು)
├── social-services.html          # Social Welfare & Elder Home (ಸಾಮಾಜಿಕ ಸೇವೆಗಳು)
├── activities.html               # Festivals & Pooja Schedule (ಚಟುವಟಿಕೆಗಳು)
├── gallery.html                  # Photo Gallery & Lightbox (ಗ್ಯಾಲರಿ)
├── contact.html                  # Contact, Timings & Google Map (ಸಂಪರ್ಕಿಸಿ)
└── assets/
    ├── css/
    │   └── style.css             # Main stylesheet (design system, tokens, layout)
    ├── js/
    │   └── main.js               # Vanilla JavaScript (slider, lightbox, language toggle)
    └── img/
        ├── logo1a.jpg            # Official Matha emblem
        ├── about.jpg             # Archway & pontiff photo
        ├── portfolio/            # High-resolution shrine, school, and campus photos
        └── slide/                # High-resolution hero banners & service photos
```

---

## 🌐 Deployment (GitHub Pages)

This project is deployed to **GitHub Pages** directly from the `main` branch. 
Custom domain resolution is configured via the `CNAME` file pointing to:
```
www.adavimata.com
```

To deploy updates:
```bash
git add .
git commit -m "Update website content and features"
git push origin main
```
GitHub Pages will automatically serve the updated static files.

---

## 📍 Contact & Address

- **ವಿಳಾಸ / Address**: 
  ಶ್ರೀ ಅಡವಿಮಠ, ಪಡುಗೂರು ಗ್ರಾಮ, ಗುಂಡ್ಲುಪೇಟೆ ತಾಲ್ಲೂಕು, ಚಾಮರಾಜನಗರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ - ೫೭೧೧೨೩  
  *Sri Adavimatha, Paduguru Village, Gundlupete Taluk, Chamarajanagar District, Karnataka - 571123, India.*
- **ದೂರವಾಣಿ / Phone**: [+91-9448602867](tel:+91-9448602867)
- **ಇ-ಮೇಲ್ / Email**: [adavimata@gmail.com](mailto:adavimata@gmail.com)
- **ದರ್ಶನ ಸಮಯ / Darshan Hours**: 6:00 AM – 8:30 PM (All days)
- **ಅನ್ನದಾಸೋಹ / Prasada Dasoha**: 12:30 PM – 2:30 PM (Daily)

---

## 📄 License

This website and its digital assets are maintained for **Sri Adavimatha Paduguru**. All rights reserved.
Code licensed under the [ISC License](LICENSE).
