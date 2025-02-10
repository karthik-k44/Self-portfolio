import React from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import webgame from "./Assets/webgame.png";
import calorie from "./Assets/calorie calculator.png";
import portfolio from "./Assets/portfolio.png";
import meditrack from "./Assets/Meditrack/meditrack.png";
import mt1 from "./Assets/Meditrack/mt1.png";
import mt2 from "./Assets/Meditrack/mt2.png";
import mt3 from "./Assets/Meditrack/mt3.png";
import mt4 from "./Assets/Meditrack/mt4.png";
import mt5 from "./Assets/Meditrack/mt5.png";


const projects = [
  {
    title: 'MediTrack',
    description: 'MediTrack is an intuitive and user-friendly platform designed to help users efficiently track their medications, appointments, and health records.',
    images: [meditrack,mt1,mt2,mt3,mt4,mt5],
    github: 'https://github.com/karthik-k44/Medication-Management-App',
    demo: 'https://meditrackapplication.netlify.app/',
    tags: ['React', 'Tailwind', 'Typescript', 'Firebase'],
  },
  {
    title: 'JS Web Game',
    description: 'This HTML5 game, Galaxy Defender, features a player navigating a canvas-based environment with a spaceship while fending off various enemies using projectiles.',
    images: [webgame],
    github: 'https://github.com/karthik-k44/JS-web-game-',
    demo: '',
    tags: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'Calorie Calculator',
    description: 'Calorie Calculator is your one-stop solution for managing daily caloric intake. Instantly search for dishes and access their calorie information to make informed dietary choices.',
    images: [calorie],
    github: 'https://github.com/karthik-k44/Calorie_Calculator/',
    demo: 'https://calorie-calculator-hackathon.netlify.app/',
    tags: ['JS', 'React', 'Tailwind'],
  },
  {
    title: 'Self Portfolio',
    description: 'Self Portfolio, for presenting my skills and projects.',
    images: [portfolio],
    github: 'https://github.com/karthik-k44/Self-portfolio/tree/portfolio1',
    demo: 'https://karthikkarunakaran.netlify.app/',
    tags: ['JS', 'React', 'Tailwind'],
  },
];

const Projects = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Carousel showThumbs={false} infiniteLoop autoPlay>
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img src={image} alt={`${project.title} screenshot`} className="w-full h-48 object-cover" />
                  </div>
                ))}
              </Carousel>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
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
