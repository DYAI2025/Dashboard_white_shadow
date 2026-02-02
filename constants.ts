import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Philosophie', href: '#philosophy' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Kontakt', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'becoin',
    title: 'BeCoin',
    description: 'Agentische Firma & Survival-Economy Simulation. Ein Netzwerk autonomer Agenten, die unter wirtschaftlichem Druck durch echten Mehrwert überleben.',
    tags: ['AI Agents', 'Economy Sim', 'LLM'],
    repoUrl: 'https://github.com/DYAI2025/BeCoin_EcoSim_LLM.git',
    imageUrl: 'https://picsum.photos/600/400?grayscale&blur=2',
    status: 'In Development'
  },
  {
    id: 'flashdoc',
    title: 'FlashDoc',
    description: 'Chrome Extension, die Browser-Text instantan in Dateien & Dokumente umwandelt. Bereits im Store verfügbar, iterative Erweiterung geplant.',
    tags: ['Chrome Ext', 'Productivity', 'Tools'],
    repoUrl: 'https://github.com/DYAI2025/FlashDoc.git',
    imageUrl: 'https://picsum.photos/600/401?grayscale&blur=2',
    status: 'Released'
  },
  {
    id: 'stoppclock',
    title: 'Stoppclock',
    description: 'All-in-one Timer-Plattform. Sofort nutzbare Uhren für Pomodoro, Schach oder Unterricht. Sessions teilbar via QR/Link.',
    tags: ['React', 'Time Mgmt', 'Social'],
    detailUrl: 'https://www.stoppclock.com',
    repoUrl: 'https://github.com/DYAI2025/Stoppclock-page.git',
    imageUrl: 'https://picsum.photos/600/402?grayscale&blur=2',
    status: 'Released'
  },
  {
    id: 'maptoposter',
    title: 'MapToPoster',
    description: 'Automatisierte Generierung künstlerischer Kartenposter aus Geo-Daten (DIN A0–A5). Optimiert für Print-on-Demand Workflows.',
    tags: ['Generative Design', 'Maps', 'Print'],
    repoUrl: 'https://github.com/DYAI2025/maptoposter.git',
    imageUrl: 'https://picsum.photos/600/403?grayscale&blur=2',
    status: 'Concept'
  }
];

export const PHILOSOPHY_TEXT = `
In einer Welt exponentieller technologischer Beschleunigung ist Intelligenz nicht länger nur eine menschliche Eigenschaft, sondern ein gestaltbares Material. DYAI steht für die bewusste Architektur dieser Symbiose.

Wir entwickeln nicht nur Software, sondern kognitive Erweiterungen. Unsere Systeme sind präzise, transparent und darauf ausgelegt, menschliche Kapazitäten zu skalieren, ohne die Kontrolle zu entziehen. Wir glauben an "Calm Technology" – Werkzeuge, die sich nahtlos in den Hintergrund integrieren und nur dann präsent werden, wenn sie benötigt werden.
`;
