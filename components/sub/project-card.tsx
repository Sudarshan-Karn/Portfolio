"use client";
import React from "react";
import { motion } from "framer-motion";
import { RxGithubLogo } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  src: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const ProjectCard = ({ src, title, description, tech, github, live }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer bg-[#03001417] backdrop-blur-md"
    >
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        <div className="flex flex-wrap gap-2 mt-3 mb-4">
          {tech.map((item, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded border border-[#7042f88b] text-white hover:bg-[#7042f88b] transition-all duration-300"
          >
            <RxGithubLogo />
            Code
          </a>
          {live !== "#" && (
            <a 
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-80 transition-all duration-300"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;