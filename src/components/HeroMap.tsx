"use client";

import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const worldUrl = "/world-50m.json";
const indiaUrl = "/india_official.json";

const HeroMap = () => {
    const [images, setImages] = useState<string[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    const projectionConfig = {
        scale: 550,
        center: [78, 24],
    };

    useEffect(() => {
        setIsMounted(true);
        fetch("/api/gallery")
            .then((res) => res.json())
            .then((data) => {
                if (data.images) setImages(data.images);
            })
            .catch(() => {});
    }, []);

    if (!isMounted) {
        return <div className="w-full h-full bg-slate-900" />;
    }

    return (
        <div className="w-full h-full flex items-center justify-center bg-slate-900 overflow-hidden relative">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={projectionConfig}
                className="w-full h-full max-h-[90vh]"
                width={800}
                height={600}
            >
                {/* Mask */}
                <defs>
                    <mask id="india-mask" maskUnits="userSpaceOnUse">
                        <Geographies geography={indiaUrl}>
                            {({ geographies }: { geographies: any[] }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="white"
                                        stroke="white"
                                        strokeWidth={0.75}
                                        style={{ default: { outline: "none" } }}
                                    />
                                ))
                            }
                        </Geographies>
                    </mask>
                </defs>

                {/* World layer */}
                <Geographies geography={worldUrl} style={{ pointerEvents: "none" }}>
                    {({ geographies }: { geographies: any[] }) =>
                        geographies.map((geo) => {
                            if (geo.properties.name === "India") return null;
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

                {/* Image layer */}
                <foreignObject
                    x="0"
                    y="0"
                    width="800"
                    height="600"
                    mask="url(#india-mask)"
                    style={{ pointerEvents: "none" }}
                >
                    <div className="w-full h-full relative overflow-hidden bg-transparent">
                        <div className="absolute inset-0 flex flex-wrap animate-scroll-diagonal">
                            {images.length > 0 &&
                                [...images, ...images, ...images].map((src, i) => (
                                    <div
                                        key={i}
                                        className="relative overflow-hidden"
                                        style={{
                                            width: "25%",
                                            aspectRatio: "3 / 4",
                                            transform: "scale(1.02)",
                                        }}
                                    >
                                        <img
                                            src={src}
                                            alt="Viksit Bharat"
                                            className="w-full h-full object-cover"
                                            style={{
                                                backfaceVisibility: "hidden",
                                                imageRendering: "-webkit-optimize-contrast",
                                            }}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </foreignObject>

                {/* India outline */}
                <Geographies geography={indiaUrl} style={{ pointerEvents: "none" }}>
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

            <style jsx global>{`
                @keyframes scroll-diagonal {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(-10%, -30%, 0);
                    }
                }
                .animate-scroll-diagonal {
                    animation: scroll-diagonal 40s linear infinite alternate;
                    will-change: transform;
                }
            `}</style>
        </div>
    );
};

export default HeroMap;
