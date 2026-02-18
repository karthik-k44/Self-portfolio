import { Code, Database, Layout } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Layout className="w-6 h-6" />, items: ['React', 'TypeScript', 'Tailwind CSS', "Redux Toolkit", "Formik",  "BrightScript (Roku)", "HTML5", "CSS3", ] },
    { name: 'Backend Development', icon: <Code className="w-6 h-6" />, items: [ "Node.js", "Express.js", "RESTful API Development", "Request Validation", "Response Serialization"] },
    { name: 'Database', icon: <Database className="w-6 h-6" />, items: ['MongoDB', 'PostgreSQL'] },
    { name: 'Tools Dev Practices', icon: <Code className="w-6 h-6" />, items: ['Git', 'GitHub', 'Version Control', 'VS Code', 'Debugging', 'Code Reviews', "ESLint", "Prettier"] },
  ];

  return (
    <div className="py-24 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
               Full Stack Web Developer with nearly 1 year of hands-on experience in a product-based environment, building and deploying scalable web applications using the MERN stack. Skilled in designing and consuming RESTful APIs, integrating frontend and backend systems, and managing state using modern tools like Redux Toolkit. Experienced in working in Agile teams, contributing to end-to-end feature development, and ensuring performance, scalability, and clean architecture.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 dark:text-gray-300">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;