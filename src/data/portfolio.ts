import {
  Code2,
  Database,
  Layers,
  GitBranch,
  Users,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Karthik Karunakaran',
  firstName: 'Karthik K',
  role: 'Full Stack Developer',
  tagline: 'I build scalable, beautiful web applications with the MERN stack.',
  location: 'Thrissur, Kerala, India',
  email: 'karthikkarunakaran444@gmail.com',
  phone: '8606643996',
  github: 'https://github.com/karthik-k44',
  linkedin: 'https://www.linkedin.com/in/karthik-k-7340342aa/',
  resumeUrl: '/Karthik-CV.pdf',
};

export const about = {
  title: 'Full Stack Web Developer',
  paragraphs: [
    "I'm a Full Stack Web Developer with 1+ years of hands-on experience in a product-based environment, building and deploying scalable web applications using the MERN stack.",
    'I specialize in designing and consuming RESTful APIs, integrating frontend and backend systems, and managing state with modern tools like Redux Toolkit. I work well in Agile teams, contribute to end-to-end feature development, and care deeply about performance, scalability, and clean architecture.',
  ],
  highlights: [
    { label: 'Years experience', value: '1+' },
    { label: 'Projects shipped', value: '6+' },
    { label: 'Stack', value: 'MERN' },
  ],
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export interface SkillGroup {
  name: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
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

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Kuvi Networks',
    period: 'March 2025 — February 2026',
    description:
      'Building and deploying scalable web applications with the MERN stack, owning end-to-end feature development in an Agile environment.',
    achievements: [
      'Developed, deployed, and maintained end-to-end full-stack applications using React.js, Node.js, and PostgreSQL, managing the complete software development lifecycle from implementation to production deployment.',
      'Built a dynamic Guidebook system enabling hosts to manage and publish real-time guest information, including check-in instructions and local recommendations, achieving adoption across all onboarded host accounts.',
      'Delivered a scalable multi-user Store module supporting seller and customer workflows, improving transaction completion rates and overall platform usability.',
      'Contributed to product development during a period of approximately 840% MRR growth and 600% user growth, supporting the platforms rapid scale.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs', 'AWS S3', 'JWT', 'Formik', 'Zod', 'React Query', ],
  },
  {
    role: 'Full Stack Engineer (Intern)',
    company: 'Masai School',
    period: '2024 — 2025',
    description:
      'Completed a full-time Full-Stack Development program at Masai School, gaining hands-on experience in React, Next.js, Node.js, MongoDB, MySQL, and TypeScript. Participated in hackathons, collaborating with teams to build and deliver projects under 48Hour deadlines.',
    achievements: [
      'Shipped SkillSphere — a skill-assessment platform powered by the OpenAI API',
      'Built CodeFit — a recruiting tool that validates GitHub profiles for hiring',
      'Created MediTrack — a medication & health-record tracker with Firebase',
      'Won and placed in hackathons shipping production-ready apps end-to-end',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Firebase', 'OpenAI API', 'JWT', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Tailwind CSS'],
  },
];

export interface Project {
  title: string;
  description: string;
  github: string;
  demo: string;
  tags: string[];
  accent: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title: 'SkillSphere',
    description:
      'A full-stack TypeScript platform that helps users understand their skills, improve with targeted guidance, and prepare strong resume content.',
    github: 'https://github.com/karthik-k44/Skill-Sphere',
    demo: 'https://skill-sphere-portal.vercel.app',
    tags: [
      'React',
      'Node.js',
      'Express',
      'Redux Toolkit',
      'Formik',
      'Tailwind',
      'TypeScript',
      'MongoDB',
      'OpenAI API',
      'JWT',
    ],
    accent: 'from-accent-400/30 to-accent-600/10',
    images: ['ss0.png', 'ss1.png', 'ss2.png', 'ss3.png', 'ss4.png'],
  },
  {
    title: 'CodeFit',
    description:
      'A candidate recruiting web application that validates a candidate’s GitHub profile to assist companies in hiring decisions.',
    github: 'https://github.com/karthik-k44/CodeFit',
    demo: 'https://code-fit.vercel.app/',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'MongoDB'],
    accent: 'from-emerald-400/30 to-emerald-600/10',
    images: [
      'Screenshot 2025-03-04 110710.png',
      'Screenshot 2025-03-04 110731.png',
      'Screenshot 2025-03-04 110742.png',
      'Screenshot 2025-03-04 110751.png',
      'Screenshot 2025-03-04 110820.png',
      'Screenshot 2025-03-04 110834.png',
    ],
  },
  {
    title: 'MediTrack',
    description:
      'An intuitive platform to efficiently track medications, appointments, and health records — built with Firebase.',
    github: 'https://github.com/karthik-k44/Medication-Management-App',
    demo: 'https://meditrackapplication.netlify.app/',
    tags: ['React', 'Tailwind', 'TypeScript', 'Firebase'],
    accent: 'from-rose-400/30 to-rose-600/10',
    images: ['meditrack.png', 'mt1.png', 'mt2.png', 'mt3.png', 'mt4.png', 'mt5.png'],
  },
  {
    title: 'Ocean Defender',
    description:
      'A canvas-based game where a player navigates a spaceship through an environment, fending off enemies with projectiles.',
    github: 'https://github.com/karthik-k44/Ocean-Defender',
    demo: 'https://ocean-defender.vercel.app/',
    tags: ['React', 'Tailwind', 'TypeScript'],
    accent: 'from-sky-400/30 to-sky-600/10',
    images: ['od1.png', 'od2.png'],
  },
  {
    title: 'SmartTask Manager',
    description:
      'SmartTask Manager with Role-based Access control, Admins have a comprehensive dashboard to monitor overall system progress, view all tasks globally, analyze status distributions, and manage registered users. Users create and manage their own tasks everything is securely authorized and fully tracked.',
    github: 'https://github.com/karthik-k44/SmartTask-Manager',
    demo: 'https://smarttask-manager-c5v8.onrender.com/',
    tags: ['Typescript', 'React', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs', 'Formik', 'Redux Toolkit'],
    accent: 'from-amber-400/30 to-amber-600/10',
    images: ['st1.png', 'st2.png', 'st3.png'],
  },
  {
    title: 'Self Portfolio',
    description:
      'A polished, animated personal portfolio with scroll-driven reveal effects, a scroll-spy navbar, and an interactive experience timeline.',
    github: 'https://github.com/karthik-k44/Self-portfolio/tree/portfolio1',
    demo: 'https://karthikkarunakaran.netlify.app/',
    tags: ['React', 'Tailwind', 'TypeScript'],
    accent: 'from-violet-400/30 to-violet-600/10',
    images: ['pf1.png', 'pf2.png', 'pf3.png', 'pf4.png', 'pf5.png'],
  },
];
