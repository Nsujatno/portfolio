"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
	motion,
	useMotionValue,
	useSpring,
	useTransform,
	MotionValue,
} from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
	title: string;
	description: string;
	tech: string[];
	image: string;
	githubLink?: string;
	liveLink?: string;
}

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const ref = useRef<HTMLDivElement>(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(
		mouseYSpring,
		[-0.5, 0.5],
		["17.5deg", "-17.5deg"]
	);
	const rotateY = useTransform(
		mouseXSpring,
		[-0.5, 0.5],
		["-17.5deg", "17.5deg"]
	);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-7xl mx-auto px-6 z-10">
			{/* 3D Tilt Image Section */}
			<motion.div
				className="relative w-11/12 md:w-3/4 lg:w-3/5 aspect-video perspective-1000"
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				ref={ref}
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<motion.div
					style={{
						rotateX,
						rotateY,
						transformStyle: "preserve-3d",
					}}
					className="w-full h-full relative rounded-xl shadow-2xl overflow-hidden border border-emerald-500/30"
				>
					<div
						style={{
							transform: "translateZ(75px)",
							transformStyle: "preserve-3d",
						}}
						className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-purple-500/10 mix-blend-overlay z-10 pointer-events-none"
					/>
					<Image
						src={project.image}
						alt={project.title}
						fill
						className="object-cover"
						priority
					/>
				</motion.div>
			</motion.div>

			{/* Info Section */}
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2, duration: 0.5 }}
				className="w-full lg:w-2/5 flex flex-col justify-center"
			>
				<h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
					{project.title}
				</h3>

				<div className="flex flex-wrap gap-3 mb-8">
					{project.tech.map((tech, i) => (
						<span
							key={i}
							className="px-4 py-2 text-sm font-semibold text-emerald-300 bg-emerald-900/30 rounded-full border border-emerald-500/30 shadow-lg shadow-emerald-900/20 backdrop-blur-sm"
						>
							{tech}
						</span>
					))}
				</div>

				<p className="text-gray-300 text-lg leading-relaxed mb-10">
					{project.description}
				</p>

				<div className="flex gap-6">
					{project.githubLink && (
						<a
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all hover:scale-105 active:scale-95 border border-gray-700"
						>
							<Github size={20} />
							<span>Source Code</span>
						</a>
					)}
					{project.liveLink && (
						<a
							href={project.liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20"
						>
							<ExternalLink size={20} />
							<span>Live Demo</span>
						</a>
					)}
				</div>
			</motion.div>
		</div>
	);
};

export default ProjectCard;
