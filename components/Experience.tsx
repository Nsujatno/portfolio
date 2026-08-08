"use client";

import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/data/experience";

const Experience = () => {
	return (
		<section id="experience" className="w-full py-24 bg-gray-950 text-white relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent" />

			<div className="container mx-auto px-6 max-w-4xl relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Work <span className="text-emerald-400">Experience</span>
					</h2>
					<p className="text-gray-400 max-w-lg">
						Production AI systems and backend infrastructure, with the numbers to show for it.
					</p>
				</motion.div>

				<div className="flex flex-col gap-8">
					{experience.map((job, index) => (
						<motion.div
							key={job.company}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-emerald-500/40 transition-colors p-6 md:p-8"
						>
							{/* Header: run-style status + role */}
							<div className="flex flex-wrap items-center justify-between gap-3 mb-6">
								<div>
									<h3 className="text-xl md:text-2xl font-bold text-white">{job.role}</h3>
									<p className="text-gray-400">
										{job.company} · {job.location}
									</p>
								</div>
								<div className="flex flex-col items-start md:items-end gap-2">
									<span
										className={`flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full border ${
											job.status === "active"
												? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
												: "border-gray-700 text-gray-400 bg-gray-800/50"
										}`}
									>
										<span
											className={`w-1.5 h-1.5 rounded-full ${
												job.status === "active" ? "bg-emerald-400 animate-pulse" : "bg-gray-500"
											}`}
										/>
										{job.status === "active" ? "ACTIVE" : "COMPLETED"}
									</span>
									<span className="text-sm text-gray-500 font-mono">{job.date}</span>
								</div>
							</div>

							{/* Metrics row */}
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 border-y border-gray-800 py-5">
								{job.metrics.map((m) => (
									<div key={m.label} className="flex flex-col gap-1">
										<span className="text-xl md:text-2xl font-bold font-mono text-emerald-400 whitespace-nowrap">
											{m.value}
										</span>
										<span className="text-xs text-gray-500">{m.label}</span>
									</div>
								))}
							</div>

							<ul className="space-y-3 mb-6">
								{job.bullets.map((bullet, i) => (
									<li key={i} className="flex gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
										<span className="text-emerald-500 mt-1 shrink-0">▸</span>
										{bullet}
									</li>
								))}
							</ul>

							<div className="flex flex-wrap gap-2">
								{job.tech.map((t) => (
									<span
										key={t}
										className="text-xs font-medium text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded"
									>
										{t}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
