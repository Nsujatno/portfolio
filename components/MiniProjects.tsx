"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const miniProjects = [
    {
        title: "GreenGain",
        category: "AI",
        description: "A hackathon project designed to help save both the environment and money for our users",
        tech: ["Langgraph", "Supabase", "Pinecone", "Next.js"],
        link: "https://github.com/Nsujatno/hack-earth",
    },
	{
		title: "Multi Agent Research Assistant",
		category: "AI",
		description: "A simple multi agent research assistant using langgraph",
		tech: ["Python", "Langgraph"],
		link: "https://github.com/Nsujatno/multi-agent-research-assistant",
	},
	{
		title: "Safespeak",
		category: "AI",
		description:
			"A hackathon project designed to help accomodate victims of domestic abuse",
		tech: ["Typescript", "Javascript", "HuggingFace", "MongoDB"],
		link: "https://github.com/Nsujatno/safespeak",
	},
	{
		title: "Valorant Pro Match Predictor",
		category: "Machine Learning",
		description:
			"Built a random forest classifier to determine who wins a valorant match based on 2025 champs dataset",
		tech: ["Python", "Scikit-learn"],
		link: "https://github.com/Nsujatno/valorant-machine-learning",
	},
	{
		title: "Heart Disease Predictor",
		category: "Machine Learning",
		description:
			"Built a linear classifier, random forest classifier, gradient boosting classifier to predict the chance of a heart disease given symptoms",
		tech: ["Python", "Scikit-learn"],
		link: "https://github.com/Nsujatno/heart-disease-detector",
	},
];

const MiniProjects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section className="w-full py-24 bg-gray-950 text-white border-t border-gray-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

			<div className="container mx-auto px-6 max-w-4xl relative z-10">
				
                {/* Header Section */}
				<div className="mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
					>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Experiments & <span className="text-emerald-400">Snippets</span>
                            </h2>
                            <p className="text-gray-400 max-w-lg">
                                Smaller builds, learning exercises, and code experiments. 
                                <br className="hidden md:block"/>Things I build to stay sharp.
                            </p>
                        </div>
                        
                        <a
                            href="https://github.com/Nsujatno"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium group"
                        >
                            View All Repos 
                            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
					</motion.div>
				</div>

				{/* Interactive List */}
				<div className="flex flex-col">
					{miniProjects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.05 }}
							className="group relative border-b border-gray-800 last:border-b-0"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
						>
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-left py-6 md:py-8 md:px-8 px-4 transition-colors duration-300 hover:bg-gray-900/30 cursor-pointer"
                                onClick={(e) => {
                                    // Mobile: Toggle expand, prevent link
                                    if (window.innerWidth < 768) {
                                        e.preventDefault();
                                        setHoveredIndex(hoveredIndex === index ? null : index);
                                    }
                                }}
                            >
                                <div className="flex items-start md:items-center justify-between gap-4">
                                    <div className="flex items-start md:items-center gap-4 md:gap-6">
                                        <span className="text-gray-600 font-mono text-sm pt-1 md:pt-0">0{index + 1}</span>
                                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-200 group-hover:text-emerald-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <span className={`text-xs md:text-sm text-gray-500 font-mono md:hidden`}>
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Link/Arrow */}
                                    <div className="flex items-center gap-4 pt-1 md:pt-0">
                                        <span className={`hidden md:block text-sm text-gray-500 font-mono transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                                            {project.category}
                                        </span>
                                        
                                        {/* Separate Link Button (Mobile Only) */}
                                        {/* Using div/onClick to avoid nested <a> tags */}
                                        <div 
                                            role="button"
                                            className="md:hidden p-2 -m-2 z-10 hover:bg-gray-800 rounded-full transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                window.open(project.link, '_blank');
                                            }}
                                            aria-label={`View ${project.title}`}
                                        >
                                            <ArrowUpRight 
                                                size={20} 
                                                className="text-emerald-400" 
                                            />
                                        </div>

                                        {/* Desktop Arrow (Just visual, part of the main link) */}
                                        <ArrowUpRight 
                                            size={20} 
                                            className={`hidden md:block text-emerald-400 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-0 opacity-100' : 'translate-y-4 opacity-0 scale-50'}`} 
                                        />
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: hoveredIndex === index ? "auto" : 0,
                                        opacity: hoveredIndex === index ? 1 : 0
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 md:pt-6 pl-0 md:pl-12 pr-0 md:pr-24">
                                        <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-xs font-medium text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </a>
						</motion.div>
					))}
				</div>
                
                {/* Mobile View All Link */}
                <div className="md:hidden mt-12 flex justify-center">
                    <a
                        href="https://github.com/Nsujatno"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                    >
                        View All Repos 
                        <ArrowUpRight size={16} />
                    </a>
                </div>

			</div>
		</section>
	);
};

export default MiniProjects;
