"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Repeat,
  Users,
  Sparkles,
  ShieldCheck,
  Target,
  BookOpenCheck,
  ArrowUpRight,
  Feather
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Brain,
    title: "Self-awareness",
    description: `The Yatra is thoughtfully curated around your aspirations and duration, creating space for deep reflection and a clearer understanding of self and purpose.`,
    color: "bg-indigo-50 text-indigo-600",
    border: "group-hover:border-indigo-200"
  },
  {
    icon: Repeat,
    title: "Breaking patterns",
    description: "Stepping out of routine helps break habitual patterns and long-held archetypes, building the courage to think beyond inherited roles and limitations.",
    color: "bg-rose-50 text-rose-600",
    border: "group-hover:border-rose-200"
  },
  {
    icon: Users,
    title: "Acceptance",
    description: "By engaging with diverse people and cultures, the journey broadens understanding and nurtures a deeper openness to different ways of life and thought.",
    color: "bg-emerald-50 text-emerald-600",
    border: "group-hover:border-emerald-200"
  },
  {
    icon: Sparkles,
    title: "New ideas",
    description: "Exposure to varied realities and lived experiences sparks fresh ideas and expands how individuals perceive possibilities and challenges.",
    color: "bg-cyan-50 text-cyan-600",
    border: "group-hover:border-cyan-200"
  },
  {
    icon: ShieldCheck,
    title: "Resilience",
    description: "Navigating unfamiliar situations strengthens resilience, instilling the courage to adapt, endure, and grow through uncertainty.",
    color: "bg-amber-50 text-amber-600",
    border: "group-hover:border-amber-200"
  },
  {
    icon: Feather,
    title: "Artistic and Creative Expression",
    description: "Through the Yatra, individuals discover new forms of creative expression inspired by the cultures they encounter. Whether it’s art, music, or writing, these experiences become a catalyst for sharing their personal journey in creative ways.",
    color: "bg-pink-50 text-pink-600",
    border: "group-hover:border-pink-200"
  },
  {
    icon: Target,
    title: "Purpose alignment",
    description: "The Yatra helps align personal aspirations with meaningful action, enabling individuals to consciously contribute to the larger vision of a Viksit Bharat.",
    color: "bg-violet-50 text-violet-600",
    border: "group-hover:border-violet-200"
  },
  {
    icon: BookOpenCheck,
    title: "Lifelong impact",
    description: "Each journey leaves a lasting legacy—insights, stories, and learnings that enrich the shared repository and guide future Yatris.",
    color: "bg-sky-50 text-sky-600",
    border: "group-hover:border-sky-200"
  }
];

const About = () => {
    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-100/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                            Our Philosophy
                        </span>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1]">
                            Vyakti se
<br />
                            <span className="text-saffron">Viksit Bharat</span> tak
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:pt-4"
                    >
                        <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                            The <strong className="text-gray-900 font-medium">Viksit Bharat Yatra</strong> is more than just a journey; it is a conscious solo experience that challenges comfort zones and invites individuals to explore Bharat at their own pace. Through reflection and lived experiences, aspirations evolve, perspectives shift, and individuals gain clarity on their role—enabling them to contribute meaningfully and inclusively to the larger vision of a Viksit Bharat.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <h4 className="text-4xl font-bold text-slate-900 mb-1">28</h4>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">States + UTs</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-slate-900 mb-1">∞</h4>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Memories</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        // <Link href="/about-yatra" key={index} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`p-8 rounded-4xl bg-gray-50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${feature.color}`}>
                                    <feature.icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-900 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                <div className="absolute top-6 right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-gray-300" />
                                </div>
                            </motion.div>
                        // </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
