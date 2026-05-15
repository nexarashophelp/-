/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-primary selection:text-secondary bg-[#050505]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Background Decorative Blurs */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-0" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#3a1a3a]/20 rounded-full blur-[120px] pointer-events-none -z-0" />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Editorial Separator */}
        <div className="px-10">
            <div className="border-t border-white/10 py-12 flex justify-between items-center text-[10px] uppercase tracking-[0.5em] font-bold text-white/20">
               <span>Pioneering Digital Craft</span>
               <div className="flex gap-12">
                   <span>Est. 2021</span>
                   <span>HQ: Dhaka</span>
               </div>
            </div>
        </div>

        <Services />
        <Contact />

        {/* Dynamic CTA */}
        <section className="py-40">
          <div className="max-w-5xl mx-auto px-10">
            <motion.div 
              className="editorial-glass p-20 md:p-32 rounded-[3.5rem] relative overflow-hidden text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-editorial-h1 mb-10">
                আপনার ব্যবসাকে <br /> <span className="italic font-serif text-white/90">ডিজিটালি রূপান্তর</span> করুন.
              </h2>
              <p className="text-white/40 mb-16 max-w-xl mx-auto font-light leading-relaxed">
                আমাদের সাথে আপনার ডিজিটাল যাত্রা শুরু করুন আজই। প্রফেশনাল ওয়েবসাইট এবং ব্র্যান্ডিং এর মাধ্যমে নিজেকে এক ধাপ এগিয়ে রাখুন।
              </p>
              
              <motion.a
                href="tel:+8809638451975"
                className="inline-flex items-center gap-4 px-16 py-6 bg-white text-black font-bold rounded-full text-xs uppercase tracking-widest hover:bg-primary transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Now
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
