import React from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import webgame from "./Assets/webgame.png"
import calorie from "./Assets/calorie calculator.png"
import portfolio from "./Assets/portfolio.png"
const projects = [
  {
    title: 'JS Web Game',
    description: 'This HTML5 game, Galaxy Defender, features a player navigating a canvas-based environment with a spaceship while fending off various enemies using projectiles. The game includes multiple classes for handling player input, projectiles, enemies, and visual effects like explosions and particles.',
    image: webgame,
    github: 'https://github.com/karthik-k44/JS-web-game-',
    demo: '',
    tags: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'Calorie Calculator',
    description: 'Calorie Calculator is your one-stop solution for managing daily caloric intake. Instantly search for dishes and access their calorie information to make informed dietary choices. With an intuitive interface, our platform simplifies meal tracking, promoting a healthier lifestyle for users of all ages',
    image: calorie,
    github: 'https://github.com/karthik-k44/Calorie_Calculator/',
    demo: 'https://calorie-calculator-hackathon.netlify.app/m',
    tags: ['JS', 'React', 'Tailwind'],
  },
  {
    title: 'Self Portfolio',
    description: 'Self Portfolio, for presenting my skills and projects',
    image: portfolio,
    github: '',
    demo: '',
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
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
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;