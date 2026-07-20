"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

/**
 * Animated count-up number that triggers when scrolled into view.
 * Supports decimals, suffixes like M+ or +.
 */
export function CountUp({
    value,
    suffix = "",
    prefix = "",
    duration = 2,
    className = "",
}: {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [display, setDisplay] = useState("0");

    const spring = useSpring(0, {
        stiffness: 50,
        damping: 20,
        duration: duration * 1000,
    });

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    useEffect(() => {
        const unsubscribe = spring.on("change", (latest) => {
            // Determine decimal places from the original value
            const decimals = value % 1 !== 0 ? 1 : 0;
            setDisplay(latest.toFixed(decimals));
        });
        return unsubscribe;
    }, [spring, value]);

    return (
        <span ref={ref} className={className}>
            {prefix}{display}{suffix}
        </span>
    );
}
