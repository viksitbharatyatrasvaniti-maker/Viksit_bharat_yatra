"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Globe } from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const inputClasses = "w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 text-gray-900 focus:outline-none focus:border-saffron focus:bg-orange-50/30 transition-all duration-300 placeholder-transparent peer";
    const labelClasses = "absolute left-4 -top-3.5 text-xs text-saffron transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-saffron font-medium z-10 bg-transparent";

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setStatusMessage("");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setStatusMessage("Message sent successfully! We'll be in touch soon.");
                setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
            } else {
                throw new Error(data.error || "Failed to send message");
            }
        } catch (error: any) {
            setStatus('error');
            setStatusMessage(error.message || "Something went wrong. Please try again or email us directly.");
        }
    };

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
                    <div className="lg:col-span-2 bg-linear-to-br from-slate-900 to-slate-950 p-12 text-white relative overflow-hidden flex flex-col justify-between">
                        {/* Decorative Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
                            backgroundSize: '32px 32px'
                        }} />

                        <div className="relative z-10">
                            <h2 className="text-4xl font-serif font-bold mb-6 text-white leading-tight">
                                Get in <br />
                                <span className="text-saffron">Touch</span>
                            </h2>
                            <p className="text-slate-100 text-lg mb-10 leading-relaxed">
                                For partnerships, collaborations, media, or general inquiries related to the Viksit Bharat Yatra, reach out to us.
                            </p>

                            <div className="space-y-6">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-saffron/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-saffron" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">SvaNiti Policy Research Center</h3>
                                        <p className="text-slate-100/80 leading-relaxed text-sm">Ukabhai Solanki Marg, Upleta – 360 490,<br />Gujarat, India</p>
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
                                        <p className="text-slate-100/80">office@svaniti.in</p>
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
                                        <p className="text-slate-100/80">+91 90675 47325</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-saffron/20 transition-colors">
                                        <Globe className="w-6 h-6 text-saffron" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Website</h3>
                                        <a href="https://svaniti.in" target="_blank" rel="noopener noreferrer" className="text-slate-100/80 hover:text-saffron transition-colors">svaniti.in</a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="relative z-10 pt-8">
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
                                Fill out the form below to send an email inquiry.
                            </p>
                        </div>

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="firstName"
                                        className={inputClasses}
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('firstName')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                    <label htmlFor="firstName" className={labelClasses}>First Name</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="lastName"
                                        className={inputClasses}
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('lastName')}
                                        onBlur={() => setFocusedField(null)}
                                        required
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
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="phone"
                                        className={inputClasses}
                                        placeholder="+91..."
                                        value={formData.phone}
                                        onChange={handleChange}
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
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                />
                                <label htmlFor="message" className={labelClasses}>How can we help you?</label>
                            </div>

                            <div className="pt-4 space-y-4">
                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className={`group w-full md:w-auto px-10 py-4 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3 
                                        ${status === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-900 hover:bg-slate-800 hover:-translate-y-1 active:scale-95'}
                                        ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}
                                    `}
                                >
                                    {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
                                    {status !== 'loading' && status !== 'success' && (
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    )}
                                </button>

                                {statusMessage && (
                                    <p className={`text-sm ${status === 'error' ? 'text-red-500' : 'text-green-600'} font-medium animate-pulse`}>
                                        {statusMessage}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
