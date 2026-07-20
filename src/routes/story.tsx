import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "./index";
import { ScrollReveal, WordsReveal } from "@/components/ScrollReveal";

import farmHero from "@/assets/farm-hero.jpg";
import f1 from "@/assets/farmer-1.jpg";
import f2 from "@/assets/farmer-2.jpg";
import f3 from "@/assets/farmer-3.jpg";
import passion from "@/assets/passion-fruit.png";
import karanda from "@/assets/karanda.png";
import tea from "@/assets/green-tea.png";

const mockStoryData = [
    {
        img: passion,
        portrait: f1,
        n: "01",
        origin: "เชียงราย · ภาคเหนือ",
        title: "เสาวรส",
        latin: "Passiflora edulis",
        farmer: "คุณพี่เนตร ตัน",
        quote: "ฉันปลูกเสาวรสมาตั้งแต่รุ่นพ่อ ทุกลูกเก็บด้วยมือตอนสุกกำลังพอดี",
        desc: "สวนออร์แกนิกบนความสูง 800 เมตร อากาศเย็นทำให้เสาวรสหวานลึก และมีวิตามินซีสูงกว่าสายพันธุ์ทั่วไป",
        stats: [
            { label: "Vitamin C", value: "30 มก." },
            { label: "Vitamin A", value: "1275 IU" },
            { label: "Altitude", value: "800 m" },
        ],
    },
    {
        img: karanda,
        portrait: f2,
        n: "02",
        origin: "น่าน · ภาคเหนือ",
        title: "มะม่วงหาวมะนาวโห่",
        latin: "Carissa carandas",
        farmer: "คุณลุงสมชาย ไชยวงค์",
        quote: "ผลไม้นี้หายากมาก แต่มันคือความทรงจำของคนไทยรุ่นก่อน",
        desc: "ผลไม้พื้นบ้านที่คนไทยรู้จักในตำนาน เต็มไปด้วยแอนโธไซยานิน ธาตุเหล็ก และวิตามินซี",
        stats: [
            { label: "Vitamin C", value: "38 มก." },
            { label: "Iron", value: "1.6 มก." },
            { label: "Anthocyanin", value: "High" },
        ],
    },
    {
        img: tea,
        portrait: f3,
        n: "03",
        origin: "ดอยแม่สลอง · ภาคเหนือ",
        title: "ใบชาเขียวไทย",
        latin: "Camellia sinensis",
        farmer: "คุณป้าเมย ลาหู่",
        quote: "เราเก็บชาก่อนพระอาทิตย์ขึ้น เพื่อรักษาความหอมและวิตามินให้เต็มที่",
        desc: "ไร่ชาบนดอยความสูง 1,200 เมตร นึ่งใบชาแบบดั้งเดิมเพื่อคง L-theanine และ EGCG",
        stats: [
            { label: "EGCG", value: "80 มก." },
            { label: "L-Theanine", value: "25 มก." },
            { label: "Altitude", value: "1,200 m" },
        ],
    },
];

export const Route = createFileRoute("/story")({
    head: () => ({
        meta: [
            { title: "VivaPlus" },
            { name: "description", content: "เรื่องราวของเกษตรกรไทยผู้อยู่เบื้องหลังทุกขวด ViVa+ เสาวรส มะม่วงหาวมะนาวโห่ ใบชาเขียวไทย" },
            { property: "og:title", content: "VivaPlus" },
            { property: "og:description", content: "เรื่องราวเกษตรกรไทยผู้ปลูกทุกส่วนผสมของ ViVa+" },
        ],
    }),
    // ใช้ Loader เพื่อดึงข้อมูลก่อนเรนเดอร์หน้า (จำลองการต่อ API)
    loader: () => mockStoryData,
    component: Story,
});

function Story() {
    const items = Route.useLoaderData();
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

    return (
        <div className="min-h-screen bg-background">
            <Nav dark />
            <section ref={heroRef} className="relative h-[100svh] overflow-hidden bg-ink">
                <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
                    <img src={farmHero} alt="Thai tea terrace at sunrise" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink" />
                </motion.div>

                <div className="relative z-10">
                </div>

                <motion.div style={{ y: textY }} className="relative z-10 h-[calc(100svh-80px)] flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xs uppercase tracking-[0.4em] text-white/60"
                    >
                        Chapter One · The Origin
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white"
                    >
                        จากสวนไทย
                        <br />
                        <span className="italic text-gradient-gold pr-2">สู่ขวด </span>
                        ViVa<span className="text-accent">+</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-8 max-w-lg text-white/70 text-base md:text-lg"
                    >
                        สามผลผลิต · สามผืนดิน · สามชีวิต ที่มาบรรจบในทุกจิบ
                    </motion.p>
                </motion.div>
            </section>

            <div className="relative bg-background">
                {items.map((it: any, i: number) => (
                    <Chapter key={it.n} item={it} reverse={i % 2 === 1} />
                ))}
            </div>

            <section className="bg-gradient-dark grain py-24 md:py-40">
                <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
                    <ScrollReveal>
                        <div className="text-xs uppercase tracking-[0.4em] text-white/50">Coda</div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <p className="mt-8 font-display text-3xl md:text-5xl text-white leading-tight">
                            จากผืนดิน · สู่มือของคุณ
                            <br />
                            <span className="italic text-gradient-gold">ทุกจิบคือคำขอบคุณ</span>
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Chapter({ item, reverse }: { item: any; reverse: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const fruitY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    const fruitR = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    return (
        <section ref={ref} className="relative py-20 md:py-40 border-b border-border/40">
            <div className={`mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? "md:[direction:rtl]" : ""}`}>
                <motion.div style={{ y: imgY }} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-editorial [direction:ltr]">
                    <img src={item.portrait} alt={item.farmer} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white [direction:ltr]">
                        <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">Farmer</div>
                        <div className="mt-1 font-display text-xl md:text-2xl">{item.farmer}</div>
                        <div className="mt-1 text-xs text-white/70">{item.origin}</div>
                    </div>
                    <motion.img
                        src={item.img}
                        alt=""
                        style={{ y: fruitY, rotate: fruitR }}
                        className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-32 md:w-52 h-32 md:h-52 object-contain drop-shadow-2xl"
                        loading="lazy"
                    />
                </motion.div>

                <div className="[direction:ltr]">
                    <ScrollReveal>
                        <div className="flex items-baseline gap-4">
                            <span className="font-display italic text-6xl md:text-8xl text-gradient-gold leading-none">{item.n}</span>
                            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.origin}</div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.05}>
                        <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">{item.title}</h2>
                        <div className="mt-2 text-sm italic text-muted-foreground">{item.latin}</div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <blockquote className="mt-8 border-l-2 border-accent pl-5 font-display italic text-xl md:text-2xl text-foreground/80 leading-relaxed">
                            "{item.quote}"
                        </blockquote>
                    </ScrollReveal>

                    <ScrollReveal delay={0.15}>
                        <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">{item.desc}</p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="mt-8 grid grid-cols-3 gap-3">
                            {item.stats.map((s: { label: string; value: string }) => (
                                <div key={s.label} className="rounded-2xl border border-border p-4">
                                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                                    <div className="mt-1 font-display text-xl md:text-2xl text-primary">{s.value}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}