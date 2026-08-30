import { ScrollReveal } from "@/components/ScrollReveal";
import { HeartPulse, ShieldCheck, Smile, HelpCircle } from "lucide-react";

export function PrebioticSection() {
  return (
    <section id="prebiotic" className="py-24 bg-[#FFF0F4] relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-200/80 text-rose-900 text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
              <span>Science & Health Education</span>
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 font-display tracking-tight">
              ทำความรู้จัก <span className="text-gradient-rose">"พรีไบโอติกส์"</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-rose-900/75 leading-relaxed font-medium">
              กุญแจสำคัญสู่สุขภาพที่ดีและผิวพรรณสดใส เริ่มต้นจากการดูแลสมดุลจุลินทรีย์ในทางเดินอาหาร
            </p>
          </ScrollReveal>
        </div>

        {/* Comparison Box: Prebiotic vs Probiotic */}
        <ScrollReveal direction="up" delay={0.3} className="mt-14 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-soft-rose">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                Infographic Guide
              </span>
              <h3 className="text-2xl font-bold text-rose-950 font-display mt-1">
                ความแตกต่างระหว่าง Prebiotic vs Probiotic
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {/* Probiotic Box */}
              <div className="rounded-2xl p-6 bg-rose-50/70 border border-rose-100 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 font-bold text-xs mb-3">
                    Probiotics (โปรไบโอติกส์)
                  </div>
                  <h4 className="text-xl font-bold text-rose-950 font-display">
                    "จุลินทรีย์ตัวดีมีชีวิต"
                  </h4>
                  <p className="text-xs sm:text-sm text-rose-900/75 mt-2 leading-relaxed">
                    คือแบคทีเรียหรือจุลินทรีย์ชนิดที่มีประโยชน์ อาศัยอยู่ในระบบทางเดินอาหาร ช่วยยับยั้งจุลินทรีย์ก่อโรคและรักษาสมดุลของลำไส้
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-rose-200/60 text-xs text-rose-800/80 font-medium">
                  💡 เช่น จุลินทรีย์ในโยเกิร์ต นมเปรี้ยว หรือกิมจิ
                </div>
              </div>

              {/* Prebiotic Box */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-rose-500 to-pink-500 text-white flex flex-col justify-between shadow-md shadow-rose-300/40 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs mb-3">
                    Prebiotics (พรีไบโอติกส์) ★
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    "อาหารของจุลินทรีย์ตัวดี"
                  </h4>
                  <p className="text-xs sm:text-sm text-rose-50 mt-2 leading-relaxed">
                    คือใยอาหารที่ไม่ถูกย่อยในกระเพาะอาหาร แต่จะเดินทางไปเป็นอาหารชั้นเลิศให้แก่โปรไบโอติก ทำให้จุลินทรีย์ดีเจริญเติบโต แข็งแรง และทำงานได้อย่างเต็มประสิทธิภาพ
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 text-xs text-rose-100 font-medium relative z-10">
                  ✨ มีอยู่ใน Viva Plus ดื่มง่าย เสริมอาหารให้ลำไส้ทุกวัน
                </div>
              </div>
            </div>

            {/* Synergistic Note */}
            <div className="mt-6 p-4 rounded-2xl bg-rose-100/60 border border-rose-200 text-center text-xs sm:text-sm text-rose-950">
              <strong className="font-bold text-rose-700">หลักการทำงานแบบ Gut-Skin Axis :</strong> เมื่อลำไส้มีพรีไบโอติกคอยดูแลจุลินทรีย์ดี ร่างกายจะดูดซึมสารอาหารและคอลลาเจนได้ดียิ่งขึ้น ส่งผลให้ผิวพรรณสดใส สุขภาพแข็งแรงจากภายในอย่างแท้จริง
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Core Body Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-soft-rose text-center space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto">
                <HeartPulse className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-rose-950 font-display">
                1. ฟื้นฟูระบบลำไส้ & การขับถ่าย
              </h3>
              <p className="text-xs sm:text-sm text-rose-900/75 leading-relaxed">
                ช่วยเพิ่มมวลอุจจาระ กระตุ้นการบีบตัวของลำไส้อย่างเป็นธรรมชาติ ลดอาการท้องผูก ท้องอืด แน่นท้อง ให้ความรู้สึกเบาสบายในทุกๆ วัน
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-soft-rose text-center space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                <Smile className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-rose-950 font-display">
                2. บำรุงผิวพรรณให้เปล่งปลั่ง
              </h3>
              <p className="text-xs sm:text-sm text-rose-900/75 leading-relaxed">
                การขับของเสียออกจากร่างกายอย่างสม่ำเสมอช่วยลดการสะสมสารพิษ ทำให้ผิวดูสดใส ลดสาเหตุของการเกิดสิวอักเสบและผิวหมองคล้ำ
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-soft-rose text-center space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-rose-950 font-display">
                3. เสริมสร้างเกราะภูมิคุ้มกัน
              </h3>
              <p className="text-xs sm:text-sm text-rose-900/75 leading-relaxed">
                เซลล์ภูมิคุ้มกันกว่า 70% ของร่างกายอยู่ที่เยื่อบุผนังลำไส้ การมีสมดุลจุลินทรีย์ที่ดีจึงช่วยสร้างภูมิคุ้มกันที่แข็งแรง ไม่เจ็บป่วยง่าย
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
