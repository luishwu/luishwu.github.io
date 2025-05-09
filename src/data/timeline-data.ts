import type { LucideIcon } from 'lucide-react';
import { Briefcase, Lightbulb, Award } from 'lucide-react';

export interface TimelineItem {
  id: string;
  type: 'experience' | 'project' | 'education';
  title: string;
  institution?: string; // For experience or education
  role?: string; // For experience
  date: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 'exp1',
    type: 'experience',
    title: 'Senior Software Engineer',
    institution: 'Tech Solutions Inc.',
    role: 'Lead Developer',
    date: 'Jan 2020 - Present',
    description: 'Led a team of 5 developers in creating innovative web applications using Next.js, TypeScript, and GraphQL. Implemented agile methodologies, resulting in a 20% increase in team productivity. Contributed to core architecture and mentored junior engineers.',
    icon: Briefcase,
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'Agile', 'Leadership'],
  },
  {
    id: 'proj1',
    type: 'project',
    title: 'AI-Powered Personalization Engine',
    date: 'Jun 2022 - Dec 2022',
    description: 'Developed a machine learning model to provide personalized content recommendations for an e-commerce platform. Utilized Python, TensorFlow, and scikit-learn. Deployed using Docker and Kubernetes.',
    icon: Lightbulb,
    tags: ['Machine Learning', 'Python', 'TensorFlow', 'Docker', 'Kubernetes'],
  },
  {
    id: 'edu1',
    type: 'education',
    title: 'Master of Science in Computer Science',
    institution: 'University of Advanced Technology',
    date: 'Sep 2018 - May 2020',
    description: 'Specialized in Artificial Intelligence and Data Science. Thesis on "Natural Language Processing for Sentiment Analysis". Graduated with honors.',
    icon: Award,
    tags: ['AI', 'Data Science', 'NLP', 'Thesis'],
  },
  {
    id: 'exp2',
    type: 'experience',
    title: 'Software Developer',
    institution: 'Innovatech Ltd.',
    role: 'Full-Stack Developer',
    date: 'Jul 2017 - Dec 2019',
    description: 'Developed and maintained full-stack web applications for various clients using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    icon: Briefcase,
    tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
  },
];
