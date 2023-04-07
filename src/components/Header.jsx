import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
