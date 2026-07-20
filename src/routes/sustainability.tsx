import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "./index";
import { BottleCounter } from "@/components/BottleCounter";
import { ImpactCard } from "@/components/ImpactCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ReturnMap } from "@/components/ReturnMap";
import { PressableLink } from "@/components/PressableLink";

const mockPartners = [
    { name: "7-Eleven", perk: "ลด ฿10" },
    { name: "Family Mart", perk: "ลด ฿8" },
    { name: "Lotus's", perk: "ลด ฿12" },
    { name: "Tops", perk: "ลด ฿10" },
    { name: "Big C", perk: "ลด ฿15" },
    { name: "Makro", perk: "แต้ม x2" },
];

export const Route = createFileRoute("/sustainability")({
    head: () => ({
        meta: [
            { title: "VivaPlus" },
            { name: "description", content: "คืนขวด ViVa+ รับสิทธิพิเศษจากพาร์ทเนอร์ ลดขยะ สร้างโลกที่ยั่งยืน" },
            { property: "og:title", content: "VivaPlus" },
            { property: "og:description", content: "ทุกขวดที่คุณคืน คือหนึ่งก้าวเพื่อโลกที่ดีขึ้น" },
        ],
    }),
    loader: () => mockPartners,
    component: Sustainability,
});

function Sustainability() {
    const partners = Route.useLoaderData();

    return (
        <div className="min-h-screen bg-background">
            <Nav />

            <section className="relative overflow-hidden bg-gradient-cream grain">

                <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-amber-200/40 blur-[120px] mix-blend-multiply pointer-events-none" />
                <div className="absolute top-20 -right-20 w-[400px] h-[400px] rounded-full bg-emerald-100/40 blur-[100px] mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-900/[0.03] to-transparent pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 pt-32 pb-16 md:pt-48 md:pb-28 min-h-[60svh] flex flex-col items-center justify-center text-center">

                    <ScrollReveal>
                        <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">01 · Circular Economy</div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-tight">
                            ทุกขวด
                            <span className="block mt-2 md:mt-4 italic text-gradient-gold pr-2">มีชีวิตที่สอง</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="mt-8 max-w-xl mx-auto text-muted-foreground text-base md:text-lg">
                            เมื่อคุณคืนขวด ViVa+ กลับมา มันไม่ได้จบแค่การรีไซเคิล
                            <br className="hidden md:block" />
                            แต่มันคือการเริ่มต้นของวัฏจักรใหม่ที่ดีต่อโลก
                        </p>
                    </ScrollReveal>

                </div>
            </section>

            <main className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24 space-y-16 md:space-y-24">
                <ScrollReveal>
                    <section className="rounded-[2rem] bg-card p-8 md:p-16 border border-border shadow-editorial text-center">
                        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Live Counter</div>
                        <div className="mt-8">
                            <BottleCounter />
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal>
                    <ImpactCard />
                </ScrollReveal>

                <section>
                    <ScrollReveal>
                        <div className="flex flex-wrap items-end justify-between gap-6">
                            <div>
                                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">02 · Locations</div>
                                <h2 className="mt-3 font-display text-4xl md:text-6xl">ตู้คืนขวด<span className="italic text-gradient-gold"> ใกล้คุณ</span></h2>
                            </div>
                            <p className="max-w-sm text-sm text-muted-foreground">
                                ขนาดของจุดสีทองแสดงถึงปริมาณขวดที่คืนในเดือนนี้ — คลิกเพื่อดูรายละเอียด
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div className="mt-10">
                            <Suspense fallback={<div className="h-[360px] md:h-[480px] rounded-3xl bg-muted animate-pulse" />}>
                                <ReturnMap />
                            </Suspense>
                        </div>
                    </ScrollReveal>
                </section>

                <section>
                    <ScrollReveal>
                        <div className="flex flex-wrap items-end justify-between gap-6">
                            <div>
                                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">03 · Rewards</div>
                                <h2 className="mt-3 font-display text-4xl md:text-6xl">รับ<span className="italic text-gradient-gold">สิทธิพิเศษ</span></h2>
                            </div>
                            <p className="max-w-sm text-sm text-muted-foreground">
                                คืนขวดเพื่อรับส่วนลดจากพาร์ทเนอร์ชั้นนำทั่วประเทศ
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {partners.map((p: any, i: number) => (
                            <motion.div
                                key={p.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -4 }}
                                className="group relative rounded-3xl bg-card border border-border p-8 overflow-hidden shadow-sm hover:shadow-editorial transition-shadow"
                            >
                                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity" />
                                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Partner</div>
                                <div className="mt-2 font-display text-2xl">{p.name}</div>
                                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/15 text-accent-foreground px-3 py-1 text-xs font-semibold">
                                    🎁 {p.perk}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <ScrollReveal delay={0.2}>
                        <div className="mt-14 text-center">
                            <PressableLink>
                                <button className="group inline-flex items-center gap-3 rounded-full bg-ink text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] shadow-editorial hover:bg-ink/90 transition cursor-pointer">
                                    หาตู้คืนขวดใกล้ฉัน
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </button>
                            </PressableLink>
                        </div>
                    </ScrollReveal>
                </section>
            </main>

            <Footer />
        </div>
    );
}