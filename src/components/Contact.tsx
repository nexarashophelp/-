import { motion } from "motion/react";
import { Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.p 
              className="text-primary font-bold tracking-[0.6em] uppercase text-[10px] mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.p>
            <motion.h2 
              className="text-5xl md:text-7xl font-light tracking-tight mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              আমাদের সাথে <br /><span className="italic font-serif text-white/80">যোগাযোগ করুন</span>
            </motion.h2>
            <p className="text-white/40 text-lg mb-12 font-light leading-relaxed">
              আপনার প্রজেক্ট নিয়ে আলোচনা করতে বা যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করতে পারেন। আমরা ২৪/৭ আছি আপনার অপেক্ষায়।
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Phone</p>
                  <p className="text-white/80 font-medium">+880 9638-451975</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Address</p>
                  <p className="text-white/80 font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            className="editorial-glass p-10 md:p-14 rounded-[3rem]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-white text-black font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-primary transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
