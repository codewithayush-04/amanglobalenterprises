# Aman Global Enterprises

Modern, minimal landing page for **Aman Global Enterprises – Smart Network & Security IT Solutions**.

Built with React (JSX) and plain CSS — no UI libraries.

## Features

- Sticky glassmorphism navbar with mobile hamburger menu
- Hero with abstract networking background
- About, Services (20 cards), Why Choose Us, Contact form, Footer
- White & blue corporate theme, fully responsive
- Smooth scrolling, fade-in animations, hover effects

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Admin Panel

Access the admin panel at `/login` or via the **Admin** link in the footer.

**Default credentials:**
- Username: `admin`
- Password: `AmanGlobal@2024`

Override credentials by copying `.env.example` to `.env`:

```bash
cp .env.example .env
```

### Admin features

- **Dashboard** — overview stats and recent contact inquiries
- **Inquiries** — view, mark as read, and delete contact form messages
- **Services** — overview of all listed services

> **Note:** Auth and inquiries use localStorage for demo purposes. Connect a real backend API for production use.

## Project Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── Login.jsx / Login.css
│   └── AdminPanel.jsx / AdminPanel.css
├── utils/
│   ├── authConfig.js
│   └── storage.js
└── components/
    ├── Navbar.jsx / Navbar.css
    ├── Hero.jsx / Hero.css
    ├── About.jsx / About.css
    ├── Services.jsx / Services.css
    ├── Features.jsx / Features.css
    ├── Contact.jsx / Contact.css
    ├── Footer.jsx / Footer.css
    └── icons.jsx
```

## Contact

- Phone: 7004370624
- Email: info@amanglobalenterprises.com
