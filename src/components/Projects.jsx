import React from "react";

const ProjectCard = ({ image, title, description, onClick }) => (
  <div className="project-card" onClick={onClick}>
    <img src={image} alt={title} />
    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Projects = () => {
  const handleCardClick = () => {
    // Ici, vous pouvez gérer les actions à effectuer lors du clic sur une carte
    console.log("Carte cliquée");
  };

  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <div className="title-container">
          <h3 className="projects-title">Projets</h3>
        </div>
        <div className="projects-grid">
          <ProjectCard
            image="card4.png"
            title="Yooz"
            description="Evol et maintance sur un projet de gestion de factures éléctroniques, développement de nouvelles features"
            onClick={handleCardClick}
          />
          <ProjectCard
            image="card2.png"
            title="Amilnote"
            description="Projet de gestions des collaborateurs, des notes de frais et des congés de l'entreprise Amiltone"
            onClick={handleCardClick}
          />
          <ProjectCard
            image="card3.png"
            title="Safran"
            description="Outils de gestion du réseau élécrtrique français de l'entreprise RTE"
            onClick={handleCardClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
