"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const degrees = [
	{
		degree: "M.S. Computer Science — Intelligent Systems",
		school: "The University of Texas at Dallas",
		date: "Expected May 2028",
		note: "Fast Track program",
	},
	{
		degree: "B.S. Computer Science",
		school: "The University of Texas at Dallas",
		date: "Expected May 2027",
		note: "GPA 3.85 · Academic Excellence Scholar · Honors College",
	},
];

const leadership = [
	{
		role: "ACM Dev Lead — MeteorMate",
		date: "June 2025 — Present",
		note: "Co-leading a 7-person team building an AI-powered roommate matching platform for UTD students.",
	},
	{
		role: "Project Manager — AI MD",
		date: "Sept 2025 — Dec 2025",
		note: "Led a student team building a full-stack MERN app with a custom-trained medical AI model.",
	},
];

const Education = () => {
	return (
		<section id="education" className="w-full py-24 bg-gray-950 text-white border-t border-gray-900">
			<div className="container mx-auto px-6 max-w-4xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12"
				>
					<h2 className="text-3xl md:text-4xl font-bold">
						Education & <span className="text-emerald-400">Leadership</span>
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-2 text-emerald-400 mb-6">
							<GraduationCap className="w-5 h-5" />
							<span className="text-xs font-bold uppercase tracking-widest">Education</span>
						</div>
						<div className="space-y-6">
							{degrees.map((d) => (
								<div key={d.degree} className="border-l-2 border-gray-800 hover:border-emerald-500/50 transition-colors pl-4">
									<h3 className="font-bold text-white">{d.degree}</h3>
									<p className="text-gray-400 text-sm">{d.school}</p>
									<p className="text-gray-500 text-sm font-mono mt-1">{d.date}</p>
									<p className="text-gray-400 text-sm mt-1">{d.note}</p>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
					>
						<div className="flex items-center gap-2 text-emerald-400 mb-6">
							<Users className="w-5 h-5" />
							<span className="text-xs font-bold uppercase tracking-widest">Leadership</span>
						</div>
						<div className="space-y-6">
							{leadership.map((l) => (
								<div key={l.role} className="border-l-2 border-gray-800 hover:border-emerald-500/50 transition-colors pl-4">
									<h3 className="font-bold text-white">{l.role}</h3>
									<p className="text-gray-500 text-sm font-mono mt-1">{l.date}</p>
									<p className="text-gray-400 text-sm mt-1">{l.note}</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Education;
