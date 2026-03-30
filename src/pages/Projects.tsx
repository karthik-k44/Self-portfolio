import { ExternalLink, Github as GitHub } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import calorie from "./Assets/calorie calculator.png";
import meditrack from "./Assets/Meditrack/meditrack.png";
import mt1 from "./Assets/Meditrack/mt1.png";
import mt2 from "./Assets/Meditrack/mt2.png";
import mt3 from "./Assets/Meditrack/mt3.png";
import mt4 from "./Assets/Meditrack/mt4.png";
import mt5 from "./Assets/Meditrack/mt5.png";
import cf1 from "./Assets/CodeFit/Screenshot 2025-03-04 110710.png"
import cf2 from "./Assets/CodeFit/Screenshot 2025-03-04 110731.png"
import cf3 from "./Assets/CodeFit/Screenshot 2025-03-04 110742.png"
import cf4 from "./Assets/CodeFit/Screenshot 2025-03-04 110751.png"
import cf5 from "./Assets/CodeFit/Screenshot 2025-03-04 110820.png"
import cf6 from "./Assets/CodeFit/Screenshot 2025-03-04 110834.png"
import od1 from "./Assets/OceanDefender/od1.png"
import od2 from "./Assets/OceanDefender/od2.png"
import portfolio from "./Assets/PortFolio/portfolio.png"
import pf1 from "./Assets/PortFolio/pf1.png"
import pf2 from "./Assets/PortFolio/pf2.png"
import pf3 from "./Assets/PortFolio/pf3.png"
import ss0 from "./Assets/SkillSphere/ss1.png"
import ss1 from "./Assets/SkillSphere/ss1.png"
import ss2 from "./Assets/SkillSphere/ss2.png"
import ss3 from "./Assets/SkillSphere/ss3.png"
import ss4 from "./Assets/SkillSphere/ss4.png"

const projects = [
  {
    title: "SkillSphere",
    description:
      "SkillSphere is a full-stack TypeScript project focused on helping users understand their skills, improve with targeted guidance, and prepare strong resume content.",
    images: [ss0, ss1, ss2, ss3, ss4],
    github: "https://github.com/karthik-k44/Skill-Sphere",
    demo: "https://skill-sphere-portal.vercel.app",
    tags: ["React.JS", "NodeJs", "Express", "Redux Toolkit", "Formik", "Tailwind", "Typescript", "Mongo DB", "OpenAI API", "JWT Authentication"],
  },
  {
    title: "CodeFit",
    description:
      "CodeFit is a candidate recruiting web application that validates a candidate's GitHub profile to assist companies in hiring decisions",
    images: [cf1, cf2, cf3, cf4, cf5, cf6],
    github: "https://github.com/karthik-k44/CodeFit",
    demo: "https://code-fit.vercel.app/",
    tags: ["Next", "Tailwind", "Typescript", "Mongo DB"],
  },

  {
    title: "MediTrack",
    description:
      "MediTrack is an intuitive and user-friendly platform designed to help users efficiently track their medications, appointments, and health records.",
    images: [meditrack, mt1, mt2, mt3, mt4, mt5],
    github: "https://github.com/karthik-k44/Medication-Management-App",
    demo: "https://meditrackapplication.netlify.app/",
    tags: ["React", "Tailwind", "Typescript", "Firebase"],
  },
  {
    title: 'Ocean Defender',
    description: 'Ocean Defender, features a player navigating a canvas-based environment with a spaceship while fending off various enemies using projectiles.',
    images: [od1,od2],
    github: 'https://github.com/karthik-k44/Ocean-Defender',
    demo: 'https://ocean-defender.vercel.app/',
    tags: ['React', 'Tailwind', 'Typescript',],
  },
  {
    title: "Calorie Calculator",
    description:
      "Calorie Calculator is your one-stop solution for managing daily caloric intake. Instantly search for dishes and access their calorie information to make informed dietary choices.",
    images: [calorie],
    github: "https://github.com/karthik-k44/Calorie_Calculator/",
    demo: "https://calorie-calculator-hackathon.netlify.app/",
    tags: ["JS", "React", "Tailwind"],
  },
  {
    title: 'Self Portfolio',
    description: 'Self Portfolio, for presenting my skills and projects.',
    images: [portfolio, pf1, pf2, pf3],
    github: 'https://github.com/karthik-k44/Self-portfolio/tree/portfolio1',
    demo: 'https://karthikkarunakaran.netlify.app/',
    tags: ['React', 'Tailwind', 'Typescript',],
  },
];

const Projects = () => {
  return (
    <div className="py-24 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <Carousel showThumbs={false} infiniteLoop autoPlay>
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </Carousel>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <GitHub size={20} className="mr-1" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <ExternalLink size={20} className="mr-1" />
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
