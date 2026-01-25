"use client";

import { motion } from "framer-motion";
import { Handshake, Rocket } from "lucide-react";

const Partnerships = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
                    >
                        Partner with Us for a <span className="text-saffron">Viksit Bharat</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Collaborate to Build Transformative Journeys
                    </motion.p>
                </div>

                {/* Partnerships Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Impact Partnership */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                            <Handshake size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact Partnership</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We invite strategic partners—travel providers, hospitality brands, ticket aggregators, and corporations—who can support us with resources, infrastructure, or funding. Your involvement powers our ability to expand reach and create lasting societal impact.
                        </p>
                    </motion.div>

                    {/* Experience Partnership */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                            <Rocket size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience Partnership</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            If you curate thematic Yatras or offer immersive experiences, let’s co-create. We can develop new themes together or connect our participants to your existing journeys, expanding their horizons and deepening the impact. Together, we enrich every journey and amplify our shared vision.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Partnerships;
