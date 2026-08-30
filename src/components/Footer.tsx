import { Link } from "@tanstack/react-router";
import { scrollToSection } from "@/lib/lenis";
import { ExternalLink, Heart, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-[#1F0E17] text-rose-100/90 pt-16 pb-12 border-t border-rose-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-rose-900/40">
          {/* Brand & Story */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white font-bold text-lg font-display">
                V+
              </div>
              <span className="text-2xl font-bold font-display text-white">
                Viva<span className="text-rose-400">Plus</span>
              </span>
            </div>
            <p className="text-sm text-rose-200/70 leading-relaxed">
              เครื่องดื่มเพื่อสุขภาพระดับพรีเมียม ผสานพรีไบโอติก คอลลาเจน วิตามินซี ซิงค์ และคุณค่าแท้จากมะม่วงหาวมะนาวโห่ผลผลิตเกษตรกรไทย โดยกลุ่มธุรกิจ TCP
            </p>
            <div className="flex items-center gap-2 text-xs text-rose-300/80 bg-rose-950/60 p-3 rounded-xl border border-rose-900/50">
              <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
              <span>ผลิตภายใต้มาตรฐานความปลอดภัยระดับสากล TCP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white font-display tracking-wide">
              หัวข้อสำคัญ
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick("hero")}
                  className="hover:text-rose-300 transition-colors cursor-pointer text-left"
                >
                  หน้าหลัก
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("product")}
                  className="hover:text-rose-300 transition-colors cursor-pointer text-left"
                >
                  ผลิตภัณฑ์ & 4 สารสำคัญ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("prebiotic")}
                  className="hover:text-rose-300 transition-colors cursor-pointer text-left"
                >
                  ความรู้เรื่องพรีไบโอติก
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("karanda")}
                  className="hover:text-rose-300 transition-colors cursor-pointer text-left"
                >
                  มะม่วงหาวมะนาวโห่ & เกษตรกรไทย
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("distribution")}
                  className="hover:text-rose-300 transition-colors cursor-pointer text-left"
                >
                  จุดจำหน่าย & ตู้ TCP Vending
                </button>
              </li>
            </ul>
          </div>

          {/* TCP Group & About */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white font-display tracking-wide">
              กลุ่มธุรกิจ TCP
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/about-tcp"
                  className="hover:text-rose-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>ประวัติ & วิสัยทัศน์ TCP</span>
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                </Link>
              </li>
              <li>
                <a
                  href="https://www.tcp.com/th/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>เว็บไซต์หลัก TCP Group</span>
                  <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tcp.com/th/service/service/vending-machine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>บริการตู้หยอดเหรียญอัตโนมัติ TCP</span>
                  <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tcp.com/th/sustainability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>การพัฒนาที่ยั่งยืน (Sustainability)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Availability */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white font-display tracking-wide">
              ช่องทางจำหน่าย
            </h4>
            <div className="text-sm text-rose-200/70 space-y-2 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>ตู้จำหน่ายเครื่องดื่มอัตโนมัติ TCP (TG Vending) ทั่วประเทศ</span>
              </p>
              <p>ร้านสะดวกซื้อและซูเปอร์มาร์เก็ตชั้นนำ</p>
            </div>
            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 text-xs font-semibold rounded-lg bg-rose-900/50 text-rose-300 border border-rose-800/40">
                TCP ปลุกพลัง เพื่อวันที่ดีกว่า
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-300/60">
          <p>© {currentYear} Viva Plus. A brand by TCP Group (T.C. Pharmaceutical Industries Co., Ltd.). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              สร้างสรรค์ด้วยความใส่ใจเพื่อสุขภาพผู้หญิง <Heart className="w-3 h-3 text-rose-400 fill-rose-400 inline" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
