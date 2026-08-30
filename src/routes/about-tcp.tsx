import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  ExternalLink,
  Building2,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/about-tcp")({
  component: AboutTcpComponent,
});

function AboutTcpComponent() {
  const tcpBrands = [
    { name: "กระทิงแดง / Red Bull", category: "เครื่องดื่มให้พลังงานระดับโลก" },
    { name: "Ready (เรดดี้)", category: "เครื่องดื่มให้พลังงานผสมน้ำผลไม้" },
    { name: "Sponsor (สปอนเซอร์)", category: "เครื่องดื่มเกลือแร่ยอดขายอันดับ 1" },
    { name: "Mansome (แมนซั่ม)", category: "เครื่องดื่มฟังก์ชันนัลสำหรับผู้ชาย" },
    { name: "Puriku (เพียวริคุ)", category: "ชาขาวพร้อมดื่มผสมน้ำผลไม้" },
    { name: "Sunsnack (ซันสแนค)", category: "ขนมขบเคี้ยวเมล็ดทานตะวันอบกรอบ" },
    { name: "Farm Zaa (ฟาร์มซ่า)", category: "เครื่องดื่มจากวัตถุดิบเกษตรกรไทย" },
    { name: "Viva Plus (วีว่า พลัส)", category: "เครื่องดื่มพรีไบโอติกคอลลาเจนระดับพรีเมียม" },
  ];

  const tcpCompanies = [
    {
      name: "บริษัท ที.ซี.ฟาร์มาซูติคอล อุตสาหกรรม จำกัด",
      desc: "ผู้นำด้านการผลิตเครื่องดื่มและอาหารเพื่อสุขภาพระดับสากล ด้วยเทคโนโลยีทันสมัยและมาตรฐานความปลอดภัยสูงสุด",
    },
    {
      name: "บริษัท ที.จี. เวนดิ้ง แอนด์ โชว์เคส อินดัสทรีส์ จำกัด",
      desc: "ผู้นำด้านธุรกิจตู้จำหน่ายเครื่องดื่มและสินค้าอัตโนมัติ (Vending Machines) ทันสมัย ครอบคลุมทั่วประเทศ",
    },
    {
      name: "บริษัท เดอเบล จำกัด (Durbell)",
      desc: "ผู้นำด้านการจัดจำหน่ายและกระจายสินค้าอุปโภคบริโภคระดับประเทศ ด้วยเครือข่ายโลจิสติกส์ที่ครอบคลุมทุกพื้นที่",
    },
    {
      name: "บริษัท ทีซีพี อินคิวเบเตอร์ จำกัด (TCP Incubator)",
      desc: "ศูนย์กลางการบ่มเพาะนวัตกรรมผลิตภัณฑ์แห่งอนาคต เพื่อสุขภาพและความเป็นอยู่ที่ดีของผู้บริโภคยุคใหม่",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F9] selection:bg-rose-200 selection:text-rose-900">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Top Header Hero */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-800 text-xs sm:text-sm font-semibold border border-rose-200/80 mb-6">
                <Building2 className="w-4 h-4 text-rose-600" />
                <span>กลุ่มธุรกิจ TCP (TCP Group)</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-rose-950 font-display">
                ปลุกพลัง เพื่อวันที่ดีกว่า
                <br />
                <span className="text-gradient-rose">Energizing a Better World for All</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-rose-900/80 font-medium max-w-3xl mx-auto leading-relaxed">
                Viva Plus ภาคภูมิใจที่ได้เป็นหนึ่งในนวัตกรรมเครื่องดื่มเพื่อสุขภาพภายใต้ <strong>กลุ่มธุรกิจ TCP</strong> องค์กรชั้นนำของคนไทยที่มุ่งมั่นส่งมอบผลิตภัณฑ์คุณภาพระดับสากลสู่ผู้บริโภคทั่วโลก
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} className="mt-8 flex justify-center">
              <a
                href="https://www.tcp.com/th/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-cta text-white font-semibold shadow-soft-rose hover:shadow-hover-rose hover:scale-[1.02] transition-all"
              >
                <span>เยี่ยมชมเว็บไซต์หลัก TCP.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* 3 Strategic Pillars */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              3 Strategic Pillars
            </span>
            <h2 className="text-3xl font-bold text-rose-950 font-display mt-2">
              3 เสาหลักขับเคลื่อนองค์กร TCP
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="h-full bg-white rounded-3xl p-8 border border-rose-100 shadow-soft-rose space-y-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold font-display text-lg">
                  01
                </div>
                <h3 className="text-xl font-bold text-rose-950 font-display">
                  Fulfilling — ปลุกพลังแบรนด์สินค้า
                </h3>
                <p className="text-xs sm:text-sm text-rose-900/75 leading-relaxed">
                  ส่งมอบผลิตภัณฑ์คุณภาพที่ตอบสนองความต้องการด้านสุขภาพและความเป็นอยู่ที่ดีของผู้บริโภคในทุกช่วงวัย ดั่งเช่น Viva Plus
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="h-full bg-white rounded-3xl p-8 border border-rose-100 shadow-soft-rose space-y-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold font-display text-lg">
                  02
                </div>
                <h3 className="text-xl font-bold text-rose-950 font-display">
                  Growing — ปลุกพลังธุรกิจเติบโต
                </h3>
                <p className="text-xs sm:text-sm text-rose-900/75 leading-relaxed">
                  ขยายศักยภาพทางธุรกิจทั้งในไทยและตลาดโลก ด้วยนวัตกรรม เทคโนโลยี และการสนับสนุนพันธมิตรทางธุรกิจรวมถึงเกษตรกรไทย
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="h-full bg-white rounded-3xl p-8 border border-rose-100 shadow-soft-rose space-y-4 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-bold font-display text-lg">
                  03
                </div>
                <h3 className="text-xl font-bold text-rose-950 font-display">
                  Caring — ปลุกพลังห่วงใยสิ่งแวดล้อม
                </h3>
                <p className="text-xs sm:text-sm text-rose-900/75 leading-relaxed">
                  สร้างความยั่งยืนให้แก่สังคม ชุมชน และสิ่งแวดล้อม มุ่งสู่เป้าหมายความเป็นกลางทางคาร์บอนและการจัดการน้ำอย่างยั่งยืน
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Business Groups in TCP */}
        <section className="py-16 bg-white border-y border-rose-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                TCP Business Units
              </span>
              <h2 className="text-3xl font-bold text-rose-950 font-display mt-2">
                กลุ่มบริษัทในเครือ TCP
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tcpCompanies.map((company, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-rose-950">{company.name}</h3>
                      <p className="text-xs text-rose-900/70 mt-1.5 leading-relaxed">
                        {company.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* TCP Brand Portfolio */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Brand Portfolio
            </span>
            <h2 className="text-3xl font-bold text-rose-950 font-display mt-2">
              แบรนด์ชั้นนำในเครือกลุ่มธุรกิจ TCP
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tcpBrands.map((b, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.05}>
                <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-xs text-center space-y-1 hover:border-rose-300 transition-colors">
                  <h4 className="font-bold text-rose-950 text-sm">{b.name}</h4>
                  <p className="text-[11px] text-rose-800/70">{b.category}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-rose-900 text-sm font-semibold border border-rose-200 shadow-xs hover:bg-rose-50 transition-colors"
            >
              <span>← กลับสู่หน้าหลัก Viva Plus</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
