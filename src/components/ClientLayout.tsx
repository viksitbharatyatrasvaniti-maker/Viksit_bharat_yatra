"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith("/dashboard");
    const isAuthPage = pathname === "/register" || pathname === "/login";

    // If it's a dashboard or auth page, render simplified layout without Nav/Footer
    if (isDashboard || isAuthPage) {
        return <>{children}</>;
    }

    // Default website layout
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}
