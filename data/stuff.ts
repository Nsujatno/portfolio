export interface StuffItem {
	title: string;
	category: string;
	description: string;
	tech?: string[];
	link?: string;
}

// Anything goes here: experiments, automations, art, one-off scripts.
export const stuff: StuffItem[] = [
	{
		title: "Multi Agent Research Assistant",
		category: "Agentic AI",
		description: "A multi-agent research assistant built with LangGraph.",
		tech: ["Python", "LangGraph"],
		link: "https://github.com/Nsujatno/multi-agent-research-assistant",
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
