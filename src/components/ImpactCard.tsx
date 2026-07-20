"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const KEY = "viva_bottles_returned";

export function ImpactCard() {
    const [count, setCount] = useState<number>(0);
    const [pulse, setPulse] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const stored = Number(localStorage.getItem(KEY) ?? "0");
        setCount(stored);
    }, []);

    const bump = (delta: number) => {
        setCount((c) => {
            const next = Math.max(0, c + delta);
            localStorage.setItem(KEY, String(next));
            return next;
        });
        setPulse((p) => p + 1);
    };

    const co2 = (count * 0.082).toFixed(2);
    const water = (count * 3.4).toFixed(1);
    const energy = (count * 0.75).toFixed(1);

    if (!isMounted) {
        return <div className="rounded-3xl bg-gradient-dark h-[380px] w-full animate-pulse" />;
    }

    return (
        <div className="rounded-3xl bg-gradient-dark text-primary-foreground p-6 md:p-10 grain shadow-editorial relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-gold blur-3xl opacity-30 pointer-events-none" />

            <div className="relative z-10">
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">Your Impact</div>
                <h3 className="mt-2 font-display text-3xl md:text-4xl">การ์ดผลกระทบของคุณ</h3>
                <p className="mt-2 text-sm text-white/70 max-w-md">
                    บันทึกจำนวนขวดที่คุณคืน ระบบจะคำนวณเป็นก๊าซคาร์บอน น้ำ และพลังงานที่ประหยัดได้จริง
                </p>

                <motion.div
                    key={pulse}
                    initial={{ scale: 0.9, opacity: 0.6 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="mt-8 flex items-baseline gap-3"
                >
                    <span className="font-display text-7xl md:text-8xl leading-none text-gradient-gold tabular-nums">{count}</span>
                    <span className="text-sm text-white/60 uppercase tracking-widest">ขวด</span>
                </motion.div>

                <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
                    {[
                        { label: "CO₂ ที่ประหยัด", value: co2, unit: "kg" },
                        { label: "น้ำ", value: water, unit: "L" },
                        { label: "พลังงาน", value: energy, unit: "MJ" },
                    ].map((m) => (
                        <div key={m.label} className="rounded-2xl bg-white/5 border border-white/10 p-3 md:p-4">
                            <div className="text-[10px] uppercase tracking-widest text-white/50">{m.label}</div>
                            <div className="mt-1 font-display text-xl md:text-3xl text-white">
                                {m.value}
                                <span className="text-xs text-white/50 ml-1">{m.unit}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    <button
                        onClick={() => bump(1)}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-ink px-5 py-2.5 text-sm font-semibold shadow-glow hover:brightness-110 transition cursor-pointer"
                    >
                        + ฉันคืน 1 ขวด
                    </button>
                    <button
                        onClick={() => bump(-1)}
                        className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 hover:bg-white/5 transition cursor-pointer"
                    >
                        −
                    </button>
                    <button
                        onClick={() => {
                            const text = `ฉันคืนขวด ViVa+ ไปแล้ว ${count} ขวด ช่วยลด CO₂ ${co2} kg 🌱 #ViVaPlus #TCPGreen`;
                            if (navigator.share) navigator.share({ text }).catch(() => { });
                            else navigator.clipboard?.writeText(text);
                        }}
                        className="ml-auto rounded-full border border-white/20 px-4 py-2 text-xs text-white/70 hover:bg-white/5 transition cursor-pointer"
                    >
                        แชร์
                    </button>
                </div>
            </div>
        </div>
    );
}