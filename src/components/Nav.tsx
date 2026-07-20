"use client";

import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import tcpLogo from "@/assets/tcp.svg";

export function Nav({ hideOnMobile = false, dark = false }: { hideOnMobile?: boolean; dark?: boolean }) {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useRouterState({ select: (s) => s.location.pathname });

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const isDark = dark && !scrolled;

    const base = isDark
        ? "text-white/80 hover:text-white"
        : "text-foreground/70 hover:text-foreground";
    const active = isDark ? "text-white font-semibold" : "text-primary font-semibold";
    const shell = isDark
        ? "bg-transparent text-white"
        : "backdrop-blur-md bg-background/80 border-b border-border/50 text-foreground shadow-sm";

    const navLinks = [
        { to: "/", label: "Home", exact: true },
        { to: "/story", label: "Our Story", exact: false },
        { to: "/sustainability", label: "Sustainability", exact: false },
    ] as const;

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`${hideOnMobile ? "hidden md:block " : ""}fixed top-0 inset-x-0 z-50 transition-all duration-300 ${shell}`}
            >
                <div className="mx-auto max-w-7xl px-4 md:px-8 py-4 flex items-center justify-between gap-3">
                    <Link to="/" className={`font-old-display text-xl md:text-2xl tracking-tight shrink-0 transition-colors duration-300 ${isDark ? "text-white" : ""}`}>
                        ViVa<span className="text-accent">+</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-10 text-base font-old-display uppercase tracking-[0.15em]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                activeOptions={link.exact ? { exact: true } : undefined}
                                activeProps={{ className: active }}
                                className={`link-underline ${base} transition`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <img
                            src={tcpLogo}
                            alt="TCP Logo"
                            className={`h-4 md:h-5 w-auto object-contain shrink-0 transition-all duration-300 ${isDark ? "brightness-0 invert opacity-50" : "opacity-50 grayscale"}`}
                        />

                        {/* Mobile hamburger button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden relative w-6 h-5 flex flex-col justify-between cursor-pointer"
                            aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
                        >
                            <motion.span
                                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className={`block h-[2px] w-full rounded-full transition-colors ${isDark && !mobileOpen ? "bg-white" : "bg-foreground"}`}
                            />
                            <motion.span
                                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                className={`block h-[2px] w-full rounded-full transition-colors ${isDark && !mobileOpen ? "bg-white" : "bg-foreground"}`}
                            />
                            <motion.span
                                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                className={`block h-[2px] w-full rounded-full transition-colors ${isDark && !mobileOpen ? "bg-white" : "bg-foreground"}`}
                            />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile overlay menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl"
                    >
                        <nav className="flex flex-col items-center justify-center min-h-svh gap-8 px-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ delay: i * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Link
                                        to={link.to}
                                        activeOptions={link.exact ? { exact: true } : undefined}
                                        activeProps={{ className: "text-primary font-semibold" }}
                                        className="font-old-display text-3xl uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground transition-colors"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* TCP logo in mobile menu */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8"
                            >
                                <img
                                    src={tcpLogo}
                                    alt="TCP Logo"
                                    className="h-5 w-auto object-contain opacity-30 grayscale"
                                />
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}