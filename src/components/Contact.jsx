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
              href="https://github.com/leoBello"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-github"
            >
              <i className="fa fa-github"></i> GitHub
            </a>
            <a
              href="https://www.malt.fr/profile/leobello"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-malt"
            >
              <i className="fa fa-beer"></i> Malt
            </a>
            <a
              href="https://www.linkedin.com/in/leobellolinkedurl/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
            >
              <i className="fa fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
