"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/experience";

const Experience = () => {
	return (
		<section id="experience" className="w-full py-24 relative overflow-hidden">
			<div className="container mx-auto px-6 max-w-3xl relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="font-serif text-3xl md:text-4xl font-semibold text-forest mb-4">
						Work <span className="text-sage italic">Experience</span>
					</h2>
				</motion.div>

				<div className="divide-y divide-line">
					{experience.map((job, index) => (
						<motion.div
							key={job.company}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="py-12 first:pt-0 last:pb-0"
						>
							<div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
								<h3 className="font-serif text-2xl font-semibold text-forest">{job.role}</h3>
								<span className="font-mono text-sm text-ink/60 flex items-center gap-2">
									{job.date}
									{job.status === "active" && (
										<span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
									)}
								</span>
							</div>
							<p className="text-ink mb-6">
								{job.company} · {job.location}
							</p>

							{/* Metrics as inline figures */}
							<div className="flex flex-wrap gap-x-10 gap-y-3 mb-6">
								{job.metrics.map((m) => (
									<div key={m.label}>
										<span className="font-mono text-lg font-bold text-sage">{m.value}</span>
										<span className="text-sm text-ink/70 ml-2">{m.label}</span>
									</div>
								))}
							</div>

							<ul className="space-y-3 mb-6">
								{job.bullets.map((bullet, i) => (
									<li key={i} className="flex gap-3 text-ink leading-relaxed">
										<span className="text-sage shrink-0">–</span>
										{bullet}
									</li>
								))}
							</ul>

							<p className="font-mono text-xs text-ink/60">{job.tech.join(" · ")}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
