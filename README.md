# CircuitCanvas — Hardware-First Portfolio

Mohammad Khalayleh's distinctive engineering portfolio with signal-path metaphor, original certificate preservation, and responsive design.

## Project Overview

**CircuitCanvas** is a premium portfolio website for a Computer Engineer specializing in FPGA design, embedded systems, and full-stack development. The design metaphor treats the site as a clean digital system: sections are "modules," projects are "implementations," and certificates are "proof of work."

### Key Features

- **Signal Path**: A subtle PCB-style trace with scroll-linked signal pulse
- **Hardware Focus**: Immediate visual communication of FPGA and embedded systems expertise
- **Original Certificates**: Full-page document preservation without cropping, modification, or watermarking
- **Mobile-First**: Responsive from 320px with a touch-friendly burger menu
- **Dark Mode**: System theme support with persistent user preference
- **Content-Driven**: Single JSON source of truth for all portfolio data
- **Accessible**: WCAG 2.2 AA compliant with semantic HTML and keyboard navigation
- **Performance**: Lighthouse targets: Performance ≥90, LCP ≤2.5s, CLS ≤0.1

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript/JSX (no TypeScript)
- **Styling**: Tailwind CSS 3.4
- **Backend**: Firebase (Firestore for contact messages)
- **Deployment**: Firebase App Hosting
- **Validation**: Zod
- **PDF Viewer**: PDF.js (lazy-loaded)

## Project Structure

```
next_js_portfolio_3/
├── app/
│   ├── layout.jsx              # Root layout with theme support
│   ├── page.jsx                # Homepage
│   ├── api/contact/route.js    # Contact form endpoint
│   ├── projects/
│   │   ├── page.jsx            # Project archive
│   │   └── [slug]/page.jsx     # Project detail
│   └── certificates/page.jsx   # Certificate gallery
├── components/
│   ├── Header.jsx              # Navigation header
│   ├── BurgerMenu.jsx          # Mobile menu
│   ├── SignalPath.jsx          # Scroll-linked trace
│   ├── Hero.jsx                # Hero section
│   ├── ProfileImage.jsx        # Profile with fallback
│   ├── SkillsSection.jsx       # Grouped skill chips
│   ├── EducationSection.jsx    # Education timeline
│   ├── ProjectsSection.jsx     # Featured projects
│   ├── CertificatesSection.jsx # Certificate preview
│   ├── ContactSection.jsx      # Contact form
│   └── Footer.jsx              # Footer
├── lib/
│   ├── constants.js            # Design tokens, colors, motion
│   ├── hooks.js                # Custom hooks (theme, scroll, etc.)
│   ├── schema.js               # Zod validation schemas
│   ├── content.js              # Content loader
│   ├── firebase.js             # Client Firebase config
│   └── firebase-admin.js       # Server-only Firebase admin
├── styles/
│   └── globals.css             # Global styles, animations, a11y
├── public/
│   ├── assets/
│   │   ├── certificates/       # Original PDF files
│   │   ├── previews/           # Certificate preview images
│   │   └── projects/           # Project images
│   └── svg/                    # SVG components
├── data/
│   └── mohammad_portfolio_content.json  # Single content source
├── .env.example                # Environment template
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json                # Dependencies
```

## Setup Instructions

### 1. Prerequisites

- Node.js 18.17+ or 20+
- npm or yarn
- Firebase project for Firestore (contact storage)

### 2. Installation

```bash
# Install dependencies
npm install

# Copy environment template and configure
cp .env.example .env.local

# Edit .env.local with your Firebase credentials:
# NEXT_PUBLIC_FIREBASE_API_KEY=...
# NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
# FIREBASE_ADMIN_SDK_KEY=path/to/service-account.json
```

### 3. Content Setup

1. **Add your profile content**:
   - Edit `data/mohammad_portfolio_content.json`
   - Update personal info, skills, education, projects, certificates
   - Use the same JSON structure provided

2. **Add certificate PDFs**:
   - Place original PDF files in `public/assets/certificates/`
   - Update file paths in `data/mohammad_portfolio_content.json`
   - Generate preview images (PNG/WebP) for thumbnails

3. **Add project media**:
   - Store images in `public/assets/projects/`
   - Reference in project objects

4. **Add profile image**:
   - Place at `public/assets/profile.jpg` (or update path in JSON)
   - Dimensions: 600x600px minimum

### 4. Development

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Colors & Design Tokens

