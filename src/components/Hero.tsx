"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Video with Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                >
                    <source
                        src="https://www.pexels.com/download/video/4684159"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                {/* Cinema-grade Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-black/30" />
                <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-black/50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-medium text-sm tracking-wide shadow-2xl">
                        <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                        #ViksitBharat2047
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl"
                >
                    Seeing, <br className="md:hidden" />
                    <span className="text-white/80">Experiencing and</span> <br />
                    <span className="bg-linear-to-r from-saffron to-yellow-400 bg-clip-text text-transparent">
                        Evolving.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg"
                >
                    Embark on the <strong className="text-white font-semibold">Viksit Bharat Darshan Yatra</strong>—a transformative journey through the diverse landscapes and rising spirit of a New India.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                    <button className="group relative px-10 py-5 bg-saffron text-white rounded-full font-bold text-lg overflow-hidden shadow-[0_0_40px_-10px_rgba(255,153,51,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,153,51,0.7)] transition-all transform hover:scale-105 active:scale-95">
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Join the Yatra <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <Link href="/about-yatra" className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/15 hover:border-white/40 transition-all transform hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center">
                        View Details
                    </Link>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
