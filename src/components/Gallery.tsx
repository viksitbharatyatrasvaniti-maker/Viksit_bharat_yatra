"use client";

import { motion } from "framer-motion";

// Placeholder images - in a real app, these would be actual assets
const images = [
    { src: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=800", alt: "India Gate" },
    { src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800", alt: "Taj Mahal" },
    { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800", alt: "Varanasi" },
    { src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=800", alt: "Golden Temple" },
    { src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=800", alt: "Hawa Mahal" },
    { src: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?auto=format&fit=crop&q=80&w=800", alt: "Kerala Backwaters" },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
                        Glimpses of the Yatra
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Capturing the essence of India's diversity and beauty through the lens of the Yatra.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative aspect-video overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow group"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg">{image.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
