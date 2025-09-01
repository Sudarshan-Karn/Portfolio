"use client";
import { Certifications } from "@/constants";
import React from "react";
import { motion } from "framer-motion";

const CertificationsSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="certifications"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Certifications & Education
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] w-full px-4">
        {Certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001417] backdrop-blur-md p-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
            <p className="text-[#b49bff] mb-2">{cert.issuer}</p>
            <p className="text-gray-400 text-sm mb-3">{cert.period}</p>
            <p className="text-gray-300">{cert.description}</p>
          </motion.div>
        ))}

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001417] backdrop-blur-md p-6"
        >
          <h3 className="text-xl font-bold text-white mb-2">Bachelor's in Arts</h3>
          <p className="text-[#b49bff] mb-2">Lalit Narayan Mithila University</p>
          <p className="text-gray-400 text-sm mb-3">2016 – 2019</p>
          <p className="text-gray-300">Undergraduate degree from Darbhanga, India</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001417] backdrop-blur-md p-6"
        >
          <h3 className="text-xl font-bold text-white mb-2">Intermediate</h3>
          <p className="text-[#b49bff] mb-2">Marwari College</p>
          <p className="text-gray-400 text-sm mb-3">2014 – 2016</p>
          <p className="text-gray-300">Higher secondary education from Darbhanga, India</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationsSection;