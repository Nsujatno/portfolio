"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const Projects = () => {
	return (
		<section id="projects" className="w-full py-24 relative overflow-hidden border-t border-line">
			<div className="container mx-auto px-6 max-w-3xl relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="font-serif text-3xl md:text-4xl font-semibold text-forest">
						Featured <span className="text-sage italic">Projects</span>
					</h2>
				</motion.div>

				<div className="divide-y divide-line">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.05 }}
							className="py-12 first:pt-0 last:pb-0"
						>
							{project.award && (
								<p className="font-serif italic text-clay text-sm mb-1">{project.award}</p>
							)}
							<div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-3">
								<h3 className="font-serif text-2xl font-semibold text-forest">{project.title}</h3>
								<span className="flex gap-5 text-sm">
									{project.githubLink && (
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											className="text-ink underline underline-offset-4 decoration-line hover:text-sage hover:decoration-sage transition-colors"
										>
											source
										</a>
									)}
									{project.liveLink && (
										<a
											href={project.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											className="text-ink underline underline-offset-4 decoration-line hover:text-sage hover:decoration-sage transition-colors"
										>
											demo
										</a>
									)}
								</span>
							</div>

							<p className="text-ink mb-4 leading-relaxed">{project.description}</p>

							<ul className="space-y-3 mb-5">
								{project.highlights.map((h, i) => (
									<li key={i} className="flex gap-3 text-ink/80 text-sm leading-relaxed">
										<span className="text-sage shrink-0">–</span>
										{h}
									</li>
								))}
							</ul>

							<p className="font-mono text-xs text-ink/60">{project.tech.join(" · ")}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
