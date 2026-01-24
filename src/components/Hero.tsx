"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gray-900">
            {/* India Map Background Shape with Scrolling Images */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none overflow-hidden pb-10">
                <div
                    className="relative h-[85vh] w-[75vh] max-w-[90vw] max-h-[800px] flex flex-wrap content-start items-start justify-center gap-2 overflow-hidden"
                    style={{
                        maskImage: "url('/india-map.svg')",
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: "url('/india-map.svg')",
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                    }}
                >
                    {/* Moving Image Grid */}
                    <div className="absolute inset-0 grid grid-cols-4 gap-2 opacity-80">
                        {[
                            "https://loremflickr.com/400/600/tajmahal",
                            "https://loremflickr.com/400/600/isro,rocket",
                            "https://loremflickr.com/400/600/india,dance",
                            "https://loremflickr.com/400/600/india,temple",
                            "https://loremflickr.com/400/600/india,train",
                            "https://loremflickr.com/400/600/kerala,boat",
                            "https://loremflickr.com/400/600/indian,farmer",
                            "https://loremflickr.com/400/600/lotus,temple",
                            "https://loremflickr.com/400/600/himalaya",
                            "https://loremflickr.com/400/600/india,city",
                            "https://loremflickr.com/400/600/india,tech",
                            "https://loremflickr.com/400/600/india,people",
                        ].map((src, i) => (
                            <motion.div
                                key={i}
                                className="relative w-full aspect-[2/3] overflow-hidden rounded-lg"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -100, 0] }}
                                transition={{
                                    duration: 20 + i * 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <img
                                    src={src}
                                    alt="Viksit Bharat"
                                    className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Overlay Gradient to keep the saffron/green theme feel */}
                    <div className="absolute inset-0 bg-linear-to-br from-saffron/40 via-white/20 to-green-600/40 mix-blend-overlay z-10" />
                </div>
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
