import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/lenis";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const navLinks = [
    { label: "หน้าหลัก", id: "hero" },
    { label: "ผลิตภัณฑ์ & สรรพคุณ", id: "product" },
    { label: "พรีไบโอติก", id: "prebiotic" },
    { label: "มะม่วงหาวมะนาวโห่", id: "karanda" },
    { label: "จุดจำหน่าย & ตู้ TCP", id: "distribution" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center shadow-md shadow-rose-300/40 text-white font-bold text-lg font-display tracking-tight border-2 border-white">
              V+
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold font-display tracking-tight text-rose-950">
                  Viva<span className="text-rose-500">Plus</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-rose-100/80 text-rose-700 border border-rose-200">
                  TCP Group
                </span>
              </div>
              <span className="text-[11px] text-rose-900/60 font-medium tracking-wide">
                Prebiotic & Collagen Drink
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-rose-100 shadow-sm">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3.5 py-1.5 text-sm font-medium text-rose-950/80 hover:text-rose-600 rounded-full hover:bg-rose-50/80 transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <Link
              to="/about-tcp"
              className="px-3.5 py-1.5 text-sm font-medium text-rose-950/80 hover:text-rose-600 rounded-full hover:bg-rose-50/80 transition-all flex items-center gap-1.5"
            >
              <span>เกี่ยวกับ TCP</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("distribution")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-cta text-white text-sm font-semibold shadow-soft-rose hover:shadow-hover-rose hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>หาซื้อตู้ TCP</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-xl bg-white/80 border border-rose-100 text-rose-900 hover:bg-rose-50 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[70px] z-40 p-4 lg:hidden"
          >
            <div className="glass-nav rounded-3xl p-6 shadow-xl border border-rose-200/80 flex flex-col gap-3">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left px-4 py-3 rounded-2xl text-base font-semibold text-rose-950 hover:bg-rose-100/60 transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <Link
                to="/about-tcp"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-2xl text-base font-semibold text-rose-950 hover:bg-rose-100/60 transition-colors flex items-center justify-between"
              >
                <span>เกี่ยวกับกลุ่มธุรกิจ TCP</span>
                <Sparkles className="w-4 h-4 text-rose-500" />
              </Link>

              <div className="pt-3 border-t border-rose-200/60 mt-2">
                <button
                  onClick={() => handleNavClick("distribution")}
                  className="w-full py-3.5 rounded-2xl bg-gradient-cta text-white font-semibold text-center shadow-soft-rose flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>ค้นหาจุดจำหน่าย & ตู้ TCP</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
