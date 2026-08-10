"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { stuff } from "@/data/stuff";

// Alternating tilts give the pinboard/scrapbook feel
const tilts = ["-rotate-1", "rotate-1", "rotate-2", "-rotate-2"];

const Playground = () => {
	return (
		<section id="playground" className="w-full min-h-screen py-24 relative overflow-hidden">
			<div className="container mx-auto px-6 max-w-5xl relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<h2 className="font-serif text-3xl md:text-4xl font-semibold text-forest mb-4">
						The <span className="text-sage italic">Playground</span>
					</h2>
					<p className="text-ink max-w-md mx-auto">
						Small things I make for fun. Experiments, automations, art, whatever.
					</p>
				</motion.div>

				{/* Pinboard grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{stuff.map((item, index) => {
						const card = (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: (index % 3) * 0.08 }}
								whileHover={{ rotate: 0, y: -4 }}
								className={`h-full flex flex-col rounded-xl border border-line bg-card p-5 shadow-[0_4px_20px_rgba(92,86,72,0.08)] hover:border-sage/60 hover:shadow-[0_8px_28px_rgba(92,86,72,0.14)] transition-[border-color,box-shadow] ${tilts[index % tilts.length]}`}
							>
								{item.image && (
									<div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-cream-dark">
										<Image src={item.image} alt={item.title} fill className="object-cover" />
									</div>
								)}

								<div className="flex items-start justify-between gap-2 mb-2">
									<span className="font-serif italic text-sm text-sage">{item.category}</span>
									{item.link && <ArrowUpRight size={16} className="text-sage shrink-0" />}
								</div>

								<h3 className="font-bold text-forest mb-2">{item.title}</h3>
								<p className="text-ink/80 text-sm leading-relaxed flex-1">{item.description}</p>

								{item.tech && (
									<div className="flex flex-wrap gap-1.5 mt-4">
										{item.tech.map((t) => (
											<span
												key={t}
												className="text-[11px] font-medium text-sage bg-sage/10 px-2 py-0.5 rounded"
											>
												{t}
											</span>
										))}
									</div>
								)}
							</motion.div>
						);

						return item.link ? (
							<a
								key={item.title}
								href={item.link}
								{...(item.link.startsWith("/")
									? {}
									: { target: "_blank", rel: "noopener noreferrer" })}
							>
								{card}
							</a>
						) : (
							<div key={item.title}>{card}</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Playground;
