"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function ScrollReveal({ children, delay = 0, y = 24, className = "" }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function WordsReveal({ text, className = "", immediate = false }: { text: string; className?: string; immediate?: boolean }) {
    const words = text.split(" ");
    return (
        <span className={className}>
            {words.map((w, i) => (
                <span
                    key={i}
                    className="inline-block [clip-path:inset(-0.8em_-0.5em_0_-0.2em)] align-bottom mr-[0.25em]"
                >
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        {...(immediate
                            ? { animate: { y: 0, opacity: 1 } }
                            : { whileInView: { y: 0, opacity: 1 }, viewport: { once: true } }
                        )}
                        transition={immediate
                            ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                            : { duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }
                        }
                        className="inline-block"
                    >
                        {w}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}