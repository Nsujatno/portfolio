"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Trophy } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
	return (
		<section id="projects" className="w-full py-24 bg-gray-950 text-white relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-950 to-gray-950 pointer-events-none" />

			<div className="container mx-auto px-6 max-w-6xl relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-2">
						Featured <span className="text-emerald-400">Projects</span>
					</h2>
					<div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto" />
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-emerald-500/40 transition-colors p-6 md:p-8"
						>
							<div className="mb-4">
								{project.award && (
									<span className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full mb-3">
										<Trophy size={12} />
										{project.award}
									</span>
								)}
								<h3 className="text-2xl font-bold text-white">{project.title}</h3>
							</div>

							<p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

							<ul className="space-y-3 mb-6 flex-1">
								{project.highlights.map((h, i) => (
									<li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
										<span className="text-emerald-500 mt-0.5 shrink-0">▸</span>
										{h}
									</li>
								))}
							</ul>

							<div className="flex flex-wrap gap-2 mb-6">
								{project.tech.map((t) => (
									<span
										key={t}
										className="text-xs font-medium text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded"
									>
										{t}
									</span>
								))}
							</div>

							<div className="flex gap-4">
								{project.githubLink && (
									<a
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-all border border-gray-700"
									>
										<Github size={16} />
										Source
									</a>
								)}
								{project.liveLink && (
									<a
										href={project.liveLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-all"
									>
										<ExternalLink size={16} />
										Demo
									</a>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
