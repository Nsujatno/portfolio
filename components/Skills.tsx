'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "Javascript",
  "Git",
  "AWS",
];

const Skills = () => {
  return (
    <div className="relative w-full bg-gray-950 py-12 overflow-hidden">
      
      {/* Title (Optional - remove if you want just the bar) */}
      <div className="text-center mb-8">
        <p className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase opacity-80">
          Tech Stack
        </p>
      </div>

      {/* Gradient Masks for smooth fade in/out */}
      <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-linear-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-linear-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

      {/* The Moving Container */}
      <div className="flex">
        <motion.div
          className="flex shrink-0 gap-12 pr-12"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration: 30, // Adjust speed here (higher = slower)
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Render items twice to create the seamless loop effect */}
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 group cursor-default"
            >
              {/* Dot Accent */}
              <span className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-emerald-400 transition-colors" />
              
              {/* Skill Name */}
              <span className="text-xl md:text-2xl font-semibold text-gray-500 group-hover:text-white transition-colors whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Duplicate wrapper to fill space if screen is huge (safety net) */}
        <motion.div
          className="flex shrink-0 gap-12 pr-12"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          aria-hidden="true" // Hide from screen readers to avoid duplicate reading
        >
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex items-center space-x-2 group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-emerald-400 transition-colors" />
              <span className="text-xl md:text-2xl font-semibold text-gray-500 group-hover:text-white transition-colors whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;