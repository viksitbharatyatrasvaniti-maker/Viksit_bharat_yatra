"use client";

import { useState } from "react";
import { ArrowLeft, Image as ImageIcon, Save, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import Editor from "@/components/Editor";

export default function CreateBlogPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="max-w-5xl mx-auto pb-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard"
                        className="p-2 -ml-2 text-gray-400 hover:text-gray-900 hover:bg-white rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Create New Blog</h1>
                        <p className="text-gray-500 text-sm">Share your Yatra experiences with the world.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-medium transition-colors">
                        <Save className="w-4 h-4" />
                        Save Draft
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-medium transition-colors shadow-lg shadow-blue-900/20">
                        <Send className="w-4 h-4" />
                        Publish
                    </button>
                </div>
            </div>

            {/* Editor Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
            >
                {/* Cover Image Placeholder */}
                <div className="bg-gray-50 h-48 border-b border-gray-200 flex flex-col items-center justify-center text-gray-400 gap-2 cursor-pointer hover:bg-gray-100 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:border-saffron group-hover:text-saffron transition-colors">
                        <ImageIcon className="w-6 h-6" />
                    </div>
                    <span className="font-medium">Add Cover Image</span>
                </div>

                <div className="space-y-0">
                    {/* Title Input */}
                    <div className="p-8 pb-4">
                        <input
                            type="text"
                            placeholder="Blog Title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full text-4xl sm:text-5xl font-serif font-bold text-gray-900 placeholder-gray-300 border-none outline-none focus:ring-0 px-0 bg-transparent"
                        />
                    </div>

                    {/* Rich Text Editor */}
                    <Editor content={content} onChange={setContent} />
                </div>
            </motion.div>
        </div>
    );
}
