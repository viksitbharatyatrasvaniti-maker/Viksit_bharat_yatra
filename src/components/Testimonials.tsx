"use client";

import { motion } from "framer-motion";

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
                    >
                        Stories of Friends on the Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 italic font-light"
                    >
                        Real stories, real journeys—coming soon.
                    </motion.p>
                </div>

                {/* 3-Column Card Layout */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Inspirational Tales */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 h-16 flex items-center">
                            Inspirational Tales in the Making
                        </h3>
                        <div className="mb-6 rounded-xl overflow-hidden aspect-video bg-gray-100 relative">
                            {/* Placeholder: Hiking / Mountains */}
                            <img
                                src="https://images.pexels.com/photos/9904374/pexels-photo-9904374.jpeg"
                                alt="Hikers looking at sunrise"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                            Our Yatra is about to begin. Soon, we’ll share incredible stories of personal growth and discovery.
                        </p>
                        <button disabled className="w-full py-3 bg-gray-100 text-gray-400 font-bold rounded-lg cursor-not-allowed uppercase tracking-wide text-sm">
                            Coming Soon
                        </button>
                    </motion.div>

                    {/* Card 2: Adventure Awaits */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 h-16 flex items-center">
                            Adventure Awaits...
                        </h3>
                        <div className="mb-6 rounded-xl overflow-hidden aspect-video bg-gray-100 relative">
                            {/* Placeholder: Photographer / Landscape */}
                            <img
                                src="https://images.pexels.com/photos/6522109/pexels-photo-6522109.jpeg"
                                alt="Photographer in nature"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                            Exciting journeys are on the horizon. Watch this space for stories of transformation and connection.
                        </p>
                        <button disabled className="w-full py-3 bg-gray-100 text-gray-400 font-bold rounded-lg cursor-not-allowed uppercase tracking-wide text-sm">
                            Stay Tuned
                        </button>
                    </motion.div>

                    {/* Card 3: Your Stories */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 h-16 flex items-center">
                            Your Stories Here Soon
                        </h3>
                        <div className="mb-6 rounded-xl overflow-hidden aspect-video bg-gray-100 relative">
                            {/* Placeholder: Journal / Map */}
                            <img
                                src="https://images.pexels.com/photos/34717647/pexels-photo-34717647.jpeg"
                                alt="Journal and map"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                            In the future, your experiences will be here. We can’t wait to hear and share your Yatra journey.
                        </p>
                        <button disabled className="w-full py-3 bg-gray-100 text-gray-400 font-bold rounded-lg cursor-not-allowed uppercase tracking-wide text-sm">
                            Be Ready
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
