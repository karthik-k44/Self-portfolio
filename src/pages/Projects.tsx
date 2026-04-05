import { ExternalLink, Github as GitHub } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import calorie from './Assets/calorie calculator.png';
import meditrack from './Assets/Meditrack/meditrack.png';
import mt1 from './Assets/Meditrack/mt1.png';
import mt2 from './Assets/Meditrack/mt2.png';
import mt3 from './Assets/Meditrack/mt3.png';
import mt4 from './Assets/Meditrack/mt4.png';
import mt5 from './Assets/Meditrack/mt5.png';
import cf1 from './Assets/CodeFit/Screenshot 2025-03-04 110710.png';
import cf2 from './Assets/CodeFit/Screenshot 2025-03-04 110731.png';
import cf3 from './Assets/CodeFit/Screenshot 2025-03-04 110742.png';
import cf4 from './Assets/CodeFit/Screenshot 2025-03-04 110751.png';
import cf5 from './Assets/CodeFit/Screenshot 2025-03-04 110820.png';
import cf6 from './Assets/CodeFit/Screenshot 2025-03-04 110834.png';
import od1 from './Assets/OceanDefender/od1.png';
import od2 from './Assets/OceanDefender/od2.png';
import portfolio from './Assets/PortFolio/portfolio.png';
import pf1 from './Assets/PortFolio/pf1.png';
import pf2 from './Assets/PortFolio/pf2.png';
import pf3 from './Assets/PortFolio/pf3.png';
import ss1 from './Assets/SkillSphere/ss1.png';
import ss2 from './Assets/SkillSphere/ss2.png';
import ss3 from './Assets/SkillSphere/ss3.png';
import ss4 from './Assets/SkillSphere/ss4.png';

const projects = [
  {
    title: 'SkillSphere',
    description:
      'SkillSphere is a full-stack TypeScript project focused on helping users understand their skills, improve with targeted guidance, and prepare strong resume content.',
    images: [ss1, ss2, ss3, ss4],
    github: 'https://github.com/karthik-k44/Skill-Sphere',
    demo: 'https://skill-sphere-portal.vercel.app',
    tags: [
      'React.JS',
      'NodeJs',
      'Express',
      'Redux Toolkit',
      'Formik',
      'Tailwind',
      'Typescript',
      'Mongo DB',
      'OpenAI API',
      'JWT Authentication',
    ],
  },
  {
    title: 'CodeFit',
    description:
      "CodeFit is a candidate recruiting web application that validates a candidate's GitHub profile to assist companies in hiring decisions",
    images: [cf1, cf2, cf3, cf4, cf5, cf6],
    github: 'https://github.com/karthik-k44/CodeFit',
    demo: 'https://code-fit.vercel.app/',
    tags: ['Next', 'Tailwind', 'Typescript', 'Mongo DB'],
  },
  {
    title: 'MediTrack',
    description:
      'MediTrack is an intuitive and user-friendly platform designed to help users efficiently track their medications, appointments, and health records.',
    images: [meditrack, mt1, mt2, mt3, mt4, mt5],
    github: 'https://github.com/karthik-k44/Medication-Management-App',
    demo: 'https://meditrackapplication.netlify.app/',
    tags: ['React', 'Tailwind', 'Typescript', 'Firebase'],
  },
  {
    title: 'Ocean Defender',
    description:
      'Ocean Defender features a player navigating a canvas-based environment with a spaceship while fending off various enemies using projectiles.',
    images: [od1, od2],
    github: 'https://github.com/karthik-k44/Ocean-Defender',
    demo: 'https://ocean-defender.vercel.app/',
    tags: ['React', 'Tailwind', 'Typescript'],
  },
  {
    title: 'Calorie Calculator',
    description:
      'Calorie Calculator is your one-stop solution for managing daily caloric intake. Instantly search for dishes and access their calorie information to make informed dietary choices.',
    images: [calorie],
    github: 'https://github.com/karthik-k44/Calorie_Calculator/',
    demo: 'https://calorie-calculator-hackathon.netlify.app/',
    tags: ['JS', 'React', 'Tailwind'],
  },
  {
    title: 'Self Portfolio',
    description: 'Self Portfolio, for presenting my skills and projects.',
    images: [portfolio, pf1, pf2, pf3],
    github: 'https://github.com/karthik-k44/Self-portfolio/tree/portfolio1',
    demo: 'https://karthikkarunakaran.netlify.app/',
    tags: ['React', 'Tailwind', 'Typescript'],
  },
];

const Projects = () => {
  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="page-intro fade-up">
          <div className="page-kicker">Selected Work</div>
          <h2 className="page-title page-title--compact">My Projects</h2>
          <p className="page-subtitle">
            Product-focused builds across web apps, tooling, and interactive
            experiences.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="panel-card interactive-card project-card fade-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="project-media">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  showArrows={project.images.length > 1}
                  showIndicators={project.images.length > 1}
                  infiniteLoop={project.images.length > 1}
                  autoPlay={project.images.length > 1}
                  emulateTouch
                  interval={4000}
                >
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <img
                        src={image}
                        alt={`${project.title} screenshot`}
                        className="project-screenshot"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              <div className="project-content">
                <div>
                  <div className="page-kicker mb-4">Project {index + 1}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description mt-3">{project.description}</p>
                </div>

                <div className="project-tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    <GitHub size={18} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
