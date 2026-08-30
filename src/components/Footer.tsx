import { Link } from "@tanstack/react-router";
import { scrollToSection } from "@/lib/lenis";
import { ExternalLink, Heart, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import {
  FacebookIcon,
  TikTokIcon,
  ShopeeIcon,
  LazadaIcon,
} from "@/components/SocialIcons";
import vivaLogo from "@/assets/viva_logo.png";
import tcpLogo from "@/assets/tcp.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/TCPGroupThailand", icon: FacebookIcon },
    { name: "TikTok", url: "https://www.tiktok.com/@tcpgroup", icon: TikTokIcon },
    { name: "Shopee", url: "https://shopee.co.th/tcp_official_store", icon: ShopeeIcon },
    { name: "Lazada", url: "https://www.lazada.co.th/shop/tcp-official-store", icon: LazadaIcon },
  ];

  return (
    <footer className="bg-[#1F0E17] text-rose-100/90 pt-16 pb-12 border-t border-rose-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-rose-900/40">
          {/* Brand & Story */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={vivaLogo}
                alt="ViVa+"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div className="h-6 w-px bg-rose-800/80 mx-0.5" />
              <img src={tcpLogo} alt="TCP" className="h-5 w-auto object-contain brightness-0 invert opacity-80" />
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

          {/* Online Channels & Locations */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white font-display tracking-wide">
              ช่องทางออนไลน์ & จำหน่าย
            </h4>
            <div className="text-sm text-rose-200/70 space-y-2 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>ตู้ TG Vending ทั่วประเทศ</span>
              </p>
            </div>
            
            <div className="pt-2">
              <p className="text-xs font-semibold text-rose-300 mb-2.5">ช่องทางออนไลน์ TCP :</p>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-xl text-xs font-medium bg-rose-950/80 hover:bg-rose-900/90 text-rose-200 border border-rose-900/70 transition-all flex items-center gap-2"
                    >
                      <div className="w-4 h-4 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="truncate">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-300/60">
          <p>© {currentYear} ViVa+. A brand by TCP Group (T.C. Pharmaceutical Industries Co., Ltd.). All rights reserved.</p>
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
