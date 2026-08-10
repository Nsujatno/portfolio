export interface StuffItem {
	title: string;
	category: string;
	description: string;
	tech?: string[];
	link?: string;
	image?: string; // path under /public, for art pieces etc.
}

// Anything goes here: experiments, automations, art, one-off scripts.
export const stuff: StuffItem[] = [
 	{
		title: "LeetCode Check",
		category: "Automation",
		description:
			"An Apple Shortcut that checks whether you've done your daily LeetCode problem. Tap in for setup instructions.",
		tech: ["Apple Shortcuts"],
		link: "/playground/leetcode-shortcut",
	},
	{
		title: "SWE Job Matcher",
		category: "Agentic AI",
		description:
			"AI agent that scrapes live job listings and scores them against your resume with strict, evidence-based reasoning beyond keyword matching.",
		tech: ["Python", "LangChain", "OpenAI", "Next.js"],
		link: "https://github.com/Nsujatno/swe-job-matcher-fullstack",
	},
	{
		title: "Obsidian MCP Server",
		category: "MCP",
		description: "An MCP server that connects LLMs to your Obsidian vault.",
		tech: ["Python", "MCP"],
		link: "https://github.com/Nsujatno/MCP-server-for-notes",
	},
	{
		title: "Kanban Sync",
		category: "AI",
		description:
			"AI workflow assistant for datacenter operations — natural-language task creation and validation.",
		tech: ["Python", "FastAPI", "RAG", "Supabase", "OpenAI"],
		link: "https://github.com/Nsujatno/hackutd25",
	},
	{
		title: "Safespeak",
		category: "AI",
		description: "Hackathon project built to help accommodate victims of domestic abuse.",
		tech: ["TypeScript", "HuggingFace", "MongoDB"],
		link: "https://github.com/Nsujatno/safespeak",
	},
	{
		title: "Intellect Ink",
		category: "Mobile",
		description: "A microlearning app designed to help users stop doom scrolling.",
		tech: ["Express.js", "MongoDB", "React Native"],
		link: "https://github.com/Nsujatno/Intellect-Ink",
	},
];
