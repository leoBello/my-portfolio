import React from "react";
import { TypeAnimation } from "react-type-animation";

// const TypingText = ({ text }) => {
//   const displayText = useTypewriter(text);

//   return <span>{displayText}</span>;
// };

const text2 = `Je suis constamment à la recherche de nouveaux défis et de
nouvelles opportunités pour enrichir mon savoir-faire et
contribuer à la réussite de projets ambitieux. Mon objectif est de
créer des applications web efficaces et esthétiques, qui répondent
aux besoins des clients et des utilisateurs.`;	

const text = `Je suis un développeur web passionné, spécialisé en JavaScript,
React et Node.js. Fort d'une expérience de plusieurs années en tant
que freelance, j'ai acquis des compétences solides dans la
conception et la réalisation de projets web variés et innovants.
J'attache une grande importance à la qualité du code, à l'ergonomie
et à l'expérience utilisateur.`;

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <TypeAnimation
            sequence={[
              text, 
              1000, 
              `${text} ${text2}`, 
              () => {
                console.log("Sequence completed"); 
              },
            ]}
            wrapper="span"
            cursor={true}
            speed={70}
            // style={{ fontSize: "2em", display: "inline-block" }}
          >
          </TypeAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
