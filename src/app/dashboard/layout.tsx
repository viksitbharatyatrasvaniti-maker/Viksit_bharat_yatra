"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FileText,
    PenSquare,
    Settings,
    LogOut,
    Menu,
    X,
    MapPin
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarLinks = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Blogs", href: "/dashboard", icon: FileText }, // Temporarily pointing to dashboard main
    { name: "Create Blog", href: "/dashboard/create-blog", icon: PenSquare },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col fixed h-full z-20">
                <div className="h-16 flex items-center px-6 border-b border-gray-100">
                    <Link href="/" className="flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-saffron" />
                        <span className="font-serif font-bold text-lg text-blue-900">
                            VBDY <span className="text-gray-400 font-sans text-xs ml-1">Admin</span>
                        </span>
                    </Link>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                    {sidebarLinks.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${isActive
                                        ? "bg-orange-50 text-orange-700 font-medium"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? "text-orange-500" : "text-gray-400 group-hover:text-gray-600"}`} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium">
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                    <div className="mt-4 flex items-center gap-3 px-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs">
                            JD
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                            <p className="text-xs text-gray-500 truncate">Yatri</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 w-full z-20 bg-white border-b border-gray-200 px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-saffron" />
                    <span className="font-serif font-bold text-lg text-blue-900">VBDY</span>
                </Link>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-600">
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black z-30 lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-64 bg-white z-40 flex flex-col lg:hidden border-r border-gray-200"
                        >
                            {/* Same sidebar content as desktop... reusing logic would be better but duplicating for speed/simplicity here */}
                            <div className="h-16 flex items-center px-6 border-b border-gray-100">
                                <span className="font-serif font-bold text-lg text-blue-900">Menu</span>
                            </div>
                            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                                {sidebarLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${pathname === item.href
                                                ? "bg-orange-50 text-orange-700 font-medium"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1 lg:pl-64 pt-16 lg:pt-0">
                <div className="max-w-7xl mx-auto p-6 md:p-8 lg:p-12">
                    {children}
                </div>
            </main>
        </div>
    );
}
