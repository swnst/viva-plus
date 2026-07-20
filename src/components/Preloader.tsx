"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while preloader is active
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // Quick 0.8s preloader to sync with page animations

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onAnimationComplete={() => {
                if (!isLoading) {
                    document.body.style.overflow = "auto";
                }
            }}
            className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink ${!isLoading ? "pointer-events-none" : ""}`}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: isLoading ? 1 : 0, scale: isLoading ? 1 : 1.05, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-display text-4xl md:text-5xl tracking-tight text-white flex items-center gap-2"
            >
                ViVa<span className="text-accent">+</span>
            </motion.div>
        </motion.div>
    );
}
