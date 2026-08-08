export interface Experience {
	company: string;
	role: string;
	location: string;
	date: string;
	status: "active" | "completed";
	metrics: { value: string; label: string }[];
	bullets: string[];
	tech: string[];
}

export const experience: Experience[] = [
	{
		company: "Valero Energy Corporation",
		role: "AI Engineering Intern",
		location: "San Antonio, TX",
		date: "May 2026 — Present",
		status: "active",
		metrics: [
			{ value: "98%", label: "manual processing cut" },
			{ value: "95%", label: "eval accuracy" },
			{ value: "11h → 2h", label: "full pipeline run" },
		],
		bullets: [
			"Built an LLM-powered document extraction system with Docling and LlamaIndex, converting unstructured enterprise data into structured outputs.",
			"Engineered an automated evaluation pipeline in ClearML that continuously benchmarks extraction performance against a ground-truth dataset.",
			"Optimized the pipeline for parallel processing, cutting a full run over 400+ documents from 11 hours to 2.",
		],
		tech: ["Python", "Docling", "LlamaIndex", "ClearML"],
	},
	{
		company: "NRVE",
		role: "Software Engineering Intern",
		location: "Remote",
		date: "June 2025 — August 2025",
		status: "completed",
		metrics: [
			{ value: "3.5s → 40ms", label: "audio endpoint latency" },
			{ value: "15+", label: "REST endpoints shipped" },
		],
		bullets: [
			"Architected and deployed a serverless backend on AWS (Lambda, API Gateway, S3) and MongoDB spanning music metadata, audio delivery, profiles, and journaling.",
			"Cut audio response time from 3.5s to 40ms with CloudFront edge caching, bypassing Lambda invocations for high-traffic requests.",
			"Built the full integration layer between backend services and the React Native app, including game state tracking across four mini-games.",
		],
		tech: ["AWS Lambda", "API Gateway", "CloudFront", "MongoDB", "React Native"],
	},
];
