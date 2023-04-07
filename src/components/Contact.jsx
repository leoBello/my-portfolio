import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-content">
          <div className="contact-photo">
            <img src="leo.jpg" alt="Votre photo" />
          </div>
          <div className="contact-buttons">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              GitHub
            </a>
            <a
              href="https://www.malt.fr/profile/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-malt"
            >
              Malt
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
