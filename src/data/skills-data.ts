
export interface Skill {
  id: string;
  name: string;
  level?: number; // Proficiency level (0-100)
  category: string;
  proficiency?: string; // For languages (e.g., Native, Advance)
}

export const skillsData: Skill[] = [
  { id: 'skill1', name: 'JavaScript', level: 95, category: 'Frontend' },
  { id: 'skill2', name: 'TypeScript', level: 90, category: 'Frontend' },
  { id: 'skill3', name: 'React', level: 92, category: 'Frontend' },
  { id: 'skill4', name: 'Next.js', level: 88, category: 'Frontend' },
  { id: 'skill5', name: 'Node.js', level: 85, category: 'Backend' },
  { id: 'skill6', name: 'Python', level: 80, category: 'Backend' },
  { id: 'skill7', name: 'SQL (PostgreSQL, MySQL)', level: 75, category: 'Databases' },
  { id: 'skill8', name: 'NoSQL (MongoDB)', level: 70, category: 'Databases' },
  { id: 'skill9', name: 'Docker', level: 80, category: 'DevOps' },
  { id: 'skill10', name: 'Git & GitHub', level: 95, category: 'Tools' },
  { id: 'skill11', name: 'Agile Methodologies', level: 90, category: 'Methodologies' },
  { id: 'skill12', name: 'Problem Solving', level: 95, category: 'Soft Skills' },
  { id: 'skill13', name: 'Azure DevOps', level: 85, category: 'DevOps' },
  { id: 'skill14', name: 'Jira', level: 90, category: 'Tools' },
  { id: 'skill15', name: 'Confluence', level: 88, category: 'Tools' },
  { id: 'skill16', name: 'Bitbucket', level: 85, category: 'Tools' },
  { id: 'skill17', name: 'Azure', level: 80, category: 'Cloud' },
  { id: 'skill18', name: 'AWS', level: 75, category: 'Cloud' },
  { id: 'skill19', name: 'CI/CD', level: 85, category: 'Methodologies' },
];

export const skillCategories: string[] = [
  'Frontend',
  'Backend',
  'Databases',
  'DevOps',
  'Cloud',
  'Tools',
  'Methodologies',
  'Soft Skills',
];
