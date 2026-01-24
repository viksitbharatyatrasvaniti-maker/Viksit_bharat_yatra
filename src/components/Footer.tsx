import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-6 w-6 text-saffron" />
                            <span className="font-serif font-bold text-xl">
                                Viksit Bharat Darshan
                            </span>
                        </div>
                        <p className="text-blue-100 text-sm">
                            Showcasing the journey of India's development and cultural heritage.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-gold">Quick Links</h3>
                        <ul className="space-y-2 text-blue-100">
                            <li><a href="#" className="hover:text-saffron transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-saffron transition-colors">About Yatra</a></li>
                            <li><a href="#gallery" className="hover:text-saffron transition-colors">Gallery</a></li>
                            <li><a href="#contact" className="hover:text-saffron transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-gold">Contact Us</h3>
                        <ul className="space-y-2 text-blue-100">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>info@viksitbharat.gov.in</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+91 11 2345 6789</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>New Delhi, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-gold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-saffron transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-saffron transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-saffron transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200 text-sm">
                    <p>&copy; {new Date().getFullYear()} Viksit Bharat Darshan Yatra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
