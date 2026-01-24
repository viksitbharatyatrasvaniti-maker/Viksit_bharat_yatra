"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const inputClasses = "w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 text-gray-900 focus:outline-none focus:border-saffron focus:bg-orange-50/30 transition-all duration-300 placeholder-transparent peer";
    const labelClasses = "absolute left-4 -top-3.5 text-xs text-saffron transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-saffron font-medium z-10 bg-transparent";

    return (
        <section id="contact" className="relative py-28 bg-gray-50 overflow-hidden">
            {/* Abstract Background Shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl opacity-50"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl opacity-50"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-4xl shadow-2xl overflow-hidden grid lg:grid-cols-5 min-h-[700px]"
                >
                    {/* Info Panel - 2/5 width */}
                    <div className="lg:col-span-2 bg-linear-to-br from-blue-900 to-blue-950 p-12 text-white relative overflow-hidden flex flex-col justify-between">
                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
                            backgroundSize: '32px 32px'
                        }} />

                        <div className="relative z-10">
                            <h2 className="text-4xl font-serif font-bold mb-6 text-white leading-tight">
                                Let's Start Your <br />
                                <span className="text-saffron">Journey</span>
                            </h2>
                            <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                                Connect with us to join the Viksit Bharat Darshan Yatra. We are here to answer your queries and welcome you to the movement.
                            </p>

                            <div className="space-y-8">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-saffron/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-saffron" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                        <p className="text-blue-100/80 leading-relaxed">Ministry of Youth Affairs & Sports<br />Shastri Bhawan, New Delhi</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-saffron/20 transition-colors">
                                        <Mail className="w-6 h-6 text-saffron" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                        <p className="text-blue-100/80">contact@viksitbharatyatra.gov.in</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-saffron/20 transition-colors">
                                        <Phone className="w-6 h-6 text-saffron" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                        <p className="text-blue-100/80">+91 11 2338 6520</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="relative z-10 pt-12">
                            <div className="flex gap-4 opacity-50">
                                <div className="w-2 h-2 rounded-full bg-saffron" />
                                <div className="w-2 h-2 rounded-full bg-white" />
                                <div className="w-12 h-2 rounded-full bg-white" />
                            </div>
                        </div>
                    </div>

                    {/* Form Panel - 3/5 width */}
                    <div className="lg:col-span-3 bg-white p-12 lg:p-16 flex flex-col justify-center">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                            <p className="text-gray-500">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="firstName"
                                        className={inputClasses}
                                        placeholder="John"
                                        onFocus={() => setFocusedField('firstName')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <label htmlFor="firstName" className={labelClasses}>First Name</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="lastName"
                                        className={inputClasses}
                                        placeholder="Doe"
                                        onFocus={() => setFocusedField('lastName')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <label htmlFor="lastName" className={labelClasses}>Last Name</label>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        className={inputClasses}
                                        placeholder="john@example.com"
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="phone"
                                        className={inputClasses}
                                        placeholder="+91..."
                                        onFocus={() => setFocusedField('phone')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                                </div>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    rows={4}
                                    className={`${inputClasses} resize-none`}
                                    placeholder="Your message..."
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                />
                                <label htmlFor="message" className={labelClasses}>How can we help you?</label>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="group w-full md:w-auto px-10 py-4 bg-blue-900 text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 active:scale-95"
                                >
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
