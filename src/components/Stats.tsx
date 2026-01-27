"use client";

import { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";

const Counter = ({ from, to }: { from: number; to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;

        const controls = animate(from, to, {
            duration: 3,
            onUpdate(value) {
                node.textContent = Math.round(value).toLocaleString();
            },
            ease: "easeOut"
        });

        return () => controls.stop();
    }, [from, to, inView]);

    return <span ref={nodeRef} className="tabular-nums" />;
};

const Stats = () => {
    return (
        <section className="py-20 bg-saffron text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-6xl md:text-9xl font-bold mb-4 font-mono tracking-tighter drop-shadow-md">
                        <Counter from={0} to={125088}/> Kms traveled
                    </div>
                    <div className="text-2xl md:text-4xl font-serif font-medium tracking-wide text-orange-100">
                       100 crore kilometers by 2047
                    </div>
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-lg md:text-xl text-orange-100/90 max-w-2xl"
                >
                    Each journey is a thread, weaving personal transformation into the fabric of a developed Bharat.
                </motion.p>
            </div>
        </section>
    );
};

export default Stats;
