"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const START = 12_847_392;
const GOAL = 20_000_000;

export function BottleCounter() {
    const [n, setN] = useState(START);
    const spring = useSpring(START, { stiffness: 70, damping: 20 });
    const rounded = useTransform(spring, (v) => Math.floor(v).toLocaleString("en-US"));

    useEffect(() => { spring.set(n); }, [n, spring]);
    useEffect(() => {
        const id = setInterval(() => setN((v) => v + Math.floor(Math.random() * 8) + 2), 2200);
        return () => clearInterval(id);
    }, []);

    const pct = Math.min(100, (n / GOAL) * 100);

    return (
        <div className="flex flex-col items-center">
            <motion.div className="font-display text-6xl md:text-8xl leading-none text-gradient-gold tabular-nums tracking-tight">
                {rounded}
            </motion.div>
            <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
                ขวดที่ถูกรีไซเคิลแล้ว
            </div>

            <div className="mt-8 w-full max-w-md">
                <div className="flex items-baseline justify-between text-xs uppercase tracking-widest text-muted-foreground">
                    <span>เป้าหมาย 2026</span>
                    <span className="font-mono">{pct.toFixed(2)}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-gold"
                    />
                </div>
                <div className="mt-2 flex justify-between text-[11px] text-muted-foreground font-mono">
                    <span>0</span>
                    <span>{(GOAL / 1_000_000).toFixed(0)}M</span>
                </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                อัปเดตแบบเรียลไทม์
            </div>
        </div>
    );
}