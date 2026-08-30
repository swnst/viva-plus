import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin, ShoppingBag, Sparkles, Smartphone, Check, Building2 } from "lucide-react";
import "leaflet/dist/leaflet.css";

// Dynamic map renderer for client side
function MapView() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-80 sm:h-96 rounded-3xl bg-rose-100/60 animate-pulse flex items-center justify-center text-rose-900/60 text-sm">
        กำลังโหลดแผนที่จุดจำหน่าย...
      </div>
    );
  }

  // Sample major TCP Vending locations across Bangkok & BTS/MRT lines
  const locations = [
    { name: "ตู้ TCP Vending - สถานี BTS สยาม", area: "สยามสแควร์, กรุงเทพฯ", type: "TCP Vending" },
    { name: "ตู้ TCP Vending - สถานี BTS อโศก", area: "สุขุมวิท, กรุงเทพฯ", type: "TCP Vending" },
    { name: "ตู้ TCP Vending - อาคาร TCP สำนักงานใหญ่", area: "บางบอน, กรุงเทพฯ", type: "TCP Headquarter" },
    { name: "ตู้ TCP Vending - มหาวิทยาลัยธรรมศาสตร์ ท่าพระจันทร์", area: "พระนคร, กรุงเทพฯ", type: "TCP Vending" },
    { name: "ตู้ TCP Vending - โรงพยาบาลศิริราช ปิยมหาราชการุณย์", area: "บางกอกน้อย, กรุงเทพฯ", type: "TCP Vending" },
    { name: "7-Eleven & ร้านสะดวกซื้อชั้นนำ", area: "สาขาทั่วประเทศ", type: "Convenience Store" },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-soft-rose">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-rose-100">
        <div>
          <h3 className="text-xl font-bold text-rose-950 font-display flex items-center gap-2">
            <MapPin className="w-5 h-5 text-rose-600" />
            <span>จุดติดตั้งตู้ TCP Vending & จุดจำหน่ายยอดนิยม</span>
          </h3>
          <p className="text-xs text-rose-900/70 mt-1">
            พร้อมเสิร์ฟความสดชื่นตลอด 24 ชั่วโมง สะดวก รวดเร็ว รองรับสแกนจ่ายทุกระบบ
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 shrink-0">
          ครอบคลุมทั่วประเทศ
        </span>
      </div>

      {/* Location Cards Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 hover:bg-rose-100/50 hover:border-rose-300 transition-all flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs text-xs font-bold">
              {idx + 1}
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-rose-950">{loc.name}</h4>
              <p className="text-[11px] text-rose-800/70 mt-0.5">{loc.area}</p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-medium bg-white text-rose-700 border border-rose-200">
                {loc.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DistributionSection() {
  return (
    <section id="distribution" className="py-24 bg-[#FFF8F9] relative overflow-hidden">
      {/* Ambient background styling */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-rose-200/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5 text-rose-600" />
              <span>Where to Buy</span>
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 font-display tracking-tight">
              ช่องทางการจัดจำหน่าย <br />
              <span className="text-gradient-rose">สะดวกทุกที่ ใกล้คุณ</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-rose-900/75 leading-relaxed font-medium">
              พบกับ Viva Plus ได้อย่างสะดวกผ่านตู้จำหน่ายเครื่องดื่มอัตโนมัติ TCP และร้านค้าชั้นนำ
            </p>
          </ScrollReveal>
        </div>

        {/* 2 Main Channels: TCP Vending & Retail */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Hero Card: TCP Vending Machine */}
          <ScrollReveal direction="up" delay={0.1} className="lg:col-span-7">
            <div className="h-full bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 sm:p-10 text-white shadow-hover-rose relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>นวัตกรรมโดย TG Vending ในเครือ TCP</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
                  ตู้จำหน่ายเครื่องดื่มอัตโนมัติ TCP (TG Vending)
                </h3>
                <p className="text-xs sm:text-sm text-rose-100 leading-relaxed max-w-xl">
                  กดรับ Viva Plus เย็นสดชื่นได้ตลอด 24 ชั่วโมง ติดตั้งตามสถานีรถไฟฟ้า BTS, MRT, โรงพยาบาล, มหาวิทยาลัย, อาคารสำนักงาน และคอนโดมิเนียมชั้นนำทั่วกรุงเทพฯ และหัวเมืองใหญ่
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-rose-50 font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>รองรับ PromptPay / QR Code สแกนจ่าย</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>แช่เย็นคงคุณค่าสารอาหารพร้อมดื่ม</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>มีเจ้าหน้าที่เติมสินค้าอย่างสม่ำเสมอ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>บริการโดยตรงจากเครือ TCP Group</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-2 text-xs text-rose-100">
                  <Smartphone className="w-4 h-4" />
                  <span>เพียงแตะ สแกน ดื่ม ได้ทันที</span>
                </div>
                <a
                  href="https://www.tcp.com/th/service/service/vending-machine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white text-rose-600 text-xs sm:text-sm font-bold shadow-md hover:bg-rose-50 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>รายละเอียดตู้ TG Vending</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Retail Partners Card */}
          <ScrollReveal direction="up" delay={0.2} className="lg:col-span-5">
            <div className="h-full bg-white rounded-3xl p-8 sm:p-10 border border-rose-100 shadow-soft-rose flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-rose-950 font-display">
                  ร้านค้าและช่องทางจัดจำหน่าย
                </h3>
                <p className="text-xs sm:text-sm text-rose-900/75 leading-relaxed">
                  สามารถเลือกซื้อ Viva Plus ได้ที่ชั้นวางเครื่องดื่มเพื่อสุขภาพ ณ ร้านสะดวกซื้อและห้างสรรพสินค้าชั้นนำทั่วประเทศ
                </p>

                <div className="pt-2 space-y-2.5">
                  {[
                    "7-Eleven ทั่วประเทศ",
                    "Lotus's & Lotus's go fresh",
                    "Big C Supercenter & Mini Big C",
                    "Tops Market & Gourmet Market",
                    "CJ More & CJ Express",
                  ].map((store, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-2.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs sm:text-sm font-semibold text-rose-900 flex items-center justify-between"
                    >
                      <span>{store}</span>
                      <Check className="w-4 h-4 text-rose-500" />
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-rose-800/60 mt-6 pt-4 border-t border-rose-100 text-center">
                * บริหารการกระจายสินค้าโดย บริษัท เดอเบล จำกัด (Durbell) ในเครือ TCP
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Map & Key Locations View */}
        <ScrollReveal direction="up" delay={0.3} className="mt-12">
          <MapView />
        </ScrollReveal>
      </div>
    </section>
  );
}
