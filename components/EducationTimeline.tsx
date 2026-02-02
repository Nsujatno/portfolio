"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Code, Users, Trophy, Calendar, Briefcase } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "education" | "club" | "hackathon";
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    id: 11,
    title: "Winner",
    organization: "HackEarth",
    date: "Feb 2026",
    description: "Won a hackathon focused on positive sustainability impact for the earth.",
    type: "hackathon",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    id: 1,
    title: "Project Manager",
    organization: "AIMD (Artificial Intelligence and Medicine)",
    date: "Sept 2025 - Dec 2025",
    description: "Led a team to build a full stack project.",
    type: "club",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "TIP Participant",
    organization: "ACM (Technical Interview Prep)",
    date: "Sept 2025 - Dec 2025",
    description: "Participated in intensive technical interview preparation workshops.",
    type: "club",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Officer",
    organization: "ACM (Association for Computing Machinery)",
    date: "May 2025 - Current",
    description: "Serving as an officer, developing full stack projects for UT Dallas.",
    type: "club",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Participant",
    organization: "HackAI",
    date: "April 2025",
    description: "Competed in the AI-focused hackathon.",
    type: "hackathon",
    icon: <Trophy className="w-5 h-5" />,
  },

  {
    id: 5,
    title: "Member",
    organization: "ACM",
    date: "Feb 2025 - May 2025",
    description: "Active member of the Association for Computing Machinery.",
    type: "club",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Participant",
    organization: "Axxess Hackathon",
    date: "Feb 2025",
    description: "Collaborated on innovative solutions during the hackathon.",
    type: "hackathon",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 7,
    title: "Participant",
    organization: "HackUTD",
    date: "Nov 2024",
    description: "Built a project under time constraints at UTD's largest hackathon.",
    type: "hackathon",
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: 8,
    title: "Member",
    organization: "AIMD",
    date: "Sept 2024 - Dec 2024",
    description: "Member of the Artificial Intelligence Society.",
    type: "club",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 9,
    title: "Member",
    organization: "Valorant Club",
    date: "Sept 2024 - Dec 2024",
    description: "Participated in club activities and events.",
    type: "club",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 10,
    title: "Started College",
    organization: "University of Texas at Dallas",
    date: "2024",
    description: "Began journey in Computer Science at UTD.",
    type: "education",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-start justify-between md:justify-normal w-full mb-8 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Mobile Timeline Tick */}
      <div className="absolute left-4 md:hidden w-4 h-4 rounded-full bg-gray-950 border-2 border-emerald-500 -translate-x-1/2 mt-6 z-10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      </div>

      {/* Content Spacer for Desktop */}
      <div className="hidden md:block w-5/12" />

      {/* Content Card */}
      <div className="w-[calc(100%-4rem)] md:w-5/12 ml-16 md:ml-0 pl-2 md:pl-0">
        <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-emerald-500/50 transition-colors backdrop-blur-sm group shadow-lg">
          <div className="flex items-center gap-3 mb-2 text-emerald-400">
            {item.icon}
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-400/10 uppercase tracking-widest">
              {item.type}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
            {item.title}
          </h3>
          <div className="text-gray-400 font-medium mb-2">{item.organization}</div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4" />
            {item.date}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function EducationTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-20 relative overflow-hidden bg-gray-950" id="education">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-gray-950 to-gray-950 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education & <span className="text-emerald-400">Involvement</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and extracurricular activities at UTD.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gray-800 -translate-x-1/2" />
          <motion.div
            style={{ height }}
            className="absolute left-4 md:left-1/2 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-500 -translate-x-1/2 origin-top shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          />

          {timelineData.map((item, index) => (
            <TimelineCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
