import type { Metadata } from "next";
import Link from "next/link";
import Playground from "@/components/Playground";

export const metadata: Metadata = {
  title: "The Playground — Nathan Sujatno",
  description: "Experiments, automations, art, and whatever else Nathan is tinkering with.",
};

export default function PlaygroundPage() {
  return (
    <div>
      <div className="container mx-auto max-w-4xl px-6 pt-10 -mb-16 relative z-20">
        <Link
          href="/"
          className="font-serif italic text-ink/70 hover:text-sage transition-colors"
        >
          ← back home
        </Link>
      </div>
      <Playground />
    </div>
  );
}
