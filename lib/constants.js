export const COLORS = {
  light: {
    bg: '#F6F8F7',
    surface: '#FFFFFF',
    text: '#132033',
    muted: '#5D6B7C',
  },
  dark: {
    bg: '#08111F',
    surface: '#0D1B2A',
    text: '#EAF1F4',
    muted: '#9FB0BD',
  },
  accent: {
    primary: {
      light: '#0FA678',
      dark: '#32C99A',
    },
    secondary: {
      light: '#2A7F9E',
      dark: '#4FD1C5',
    },
    warm: '#F3B562',
  },
};

export const MOTION = {
  instant: '100ms',
  fast: '200ms',
  standard: '320ms',
  narrative: '700ms',
};

export const BREAKPOINTS = {
  sm: 320,
  md: 480,
  lg: 768,
  xl: 1024,
  '2xl': 1440,
};

export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
  { id: 'experience', label: 'Experience' },
  { id: 'languages', label: 'Languages' },
];

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString) {
  const [year, month] = dateString.split('-');
  const date = new Date(year, month - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export function getContrastColor(hexColor) {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

export function generateMKMonogram() {
  return 'MK';
}
