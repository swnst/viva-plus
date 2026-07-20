import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { CursorGlow } from "@/components/CursorGlow";
import { TiltBottle } from "@/components/TiltBottle";
import { ScrollReveal, WordsReveal } from "@/components/ScrollReveal";
import { IngredientExplorer } from "@/components/IngredientExplorer";
import { CountUp } from "@/components/CountUp";
import { PressableLink } from "@/components/PressableLink";

import bottle from "@/assets/viva-bottle.png";
import farmHero from "@/assets/farm-hero.jpg";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "VivaPlus" },
            { name: "description", content: "ViVa+ เครื่องดื่มเพื่อสุขภาพจากผลไม้ไทยแท้ เสาวรส มะม่วงหาวมะนาวโห่ และใบชาเขียวไทย โดย TCP" },
            { property: "og:title", content: "VivaPlus" },
            { property: "og:description", content: "เครื่องดื่มเพื่อสุขภาพจากผลไม้ไทยแท้" },
            { property: "og:type", content: "website" },
        ],
    }),
    component: Home,
});

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background">
            <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-ibm text-muted-foreground">

                <div className="font-old-display text-xl text-foreground">
                    ViVa<span className="text-accent">+</span>
                </div>

                <div className="uppercase tracking-widest text-center md:text-right">
                    © {new Date().getFullYear()} TCP · Crafted in Thailand
                </div>

            </div>
        </footer>
    );
}

function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const bottleY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const bgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0]);

    return (
        <div className="min-h-screen bg-background">
            <CursorGlow />
            <Nav hideOnMobile dark />

            <section ref={heroRef} className="relative min-h-[100svh] bg-gradient-dark grain overflow-hidden">
                <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0 -z-0">
                    <img src={farmHero} alt="" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
                </motion.div>

                <div className="relative z-10">

                    <div className="mx-auto max-w-7xl px-4 md:px-8 pt-24 md:pt-20 pb-24 md:pb-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="text-white order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mb-7 inline-flex items-center justify-center md:justify-start gap-2 text-xs uppercase tracking-[0.3em] text-white/60"
                            >
                                <span className="h-px w-8 bg-accent" />
                                Premium Wellness · Est. 2026
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white"
                            >
                                เครื่องดื่ม
                                <br />
                                <span className="italic text-gradient-gold pr-2">ที่มากกว่า</span>
                                <br />
                                คำว่าสะอาด
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="mt-6 max-w-md text-white/70 text-base md:text-lg leading-relaxed"
                            >
                                กลั่นจากผลไม้ไทยแท้ 3 ชนิด คัดสรรจากสวนของเกษตรกร
                                <br className="hidden md:block" />
                                เพื่อสุขภาพ · เพื่อโลก · เพื่อคุณ
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
                            >
                                <PressableLink>
                                    <Link to="/story" className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold text-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-widest shadow-glow hover:brightness-110 transition">
                                        Our Story
                                        <span className="transition-transform group-hover:translate-x-1">→</span>
                                    </Link>
                                </PressableLink>
                                <PressableLink>
                                    <Link to="/sustainability" className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-3.5 text-sm text-white/90 uppercase tracking-widest hover:bg-white/5 transition">
                                        Recycle
                                    </Link>
                                </PressableLink>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                                className="mt-10 grid grid-cols-3 gap-6 max-w-md w-full"
                            >
                                {[
                                    { value: 12.8, suffix: "M+", l: "ขวดรีไซเคิล" },
                                    { value: 340, suffix: "+", l: "เกษตรกร" },
                                    { value: 0, suffix: "", l: "น้ำตาลเพิ่ม" },
                                ].map((s) => (
                                    <div key={s.l}>
                                        <div className="font-display text-2xl md:text-3xl text-gradient-gold">
                                            <CountUp value={s.value} suffix={s.suffix} />
                                        </div>
                                        <div className="mt-1 text-[10px] uppercase tracking-widest text-white/70">{s.l}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div style={{ y: bottleY }} className="order-1 md:order-2 relative">
                            <TiltBottle src={bottle} alt="ViVa+ premium wellness bottle" />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                                transition={{
                                    opacity: { delay: 0.3, duration: 0.8 },
                                    scale: { delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                                }}
                                className="hidden md:block absolute -right-4 top-8 w-28 h-28 rounded-full border border-white/20 grid place-items-center"
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                                    <defs>
                                        <path id="circle" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                                    </defs>
                                    <text className="fill-white/70 text-[9px] uppercase tracking-[0.3em]">
                                        <textPath href="#circle">Natural · Vitamin · Antioxidants · </textPath>
                                    </text>
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-[0.4em] flex-col items-center gap-2">
                        <span>Scroll</span>
                        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-8 bg-white/30" />
                    </div>
                </div>
            </section >

            {/* Dark-to-Light gradient buffer */}
            <div className="h-24 bg-gradient-to-b from-ink to-background" />

            <section className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-40">
                <ScrollReveal>
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">02 · Composition</div>
                    <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
                        <h2 className="font-display text-4xl md:text-6xl max-w-2xl leading-tight">
                            ส่วนผสม<span className="italic text-gradient-gold">จากธรรมชาติ</span>
                        </h2>
                        <p className="text-muted-foreground max-w-sm text-sm md:text-lg">
                            <span className="text-accent font-semibold">คลิก</span>ที่ผลไม้แต่ละชนิดเพื่อสำรวจคุณค่าทางโภชนาการอย่างละเอียด
                        </p>
                    </div>
                </ScrollReveal>

                <div className="mt-16">
                    <IngredientExplorer />
                </div>
            </section>

            <section className="relative bg-ink text-primary-foreground py-24 md:py-40 grain overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-gradient-gold blur-3xl" />
                    <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-primary blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-4xl px-4 md:px-8">
                    <ScrollReveal>
                        <div className="text-xs uppercase tracking-[0.3em] text-white/70">03 · Manifesto</div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className="mt-10 font-display text-3xl md:text-5xl leading-[1.15] text-white">
                            เราเชื่อว่า<span className="italic text-gradient-gold"> ความสะอาด </span>
                            คือจุดเริ่มต้น ไม่ใช่จุดหมาย
                            <br />
                            <span className="text-white/60">ViVa+ ถือกำเนิดจากผืนดินไทย</span>
                            <br />
                            <span className="text-white/60">เพื่อคืนสิ่งดี ๆ กลับสู่ร่างกาย และ<span className="text-white">โลก</span></span>
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="mt-16 flex flex-wrap gap-4">
                            <PressableLink>
                                <Link to="/story" className="group inline-flex items-center gap-3 text-white text-sm uppercase tracking-[0.25em] border-b border-white/30 pb-2 hover:border-accent transition">
                                    อ่านเรื่องราวเกษตรกร
                                    <span className="transition-transform group-hover:translate-x-2">→</span>
                                </Link>
                            </PressableLink>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div >
    );
}