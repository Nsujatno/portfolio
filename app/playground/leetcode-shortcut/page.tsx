import type { Metadata } from "next";
import Link from "next/link";

const SHORTCUT_LINK = "https://www.icloud.com/shortcuts/7e8636e135cc449a9f3273743aeb3666";

export const metadata: Metadata = {
	title: "LeetCode Check Shortcut — Nathan Sujatno",
	description: "An Apple Shortcut that checks whether you've done your daily LeetCode problem.",
};

export default function LeetcodeShortcutPage() {
	return (
		<div className="container mx-auto max-w-2xl px-6 py-10">
			<Link
				href="/playground"
				className="font-serif italic text-ink/70 hover:text-sage transition-colors"
			>
				← back to the playground
			</Link>

			<h1 className="font-serif text-3xl md:text-4xl font-semibold text-forest mt-10 mb-4">
				LeetCode <span className="text-sage italic">Check</span>
			</h1>
			<p className="text-ink leading-relaxed mb-8">
				An Apple Shortcut that checks whether you&apos;ve solved your daily LeetCode problem —
				so your phone can hold you accountable instead of distracting you.
			</p>

			<a
				href={SHORTCUT_LINK}
				className="inline-block rounded-lg bg-sage/10 border border-sage/40 px-5 py-2.5 font-medium text-sage hover:bg-sage/20 transition-colors mb-12"
			>
				Get the shortcut →
			</a>

			<h2 className="font-serif text-2xl font-semibold text-forest mb-4">Setup</h2>
			<ol className="list-decimal list-outside pl-5 space-y-3 text-ink/80 leading-relaxed mb-8">
				<li>
					Open the link above on your iPhone or iPad — it opens the Shortcuts app. Tap{" "}
					<span className="text-forest font-medium">Add Shortcut</span>.
				</li>
				<li>
					Open the shortcut, find the API URL, and replace{" "}
					<span className="font-mono text-sm text-forest">insert-username-here</span> with
					your LeetCode username.
				</li>
				<li>Run it once manually to make sure it can find your account.</li>
				<li>
					To make it automatic: go to the{" "}
					<span className="text-forest font-medium">Automation</span> tab →{" "}
					<span className="text-forest font-medium">+ → App</span>, choose a social media
					app (Instagram, TikTok, Twitter), select{" "}
					<span className="text-forest font-medium">Is Opened</span> and{" "}
					<span className="text-forest font-medium">Run Immediately</span>, then select the
					LeetCode Check shortcut.
				</li>
			</ol>

			<p className="text-ink/60 text-sm leading-relaxed">
				Requires iOS 17 or later. The shortcut only reads your public LeetCode profile — no
				login or password needed.
			</p>
		</div>
	);
}
