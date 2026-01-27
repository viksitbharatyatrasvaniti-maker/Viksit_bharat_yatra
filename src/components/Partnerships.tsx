"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Rocket, X, Loader2, CheckCircle2 } from "lucide-react";

const Partnerships = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: "office@svaniti.in",
                    subject: "New Partnership Interest",
                    html: `<p>Someone wants to partner.</p><p>Reach out to the email which they gave: <strong>${email}</strong></p>`,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");
                setTimeout(() => {
                    setIsModalOpen(false);
                    setStatus("idle");
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

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
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
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

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-4 bg-saffron text-white text-lg font-bold rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                        <Handshake className="w-5 h-5" />
                        Partner with Us
                    </button>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl z-10"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Let's Build Together</h3>
                            <p className="text-gray-600 mb-6">Enter your email and we'll reach out to discuss partnership opportunities.</p>

                            {status === "success" ? (
                                <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                                    <p className="font-medium">Request sent! We'll reach out to the email you provided.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSendEmail} className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@company.com"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full py-3 bg-saffron text-white font-bold rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Request"
                                        )}
                                    </button>
                                    {status === "error" && (
                                        <p className="text-red-500 text-sm text-center">
                                            Something went wrong. Please try again.
                                        </p>
                                    )}
                                </form>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Partnerships;
