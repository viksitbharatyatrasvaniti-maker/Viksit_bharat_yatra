"use client";

import { motion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";

const CTA = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-24 bg-blue-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-saffron rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        Ready to Transform Your <br />
                        <span className="text-saffron">Journey?</span>
                    </h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                        Join thousands of youth in shaping the future of India. Whether you're ready to register or want to learn more, your first step starts here.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/register"
                            className="group relative px-8 py-4 bg-saffron text-white text-lg font-bold rounded-full overflow-hidden shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105 block text-center"
                        >
                            <span className="relative z-10 flex items-center gap-2 justify-center">
                                Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>

                        <Link href="/about-yatra"
                            className="group px-8 py-4 bg-transparent border-2 border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2"
                        >
                            View Yatra Details <Info className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
