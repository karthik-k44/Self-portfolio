import { Download, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import karthik from './Assets/karthik-image.png';
import { openAndDownloadResume } from '../constants/resume';

const Home = () => {
  return (
    <div className="page-shell">
      <div className="page-container">
        <section className="hero-grid">
          <div className="panel-card hero-copy fade-up">
            <div className="meta-chip">Full Stack Developer</div>
            <div>
              <p className="hero-greeting">Hi, I&apos;m</p>
              <h1 className="hero-title">
                Karthik
                <span>creating beautiful and functional web applications.</span>
              </h1>
            </div>
            <p className="hero-note">
              I build polished, scalable web experiences with a strong focus on
              clean architecture, performance, and product-minded execution.
            </p>

            <div className="social-row">
              <a
                href="https://github.com/karthik-k44"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="Visit Karthik's GitHub profile"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-k-7340342aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="Visit Karthik's LinkedIn profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:karthikkarunakaran444@gmail.com"
                className="social-button"
                aria-label="Send Karthik an email"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="hero-panel-footer">
              <div className="meta-chip">MERN Stack</div>
              <div className="meta-chip">TypeScript</div>
              <div className="meta-chip">Redux Toolkit</div>
            </div>
          </div>

          <div
            className="panel-card profile-card fade-up"
            style={{ animationDelay: '120ms' }}
          >
            <div className="profile-visual">
              <img
                src={karthik}
                alt="Karthik portrait"
                className="profile-image"
              />
              <div className="profile-chip">Portfolio 2026</div>
            </div>
          </div>
        </section>

        <section
          className="panel-card resume-strip fade-up"
          style={{ animationDelay: '240ms' }}
        >
          <div className="resume-strip-copy">
            <div className="page-kicker">Resume</div>
            <h2 className="section-heading mt-4">View My Professional Profile</h2>
            <p>
              Open the latest resume in a new tab and download it in one click.
            </p>
          </div>
          <div className="hero-actions">
            <span className="secondary-button">Available for full stack roles</span>
            <button
              type="button"
              onClick={openAndDownloadResume}
              className="primary-button"
            >
              <Download size={18} />
              Download
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
