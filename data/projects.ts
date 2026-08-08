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
		award: "2nd Place · HackEarth",
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
		title: "SWE Job Matcher",
		description:
			"AI agent that scrapes live job listings and scores them against your resume with strict, evidence-based reasoning beyond keyword matching.",
		highlights: [
			"Agentic scoring pipeline built with LangChain and OpenAI over live scraped listings.",
		],
		tech: ["Python", "LangChain", "OpenAI", "Next.js", "TypeScript"],
		githubLink: "https://github.com/Nsujatno/swe-job-matcher-fullstack",
		liveLink: "https://youtu.be/_XyECzmRpuQ?si=iWPV8KDvCA7L6QYH",
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
