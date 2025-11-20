"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Link } from "react-scroll";

import TextType from "./TextType";

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

			<div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<motion.div
					className="flex flex-col space-y-6 z-10"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.span
						variants={textVariants}
						className="text-emerald-400 font-medium tracking-widest uppercase text-sm"
					>
						Software Engineer
					</motion.span>

					<motion.h1
						variants={textVariants}
						className="text-5xl md:text-7xl font-bold text-white leading-tight"
					>
						Hi, I'm{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">
							Nathan
						</span>
					</motion.h1>

					<motion.div
						variants={textVariants}
						className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed"
					>
						<span className="whitespace-nowrap">I specialize in </span>
						<span className="text-emerald-400 font-semibold">
							<TextType
								text={[
									"Full Stack Development.",
									"Backend Architecture.",
									"AI & Machine Learning.",
									"Agentic AI Solutions.",
								]}
								typingSpeed={40}
								pauseDuration={1500}
								showCursor={true}
								cursorCharacter="|"
							/>
						</span>
					</motion.div>

					<motion.div variants={textVariants} className="flex flex-wrap gap-4 pt-4">
						<Link
							to="projects"
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
								View Projects
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
					className="relative flex justify-center lg:justify-end z-10"
					variants={imageVariants}
					initial="hidden"
					animate="visible"
				>
					<div className="relative w-72 h-72 md:w-96 md:h-96 group">
						<div className="absolute inset-0 border-2 border-emerald-500 rounded-2xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
						<div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
							<Image
								src="/profile.jpg"
								alt="Profile Portrait"
								fill
								className="object-cover transition-all duration-500"
								priority
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
