# Mohammad Khalayleh | Engineering Portfolio

A responsive Next.js portfolio for Mohammad Khalayleh, a Computer Engineer focused on FPGA development, digital hardware design and verification, embedded systems, software, systems, and networking.

## Live Portfolio

Final public URL: **to be added after deployment**.

## Features

- Responsive portfolio layout with light and dark themes.
- Keyboard-accessible navigation, dialogs, controls, and reduced-motion support.
- Skills, education, experience, certifications, languages, and contact sections.
- Responsive project grid with a full-width featured FPGA project and category filters.
- Project-details modal with overview, screenshots when available, role, responsibilities, technologies, challenges, results, and contextual notes.
- GitHub or architecture links and live previews only when a public URL is configured.
- Public project thumbnails and sanitized project screenshots stored in `public/assets/`.

## Technology Stack

- Next.js with the App Router
- React and JavaScript/JSX
- Tailwind CSS and PostCSS
- Lucide React icons
- Zod content validation
- Firebase client SDK and Firebase Admin SDK for the contact workflow
- PDF.js distribution for certificate handling

## Portfolio Sections

- Home
- About
- Projects
- Education
- Certifications
- Skills
- Contact
- Experience
- Languages

## Selected Projects

- **FPGA-Based Cryptographic System** — SystemVerilog AES-128 CTR and SHA-256 hardware implementation for an FPGA platform.
- **TMS – Trip Management System** — a private production workflow for structured trip planning, supplier coordination, and quotations.
- **QudsCare** — a cross-platform educational healthcare application for nursing, anesthesia, and pharmacy students.
- **SOOQNA – E-Commerce Marketplace** — a university multi-vendor marketplace with customer, merchant, order, payment, and invoice workflows.
- **Prof. Dr. Salaheddin Odeh Academic Portfolio** — a responsive academic portfolio built with React and Firebase Hosting.
- **Mass Bill ERP System** — an Arabic-language ERP web application for finance, accounting, transactions, and assets.
- **PMS – Project Management System** — a Java Swing and Oracle Database desktop application with role-based task management.
- **2D Sprite Animation** — a Java desktop project with selectable characters and interactive animation states.

## Local Development

### Prerequisites

- A current Node.js LTS release
- npm

### Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Available commands

```bash
npm run dev    # Start the development server
npm run lint   # Run Next.js linting
npm run build  # Create a production build
npm start      # Start the production server after a successful build
```

## Content and Assets

- Portfolio content: `data/mohammad_portfolio_content.json`
- Content validation: `lib/schema.js`
- Public assets: `public/assets/`
- Project screenshots and thumbnails: `public/assets/projects/`
- Certificates intentionally published with the portfolio: `public/assets/certificates/`

Keep image paths public-relative, for example `/assets/projects/PMS/1.png`.

## Environment Variables

Copy `.env.example` to `.env.local` only when Firebase-backed contact functionality is being configured. Never commit Firebase Admin credentials or service-account JSON files. Configure server-side secrets through the hosting provider's environment-variable or secret-management system.

## Deployment

Deployment instructions will be added according to the selected hosting environment.

## Private Project Policy

Some projects are private or company-owned. Their portfolio entries may expose only high-level architecture documentation, features, workflows, sanitized screenshots, and role/responsibility information.

The repository and portfolio must not expose private production source code, credentials, customer information, supplier information, quotations or pricing, internal business data, or unsanitized screenshots.

## Security and Privacy

Review all public assets before publishing. The contact workflow should receive its Firebase configuration through environment variables; do not store secrets in the repository.

## Quality Targets

- Responsive support starting at 320px
- Keyboard-accessible navigation and dialogs
- WCAG 2.2 AA accessibility target
- Lighthouse performance target of 90+

These are targets, not verified audit results.

## Contact

- GitHub: [MohammedKhalayleh](https://github.com/MohammedKhalayleh)
- LinkedIn: [Mohammad Khalayleh](https://linkedin.com/in/mohammad-khalayleh)
- Email: `khalayleh.eng@gmail.com`

## Copyright

Copyright © 2026 Mohammad Khalayleh. All rights reserved.
