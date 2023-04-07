import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul>
          <div className="link-wrapper">
            <li>
              <a className="link hover-1" href="#about">
                À propos
              </a>
            </li>
          </div>
          <div className="link-wrapper">
            <li>
              <a className="link hover-1" href="#projects">Projets</a>
            </li>
          </div>
          <div className="link-wrapper">
            <li>
              <a className="link hover-1" href="#contact">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
