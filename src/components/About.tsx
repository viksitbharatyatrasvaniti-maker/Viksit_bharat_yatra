"use client";

import { motion } from "framer-motion";
import { Lightbulb, HeartHandshake, Compass, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Lightbulb,
        title: "Generate New Ideas",
        description: "Exposure to diverse perspectives sparks the innovation needed to build a Viksit Bharat.",
        color: "bg-blue-50 text-blue-600",
        border: "group-hover:border-blue-200"
    },
    {
        icon: HeartHandshake,
        title: "Foster Acceptance",
        description: "Breaking barriers of region and language to unite the youth of the nation.",
        color: "bg-orange-50 text-orange-600",
        border: "group-hover:border-orange-200"
    },
    {
        icon: Compass,
        title: "Expand Your Horizons",
        description: "Step beyond the routine. Witness the scale of India's development firsthand.",
        color: "bg-green-50 text-green-600",
        border: "group-hover:border-green-200"
    },
    {
        icon: Zap,
        title: "Shatter Old Patterns",
        description: "Challenge assumptions and embrace a dynamic, action-oriented mindset.",
        color: "bg-purple-50 text-purple-600",
        border: "group-hover:border-purple-200"
    },
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
                            Experience the <br />
                            <span className="text-saffron">Soul of India</span>
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
                            The <strong className="text-gray-900 font-medium">Viksit Bharat Darshan Yatra</strong> is more than just a journey; it's a transformative experience designed to shake you mentally, physically, and emotionally—awakening a renewed sense of purpose.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <h4 className="text-4xl font-bold text-blue-900 mb-1">28+</h4>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">States</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-blue-900 mb-1">1000+</h4>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Participants</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-blue-900 mb-1">∞</h4>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Memories</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Link href="/about-yatra" key={index} className="block group">
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

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed mb-6">
                                    {feature.description}
                                </p>

                                <div className="absolute top-6 right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-gray-300" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
