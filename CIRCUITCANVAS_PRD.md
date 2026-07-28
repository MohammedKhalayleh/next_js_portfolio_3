# CircuitCanvas PRD

This file documents the complete Product Requirements Document for the CircuitCanvas portfolio project.

See the comprehensive PRD in the user's request for full details on:

- Vision and goals
- Core audience and their needs
- The Signal Path metaphor and brand concept
- Information architecture and routes
- Hero and navigation requirements
- Visual system (colors, typography, motion)
- Responsive layout specifications
- Project experience guidelines
- Certificate preservation rules
- Accessibility standards (WCAG 2.2 AA)
- Performance targets
- Firebase integration
- Content architecture with JSON schema
- Deployment milestones
- Definition of done

## Key Principles

1. **No Certificate Modification**: Original documents preserved exactly, never cropped, recolored, or watermarked.
2. **Hardware Identity**: The design immediately communicates engineering expertise.
3. **Signal Path**: Subtle PCB trace with scroll-linked pulse animation.
4. **Content-Driven**: `mohammad_portfolio_content.json` is the single source of truth.
5. **Mobile-First**: Burger menu with focus trap and safe-area support.
6. **Accessible**: Semantic HTML, keyboard navigation, reduced-motion support.
7. **Performance**: Lighthouse ≥90, LCP ≤2.5s, no blocking animations.

## Next Steps

1. Configure Firebase project
2. Populate `mohammad_portfolio_content.json` with verified content
3. Add certificates to `public/assets/certificates/`
4. Test responsively on real devices
5. Deploy to Firebase App Hosting
