import { motion } from "motion/react";
import { Laptop, Palette, Zap, Globe, Smartphone, BarChart } from "lucide-react";

const services = [
  {
    title: "ওয়েব ডেভেলপমেন্ট",
    desc: "আধুনিক প্রযুক্তির মাধ্যমে আপনার ব্যবসার জন্য উচ্চ মানসম্পন্ন ওয়েবসাইট তৈরি করি।",
    icon: Laptop,
    tags: ["React", "Vite", "Typescript"]
  },
  {
    title: "UI/UX ডিজাইন",
    desc: "আপনার ইউজারদের জন্য চমৎকার অভিজ্ঞতা এবং আধুনিক ডিজাইনের নিশ্চয়তা দিই।",
    icon: Palette,
    tags: ["Figma", "Branding", "UI"]
  },
  {
    title: "পিপিএ (PWA)",
    desc: "অফলাইন সাপোর্ট এবং অ্যাপের মতো অভিজ্ঞতা দিতে প্রগ্রেসিভ ওয়েব অ্যাপ ডেভেলপমেন্ট।",
    icon: Smartphone,
    tags: ["Offline", "TWA", "Performance"]
  },
  {
    title: "এস ই ও (SEO)",
    desc: "আপনার ওয়েবসাইট সার্চ রেজাল্টে সবার উপরে নিয়ে আসতে প্রফেশনাল এসইও সার্ভিস।",
    icon: BarChart,
    tags: ["Ranking", "Keywords", "Audit"]
  },
  {
    title: "ডিজিটাল ব্র্যান্ডিং",
    desc: "সোশ্যাল মিডিয়া এবং ইন্টারনেটে আপনার ব্র্যান্ড ভ্যালু বাড়াতে আমরা কাজ করি।",
    icon: Zap,
    tags: ["Marketing", "Ads", "Content"]
  },
  {
    title: "স্পিড অপ্টিমাইজেশন",
    desc: "ওয়েবসাইটের লোডিং স্পিড বৃদ্ধি করে ইউজারদের বিরক্তি কমাতে সাহায্য করি।",
    icon: Globe,
    tags: ["Lighthouse", "Assets", "Caching"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.p 
              className="text-primary font-bold tracking-[0.6em] uppercase text-[10px] mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Expertise
            </motion.p>
            <motion.h2 
              className="text-5xl md:text-7xl font-light tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              আমাদের <span className="italic font-serif text-white/80">সার্ভিসসমূহ</span>
            </motion.h2>
          </div>
          <div className="max-w-sm">
             <p className="text-white/30 text-sm leading-relaxed">
               আমরা আপনার ব্যবসার প্রতিটি দিককে ডিজিটালি অপ্টিমাইজড করার জন্য কাজ করি।
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="p-12 group hover:bg-white inline-block transition-all duration-500 border-r border-b border-white/10 hover:text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl font-serif italic mb-10 text-white/10 group-hover:text-black/10 transition-colors">
                0{i + 1}.
              </div>
              
              <h3 className="text-2xl font-bold mb-6 italic font-serif tracking-tight">{service.title}</h3>
              <p className="text-white/40 group-hover:text-black/60 text-sm leading-relaxed mb-10 font-light">
                {service.desc}
              </p>
              
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-black/20 flex items-center justify-center">
                    <service.icon size={14} className="group-hover:text-black transition-colors" />
                 </div>
                 <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 group-hover:opacity-100">Learn More</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
