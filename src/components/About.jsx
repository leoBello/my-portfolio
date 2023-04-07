import React, { useEffect, useState } from 'react';

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText((prevDisplayText) => prevDisplayText + text.charAt(index));
      index++;

      if (index > text.length) {
        clearInterval(typingInterval);
      }
    }, 60); // Vitesse de frappe (en ms)

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return <span className="typing-text">{displayText}</span>;
};


const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <p className="about-text">
            Je suis un développeur web passionné, spécialisé en JavaScript,
            React et Node.js. Fort d'une expérience de plusieurs années en tant
            que freelance, j'ai acquis des compétences solides dans la
            conception et la réalisation de projets web variés et innovants.
            J'attache une grande importance à la qualité du code, à l'ergonomie
            et à l'expérience utilisateur.
          </p>
          <br />
          <p className="about-text">
            Je suis constamment à la recherche de nouveaux défis et de nouvelles
            opportunités pour enrichir mon savoir-faire et contribuer à la
            réussite de projets ambitieux. Mon objectif est de créer des
            applications web efficaces et esthétiques, qui répondent aux besoins
            des clients et des utilisateurs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
