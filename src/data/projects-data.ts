export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

export const projectsData: Project[] = [
  {
    id: 'project1',
    title: 'E-commerce Platform "ShopSphere"',
    description: 'A full-featured e-commerce platform with product listings, user accounts, shopping cart, and payment integration. Built with MERN stack.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    dataAiHint: 'online store',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'E-commerce'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 'project2',
    title: 'Task Management App "TaskFlow"',
    description: 'A collaborative task management application with real-time updates, boards, lists, and cards. Implemented using Next.js and Firebase.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    dataAiHint: 'productivity app',
    tags: ['Next.js', 'Firebase', 'Real-time', 'Productivity'],
    liveLink: '#',
  },
  {
    id: 'project3',
    title: 'Personal Blog "TechInsights"',
    description: 'A personal blog platform focusing on technology and software development. Features Markdown support, SEO optimization, and a clean UI.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    dataAiHint: 'blog website',
    tags: ['Gatsby', 'GraphQL', 'Markdown', 'SEO'],
    repoLink: '#',
  },
  {
    id: 'project4',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets. Built with D3.js and React, offering various chart types and filtering options.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    dataAiHint: 'data analytics',
    tags: ['React', 'D3.js', 'Data Visualization', 'Analytics'],
  },
];
