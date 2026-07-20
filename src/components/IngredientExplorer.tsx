"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import passion from "@/assets/passion-fruit.png";
import karanda from "@/assets/karanda.png";
import tea from "@/assets/green-tea.png";

type Ingredient = {
    id: string;
    name: string;
    latin: string;
    img: string;
    tagline: string;
    desc: string;
    stats: { label: string; value: string }[];
    accent: string;
};

const data: Ingredient[] = [
    {
        id: "passion",
        name: "เสาวรส",
        latin: "Passiflora edulis",
        img: passion,
        tagline: "แหล่งวิตามินซีจากภาคเหนือ",
        desc: "เสาวรสสายพันธุ์ไทย ปลูกในสวนออร์แกนิกจ.เชียงราย เก็บเกี่ยวสุกจากต้น รสเปรี้ยวหวานสดชื่น อุดมด้วยวิตามิน C, A และสารต้านอนุมูลอิสระ",
        stats: [
            { label: "Vitamin C", value: "30 มก." },
            { label: "Vitamin A", value: "1275 IU" },
            { label: "Fiber", value: "10 ก." },
        ],
        accent: "from-amber-400 to-orange-500",
    },
    {
        id: "karanda",
        name: "มะม่วงหาวมะนาวโห่",
        latin: "Carissa carandas",
        img: karanda,
        tagline: "ผลไม้พื้นบ้านหายาก",
        desc: "ผลไม้พื้นบ้านของไทยที่หายาก อุดมด้วย anthocyanin ธรรมชาติ ช่วยเสริมสร้างภูมิคุ้มกัน และเป็นแหล่งของธาตุเหล็กสูง",
        stats: [
            { label: "Vitamin C", value: "38 มก." },
            { label: "Iron", value: "1.6 มก." },
            { label: "Antioxidants", value: "★★★" },
        ],
        accent: "from-rose-500 to-fuchsia-600",
    },
    {
        id: "tea",
        name: "ใบชาเขียวไทย",
        latin: "Camellia sinensis",
        img: tea,
        tagline: "ชาเขียวจากไร่ภาคเหนือ",
        desc: "ใบชาเขียวจากไร่บนดอย จ.เชียงราย ผ่านกระบวนการนึ่งเพื่อคง L-Theanine และ EGCG พลังงานอ่อนโยนแบบธรรมชาติ",
        stats: [
            { label: "EGCG", value: "80 มก." },
            { label: "L-Theanine", value: "25 มก." },
            { label: "Caffeine", value: "30 มก." },
        ],
        accent: "from-emerald-500 to-teal-600",
    },
];

export function IngredientExplorer() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Ingredient | null>(null);

    const handleOpen = (ing: Ingredient) => {
        setSelected(ing);
        setOpen(true);
    };

    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
                className="grid grid-cols-3 gap-3 md:gap-6"
            >
                {data.map((ing, i) => (
                    <motion.button
                        key={ing.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                        }}
                        onClick={() => handleOpen(ing)}
                        whileHover={{ y: -6 }}
                        className="group relative flex flex-col items-center text-center p-4 md:p-6 rounded-3xl bg-card/70 backdrop-blur border border-border/60 hover:border-accent transition-colors overflow-hidden cursor-pointer"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${ing.accent} opacity-0 group-hover:opacity-10 transition-opacity`} />
                        <motion.div className="w-20 h-20 md:w-32 md:h-32 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-xl scale-90 group-hover:scale-110 transition-transform" />
                            <img src={ing.img} alt={ing.name} className="relative w-full h-full object-contain drop-shadow-lg" loading="lazy" />
                        </motion.div>
                        <div className="mt-3 md:mt-4 text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">0{i + 1}</div>
                        <div className="mt-1 font-display text-lg md:text-2xl">{ing.name}</div>
                        <div className="hidden md:block mt-1 text-[11px] italic text-muted-foreground">{ing.latin}</div>
                        <div className="mt-3 hidden md:inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-accent-foreground bg-gold/20 px-2 py-1 rounded-full">
                            คลิกเพื่อสำรวจ →
                        </div>
                    </motion.button>
                ))}
            </motion.div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="p-0 border-none bg-card shadow-editorial overflow-hidden max-w-lg rounded-3xl sm:rounded-3xl gap-0">
                    <DialogHeader className="sr-only">
                        <DialogTitle>{selected?.name}</DialogTitle>
                        <DialogDescription>{selected?.desc}</DialogDescription>
                    </DialogHeader>

                    {selected && (
                        <>
                            <div className={`h-40 bg-gradient-to-br ${selected.accent} relative`}>
                                <motion.img
                                    initial={{ scale: 0.6, rotate: -12, opacity: 0 }}
                                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, type: "spring" }}
                                    src={selected.img}
                                    alt={selected.name}
                                    className="absolute right-6 -bottom-8 w-40 h-40 object-contain drop-shadow-2xl"
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{selected.tagline}</div>
                                <h3 className="mt-1 font-display text-3xl md:text-4xl">{selected.name}</h3>
                                <div className="mt-1 text-sm italic text-muted-foreground">{selected.latin}</div>
                                <p className="mt-4 text-sm md:text-base text-foreground/80 leading-relaxed">{selected.desc}</p>
                                <div className="mt-6 grid grid-cols-3 gap-3">
                                    {selected.stats.map((s) => (
                                        <div key={s.label} className="rounded-xl bg-muted p-3 text-center">
                                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                                            <div className="mt-1 font-display text-lg text-primary">{s.value}</div>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="mt-6 w-full rounded-full bg-ink text-primary-foreground py-3 text-sm font-medium hover:bg-ink/90 transition cursor-pointer"
                                >
                                    ปิด
                                </button>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}