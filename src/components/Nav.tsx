"use client";

import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import tcpLogo from "@/assets/tcp.svg";

export function Nav({ hideOnMobile = false, dark = false }: { hideOnMobile?: boolean; dark?: boolean }) {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const isDark = dark && !scrolled;

    const base = isDark
        ? "text-white/80 hover:text-white"
        : "text-foreground/70 hover:text-foreground";
    const active = isDark ? "text-white font-semibold" : "text-primary font-semibold";
    const shell = isDark
        ? "bg-transparent text-white"
        : "backdrop-blur-md bg-background/80 border-b border-border/50 text-foreground shadow-sm";

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`${hideOnMobile ? "hidden md:block " : ""}fixed top-0 inset-x-0 z-50 transition-all duration-300 ${shell}`}
        >
            <div className="mx-auto max-w-7xl px-4 md:px-8 py-4 flex items-center justify-between gap-3">
                <Link to="/" className={`font-display text-xl md:text-2xl tracking-tight shrink-0 transition-colors duration-300 ${isDark ? "text-white" : ""}`}>
                    ViVa<span className="text-accent">+</span>
                </Link>

                <nav className="flex items-center gap-5 md:gap-10 text-sm md:text-base font-display uppercase tracking-[0.15em]">
                    <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: active }} className={`link-underline ${base} transition`}>Home</Link>
                    <Link to="/story" activeProps={{ className: active }} className={`link-underline ${base} transition`}>Our Story</Link>
                    <Link to="/sustainability" activeProps={{ className: active }} className={`link-underline ${base} transition`}>Sustainability</Link>
                </nav>

                <img
                    src={tcpLogo}
                    alt="TCP Logo"
                    className={`h-4 md:h-5 w-auto object-contain shrink-0 transition-all duration-300 ${isDark ? "brightness-0 invert opacity-50" : "opacity-50 grayscale"}`}
                />
            </div>
        </motion.header>
    );
}