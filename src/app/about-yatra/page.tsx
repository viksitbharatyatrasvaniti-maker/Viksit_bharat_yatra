"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Map, Users, Repeat, Globe, BookOpen, Compass, Award } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

const AboutYatra = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="bg-white min-h-screen text-gray-900 font-sans selection:bg-orange-100 selection:text-orange-900">
            {/* Navigation Back
            <nav className="fixed top-0 left-0 w-full p-6 z-50 pointer-events-none">
                <Link href="/" className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full text-sm font-medium hover:bg-white hover:shadow-md transition-all">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </nav> */}

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-blue-950 text-white">
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="absolute inset-0 bg-linear-to-b from-blue-900/50 to-blue-950"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block py-1 px-3 rounded-full bg-saffron/20 border border-saffron/30 text-saffron text-sm font-semibold mb-6 backdrop-blur-sm"
                    >
                        Vision & Philosophy
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight"
                    >
                        Viksit Bharat <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-200">Darshan Yatra</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed"
                    >
                        "To inspire individuals to explore Bharat deeply, absorb insights and ideas, and rise with the aspiration of a Viksit Bharat."
                    </motion.p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-8">
                            Not Tourism, <br />But <span className="text-saffron">Darshan</span>
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-6">
                                The Yatra is framed not as ordinary tourism but as <strong>Darshan</strong>—seeing, experiencing, and evolving. By zooming out and seeing beyond one's cultural conditioning, travelers gain wisdom and inspiration.
                            </p>
                            <p>
                                It is a journey that "shakes a person mentally, physically, and emotionally," allowing new meaning and purpose to emerge. It fosters sensitivity to values, culture, and community, shaping individuals who truly live rather than merely function.
                            </p>
                        </div>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative h-64 flex flex-col justify-end p-8 rounded-3xl overflow-hidden group shadow-lg"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.pexels.com/photos/1630782/pexels-photo-1630782.jpeg"
                                    alt="Explore"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                            <h3 className="relative z-10 text-2xl font-bold text-white mb-1">Explore</h3>
                            <p className="relative z-10 text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Discover the unseen beauty of Bharat.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative h-64 flex flex-col justify-end p-8 rounded-3xl mt-12 overflow-hidden group shadow-lg"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.pexels.com/photos/1043566/pexels-photo-1043566.jpeg"
                                    alt="Absorb"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            </div>
                            <h3 className="relative z-10 text-2xl font-bold text-white mb-1">Absorb</h3>
                            <p className="relative z-10 text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Create memories that last a lifetime.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The 3 Pillars */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Structural Model</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Built around three interconnected pillars that ensure a transformative experience.</p>
                    </div>

                    <div className="space-y-32">
                        {[
                            {
                                title: "Curation",
                                desc: "Personalized, thematic trip planning based on each Yatri's interests. Drawing from a repository of 100,000 km of travel experience, we craft distinct journeys that resonate with your personal aspirations.",
                                image: "https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg",
                                tag: "Personalized Journeys"
                            },
                            {
                                title: "Community",
                                desc: "An ongoing network of Yatris, mentors, and changemakers. Connected through regional meet-ups, annual summits, and digital platforms, this ecosystem fosters lifelong bonds and organic collaboration.",
                                image: "https://images.pexels.com/photos/3447333/pexels-photo-3447333.jpeg",
                                tag: "Lifelong Bonds"
                            },
                            {
                                title: "Continuity",
                                desc: "Ensuring benefits endure beyond the trip. Yatris document learnings in their Passport and contribute to a shared knowledge repository, fueling a virtuous cycle of insight for the nation.",
                                image: "https://images.pexels.com/photos/1707402/pexels-photo-1707402.jpeg",
                                tag: "Enduring Impact"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-24`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className={`absolute inset-0 bg-saffron/10 rounded-4xl transform ${i % 2 === 0 ? "-rotate-3" : "rotate-3"} group-hover:rotate-0 transition-transform duration-500 ease-out`} />
                                    <div className="relative h-[400px] lg:h-[500px] rounded-4xl overflow-hidden shadow-2xl">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-8">
                                    <div className="flex flex-col items-start">
                                        <span className="inline-block py-2 px-4 rounded-full bg-orange-50 text-orange-800 font-bold text-xs tracking-wider uppercase mb-4 border border-orange-100">
                                            {item.tag}
                                        </span>
                                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                    <div className="w-20 h-1 bg-saffron rounded-full opacity-30" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Participant Journey */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-16 text-center">Your Journey</h2>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                        {[
                            { step: "01", title: "Application", desc: "Share your purpose, background, and aspirations." },
                            { step: "02", title: "Selection & Curation", desc: "Align with the ethos and co-create your thematic journey." },
                            { step: "03", title: "Repository Access", desc: "Gain access to curated routes, readings, and contacts." },
                            { step: "04", title: "The Yatra", desc: "Travel consciously, log kilometers, and journal your Darshan." },
                            { step: "05", title: "Post-Yatra", desc: "Submit insights to the repository and join the alumni community." },
                            { step: "06", title: "Contribution", desc: "Mentor new Yatris and lead community initiatives." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-xs font-bold text-gray-400">
                                    {item.step}
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Global Impact */}
            {/* Tools & Global Impact */}
            <section className="py-24 bg-orange-50 text-gray-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-10 text-gray-900">Essential Tools</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                                        <BookOpen className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Yatri Passport</h3>
                                        <p className="text-gray-600 leading-relaxed">A physical journal for daily reflections, travel logs, and insight capturing.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                                        <Compass className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Geo-Tracking</h3>
                                        <p className="text-gray-600 leading-relaxed">Contributing to the collective goal of 100 crore kilometers by 2047.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                                        <Award className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Community Merch</h3>
                                        <p className="text-gray-600 leading-relaxed">Identifying symbols to build identity and community feel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Globe className="w-8 h-8 text-orange-600" />
                                <h2 className="text-3xl font-serif font-bold text-gray-900">Global Impact</h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                VBDY leverages international engagement to project a positive story of India's culture and progress. Foreign participants help shift global narratives about India, acting as ambassadors of our soft power while enriching the community with diverse perspectives.
                            </p>
                            <div className="inline-flex items-center gap-2 text-orange-600 font-bold">
                                Building Bridges Beyond Borders
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA />

            {/* Contact Section */}
            <Contact />
        </main >
    );
}

export default AboutYatra;
