import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "হোম", href: "#hero" },
    { title: "সার্ভিস", href: "#services" },
    { title: "প্রজেক্ট", href: "#projects" },
    { title: "ফিডব্যাক", href: "#feedback" },
    { title: "যোগাযোগ", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Logo size={36} />
          <span className="text-3xl font-black tracking-tighter text-white uppercase">
            ᴀᴅᴜɴᴇ𝕩
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/50 hover:text-white transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.title}
            </motion.a>
          ))}
          <motion.button
            className="px-8 py-2.5 border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = "tel:+8809638451975"}
          >
            Call Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-lg font-medium text-white/80"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <button className="w-full py-3 bg-primary text-secondary rounded-xl font-bold mt-2" onClick={() => { setIsOpen(false); window.location.href = "tel:+8809638451975"; }}>
                Call Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
