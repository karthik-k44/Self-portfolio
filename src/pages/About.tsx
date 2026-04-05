const About = () => {
  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="page-intro fade-up">
          <div className="page-kicker">About</div>
          <h2 className="page-title page-title--compact">About Me</h2>
        </div>
        <div className="panel-card fade-up" style={{ animationDelay: '120ms' }}>
          <p className="about-copy">
            Full Stack Web Developer with nearly 1 year of hands-on experience
            in a product-based environment, building and deploying scalable web
            applications using the MERN stack. Skilled in designing and
            consuming RESTful APIs, integrating frontend and backend systems,
            and managing state using modern tools like Redux Toolkit.
            Experienced in working in Agile teams, contributing to end-to-end
            feature development, and ensuring performance, scalability, and
            clean architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
