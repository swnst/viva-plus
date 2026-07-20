"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export function TiltBottle({ src, alt }: { src: string; alt: string }) {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rx = useSpring(useTransform(my, [-1, 1], [12, -12]), { stiffness: 120, damping: 12 });
    const ry = useSpring(useTransform(mx, [-1, 1], [-14, 14]), { stiffness: 120, damping: 12 });

    const onMove = (e: MouseEvent<HTMLDivElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    };
    const onLeave = () => { mx.set(0); my.set(0); };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="relative flex justify-center [perspective:1200px]"
        >
            <div className="absolute inset-0 -z-10 blur-3xl opacity-70 bg-gradient-gold rounded-full scale-75" />
            <motion.img
                src={src}
                alt={alt}
                width={800}
                height={1200}
                style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
                className="w-48 md:w-96 drop-shadow-2xl will-change-transform"
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full bg-black/25 blur-2xl" />
        </motion.div>
    );
}