'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ArrowUpRight, GitBranch } from 'lucide-react';

// DATA: Personalize this with your specific learning experiments
const miniProjects = [
    {
        title: "MeteorMate",
        category: "Frontend",
        description: "A roomate matching application built on a responsive frontend (IN PROGRESS)",
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
        link: "https://github.com/acmutd/meteormate-client",
    },
    {
        title: "Safespeak",
        category: "AI",
        description: "A hackathon project designed to help accomodate victims of domestic abuse",
        tech: ["Typescript", "Javascript", "HuggingFace", "MongoDB"],
        link: "https://github.com/Nsujatno/safespeak",
    },
    {
        title: "Valorant Pro Match Predictor",
        category: "Machine Learning",
        description: "Built a random forest classifier to determine who wins a valorant match based on 2025 champs dataset",
        tech: ["Python", "Scikit-learn"],
        link: "https://github.com/Nsujatno/valorant-machine-learning",
    },
    {
        title: "Heart Disease Predictor",
        category: "Machine Learning",
        description: "Built a linear classifier, random forest classifier, gradient boosting classifier to predict the chance of a heart disease given symptoms",
        tech: ["Python", "Scikit-learn"],
        link: "https://github.com/Nsujatno/heart-disease-detector",
    },
];

const MiniProjects = () => {
  return (
    <section className="w-full py-20 bg-gray-950 text-white border-t border-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Experiments & <span className="text-emerald-400">Snippets</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-lg">
              Smaller builds, learning exercises, and code experiments. 
              Things I build to stay sharp.
            </p>
          </motion.div>
          
          {/* Optional Link to full Gist/Repo profile */}
          <motion.a 
            href="https://github.com/Nsujatno"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 text-sm font-medium transition-colors"
          >
            View Github Repos <ArrowUpRight size={16} />
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {miniProjects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:bg-gray-900 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-gray-800 rounded-lg text-emerald-400 group-hover:text-white group-hover:bg-emerald-500 transition-all duration-300">
                  <Folder size={24} />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-gray-500 group-hover:text-emerald-400 transition-colors">
                    {project.category}
                  </span>
                  <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium text-gray-500 font-mono">
                    {t} {i !== project.tech.length - 1 && "•"}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MiniProjects;