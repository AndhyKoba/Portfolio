import React, { useState } from 'react';

const Projects = () => {

  const projects = [
    {
      id: 1,
      name: "MiniGallery",
      description: "MiniGallery est une application intuitive qui permet aux utilisateurs d'organiser, partager et admirer leurs photos. Créez des albums personnalisés, ajoutez des descriptions et partagez vos souvenirs avec vos proches.",
      tags: ["Programmation web", "Réseau social"],
      Images: [
        "../../public/Images/accueil mini gallery.png",
        "../../public/Images/connexion mini gallery.png",
        "../../public/Images/parcourir mini gallery.png"
      ]
    },
    {
      id: 2,
      name: "FlashCard",
      description: "FlashCard est une application conçue pour vous aider à étudier efficacement en créant des cartes mémoire personnalisées. Avec FlashCard, vous pouvez facilement créer, organiser et réviser des flashcards pour n'importe quel sujet. Améliorez votre apprentissage en ajoutant des images, des descriptions et des exemples à vos cartes mémoire. Parfait pour les étudiants et les autodidactes, FlashCard rend l'étude plus interactive et efficace.",
      tags: ["Application mobile", "Apprentissage"],
      Images: [
        "../../public/Images/logo.png",
        "../../public/Images/acceuil flashcard.png",
        "../../public/Images/conn-insc flashcard.png",
        "../../public/Images/accueil 2 flashcard.png"
      ]
    },
    {
      id: 3,
      name: "Craveat",
      description: "Craveat est un tableau de bord interactif qui permet aux utilisateurs de discuter et de collaborer en temps réel. Avec Craveat, vous pouvez suivre vos indicateurs clés de performance, visualiser des données importantes et échanger des idées avec vos collègues. L'interface intuitive de Craveat facilite la communication et la prise de décision, rendant votre travail plus efficace et collaboratif",
      tags: ["Application web", "Tableau de bord"],
      Images: [
        "../../public/Images/craveat (1).jpeg",
        "../../public/Images/craveat (2).jpeg",
        "../../public/Images/craveat (3).jpeg",
        "../../public/Images/craveat-pc.png"
      ]
    },
    {
      id: 4,
      name: "Générateur de mot de passe",
      description: "C'est un générateur de mots de passe essentiel pour créer des mots de passe forts et sécurisés. Vous pouvez générer des mots de passe aléatoires, personnalisés en fonction de vos besoins (longueur, caractères spéciaux, chiffres, etc.), garantissant ainsi la sécurité de vos comptes en ligne. Facile à utiliser, cet outil vous aide à protéger vos informations personnelles et professionnelles en un clin d'œil.",
      tags: ["Site web", "Sécurité"],
      Images: [
        "../../public/Images/gen.png",
        "../../public/Images/gen-pc.png"
      ]
    },
    {
      id: 5,
      name: "Mathator",
      description: "Mathator est une application de calculatrice simple et efficace conçue pour effectuer des opérations mathématiques de base. Avec son interface intuitive, Mathator permet de réaliser rapidement des calculs quotidiens tels que l'addition, la soustraction, la multiplication et la division. Que ce soit pour l'école, le travail ou les tâches quotidiennes, Mathator est l'outil idéal pour obtenir des résultats précis en un clin d'œil.",
      tags: ["Application web", "Calculatrice"],
      Images: [
        "../../public/Images/mathator.png",
        "../../public/Images/mathator-pc.png"
      ]
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const project = projects[currentProject];

  return (
    <div id="projects" className="min-h-screen bg-stone-900 py-8 px-8 flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Mes Projets</h2>
          <div className="flex items-center gap-4">
            <span className="text-stone-400 text-sm">
              {currentProject + 1} / {projects.length}
            </span>
            <div className="flex gap-2">
              <button 
                onClick={prevProject}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-800 text-white hover:bg-stone-700 transition"
              >
                &#8592;
              </button>
              <button 
                onClick={nextProject}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-800 text-white hover:bg-stone-700 transition"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col lg:flex-row gap-8">
          
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-4">{project.name}</h3>
            <p className="text-stone-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="text-sm px-3 py-1 bg-stone-800 text-stone-300 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
          </div>
          
          
          <div className="lg:w-2/3 flex-1">
            <div className="grid grid-cols-2 gap-4 h-full">
              {project.Images.slice(0, 4).map((image, index) => {
                
                const spanClasses = 
                  project.Images.length === 3 && index === 0 
                    ? "row-span-2" 
                    : "";
                
                return (
                  <div key={index} className={`${spanClasses} overflow-hidden rounded-lg`}>
                    <img 
                      src={image} 
                      alt={`${project.name} - Image ${index + 1}`} 
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentProject === index ? "bg-white scale-125" : "bg-stone-600"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;