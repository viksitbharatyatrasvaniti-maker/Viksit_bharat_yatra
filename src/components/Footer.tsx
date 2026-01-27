import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-xl">
                                Viksit Bharat Yatra
                            </span>
                        </div>
                        <p className="text-slate-100 text-sm">
                            Where Individual Journeys Build a Nation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-gold">Quick Links</h3>
                        <ul className="space-y-2 text-slate-100">
                            <li><a href="#" className="hover:text-saffron transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-saffron transition-colors">About Yatra</a></li>
                            <li><a href="#contact" className="hover:text-saffron transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-gold">Contact Us</h3>
                        <ul className="space-y-3 text-slate-100">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-saffron" />
                                <a href="mailto:office@svaniti.in" className="hover:text-white transition-colors">office@svaniti.in</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-saffron" />
                                <a href="tel:+919067547325" className="hover:text-white transition-colors">+91 90675 47325</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-saffron mt-1 shrink-0" />
                                <span className="text-sm">Ukabhai Solanki Marg, Upleta – 360 490, Gujarat, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-gold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-saffron transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-saffron transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-saffron transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-200 text-sm">
                    <p>&copy; {new Date().getFullYear()} Viksit Bharat Yatra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
