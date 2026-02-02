export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  detailUrl?: string;
  imageUrl: string;
  status: 'Released' | 'In Development' | 'Concept';
}

export interface NavItem {
  label: string;
  href: string;
}
