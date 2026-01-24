"use client";

import { motion } from "framer-motion";
import { Plus, Search, FileText, BarChart3, Clock, MoreVertical, PenSquare, Trash2, Globe } from "lucide-react";
import Link from "next/link";

const stats = [
    { label: "Total Blogs", value: "12", icon: FileText, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Total Views", value: "8.4k", icon: BarChart3, color: "text-green-600", bg: "bg-green-100" },
    { label: "Drafts", value: "3", icon: Clock, color: "text-orange-600", bg: "bg-orange-100" },
];

const blogs = [
    {
        id: 1,
        title: "My Journey Through the Ghats of Varanasi",
        excerpt: "The spiritual energy of Kashi is something that cannot be described in words, only felt...",
        status: "Published",
        date: "Oct 24, 2024",
        views: "1.2k",
        image: "https://images.pexels.com/photos/3447333/pexels-photo-3447333.jpeg"
    },
    {
        id: 2,
        title: "Understanding Sustainable Rural Development",
        excerpt: "Visiting the model villages in Gujarat opened my eyes to community-driven progress...",
        status: "Published",
        date: "Oct 18, 2024",
        views: "856",
        image: "https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg"
    },
    {
        id: 3,
        title: "The Silent Architecture of Hampi",
        excerpt: "Walking through the ruins, one wonders about the glorious past of the Vijayanagara Empire...",
        status: "Draft",
        date: "Edited 2 days ago",
        views: "-",
        image: "https://images.pexels.com/photos/1630782/pexels-photo-1630782.jpeg"
    }
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back, John! 👋</h1>
                    <p className="text-gray-500 mt-1">Here's what's happening with your yatra blogs.</p>
                </div>
                <Link
                    href="/dashboard/create-blog"
                    className="inline-flex items-center gap-2 bg-blue-900 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                >
                    <Plus className="w-5 h-5" />
                    Create New Blog
                </Link>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"
                    >
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                        </div>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recent Blogs */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-xl font-bold text-gray-900">Recent Blogs</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-saffron/20 w-full sm:w-64"
                        />
                    </div>
                </div>

                <div className="divide-y divide-gray-50">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="p-6 hover:bg-gray-50 transition-colors group">
                            <div className="flex gap-6 items-start">
                                <div className="w-24 h-24 sm:w-32 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-900 transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                                                <PenSquare className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors md:hidden">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">{blog.excerpt}</p>
                                    <div className="flex items-center gap-4 text-xs font-medium">
                                        <span className={`px-2.5 py-1 rounded-full ${blog.status === 'Published'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {blog.status}
                                        </span>
                                        <span className="text-gray-400 flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {blog.date}
                                        </span>
                                        {blog.views !== '-' && (
                                            <span className="text-gray-400 flex items-center gap-1">
                                                <Globe className="w-3 h-3" /> {blog.views} views
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
