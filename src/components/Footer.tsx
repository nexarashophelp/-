import { motion } from "motion/react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <Logo size={40} />
              <span className="text-4xl font-black tracking-tighter text-white uppercase">
                ᴀᴅᴜɴᴇ𝕩
              </span>
            </div>
            <p className="text-white/30 max-w-sm mb-12 leading-relaxed font-light">
              We blend technical precision with artistic vision to create digital products that don't just function—they resonate.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-white/20">Sitemap</h4>
            <ul className="space-y-6">
              {["সার্ভিসসমূহ", "প্রজেক্ট", "ব্লগ", "যোগাযোগ"].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-white transition-colors text-sm font-light tracking-wide">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-white/20">Contact</h4>
            <ul className="space-y-6 text-sm text-white/40 font-light tracking-wide">
              <li>Call: +880 9638-451975</li>
              <li className="italic font-serif">Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">
            © {currentYear} ᴀᴅᴜɴᴇ𝕩 CREATIVE LABS.
          </p>
          <div className="flex items-center gap-6 text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">
             <span>Terms</span>
             <span>Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
