import { ScrollReveal } from "@/components/ScrollReveal";
import { Sparkles, Sprout, Award, Heart } from "lucide-react";
import karandaImg from "@/assets/karanda.png";
import farmer1Img from "@/assets/farmer-1.jpg";
import farmer2Img from "@/assets/farmer-2.jpg";

export function KarandaSection() {
  return (
    <section id="karanda" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient element */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-rose-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Imagery & Visual Story */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Main Fruit Showcase Card */}
                <div className="bg-gradient-to-br from-rose-100/80 via-pink-50/90 to-rose-200/50 rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-soft-rose relative overflow-hidden flex flex-col items-center justify-center text-center">
                  <div className="w-60 h-60 sm:w-72 sm:h-72 relative flex items-center justify-center rounded-2xl overflow-hidden shadow-inner bg-white/40">
                    <img
                      src={karandaImg}
                      alt="มะม่วงหาวมะนาวโห่ Carissa carandas ผลผลิตเกษตรกรไทย"
                      className="w-full h-full object-cover filter drop-shadow-md hover:scale-105 transition-transform duration-500 rounded-2xl"
                    />
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white text-rose-700 shadow-xs border border-rose-200">
                      Carissa Carandas
                    </span>
                    <h3 className="text-xl font-bold text-rose-950 font-display mt-2">
                      มะม่วงหาวมะนาวโห่แท้ 100%
                    </h3>
                    <p className="text-xs text-rose-900/70 mt-1">
                      สุดยอดผลไม้ไทย Superfruit อุดมด้วยสารต้านอนุมูลอิสระ
                    </p>
                  </div>
                </div>

                {/* Farmer Small Floating Pictures */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-2.5 rounded-2xl shadow-hover-rose border border-rose-100 items-center gap-3">
                  <img
                    src={farmer1Img}
                    alt="เกษตรกรไทยผู้ปลูกมะม่วงหาวมะนาวโห่"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div className="text-left pr-2">
                    <p className="text-xs font-bold text-rose-950">ผลผลิตจากเกษตรกรไทย</p>
                    <p className="text-[10px] text-rose-700/80">สนับสนุนชุมชน สร้างรายได้ยั่งยืน</p>
                  </div>
                </div>

                <div className="hidden sm:flex absolute -top-4 -right-4 bg-white p-2.5 rounded-2xl shadow-soft-rose border border-rose-100 items-center gap-2">
                  <img
                    src={farmer2Img}
                    alt="การเก็บเกี่ยวผลผลิต"
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <span className="text-xs font-semibold text-rose-900 pr-1">
                    คัดสรรด้วยมือทุกผล
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold uppercase tracking-wider">
                <Sprout className="w-3.5 h-3.5 text-rose-600" />
                <span>Local Agriculture & Superfruit</span>
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 font-display tracking-tight leading-tight">
                คุณค่าจากเกษตรกรไทย <br />
                <span className="text-gradient-rose">สู่เครื่องดื่มพรีไบโอติกระดับพรีเมียม</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-base text-rose-900/80 leading-relaxed font-medium">
                <strong className="text-rose-950 font-bold">ViVa+</strong> คัดสรร <strong>มะม่วงหาวมะนาวโห่</strong> จากแหล่งเพาะปลูกธรรมชาติของกลุ่มเกษตรกรไทย นำมาผ่านกระบวนการสกัดอย่างพิถีพิถันเพื่อคงคุณค่าสารชีวภาพสูงสุด มอบรสชาติหวานอมเปรี้ยวสดชื่นเป็นเอกลักษณ์
              </p>
            </ScrollReveal>

            {/* Benefits of Karanda */}
            <ScrollReveal direction="up" delay={0.3} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                    <h4 className="font-bold text-rose-950 text-sm">แอนโทไซยานินสูง</h4>
                  </div>
                  <p className="text-xs text-rose-900/70 leading-relaxed">
                    สารสีม่วงแดงจากธรรมชาติ มีฤทธิ์ต้านอนุมูลอิสระสูงกว่าผลไม้ทั่วไป ช่วยชะลอความเสื่อมของเซลล์
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-rose-600 shrink-0" />
                    <h4 className="font-bold text-rose-950 text-sm">วิตามินซี & วิตามินเอ</h4>
                  </div>
                  <p className="text-xs text-rose-900/70 leading-relaxed">
                    เสริมสร้างภูมิคุ้มกัน บำรุงสายตา และช่วยให้ร่างกายนำสารอาหารไปใช้อย่างมีประสิทธิภาพ
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Sustainability Commitment */}
            <ScrollReveal direction="up" delay={0.4} className="pt-2">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-rose-100/90 to-pink-100/70 border border-rose-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-rose-600 shrink-0 shadow-xs">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-bold text-rose-950">
                    พันธกิจเพื่อความยั่งยืนโดยกลุ่มธุรกิจ TCP
                  </h4>
                  <p className="text-xs text-rose-900/80 leading-relaxed">
                    การเลือกใช้วัตถุดิบในประเทศเป็นการสนับสนุนรายได้ที่มั่นคงให้แก่เกษตรกรท้องถิ่นไทย สอดคล้องกับแนวคิดความยั่งยืนและการเติบโตไปด้วยกันของ TCP
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
