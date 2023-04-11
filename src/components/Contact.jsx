import React from "react";
import { ClipboardCopy } from "./CopyTextToClipboard";
import { BlurTop } from "./Blur";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <BlurTop />
      <div className="container">
        <div className="contact-container">
          <div className="title-container">
            <h3 className="projects-title">Contact</h3>
          </div>
          <div className="contact-content">
            <div className="contact-photo">
              <img src="leo_bello2.png" alt="M" />
            </div>
            <div className="contact-buttons">
              <a
                href="https://www.linkedin.com/in/leobellolinkedurl/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin"
              >
                <i className="fa fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://www.malt.fr/profile/leobello"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-malt"
              >
                <i className="fa fa-star"></i> Malt
              </a>
              <a
                href="https://github.com/leoBello"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github"
              >
                <i className="fa fa-github"></i> GitHub
              </a>
              <ClipboardCopy copyText="leobello.wd@gmail.com" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
