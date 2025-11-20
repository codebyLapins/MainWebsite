export interface Project {
  id: string;
  slug: string;
  titleEn: string;
  titleLv: string;
  descriptionEn: string;
  descriptionLv: string;
  thumbnail: string;
  thumbnailHeight: number;
  images: string[];
  videos?: string[];
  category: string;
  categoryEn: string;
  categoryLv: string;
  tags: string[];
  year: string;
  client?: string;
  url?: string;
  domain?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'website-integration-3d-scene',
    titleEn: 'Website Integration in a 3D Computer Scene',
    titleLv: 'Tīmekļa Vietnes Integrācija 3D Datora Ainā',
    descriptionEn: 'A hobby project that blends a website design with a retro-style 3D render.',
    descriptionLv: 'Hobija projekts, kas apvieno tīmekļa vietnes dizainu ar retro stila 3D renderēšanu.',
    thumbnail: '/%281%29main.png',
    thumbnailHeight: 400,
    images: [
      '/%281%291.png',
      '/%281%292.png',
      '/%281%293.png'
    ],
    videos: [
      '/%281%295.mp4'
    ],
    category: 'Showcase',
    categoryEn: 'Showcase',
    categoryLv: 'Demonstrējums',
    tags: ['Blender (3D)', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'GLSL', 'React', 'Three.js', 'Webpack'],
    year: '2024-2025',
    domain: 'lapins.dev'
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};
