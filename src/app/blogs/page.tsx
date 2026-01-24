"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock data (shared structure with dashboard for consistency)
const blogs = [
    {
        id: 1,
        title: "My Journey Through the Ghats of Varanasi",
        excerpt: "The spiritual energy of Kashi is something that cannot be described in words, only felt. Every step on the ghats tells a story of thousands of years...",
        author: "Priya Sharma",
        date: "Oct 24, 2024",
        readTime: "5 min read",
        category: "Spiritual",
        image: "https://images.pexels.com/photos/3447333/pexels-photo-3447333.jpeg"
    },
    {
        id: 2,
        title: "Understanding Sustainable Rural Development",
        excerpt: "Visiting the model villages in Gujarat opened my eyes to community-driven progress. The way local artisans are empowered is truly inspiring for...",
        author: "Rahul Verma",
        date: "Oct 18, 2024",
        readTime: "8 min read",
        category: "Development",
        image: "https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg"
    },
    {
        id: 3,
        title: "The Silent Architecture of Hampi",
        excerpt: "Walking through the ruins, one wonders about the glorious past of the Vijayanagara Empire. The stones speak of a time when art and architecture were...",
        author: "Ankit Singh",
        date: "Oct 15, 2024",
        readTime: "6 min read",
        category: "Heritage",
        image: "https://images.pexels.com/photos/1630782/pexels-photo-1630782.jpeg"
    },
    {
        id: 4,
        title: "Digital India: Connecting the Unconnected",
        excerpt: "How technology is transforming the lives of farmers in remote villages. We witnessed firsthand the impact of digital payments and connectivity...",
        author: "Sneha Patel",
        date: "Oct 12, 2024",
        readTime: "4 min read",
        category: "Technology",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        title: "Culinary Secrets of Rajasthan",
        excerpt: "More than just Dal Baati Churma, the cuisine of Rajasthan reflects its geography and warrior history. A spicy and sweet journey for the palate...",
        author: "Vikram Rathore",
        date: "Oct 10, 2024",
        readTime: "7 min read",
        category: "Culture",
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 6,
        title: "Women Entrepreneurs of the North East",
        excerpt: "Meeting the women behind the thriving handloom industry in Assam. Their resilience and creativity are weaving a new future for the region...",
        author: "Meera Das",
        date: "Oct 05, 2024",
        readTime: "5 min read",
        category: "Empowerment",
        image: "https://images.pexels.com/photos/19601334/pexels-photo-19601334/free-photo-of-tea-trees-on-plantation.jpeg"
    }
];

const BlogCard = ({ blog, index }: { blog: typeof blogs[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-4xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-900 shadow-sm">
                    {blog.category}
                </div>
            </div>
            <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-saffron" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-saffron" /> {blog.readTime}
                    </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-saffron transition-colors leading-tight">
                    {blog.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed font-light">
                    {blog.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 text-xs font-bold">
                            {blog.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-900">{blog.author}</span>
                    </div>
                    <Link
                        href={`/blogs/${blog.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-saffron transition-colors"
                    >
                        Read Story <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function BlogsPage() {
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="absolute inset-0 bg-blue-50/50" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-saffron font-bold text-xs mb-6 tracking-wider uppercase">
                            Yatra Chronicles
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                            Stories from the <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600">Heart of India</span>
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                            Discover the diverse experiences, reflections, and insights from our Yatris as they traverse the length and breadth of the nation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blogs Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <BlogCard key={blog.id} blog={blog} index={index} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="px-8 py-4 bg-white border border-gray-200 rounded-full font-bold text-gray-900 hover:bg-gray-50 hover:border-saffron hover:text-saffron transition-all shadow-sm hover:shadow-md">
                        Load More Stories
                    </button>
                </div>
            </section>
        </main>
    );
}
