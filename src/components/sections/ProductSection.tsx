import { ScrollReveal } from "@/components/ScrollReveal";
import { Sparkles, Activity, Shield, Sun, CheckCircle2, Zap } from "lucide-react";

export function ProductSection() {
  const ingredients = [
    {
      name: "Prebiotic",
      thaiName: "พรีไบโอติกส์",
      badge: "สมดุลลำไส้",
      icon: Activity,
      color: "from-pink-500 to-rose-400",
      lightBg: "bg-pink-50 border-pink-100",
      desc: "ใยอาหารที่เป็นอาหารของจุลินทรีย์ชนิดดี (Probiotics) ในทางเดินอาหาร ช่วยฟื้นฟูระบบขับถ่ายให้ทำงานเป็นปกติ ปรับสมดุลลำไส้ ดูดซึมสารอาหารได้ดียิ่งขึ้น",
      highlights: ["ปรับสมดุลระบบทางเดินอาหาร", "ขับถ่ายคล่อง ท้องไม่อืด", "เสริมภูมิคุ้มกันกว่า 70% ที่ลำไส้"],
    },
    {
      name: "Collagen",
      thaiName: "คอลลาเจนเปปไทด์",
      badge: "ผิวอิ่มฟู นุ่มเด้ง",
      icon: Sparkles,
      color: "from-rose-500 to-red-400",
      lightBg: "bg-rose-50 border-rose-100",
      desc: "คอลลาเจนโมเลกุลขนาดเล็ก ดูดซึมเข้าสู่ร่างกายได้อย่างรวดเร็ว ช่วยเติมเต็มความชุ่มชื้น คืนความยืดหยุ่นให้ผิวดูเปล่งปลั่ง อ่อนเยาว์ และกระชับ",
      highlights: ["เสริมความยืดหยุ่นให้โครงสร้างผิว", "กักเก็บความชุ่มชื้นยาวนาน", "ผิวเรียบเนียน ดูมีออร่า"],
    },
    {
      name: "Zinc",
      thaiName: "ซิงค์ (สังกะสี)",
      badge: "ลดสิว คุมมัน",
      icon: Shield,
      color: "from-amber-500 to-rose-400",
      lightBg: "bg-amber-50/70 border-amber-100",
      desc: "แร่ธาตุสำคัญที่มีบทบาทโดยตรงในการสมานผิว ลดกระบวนการอักเสบ ควบคุมความมันส่วนเกิน และช่วยเสริมประสิทธิภาพระบบภูมิคุ้มกัน",
      highlights: ["ควบคุมการผลิตน้ำมันส่วนเกิน", "ลดอาการอักเสบของสิว", "ช่วยให้รอยแผลเป็นแลดูจางลง"],
    },
    {
      name: "Vitamin C",
      thaiName: "วิตามินซีเข้มข้น",
      badge: "ผิวกระจ่างใส",
      icon: Sun,
      color: "from-orange-400 to-pink-500",
      lightBg: "bg-orange-50/70 border-orange-100",
      desc: "สารต้านอนุมูลอิสระประสิทธิภาพสูง ช่วยปกป้องเซลล์ผิวจากการทำร้ายของมลภาวะและแสงแดด พร้อมทั้งทำงานร่วมกับคอลลาเจนเพื่อผลลัพธ์ที่ดีที่สุด",
      highlights: ["กระตุ้นการสร้างคอลลาเจนตามธรรมชาติ", "ช่วยให้ผิวกระจ่างใสอย่างเป็นธรรมชาติ", "เสริมเกราะป้องกันเซลล์ผิว"],
    },
  ];

  return (
    <section id="product" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#FFF8F9] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FFF8F9] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-rose-600" />
              <span>4 Key Ingredients & Benefits</span>
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 font-display tracking-tight">
              4 พลังสารสำคัญ <span className="text-gradient-rose">ผสานในขวดเดียว</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-rose-900/70 leading-relaxed font-medium">
              คัดสรรสูตรโภชนาการที่ลงตัวเพื่อการดูแลแบบองค์รวม ทั้งระบบขับถ่าย สุขภาพผิวพรรณ และการปกป้องเซลล์ร่างกาย
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ingredients.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.1}
                className="h-full"
              >
                <div className="h-full bg-white rounded-3xl p-6 lg:p-7 border border-rose-100 shadow-soft-rose hover:shadow-hover-rose hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-4">
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md shadow-rose-200/50 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-100/80 text-rose-800 border border-rose-200/60">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-bold text-rose-950 font-display">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-rose-600">
                        {item.thaiName}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-rose-900/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-5 mt-5 border-t border-rose-100/80 space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-rose-950/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner / Summary */}
        <ScrollReveal direction="up" delay={0.3} className="mt-14">
          <div className="glass-panel bg-gradient-to-r from-rose-100/90 via-pink-50/90 to-rose-100/90 rounded-3xl p-8 sm:p-10 border border-rose-200 text-center max-w-4xl mx-auto shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-rose-950 font-display">
              ผลลัพธ์ที่สัมผัสได้เมื่อดื่ม Viva Plus เป็นประจำ
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white/80 p-4 rounded-2xl border border-rose-100 shadow-xs">
                <span className="text-rose-500 font-bold text-lg">01</span>
                <h4 className="font-bold text-rose-950 text-sm mt-1">ระบบขับถ่ายสมดุล</h4>
                <p className="text-xs text-rose-900/70 mt-0.5">พรีไบโอติกดูแลจุลินทรีย์ดี ท้องโล่งสบายทุกเช้า</p>
              </div>
              <div className="bg-white/80 p-4 rounded-2xl border border-rose-100 shadow-xs">
                <span className="text-rose-500 font-bold text-lg">02</span>
                <h4 className="font-bold text-rose-950 text-sm mt-1">ผิวแลดูอิ่มน้ำ สดใส</h4>
                <p className="text-xs text-rose-900/70 mt-0.5">คอลลาเจน + วิตามินซี ช่วยฟื้นฟูผิวให้เปล่งประกาย</p>
              </div>
              <div className="bg-white/80 p-4 rounded-2xl border border-rose-100 shadow-xs">
                <span className="text-rose-500 font-bold text-lg">03</span>
                <h4 className="font-bold text-rose-950 text-sm mt-1">ลดสิว คุมมัน สบายผิว</h4>
                <p className="text-xs text-rose-900/70 mt-0.5">ซิงค์ช่วยดูแลความมันส่วนเกินและสมานผิวอย่างอ่อนโยน</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
