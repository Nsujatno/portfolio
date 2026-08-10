"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import { degrees, leadership } from "@/data/education";

const Education = () => {
	return (
		<section id="education" className="w-full py-24 border-t border-line">
			<div className="container mx-auto px-6 max-w-4xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12"
				>
					<h2 className="font-serif text-3xl md:text-4xl font-semibold text-forest">
						Education & <span className="text-sage italic">Leadership</span>
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-2 text-sage mb-6">
							<GraduationCap className="w-5 h-5" />
							<span className="text-xs font-bold uppercase tracking-widest">Education</span>
						</div>
						<div className="space-y-6">
							{degrees.map((d) => (
								<div key={d.degree} className="border-l-2 border-line hover:border-sage transition-colors pl-4">
									<h3 className="font-bold text-forest">{d.degree}</h3>
									<p className="text-ink text-sm">{d.school}</p>
									<p className="text-ink/60 text-sm font-mono mt-1">{d.date}</p>
									<p className="text-ink text-sm mt-1">{d.note}</p>
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
						<div className="flex items-center gap-2 text-sage mb-6">
							<Users className="w-5 h-5" />
							<span className="text-xs font-bold uppercase tracking-widest">Leadership</span>
						</div>
						<div className="space-y-6">
							{leadership.map((l) => (
								<div key={l.role} className="border-l-2 border-line hover:border-sage transition-colors pl-4">
									<h3 className="font-bold text-forest">{l.role}</h3>
									<p className="text-ink/60 text-sm font-mono mt-1">{l.date}</p>
									<p className="text-ink text-sm mt-1">{l.note}</p>
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
