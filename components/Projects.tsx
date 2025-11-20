"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
	{
		title: "Intellect Ink",
		description:
			"A microlearning app designed to help users stop doom scrolliing.",
		tech: ["Express.js", "Javascript", "MongoDB", "React Native"],
		image: "/intellect_ink_logo.png",
		githubLink: "https://github.com/Nsujatno/Intellect-Ink",
		liveLink: "https://youtube.com/shorts/o3EKzoMmdV0?feature=share",
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
		githublink: "https://github.com/Nsujatno/swe-job-matcher-fullstack",
		liveLink: "https://youtu.be/_XyECzmRpuQ?si=iWPV8KDvCA7L6QYH",
	},
];

const Projects = () => {
	return (
		<section id="projects" className="w-full py-20 bg-gray-950 text-white">
			<div className="container mx-auto px-6 max-w-6xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Featured <span className="text-emerald-400">Projects</span>
					</h2>
					<div className="w-20 h-1 bg-emerald-500 rounded-full" />
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300"
						>
							<div className="relative h-48 w-full overflow-hidden">
								<div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-300 z-10" />
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover transform group-hover:scale-110 transition-transform duration-500"
								/>
							</div>

							<div className="p-6">
								<div className="flex justify-between items-center mb-4">
									<h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
										{project.title}
									</h3>
									<div className="flex space-x-3">
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-400 hover:text-white transition-colors"
										>
											<Github size={20} />
										</a>

										<a
											href={project.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-400 hover:text-white transition-colors"
										>
											<ExternalLink size={20} />
										</a>
									</div>
								</div>

								<p className="text-gray-400 text-sm mb-6 line-clamp-3">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech, i) => (
										<span
											key={i}
											className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-900/20 rounded-full border border-emerald-500/20"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
