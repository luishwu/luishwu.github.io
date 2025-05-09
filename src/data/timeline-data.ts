import type { LucideIcon } from 'lucide-react';
import { Briefcase, GraduationCap } from 'lucide-react'; // Added GraduationCap

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
    id: 'exp-corus',
    type: 'experience',
    title: 'Engineering Manager / Delivery Manager',
    institution: 'CORUS CONSULTING',
    role: 'Engineering Manager / Delivery Manager',
    date: 'October 2020-Present',
    description: 'Software Development Team management:\n- 5 Front-End developers. Flutter + Azure Devops\n- 2 Back-End developers. .Net Core + Azure Devops\n- 2 QA\nSet the technical strategy and vision for the team.\nPrioritize, delegate and supervise all engineers’ activities and deliverables.\nLeading and guiding the team to identify opportunities and career development strategies to enhance their team\'s performance.\nDiscuss the Objective Keys Results (OKR) for each member of the team and have the tracking towards each objective in periodic 1on1 meetings.\nDefine project roadmaps, manage risks, and remove blockers to ensure smooth execution.\nHelp the team by removing any impediment or dependency in order to achieve the expected deliverable increment.\nOversee the end-to-end delivery of IT projects, ensuring they meet deadlines, scope, and quality standards.\nHelp with translation of business requirements into technical needs and actions.\nCoach the team to follow Agile framework (Scrum) and set up the necessary tools to work properly.\nCoordinate activities within their team and with other departments such as marketing, sales, and production to provide insights on product development and communication strategies.',
    icon: Briefcase,
    tags: ['Engineering Management', 'Delivery Management', 'Team Leadership', 'Agile', 'Scrum', 'Azure Devops', 'Flutter', '.Net Core', 'QA'],
  },
  {
    id: 'edu-uoc-cyber',
    type: 'education',
    title: 'Master’s degree in Cybersecurity & Privacy',
    institution: 'UNIVERSITAT OBERTA DE CATALUNYA',
    date: '2021-2023',
    description: 'Focused on cybersecurity principles, data protection, and privacy-enhancing technologies to safeguard information assets.',
    icon: GraduationCap,
    tags: ['Cybersecurity', 'Privacy', 'Data Protection', 'Information Security'],
  },
  {
    id: 'edu-upc-agile',
    type: 'education',
    title: 'Postgraduate in AGILE IT Management',
    institution: 'UNIVERSITAT POLITÈCNICA DE CATALUNYA',
    date: '2020',
    description: 'Specialized in Agile methodologies, Scrum, Kanban, and Lean IT management for efficient project delivery and continuous improvement.',
    icon: GraduationCap,
    tags: ['Agile', 'IT Management', 'Scrum', 'Kanban', 'Lean IT'],
  },
  {
    id: 'exp-seat',
    type: 'experience',
    title: 'Agile Coach / Scrum Master',
    institution: 'SEAT S,A – VOLKSWAGEN GROUP',
    role: 'Agile Coach / Scrum Master',
    date: 'December 2019-October 2020',
    description: 'Provide guidance in Agile methodologies across the company.\nDeveloped the transformation plan in the IT department with collaboration tools, more lean processes and changing mindsets and culture.\nSupport developer teams of the Seat Code (Software Development Center) as the Scrum Master unblocking tasks and facilitating the events.\nCoaching teams with Agile values and principles with training and events.\nEnsure that Agile projects are on track helping and coaching about Scrum methodology.',
    icon: Briefcase,
    tags: ['Agile Coach', 'Scrum Master', 'Agile Transformation', 'Coaching', 'Scrum'],
  },
  {
    id: 'exp-boehringer',
    type: 'experience',
    title: 'Product Owner / Scrum Master',
    institution: 'BOEHRINGER INGELHEIM',
    role: 'Product Owner / Scrum Master',
    date: 'April 2016-November 2019',
    description: 'Settle down the Scrum Scaled collaboration methodology for the project.\nLeading a global digital project as Product Owner.\nEnsure the team heath keeping the motivation and collaboration across the team.\nSupport stakeholders to make them understand Agile projects and the advantages of agile methodologies.\nPrioritize the Product Backlog in order to create a reachable goal for every sprint.\nEnsure the teams have the vision of the product and make sure they feel as part of the project.',
    icon: Briefcase,
    tags: ['Product Owner', 'Scrum Master', 'Scaled Scrum', 'Stakeholder Management', 'Product Backlog'],
  },
  {
    id: 'edu-uoc-mobile',
    type: 'education',
    title: 'Master’s degree in Mobile Application Development',
    institution: 'UNIVERSITAT OBERTA DE CATALUNYA',
    date: '2018-2019',
    description: 'Comprehensive training in developing applications for various mobile platforms, including native and cross-platform technologies.',
    icon: GraduationCap,
    tags: ['Mobile Development', 'iOS', 'Android', 'App Development', 'UX/UI'],
  },
  {
    id: 'exp-altran',
    type: 'experience',
    title: 'Software Engineer',
    institution: 'ALTRAN',
    role: 'Software Engineer',
    date: 'January 2014-March 2016',
    description: 'Working in the top Spanish banking project, offering Microsoft solutions for their intranet and e-commerce platform. Developer (.Net / JS) team member and leading the team after one year, working with Scrum framework.',
    icon: Briefcase,
    tags: ['Software Engineer', '.Net', 'JavaScript', 'Scrum', 'Banking'],
  },
  {
    id: 'edu-upf-cs',
    type: 'education',
    title: 'Bachelor’s degree in Computer Engineering',
    institution: 'UNIVERSITAT POMPEU FABRA',
    date: '2007-2011',
    description: 'Fundamental and advanced concepts in computer science, software engineering, algorithms, data structures, and hardware systems.',
    icon: GraduationCap,
    tags: ['Computer Engineering', 'Software Development', 'Algorithms', 'Data Structures', 'System Design'],
  },
];
