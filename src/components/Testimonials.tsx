"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Aarav Patel",
        role: "Aspiring Entrepreneur",
        location: "Ahmedabad, Gujarat",
        content: "The exposure to diverse industries and grassroots innovations during the Yatra sparked a renewable energy startup idea I never would have thought of in a classroom. It wasn't just Seeing; it was envisioning the future.",
        tags: ["Innovation", "New Ideas"]
    },
    {
        name: "Priya Sharma",
        role: "Social Work Student",
        location: "Delhi, NCR",
        content: "Living with local communities completely changed my perspective. I learned that true acceptance comes from listening to stories unlike my own. This journey shattered my stereotypes and built bridges I didn't know were possible.",
        tags: ["Acceptance", "Empathy"]
    },
    {
        name: "Rohan Mehta",
        role: "Software Engineer",
        location: "Bangalore, Karnataka",
        content: "This Yatra was a mirror. Breaking my routine and old patterns of thinking helped me understand what I truly want from life using the 'Continuity' pillar. I returned not just with memories, but with a renewed sense of purpose.",
        tags: ["Self-Discovery", "Purpose"]
    },
    {
        name: "Sneha Gupta",
        role: "Artist",
        location: "Varanasi, UP",
        content: "I went looking for inspiration for my art but found a community of changemakers. The 'Community' we built is my biggest takeaway; we are now growing together towards a Viksit Bharat.",
        tags: ["Community", "Growth"]
    },
    {
        name: "Vikram Singh",
        role: "Teacher",
        location: "Jaipur, Rajasthan",
        content: "The diverse landscapes of our country taught me more than any textbook could. I'm bringing back lessons of resilience and adaptation to my students.",
        tags: ["Education", "Resilience"]
    },
    {
        name: "Ananya Roy",
        role: "Researcher",
        location: "Kolkata, West Bengal",
        content: "Interacting with local artisans gave me a profound appreciation for our heritage. It's crucial we preserve these traditions while embracing modernity.",
        tags: ["Heritage", "Culture"]
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-10 text-saffron/5">
                    <Quote size={120} />
                </div>
                <div className="absolute bottom-20 right-10 text-blue-900/5 rotate-180">
                    <Quote size={120} />
                </div>
            </div>

            <div className="max-w-full relative z-10 px-0">
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
                    >
                        Stories of <span className="text-saffron">Transformation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Hear from Yatris who stepped out of their comfort zones and evolved through their journeys.
                    </motion.p>
                </div>

                {/* Marquee effect using Framer Motion */}
                <div className="flex overflow-hidden pb-10">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {/* Duplicate the array to create seamless loop */}
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300 w-[350px] md:w-[450px] shrink-0"
                            >
                                <div className="text-saffron mb-4">
                                    <Quote size={32} />
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-8 flex-1 italic text-lg">
                                    "{testimonial.content}"
                                </p>

                                <div className="mt-auto">
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        <p className="text-xs text-gray-400 mt-1">{testimonial.location}</p>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {testimonial.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
