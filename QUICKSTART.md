# Quick Start Guide

## Immediate Next Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase

**a. Create/Get Firebase Credentials**
- Go to [Firebase Console](https://firebase.google.com)
- Create a new project or use an existing one
- Enable Firestore Database
- Go to Settings → Project Settings → General
- Copy these values to `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**b. Generate Service Account Key**
- Go to Firebase Settings → Service Accounts
- Click "Generate new private key"
- Save as `firebase-service-account.json` in project root
- Add to `.env.local`:
```env
FIREBASE_ADMIN_SDK_KEY=/path/to/firebase-service-account.json
```

**c. Update Firestore Security Rules**
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactMessages/{document=**} {
      allow create: if request.auth == null && 
        request.resource.data.size() == 4 &&
        request.resource.data.keys().hasAll(['name', 'email', 'message', 'timestamp']);
      allow read, write: if false;
    }
  }
}
```

### 3. Update Portfolio Content

Edit `data/mohammad_portfolio_content.json`:
- Update personal info (name, email, location, availability)
- Add/update skills (organized by category)
- Add education entries (Al-Quds, Mälardalen, etc.)
- Add experience entries
- Add projects (use /projects/[slug] pattern)
- Add certificates with file paths

### 4. Add Media Assets

```
public/
├── assets/
│   ├── profile.jpg                    # Profile image (600×600px)
│   ├── certificates/
│   │   ├── Certification_Web_Design_FreeCodeCamp.pdf
│   │   ├── IEEE_Certification.pdf
│   │   └── ... (other PDFs)
│   └── projects/
│       ├── project-1-diagram.png
│       └── ... (project images)
```

### 5. Test Locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

**Test checklist:**
- [ ] Mobile (320px) — no horizontal scroll
- [ ] Burger menu opens/closes, focus trap works
- [ ] Theme toggle switches dark/light
- [ ] All sections render with content from JSON
- [ ] Contact form shows validation errors
- [ ] Smooth scroll to sections
- [ ] Images load correctly

### 6. Verify Production Build

```bash
npm run build
npm start
```

Visit http://localhost:3000 and test again.

### 7. Run Linter

```bash
npm run lint
```

Fix any warnings before deployment.

## Common Adjustments

### Change Primary Color
Edit `lib/constants.js` and `tailwind.config.js`:
```javascript
primary: {
  light: '#0FA678',  // Change this
  dark: '#32C99A',   // And this
}
```

### Modify Hero Section
Edit `components/Hero.jsx` — update copy, CTA labels, or layout.

### Add New Project
Add object to `projects` array in `data/mohammad_portfolio_content.json`:
```json
{
  "id": "my-project",
  "slug": "my-project",
  "title": "Project Title",
  "category": "FPGA",
  "purpose": "One-sentence description",
  "role": "Your Role",
  "technologies": ["Tech1", "Tech2"],
  "status": "Verified",
  ...
}
```

### Add New Certificate
Add to `certificates` array:
```json
{
  "id": "cert-id",
  "title": "Certificate Title",
  "issuer": "Issuer Name",
  "date": "2026-06-30",
  "file": "/assets/certificates/Certificate.pdf",
  "preview": "/assets/certificates/previews/cert-preview.webp"
}
```

## Deployment to Firebase

### Install Firebase CLI
```bash
npm install -g firebase-tools
firebase login
```

### Initialize Firebase
```bash
firebase init
# Select: Hosting, Functions (optional)
# Public directory: .next
# Configure as SPA: Yes
```

### Deploy
```bash
npm run build
firebase deploy
```

Your site will be live at: `https://your-project.web.app`

## Troubleshooting

### Contact form not working
- Check Firebase credentials in `.env.local`
- Verify Firestore rules allow POST to contactMessages
- Check browser console for errors

### Images not loading
- Verify image paths in JSON (relative to `public/`)
- Check image files exist in `public/assets/`
- Try rebuilding: `npm run build`

### Mobile menu freezes
- Clear browser cache
- Test on real device (not just emulation)
- Check JavaScript console for errors

### Build fails
- Delete `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`
- Check for validation errors in `data/mohammad_portfolio_content.json`

## Performance Audit

Run Lighthouse locally:
1. Open DevTools → Lighthouse
2. Audit homepage, projects page, certificates page
3. Targets: Performance ≥90, Accessibility ≥95

Common improvements:
- Optimize images (use next/image)
- Lazy-load below-the-fold content
- Defer non-critical fonts
- Reduce JavaScript bundle

## Next Milestones

✅ Project scaffold  
⬜ Content populated  
⬜ Firebase configured  
⬜ Assets added  
⬜ Local testing  
⬜ Production build  
⬜ Firebase deployment  
⬜ Custom domain setup  
⬜ Analytics (optional)  

---

**Need help?** Check [README.md](./README.md) or [CIRCUITCANVAS_PRD.md](./CIRCUITCANVAS_PRD.md).
