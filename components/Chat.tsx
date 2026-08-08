"use client";

import React, { useEffect, useRef, useState } from "react";
import { Send, Sparkles } from "lucide-react";

interface Message {
	role: "user" | "assistant";
	content: string;
}

const SUGGESTED = [
	"What did Nathan do at Valero?",
	"Tell me about his hackathon wins",
	"What's his tech stack?",
	"What is he studying?",
];

const GREETING: Message = {
	role: "assistant",
	content: "Hey! I'm Nathan's portfolio assistant. Ask me anything about his work, projects, or background.",
};

const Chat = () => {
	const [messages, setMessages] = useState<Message[]>([GREETING]);
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
	}, [messages, loading]);

	const send = async (text: string) => {
		const content = text.trim();
		if (!content || loading) return;

		const history = [...messages.filter((m) => m !== GREETING), { role: "user" as const, content }];
		setMessages([...messages, { role: "user", content }]);
		setInput("");
		setLoading(true);

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ messages: history }),
			});
			const data = await res.json();
			const reply = res.ok
				? data.reply
				: data.error ?? "Something went wrong — try again in a bit.";
			setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
		} catch {
			setMessages((prev) => [
				...prev,
				{ role: "assistant", content: "Something went wrong — try again in a bit." },
			]);
		} finally {
			setLoading(false);
		}
	};

	const showChips = messages.length === 1;

	return (
		<div className="w-full max-w-md flex flex-col rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm shadow-2xl overflow-hidden h-[480px]">
			{/* Header */}
			<div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900/80">
				<Sparkles size={16} className="text-emerald-400" />
				<span className="text-sm font-mono text-gray-300">ask-my-portfolio</span>
				<span className="ml-auto flex items-center gap-1.5 text-xs text-gray-500 font-mono">
					<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
					online
				</span>
			</div>

			{/* Messages */}
			<div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
				{messages.map((m, i) => (
					<div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
						<div
							className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
								m.role === "user"
									? "bg-emerald-600 text-white rounded-br-sm"
									: "bg-gray-800 text-gray-200 rounded-bl-sm"
							}`}
						>
							{m.content}
						</div>
					</div>
				))}
				{loading && (
					<div className="flex justify-start">
						<div className="bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
							{[0, 150, 300].map((d) => (
								<span
									key={d}
									className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
									style={{ animationDelay: `${d}ms` }}
								/>
							))}
						</div>
					</div>
				)}
			</div>

			{/* Suggested prompts */}
			{showChips && (
				<div className="px-4 pb-2 flex flex-wrap gap-2">
					{SUGGESTED.map((s) => (
						<button
							key={s}
							onClick={() => send(s)}
							className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-gray-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-pointer"
						>
							{s}
						</button>
					))}
				</div>
			)}

			{/* Input */}
			<form
				onSubmit={(e) => {
					e.preventDefault();
					send(input);
				}}
				className="flex items-center gap-2 p-3 border-t border-gray-800"
			>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Ask about Nathan..."
					maxLength={500}
					className="flex-1 bg-gray-800/60 border border-gray-700 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50"
				/>
				<button
					type="submit"
					disabled={loading || !input.trim()}
					className="p-2.5 rounded-full bg-emerald-500 text-gray-950 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-400 transition-colors cursor-pointer"
					aria-label="Send message"
				>
					<Send size={16} />
				</button>
			</form>
		</div>
	);
};

export default Chat;
