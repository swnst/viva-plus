import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Heart, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/lenis";
import bottleImg from "@/assets/viva-bottle.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-hero"
    >
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-rose-300/30 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-pink-400/20 blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-rose-200/40 blur-2xl pointer-events-none -z-10" />

      {/* Floating subtle aesthetic elements */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute top-32 right-[12%] glass-panel px-4 py-2.5 rounded-2xl shadow-soft-rose items-center gap-2.5 text-xs font-semibold text-rose-950 border border-white/80 z-10"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
        <span>Prebiotic + Collagen 100%</span>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden md:flex absolute bottom-28 left-[10%] glass-panel px-4 py-2.5 rounded-2xl shadow-soft-rose items-center gap-2 text-xs font-semibold text-rose-950 border border-white/80 z-10"
      >
        <Sparkles className="w-4 h-4 text-rose-500" />
        <span>สารสกัดมะม่วงหาวมะนาวโห่ไทย</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-800 text-xs sm:text-sm font-semibold border border-rose-200/80 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-rose-500" />
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
                <span className="text-gradient-rose">จากภายในสู่ภายนอก</span>
              </h1>
              <p className="text-base sm:text-lg text-rose-900/80 font-medium pt-2 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Viva Plus นวัตกรรมเครื่องดื่มผสานพลัง 4 สารสำคัญ <strong className="text-rose-900 font-semibold">Prebiotic, Collagen, Zinc, Vitamin C</strong> พร้อมคุณค่าสารสกัดแท้จากมะม่วงหาวมะนาวโห่ของเกษตรกรไทย
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
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
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

            {/* Micro Trust Stats */}
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

          {/* Right Column: Hero Bottle Visual */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative flex items-center justify-center"
            >
              {/* Backing Ambient Glow */}
              <div className="absolute inset-0 w-72 h-72 sm:w-96 sm:h-96 mx-auto rounded-full bg-gradient-to-tr from-rose-400/40 via-pink-300/30 to-amber-200/30 blur-3xl -z-10" />

              {/* Central Bottle with Floating Animation */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 1, -1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 filter drop-shadow-[0_25px_35px_rgba(232,74,116,0.3)]"
              >
                <img
                  src={bottleImg}
                  alt="Viva Plus Prebiotic Collagen Drink"
                  className="w-[260px] sm:w-[320px] lg:w-[380px] h-auto object-contain select-none"
                  loading="eager"
                />
              </motion.div>

              {/* Floating Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -right-2 sm:right-2 glass-panel p-3.5 rounded-2xl shadow-soft-rose border border-white/90 text-left z-20"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rose-950">ดื่มง่าย อร่อยสดชื่น</p>
                    <p className="text-[10px] text-rose-800/70">หวานกำลังดี ดีต่อสุขภาพ</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute top-12 -left-4 sm:left-0 glass-panel p-3.5 rounded-2xl shadow-soft-rose border border-white/90 text-left z-20"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-rose-950">คุณภาพโดย TCP Group</p>
                    <p className="text-[10px] text-rose-800/70">ปลอดภัย ได้มาตรฐาน</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
