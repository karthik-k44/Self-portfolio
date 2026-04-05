import { Download, FileText } from 'lucide-react';
import { openAndDownloadResume } from '../constants/resume';

const Resume = () => {
  return (
    <div className="page-shell">
      <div className="page-container">
        <section className="panel-card resume-card fade-up">
          <div className="page-kicker">
            <FileText size={16} />
            Resume
          </div>

          <div>
            <h1 className="page-title page-title--compact">Karthik K</h1>
            <p className="page-subtitle">
              Open the PDF in a new tab and download it in one click.
            </p>
          </div>

          <div className="hero-actions">
            <span className="secondary-button">Updated professional profile</span>
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

export default Resume;
