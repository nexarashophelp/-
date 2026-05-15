import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const phoneNumber = "+8801575830451";
  const waUrl = `https://wa.me/${phoneNumber}`;

  return (
    <section id="hero" className="relative min-h-screen pt-40 pb-24 overflow-hidden flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg -z-10" />
      
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-12 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-[11px] uppercase tracking-[0.6em] text-primary mb-8 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Digital Solution Architecture
          </motion.h2>
          
          <h1 className="text-editorial-h1 mb-10">
            আপনার ব্যবসাকে <br />
            <span className="italic font-serif text-white/90">নতুন উচ্চতায়</span> <br />
            নিয়ে চলুন.
          </h1>
          
          <p className="text-white/40 text-xl max-w-xl mb-12 leading-relaxed font-light">
            We blend technical precision with artistic vision to create digital products that don't just function—they resonate. Your vision, engineered by ᴀᴅᴜɴᴇ𝕩.
          </p>
          
          <div className="flex flex-wrap gap-8">
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              হোয়াটসঅ্যাপ করুন
            </motion.a>
            
            <motion.button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 border border-white/20 rounded-full font-bold text-xs text-white uppercase tracking-widest hover:border-white transition-all flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              বিস্তারিত জানুন
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </motion.button>
          </div>
        </motion.div>

        {/* Informational Column (Editorial Sidebar) */}
        <div className="lg:col-span-4 space-y-8 hidden lg:block">
          <motion.div 
            className="editorial-glass p-10 rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-4xl font-serif italic mb-4 text-primary opacity-60">01.</div>
            <h3 className="text-xl font-bold mb-4">Software Development</h3>
            <p className="text-sm text-white/30 leading-relaxed font-light">Custom enterprise solutions tailored to your unique operational scale and complexity.</p>
          </motion.div>

          <motion.div 
            className="editorial-glass p-10 rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-4xl font-serif italic mb-4 text-primary opacity-60">02.</div>
            <h3 className="text-xl font-bold mb-4">Visual Identity</h3>
            <p className="text-sm text-white/30 leading-relaxed font-light">Strategic branding that captures the essence of your business in every single pixel.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
