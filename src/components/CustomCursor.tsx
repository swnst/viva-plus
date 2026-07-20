"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only run on devices that support hover (mice/trackpads)
        if (!window.matchMedia("(any-hover: hover)").matches) return;
        
        setIsVisible(true);
        document.body.classList.add("hide-cursor");

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if we are hovering over an interactive element
            if (target.closest("a, button, input, [role='button']")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.body.classList.remove("hide-cursor");
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-difference bg-white"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                width: 32,
                height: 32,
            }}
            animate={{
                scale: isHovering ? 2 : 0.4,
                opacity: isHovering ? 0.8 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
    );
}
