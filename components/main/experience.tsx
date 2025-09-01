"use client";
import { Experience } from "@/constants";
import React from "react";
import ExperienceCard from "../sub/experience-card";

const ExperienceSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="experience"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Professional Experience
      </h1>
      <div className="flex flex-col gap-10 max-w-[1200px] w-full">
        {Experience.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            role={experience.role}
            period={experience.period}
            description={experience.description}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;