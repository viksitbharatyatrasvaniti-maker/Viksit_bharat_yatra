
"use client";

import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard');
        }, 1500);
    };

    return (
        <main className="min-h-screen flex font-sans bg-white">
            {/* Left Side - Visual */}
            <div className="hidden lg:flex w-1/2 relative bg-blue-900 overflow-hidden items-center justify-center text-center px-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/3447333/pexels-photo-3447333.jpeg"
                        alt="Yatra Background"
                        className="w-full h-full object-cover opacity-50 contrast-125 saturate-0"
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-blue-900/90 to-blue-950/90 mix-blend-multiply" />
                </div>

                <div className="relative z-10 max-w-lg">
                    <h2 className="text-5xl font-serif font-bold text-white mb-6 leading-tight">
                        Begin Your <br /><span className="text-saffron">Transformation</span>
                    </h2>
                    <p className="text-xl text-blue-100 font-light leading-relaxed">
                        "The Yatra is not just a journey through geography, but a voyage into the soul of India."
                    </p>
                </div>

                {/* Decorative circles */}
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 relative">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-left">
                        <Link href="/" className="inline-flex items-center gap-2 text-blue-900 font-bold font-serif text-lg mb-8 hover:opacity-80 transition-opacity">
                            <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                                <ArrowRight className="w-4 h-4 rotate-180" />
                            </span>
                            Back to Home
                        </Link>
                        <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">Create Account</h1>
                        <p className="text-gray-500 text-lg">Join the Viksit Bharat Darshan Yatra today.</p>
                    </div>

                    {/* Google Button */}
                    <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-800 font-medium py-3.5 px-4 rounded-2xl flex items-center justify-center gap-3 transition-all group" onClick={() => router.push('/dashboard')}>
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-5">
                            <div className="relative group">
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-saffron transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron focus:bg-white transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-saffron transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron focus:bg-white transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-saffron transition-colors" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron/20 focus:border-saffron focus:bg-white transition-all duration-300"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-2xl shadow-lg shadow-orange-500/20 text-base font-bold text-white bg-linear-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                        >
                            {isLoading ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Create Account <ArrowRight className="ml-2 w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="text-gray-500">
                            Already have an account?{" "}
                            <Link href="/login" className="font-bold text-saffron hover:text-orange-700 transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RegisterPage;
