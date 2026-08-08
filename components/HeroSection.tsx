"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-scroll";

import Chat from "./Chat";
import TextType from "./TextType";
import { profile } from "@/data/profile";

const Hero = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const textVariants: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 100, damping: 10 },
		},
	};

	const imageVariants: Variants = {
		hidden: { x: 100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.5 },
		},
	};

	return (
		<section className="relative w-full min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden px-6 py-12">
			<motion.div
				animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"
			/>
			<motion.div
				animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
				className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
			/>

			<div className="container mx-auto max-w-6xl z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						className="flex flex-col space-y-6"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.span
							variants={textVariants}
							className="text-emerald-400 font-medium tracking-widest uppercase text-sm"
						>
							{profile.title}
						</motion.span>

						<motion.h1
							variants={textVariants}
							className="text-5xl md:text-7xl font-bold text-white leading-tight"
						>
							Hi, I&apos;m{" "}
							<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">
								Nathan
							</span>
						</motion.h1>

						<motion.div
							variants={textVariants}
							className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed"
						>
							<span className="whitespace-nowrap">I build </span>
							<span className="text-emerald-400 font-semibold">
								<TextType
									text={profile.taglines}
									typingSpeed={40}
									pauseDuration={1500}
									showCursor={true}
									cursorCharacter="|"
								/>
							</span>
						</motion.div>

						<motion.div variants={textVariants} className="flex flex-wrap gap-4 pt-4">
							<Link
								to="experience"
								smooth={true}
								duration={800}
								offset={-50}
								className="cursor-pointer"
							>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="px-8 py-3 rounded-full bg-emerald-500 text-gray-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-shadow"
								>
									View My Work
								</motion.button>
							</Link>
							<Link
								to="contact"
								smooth={true}
								duration={800}
								offset={-50}
								className="cursor-pointer"
							>
								<motion.button
									whileHover={{ scale: 1.05, borderColor: "#34d399", color: "#34d399" }}
									whileTap={{ scale: 0.95 }}
									className="px-8 py-3 rounded-full border border-gray-700 text-white transition-colors"
								>
									Contact Me
								</motion.button>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div
						className="relative flex justify-center lg:justify-end"
						variants={imageVariants}
						initial="hidden"
						animate="visible"
					>
						<Chat />
					</motion.div>
				</div>

				{/* Stats strip */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.6 }}
					className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-800 pt-10"
				>
					{profile.stats.map((stat) => (
						<div key={stat.label} className="flex flex-col gap-1">
							<span className="text-3xl md:text-4xl font-bold font-mono text-emerald-400">
								{stat.value}
							</span>
							<span className="text-sm text-gray-500 leading-snug">{stat.label}</span>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
