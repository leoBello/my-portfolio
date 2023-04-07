import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const Contact = () => {
  const { copied, setCopied } = useState(false);
  const { value, setValue } = useState("");
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="title-container">
          <h3 className="projects-title">Contact</h3>
        </div>
        <div className="contact-content">
          <div className="contact-photo">
            <img src="leo_bello2.png" alt="M" />
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
            <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
              <span className="mail">leobello.wd@gmail.com</span>
            </CopyToClipboard>
            {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
