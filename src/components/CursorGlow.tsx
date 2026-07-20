"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export function CursorGlow({ color = "255, 200, 120" }: { color?: string }) {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);
    const opacity = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    useEffect(() => {
        if (matchMedia("(pointer: coarse)").matches) return;

        const onMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            opacity.set(1);
        };

        const onLeave = () => opacity.set(0);

        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mouseleave", onLeave);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseleave", onLeave);
        };
    }, [mouseX, mouseY, opacity]);

    const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(${color}, 0.18), transparent 45%)`;

    return (
        <motion.div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[1]"
            style={{ opacity, background }}
        />
    );
}