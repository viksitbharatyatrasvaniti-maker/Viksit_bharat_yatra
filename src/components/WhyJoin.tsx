"use client";

import { motion } from "framer-motion";
import { Compass, Users, Infinity, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
    {
        id: "curation",
        title: "Curation",
        subtitle: "Personalized Journeys",
        icon: Compass,
        description: "Not a fixed tour, but a personalized journey designed around your interests. We craft suggestive flows, tailored toolkits, and connect you with our rich repository of contacts tailored to your aspirations.",
        bgClass: "bg-orange-50",
        iconClass: "text-orange-500",
        accentClass: "bg-orange-500",
        image: "https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg"
    },
    {
        id: "community",
        title: "Community",
        subtitle: "Lifelong Connections",
        icon: Users,
        description: "Join a vibrant network of changemakers (ages 18-35) and mentors. Engage in regional meet-ups, annual summits, and continuous digital storytelling with fellow Yatris to grow together.",
        bgClass: "bg-blue-50",
        iconClass: "text-blue-500",
        accentClass: "bg-blue-500",
        image: "https://images.pexels.com/photos/1304154/pexels-photo-1304154.jpeg"
    },
    {
        id: "continuity",
        title: "Continuity",
        subtitle: "Enduring Impact",
        icon: Infinity,
        description: "The journey doesn't end when you return. Document your growth in the Yatri Passport, contribute to the collective wisdom, and spark new initiatives for a Viksit Bharat.",
        bgClass: "bg-green-50",
        iconClass: "text-green-500",
        accentClass: "bg-green-500",
        image: "https://images.pexels.com/photos/2216400/pexels-photo-2216400.jpeg"
    }
];

const WhyJoin = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
                    >
                        Why Go on Yatra With Us?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto"
                    >
                        A movement built on three interconnected pillars designed for your transformation.
                    </motion.p>
                </div>

                <div className="space-y-32">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Side */}
                            <div className="flex-1 w-full">
                                <div className={`relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl ${pillar.bgClass} group`}>
                                    <img
                                        src={pillar.image}
                                        alt={pillar.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay for depth */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center gap-3">
                                    <span className={`w-12 h-1 ${pillar.accentClass} rounded-full`}></span>
                                    <span className={`text-sm font-bold tracking-widest uppercase ${pillar.iconClass}`}>
                                        {pillar.subtitle}
                                    </span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{pillar.title}</h3>
                                <p className="text-xl text-gray-600 leading-relaxed font-light">
                                    {pillar.description}
                                </p>

                                <div className="pt-4">
                                    <Link href="/about-yatra" className="group flex items-center text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors">
                                        Discover more
                                        <span className={`ml-3 p-2 rounded-full ${pillar.bgClass} group-hover:bg-orange-100 transition-colors`}>
                                            <ArrowRight className={`h-4 w-4 ${pillar.iconClass}`} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;
