export interface Skill {
  id: string;
  name: string;
  level?: number; // Proficiency level (0-100)
  category: string;
  proficiency?: string; // For languages (e.g., Native, Advance)
}
export interface Certification {
  level: number; // Proficiency level (0-100)
  category: string;
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
  { id: 'skill12', name: 'Problem Solving', level: 95, category: 'Soft Skills' },  { id: 'lang1', name: 'Spanish', proficiency: 'Native', category: 'Languages' },
  { id: 'lang2', name: 'Catalan', proficiency: 'Native', category: 'Languages' },
  { id: 'lang3', name: 'English', proficiency: 'Advance', category: 'Languages' },
  { id: 'lang4', name: 'Chinese', proficiency: 'Advance', category: 'Languages' },

];

export const skillCategories: string[] = [
  'Frontend',
  'Backend',
  'Databases',
  'Languages',

  'DevOps',
  'Tools',
  'Methodologies',
  'Soft Skills',

];

export interface Certification {
  id: string;
  name: string;
  category: 'Certifications';
}

export const certificationsData: Certification[] = [
  { id: 'cert1', name: 'Professional Scrum Master I (PSM I)', category: 'Certifications' },
  { id: 'cert2', name: 'Professional Scrum Master II (PSM II)', category: 'Certifications' },
  { id: 'cert3', name: 'Professional Agile Leadership (PAL)', category: 'Certifications' },
  { id: 'cert4', name: 'Professional Scrum Product Owner I (PSPO I)', category: 'Certifications' },
  { id: 'cert5', name: 'Scaled Professional Scrum (SPS)', category: 'Certifications' },
  { id: 'cert6', name: 'ITIL V3 Foundations', category: 'Certifications' },
];
