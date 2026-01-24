"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPostPage() {
    // Mock data for a single post - in a real app, you'd fetch this based on the ID
    const blog = {
        title: "My Journey Through the Ghats of Varanasi",
        subtitle: "Exploring the spiritual capital of India, where life and death coexist in a chaotic yet harmonious dance.",
        author: "Priya Sharma",
        role: "VBDY Participant",
        date: "Oct 24, 2024",
        readTime: "5 min read",
        category: "Spiritual",
        image: "https://images.pexels.com/photos/3447333/pexels-photo-3447333.jpeg",
        content: `
            <p>The first thing that hits you about Varanasi is the sensory overload. The smell of incense mixed with street food, the sound of temple bells ringing incessantly, and the visual spectacle of thousands of pilgrims bathing in the holy Ganges. As part of the Viksit Bharat Darshan Yatra, our stop here was not just about tourism; it was an immersion into the soul of India.</p>

            <h3>The Morning Aarti</h3>
            <p>We woke up at 4 AM to witness the Subah-e-Banaras. As the sun began to rise, painting the sky in hues of saffron and pink, the ghats came alive. Young Brahmin priests, synchronized in their movements, performed the Aarti with large brass lamps. The chanting of mantras reverberated through the air, creating a vibration that felt like it was cleansing you from within.</p>
            
            <blockquote>"Varanasi is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together." – Mark Twain</blockquote>

            <p>Sitting there on the steps of Assi Ghat, I realized that this city is a living museum. It has seen empires rise and fall, yet its core remains unchanged. It is a testament to the resilience and continuity of Indian civilization.</p>

            <h3>Beyond the Spiritual</h3>
            <p>Our Yatra also took us to the Banaras Hindu University (BHU). Walking through its sprawling campus, we saw a different side of Varanasi – a center of learning and innovation. We interacted with students who are working on modern solutions for ancient problems, from cleaning the Ganges to preserving heritage manuscripts using AI.</p>
            
            <p>This duality is what defines the Viksit Bharat Darshan Yatra. We are exploring our roots while simultaneously looking towards the future. Varanasi is not just a relic of the past; it is a breathing, evolving entity that contributes to the narrative of a developed India.</p>

            <h3>Reflections</h3>
            <p>As we boarded the train to our next destination, I carried with me not just souvenirs, but a deeper understanding of what it means to be Indian. The noise, the chaotic traffic, the narrow lanes – they all seemed to fade away, leaving behind a profound sense of peace. If you ever get the chance, do not just visit Varanasi; experience it.</p>
        `
    };

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/blogs" className="inline-flex items-center gap-2 text-white/80 hover:text-saffron transition-colors mb-6 text-sm font-medium backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
                            <ArrowLeft className="w-4 h-4" /> Back to Stories
                        </Link>
                        <div className="flex items-center gap-4 text-sm font-medium text-orange-200 mb-4">
                            <span className="bg-orange-600/90 px-3 py-1 rounded-full text-white">{blog.category}</span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {blog.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight max-w-4xl">
                            {blog.title}
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
                            {blog.subtitle}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-lg max-w-none text-gray-900
                        prose-headings:font-serif prose-headings:font-bold prose-headings:text-blue-900 
                        prose-p:text-gray-900 prose-p:leading-8 
                        prose-strong:text-gray-900 prose-li:text-gray-900
                        prose-blockquote:border-l-saffron prose-blockquote:bg-orange-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-gray-900 prose-blockquote:rounded-r-lg
                        prose-img:rounded-3xl prose-img:shadow-xl"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Tags & Share */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex gap-2 flex-wrap">
                            {['Varanasi', 'Spiritual', 'Travel', 'India', 'Culture'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-500 font-medium text-sm">Share this story:</span>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"><Twitter className="w-4 h-4" /></button>
                                <button className="p-2 rounded-full bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors"><Facebook className="w-4 h-4" /></button>
                                <button className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"><Linkedin className="w-4 h-4" /></button>
                                <button className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"><MessageCircle className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Author Card */}
                    <div className="bg-gray-50 p-8 rounded-3xl sticky top-24">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">About the Author</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-800">
                                {blog.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">{blog.author}</h4>
                                <p className="text-sm text-saffron font-medium">{blog.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            A passionate traveler and storyteller participating in the Viksit Bharat Darshan Yatra to discover the hidden gems of India.
                        </p>
                        <button className="w-full py-3 bg-white border border-gray-200 rounded-xl text-blue-900 font-bold hover:bg-blue-50 transition-colors text-sm">
                            View Profile
                        </button>
                    </div>

                    {/* Related Posts */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">You might also like</h3>
                        <div className="space-y-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="group flex gap-4 items-start cursor-pointer">
                                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-200">
                                        <img src="https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 group-hover:text-saffron transition-colors line-clamp-2 text-sm">
                                            Understanding Sustainable Rural Development
                                        </h4>
                                        <p className="text-xs text-gray-500 mt-1">Oct 18 • 8 min read</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
