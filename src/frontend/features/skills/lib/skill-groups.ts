import { Code2, Database, GitBranch, Layers, Users } from 'lucide-react';
import type { SkillGroupType } from '../types';

export const skillGroups: SkillGroupType[] = [
  {
    name: 'Frontend Development',
    icon: Code2,
    items: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Formik',
      'BrightScript (Roku)',
      'HTML5',
      'CSS3',
    ],
  },
  {
    name: 'Backend Development',
    icon: Layers,
    items: [
      'Node.js',
      'Express.js',
      'RESTful API Development',
      'Request Validation',
      'Response Serialization',
    ],
  },
  {
    name: 'Database',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    name: 'Tools & Dev Practices',
    icon: GitBranch,
    items: [
      'Git',
      'GitHub',
      'Version Control',
      'VS Code',
      'Debugging',
      'Code Reviews',
      'ESLint',
      'Prettier',
    ],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    items: [
      'Communication',
      'Team Collaboration',
      'Problem Solving',
      'Adaptability',
      'Time Management',
      'Ownership & Accountability',
      'Attention to Detail',
      'Continuous Learning',
    ],
  },
];
