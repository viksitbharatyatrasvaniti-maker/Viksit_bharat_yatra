"use client";

import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const worldUrl = "/world-50m.json";
const indiaUrl = "/india_official.json";

const HeroMap = () => {
    const [images, setImages] = useState<string[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    // Projection config - Centered on India, zoomed to fill screen with Asia/surroundings
    const projectionConfig = {
        scale: 550,
        center: [78, 24]
    };

    // 1. Fetch Images
    useEffect(() => {
        setIsMounted(true);
        fetch('/api/gallery')
            .then(res => res.json())
            .then(data => {
                if (data.images) setImages(data.images);
            })
            .catch(err => console.error("Failed to load gallery:", err));
    }, []);

    if (!isMounted) return <div className="w-full h-full bg-slate-900" />;

    return (
        <div className="w-full h-full flex items-center justify-center bg-slate-900 overflow-hidden relative">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={projectionConfig}
                className="w-full h-full max-h-[90vh]"
                height={600}
                width={800}
            >
                {/* 
                    Define the Mask using the Geographies component itself.
                    This ensures the mask path has the EXACT same projection as the map layers.
                    White fill = visible area (India). Black/Empty = hidden.
                */}
                <defs>
                    <mask id="india-mask" maskUnits="userSpaceOnUse">
                        <Geographies geography={indiaUrl}>
                            {({ geographies }: { geographies: any[] }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="white"
                                        stroke="none"
                                        style={{ default: { outline: "none" } }}
                                    />
                                ))
                            }
                        </Geographies>
                    </mask>
                </defs>

                {/* Layer 1: World (Background) */}
                {/* Render ALL countries to fill the screen */}
                <Geographies geography={worldUrl} style={{ pointerEvents: 'none' }}>
                    {({ geographies }: { geographies: any[] }) =>
                        geographies.map((geo) => {
                            const name = geo.properties.name;
                            if (name === "India") return null; // Skip official world map India

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#334155"
                                    stroke="#1e293b"
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { outline: "none", fill: "#475569" },
                                        pressed: { outline: "none" },
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>

                {/* 
                    Layer 2: The Image Layer (Foreground)
                    We place this AFTER Layer 1 so it renders on TOP.
                    We use a rect foreignObject that covers the whole canvas, 
                    but we apply the mask so it only shows where India is.
                */}
                <foreignObject x="0" y="0" width="800" height="600" mask="url(#india-mask)" style={{ pointerEvents: 'none' }}>
                    <div className="w-full h-full relative overflow-hidden bg-transparent">
                        {/* Image Grid Animation */}
                        <div className="absolute inset-0 grid grid-cols-4 animate-scroll-diagonal">
                            {images.length > 0 ? (
                                [...images, ...images, ...images].map((src, i) => (
                                    <div key={i} className="relative aspect-3/4 w-full overflow-hidden">
                                        <img
                                            src={src}
                                            className="w-full h-full object-cover transform scale-110"
                                            alt="Viksit Bharat"
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="w-full h-full bg-saffron" />
                            )}
                        </div>
                        {/* NO OVERLAY - Images only */}
                    </div>
                </foreignObject>

                {/* Layer 3: Official India Border (Outline Only) */}
                <Geographies geography={indiaUrl} style={{ pointerEvents: 'none' }}>
                    {({ geographies }: { geographies: any[] }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="transparent"
                                stroke="#fff7ed"
                                strokeWidth={1}
                                style={{
                                    default: { outline: "none" },
                                    hover: { outline: "none" },
                                    pressed: { outline: "none" },
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ComposableMap>

            {/* Animation Styles */}
            <style jsx global>{`
                @keyframes scroll-diagonal {
                    0% { transform: translateY(0) translateX(0); }
                    100% { transform: translateY(-30%) translateX(-10%); }
                }
                .animate-scroll-diagonal {
                    animation: scroll-diagonal 40s linear infinite alternate;
                }
            `}</style>
        </div>
    );
};

export default HeroMap;
