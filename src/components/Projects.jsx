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

  const technos = {
    react: "react.png",
    nodejs: "nodejs.png",
    angular: "angular.png",
  };

  const taches = {
    yooz: [
      "Evolution et maintenance du projet",
      "Développement de nouvelles features",
      "Développement de tests unitaires",
      "Chiffrage des tâches",
      "Rédaction de la documentation technique",
    ],
    Amilnote: [
      "Evolution et maintenance du projet",
      "Développement de nouvelles features",
      "Développement de tests unitaires",
      "Rédaction de la documentation technique",
    ],
    cp: [
      "Realisation de la maquette",
      "Développement du site web",
      "Realisation d'un jeu (quiz) avec animations",
    ],
    safran: [
      "Evolution et maintenance du projet",
      "Développement de nouvelles features",
      "Développement de tests unitaires",
      "Chiffrage des tâches",
      "Rédaction de la documentation technique",
      "Rédaction des user stories",
    ],
  };

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
            technos={[technos.angular, technos.nodejs]}
            taches={taches.yooz}
          />
          <ProjectCard
            image="card2-1.png"
            title="Amilnote"
            description="TMA sur un Projet de gestion des collaborateurs, des notes de frais et des congés de l'entreprise Amiltone, React / NodeJS"
            onClick={handleCardClick}
            technos={[technos.react, technos.nodejs]}
            taches={taches.Amilnote}
          />
          <ProjectCard
            image="card3-1.png"
            title="CP 2022 - 2023"
            description="2 sites web pour le chateau perché festival en React : "
            onClick={handleCardClick}
            links={cpLinks}
            technos={[technos.react]}
            taches={taches.cp}
          />
          <ProjectCard
            image="card4-1.png"
            title="Safran"
            description="Outil de gestion du réseau éléctrique français de l'entreprise RTE, Java EE Angular"
            onClick={handleCardClick}
            technos={[technos.angular, technos.nodejs]}
            taches={taches.safran}
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  image,
  title,
  description,
  onClick,
  links,
  technos,
  taches,
}) => (
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
        <h3>Technos</h3>
        <div className="techno-img-container">
          {technos &&
            technos.map((techno) => (
              <img src={techno} alt="techno-logo" className="techno-img" />
            ))}
        </div>
        <h3>Tâches</h3>
        <div className="taches-container">
          {taches && taches.map((tache) => <p>{tache}</p>)}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
