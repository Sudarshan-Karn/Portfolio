"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceCard = ({ company, role, period, description, technologies }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001417] backdrop-blur-md p-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{role}</h3>
          <h4 className="text-xl text-[#b49bff] mb-2">{company}</h4>
        </div>
        <span className="text-gray-400 text-sm">{period}</span>
      </div>

      <ul className="text-gray-300 mb-4 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#b49bff] mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;