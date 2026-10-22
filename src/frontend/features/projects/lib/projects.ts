import type { ProjectType } from '../types';

export const projects: ProjectType[] = [
  {
    title: 'SkillSphere',
    kind: 'AI career toolkit · Full stack',
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
    glow: 'from-violet-600 to-violet-400',
    featured: true,
    live: true,
    glimpseTheme: 'light',
  },
  {
    title: 'CodeFit',
    kind: 'Recruiting · Next.js',
    description:
      'A candidate recruiting web application that validates a candidate’s GitHub profile to assist companies in hiring decisions.',
    github: 'https://github.com/karthik-k44/CodeFit',
    demo: 'https://code-fit.vercel.app/',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'MongoDB'],
    glow: 'from-blue-700 to-accent-400',
    featured: true,
    live: true,
  },
  {
    title: 'MediTrack',
    kind: 'Health · Firebase',
    description:
      'An intuitive platform to efficiently track medications, appointments, and health records — built with Firebase.',
    github: 'https://github.com/karthik-k44/Medication-Management-App',
    demo: 'https://meditrackapplication.netlify.app/',
    tags: ['React', 'Tailwind', 'TypeScript', 'Firebase'],
    glow: 'from-cyan-700 to-emerald-400',
    featured: true,
    live: true,
  },
  {
    title: 'Ocean Defender',
    kind: 'Canvas arcade game',
    description:
      'A canvas-based game where a player navigates a spaceship through an environment, fending off enemies with projectiles.',
    github: 'https://github.com/karthik-k44/Ocean-Defender',
    demo: 'https://ocean-defender.vercel.app/',
    tags: ['React', 'Tailwind', 'TypeScript'],
    glow: 'from-sky-600 to-indigo-500',
    featured: false,
    live: true,
  },
  {
    title: 'Self Portfolio',
    kind: 'Portfolio · shadcn/ui',
    description:
      'A polished, animated personal portfolio with scroll-driven reveal effects, a scroll-spy navbar, and an interactive experience timeline.',
    github: 'https://github.com/karthik-k44/Self-portfolio/tree/portfolio1',
    demo: 'https://karthikkarunakaran.netlify.app/',
    tags: ['React', 'Tailwind', 'TypeScript'],
    glow: 'from-indigo-500 to-violet-400',
    featured: false,
    live: true,
  },
];
