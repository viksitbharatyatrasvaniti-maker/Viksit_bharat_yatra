"use client";

import HeroMap from "./HeroMap";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900 flex items-center justify-center">
            {/* Background Map Layer */}
            <div className="absolute inset-0 z-0">
                <HeroMap />
                {/* Dim Overlay */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pointer-events-none">
                <div className="pointer-events-auto">
                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-2 tracking-tight drop-shadow-2xl"
                    >
                        <span className="bg-gradient-to-r from-saffron via-orange-200 to-white bg-clip-text text-transparent">
                            Experiencing, Envisaging,
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent">
                            and Evolving
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-2xl md:text-3xl text-gray-300 font-light mb-8 tracking-wide"
                    >
                        with <span className="text-white font-medium">Viksit Bharat Yatra</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light"
                    >
                        Endeavor with the Viksit Bharat Yatra—a journey across diverse geographies, people, and cultures, inviting reflection, imagination, and the pursuit of aspirations aligned with the idea of a Viksit Bharat.
                    </motion.p>

                    {/* Branding */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-8 flex flex-col items-center gap-3"
                    >
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                            Initiative by Svaniti
                        </span>
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 shadow-xl">
                            <img
                                src="/svaniti-logo.png"
                                alt="Svaniti"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
