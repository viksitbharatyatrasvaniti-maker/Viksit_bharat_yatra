"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Yatra", href: "/about-yatra" },
        { name: "Blogs", href: "/blogs" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="shrink-0 flex items-center gap-2">
                        <MapPin className="h-8 w-8 text-saffron" />
                        <span className="font-serif font-bold text-xl text-blue-900">
                            Viksit Bharat Darshan
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-saffron transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/register" className="bg-saffron text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30">
                            Register Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-saffron focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saffron hover:bg-orange-50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/register" className="block w-full text-center mt-4 bg-saffron text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
                                Register Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
