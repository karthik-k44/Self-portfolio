import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-shell">
      <div className="page-container">
        <div className="page-intro fade-up">
          <div className="page-kicker">Contact</div>
          <h2 className="page-title page-title--compact">Contact Me</h2>
          <p className="page-subtitle">
            Let&apos;s connect about roles, collaboration, or building something
            meaningful together.
          </p>
        </div>

        <div className="contact-grid">
          <div className="panel-card contact-card fade-up">
            <div className="page-kicker">Get In Touch</div>
            <h3 className="section-heading mt-4">Direct Contact</h3>
            <p className="section-copy">
              Reach out through any of the channels below and I&apos;ll get back
              to you as soon as I can.
            </p>

            <div className="contact-stack">
              <div className="contact-row">
                <div className="contact-icon">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">8606643996</span>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">
                    Karthikkarunakaran444@gmail.com
                  </span>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Thrissur, Kerala</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="panel-card contact-card fade-up"
            style={{ animationDelay: '120ms' }}
          >
            <div className="page-kicker">Message</div>
            <h3 className="section-heading mt-4">Send a Note</h3>
            <p className="section-copy">
              Share a quick message and I&apos;ll follow up through email.
            </p>

            <form
              action="https://formspree.io/f/xjkgoqjq"
              className="contact-form mt-6"
              data-netlify="true"
              name="contact"
              method="POST"
            >
              <div className="contact-field">
                <label htmlFor="name" className="contact-label-text">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email" className="contact-label-text">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message" className="contact-label-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="contact-input contact-textarea"
                  placeholder="Tell me a bit about your idea or opportunity."
                  required
                />
              </div>

              <button type="submit" className="primary-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
