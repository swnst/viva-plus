import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Heart, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/lenis";
import bottleImg from "@/assets/viva-bottle.png";
import tcpLogo from "@/assets/tcp.svg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-gradient-hero"
    >
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-rose-300/30 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-pink-400/20 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-rose-200/40 blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-800 text-xs sm:text-sm font-semibold border border-rose-200/80 shadow-sm"
            >
              <img src={tcpLogo} alt="TCP" className="h-3.5 w-auto object-contain" />
              <span>เครื่องดื่มเพื่อสุขภาพระดับพรีเมียม โดย TCP</span>
            </motion.div>

            {/* Main Headline with "ได้ทุกวัน" */}
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
                  className="px-3 py-1 rounded-lg bg-white/80 text-rose-900 text-xs font-medium border border-rose-100/90 shadow-sm"
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

          {/* Right Column: Hero Bottle & Non-Overlapping Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative flex flex-col items-center justify-center w-full"
            >
              {/* Backing Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-rose-400/30 via-pink-300/25 to-amber-200/25 blur-3xl -z-10" />

              {/* Central Bottle cleanly framed without any overlapping elements */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 filter drop-shadow-[0_20px_30px_rgba(232,74,116,0.25)] flex items-center justify-center py-2"
              >
                <img
                  src={bottleImg}
                  alt="ViVa+ Prebiotic Collagen Drink"
                  className="w-[220px] sm:w-[270px] lg:w-[320px] max-h-[460px] h-auto object-contain select-none"
                  loading="eager"
                />
              </motion.div>

              {/* Highlight Cards positioned neatly BELOW the bottle on mobile and desktop so they never cover the bottle */}
              <div className="w-full max-w-sm mt-3 grid grid-cols-2 gap-2.5 z-20">
                <div className="glass-panel p-3 rounded-2xl shadow-soft-rose border border-white/90 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                      <Heart className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-rose-950 leading-tight">ดื่มง่าย อร่อยสดชื่น</p>
                      <p className="text-[9px] text-rose-800/70">หวานกำลังดี ดีต่อสุขภาพ</p>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-3 rounded-2xl shadow-soft-rose border border-white/90 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-rose-950 leading-tight">คุณภาพโดย TCP</p>
                      <p className="text-[9px] text-rose-800/70">ปลอดภัย ได้มาตรฐาน</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
