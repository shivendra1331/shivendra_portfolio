# Shivendra Singh — Clean Portfolio

A clean portfolio inspired by the supplied dark/light reference design.

## Main design

- Dark mode + Light mode
- Emerald/green accent
- Clean typography
- Thin borders
- Minimal cards
- Large section headings
- Responsive layout
- Sticky navigation
- CV download
- GitHub / LinkedIn / LeetCode links
- Hero profile photo
- Services
- Development evolution timeline
- Case studies / projects
- Testimonials
- Contact
- FAQ
- Footer

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Important customization

Open:

```text
src/data/siteData.js
```

Change:

```js
email
phone
github
linkedin
leetcode
```

Put your photo at:

```text
public/profile.jpg
```

Put your real CV at:

```text
public/Shivendra-Singh-CV.pdf
```

The website already has working `download` links for the CV.

## Folder structure

```text
shivendra-portfolio-clean/
├── public/
│   ├── profile.jpg
│   ├── Shivendra-Singh-CV.pdf
│   ├── project-quickchat.svg
│   ├── project-imagify.svg
│   ├── project-crop.svg
│   ├── project-flight.svg
│   ├── project-portfolio.svg
│   ├── project-dashboard.svg
│   └── README-ASSETS.txt
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Services.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── siteData.js
│   │
│   ├── assets/
│   │   └── (optional local assets)
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
