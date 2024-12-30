import React from "react";
import S from "./projects.module.css";

const projects = [
  {
    name: "Byte Realm",
    description: "Um blog de tecnologia com artigos sobre as tendências mais recentes da tecnologia.",
    link: "https://byterealm.vercel.app",
    repo: "https://github.com/igorOliveira-dev/byte-realm",
  },
  {
    name: "Meu Portfolio",
    description: "Meu portfólio pessoal, esse mesmo que você está vendo agora.",
    link: "https://igor-oliveira-portifolio.vercel.app/",
    repo: "https://github.com/igorOliveira-dev/igor-oliveira-portifolio",
  },
  {
    name: "Mind",
    description: "Projeto de assistente de saúde mental, com um teste de saúde mental e uma comunidade",
    link: "https://mindv2.vercel.app/",
    repo: "https://github.com/igorOliveira-dev/Mind",
  },
];

const Projects = () => {
  return (
    <section className={S.screen} id="projects">
      <h1 className={S.title}>Meus projetos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 sm:p-20">
        {projects.map((project) => (
          <div key={project.name} className="border border-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Ver projeto
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Código
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mb-20">Logo estarei colocando mais projetos!</p>
    </section>
  );
};

export default Projects;
