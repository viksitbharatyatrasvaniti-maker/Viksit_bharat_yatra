"use client";

import { motion } from "framer-motion";
import { Sparkles, Feather } from "lucide-react";

export default function BlogsPage() {
    return (
        <main className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header Section */}
            <section className="relative py-24 bg-white overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-blue-50/50" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-saffron font-bold text-xs mb-6 tracking-wider uppercase">
                            Yatra Chronicles
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                            Stories from the <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600">Heart of India</span>
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                            Discover the diverse experiences, reflections, and insights from our Yatris as they traverse the length and breadth of the nation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="flex-1 flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-12 rounded-4xl shadow-xl max-w-2xl w-full text-center relative z-10 border border-gray-100"
                >
                    <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-8 text-saffron">
                        <Feather size={40} className="stroke-1.5" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                        Stories in the Making
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Our writers are currently curating the most inspiring stories from the Yatra. Stay tuned for immersive narratives that capture the essence of Viksit Bharat.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-500 text-sm font-medium">
                        <Sparkles size={16} className="text-saffron" />
                        Coming Soon
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
