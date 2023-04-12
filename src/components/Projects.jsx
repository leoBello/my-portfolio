import React from "react";

const Projects = () => {
  const handleCardClick = () => {
    // Ici, vous pouvez gérer les actions à effectuer lors du clic sur une carte
    console.log("Carte cliquée");
  };

  const cpLinks = [
    {
      name: "Edition 2022",
      target: "https://cp2022-web-site.vercel.app/",
    },
    {
      name: "Edition 2023",
      target: "https://www.chateauperche.com/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <div className="title-container">
          <h3 className="projects-title">Projets</h3>
        </div>
        <div className="projects-grid">
          <ProjectCard
            image="card1-1.png"
            title="Yooz"
            description="Evol et maintance sur un projet de gestion de factures éléctroniques, développement de nouvelles features, Angular / NodeJS"
            onClick={handleCardClick}
          />
          <ProjectCard
            image="card2-1.png"
            title="Amilnote"
            description="TMA sur un Projet de gestion des collaborateurs, des notes de frais et des congés de l'entreprise Amiltone, React / NodeJS"
            onClick={handleCardClick}
          />
          <ProjectCard
            image="card3-1.png"
            title="CP 2022 - 2023"
            description="2 sites web pour le chateau perché festival en React : "
            onClick={handleCardClick}
            links={cpLinks}
          />
          <ProjectCard
            image="card4-1.png"
            title="Safran"
            description="Outil de gestion du réseau éléctrique français de l'entreprise RTE, Java EE Angular"
            onClick={handleCardClick}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ image, title, description, onClick, links }) => (
  <div className="card-container" onClick={onClick}>
    <div class="card">
      <div class="front">
        <img src={image} alt={title} />
        <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
      {links &&
        links.map((link) => {
          return (
            <p>
              <a
                className="project-link"
                href={link.target}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            </p>
          );
        })}
    </div>
      </div>
      <div class="back">
        <h1>Back of Card</h1>
        <p>Additional info on the back of the card</p>
      </div>
    </div>
  </div>
);

export default Projects;
