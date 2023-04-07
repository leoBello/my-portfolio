import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BlurBottom } from "./Blur";

const text1 = `Développeur web passionné et spécialisé en JavaScript, React et Node.js,\n j'ai plusieurs années d'expérience freelance à mon actif.\n`;
const text2 = `Mes compétences solides en conception et réalisation de projets web innovants sont renforcées par mon souci constant de la qualité du code, de l'ergonomie et de l'expérience utilisateur.\n`;
const text3 = `Toujours en quête de défis et d'opportunités, je vise à enrichir mon savoir-faire et contribuer à la réussite de projets ambitieux.\n`
const text4 = `Mon but : créer des applications web performantes et attrayantes, répondant aux exigences des clients et des utilisateurs\n`;

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <TypeAnimation
            sequence={[
              text1,
              600,
              `${text1}${text2}`,
              800,
              `${text1}${text2}${text3}`,
              700,
              `${text1}${text2}${text3}${text4}`,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            speed={85}
            className="animated-text"
            // style={{ fontSize: "2em", display: "inline-block" }}
          ></TypeAnimation>
        </div>
        <BlurBottom />
      </div>
    </section>
  );
};

export default About;
