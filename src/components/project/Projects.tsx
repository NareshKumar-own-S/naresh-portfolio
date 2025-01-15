import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"  id = 'projects'>
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10" >
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern next.js portfolio"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern next.js portfolio"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
      </div>
    </div>
  );
};

export default Projects;