Edit `lib/constants.js` and `tailwind.config.js`:
- **Primary**: Emerald (light: #0FA678, dark: #32C99A)
- **Secondary**: Cyan (light: #2A7F9E, dark: #4FD1C5)
- **Warm**: Amber (#F3B562) — use sparingly

### Motion & Animations

Controlled in `tailwind.config.js`:
- `instant`: 100ms
- `fast`: 200ms
- `standard`: 320ms
- `narrative`: 700ms

Reduced-motion is automatically disabled for users with `prefers-reduced-motion: reduce`.

### Content Validation

Add/remove fields in `lib/schema.js` using Zod. All data is validated on load.

## Key Features Implementation

### Signal Path Animation
- Located in `components/SignalPath.jsx`
- Scroll-linked SVG stroke animation
- Disabled on reduced-motion preference

### Burger Menu
- Mobile-only navigation in `components/BurgerMenu.jsx`
- 44px+ touch target
- Focus trap, Escape support, safe-area aware
- Smooth 3-line → X animation (200ms)

### Contact Form
- `components/ContactSection.jsx` (client)
- `app/api/contact/route.js` (server)
- Server-side validation with Zod
- Sends to Firestore via Firebase Admin SDK
- No PII in analytics

### Certificate Display
- Gallery at `/certificates` with full-page previews
- Direct PDF links (no cropping/modification)
- Modal viewer with keyboard support (planned for v1.1)

### Project Case Studies
- Dynamic routes: `/projects/[slug]`
- Full-page technical documentation
- Hardware-specific evidence (diagrams, metrics, RTL)

## Firebase Setup

### 1. Create a Firebase Project
- Go to [firebase.google.com](https://firebase.google.com)
- Create new project → Enable Firestore

### 2. Get Client Credentials
- Settings → Project Settings → General
- Copy API Key, Auth Domain, Project ID, etc.
- Add to `.env.local`

### 3. Generate Service Account Key
- Settings → Service Accounts
- Generate new private key (JSON)
- Save as `firebase-service-account.json` in project root
- Update `FIREBASE_ADMIN_SDK_KEY` in `.env.local`

### 4. Firestore Security Rules
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactMessages/{document=**} {
      allow create: if request.auth == null && 
        request.resource.data.size() == 4 &&
        request.resource.data.name is string &&
        request.resource.data.email is string &&
        request.resource.data.message is string &&
        request.resource.data.timestamp is timestamp;
      allow read, write: if false;
    }
  }
}
```

## Deployment to Firebase App Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize Firebase in project
firebase init

# Build
npm run build

# Deploy
firebase deploy
```

For custom domain setup, see [Firebase documentation](https://firebase.google.com/docs/app-hosting/custom-domains).

## Performance & SEO

### Lighthouse Targets
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

### Optimizations
- Server Components by default
- Static generation for projects and certificates
- `next/image` for raster media with WebP
- CSS animations (no JS animation on main thread)
- Lazy-loaded PDF.js
- No autoplay video

### SEO
- Meta tags per page
- Open Graph images
- JSON-LD structured data
- Sitemap and robots.txt
- Canonical URLs

## Accessibility

- WCAG 2.2 AA compliant
- Semantic HTML (nav, main, footer, article)
- Heading hierarchy (h1 → h2 → h3)
- Color contrast ratios ≥4.5:1
- Keyboard navigation and visible focus
- `aria-live` for contact form feedback
- Focus traps in burger menu and modals
- Alt text for all images
- Skip link

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Mobile Chrome 90+

## Contributing

If working with a team:

1. Create feature branches: `feature/section-name`
2. Maintain code style with ESLint
3. Update `data/mohammad_portfolio_content.json` separately from code changes
4. Test responsively (320px, 768px, 1024px, 1440px)

## Troubleshooting

### Content not loading
- Verify `data/mohammad_portfolio_content.json` is valid JSON
- Check schema validation in console
- Ensure all referenced asset paths exist

### Firebase connection fails
- Verify `.env.local` credentials
- Check Firestore rules allow POST to contactMessages
- Test with `curl -X POST http://localhost:3000/api/contact`

### Images not displaying
- Verify image paths in JSON and `public/` directory
- Check image formats (WebP, PNG, JPEG, AVIF)
- Use absolute paths from project root in `public/`

### Mobile menu issues
- Test on real device or device emulation
- Check safe-area-inset on notched devices
- Verify menu width caps at 360px

## License

© 2026 Mohammad Khalayleh. All rights reserved.

---

For detailed PRD, see the [CircuitCanvas PRD](./CIRCUITCANVAS_PRD.md).
