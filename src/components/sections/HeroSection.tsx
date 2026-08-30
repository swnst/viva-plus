import { motion } from "framer-motion";
import { ArrowRight, MapPin, Activity, Sparkles, Shield, Sun } from "lucide-react";
import { scrollToSection } from "@/lib/lenis";
import bottleImg from "@/assets/viva-bottle.png";
import tcpLogo from "@/assets/tcp.svg";

export function HeroSection() {
  // Circular 3D glass bubble components matching the reference image exactly
  const circularBubbles = [
    {
      id: "prebiotic",
      title: "PREBIOTIC",
      sub: "(INULIN)",
      icon: Activity,
      textColor: "text-[#D92A64]",
      iconColor: "text-[#E84A74]",
      gradient: "from-white/95 via-rose-100/90 to-pink-200/80",
      borderGlow: "border-white shadow-[0_10px_25px_rgba(232,74,116,0.25),inset_0_2px_6px_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(232,74,116,0.2)]",
      pos: "top-2 sm:top-4 right-0 sm:-right-4 lg:-right-6",
      delay: 0,
      floatY: [-8, 8, -8],
      duration: 5.5,
      size: "w-20 h-20 sm:w-24 sm:h-24",
    },
    {
      id: "collagen",
      title: "COLLAGEN",
      sub: "",
      icon: Sparkles,
      textColor: "text-[#C72358]",
      iconColor: "text-[#E84A74]",
      gradient: "from-white/95 via-pink-100/90 to-rose-200/80",
      borderGlow: "border-white shadow-[0_10px_25px_rgba(232,74,116,0.25),inset_0_2px_6px_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(232,74,116,0.2)]",
      pos: "top-[27%] sm:top-[28%] right-2 sm:-right-6 lg:-right-8",
      delay: 0.8,
      floatY: [8, -8, 8],
      duration: 6.2,
      size: "w-20 h-20 sm:w-24 sm:h-24",
    },
    {
      id: "zinc",
      title: "ZINC",
      sub: "",
      icon: Shield,
      textColor: "text-[#8E3B99]",
      iconColor: "text-[#9C27B0]",
      gradient: "from-white/95 via-purple-100/90 to-fuchsia-200/80",
      borderGlow: "border-white shadow-[0_10px_25px_rgba(156,39,176,0.25),inset_0_2px_6px_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(156,39,176,0.2)]",
      pos: "top-[54%] sm:top-[55%] right-0 sm:-right-4 lg:-right-6",
      delay: 1.4,
      floatY: [-6, 6, -6],
      duration: 5.8,
      size: "w-20 h-20 sm:w-24 sm:h-24",
    },
    {
      id: "vitaminc",
      title: "VITAMIN C",
      sub: "",
      icon: Sun,
      textColor: "text-[#DD6B20]",
      iconColor: "text-[#EA580C]",
      gradient: "from-white/95 via-orange-100/90 to-amber-200/80",
      borderGlow: "border-white shadow-[0_10px_25px_rgba(234,88,12,0.25),inset_0_2px_6px_rgba(255,255,255,0.9),inset_0_-2px_6px_rgba(234,88,12,0.2)]",
      pos: "top-[80%] sm:top-[81%] right-2 sm:-right-2 lg:-right-4",
      delay: 0.4,
      floatY: [6, -6, 6],
      duration: 6.5,
      size: "w-20 h-20 sm:w-24 sm:h-24",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-gradient-hero"
    >
      {/* Ambient background glow and soft bubble particles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-rose-300/25 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-pink-400/20 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-rose-200/30 blur-2xl pointer-events-none -z-10" />

      {/* Decorative ambient water drop bubbles on the left */}
      <motion.div
        animate={{ y: [-15, 15, -15], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-36 left-[8%] w-14 h-14 rounded-full bg-gradient-to-br from-white/90 to-rose-200/60 backdrop-blur-md shadow-[0_8px_20px_rgba(232,74,116,0.15),inset_0_2px_4px_white] pointer-events-none z-10 border border-white"
      />
      <motion.div
        animate={{ y: [12, -12, 12], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden md:block absolute bottom-32 left-[18%] w-10 h-10 rounded-full bg-gradient-to-br from-white/90 to-pink-200/60 backdrop-blur-md shadow-[0_6px_16px_rgba(232,74,116,0.15),inset_0_2px_4px_white] pointer-events-none z-10 border border-white"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-800 text-xs sm:text-sm font-semibold border border-rose-200/80 shadow-sm"
            >
              <img src={tcpLogo} alt="TCP" className="h-3.5 w-auto object-contain" />
              <span>เครื่องดื่มเพื่อสุขภาพระดับพรีเมียม โดย TCP</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-rose-950 font-display leading-[1.15]">
                ปลุกผิวสวย สุขภาพดี
                <br />
                <span className="text-gradient-rose">จากภายในสู่ภายนอก ได้ทุกวัน</span>
              </h1>
              <p className="text-base sm:text-lg text-rose-900/80 font-medium pt-2 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                <strong className="text-rose-950 font-bold">ViVa+</strong> นวัตกรรมเครื่องดื่มผสานพลัง 4 สารสำคัญ <strong className="text-rose-900 font-semibold">Prebiotic, Collagen, Zinc, Vitamin C</strong> พร้อมคุณค่าสารสกัดแท้จากมะม่วงหาวมะนาวโห่ของเกษตรกรไทย
              </p>
            </motion.div>

            {/* 4 Feature Pills on Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1"
            >
              {[
                "พรีไบโอติกปรับสมดุลลำไส้",
                "คอลลาเจนผิวอิ่มฟู",
                "ซิงค์ลดสิวควบคุมมัน",
                "วิตามินซีต้านอนุมูลอิสระ",
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/85 text-rose-900 text-xs font-medium border border-rose-100/90 shadow-2xs"
                >
                  ✓ {item}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
            >
              <button
                onClick={() => scrollToSection("product")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-cta text-white text-base font-semibold shadow-soft-rose hover:shadow-hover-rose hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>ดูคุณประโยชน์ & สรรพคุณ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection("distribution")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/90 text-rose-900 text-base font-semibold border border-rose-200 hover:bg-rose-50/80 shadow-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>หาซื้อได้ที่ตู้ TCP</span>
              </button>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-rose-200/60 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div>
                <p className="text-2xl font-bold text-rose-950 font-display">100%</p>
                <p className="text-xs text-rose-800/70">ผลผลิตเกษตรกรไทย</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-rose-950 font-display">4 in 1</p>
                <p className="text-xs text-rose-800/70">สารอาหารดูแลครบวงจร</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-rose-950 font-display">TCP</p>
                <p className="text-xs text-rose-800/70">มาตรฐานสากล</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Tilted Bottle with 4 Circular 3D Glass Bubbles */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative py-6 sm:py-10">
            <div className="relative flex items-center justify-center w-full max-w-[480px]">
              {/* Backing Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-rose-300/35 via-pink-200/30 to-amber-100/30 blur-3xl -z-10" />

              {/* Tilted Floating Central Bottle with realistic angle */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-8, -6, -10, -8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 filter drop-shadow-[0_25px_40px_rgba(232,74,116,0.3)] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 pr-10 sm:pr-14"
              >
                <img
                  src={bottleImg}
                  alt="ViVa+ Prebiotic Collagen Drink"
                  className="w-[210px] sm:w-[260px] lg:w-[290px] max-h-[480px] h-auto object-contain select-none"
                  loading="eager"
                />
              </motion.div>

              {/* 4 Circular 3D Glass Spheres stacked on the right (like client reference) */}
              <div className="absolute inset-y-0 right-0 sm:right-2 flex flex-col justify-between py-2 pointer-events-none z-20">
                {circularBubbles.map((bubble) => {
                  const Icon = bubble.icon;
                  return (
                    <motion.div
                      key={bubble.id}
                      animate={{ y: bubble.floatY }}
                      transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: bubble.delay,
                      }}
                      className={`pointer-events-auto ${bubble.size} rounded-full bg-gradient-to-b ${bubble.gradient} ${bubble.borderGlow} border-2 flex flex-col items-center justify-center p-2 text-center select-none backdrop-blur-md cursor-pointer hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                    >
                      {/* Top curved light reflection for 3D sphere look */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-3 rounded-full bg-white/70 blur-[1px] pointer-events-none" />

                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${bubble.iconColor} mb-0.5 shrink-0`} />
                      <span className={`text-[9px] sm:text-[10px] font-extrabold tracking-tight ${bubble.textColor} leading-tight font-display`}>
                        {bubble.title}
                      </span>
                      {bubble.sub && (
                        <span className={`text-[7px] sm:text-[8px] font-bold ${bubble.textColor} leading-none mt-0.5`}>
                          {bubble.sub}
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
