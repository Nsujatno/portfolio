"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Meteormate",
        description: "A fullstack website that helps UT Dallas students find their ideal roomates.",
        tech: ["Next.js", "Typescript", "Tailwind CSS", "Python", "FastAPI", "Firebase", "Supabase"],
        image: "/meteormate_logo.png",
        githubLink: "https://github.com/acmutd/meteormate-client",
        liveLink: "https://www.meteormate.com/",
    },
	{
		title: "Swe job matcher",
		description:
			"A fullstack AI-agent website that scrapes live job listings and provides strict, evidence-based scoring beyond simple keyword matching.",
		tech: [
			"Python",
			"langchain",
			"OpenAI",
			"Typescript",
			"Next.js",
			"Tailwind CSS",
		],
		image: "/swe_job_matcher_logo.png",
		githubLink: "https://github.com/Nsujatno/swe-job-matcher-fullstack",
		liveLink: "https://youtu.be/_XyECzmRpuQ?si=iWPV8KDvCA7L6QYH",
	},
	{
		title: "Kanban Sync",
		description:
			"An AI-powered workflow assistant used in datacenter operations, enabling natural language task creation and validation.",
		tech: ["Python", "FastAPI", "RAG", "Supabase", "OpenAI"],
		image: "/kanban_sync_logo.png",
		githubLink: "https://github.com/Nsujatno/hackutd25",
		liveLink: "https://youtu.be/R-fUu01G1gE",
	},
	{
		title: "Intellect Ink",
		description:
			"A microlearning app designed to help users stop doom scrolling.",
		tech: ["Express.js", "Javascript", "MongoDB", "React Native"],
		image: "/intellect_ink_logo.png",
		githubLink: "https://github.com/Nsujatno/Intellect-Ink",
		liveLink: "https://youtube.com/shorts/o3EKzoMmdV0?feature=share",
	},
];

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

	const nextProject = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % projects.length);
	}, []);

	const prevProject = useCallback(() => {
		setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
	}, []);

    useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			nextProject();
		}, 5000); // Auto-scroll every 5 seconds

		return () => clearInterval(interval);
	}, [isPaused, nextProject]);

	return (
		<section 
            id="projects" 
            className="relative min-h-screen w-full bg-gray-950 overflow-hidden flex flex-col justify-between py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
			
            {/* Background Decorations */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-950 to-gray-950 pointer-events-none" />
            
            {/* Header */}
            <div className="z-20 text-center pointer-events-none mb-4">
                 <motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
						Featured <span className="text-emerald-400">Projects</span>
					</h2>
					<div className="w-16 h-1 bg-emerald-500 rounded-full" />
				</motion.div>
            </div>

			{/* Main Carousel Area */}
			<div className="relative w-full max-w-[90rem] mx-auto px-4 sm:px-16 flex-1 flex items-center justify-center">
				
                {/* Navigation Buttons */}
				<button
					onClick={(e) => {
                        e.stopPropagation();
                        prevProject();
                        setIsPaused(true); // Pause on manual interaction
                    }}
					className="hidden md:block absolute left-2 md:left-4 z-30 p-3 rounded-full bg-gray-800/50 hover:bg-emerald-500/80 text-white transition-all backdrop-blur-sm border border-gray-700/50 hover:border-emerald-400/50"
                    aria-label="Previous project"
				>
					<ChevronLeft size={32} />
				</button>

				<button
					onClick={(e) => {
                        e.stopPropagation();
                        nextProject();
                        setIsPaused(true); // Pause on manual interaction
                    }}
					className="hidden md:block absolute right-2 md:right-4 z-30 p-3 rounded-full bg-gray-800/50 hover:bg-emerald-500/80 text-white transition-all backdrop-blur-sm border border-gray-700/50 hover:border-emerald-400/50"
                    aria-label="Next project"
				>
					<ChevronRight size={32} />
				</button>

				{/* Project Content */}
				<div className="w-full h-full flex items-center justify-center">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="w-full flex items-center justify-center"
						>
							<ProjectCard project={projects[currentIndex]} />
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
                
             {/* Progress Indicators */}
            <div className="flex justify-center items-center gap-6 z-20 pointer-events-none mt-8">
                 {/* Mobile Left Arrow */}
                 <button
                    onClick={(e) => {
                        e.stopPropagation();
                        prevProject();
                        setIsPaused(true);
                    }}
                    className="md:hidden pointer-events-auto p-2 rounded-full bg-gray-800/50 text-white border border-gray-700/50 active:scale-95 transition-all"
                    aria-label="Previous project"
                >
                    <ChevronLeft size={24} />
                </button>

                 {/* Enable pointer events only for the buttons */}
                <div className="flex gap-3 pointer-events-auto">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentIndex(idx);
                                setIsPaused(true);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex ? "w-8 bg-emerald-500" : "w-2 bg-gray-600 hover:bg-gray-500"
                            }`}
                            aria-label={`Go to project ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile Right Arrow */}
                 <button
                    onClick={(e) => {
                        e.stopPropagation();
                        nextProject();
                        setIsPaused(true);
                    }}
                    className="md:hidden pointer-events-auto p-2 rounded-full bg-gray-800/50 text-white border border-gray-700/50 active:scale-95 transition-all"
                    aria-label="Next project"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
		</section>
	);
};

export default Projects;
