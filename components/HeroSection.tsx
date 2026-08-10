"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import NextLink from "next/link";
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

	const chatVariants: Variants = {
		hidden: { x: 100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.5 },
		},
	};

	return (
		<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 py-12">
			{/* Lamp glow + sage wash */}
			<motion.div
				animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
				transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
				className="absolute top-[-15%] right-[-10%] w-lg h-128 bg-clay/20 rounded-full blur-3xl pointer-events-none"
			/>
			<motion.div
				animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
				className="absolute bottom-[-15%] left-[-10%] w-96 h-96 bg-sage/20 rounded-full blur-3xl pointer-events-none"
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
							className="text-sage font-medium tracking-widest uppercase text-sm"
						>
							{profile.title}
						</motion.span>

						<motion.h1
							variants={textVariants}
							className="font-serif text-5xl md:text-7xl font-semibold text-forest leading-tight"
						>
							Hi, I&apos;m <span className="text-sage italic">Nathan</span>
						</motion.h1>

						<motion.div
							variants={textVariants}
							className="text-ink text-lg md:text-xl max-w-lg leading-relaxed"
						>
							<span className="whitespace-nowrap">I build </span>
							<span className="text-sage font-semibold">
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
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
									className="px-8 py-3 rounded-full bg-forest text-cream font-medium shadow-md shadow-forest/15 hover:bg-sage transition-colors"
								>
									View my work
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
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
									className="px-8 py-3 rounded-full border border-line text-forest font-medium hover:border-sage hover:text-sage transition-colors"
								>
									Get in touch
								</motion.button>
							</Link>
						</motion.div>

						<motion.p variants={textVariants} className="pt-2">
							<NextLink
								href="/playground"
								className="font-serif italic text-ink/70 hover:text-sage transition-colors"
							>
								psst check out the playground →
							</NextLink>
						</motion.p>
					</motion.div>

					<motion.div
						className="relative flex justify-center lg:justify-end"
						variants={chatVariants}
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
					className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-line pt-10"
				>
					{profile.stats.map((stat) => (
						<div key={stat.label} className="flex flex-col gap-1">
							<span className="text-3xl md:text-4xl font-bold font-mono text-sage">
								{stat.value}
							</span>
							<span className="text-sm text-ink/70 leading-snug">{stat.label}</span>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
