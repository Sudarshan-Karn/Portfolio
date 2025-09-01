"use client";
import React from "react";
import ProjectCard from "../sub/project-card";
import { Projects } from "@/constants";

const ProjectsSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {Projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10">
        {Projects.slice(3).map((project, index) => (
          <ProjectCard
            key={index + 3}
            src={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;