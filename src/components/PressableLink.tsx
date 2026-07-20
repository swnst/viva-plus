"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps any interactive element with a subtle scale-down on tap
 * and a gentle lift on hover for a premium tactile feel.
 */
export function PressableLink({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}
