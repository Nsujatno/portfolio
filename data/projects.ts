export interface Project {
	title: string;
	award?: string;
	description: string;
	highlights: string[];
	tech: string[];
	githubLink?: string;
	liveLink?: string;
}

export const projects: Project[] = [
	{
		title: "Eco Quest",
		award: "1st Place · Dev Season of Code (1,000+ participants)",
		description:
			"Gamified sustainability app that turns your real carbon footprint into personalized missions.",
		highlights: [
			"LangGraph multi-step agentic workflow with Gemini 2.5 Flash generates carbon-reduction missions from survey responses and Climatiq CO2 calculations.",
			"Receipt pipeline uses Gemini Vision to extract grocery items, compute footprint, and recommend sustainable alternatives.",
		],
		tech: ["LangGraph", "Gemini 2.5 Flash", "Gemini Vision", "Climatiq API", "Supabase", "Next.js"],
		githubLink: "https://github.com/Nsujatno/frostbyte-hackathon",
	},
	{
		title: "Green Gain",
		award: "1st Place · Best Sustainability Impact, HackEarth",
		description:
			"Home energy-efficiency planner that only recommends upgrades that actually pay off.",
		highlights: [
			"LangGraph multi-agent workflow dynamically routes vector retrieval strategies by user geography for location-specific tax recommendations.",
			"Programmatic validation layer filters LLM recommendations against strict financial constraints — ROI under 30 years, positive monthly savings.",
		],
		tech: ["LangGraph", "Pinecone", "Supabase", "Next.js"],
		githubLink: "https://github.com/Nsujatno/hack-earth",
	},
	{
		title: "Autonomous Minecraft Agent",
		award: "Currently Building",
		description:
			"An AI agent that lives inside a real Minecraft world — you give it a goal in chat and it plans, acts, and adapts on its own.",
		highlights: [
			"Agentic plan → act → observe → reflect loop driving a live game character, with persistent goals and strict LLM cost controls.",
		],
		tech: ["TypeScript", "Mineflayer", "Python", "OpenAI", "WebSockets"],
	},
	{
		title: "OPTCG Binder",
		description:
			"Drag-and-drop trading card binder editor with AI-powered card recommendations.",
		highlights: [
			"Built a drag-and-drop binder editor in Next.js with configurable grid formats (1x1 to 4x4), multi-page layouts, autosave, JSON import/export, and semantic card recommendations returning 5-10 ranked suggestions via OpenAI embeddings and Upstash Vector.",
			"Architected a no-database v1 around an in-memory TTL-cached API proxy with per-IP rate limiting.",
		],
		tech: ["Next.js", "TypeScript", "OpenAI Embeddings", "Upstash Vector"],
    liveLink: "https://www.optcgbinder.app",
	},
	{
		title: "MeteorMate",
		award: "ACM Dev Lead · 7-person team",
		description:
			"AI-powered roommate matching platform for UTD students.",
		highlights: [
			"Co-leading development; built a shared API abstraction layer standardizing backend endpoints and several frontend pages in Next.js.",
		],
		tech: ["Next.js", "TypeScript", "FastAPI", "Supabase"],
		githubLink: "https://github.com/acmutd/meteormate-client",
		liveLink: "https://www.meteormate.com/",
	},
];
