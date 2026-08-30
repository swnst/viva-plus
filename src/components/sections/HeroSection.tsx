import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Heart, MapPin, Sparkles } from "lucide-react";
import { scrollToSection } from "@/lib/lenis";
import bottleImg from "@/assets/viva-bottle.png";
import tcpLogo from "@/assets/tcp.svg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-gradient-hero"
    >
      {/* Ambient background glow and soft bubble particles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-rose-300/25 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-pink-400/20 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-rose-200/30 blur-2xl pointer-events-none -z-10" />

      {/* Floating subtle ambient mini bubbles in background */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-36 right-[28%] w-12 h-12 rounded-full bg-rose-200/40 backdrop-blur-xs border border-white/60 pointer-events-none -z-10"
      />
      <motion.div
        animate={{ y: [12, -12, 12], x: [4, -4, 4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-[12%] w-16 h-16 rounded-full bg-pink-200/35 backdrop-blur-xs border border-white/50 pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
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
                <span className="text-gradient-rose">จากภายในสู่ภายนอกได้ทุกวัน</span>
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

          {/* Right Column: Hero Tilted Bottle with Spacious Floating Bubble Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-6 sm:py-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative flex flex-col items-center justify-center w-full max-w-[480px]"
            >
              {/* Backing Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-rose-300/35 via-pink-200/30 to-amber-100/30 blur-3xl -z-10" />

              {/* Floating Bubble Badge 1 - Top Right (Prebiotic + Collagen) - Generous offset */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 2, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 -right-1 sm:-right-8 lg:-right-10 bg-gradient-to-br from-white/95 via-rose-50/90 to-pink-100/80 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_8px_25px_rgba(232,74,116,0.18)] flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-bold text-rose-950 border border-white/95 z-20 hover:scale-105 transition-transform duration-300 cursor-pointer whitespace-nowrap"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_10px_#E84A74] animate-pulse shrink-0" />
                <span className="font-display tracking-tight">Prebiotic + Collagen</span>
              </motion.div>

              {/* Floating Bubble Badge 2 - Mid Left (Karanda Extract) - Pushed well out to avoid bottle waist */}
              <motion.div
                animate={{ y: [8, -8, 8], rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-[28%] -left-4 sm:-left-12 lg:-left-8 bg-gradient-to-br from-white/95 via-pink-50/90 to-rose-100/80 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full shadow-[0_8px_25px_rgba(232,74,116,0.18)] flex items-center gap-2 text-xs sm:text-xs font-bold text-rose-950 border border-white/95 z-20 hover:scale-105 transition-transform duration-300 cursor-pointer whitespace-nowrap"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white shadow-2xs shrink-0">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span>สารสกัดมะม่วงหาวมะนาวโห่</span>
              </motion.div>

              {/* Tilted Floating Central Bottle with generous horizontal space */}
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
                className="relative z-10 filter drop-shadow-[0_25px_40px_rgba(232,74,116,0.3)] flex items-center justify-center my-6 sm:my-8 cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={bottleImg}
                  alt="ViVa+ Prebiotic Collagen Drink"
                  className="w-[200px] sm:w-[240px] lg:w-[270px] max-h-[460px] h-auto object-contain select-none"
                  loading="eager"
                />
              </motion.div>

              {/* Floating Bottom Bubble Badges */}
              <div className="w-full flex items-center justify-center gap-2.5 sm:gap-3 z-20 mt-2">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="bg-gradient-to-br from-white/95 via-rose-50/90 to-pink-50/85 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_6px_20px_rgba(232,74,116,0.14)] border border-white/95 flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 shadow-2xs">
                    <Heart className="w-3.5 h-3.5 fill-rose-200" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] sm:text-xs font-bold text-rose-950 leading-tight">ดื่มง่าย สดชื่น 20 kcal</p>
                    <p className="text-[9px] text-rose-800/70">หวานกำลังดี ดีต่อสุขภาพ</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  className="bg-gradient-to-br from-white/95 via-rose-50/90 to-pink-50/85 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-[0_6px_20px_rgba(232,74,116,0.14)] border border-white/95 flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] sm:text-xs font-bold text-rose-950 leading-tight">มาตรฐาน TCP Group</p>
                    <p className="text-[9px] text-rose-800/70">ปลอดภัย ได้มาตรฐาน</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
