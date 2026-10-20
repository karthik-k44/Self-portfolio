import type { ExperienceType } from '../types';

export const experiences: ExperienceType[] = [
  {
    role: 'Frontend Developer',
    company: 'Codenzic',
    period: 'August 2026 — Present',
    location: 'Kochi, Kerala',
    current: true,
    description:
      'Vendor Admin Portal (Service Management Platform) — building client-facing product portals and the company website.',
    achievements: [
      'Delivered the Vendor Admin portal for a service-management platform end to end in 1 month, giving vendor admins one place to onboard their business and manage technicians, fleet, rate cards, services, coverage, work orders and scheduling across 8 product epics; presented it to the client and completed the handover.',
      'Integrated REST APIs for vendor profile, settings and rate card workflows (create, history, resubmit) through typed TypeScript service layers.',
      'Implemented English/Arabic internationalization (i18n) across the product portal and company website, including a shared translation structure and language switcher.',
      "Rebuilt the company website's services, projects, blog and FAQ pages, and built the UI for a WhatsApp bulk-messaging tool.",
    ],
    stack: ['TypeScript', 'REST APIs', 'i18n (English / Arabic)'],
  },
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
