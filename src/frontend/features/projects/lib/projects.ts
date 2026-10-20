import type { ProjectType } from '../types';

export const projects: ProjectType[] = [
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
    live: true,
    glimpseTheme: 'dark',
  },
  {
    title: 'CodeFit',
    description:
      'A candidate recruiting web application that validates a candidate’s GitHub profile to assist companies in hiring decisions.',
    github: 'https://github.com/karthik-k44/CodeFit',
    demo: 'https://code-fit.vercel.app/',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'MongoDB'],
    accent: 'from-emerald-400/30 to-emerald-600/10',
    live: true,
  },
  {
    title: 'MediTrack',
    description:
      'An intuitive platform to efficiently track medications, appointments, and health records — built with Firebase.',
    github: 'https://github.com/karthik-k44/Medication-Management-App',
    demo: 'https://meditrackapplication.netlify.app/',
    tags: ['React', 'Tailwind', 'TypeScript', 'Firebase'],
    accent: 'from-rose-400/30 to-rose-600/10',
    live: true,
  },
  {
    title: 'Ocean Defender',
    description:
      'A canvas-based game where a player navigates a spaceship through an environment, fending off enemies with projectiles.',
    github: 'https://github.com/karthik-k44/Ocean-Defender',
    demo: 'https://ocean-defender.vercel.app/',
    tags: ['React', 'Tailwind', 'TypeScript'],
    accent: 'from-sky-400/30 to-sky-600/10',
    live: true,
  },
  {
    title: 'Self Portfolio',
    description:
      'A polished, animated personal portfolio with scroll-driven reveal effects, a scroll-spy navbar, and an interactive experience timeline.',
    github: 'https://github.com/karthik-k44/Self-portfolio/tree/portfolio1',
    demo: 'https://karthikkarunakaran.netlify.app/',
    tags: ['React', 'Tailwind', 'TypeScript'],
    accent: 'from-violet-400/30 to-violet-600/10',
    live: true,
  },
];
