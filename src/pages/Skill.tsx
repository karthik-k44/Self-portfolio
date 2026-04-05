import { Code, Database, Layout, Users } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'Frontend Development',
      icon: <Layout className="h-6 w-6" />,
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
      icon: <Code className="h-6 w-6" />,
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
      icon: <Database className="h-6 w-6" />,
      items: ['MongoDB', 'PostgreSQL'],
    },
    {
      name: 'Tools Dev Practices',
      icon: <Code className="h-6 w-6" />,
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
      icon: <Users className="h-6 w-6" />,
      items: [
        'Communication',
        'Team Collaboration',
        'Problem Solving',
        'Adaptability',
        'Time Management',
        'Ownership and Accountability',
        'Attention to Detail',
        'Continuous Learning',
      ],
    },
  ];

  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="page-intro fade-up">
          <div className="page-kicker">Capabilities</div>
          <h2 className="page-title page-title--compact">Skills</h2>
          <p className="page-subtitle">
            A balanced stack across frontend, backend, data, and collaboration.
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="panel-card interactive-card skill-card fade-up"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-title">{skill.name}</h3>
              </div>

              <ul className="skill-list">
                {skill.items.map((item) => (
                  <li key={item} className="skill-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
